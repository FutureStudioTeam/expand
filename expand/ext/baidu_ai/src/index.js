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
} from 'https://mblock-expanded.oss-cn-shenzhen.aliyuncs.com/52fb2c61a72d44609195107331a24e1d.js';
import RTC from './res/ecbb1197603c4da6a354944ced43533b.js';
// 全局变量，用于缓存app
let _appContext = null;
// 手势识别结果映射
const gestureMap = {
    'One': '1',
    'Five': '5',
    'Fist': '拳头',
    'Ok': 'Ok',
    'Prayer': '祈祷',
    'Congratulation': '作揖',
    'Honour': '作别',
    'Heart_single': '单手比心',
    'Thumb_up': '点赞',
    'Thumb_down': 'Diss',
    'ILY': '我爱你',
    'Palm_up': '掌心向上',
    'Heart_1': '双手比心',
    'Heart_2': '双手比心',
    'Heart_3': '双手比心',
    'Two': '2',
    'Three': '3',
    'Four': '4',
    'Six': '6',
    'Seven': '7',
    'Eight': '8',
    'Nine': '9',
    'Rock': 'Rock',
    'Insult': '竖中指',
}
// 词法分析结果映射
const lexerMap = {
    'n': '普通名词',
    'f': '方位名词',
    's': '处所名词',
    't': '时间名词',
    'nr': '人名',
    'ns': '地名',
    'nt': '机构团体名',
    'nw': '作品名',
    'nz': '其它专名',
    'v': '普通动词',
    'vd': '动副词',
    'vn': '名动词',
    'a': '形容词',
    'ad': '副形词',
    'an': '名形词',
    'd': '副词',
    'm': '数量词',
    'q': '量词',
    'r': '代词',
    'p': '介词',
    'c': '连词',
    'u': '助词',
    'xc': '其他虚词',
    'w': '标点符号',
    'PER': '人名',
    'LOC': '地名',
    'ORG': '机构名',
    'TIME': '时间'
}
// 扩展ID
const extId = 'baidu_ai';
// 用户是否登录
var isUserLogin = false;
var userInfo = {};
// 移动端构建环境
var buildEnvironmentFromMobile = 'release';
// 积木状态，用于区分当前积木是否正在运行
const blockStates = {};
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
// 运行积木时的未登录提示
const showLoginInfo = async () => {
    const service = await _appContext.getService('system.ui');
    return await service.message(`${extId}.err_not_login`, 'info')
}
// 函数节流
const _throttle = () => {
    let last = 0,
        timer = null

    return async function(fn, delay = 3000) {
        let context = this
        let args = arguments
        let now = +new Date()

        if (now - last < delay) {
            clearTimeout(timer)
            timer = setTimeout(async function() {
                last = now
                await fn.apply(context, args)
            }, delay)
        } else {
            last = now
            await fn.apply(context, args)
        }
    }
}
const throttle = _throttle();

