import cates from './cates';
import extTranslationMap from './langs';
import codeSnippets from './snippets';
import extGenerators from './generators';
import arduinoSources from './arduinosources';
import facepanels from './facepanels';
import extHandler from './exthandler';

const extSources = {
    arduino: arduinoSources
};




! function(global) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
        if (inModule) {
            module.exports = runtime
        }
        return
    }
    runtime = global.regeneratorRuntime = inModule ? module.exports || {} : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator
    }
    runtime.wrap = wrap;

    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            }
        } catch (err) {
            return {
                type: "throw",
                arg: err
            }
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function() {
        return this
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
            prototype[method] = function(arg) {
                return this._invoke(method, arg)
            }
        })
    }
    runtime.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false
    };
    runtime.mark = function(genFun) {
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
        } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction"
            }
        }
        genFun.prototype = Object.create(Gp);
        return genFun
    };
    runtime.awrap = function(arg) {
        return {
            __await: arg
        }
    };

    function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
                reject(record.arg)
            } else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                    return Promise.resolve(value.__await).then(function(value) {
                        invoke("next", value, resolve, reject)
                    }, function(err) {
                        invoke("throw", err, resolve, reject)
                    })
                }
                return Promise.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped;
                    resolve(result)
                }, function(error) {
                    return invoke("throw", error, resolve, reject)
                })
            }
        }
        var previousPromise;

        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new Promise(function(resolve, reject) {
                    invoke(method, arg, resolve, reject)
                })
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
        }
        this._invoke = enqueue
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this
    };
    runtime.AsyncIterator = AsyncIterator;
    runtime.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next()
        })
    };

    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) {
                throw new Error("Generator is already running")
            }
            if (state === GenStateCompleted) {
                if (method === "throw") {
                    throw arg
                }
                return doneResult()
            }
            context.method = method;
            context.arg = arg;
            while (true) {
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult
                    }
                }
                if (context.method === "next") {
                    context.sent = context._sent = context.arg
                } else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg
                    }
                    context.dispatchException(context.arg)
                } else if (context.method === "return") {
                    context.abrupt("return", context.arg)
                }
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) {
                        continue
                    }
                    return {
                        value: record.arg,
                        done: context.done
                    }
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    context.method = "throw";
                    context.arg = record.arg
                }
            }
        }
    }

    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            context.delegate = null;
            if (context.method === "throw") {
                if (delegate.iterator.return) {
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") {
                        return ContinueSentinel
                    }
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return ContinueSentinel
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel
        }
        if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined
            }
        } else {
            return info
        }
        context.delegate = null;
        return ContinueSentinel
    }
    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator";
    Gp[iteratorSymbol] = function() {
        return this
    };
    Gp.toString = function() {
        return "[object Generator]"
    };

    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) {
            entry.catchLoc = locs[1]
        }
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3]
        }
        this.tryEntries.push(entry)
    }

    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record
    }

    function Context(tryLocsList) {
        this.tryEntries = [{
            tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true)
    }
    runtime.keys = function(object) {
        var keys = [];
        for (var key in object) {
            keys.push(key)
        }
        keys.reverse();
        return function next() {
            while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next
                }
            }
            next.done = true;
            return next
        }
    };

    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
                return iteratorMethod.call(iterable)
            }
            if (typeof iterable.next === "function") {
                return iterable
            }
            if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                        while (++i < iterable.length) {
                            if (hasOwn.call(iterable, i)) {
                                next.value = iterable[i];
                                next.done = false;
                                return next
                            }
                        }
                        next.value = undefined;
                        next.done = true;
                        return next
                    };
                return next.next = next
            }
        }
        return {
            next: doneResult
        }
    }
    runtime.values = values;

    function doneResult() {
        return {
            value: undefined,
            done: true
        }
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for (var name in this) {
                    if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                        this[name] = undefined
                    }
                }
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
                throw rootRecord.arg
            }
            return this.rval
        },
        dispatchException: function(exception) {
            if (this.done) {
                throw exception
            }
            var context = this;

            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    context.method = "next";
                    context.arg = undefined
                }
                return !!caught
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") {
                    return handle("end")
                }
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) {
                            return handle(entry.catchLoc, true)
                        } else if (this.prev < entry.finallyLoc) {
                            return handle(entry.finallyLoc)
                        }
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) {
                            return handle(entry.catchLoc, true)
                        }
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) {
                            return handle(entry.finallyLoc)
                        }
                    } else {
                        throw new Error("try statement without catch or finally")
                    }
                }
            }
        },
        abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                finallyEntry = null
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel
            }
            return this.complete(record)
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") {
                throw record.arg
            }
            if (record.type === "break" || record.type === "continue") {
                this.next = record.arg
            } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end"
            } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc
            }
            return ContinueSentinel
        },
        finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel
                }
            }
        },
        "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry)
                    }
                    return thrown
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") {
                this.arg = undefined
            }
            return ContinueSentinel
        }
    }
}(function() {
    return this || typeof self === "object" && self
}() || Function("return this")());

import {
    fetch,
    Headers,
    Request
} from './res/52fb2c61a72d44609195107331a24e1d.js';
import RTC from './res/ec001cf72367401a98c09583514d327c.js';

const getCookieByName = (name) => {
    let arr;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

const getStorageByName = (name) => {
    if (!window.localStorage) {
        return;
    }
    const data = localStorage.getItem(name);
    return JSON.parse(data);
}

// 语音识别结果句尾是否需要携带标点符号
var isHideSignal = true;
const result = {
    // 语音识别结果
    DisplayText: '',
    // 文字识别结果
    imageToTextResult: '',
    // 图片分析结果
    imageAnalysisResult: {
        categories: [],
        brands: [],
        description: {}
    },
    // 年龄识别结果
    faceDetectionAgeResult: '',
    // 头发颜色识别结果
    hairColor: '',
    //通用物体检测结果
    generalObject: '',
    // 眼镜类型识别结果x
    faceDetectionGlassesTypeResult: '',
    // 笑容程度识别结果
    faceDetectionSmileResult: '',
    // 头部姿态识别结果
    faceDetectionHeadPostResult: {
        'pitch': 0,
        'yaw': 0,
        'roll': 0
    },
    // 面部遮挡结果
    occlusionResult: {
        eyeOccluded: false,
        foreheadOccluded: false,
        mouthOccluded: false
    },
    // 文本分析结果
    sentiment: '',
    // 语种检测结果
    detectLang: '',
    // 性别检测结果
    faceDetectionGenderResult: '',
    // 情绪分析结果
    emotionResult: {
        'anger': 0,
        'contempt': 0,
        'disgust': 0,
        'fear': 0,
        'happiness': 0,
        'neutral': 0,
        'sadness': 0,
        'surprise': 0
    }

}
// 函数节流
const throttle = () => {
    let last = 0,
        timer = null

    return function(fn, delay = 3000) {
        let context = this
        let args = arguments
        let now = +new Date()

        if (now - last < delay) {
            clearTimeout(timer)
            timer = setTimeout(function() {
                last = now
                fn.apply(context, args)
            }, delay)
        } else {
            last = now
            fn.apply(context, args)
        }
    }
}
class Ext {
    constructor() {
        // 请求结果
        this.result = result;
        // UI服务
        this.UIService = null;
        //  视频截图和录音服务
        this.RTCService = null;
        // 帐号服务
        this.accountService = null;
        // 节流服务
        this.throttleService = throttle();
        // 扩展ID
        this.extId = 'cognitive';
        // 用户信息
        this.userInfo = {

        };
        // 积木相关状态
        this.blockStatus = {
            // opcode : true | false  opcode为true时，积木正在运行
        }
    }
    init(app) {
        this.UIService = app.getService('system.ui');
        this.RTCService = this.getRTCService(app);
        this.accountService = app.getService('account');
    }
    setBlockStatus(opcode, isRunning) {
        this.blockStatus[opcode] = isRunning;
    }
    handleError(err) {
        const errors = [
            `${this.extId}.input_info_error`,
            `${this.extId}.err_request_fail`,
            `${this.extId}.err_not_login`,
            `${this.extId}.err_count_limit`,
            `${this.extId}.err_network`,
            `${this.extId}.err_request_timeout`,
        ]
        if (err && err.toString && errors.includes(err.toString())) {
            this.throttleService(this.showInfoByText.bind(this, err.toString()))
        }
    }
    // 获取用户相关信息
    setUserInfo(userInfo) {
        this.userInfo = userInfo
    }
    getValueByPath(obj, path) {
        const arr = path.split('.')
        if (!Array.isArray(arr)) return false;
        for (let item of arr) {
            if (!obj) return false;
            obj = obj[item];
        }
        return obj
    }
    // 处理客户端请求
    handleResult(result, path) {
        return new Promise((resolve, reject) => {
            const code = (result.code).toString();
            // code 为0 时，服务器正常返回
            if (code === '0') {
                const value = this.getValueByPath(result, path);
                if (value || value === 0) {
                    return resolve(value)
                } else {
                    // this.UIService.message(`${this.extId}.input_info_error`, 'info')
                    return reject(`${this.extId}.input_info_error`)
                }
            } else {
                // code不为0时，对应的提示信息
                const codeToText = {
                    '-1': `${this.extId}.err_request_fail`,
                    '-2': `${this.extId}.err_request_fail`,
                    '101': `${this.extId}.err_request_fail`,
                    '102': `${this.extId}.err_request_fail`,
                    '40001': `${this.extId}.err_not_login`,
                    '40003': `${this.extId}.input_info_error`,
                    '40004': `${this.extId}.err_count_limit`,
                };
                return reject(codeToText[(code).toString()])
            }
        })
    }
    request(options) {
        const {
            method = 'post', headers, body, url
        } = options;
        return Promise.race([
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(`${this.extId}.err_request_timeout`)
                }, 5000)
            }), fetch(url, {
                method,
                headers,
                body
            })
        ]).then((res) => {
            return res.json();
        })
    }
    // 获取请求相关API参数
    getApiService(key) {
        const host = this.userInfo['isIntl'] ? 'https://eu.msapi.makeblock.com' : 'https://msapi.makeblock.com';
        // const host = 'https://msapi-test.makeblock.com'
        // const host = 'http:127.0.0.1:3003';
        const commonHeaders = {
            'token': this.userInfo['token'],
            'Content-Type': 'application/octet-stream',
            'accesstoken': getCookieByName('accesstoken') || getStorageByName('accesstoken')
        }
        var API = {
            'speechToText': (language, buffer) => {
                const url = host + '/ms/bing_speech/interactive';
                const headers = Object.assign(commonHeaders, {
                    lang: language,
                    'Content-Type': 'audio/wav; codec=audio/pcm; samplerate=16000'
                });
                return this.request({
                    url: url,
                    headers: headers,
                    body: buffer
                });
            },
            'imageAnalysis': (buffer) => {
                const url = host + '/ms/computer_vision/advancedAnalyze';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'imageToText1': (language, buffer) => {
                const url = host + '/ms/computer_vision/ocr';
                const headers = Object.assign(commonHeaders, {
                    lang: language,
                });
                return this.request({
                    url: url,
                    headers: headers,
                    body: buffer
                });
            },
            'imageToText2': (buffer) => {
                const url = host + '/ms/computer_vision/handwrite';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'getHandleResult': (value) => {
                const url = host + '/ms/computer_vision/handwrite_result';
                const headers = Object.assign(commonHeaders, {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                });
                return this.request({
                    url: url,
                    headers: headers,
                    body: `operation_location=${value}`
                });
            },
            'age': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'emotion': (buffer) => {
                const url = host + '/ms/emotion_api/recognize';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'gender': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'glassesType': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'isSmile': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'headPose': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'hairColor': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'occlusion': (buffer) => {
                const url = host + '/ms/face_api/detect';
                return this.request({
                    url: url,
                    headers: commonHeaders,
                    body: buffer
                });
            },
            'sentiment': (text, lang) => {
                const url = host + '/ms/computer_vision/sentiment';
                const headers = Object.assign(commonHeaders, {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                });
                return this.request({
                    url: url,
                    headers: headers,
                    body: `text=${text}&lang=${lang}`
                });
            },
            'detectLang': (text) => {
                const url = host + '/ms/computer_vision/detectLang';
                const headers = Object.assign(commonHeaders, {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                });
                return this.request({
                    url: url,
                    headers: headers,
                    body: `text=${text}`
                });
            },
        }
        return API[key];
    }
    // 初始化服务
    getRTCService(app) {
        var RTCService = RTC;
        const mediaServiceInMobile = app.getService('mobile.media');
        const envService = app.getService('env');
        // 若是移动端，则重写相关API
        if (mediaServiceInMobile) {
            RTCService.open = mediaServiceInMobile.open;
            RTCService.close = mediaServiceInMobile.close;
            RTCService.capture = mediaServiceInMobile.capture;
            RTCService.recorder = mediaServiceInMobile.recorder;
        }
        // 设置视频或录音的多语言
        RTCService.setFmtMsg((data) => {
            return app.formatString(`${this.extId}.${data.id}`);
        });
        const lang = envService.getLocaleLang();
        RTCService.getLang(() => lang || 'zh');
        return RTCService;
    }
    showInfoByText(text) {
        return this.UIService.message(text, 'info');
    }
    run(opcode) {
        return new Promise((resolve, reject) => {
            if (!navigator.onLine) {
                return reject(`${this.extId}.err_network`)
            }
            if (!this.blockStatus[opcode] && this.userInfo.isLogin) {
                this.setBlockStatus(opcode, true);
                return resolve()
            }
            if (this.userInfo.isLogin === false) {
                this.throttleService(this.showInfoByText.bind(this, `${this.extId}.err_not_login`))
                return reject()
            }
            if (this.blockStatus[opcode]) {
                return reject()
            }
        })
    }
}
var Cognitive = new Ext();

const disableBlocks = {
    debug: [],
    upload: []
};

const mustLoginBlocks = [];

const triggerBlocksStatus = async (mode, app) => {
    try {
        if (app && app.workspace) {
            if (mode === 'debug') {
                app.workspace.enableBlocks(...disableBlocks.upload);
                app.workspace.disableBlocks(...disableBlocks.debug);
            } else if (mode === 'upload') {
                app.workspace.enableBlocks(...disableBlocks.debug);
                app.workspace.disableBlocks(...disableBlocks.upload);
            } else {
                app.workspace.enableBlocks(...disableBlocks.upload);
                app.workspace.enableBlocks(...disableBlocks.debug);
            }
            const service = app.getService('account');
            const isLogin = await service.isLogin();
            if (!isLogin) {
                app.workspace.disableBlocks(...mustLoginBlocks);
            }
        }
    } catch (err) {
        console.warn(err)
    }
};



class ExtCognitive {

    constructor() {
        this.funcs = {
            'beginSpeechToText': {
                onRun: async (args, app, device, block) => {
                    const {
                        LANGUAGE,
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.recorder(TIMER)
                    }).then((res) => {
                        return res.toBuffer();
                    }).then((buffer) => {
                        return Cognitive.getApiService('speechToText')(LANGUAGE, buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.DisplayText');
                    }).then((value) => {
                        result['DisplayText'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1596095748995': {
                onRun: (args, app, device, block) => {
                    isHideSignal = args.isHideSignal == 'true'
                    // JavaScript code
                }
            },
            'speechToTextResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(opcode).then(() => {
                        if (isHideSignal) {
                            return result['DisplayText'].replace(/[\?|？|\.|。|!|！|,|，]$/, '');
                        } else {
                            return result['DisplayText']
                        }
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'beginImageToText': {
                onRun: async (args, app, device, block) => {
                    const {
                        LANGUAGE,
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        });
                    }).then((buffer) => {
                        return Cognitive.getApiService('imageToText1')(LANGUAGE, buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.regions');
                    }).then((data) => {
                        let text = ''
                        if (Array.isArray(data) && data.length !== 0) {
                            data.forEach((region) => {
                                region.lines.forEach((line) => {
                                    line.words.forEach((word) => {
                                        text += word.text;
                                    })
                                })
                            })
                        }
                        result['imageToTextResult'] = text;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'beginHandwrittenToText': {
                onRun: async (args, app, device, block) => {
                    const {
                        LANGUAGE,
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('imageToText2')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.operation-location');
                    }).then((url) => {
                        return Cognitive.getApiService('getHandleResult')(url)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.recognitionResult');
                    }).then((data) => {
                        let text = '';
                        data.lines.forEach((value) => {
                            text += value.text;
                        })
                        result['imageToTextResult'] = text;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'imageToTextResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(opcode).then(() => {
                        return Cognitive.result['imageToTextResult'];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                },
                onMonitor: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(block).then(() => {
                        return Cognitive.result['imageToTextResult'];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1566749887154': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER,
                        TYPE
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        console.log(new Date().getTime(), 'start');
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        console.log(new Date().getTime(), 'request');
                        return Cognitive.getApiService('imageAnalysis')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data');
                    }).then((value) => {
                        console.log(new Date().getTime(), value)
                        result['imageAnalysisResult'] = value;
                    }).catch((err) => {
                        console.log(err);
                        Cognitive.handleError(err);
                    }).finally(() => {
                        console.log(new Date().getTime(), 'end');
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1566750695965': {
                onRun: (args, app, device, block) => {
                    const {
                        TYPE
                    } = args;
                    const {
                        opcode
                    } = block;
                    const {
                        categories,
                        brands,
                        description
                    } = result['imageAnalysisResult'];
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        // 获取返回图像类别中可能性最大的项
                        const getMostLikelyItem = (list, key) => {
                            if (Array.isArray(list) && list.length !== 0) {
                                let scores = list.map((item) => item[key]);
                                let maxScore = Math.max.apply(null, scores);
                                return list.filter((item) => item[key] === maxScore)[0];
                            }
                            return false;
                        }
                        let mostLikelyCategoryItem = getMostLikelyItem(categories, 'score');
                        if (TYPE === 'categories') {
                            if (mostLikelyCategoryItem) {
                                return mostLikelyCategoryItem['name'];
                            }
                            return ''
                        }
                        if (TYPE === 'brands') {
                            let mostLikelyBradeItem = getMostLikelyItem(brands, 'confidence');
                            if (mostLikelyBradeItem) {
                                return mostLikelyBradeItem['name']
                            }
                            return ''
                        }
                        if (TYPE === 'people_') {
                            let celebrities = mostLikelyCategoryItem.detail && mostLikelyCategoryItem.detail['celebrities'];
                            let mostLikelyPeopleItem = getMostLikelyItem(celebrities, 'confidence');
                            if (mostLikelyPeopleItem) {
                                return mostLikelyPeopleItem['name']
                            }
                            return ''
                        }
                        if (TYPE === 'landmarks') {
                            let landmarks = mostLikelyCategoryItem.detail && mostLikelyCategoryItem.detail['landmarks'];
                            let mostLikelyLandmarksItem = getMostLikelyItem(landmarks, 'confidence');
                            if (mostLikelyLandmarksItem) {
                                return mostLikelyLandmarksItem['name']
                            }
                            return ''
                        }
                        if (TYPE === 'description') {
                            let mostLikelyDescItem = getMostLikelyItem(description.captions, 'confidence');
                            if (mostLikelyDescItem) {
                                return mostLikelyDescItem['text']
                            }
                            return ''
                        }
                        return ''
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590654305900': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER,
                        TYPE
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('imageAnalysis')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.tags');
                    }).then((value) => {
                        result['generalObject'] = value;
                    }).catch((err) => {
                        console.log(err);
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590654307561': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(opcode).then(() => {
                        const list = Cognitive.result['generalObject'];
                        let result = [];
                        if (Array.isArray(list)) {
                            for (let index in list) {
                                if (index > 4) {
                                    break;
                                }
                                const item = list[index];
                                result.push(item.name);
                            }
                        }
                        return result.join(',');
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'beginFaceDetection': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('age')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.age');
                    }).then((value) => {
                        result['faceDetectionAgeResult'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'faceDetectionResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(opcode).then(() => {
                        return result['faceDetectionAgeResult'];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                },
                onMonitor: (args, app, device, block) => {
                    return Cognitive.run(block).then(() => {
                        return Cognitive.result['faceDetectionAgeResult'];
                    })
                }
            },
            'beginEmotionRecognition': {
                onRun: async (args, app, device, block) => {
                    const {
                        LANGUAGE,
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        });
                    }).then((buffer) => {
                        return Cognitive.getApiService('emotion')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.scores');
                    }).then((value) => {
                        result['emotionResult'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'emotionValue': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        if (result.emotionResult && result.emotionResult[args.TYPE]) {
                            return (parseFloat(result.emotionResult[args.TYPE]) * 100).toFixed(0);
                        }
                        return '0';
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'emotionType': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        let type = args.TYPE;
                        let value = result.emotionResult[type];
                        if (value === 0) {
                            return false;
                        }
                        for (let key in result.emotionResult) {
                            if (result.emotionResult[key] > value) {
                                return false;
                            }
                        }
                        return true;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'beginFaceToGender': {
                onRun: async (args, app, device, block) => {
                    const {
                        LANGUAGE,
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('gender')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.gender');
                    }).then((value) => {
                        result['faceDetectionGenderResult'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'faceToGenderResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(opcode).then(() => {
                        return result['faceDetectionGenderResult'];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                },
                onMonitor: (args, app, device, block) => {
                    return Cognitive.run(block).then(() => {
                        return Cognitive.result['faceDetectionGenderResult'];
                    })
                }
            },
            'beginFaceToGlassType': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('glassesType')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.glasses');
                    }).then((value) => {
                        const glassMap = {
                            Sunglasses: 'sunglasses',
                            ReadingGlasses: 'reading glasses',
                            SwimmingGoggles: 'swimming goggles',
                            NoGlasses: 'no glasses',
                        }
                        result['faceDetectionGlassesTypeResult'] = glassMap[value];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'faceToGlassTypeResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        return result.faceDetectionGlassesTypeResult === args.TYPE
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'beginFaceToIsSmile': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('isSmile')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.smile');
                    }).then((value) => {
                        result['faceDetectionSmileResult'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'faceToIsSmileResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    return Cognitive.run(opcode).then(() => {
                        return parseFloat(result.faceDetectionSmileResult * 100).toFixed(0)
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'beginFaceToHeadPose': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        });
                    }).then((buffer) => {
                        return Cognitive.getApiService('headPose')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.headPose');
                    }).then((value) => {
                        result['faceDetectionHeadPostResult'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'faceToHeadPoseResult': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        return result.faceDetectionHeadPostResult[args.TYPE];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590547868949': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('hairColor')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.hair.hairColor.0.color');
                    }).then((value) => {
                        result['hairColor'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590547872342': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        return result['hairColor']
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590548187016': {
                onRun: async (args, app, device, block) => {
                    const {
                        TIMER
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.RTCService.capture(TIMER, {
                            dataType: 'buffer'
                        })
                    }).then((buffer) => {
                        return Cognitive.getApiService('occlusion')(buffer)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.0.faceAttributes.occlusion');
                    }).then((value) => {
                        result['occlusionResult'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590548264613': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        return result.occlusionResult[args.TYPE];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590548416527': {
                onRun: async (args, app, device, block) => {
                    const {
                        text,
                        lang
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.getApiService('sentiment')(text, lang)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.documents.0.score');
                    }).then((value) => {
                        let res = 'neutral';
                        if (value > 0.5) {
                            res = 'positive'
                        };
                        if (value < 0.5) {
                            res = 'negative'
                        };
                        result['sentiment'] = res;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590548515617': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        return result['sentiment'];
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590548564704': {
                onRun: async (args, app, device, block) => {
                    const {
                        text
                    } = args;
                    const {
                        opcode
                    } = block;
                    return await Cognitive.run(opcode).then(() => {
                        return Cognitive.getApiService('detectLang')(text)
                    }).then((res) => {
                        return Cognitive.handleResult(res, 'data.documents.0.detectedLanguages.0.name');
                    }).then((value) => {
                        result['detectLang'] = value;
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            },
            'BLOCK_1590548610070': {
                onRun: (args, app, device, block) => {
                    const {
                        opcode
                    } = block;
                    Cognitive.setBlockStatus(opcode, false);
                    return Cognitive.run(opcode).then(() => {
                        return result['detectLang']
                    }).catch((err) => {
                        Cognitive.handleError(err);
                    }).finally(() => {
                        Cognitive.setBlockStatus(opcode, false);
                    })
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "Cognitive",
            "targets": [{
                "name": "sprites",
                "options": {
                    "upload": {}
                }
            }],
            "codeTypes": [],
            "version": "0.5.4",
            "platform": [
                "mblockweb",
                "mblockpc",
                "mblockapp"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "generatorStartBlocks": [],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [],
            "disabledOnline": []
        };
    }

    getHandler() {
        if (typeof extHandler === 'object') {
            return extHandler;
        } else if (typeof extHandler === 'function') {
            return new extHandler();
        }
    }
}

export default ExtCognitive;