const blockRun = async (code, callback, args = []) => {
    if (blockStates[code]) return;
    blockStates[code] = true;
    try {
        await callback(...args);
    } finally {
        blockStates[code] = false;
    }
}
// 缓存请求结果
const result = {
    // 语音合成结果
    speechText: '',
    // 图片识别结果 
    imageText: '',
    // 物体识别结果
    imageSubstance: '',
    // 手势识别结果
    gesture: '',
    // 人体特征识别结果
    body_attrs: {},
    // 人体关键点识别结果
    body_parts: {},
    // 人流量识别结果
    body_num: '',
    // 词法分析结果
    lexer: [],
    // 词语相似度结果
    word_emb_sim: '',
    // 情感倾向分析结果
    sentiment: [],
    // 情绪分析结果
    emotion: {},
    // 车牌信息识别结果
    carDetect: {
        color: '',
        number: ''
    }

}
// 语音设置
const speechSetting = {
    lan: 'zh', // 固定值zh
    per: 1, // 发音人选择
    spd: 4, // 语速
    ctp: 1, // 客户端类型选择。web端为固定值1
    aue: 6, // 格式  选填
}
// 设置请求头
const reqHeader = (opts = {}) => {
    const headers = new Headers();
    const commonHeader = {
        'Content-Type': 'application/json; charset=utf-8',
        'token': userInfo.token,
        'accesstoken': getCookieByName('accesstoken') || getStorageByName('accesstoken')
    };
    opts = Object.assign({}, commonHeader, opts);
    for (const key in opts) {
        headers.append(key, opts[key]);
    }
    return headers;
};
// 根据路径从对象中获取value
const getValueByPath = (obj, path) => {
    const arr = path.split('.')
    if (!Array.isArray(arr)) return false;
    for (let item of arr) {
        if (!obj) return false;
        obj = obj[item];
    }
    return obj
}
// 处理接口返回结果
const handleResult = async (res, sucess, path, type, fail) => {
    const wordErrorCode = [282300, 282301, 282302, 282303];
    const service = await _appContext.getService('system.ui');
    const code = (res.code).toString();
    // 有返回值
    if (code === '0') {
        // 针对词义相似度异常特殊处理
        if (res.data && wordErrorCode.includes(res.data.error_code)) {
            return await service.message(`${extId}.word_cant_tell`, 'info');
        }
        const value = getValueByPath(res, path);
        if (value || value === 0) {
            return sucess(value)
        } else {
            fail && typeof(fail) === 'function' && fail();
            return await service.message(`${extId}.input_info_error`, 'info')
        }
    }
    // 无返回值
    sucess('');
    const codeToText = {
        '-1': `${extId}.err_request_fail`,
        '-2': `${extId}.err_request_fail`,
        '101': `${extId}.err_request_fail`,
        '102': `${extId}.err_request_fail`,
        '40001': `${extId}.err_not_login`,
        '40003': `${extId}.input_info_error`,
    };
    let text = codeToText[(code).toString()];
    if (code === '40004' && type === 'speech') {
        text = `${extId}.speech_limit`;
    };
    if (code === '40004' && type === 'text') {
        text = `${extId}.text_limit`;
    };
    if (code === '40004' && type === 'image') {
        text = `${extId}.image_limit`;
    };
    if (code === '40004' && type === 'humanBody') {
        text = `${extId}.humanBody_limit`;
    };
    if (code === '40004' && type === 'nlp') {
        text = `${extId}.nlp_limit`;
    };
    return await service.message(text, 'info');
}
// 发起请求
const request = async (opts) => {
    let host = userInfo['isIntl'] ? 'https://eu.msapi.makeblock.com' : 'https://msapi.makeblock.com';
    // 如果是测试环境
    if (window.location.href.includes('test') || buildEnvironmentFromMobile !== 'release') {
        host = 'https://msapi-test.makeblock.com'
    };
    const service = await _appContext.getService('system.ui');
    if (!navigator.onLine) {
        return await service.message(`${extId}.err_network`, 'info')
    }
    let req = {
        method: opts['method'] ? opts['method'] : 'post',
        headers: reqHeader(opts.headers),
        cache: 'no-store',
        body: JSON.stringify(opts.body)
    }
    return Promise.race([
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(`${extId}.err_request_timeout`);
            }, 6000)
        }), fetch(host + opts.url, req)
    ]).then((res) => {
        return res.json();
    }).catch((err) => {
        if (err === `${extId}.err_request_timeout`) {
            service.message(`${extId}.err_request_timeout`, 'info')
        } else {
            service.message(`${extId}.err_request_fail`, 'error');
        }
    })
}
// 语音转文字
const speechToText = async (voiceBuffer, devPid) => {
    const res = await request({
        url: `/baidu/voice/recognize`,
        body: {
            voiceBuffer: Array.prototype.slice.call(new Uint8Array(voiceBuffer)),
            devPid: Number(devPid),
            format: 'pcm',
            rate: 16000,
            channel: 1,
        }
    });
    return await handleResult(res, (data) => {
        return result.speechText = data;
    }, 'data.result.0', 'speech', () => {
        return result.speechText = '';
    })
}
//文字转语音
const textToSpeech = async (text, wait = false) => {
    const res = await request({
        url: `/baidu/voice/text2audio`,
        body: {
            text: text,
            options: speechSetting
        },
    })
    return await handleResult(res, (data) => {
        return RTC.play(RTC.buffer2Url(data), wait);
    }, 'data.data', 'speech')
}
// 图片文字识别
const imageToText = async (image, language_type) => {
    const res = await request({
        url: `/baidu/words/general`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
            langType: language_type
        },
    })
    return await handleResult(res, (data) => {
        return result.imageText = data.map((word) => word['words']).join(',')
    }, 'data.words_result', 'text', () => {
        result.imageText = '';
    })
}
// url图片文字识别
const urlImageToText = async (imageUrl) => {
    const res = await request({
        url: `/baidu/words/generalurl`,
        body: {
            url: imageUrl
        }
    })
    return await handleResult(res, (data) => {
        return result.imageText = data.map((word) => word['words']).join(',')
    }, 'data.words_result', 'text', () => {
        result.imageText = '';
    })
}
// 手写文字识别
const hadleWritingToText = async (image) => {
    const res = await request({
        url: `/baidu/words/handwriting`,
        body: {
            image: image
        }
    })
    return await handleResult(res, (data) => {
        return result.imageText = data.map((word) => word['words']).join(',')
    }, 'data.words_result', 'text', () => {
        return result.imageText = '';
    })
}
// 识别车牌
const carDetect = async (image) => {
    const res = await request({
        url: `/baidu/words/detectCars`,
        body: {
            image: image.replace('data:image/jpeg;base64,', '')
        }
    });
    return await handleResult(res, (data) => {
        return result.carDetect = data.reduce((x, y = {
            color: '',
            number: ''
        }) => {
            return {
                color: x.color + ',' + y.color,
                number: x.number + ',' + y.number
            }
        })
    }, 'data.words_result', 'text', () => {
        // 重置识别结果
        result.carDetect = {
            color: '',
            number: ''
        }
    })
}
// 物体识别
const imageToSubstance = async (type, image) => {
    const arr = ['logoSearch', 'animalDetect', 'plantDetect', 'carDetect']
    const res = await request({
        url: `/baidu/image/detect`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
            type: type,
            baike_num: 1
        }
    })
    if (arr.includes(type)) {
        return await handleResult(res, (data) => {
            return result.imageSubstance = data;
        }, 'data.result.0.name', 'image', () => {
            return result.imageSubstance = '';
        })
    };
    if (type === 'advancedGeneral') {
        return await handleResult(res, (data) => {
            return result.imageSubstance = data;
        }, 'data.result.0.root', 'image', () => {
            return result.imageSubstance = '';
        })
    };
    if (type === 'landmark') {
        return await handleResult(res, (data) => {
            return result.imageSubstance = data;
        }, 'data.result.landmark', 'image', () => {
            return result.imageSubstance = '';
        })
    };
    if (type === 'objectDetect') {
        return await handleResult(res, (data) => {
            let {
                left,
                height
            } = data;
            return result.imageSubstance = `x:${left},y:${height}`
        }, 'data.result', 'image', () => {
            return result.imageSubstance = `x:'',y: ''`
        })
    };
    if (type === 'ingredient') {
        return await handleResult(res, (name) => {
            return result.imageSubstance = name
        }, 'data.result.0.name', 'image', () => {
            return result.imageSubstance = ''
        })
    }
    if (type === 'dishDetect') {
        return await handleResult(res, (name) => {
            return result.imageSubstance = name
        }, 'data.result.0.name', 'image', () => {
            return result.imageSubstance = ''
        })
    }
}
// 人体手势识别
const imageToGesture = async (image) => {
    const res = await request({
        url: `/baidu/body_analysis/gesture`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
        }
    })
    return await handleResult(res, (data) => {
        return result.gesture = data;
    }, 'data.result.0.classname', 'humanBody', () => {
        return result.gesture = ''
    })
};
// 人体特征识别
const imageAttrs = async (image) => {
    const res = await request({
        url: `/baidu/body_analysis/attr`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
        }
    })
    return await handleResult(res, (data) => {
        return result.body_attrs = data;
    }, 'data.person_info.0.attributes', 'humanBody', () => {
        return result.body_attrs = {};
    })
};
// 人体关键点识别
const imageAnalysis = async (image) => {
    const res = await request({
        url: `/baidu/body_analysis/point`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
        }
    })
    return await handleResult(res, (data) => {
        return result.body_parts = data;
    }, 'data.person_info.0.body_parts', 'humanBody', () => {
        return result.body_parts = {};
    })
};
// 人流量识别
const imageToHumanNum = async (image) => {
    const res = await request({
        url: `/baidu/body_analysis/bodynum`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
            options: {
                show: false
            }
        }
    })
    return await handleResult(res, (data) => {
        return result.body_num = data;
    }, 'data.person_num', 'humanBody', () => {
        return result.body_num = '';
    })
};
// 识别人脸情绪
const analysisEmotion = async (image, imageType, options) => {
    const res = await request({
        url: `/baidu/body_analysis/emotion`,
        body: {
            image: image.replace('data:image/jpeg;base64,', ''),
            imageType: imageType,
            options: options
        }
    })
    return await handleResult(res, (data) => {
        return result.emotion = data;
    }, 'data.result.face_list.0.emotion', 'humanBody', () => {
        return result.emotion = {};
    });
}
//  词法分析
const wordAnlysis = async (text) => {
    const res = await request({
        url: `/baidu/nlp/lexer`,
        body: {
            text: text,
        }
    })
    return await handleResult(res, (data) => {
        return result.lexer = data;
    }, 'data.items', 'nlp', () => {
        return result.lexer = [];
    })
}
// 情感倾向分析
const emotionAnlysis = async (text) => {
    const res = await request({
        url: `/baidu/nlp/sentimentclassify`,
        body: {
            text: text
        }
    })
    return await handleResult(res, (data) => {
        return result.sentiment = data;
    }, 'data.items.0.sentiment', 'nlp', () => {
        return result.sentiment = [];
    })
}
// 词义相似度分析
const similarityAnlysis = async (word_1, word_2) => {
    const res = await request({
        url: `/baidu/nlp/wordembsim`,
        body: {
            word_1: word_1,
            word_2: word_2
        }
    })
    return await handleResult(res, (data) => {
        return result.word_emb_sim = data;
    }, 'data.score', 'nlp', () => {
        return result.word_emb_sim = '';
    })
}

const disableBlocks = {
    debug: [],
    upload: ["baidu_ai.BLOCK_1560423221767", "baidu_ai.BLOCK_1560423400710", "baidu_ai.say_text", "baidu_ai.BLOCK_1560423463409", "baidu_ai.BLOCK_1560424027453", "baidu_ai.BLOCK_1560424411359", "baidu_ai.BLOCK_1561624758631", "baidu_ai.BLOCK_1561625370451", "baidu_ai.BLOCK_1561625486745", "baidu_ai.BLOCK_1561625681766", "baidu_ai.BLOCK_1561630499729", "baidu_ai.BLOCK_1561949535035"]
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



class ExtBaiduAi {

    constructor() {
        this.funcs = {
            'BLOCK_1560423221767': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        type,
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const recorderRes = await RTC.recorder(time);
                        const buffer = recorderRes && await recorderRes.toBuffer();
                        if (buffer) {
                            await speechToText(buffer, type);
                        }
                    });
                }
            },
            'BLOCK_1560423400710': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    return result.speechText
                },
                onMonitor: async (app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    return result.speechText
                }
            },
            'say_text': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        text
                    } = args;
                    const {
                        opcode
                    } = block;
                    if (!text) return;
                    await blockRun(opcode, textToSpeech, [text, false]);
                }
            },
            'BLOCK_1560423463409': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        text
                    } = args;
                    const {
                        opcode
                    } = block;
                    if (!text) return;
                    await blockRun(opcode, textToSpeech, [text, true]);
                }
            },
            'BLOCK_1560424027453': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    speechSetting['per'] = args['per'];
                }
            },
            'BLOCK_1560424411359': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        type,
                        num
                    } = args;
                    speechSetting[type] = num;
                }
            },
            'BLOCK_1561624758631': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time,
                        langType
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time);
                        if (!image) return;
                        await imageToText(image, langType)
                    })
                }
            },
            'BLOCK_1561625370451': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    let {
                        url
                    } = args;
                    const {
                        opcode
                    } = block;
                    if (!url) return;
                    url = url.replace(/(^\s*)|(\s*$)/g, "");
                    await blockRun(opcode, urlImageToText, [url])
                }
            },
            'BLOCK_1561625486745': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await imageToText(image)
                    })
                }
            },
            'BLOCK_1561625681766': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    return result.imageText;
                }
            },
            'BLOCK_1575254974753': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await carDetect(image)
                    })
                }
            },
            'BLOCK_1575255036017': {
                onRun: (args, app, device, block) => {
                    const {
                        type
                    } = args;
                    return result.carDetect[type]
                }
            },
            'BLOCK_1561630499729': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time,
                        type
                    } = args;
                    const {
                        opcode
                    } = args;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await imageToSubstance(type, image);
                    })
                }
            },
            'BLOCK_1561949535035': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    return result.imageSubstance;
                },
                onMonitor: async (app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    return result.imageSubstance;
                }
            },
            'BLOCK_1565074256060': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await imageToGesture(image);
                    })
                }
            },
            'BLOCK_1565077745226': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    if (result.gesture) {
                        if (gestureMap[result.gesture]) {
                            return gestureMap[result.gesture];
                        } else {
                            return result.gesture
                        }
                    }
                    return ''
                }
            },
            'BLOCK_1565074350618': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await imageAttrs(image);
                    })
                }
            },
            'BLOCK_1565074760822': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    const {
                        type
                    } = args;
                    if (result.body_attrs[type]) {
                        return result.body_attrs[type]['name'];
                    }
                    return ''
                }
            },
            'BLOCK_1590482656111': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    if (result.body_attrs['face_mask']) {
                        // 此处需要返回 布尔值，存在硬编码的问题
                        return result.body_attrs['face_mask']['name'] === '戴口罩' ? true : false;
                    }
                    return false
                }
            },
            'BLOCK_1590482658255': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    if (result.body_attrs['cellphone']) {
                        return result.body_attrs['cellphone']['name'] === '看手机' ? true : false;
                    }
                    return false
                }
            },
            'BLOCK_1565319016323': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        const imageType = 'BASE64';
                        const options = {
                            face_field: 'age,beauty,expression,face_shape,gender,glasses,landmark,landmark72,landmark150,race,quality,eye_status,emotion,face_type',
                            max_face_num: 1
                        };
                        await analysisEmotion(image, imageType, options);
                    })
                }
            },
            'BLOCK_1565319108347': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    const {
                        type
                    } = args;
                    if (result.emotion['type'] === type) {
                        return Math.round(result.emotion['probability'] * 100)
                    }
                    return '';
                }
            },
            'BLOCK_1565319666056': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    const {
                        type
                    } = args;
                    if (result.emotion['type'] === type) {
                        return true
                    }
                    return false;
                }
            },
            'BLOCK_1565075101171': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await imageAnalysis(image);
                    })
                }
            },
            'BLOCK_1565075101172': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    const {
                        point,
                        coordinate
                    } = args;
                    if (result.body_parts[point]) {
                        return Math.round(result.body_parts[point][coordinate]);
                    }
                    return ''
                }
            },
            'BLOCK_1565075101173': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        time
                    } = args;
                    const {
                        opcode
                    } = block;
                    await blockRun(opcode, async () => {
                        const image = await RTC.capture(time, {
                            dataType: 'dataUrl'
                        });
                        if (!image) return;
                        await imageToHumanNum(image);
                    })
                }
            },
            'BLOCK_1565074256066': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    return result.body_num;
                }
            },
            'BLOCK_1565074256065': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    const {
                        type
                    } = args;
                    const {
                        opcode
                    } = block;
                    let text = args.text;
                    text = text.replace(/(^\s*)|(\s*$)/g, "");
                    await blockRun(opcode, async () => {
                        if (!text) return;
                        if (type === 'lexer') {
                            await wordAnlysis(text);
                        };
                        if (type === 'sentiment_classify') {
                            await emotionAnlysis(text);
                        };
                    })
                }
            },
            'BLOCK_1565077155104': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    let {
                        number
                    } = args;
                    number = Number(number) - 1;
                    if (result.lexer[number]) {
                        const pos = lexerMap[result.lexer[number]['pos']];
                        const ne = lexerMap[result.lexer[number]['ne']];
                        const posText = pos ? pos : ne ? ne : '';
                        const item = result.lexer[number]['item'];
                        return `${item} ：${posText}`
                    }
                    return ''
                }
            },
            'BLOCK_1565077155103': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    const {
                        type
                    } = args;
                    let sentiment = result.sentiment;
                    if (sentiment === 0) {
                        return '消极';
                    }
                    if (sentiment === 1) {
                        return '中性';
                    }
                    if (sentiment === 2) {
                        return '积极';
                    }
                    return ''
                }
            },
            'BLOCK_1565077353814': {
                onRun: async (args, app, device, block) => {
                    if (!isUserLogin) {
                        return await throttle(showLoginInfo);
                    }
                    let {
                        text_1,
                        text_2
                    } = args;
                    const {
                        opcode
                    } = block;
                    text_1 = text_1.replace(/(^\s*)|(\s*$)/g, "");
                    text_2 = text_2.replace(/(^\s*)|(\s*$)/g, "");
                    await blockRun(opcode, async () => {
                        if (!text_1 || !text_2) return;
                        await similarityAnlysis(text_1, text_2);
                    })
                }
            },
            'BLOCK_1565077448839': {
                onRun: (args, app, device, block) => {
                    if (!isUserLogin) {
                        return throttle(showLoginInfo);
                    }
                    return result.word_emb_sim !== '' ? Math.round(result.word_emb_sim * 100) : '';
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "baidu_ai",
            "targets": [{
                "name": "sprites",
                "options": {
                    "upload": {}
                }
            }],
            "version": "0.1.5",
            "platform": [
                "mblockpc",
                "mblockweb",
                "mblockapp"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "generatorStartBlocks": [],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [
                "baidu_ai.BLOCK_1560423221767",
                "baidu_ai.BLOCK_1560423400710",
                "baidu_ai.say_text",
                "baidu_ai.BLOCK_1560423463409",
                "baidu_ai.BLOCK_1560424027453",
                "baidu_ai.BLOCK_1560424411359",
                "baidu_ai.BLOCK_1561624758631",
                "baidu_ai.BLOCK_1561625370451",
                "baidu_ai.BLOCK_1561625486745",
                "baidu_ai.BLOCK_1561625681766",
                "baidu_ai.BLOCK_1561630499729",
                "baidu_ai.BLOCK_1561949535035"
            ],
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

export default ExtBaiduAi;