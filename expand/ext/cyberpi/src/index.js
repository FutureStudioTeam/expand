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

const cyberpiFirmwareDriverEspTool =
    /**
     * Custom Upload Driver
     *
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {ArrayBuffer | string} data
     * @param {() => void} logHandler
     * @param {(percent: number) => void} progressHandle
     * @param {(err: any, result: any) => void} callback
     */
    (app, device, datas, logHandler, progressHandle, finishHandler, errHandler) => {
        Protocol.updateFirmwares(app, device, datas, logHandler, progressHandle, finishHandler, errHandler);
    };
const cyberpiUploadDriverFireflyUpload =
    /**
     * Custom Upload Driver
     *
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {ArrayBuffer | string} code
     * @param {() => void} logHandler
     * @param {(percent: number) => void} progressHandle
     * @param {(err: any, result: any) => void} callback
     */
    async (app, device, code, logHandler, progressHandle, finishHandler, errHandler) => {
        device.switchChannel(null);
        if (!uploader.initialized) {
            uploader.initialized = true;
            var handle = function handle(err, data) {
                var percent = data.uploaded / data.total * 100;
                if (percent >= 100) {
                    finishHandler();
                } else {
                    progressHandle(percent);
                }
            };
            uploader.onUploadProgress(handle);
        }
        let version = await sysOperation.getCurrentVersionOfDevice();
        console.log("test_version", version)
        if ((version.length == 9) && (version[0] == '4') && (version[1] == '4') && (version[2] == '.') && (version[3] == '0') && (version[4] == '1') && (version[5] == '.')) { //44.01.006  4->52 Dec
            if ((version[6] == '0') && (version[7] == '0') && (version[8] < '6')) { //版本小于006则用原来的方式上传程序
                uploader.path = '/flash/main.py';
                uploader.content = code;
                uploader.uploadContent();
            } else {
                const project = app.getService('project');
                const env = app.getService('env');

                let getProjectName = null;
                if (project && project.getProjectName) {
                    getProjectName = project.getProjectName;
                    // 可能某些版本service 的 id 为 env，作兼容处理
                } else if (env && env.getProjectName) {
                    getProjectName = env.getProjectName;
                }

                let projectName = '';
                if (getProjectName) {
                    try {
                        projectName = await getProjectName();
                    } catch (err) {
                        console.log('getProjectName', err);
                    }
                    console.log('project name: ', projectName);
                }

                // uploader.path = `/flash/${projectName || 'main'}.py`;
                const str_utf8 = commonFunction.writeUTF(`/flash/_xx_${projectName || 'main'}.py`, true);
                // console.log('str_utf8:', str_utf8);
                let target_str = '';
                let s = '';
                for (let i = 0; i < str_utf8.length; i++) {
                    s = String.fromCharCode(str_utf8[i]);
                    target_str += s;
                }
                uploader.path = target_str;
                //uploader.path = `/flash/main.py`;
                // console.log('uploader_path:', uploader.path);
                uploader.content = code;
                uploader.uploadContent();
            }

        }

    };
const cyberpiUploadMiddlewareIntl =
    /**
     * Custom Upload Middleware
     * 
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {String} code
     * @param {Object} params
     * @param {Function} logH
     * @param {Function} progessH
     */
    async (app, device, code, params, logH, progessH) => {
        try {
            // iot codes processing
            code = await iotOperationManager.createIotCode(app, code);

            // cloud message and speech recognition code processing
            let urlRegex = /\{NAVIGATEURL\}/g;
            let urlTranslation = /\{TRANSURL\}/g;
            let urlTts = /\{TTSURL\}/g;
            let urlTime = /\{TIMEURL\}/g;
            let tokenRegex = /\{ACCESSTOKEN\}/g;
            let topicRegex = /\{TOPIC\}/g;
            const service = app.getService('account');
            if (service) {
                const user = await service.getUserInfo();
                if (user) {
                    let topic = `/USER/${user.uid}/${systemConstVariables.CLOUD_MQTT}`;
                    if (user.intl) {
                        topic = `/EU/USER/${user.uid}/${systemConstVariables.CLOUD_MQTT}`;
                        code = code.replace(urlRegex, sysOperation.urlConfig(true, 'recognition').speech);
                        code = code.replace(urlTranslation, sysOperation.urlConfig(true, 'translation').speech);
                        code = code.replace(urlTts, sysOperation.urlConfig(true, 'tts').speech);
                        code = code.replace(urlTime, sysOperation.urlConfig(true, 'time').speech);
                    } else {
                        code = code.replace(urlRegex, sysOperation.urlConfig(false, 'recognition').speech);
                        code = code.replace(urlTranslation, sysOperation.urlConfig(false, 'translation').speech);
                        code = code.replace(urlTts, sysOperation.urlConfig(false, 'tts').speech);
                        code = code.replace(urlTime, sysOperation.urlConfig(false, 'time').speech);
                    }
                    code = code.replace(topicRegex, topic);
                }
                const accesstoken = await sysOperation.getAccessToken(service);
                code = code.replace(tokenRegex, accesstoken);
                // .then((res) => {
                //     console.log('access token ', res);
                //     resolve(code);
                // }, (err) => {
                //     reject(error);
                // });
            }
        } catch (error) {
            console.error(error);
        }
        return code;
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

import Meoser from 'exts/common/meoser';
const engine = new Meoser();
const uploader = engine.uploader;
// this variable should be set true, or firmware uodate indicator will not show 
let checkFirmwareInForce = true;
let module_upgrade_flag = false;


// const haloSupportFirmwareVersion = "44.01.006" //从插件网页上获取
const deviceExtId = "cyberpi";


// const variable
const AUTOMATICALLY_UNSCRIBE_TIME_MS = 5000;

/* common functions */
class commonFunctionClass {
    constructor(version) {
        this.protocolVersion = version;
        this.onlineProtocolDanamicIndex = 0x0000;
    }

    // 定义延时函数
    delay(time, fn) {
        return new Promise(resolve => {
            setTimeout(() => {
                typeof fn === 'function' && fn();
                resolve();
            }, time)
        })
    }

    formatData(data) {
        let newData = [];
        let i = 0;
        while (i < 8) {
            newData[i] = "'";
            let j = 0;
            while (j < 16) {
                newData[i] += (j !== 0 ? ' ' : '') + data[j * 8 + i];
                j++;
            }
            newData[i] += "'";
            i++;
        }
        return `\n${newData.join('\n')}`;
    };

    matrix2hexStr(strData) {
        let data = "";
        for (let i = 0; i < 128; i += 8) {
            let strByte = strData.substring(i, i + 8);
            if (strByte.length < 8) {
                strByte += new Array(9 - strByte.length).join('0');
            }
            let tempHex = parseInt(strByte, 2).toString(16);
            if (tempHex.length === 1) {
                tempHex = 0 + tempHex;
            }
            data = data + tempHex;
        }
        return data;
    };

    formatOnlineFaceData(strData) {
        let data = "";
        for (let i = 0; i < 128; i += 8) {
            let strByte = strData.substring(i, i + 8);
            if (strByte.length < 8) {
                strByte += new Array(9 - strByte.length).join('0');
            }
            let tempHex = parseInt(strByte, 2).toString(16)
            data = data + tempHex;
        }
        return data;
    };


    // if the type of parameter is number, do not add "" for this variable,
    // or the type of parameter is string, add "" 
    isNumber(val) {
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数
        var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if (regPos.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    }

    stringAndNumberFormat(str) {
        if (isNaN(str)) {
            str = str.replace(new RegExp(/\\/g), '\\\\');
            str = str.replace(new RegExp(/'/g), '\\\'');
            str = str.replace(new RegExp(/"/g), '\\\"');
            return '\"' + str + '\"';
        } else {
            return str;
        }
    }

    // add "" for a string variable
    stringFormat(str) {
        str = str.replace(new RegExp(/\\/g), '\\\\');
        str = str.replace(new RegExp(/'/g), '\\\'');
        str = str.replace(new RegExp(/"/g), '\\\"');
        return '\"' + str + '\"';
    }

    writeUTF(str, isGetBytes) {
        var back = [];
        var byteSize = 0;
        for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (0x00 <= code && code <= 0x7f) {
                byteSize += 1;
                back.push(code);
            } else if (0x80 <= code && code <= 0x7ff) {
                byteSize += 2;
                back.push((192 | (31 & (code >> 6))));
                back.push((128 | (63 & code)))
            } else if ((0x800 <= code && code <= 0xd7ff) ||
                (0xe000 <= code && code <= 0xffff)) {
                byteSize += 3;
                back.push((224 | (15 & (code >> 12))));
                back.push((128 | (63 & (code >> 6))));
                back.push((128 | (63 & code)))
            }
        }
        for (i = 0; i < back.length; i++) {
            back[i] &= 0xff;
        }
        if (isGetBytes) {
            return back
        }
        if (byteSize <= 0xff) {
            return [0, byteSize].concat(back);
        } else {
            return [byteSize >> 8, byteSize & 0xff].concat(back);
        }
    }

    __strToArray(str) {
        var result = this.writeUTF(str, true);
        return result;
    }

    // fix decimal point number 
    fixDecimalPointNumber(value, bitsNum) {
        return parseFloat(Math.floor(value * 100) / 100).toFixed(bitsNum)
    }

    __charToByte(chr) {
        return chr.charCodeAt(0);
    }

    // the response item is for python, switch to js types
    pythonItemToJavascriptItem(string) {
        var out_str = '';
        out_str = string.replace(new RegExp(/True/g), 'true');
        out_str = out_str.replace(new RegExp(/False/g), 'false');
        out_str = out_str.replace(new RegExp(/None/g), 'null');
        out_str = out_str.replace(new RegExp(/'/g), '"');
        return out_str;
    }

    // get item of 'ret' in device response
    // the type of value is for python, switch it for js 
    getReturnFromString(jsonString) {
        if (jsonString.indexOf('ret') === -1) {
            return undefined;
        }
        var jsonJS = this.pythonItemToJavascriptItem(jsonString);
        // string to json object
        var jsonObject = JSON.parse(jsonJS);

        return jsonObject.ret;
    }

    // get item of 'err' in device response
    // the type of value is for python, switch it for js
    getErrFromString(jsonString) {
        if (jsonString.search('err') === -1) {
            return undefined;
        }
        /* add codes to process error here */
        return undefined;
    }
}

// ************************************************************************************************************* //
class onlineCommunicationClass {
    constructor(device) {
        this.device = device;
        this.protocolGroup = "f3f4";
        this.enableFlag = true;
    }

    setDevice(device) {
        this.device = device;
    }

    async write(data) {
        if (!this.device) {
            return;
        }
        if (this.enableFlag) {
            await this.device.asyncWriteProtocol('f3f4', data);
        }
    }

    async read(dataStructure, maxTime = 2500) {
        if (!this.device) return;

        return await this.device.asyncReadProtocol('f3f4', dataStructure, maxTime);
    }

    async subscribe(dataStructure, cb) {
        if (!this.device) return;

        return await this.device.subscribeReadProtocol('f3f4', dataStructure, cb);
    }

    enableDisableCommunication(status) {
        this.enableFlag = !!status;
    }
}

// ************************************************************************************************************* //
// for system operation
let systemConstVariables = {
    GT_MAP: {},

    // protocol id definition
    onLineProtocolId: 0x28,
    onLineCommonServiceSend: 0x00,
    onLineCommonServiceRead: 0x01,
    onLineCommonServiceSendSerialNum: 0x00,

    onLineSubscribeProtocolId: 0x29,
    onLineSubscribeReportCmdId: 0x00,

    // define some protocol of whole datas
    readySignalProtocolId: 0x08,
    checkDeviceModeProtocolId: 0x0d,

    chageToDebugModeComamnd: [0x0d, 0x00, 0x01],
    chageToOfflineModeComamnd: [0x0d, 0x00, 0x00],
    getCurrentModeComamnd: [0x0d, 0x80],
    getCurrentChannelComamnd: [0x31, 0x01],

    getCurrentFirmwareVersionComamnd: [0x06],
    CLOUD_MQTT: 'MESSAGE',

}

let deviceSystemStastus = {
    deviceName: "halocode",
    firmwareVersion: "",
    bleName: "",
    currentChannel: "",
    currentMode: "",
    connectModules: [],
    speechResult: "",
    macAddress: "",
};

class sysOperationClass {
    constructor(communication, appContext) {
        // this.supportFirmwareVersion = haloSupportFirmwareVersion;
        this.communication = communication;

        this.accessToken = "";
        this.userInfo = null;
        this.hardwareVersion = undefined;
        this.currentModeOfUpComputer = undefined;
        this.automaticModeSyncCancelHandle = undefined;
        this.appContext = appContext;
    }

    async init(communication, app) {
        this.appContext = app;
        this.communication = communication;

        await this.startAutomaticModeSync();
    }

    deinit() {
        this.stopAutomaticModeSync();
        this.appContext = undefined;
        this.communication = undefined;
    }

    setCommunication(communication) {
        this.communication = communication;
    }

    setAppContext(app) {
        this.appContext = app;
    }

    // warn: for firmware that older then 25.01.004, some module is not support,
    // so, we use try ... except..., avoid a execution error
    async enableDeviceRepl() {
        await this.communication.write(onlineProtocolPackage.__createFrame(0x04, 0, "try:\n    import config\nexcept:\n    pass", null, true));
        await this.communication.write(onlineProtocolPackage.__createFrame(0x04, 0, "try:\n    config.write_config(\"repl_enable\", True)\nexcept:\n    pass", null, true));
    }

    async disableDeviceRepl() {
        await this.communication.write(onlineProtocolPackage.__createFrame(0x04, 0, "try:\n    import config\nexcept:\n    pass", null, true));
        await this.communication.write(onlineProtocolPackage.__createFrame(0x04, 0, "try:\n    config.write_config(\"repl_enable\", False)\nexcept:\n    pass", null, true));
    }

    async resetOnlineModeOfDevice() {
        await this.communication.write(onlineProtocolPackage.__createFrame(0x04, 0, "try:\n    online_restart\nexcept:\n    pass", null, true));
    }

    async TryToChangeToDebugMode(maxCount = 6) {
        if (!this.communication) return;

        let count = 0;

        let ret = await this.getCurrentModeOfDevice(true);
        while (ret === null && count < maxCount) {
            ret = await this.getCurrentModeOfDevice(true);
            count += 1
        }
        if (count === maxCount) {
            return false;
        } else if (count > 0) {
            await commonFunction.delay(200);
        }

        await this.changeToDebugMode();
        return true;
    }

    async changeToDebugMode() {
        this.currentModeOfUpComputer = "DEBUG";
        if (!this.communication) return;

        // restart online table of device
        await this.resetOnlineModeOfDevice();

        await this.communication.write(systemConstVariables.chageToDebugModeComamnd);
        await sysOperation.disableDeviceRepl();
    }

    async changeToUploadMode() {
        this.currentModeOfUpComputer = "UPLOAD";
        if (!this.communication) return;

        await this.communication.write(systemConstVariables.chageToOfflineModeComamnd);
        await sysOperation.disableDeviceRepl();
    }

    async getCurrentChannelOfDevice() {
        if (!this.communication) return;

        await this.communication.write(systemConstVariables.getCurrentChannelComamnd);
        // Note: there is a bug in the firmware, the right reading frame is [0x31, 0x01, "byte"]
        let value = await this.communication.read([0x31, 0x01, "byte"], 500);
        if (value === null) {
            return "";
        } else if (value[0] < 0x20) {
            return "串口";
        } else if (value[0] === 0x20) {
            return "蓝牙";
        } else if (value[0] === 0x28) {
            return "WIFI MESH";
        } else {
            return "未知";
        }
    }


    async getCurrentModeOfDevice(syncFlag = false) {
        if (!this.communication) return;

        await this.communication.write(systemConstVariables.getCurrentModeComamnd);
        if (syncFlag) {
            let value = await this.communication.read([systemConstVariables.checkDeviceModeProtocolId, 'byte', 'byte'], 1000);
            if (value === null) {
                return null;
            } else {
                return value[1];
            }
        }
    }

    async getCurrentVersionOfDevice() {
        if (!this.communication) {
            return;
        }
        //                                                                                               '2'   '5'     '.'   '0',  '1'   '.'      
        if (this.hardwareVersion != undefined) {
            return this.hardwareVersion
        } else {
            await this.communication.write(systemConstVariables.getCurrentFirmwareVersionComamnd);
            let value = await this.communication.read([0x06, 'byte', 'byte', 'byte', 'byte', 'byte', 'byte', 'byte', 'byte', 'byte'], 6000);
            if (value === null) {
                return null;
            } else {
                let firmStrBytes = value;
                for (let i = 0; i < firmStrBytes.length; i++) {
                    firmStrBytes[i] = String.fromCharCode(firmStrBytes[i]);
                }
                return firmStrBytes;
            }
        }
    }

    async startAutomaticModeSync() {
        if (this.automaticModeSyncCancelHandle || (!this.communication)) return;

        // subscribe common protocol, ready protocol
        // this.automaticModeSyncCancelHandle = await this.communication.subscribe([systemConstVariables.checkDeviceModeProtocolId, 'byte', 'byte'], (values) => {
        this.automaticModeSyncCancelHandle = await this.communication.subscribe([0x08, 'byte'], (values) => {
            if (values === null) {
                return null;
            }
            if (!this.communication.device.isUploadMode()) {
                // chang to debug mode mode
                setTimeout(async () => {
                    await this.changeToDebugMode();

                    commonFunction.delay(200);
                    onlineSystemDeinit();
                    commonFunction.delay(100);
                    await onlineSystemInit();

                    /* start event listenning */
                    if (this.appContext.workspace.resetEvents) {
                        systemConstVariables.GT_MAP = {};
                        this.cyberpi_launch_flag = true;
                        await this.appContext.workspace.resetEvents();
                    }

                }, 100);
                console.log("device and mblock mode do not matched, device change to debug mode");
            }
            // chang to upload mode
            else if (this.communication.device.isUploadMode()) {
                setTimeout(async () => {
                    await this.changeToUploadMode();
                }, 100);

                console.log("device and mblock mode do not matched, device change to upload mode");
            }
        });
    }

    stopAutomaticModeSync() {
        this.automaticModeSyncCancelHandle && this.automaticModeSyncCancelHandle();
        this.automaticModeSyncCancelHandle = undefined;
    }

    // code:
    // 0:  is latest, no need update;
    // -1: system error, no need update
    // -2: device type error,  no need update
    // -3: no response, no need update

    // 1:  device firmware version is older, need update
    async checkFirmwareVersion(supportVerStr) {
        // haloSupportFirmwareVersion and deviceExtId are defined
        // at the top of script
        let retObject = {
            deviceName: "", // ext id
            deviceFirmwareVersion: "", // currentVersion
            // supportFirmwareVersion: haloSupportFirmwareVersion, // support version
            isLatest: true, // whether the latest(supported) version 
            code: 0
        };


        if (!this.communication) {
            retObject.code = -1;
            return retObject
        }

        this.hardwareVersion = undefined; //每次连接都获取一次
        let firmVerBytes = await this.getCurrentVersionOfDevice();
        if (firmVerBytes === null) {
            retObject.code = -3;
            return retObject
        }
        this.hardwareVersion = firmVerBytes; //用于做006之前版本的上传模式兼容

        let currentVerStr = firmVerBytes.join('');
        let currentVer = firmVerBytes.join('').split('.');
        // let supportVer = this.supportFirmwareVersion.split('.');
        let supportVer = supportVerStr.split('.');
        deviceSystemStastus.firmwareVersion = currentVerStr;
        console.log("current device version:", currentVer)
        console.log("current support version:", supportVer)

        // device check
        if ((currentVer[0] != supportVer[0]) || (currentVer[1] != supportVer[1])) {
            console.warn("device check failed", currentVer, supportVer);
            retObject.code = -2;
            retObject.deviceFirmwareVersion = currentVerStr;
            return retObject
        }

        // version check
        retObject.deviceName = deviceExtId;
        if (currentVer[2][0] == "T") {
            if (supportVer[2][0] != "T") {
                retObject.isLatest = false;
                retObject.code = 1;
                retObject.deviceFirmwareVersion = currentVerStr;
                return retObject
            } else {
                if (currentVer[2] < supportVer[2]) {
                    retObject.isLatest = false;
                    retObject.code = 1;
                    retObject.deviceFirmwareVersion = currentVerStr;
                    return retObject
                } else {
                    retObject.isLatest = true;
                    retObject.code = 0;
                    retObject.deviceFirmwareVersion = currentVerStr;
                    return retObject
                }
            }
        } else {
            if (currentVer < supportVer) {
                retObject.isLatest = false;
                retObject.code = 1;
                retObject.deviceFirmwareVersion = currentVerStr;
                return retObject
            } else {
                retObject.isLatest = true;
                retObject.code = 0;
                retObject.deviceFirmwareVersion = currentVerStr;
                return retObject;
            }
        }
    }



    async deviceStatucUpdate() {
        deviceSystemStastus.currentChannel = await this.getCurrentChannelOfDevice();
        let opcode = "__haloboard_sys_status_get_ble_name";
        deviceSystemStastus.bleName = await onlineManager.request(opcode, true, 250);
        opcode = "__haloboard_sys_status_get_system_mode";

        let mode = await onlineManager.request(opcode, true, 250);
        if (mode === 0x01) {
            deviceSystemStastus.currentMode = "Upload Mode";
        } else if (mode === 0x02) {
            deviceSystemStastus.currentMode = "Live Mode";
        } else {
            deviceSystemStastus.currentMode = "Unknown";
        }

        opcode = "__haloboard_sys_status_get_mbuild_modules";
        deviceSystemStastus.connectModules = await onlineManager.request(opcode, true, 250);

        opcode = "__haloboard_sys_status_get_speech_result";
        deviceSystemStastus.speechResult = await onlineManager.request(opcode, true, 250);

        opcode = "__haloboard_sys_status_is_mac_address";
        var mac_address_hexvalue = new Array()
        let mac_address_string = await onlineManager.request(opcode, true, 250);
        // mac_address_hexvalue = mac_address_string.split(",");
        for (let i = 0; i < mac_address_hexvalue.length; i++) {
            mac_address_hexvalue[i] = (parseInt(mac_address_hexvalue[i])).toString(16);
        }
        deviceSystemStastus.macAddress = mac_address_hexvalue;


        opcode = "__haloboard_sys_status_is_wifi_connected";
        deviceSystemStastus.isWifiConnected = await onlineManager.request(opcode, true, 250);

        return deviceSystemStastus;
    }

    __createOtaWifiFrame(sstr, id) {
        let frame = [];
        let strArray = [];
        let len = 0;

        strArray = commonFunction.__strToArray(sstr);
        strArray[strArray.length] = 0x00;
        len = strArray.length;

        let preData = [0x0f, 0x01, id, 0x01, 0x01, len];
        frame = preData.concat(strArray); // [id, index, length]
        console.log(frame)
        return frame;
    }

    __createOtaServoFrame(sstr, id) {
        let frame = [];
        let strArray = [];
        let len = 0;

        strArray = commonFunction.__strToArray(sstr);
        strArray[strArray.length] = 0x00;
        len = strArray.length;

        let preData = [0x0f, 0x05, id, len];
        frame = preData.concat(strArray); // [id, index, length]
        console.log(frame)
        return frame;
    }

    async sendOtaUpdateCmd(ssid, password, hostPath, filePath) {
        let ssidCmd = this.__createOtaWifiFrame(ssid, 0x01);
        let passwordCmd = this.__createOtaWifiFrame(password, 0x02);
        let serverHostCmd = this.__createOtaServoFrame(hostPath, 0x01);
        let serverUrlCmd = this.__createOtaServoFrame(filePath, 0x02);

        // config wifi
        await this.communication.write(ssidCmd);
        let result = await this.communication.read([0x0f, 0x01, 0x01, 0x01, 0x01, 'byte']);
        if (result == null) {
            return -1;
        } else if (result[0] != 0x00) {
            return -2;
        }

        await this.communication.write(passwordCmd);
        result = await this.communication.read([0x0f, 0x01, 0x02, 0x01, 0x01, 'byte']);
        if (result == null) {
            return -1;
        } else if (result[0] != 0x00) {
            return -2;
        }

        // config server
        await this.communication.write(serverHostCmd);
        result = await this.communication.read([0x0f, 0x05, 0x01, 'byte']);
        if (result == null) {
            return -1;
        } else if (result[0] != 0x00) {
            return -2;
        }

        await this.communication.write(serverUrlCmd);
        result = await this.communication.read([0x0f, 0x05, 0x02, 'byte']);
        if (result == null) {
            return -1;
        } else if (result[0] != 0x00) {
            return -2;
        }

        // start
        await this.communication.write([0x0f, 0x09, 0x01]);
        result = await this.communication.read([0x0f, 0x09, 'byte']);
        if (result == null) {
            return -3;
        } else if (result[0] != 0x00) {
            return -4;
        }

        return 0;
    }

    async getAccessToken(service) {
        if (typeof this.accessToken === 'string' && this.accessToken !== '') {
            return this.accessToken;
        }
        try {
            const user = await service.getUserInfo();
            const utoken = await service.getToken();
            const res = await fetch(this.urlConfig(user.intl).getaccesstoken, {
                method: 'post',
                headers: {
                    utoken,
                    'content-type': 'application/json; charset=utf-8'
                },
            }).then(res => res.json());
            this.accessToken = res.data.accesstoken;
        } catch (error) {
            console.warn(error);
        }
        return this.accessToken;
    };

    async resetAccessToken() {
        this.accessToken = '';
    };

    getTopic(service) {
        let topic = '';
        let uid = '';
        try {
            let user = this.userInfo;
            if (typeof user === 'string') {
                user = JSON.parse(user);
            }
            if (typeof user === 'object') {
                uid = user.uid;
                if (user.intl) {
                    return `/EU/USER/${uid}/${systemConstVariables.CLOUD_MQTT}`;
                } else {
                    return `/USER/${uid}/${systemConstVariables.CLOUD_MQTT}`;
                }
            }
        } catch (err) {
            console.warn(err);
        }

        return '';
    };

    urlConfig(intl = false, use = "recognition") {
        if (use === "recognition") {
            if (intl) {
                return {
                    speech: 'http://eu.msapi.passport3.makeblock.com/ms/bing_speech/interactive',
                    getaccesstoken: 'https://passport2.mblock.cc/v1/api/getaccesstoken'

                };
            } else {
                return {
                    speech: 'http://msapi.passport3.makeblock.com/ms/bing_speech/interactive',
                    getaccesstoken: 'https://passport2.makeblock.com/v1/api/getaccesstoken'
                }
            };
        } else if (use === "translation") {
            if (intl) {
                return {
                    speech: 'http://msapi.mblock.cc/ms/bing_speech/translate',
                    getaccesstoken: 'https://passport2.mblock.cc/v1/api/getaccesstoken'

                };
            } else {
                return {
                    speech: 'http://msapi.makeblock.com/ms/bing_speech/translate',
                    getaccesstoken: 'https://passport2.makeblock.com/v1/api/getaccesstoken'
                }
            };
        } else if (use === "tts") {
            if (intl) {
                return {
                    speech: 'http://msapi.mblock.cc/baidu/voice/text2audio',
                    getaccesstoken: 'https://passport2.mblock.cc/v1/api/getaccesstoken'

                };
            } else {
                return {
                    speech: 'http://msapi.makeblock.com/baidu/voice/text2audio',
                    getaccesstoken: 'https://passport2.makeblock.com/v1/api/getaccesstoken'
                }
            };
        } else if (use === "time") {
            if (intl) {
                return {
                    speech: 'http://api.mblock.cc/time/v1/',
                };
            } else {
                return {
                    speech: 'http://api.makeblock.com/time/v1/',
                }
            };
        }
    }

    async onLoadRunCallback(app, device) {
        const service = app.getService('account');
        const isLogin = await service.isLogin();
        if (!isLogin) {
            app.workspace.disableBlocks(...mustLoginBlocks);
        }

        this.userInfo = await service.getUserInfo();
        service.onLogin(async () => {
            app.workspace.enableBlocks(...mustLoginBlocks);
            this.getAccessToken(service);
            this.userInfo = await service.getUserInfo();
        });
        service.onLogout(() => {
            app.workspace.disableBlocks(...mustLoginBlocks);
            this.resetAccessToken();
            this.userInfo = null;
        });
        this.getAccessToken(service);
    }
}

// ************************************************************************************************************* //
class onlineProtocolPackageClass {
    constructor(version) {
        this.protocolVersion = version;
        this.onlineProtocolDanamicIndex = 0x0000;
    }

    __createFrame(service_id, index, scriptString, para, originalScriptFlag = false) {
        let frame = [];
        let scriptArray = [];
        let sn = [0, 0];
        let lenArray = [0, 0];

        sn[0] = index & 0xff;
        sn[1] = (index >> 8) & 0xff;

        if (!originalScriptFlag) {
            let paraCovert = [];
            if (para != undefined) {
                for (let i = 0; i < para.length; i++) {
                    if (typeof(para[i]) === 'string') {
                        paraCovert[i] = commonFunction.stringFormat(para[i]);
                    } else if (para[i] === true) {
                        paraCovert[i] = "True";
                    } else if (para[i] === false) {
                        paraCovert[i] = "False";
                    } else if (para[i] === null) {
                        paraCovert[i] = "None";
                    } else {
                        paraCovert[i] = para[i];
                    }
                }
            }
            scriptString = scriptString + '(' + paraCovert.join(',') + ')'
        } else {
            // use the scipt directly
        }



        scriptArray = commonFunction.__strToArray(scriptString);

        lenArray[0] = scriptArray.length & 0xff;
        lenArray[1] = (scriptArray.length >> 8) & 0xff;

        frame = frame.concat([systemConstVariables.onLineProtocolId, service_id, sn[0], sn[1], lenArray[0], lenArray[1]]); // [id, index, length]
        frame = frame.concat(scriptArray);

        return frame;
    }

    __createSubscribeFrame(service_id, index, scriptString, para) {
        let frame = [];
        let scriptArray = [];
        let sn = [0, 0];
        let lenArray = [0, 0];

        sn[0] = index & 0xff;
        sn[1] = (index >> 8) & 0xff;

        // key = para[0];
        // func = para[1];
        // arg = para[2];

        let paraCovert = [0, 0, []];
        paraCovert[1] = para[1];

        paraCovert[0] = commonFunction.stringFormat(String(para[0]));

        for (let i = 0; i < para[2].length; i++) {
            if (typeof(para[2][i]) === 'string') {
                paraCovert[2][i] = commonFunction.stringFormat(para[2][i]);
            } else if (para[2][i] === true) {
                paraCovert[2][i] = "True";
            } else if (para[2][i] === false) {
                paraCovert[2][i] = "False";
            } else if (para[2][i] === null) {
                paraCovert[2][i] = "None";
            } else {
                paraCovert[2][i] = para[2][i];
            }
        }
        let argStr = '[' + paraCovert[2].join(',') + ']';
        paraCovert[2] = argStr;

        scriptString = scriptString + '(' + paraCovert.join(',') + ')';

        scriptArray = commonFunction.__strToArray(scriptString);

        lenArray[0] = scriptArray.length & 0xff;
        lenArray[1] = (scriptArray.length >> 8) & 0xff;

        frame = frame.concat([systemConstVariables.onLineProtocolId, service_id, sn[0], sn[1], lenArray[0], lenArray[1]]); // [id, index, length]
        frame = frame.concat(scriptArray);

        return frame;
    }

    getOnlineProtocolDanamicIndex() {
        let retArray = [0, 0, 0];
        this.onlineProtocolDanamicIndex = this.onlineProtocolDanamicIndex & 0xffff;
        retArray[0] = this.onlineProtocolDanamicIndex;
        retArray[1] = this.onlineProtocolDanamicIndex & 0xff;
        retArray[2] = (this.onlineProtocolDanamicIndex >> 8) & 0xff;

        this.onlineProtocolDanamicIndex = this.onlineProtocolDanamicIndex + 1;
        return retArray;
    }
}

const NOT_SUBSCRIBER = 0;
const TO_SUBSCRIBER = 1;
const SUBSCRIBER = 2;

class onlineDataStructure {
    constructor(tag, func, paras, valueType) {
        this.tag = tag;
        this.func = func;
        // key will be binded with the id in onlineManager.blockTable (type of array)
        this.key = undefined;

        // undifined: add nothing
        // []: no parameters
        // [xx, xx]: several parameters
        this.paras = {
            default: paras
        };

        // different parameters use the same onject
        this.value = {
            default: undefined
        };
        // undefined: origin
        // "bool":    
        // "int" :   
        // "float1":
        // "float2":
        this.valueType = (valueType === undefined) ? {
            default: "int"
        } : valueType;
        this.dataNewFlag = {
            default: undefined
        };
        this.dataUpdateCallBack = {
            default: undefined
        };

        // 0: not to subscribe; 1: to subscribe; 2:subscribed 
        this.subscribeFlag = {
            default: 0
        };
        this.subscribeCmdSendTime = {
            default: 0
        };

        // event is special, do not need to be unsubscribed automatically,
        // by set this flag to false
        this.autoSubscribeControlFlag = {
            default: true
        };
        this.getValueCalledCount = {
            default: 0
        };
    };

    getValueViaType(item, valType = undefined) {
        let itemType = (valType === undefined) ? this.valueType[item] : valType;

        // data not update
        if (this.value[item] === undefined) {
            if (itemType === undefined) {
                return 0;
            } else if (itemType === "bool") {
                return false;
            } else if (itemType === "int") {
                return 0;
            } else if (itemType === "float1") {
                return 0.0;
            } else if (itemType === "float2") {
                return 0.00;
            } else if (itemType === "float3") {
                return 0.000;
            } else if (itemType === "string") {
                return "";
            } else if (itemType === "array") {
                return [];
            } else {
                return 0;
            }
        }

        if (itemType === undefined) {
            itemType = this.valueType["default"];
        }

        if (itemType === "bool") {
            return !!this.value[item];
        } else if (itemType === "int") {
            return parseInt(this.value[item]);
        } else if (itemType === "float1") {
            return commonFunction.fixDecimalPointNumber(this.value[item], 1)
        } else if (itemType === "float2") {
            return commonFunction.fixDecimalPointNumber(this.value[item], 2)
        } else if (itemType === "float3") {
            return commonFunction.fixDecimalPointNumber(this.value[item], 3)
        } else if (itemType === "string") {
            return String(this.value[item]);
        } else {
            return this.value[item];
        }
    }

    resetAllStatus() {
        this.paras = {
            default: this.paras["default"]
        }
        this.value = {
            default: undefined
        };
        this.dataNewFlag = {
            default: undefined
        };
        this.dataUpdateCallBack = {
            default: undefined
        };
        this.subscribeFlag = {
            default: 0
        };

        this.autoSubscribeControlFlag = {
            default: true
        };
        this.getValueCalledCount = {
            default: 0
        };
        this.subscribeCmdSendTime = {
            default: 0
        };
    };

    resetItemStatus(item = "default") {
        this.value[item] = undefined;
        this.dataNewFlag[item] = undefined;
        this.dataUpdateCallBack[item] = undefined;
        this.subscribeFlag[item] = 0;

        this.autoSubscribeControlFlag[item] = true;
        this.getValueCalledCount[item] = 0;
        this.subscribeCmdSendTime[item] = 0;
    };
}

class onlineManagerClass {
    constructor(communication) {
        this.extName = deviceExtId;
        this.blockTable = [];
        this.communication = communication;
        this.eventSystemStartFlag = false;
        this.__reset()

        this.autoSubscribeControlHandle = undefined;
        this.commonProtocolCancel = undefined;
        this.subscribeProtocolCancel = undefined;
        this.eventSystemRuningHandle = undefined;
    };

    __reset() {
        this.__resetSubcribeTable();

        this.dynamicDataTable = {};

        // {string : any}
        this.currentOnlineTable = {};

        // for event mechanism
        this.eventTable = {};
    };

    setCommunication(communication) {
        this.communication = communication;
    }

    updateOnlineTable(cmd, table) {
        if (cmd == "set") {
            this.blockTable = table;
        } else if (cmd == "add") {
            for (let i in this.blockTable) {
                // only check the first item in table
                if (this.blockTable[i].tag === table[0].tag) {
                    console.warn("table is already existed")
                    return;
                }
            }

            this.blockTable = this.blockTable.concat(table);
        }
    }

    async start() {
        this.__reset();

        // subscribe common protocol
        let requestCmdId = 0x28;
        if (!this.commonProtocolCancel) {
            this.commonProtocolCancel = await this.communication.subscribe([requestCmdId, 'byte', 'byte', 'byte', "bigstring"], (resValue) => {
                let serviceID = resValue[0];
                let dynamicIndex = resValue[1] + (resValue[2] << 8);

                if (this.dynamicDataTable[dynamicIndex]) {
                    let jsonRet = commonFunction.getReturnFromString(resValue[3]);
                    this.valueUpdate(this.dynamicDataTable[dynamicIndex], jsonRet, "default");
                    delete this.dynamicDataTable[dynamicIndex];
                }
            });
        }

        // subscribe suscribed protocol
        let subscribeCmdId = 0x29;
        if (!this.subscribeProtocolCancel) {
            this.subscribeProtocolCancel = await this.communication.subscribe([subscribeCmdId, 'byte', "bigstring"], (resValue) => {
                let jsonJS = commonFunction.pythonItemToJavascriptItem(resValue[1]);
                let jsonObject = JSON.parse(jsonJS);

                for (let k1 in jsonObject) {
                    // caculate the key
                    let key = Number(k1.split('_')[0]);
                    let addition_para = k1.split('_')[1];
                    addition_para = (addition_para === undefined ? "default" : addition_para);

                    // if key is not registered, do not update the value 
                    if (this.blockTable[key].subscribeFlag[addition_para]) {
                        this.valueUpdate(key, jsonObject[k1], addition_para);
                    }
                }
            });
        }

        if (!this.autoSubscribeControlHandle) {
            // check if a subscribtion should be unregistered, interval 10 seconds
            this.autoSubscribeControlHandle = setInterval(async () => {
                for (let tag in this.currentOnlineTable) {
                    let key = this.currentOnlineTable[tag];

                    for (let item in this.blockTable[key].getValueCalledCount) {
                        if (this.blockTable[key].getValueCalledCount[item] === 0) {
                            if (this.blockTable[key].subscribeFlag[item] === SUBSCRIBER) {
                                if (this.blockTable[key].autoSubscribeControlFlag[item]) {
                                    await this.cancelSubscribe(tag, item);
                                    this.blockTable[key].resetItemStatus(item);
                                }
                            }

                        }
                        this.blockTable[key].getValueCalledCount[item] = 0;
                    }
                }
            }, AUTOMATICALLY_UNSCRIBE_TIME_MS);
        }

        this.startEventSystem();

    };

    __resetSubcribeTable() {
        for (let item in this.blockTable) {
            this.blockTable[item].resetAllStatus();
        }
    }

    stop() {
        this.stopEventSystem();

        this.autoSubscribeControlHandle && clearInterval(this.autoSubscribeControlHandle);
        this.autoSubscribeControlHandle = undefined;
        this.commonProtocolCancel && this.commonProtocolCancel();
        this.commonProtocolCancel = undefined;
        this.subscribeProtocolCancel && this.subscribeProtocolCancel();
        this.subscribeProtocolCancel = undefined;

        this.__reset();

        this.communication = null;
    };

    //*****************************
    __checkTagInOnlineTable(tag) {
        for (let i in this.blockTable) {
            if (this.blockTable[i]["tag"] == tag) {
                this.blockTable[i].key = i;
                this.currentOnlineTable[tag] = i;
                return i;
            }
        }
        console.warn("tag not in blockTable")
    };

    __getKeyViaTag(tag) {
        // only judge if '.' in tag
        // if (tag && tag.indexOf(this.extName + ".") > -1) 
        if (tag && tag.indexOf(".") > -1) {
            tag = tag.split(".")[1];
        } else if (tag === undefined) {
            console.warn("unknown tag:", tag);
            return undefined;
        }

        // {string : any}
        if (tag in this.currentOnlineTable) {
            return this.currentOnlineTable[tag];
        } else {
            return this.__checkTagInOnlineTable(tag);
        }
    }

    __getTagFromKey(key) {
        return this.blockTable[key];
    }
    //*****************************    
    valueUpdate(key, value, addition_para = "default") {
        // wait event system running
        if (!this.eventSystemStartFlag) {
            return;
        }

        this.blockTable[key].value[addition_para] = value;
        this.blockTable[key].dataNewFlag[addition_para] = true;

        if (this.blockTable[key].dataUpdateCallBack[addition_para]) {
            this.blockTable[key].dataUpdateCallBack[addition_para](value);
        }
    };

    setAutoSubscribeControlFlag(tag, sta, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }
        this.blockTable[key].autoSubscribeControlFlag[addition_para] = !!sta;
    }

    parasUpdate(tag, paras, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }
        this.blockTable[key].paras[addition_para] = paras;
    };


    async addEvent(tag, callback, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        this.setAutoSubscribeControlFlag(tag, false, addition_para);
        this.eventTable[key] = tag;
        this.setValueUpdateCallback(tag, callback, addition_para);

        await this.getValue(tag);

    }

    removeEvent(tag, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        delete this.eventTable[key];
        this.setAutoSubscribeControlFlag(tag, true, addition_para);
        this.setValueUpdateCallback(tag, undefined, addition_para);
    }

    startEventSystem() {
        this.eventSystemStartFlag = true;

        if (this.eventSystemRuningHandle === undefined) {
            // call getValue will automatically send subscription command
            // if subscribed failed, this loop insure that subscription about 
            // event will not fail
            this.eventSystemRuningHandle = setInterval(() => {
                for (let key in this.eventTable) {
                    this.getValue(this.eventTable[key]);
                }
            }, 500);
        }

    }

    async stopEventSystem() {
        this.eventSystemRuningHandle && clearInterval(this.eventSystemRuningHandle);
        this.eventSystemRuningHandle = undefined;

        this.eventSystemStartFlag = false;
    }


    setValueUpdateCallback(tag, callback, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        this.blockTable[key].dataUpdateCallBack[addition_para] = callback;
    };

    async requestWithOriginalScript(tag, wait, maxTime, valType = undefined) {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        // wait event system running
        if (!this.eventSystemStartFlag) {
            return this.blockTable[key].getValueViaType("default", valType);
        }

        if (!this.communication) return;

        let dynamicIndex = onlineProtocolPackage.getOnlineProtocolDanamicIndex()[0];
        let waitCmd = 0x00;

        if (wait) {
            waitCmd = 0x01;
        }

        let writeData = onlineProtocolPackage.__createFrame(waitCmd, dynamicIndex, this.blockTable[key].func, null, true)

        try {
            await this.communication.write(writeData)
        } catch (e) {
            console.warn("communication write error");
        }

        if (wait) {
            this.dynamicDataTable[dynamicIndex] = key;
            maxTime = maxTime ? maxTime : 500;
            try {
                await this.__waitDataUpdate(key, maxTime);
                return this.blockTable[key].getValueViaType("default", valType);;
            } catch (e) {
                return this.blockTable[key].getValueViaType("default", valType);
            }
        }
    };

    async request(tag, wait, maxTime, valType = undefined, parasIn = undefined) {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        // wait event system running
        if (!this.eventSystemStartFlag) {
            return this.blockTable[key].getValueViaType("default", valType);
        }

        if (!this.communication) return;

        let dynamicIndex = onlineProtocolPackage.getOnlineProtocolDanamicIndex()[0];
        let waitCmd = 0x00;

        if (wait) {
            waitCmd = 0x01;
        }

        let paras = (parasIn === undefined) ? this.blockTable[key].paras["default"] : parasIn;

        let writeData = onlineProtocolPackage.__createFrame(waitCmd, dynamicIndex, this.blockTable[key].func, paras)

        try {
            await this.communication.write(writeData)
            if (tag == "cyberpi.cyberpi_display_println") {
                console.log("aaaaaaa");
            }
        } catch (e) {
            console.warn("communication write error");
        }

        if (wait) {
            this.dynamicDataTable[dynamicIndex] = key;
            maxTime = maxTime ? maxTime : 500;
            try {
                await this.__waitDataUpdate(key, maxTime);
                return this.blockTable[key].getValueViaType("default", valType);;
            } catch (e) {
                return this.blockTable[key].getValueViaType("default", valType);
            }
        }
    };

    // this function should not be asynchronous, 
    // because of the limit of mblock
    getValue(tag, addition_para = "default", valType = undefined, specialProcessHandle = undefined) {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        // wait event system running
        if (!this.eventSystemStartFlag) {
            return this.blockTable[key].getValueViaType("default", valType);
        }

        if (addition_para in this.blockTable[key].getValueCalledCount) {
            this.blockTable[key].getValueCalledCount[addition_para] += 1;
        } else {
            this.blockTable[key].getValueCalledCount[addition_para] = 1;
        }

        if (!(addition_para in this.blockTable[key].subscribeCmdSendTime)) {
            this.blockTable[key].subscribeCmdSendTime[addition_para] = 0;
        }

        let ret = 0;
        if (this.blockTable[key].subscribeFlag[addition_para] != SUBSCRIBER &&
            (+new Date() - this.blockTable[key].subscribeCmdSendTime[addition_para] > 500)) {
            this.blockTable[key].subscribeCmdSendTime[addition_para] = +new Date();
            // to subscribe
            this.blockTable[key].subscribeFlag[addition_para] = TO_SUBSCRIBER;
            return new Promise(async (resolve) => {
                try {
                    await commonFunction.delay(Math.ceil(Math.random() * 50) + 10);
                    await this.subscribe(tag, addition_para);
                    ret = await this.getValueUntilDataUpdate(tag, 500, addition_para);
                    // subscribed
                    this.blockTable[key].subscribeFlag[addition_para] = SUBSCRIBER;

                    if (!(addition_para in this.blockTable[key].autoSubscribeControlFlag)) {
                        this.setAutoSubscribeControlFlag(tag, true, addition_para);
                    }
                    if (specialProcessHandle !== undefined) {
                        resolve(specialProcessHandle(this.blockTable[key].getValueViaType(addition_para, valType)));
                    } else {
                        resolve(this.blockTable[key].getValueViaType(addition_para, valType));
                    }

                } catch (e) {
                    this.blockTable[key].subscribeFlag[addition_para] = NOT_SUBSCRIBER;
                    resolve(this.blockTable[key].getValueViaType(addition_para, valType));
                }
            });
        } else {
            // return this.blockTable[key].value[addition_para];
            return this.blockTable[key].getValueViaType(addition_para, valType);
        }
    };

    async getValueUntilDataUpdate(tag, maxTime, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        try {
            await this.__waitDataUpdate(key, maxTime, addition_para);
            return true;
        } catch (e) {
            console.warn("value not update, timeout")
            return false;
        }
    };

    async subscribe(tag, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        if (this.communication && (this.blockTable[key].subscribeFlag[addition_para])) {
            let subKey = key;
            if (addition_para !== "default") {
                subKey = key + '_' + addition_para;
            }

            let paraItem = (addition_para === undefined) ? "default" : addition_para;

            let dynamicIndex = onlineProtocolPackage.getOnlineProtocolDanamicIndex();
            await this.communication.write(onlineProtocolPackage.__createSubscribeFrame(
                0x04, dynamicIndex[0], 'subscribe.add_item',
                [subKey, this.blockTable[key].func, this.blockTable[key].paras[paraItem]]));
        }
    }

    async cancelSubscribe(tag, addition_para = "default") {
        let key = this.__getKeyViaTag(tag);
        if (key === undefined) {
            return;
        }

        if (this.communication && this.blockTable[key].subscribeFlag[addition_para] === SUBSCRIBER) {
            let dynamicIndex = onlineProtocolPackage.getOnlineProtocolDanamicIndex()[0];

            let subKey = key;
            if (addition_para !== "default") {
                subKey = key + '_' + addition_para;
            }

            await this.communication.write(onlineProtocolPackage.__createFrame(
                0x04, dynamicIndex, 'subscribe.del_item', [subKey]));
            this.blockTable[key].subscribeFlag[addition_para] = NOT_SUBSCRIBER;
        }
    }

    async __waitDataUpdate(key, maxTime, addition_para = "default") {
        this.blockTable[key].dataNewFlag[addition_para] = false;
        for (let i = 0; i < maxTime / 20; ++i) {
            if (this.blockTable[key].dataNewFlag[addition_para] === true) {
                return true;
            }
            await commonFunction.delay(20);
        }
        return false;
    }
}



// enter your javascript code here
const delay = (t) => new Promise(res => setTimeout(() => res(), t))

class CNeurons {
    constructor() {
        this.types = {
            mbuild_dc_motor: 0x6209,
            mbuild_servo_motor: 0x620a,
            mbuild_speaker: 0x6604,
            mbuild_ranging: 0x6312,
            sound_sensor: 0x6313,
            light: 0x6314,
            soil_moisture: 0x6315,
            ultrasonic_ranging: 0x6316,
            mbuild_temperature: 0x6318,
            mbuild_pir: 0x6317,
            mbuild_temperatureHumidity: 0x6319,
            mbuild_motion: 0x631a,
            mbuild_slider: 0x640d,
            mbuild_touch_sensor: 0x640a,
            mbuild_button: 0x640b,
            mbuild_joystick: 0x640c,
            mbuild_knob: 0x640e,
            led: 0x6507,
            mbuild_rgb_led_strip: 0x6508,
            mbuild_led_matrix: 0x6509,
            mbuild_gpio_module: 0x6801,
            mbuild_IR_mdoule: 0x6802,
            mbuild_flame: 0x631b,
            mbuild_gas: 0x631c,
            mbuild_magnetic: 0x631e,
            mbuild_daul_rgb: 0x6311,
            mbuild_standard_shield: 0x6709,
            mbuild_starter_shield: 0x6707,
            mbuild_challenge_shield: 0x6708,
            // mbuild_led_ultrasonic: 0x630f,
        };
        this.addresses = {};
        this.datas = {}

        this._canceller = [];
    }

    _getTypeNameByTypeId(typeId) {
        let typename = '';
        for (let name in this.types) {
            if (this.types[name] == typeId) {
                typename = name;
            }
        }
        return typename;
    }

    setAddr(addr, typeId) {
        let typename = this._getTypeNameByTypeId(typeId);
        if (addr == 1) {
            this.addresses = {}
        }
        let addrs = this.addresses[typename];
        if (!addrs) {
            addrs = [];
            this.addresses[typename] = addrs;
        }
        addrs.push(addr);
    };

    getAddr(typeId, idx) {
        let typename = this._getTypeNameByTypeId(typeId);
        let addrs = this.addresses[typename]
        if (addrs == undefined) return 0; // invalid
        let r = addrs[idx - 1];
        if (r === undefined) return 0;
        return r;
    };

    setData(addr, data) {
        this.datas[addr] = data;
    };

    getData(typeId, idx) {
        let addr = this.getAddr(typeId, idx);
        if (addr == 0) {
            return 0;
        } else {
            let data = this.datas[addr];
            if (data != undefined) return data;
            return 0;
        }
    };

    regAllocID(handler) { //handler : (index, type, subtype)=>void
        if (!this.allocIDHandlers) {
            this.allocIDHandlers = []
        }
        this.allocIDHandlers.push(handler);
    }

    unregAllocID(handler) {
        if (!this.allocIDHandlers) {
            this.allocIDHandlers = []
        }
        let allocIDHandlers1 = [];
        for (let handler1 of this.allocIDHandlers) {
            if (handler == handler1) continue;
            allocIDHandlers1.push(handler);
        }
        this.allocIDHandlers = allocIDHandlers1;
    }

    start(device) {
        this.stop();

        let askAddrTimerId = setInterval(() => {
            device.asyncWriteProtocol('f0f7', ['ff1000']);
        }, 1000);

        let cancellAskAddr = () => {
            clearInterval(askAddrTimerId);
        }
        this._canceller.push(cancellAskAddr);

        // 设置地址
        let cancellSetAddr = device.subscribeReadProtocol('f0f7', ['BYTE', '10', 'BYTE', 'BYTE'], (data) => {
            let addr = data[0];
            let type = data[1];
            let subtype = data[2];
            let typeId = type * 256 + subtype;
            this.setAddr(addr, typeId);
            if (this.allocIDHandlers) {
                for (let handler of this.allocIDHandlers) {
                    try {
                        handler(addr, type, subtype);
                    } catch (ex) {
                        console.error('allocID', ex.toString());
                    }
                }
            }

        });
        this._canceller.push(cancellSetAddr);

        let cancelListenmbuild_ranging = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_ranging >> 8, this.types.mbuild_ranging & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_ranging);

        let cancelListenmbuild_temperatureHumidity = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_temperatureHumidity >> 8, this.types.mbuild_temperatureHumidity & 0xff, 0x01, 'byte', 'BYTE'], (data) => {
            let addr = data[0];
            let temperature = data[1].toFixed(1) * 100 / 100;
            let humidity = data[2].toFixed(1) * 100 / 100;
            this.setData(addr, {
                temperature,
                humidity
            });
        });
        this._canceller.push(cancelListenmbuild_temperatureHumidity);

        let cancelListenmbuild_temperature = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_temperature >> 8, this.types.mbuild_temperature & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_temperature);

        let cancelListensound_sensor = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.sound_sensor >> 8, this.types.sound_sensor & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListensound_sensor);

        let cancelListenlight = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.light >> 8, this.types.light & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenlight);

        let cancelListensoil_moisture = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.soil_moisture >> 8, this.types.soil_moisture & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListensoil_moisture);

        let cancelListenultrasonic_ranging = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.ultrasonic_ranging >> 8, this.types.ultrasonic_ranging & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenultrasonic_ranging);

        let cancelListenmbuild_button = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_button >> 8, this.types.mbuild_button & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_button);

        let cancelListenmbuild_pir = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_pir >> 8, this.types.mbuild_pir & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_pir);

        let cancelListenmbuild_joystick = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_joystick >> 8, this.types.mbuild_joystick & 0xff, 0x01, 'byte', 'byte'], (data) => {
            let addr = data[0];
            let joystick_x = data[1];
            let joystick_y = data[2];
            this.setData(addr, {
                joystick_x,
                joystick_y
            });
        });
        this._canceller.push(cancelListenmbuild_joystick);

        let cancelListenmbuild_touch_sensor = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_touch_sensor >> 8, this.types.mbuild_touch_sensor & 0xff, 0x01, 'byte'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_touch_sensor);

        let cancelListenfollower = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.follower >> 8, this.types.follower & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenfollower);

        let cancelListentouch = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.touch >> 8, this.types.touch & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListentouch);

        let cancelListencoloridentify = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.coloridentify >> 8, this.types.coloridentify & 0xff, 0x01, 'SHORT', 'SHORT', 'SHORT'], (data) => {
            let addr = data[0];
            let coloridentify_r = data[1];
            let coloridentify_g = data[2];
            let coloridentify_b = data[3];
            this.setData(addr, {
                coloridentify_r,
                coloridentify_g,
                coloridentify_b
            });
        });
        this._canceller.push(cancelListencoloridentify);

        let cancelListengyro = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.gyro >> 8, this.types.gyro & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListengyro);


        let cancelListenmagnetic = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.magnetic >> 8, this.types.magnetic & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmagnetic);

        let cancelListenmbuild_slider = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_slider >> 8, this.types.mbuild_slider & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_slider);

        let cancelListenmbuild_flame = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_flame >> 8, this.types.mbuild_flame & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_flame);

        let cancelListenmbuild_gas = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_gas >> 8, this.types.mbuild_gas & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_gas);
    };


    stop() {
        for (let can of this._canceller) {
            can();
        }
        this._canceller = [];
    }
}

const neuronsKits = new CNeurons();
async (args, app, device, block) => {
    let index = parseInt(args.index);
    let data = neuronsKits.getData(neuronsKits.types.mbuild_ranging, index);
    return data;
}
async (args, app, device, block) => {
    let index = parseInt(args.index);
    let data = neuronsKits.getData(neuronsKits.types.mbuild_temperatureHumidity, index);
    if (data == 0) return 0;
    return data.mbuild_temperature;
}

const BITS2HEX = (matrix, w, h) => {
    let r = [];
    for (let i = 0; i < w * h; i = i + 8) {
        let temp = 0;
        for (let j = 0; j < 8; j++) {
            if (isNaN(matrix[i + j])) {
                matrix = matrix + '0'
            }
            temp += parseInt(matrix[i + j]) * Math.pow(2, (7 - j));
        }
        r.push(temp);
    }
    return r
}

const limitedScopeOfArgs = (val, min, max) => {
    if (val < min)
        val = min;
    else if (val > max)
        val = max;
    return val;
}

const Datamanage = (index) => {
    let id = Math.round(parseFloat(index));
    if (id <= 0) {
        id = 1;
    }
    return id;
}

const parseIndex = (index) => {
    let id = Math.round(parseFloat(index));
    if (id <= 0) {
        id = 1;
    }
    return id;
}

const parseParameter = (value, min, max) => {
    let data = Math.round(parseFloat(value));
    if (!isNaN(data)) {
        if (min != undefined) {
            if (data < min) {
                data = min;
            }
        }
        if (max != undefined) {
            if (data > max) {
                data = max;
            }
        }
    }
    return data;
}

class OnlineUtil {
    // 延时 n 秒
    static async delay(n) {
        return new Promise(res => setTimeout(() => res(), n * 1000));
    }
    static bits2hex(matrix, w, h) {
        let r = ''
        for (let i = 0; i < w * h - 1; i = i + 4) {
            let x = Number(matrix[i])
            let y = Number(matrix[i + 1])
            let z = Number(matrix[i + 2])
            let w1 = Number(matrix[i + 3])
            r += (x * 8 + y * 4 + z * 2 + w1).toString(16)
        }
        return r
    }
    static crc32(Instr) {
        if (!OnlineUtil._Crc32Table) OnlineUtil._initCrc();
        let Crc = 0xFFFFFFFF;
        for (let i = 0; i < Instr.length; i++)
            Crc = ((Crc >> 8) & 0x00FFFFFF) ^ OnlineUtil._Crc32Table[(Crc & 0xFF) ^ Instr[i]];
        Crc ^= 0xFFFFFFFF;
        Crc = Crc >>> 0
        return Crc;
    }
    static _initCrc() {
        OnlineUtil._Crc32Table = []
        for (let i = 0; i < 256; i++) {
            let Crc = i;
            for (let j = 0; j < 8; j++) {
                if (Crc & 1)
                    Crc = ((Crc >> 1) & 0x7FFFFFFF) ^ 0xEDB88320;
                else
                    Crc = ((Crc >> 1) & 0x7FFFFFFF);
            }
            OnlineUtil._Crc32Table.push(Crc)
        }
    }
}

/**
 * firmware updator
 */

const config = {
    allocReq: [0xff, 0x10, 0x00],
    channel: 'firmware.uploader',
    protocol: 'f0f7',
    hasPort: false,
    servoProtocol: false,
    segment: 64,
    hasMainCtrl: false,
    allocIDProxy: true
};


const hardwareIDTab = [{
        hidM: 256,
        hidL: 580,
        typeid: 0x6209
    },
    {
        hidM: 256,
        hidL: 683,
        typeid: 0x620a
    },
    {
        hidM: 256,
        hidL: 0,
        typeid: 0x6604
    },
    {
        hidM: 194,
        hidL: 379,
        typeid: 0x6312
    },
    {
        hidM: 256,
        hidL: 960,
        typeid: 0x6313
    },
    {
        hidM: 194,
        hidL: 512,
        typeid: 0x6314
    },
    {
        hidM: 194,
        hidL: 960,
        typeid: 0x6315
    },
    {
        hidM: 256,
        hidL: 64,
        typeid: 0x6316
    },
    {
        hidM: 194,
        hidL: 768,
        typeid: 0x6318
    },
    {
        hidM: 320,
        hidL: 1023,
        typeid: 0x6317
    },
    {
        hidM: 194,
        hidL: 830,
        typeid: 0x6319
    },
    {
        hidM: 256,
        hidL: 830,
        typeid: 0x631a
    },
    {
        hidM: 320,
        hidL: 256,
        typeid: 0x640d
    },
    {
        hidM: 194,
        hidL: 129,
        typeid: 0x640a
    },
    {
        hidM: 194,
        hidL: 645,
        typeid: 0x640b
    },
    {
        hidM: 194,
        hidL: 579,
        typeid: 0x640c
    },
    {
        hidM: 320,
        hidL: 194,
        typeid: 0x6507
    },
    {
        hidM: 256,
        hidL: 129,
        typeid: 0x6508
    },
    {
        hidM: 256,
        hidL: 1023,
        typeid: 0x6509
    },
    {
        hidM: 194,
        hidL: 1023,
        typeid: 0x6802
    },
    {
        hidM: 320,
        hidL: 645,
        typeid: 0x631b
    },
    {
        hidM: 320,
        hidL: 683,
        typeid: 0x631c
    },
    {
        hidM: 256,
        hidL: 768,
        typeid: 0x631e
    },
    {
        hidM: 256,
        hidL: 895,
        typeid: 0x640e
    },
    {
        hidM: 194,
        hidL: 895,
        typeid: 0x6311
    },
    {
        hidM: -1024,
        hidL: 1,
        typeid: 0x6709
    },
    {
        hidM: -1024,
        hidL: 2,
        typeid: 0x6707
    },
    {
        hidM: -1024,
        hidL: 3,
        typeid: 0x6708
    },
    {
        hidM: -1024,
        hidL: 128,
        typeid: 0x6707
    },
    // { hidM: 768, hidL: 379, typeid: 0x630f }
];


/**
 * 协议配置
 */
const MAX_ID = 0xffff; // short
const Protocol = {
    _id: 0,
    // ID生成器，用于请求流水号，和返回对应
    generateID() {
        if (Protocol._id > MAX_ID) {
            Protocol._id = 0;
        }
        return Protocol._id++;
    },
}

// console.log("crc32=",makeCrc32Table());
// 步骤0(option)：request ready for update to controller
if (config.hasMainCtrl) {
    Protocol._prepareUpdate = async (app, device) => {
        let req = [0x00, 0x00, 0x70, 0x00, 0x71, 0x01]
        await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    }
    // 步骤0(option)：request ready for update to controller
    Protocol._endUpdate = async (app, device) => {
        let req = [0x00, 0x00, 0x70, 0x00, 0x71, 0x02]
        await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    }
}

// 步骤一：分配ID
Protocol._allocID = async (app, device, port) => {
    let req = config.allocReq;
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let err = 'OK when allocate ID';
    app.log(err);
    err = 'enter f3f4 unvarnished transmission mode';
    app.log(err);
}

// 步骤二：查询固版本
Protocol._checkVer = async (app, device, port, modID) => {
    let req = [modID, 0x12];
    if (config.hasPort) {
        req = [port].concat(req);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let rsp = [modID, 0x12, 'BYTE', 'BYTE', 'SHORT'];
    if (config.hasPort) {
        rsp = [port].concat(rsp);
    }
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let version1 = ret[0].toString().padStart(2, '0');
        let version2 = ret[1].toString().padStart(2, '0');
        let version3 = ret[2].toString().padStart(3, '0');
        let ver = `${version1}.${version2}.${version3}`;
        return ver;
    }
    return null;
}

Protocol._checkVer_1 = async (app, device, port, modID) => {
    let req = [modID, 0x12];
    if (config.hasPort) {
        req = [port].concat(req);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let rsp = [modID, 0x12, 'BYTE', 'BYTE', 'SHORT', 'SHORT'];
    if (config.hasPort) {
        rsp = [port].concat(rsp);
    }
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    console.log("ret:", ret)
    if (ret) {
        let version1 = ret[0].toString().padStart(2, '0');
        let version2 = ret[1].toString().padStart(2, '0');
        let version3 = ret[2].toString().padStart(3, '0');
        let ver = `${version1}.${version2}.${version3}`;
        return ver;
    }
    return null;
}

// 步骤三:升级模块
// 切升级模式
Protocol._switchBootLoad = async (app, device, port, modID, types) => {
    let type = types[0];
    let subtype = types[1];
    let req = [modID, 0x61, 0x05, ['BYTE', type],
        ['BYTE', subtype]
    ];
    let rsp = [modID, 0x15, 'byte'];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    return true;
    throw "TODO by CKR"
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let res = ret[0]
        let err = ''
        if (res == 0x0f) { //succ
            return true
        } else if (res == 0x11) { //信道忙
            err = 'channel busy when update';
            app.log(err);
            console.error(err);
        } else if (res == 0x12) { //错误的服???类�����
            err = 'wrong serice request when update';
            app.log(err);
            console.error(err);
        } else if (res == 0x13) { //错误的数据
            err = 'wrong data when update';
            app.log(err);
            console.error(err);
        } else {
            err = `unknown error of ${res.toString(16)} when update`;
            app.log(err);
            console.error(err);
        }
    }
    return false;
}
// 步骤五：查模块硬件ID
Protocol._getHardwareID = async (app, device, port, modID) => {
    let req = [modID, 0x61, 0x06];
    let rsp = [modID, 0x61, 0x06, 'short', 'short'];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp, 2000);
    let err = '';
    if (ret) {
        err = 'OK when inquire hardware ID';
        app.log(err);
        console.error(err);
        console.log(ret[0], ret[1]);

        return [ret[0], ret[1]] //ID1, ID2
    }
    err = 'wrong data when inquire hardware ID';
    app.log(err);
    console.error(err);
    return null;
}
// 步骤六：传送升级文件（若返回校验错误或者没���返回，可以重传包）
// 6.1 传送文件信息
Protocol._updateFileInfo = async (app, device, port, index, data) => {
    let reqID = 0x00;
    let fileSz = data.length;
    let crcData = OnlineUtil.crc32(data);
    let req = [index, 0x61, 0x07, ['SHORT', reqID],
        ['long', data.length],
        ['long', crcData]
    ];
    let rsp = [index, 0x61, 0x07, ['SHORT', reqID], 'BYTE']
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    let err = '';
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let res = ret[0]
        if (res == 0x01) return true;
        else if (res == 0x00) {
            err = `error ${res} when updata file info`;
        } else {
            err = `internal error ${res} when updata file info`;
        }
    } else {
        err = `time out when updata file info`;
    }
    app.log(err);
    console.error(err);
    return false;
}
// 6.2 传送文件块
Protocol._updateChunk = async (app, device, port, modID, chunk, chunkIdx) => {
    let req = [modID, 0x61, 0x07, ['SHORT', chunkIdx],
        ['block', chunk]
    ];
    let rsp = [modID, 0x61, 0x07, ['SHORT', chunkIdx],
        'BYTE'
    ];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    };

    let err = '';
    await device.asyncWriteProtocol(config.protocol, req, 0, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let res = ret[0]
        if (res == 0x01) return true;
        else if (res == 0x00) {
            err = `error ${res} when updata file chunk`;
        } else {
            err = `internal error ${res} when updata file chunk`;
        }
    } else {
        err = `time out when updata file chunk`;
    }
    app.log(err);
    console.error(err);
    return false;
}
// 步骤7：查询升级结果，若返回升级失败，重新传送升级文件。
Protocol._updateCheckSucc = async (app, device, port, modID) => {
    let reqID = Protocol.generateID();
    let req = [modID, 0x61, 0x08];
    let rsp = [modID, 0x61, 0x08, 'BYTE'];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    let err = '';
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    // throw "TODO by lxf"
    if (ret) {
        let res = ret[0]
        if (res == 0x01) return true;
        else if (res == 0x00) {
            err = `error ${res} after updating the whole file`;
        } else {
            err = `internal error ${res} after updating the whole file`;
        }
    } else {
        err = `time out after updating the whole file`;
    }
    app.log(err);
    console.error(err);
    return false;
}
// 步骤八：重启模块（升级成功后重启模块
Protocol._updateReset = async (app, device, port, modID) => {
    let req = [modID, 0x11]
    if (config.hasPort) {
        req = [port].concat(req);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    await OnlineUtil.delay(2);
}
// step:6~8
Protocol._update = async (app, device, port, index, data, logHandler, progressHandle, finishHandler, errHandler) => {
    let err = 'update faie';
    // try 3 times
    let tryMax = 5;
    let tryCount = 0
    for (tryCount = 0; tryCount < tryMax; ++tryCount) {
        OnlineUtil.delay(5);
        let r = await Protocol._updateFileInfo(app, device, port, index, data);
        if (r) break;
    }
    if (tryCount == tryMax) {
        err = `update file info fail ${tryMax} times, update quit`
        return false
    }

    let fileOffset = 0;
    let fileSz = data.length;
    let chunkIdx = 1;
    do {
        let end = fileOffset + config.segment;
        if (end >= data.length) {
            end = data.length
        }
        let chunk = data.slice(fileOffset, end);

        for (tryCount = 0; tryCount < tryMax; ++tryCount) {
            let r = await Protocol._updateChunk(app, device, port, index, chunk, chunkIdx);
            if (r) break;
        }
        if (tryCount == 3) {
            err = `update chunk at ${fileOffset} fail ${tryMax} times, update quit`
            return false
        }
        chunkIdx++;
        fileOffset = end;
        progressHandle(Math.floor((fileOffset / data.length) * 100));
        if (!device.isConnected()) {
            return false;
        }
    } while (fileOffset < data.length);
    let res = await Protocol._updateCheckSucc(app, device, port, index);
    if (!res) return false;
    progressHandle(100);
    await Protocol._updateReset(app, device, port, index);
    return true;
}

/*分配ID等待回包*/
Protocol.assign_id_command = async (app, device, port, idx) => {
    await OnlineUtil.delay(3);
    await Protocol._allocID(app, device, port);
    let send_count = 0;
    let typeid = await _allocator.getAddr(port, idx);
    while (typeid == null) {
        send_count += 1;
        await OnlineUtil.delay(1);
        await Protocol._allocID(app, device, port);
        typeid = await _allocator.getAddr(port, idx);
        if (typeid != null) {
            break;
        }
        if (send_count > 5) {
            break
        }
    }
    // # print (responses_result_dict["assign_id"])
    if (typeid != null) {
        return typeid;
    }
    return null;
}

/*升级一个模块*/
Protocol.updateModeByAddr = async (app, device, port, index, typeid, data, logHandler, progressHandle, finishHandler, errHandler) => {
    let tryMax = 5;
    let type = Math.floor(typeid / 256);
    let subType = typeid % 256
    // for (let i = 0; i < tryMax; ++i) {
    await Protocol._switchBootLoad(app, device, port, index, [type, subType]) //[type, subType]
    let typeid1 = await Protocol.assign_id_command(app, device, port, index);
    type = Math.floor(typeid1 / 256);
    subType = typeid1 % 256
    await OnlineUtil.delay(0.2)

    await OnlineUtil.delay(5)
    //if ((type == 0x00) && (subType == 0x00)) {
    await Protocol.allocID(app, device);
    await OnlineUtil.delay(1);
    await Protocol._update(app, device, port, index, data, logHandler, progressHandle, finishHandler, errHandler);
    return
    //}
    // }
    throw "bootload fail"
}

Protocol.HardwareIDTotypeId = async (hardwareID) => {
    let found = hardwareIDTab.find((data) => {
        if (hardwareID[0] == -1024) {
            if (hardwareID[1] == data.hidL) {
                return true;
            } else return false;
        } else {
            let cond1 = Math.abs(hardwareID[0] - data.hidM) < 50;
            let cond2 = Math.abs(hardwareID[1] - data.hidL) < 50;
            return cond1 && cond2
        }
    })
    if (found) return found.typeid
}



class CAllocator {
    constructor() {
        // [portID:[index:{typeId, version}]
        this.addresses = [];
        // {typeId:{data, version}} //user provided
        this.typeDatas = {}
        if (config.allocIDProxy) {
            this.onAllocID = this.onAllocID.bind(this);
            neuronsKits.regAllocID(this.onAllocID);
        }
    }

    resetAddr() {
        this.addresses = []
    }

    onAllocID(index, type, subtype) {
        let typeId = type * 256 + subtype;
        this.setAddr(1, index, typeId);
    }

    setAddr(port, index, typeId) {
        let portDatas = this.addresses[port];
        if (!portDatas) {
            portDatas = [];
            this.addresses[port] = portDatas;
        }
        let addr = portDatas[index];
        if (!addr) {
            addr = {}
            portDatas[index] = addr;
        }
        addr.typeId = typeId;
    };

    getAddr(portID, idx) {
        let addrs = this.addresses[portID]
        if (addrs == undefined) return 0; // invalid
        let r = addrs[idx - 1];
        if (r === undefined) return 0;
        return r.typeId;
    };

    async iterateModule(asyncHandler) {
        for (let port = 1; port < _allocator.addresses.length; ++port) {
            let addrs = _allocator.addresses[port];
            if (addrs == undefined) continue;
            for (let index = 1; index < addrs.length; ++index) {
                let addr = addrs[index];
                if (addr == undefined) continue;
                await asyncHandler(port, index, addr)
            }
        }
    }

    async fixAllocIDByHw(app, device) {
        await this.iterateModule(async (port, index, addr) => {
            let typeid = addr.typeId;
            if (typeid == 0) {
                let hardid = await Protocol._getHardwareID(app, device, port, index);
                if (hardid != null) {
                    let count_typid = await Protocol.HardwareIDTotypeId(hardid);
                    console.log("type_id:", count_typid);
                    typeid = count_typid;
                    addr.typeId = typeid;
                }
            }
        })

    }

    setVersion(port, index, version) {
        let portDatas = this.addresses[port];
        if (!portDatas) {
            portDatas = [];
            this.addresses[port] = portDatas;
        }
        let addr = portDatas[index];
        if (!addr) {
            addr = {}
            portDatas[index] = addr;
        }
        addr.version = version;
    };

    //比较所有模块版本号
    async compareVersion(app, device, moduleInfo) {
        let needUpdate = false;
        await this.iterateModule(async (port, index, addr) => {
            if (addr.typeId == 0) {
                needUpdate = true;
            }
            let device_ver = addr.version;
            let file_ver = moduleInfo.get(addr.typeId)
            console.log(`compareVersion-------typeId:${addr.typeId},device_ver:${device_ver},file_ver:${file_ver}`)
            if (file_ver == undefined) {
                return;
            }
            if (addr.typeId == 26375) { //插件临时版本，解决产品需求暂时不想要升级mbot2/003固件,和标准扩展板006之前版本查询版本号回复28的问题
                if (device_ver != null) {
                    let file_ver_str = file_ver.split('.')
                    let device_ver_str = device_ver.split('.')
                    console.log(`compareVersionStr--file:${file_ver_str},device:${device_ver_str}`)
                    console.log("device:", device_ver_str[2]);
                    if (file_ver_str[0] == device_ver_str[0] && device_ver_str[2] < file_ver_str[2]) {
                        if (device_ver_str[2] == "003") {

                            needUpdate = false;
                        } else {
                            needUpdate = true;
                        }
                    }
                }
            } else {
                if ((file_ver != device_ver) && (device_ver != null)) {
                    needUpdate = true;
                }
            }

        });
        module_upgrade_flag = needUpdate;
        return needUpdate;
    }

    async allocID(app, device, getVersion = false) {
        let version = 0;
        await Protocol._allocID(app, device, 1);
        if (config.allocIDProxy) {
            await OnlineUtil.delay(0.5);
            await this.fixAllocIDByHw(app, device);
            if (getVersion) {
                await this.iterateModule(async (port, index, addr) => {
                    if ((addr.typeId == 0x6709) || (addr.typeId == 0x6707)) {
                        version = await Protocol._checkVer_1(app, device, port, index);
                        console.log("allocID", version);
                    } else {
                        version = await Protocol._checkVer(app, device, port, index);
                    }
                    addr.version = version;
                })
            }
            return;
        }

        let req = ['BYTE', 0x10, 'BYTE', 'BYTE'];
        if (config.hasPort) {
            req = ['BYTE'].concat(req);
        }
        let cancellSetAddr = device.subscribeReadProtocol(config.protocol, req, async (data) => {
            let portIdx = 0;
            let indexIdx = 0;
            let typeIdx = 1;
            let subTypeIdx = 2;
            let port = 1;
            if (config.hasPort) {
                indexIdx = 1;
                typeIdx = 2;
                subTypeIdx = 3;
                port = data[portIdx];
            }
            let index = data[indexIdx];
            let type = data[typeIdx];
            let subtype = data[subTypeIdx];
            let typeId = type * 256 + subtype;
            let count_typid = 0;
            console.log(`set port: ${port}, addr:${index}, typeId:${typeId}`);
            if (typeId == 0) {
                let hardid = await Protocol._getHardwareID(app, device, port, index);
                count_typid = await Protocol.HardwareIDTotypeId(hardid);
                console.log(`--------------------------------------hardid:${hardid},count_typid:${count_typid}`);
                typeId = count_typid;
            }
            this.setAddr(port, index, typeId);
            if (getVersion) {
                let version = await Protocol._checkVer(app, device, port, index);
                console.log("version:", version)
                this.setVersion(port, index, version);
            }
        });

        let cancellSetSmartServo;
        if (config.servoProtocol) {
            cancellSetSmartServo = device.subscribeReadProtocol(config.protocol, ['BYTE', 'BYTE', 0x10, 0x60], (data) => {
                let port = data[0];
                let index = data[1];
                let typeId = 0x6000;
                this.setAddr(port, index, typeId);
            });
        }
        await OnlineUtil.delay(1.5);

        cancellSetAddr();
        if (config.servoProtocol) {
            cancellSetSmartServo();
        }
    }

    bindDatas(datas) {
        this.typeDatas = {}
        for (let {
                type,
                data,
                version
            } of datas) {
            if (type == "") { // if mother board
                this.typeDatas[0] = {
                    data,
                    version
                };
            } else {
                let typeId = parseInt(type, 16);
                this.typeDatas[typeId] = {
                    data,
                    version
                };
            }
        }
    }
}

let _allocator = null;

function getAllocator() {
    if (!_allocator) {
        _allocator = new CAllocator();
    }
    return _allocator;
}

Protocol.bindDatas = (datas) => {
    getAllocator().bindDatas(datas)
}

Protocol.allocID = async (app, device) => {
    getAllocator().resetAddr();
    await getAllocator().allocID(app, device);
}


Protocol.uploadModules = async (app, device, logHandler, progressHandle, finishHandler, errHandler) => {
    for (let port = 0; port < _allocator.addresses.length; ++port) {
        let typeIdVers = _allocator.addresses[port]
        if (!typeIdVers) continue;
        let typeids = typeIdVers.map(addr => addr.typeId)
        for (let index = 1; index < typeids.length; ++index) {
            let typeid = typeids[index]
            if (!typeid) continue // empty type// but unreachable!!
            if (typeid != 26375 && typeid != 26377) continue //如果不是mbot2底板和标准拓展版，则不升级mbuild模块.
            let dataversion = _allocator.typeDatas[typeid]
            if (!dataversion) {
                throw "not have this dataversion file!!!" + dataversion;
            }
            // check if version is lower
            // console.log(`--------------------------port:${port},index:${index},device_ver:${device_ver}`)
            let file_ver = dataversion.version;
            //if ((file_ver > device_ver) || (device_ver == null))
            {
                let data = dataversion.data;
                if (!data) {
                    throw "not have this data file!!!" + dataversion;
                }

                let type = Math.floor(typeid / 256);
                let subType = typeid % 256
                await Protocol.updateModeByAddr(app, device, port, index, typeid, new Uint8Array(data), logHandler, progressHandle, finishHandler, errHandler);
                console.log(`upload module of port:${port} index:${index} type:${type}, subType:${subType} succuess`);
            }
        }
    }
}

// 升级主控ESP32
Protocol.updateESP32 = (app, device, data, logHandler, progressHandle, finishHandler, errHandler) => {
    // TODO by CKR
    finishHandler();
    return true
    let uploaderService = app.getService('firmware.uploader');
    let uploader1 = uploaderService.getDriver('esptool');
    if (!uploader1) {
        errHandler('cannot find firmware driver of esptool');
        return false;
    }
    try {
        uploader1(data, logHandler, progressHandle, finishHandler, errHandler);
    } catch (ex) { // 主控升级出错
        errHandler(`upload esptool fail` + ex);
        return false;
    }
    return true
}

// let total_size = 1
// 升级升部固件
Protocol.updateFirmwares = async (app, device, datas, logHandler, progressHandle, finishHandler, errHandler) => {
    try {
        // onlineManager.parasUpdate("cyberpi_restart");
        // await onlineManager.request("cyberpi_restart");
        if (datas instanceof Array) { // 包括模块的升级
            // prepare datas for update
            if (config.hasMainCtrl) {
                await Protocol._prepareUpdate(app, device);
            }
            Protocol.bindDatas(datas);
            await Protocol.allocID(app, device)
            window._allocID_debug = _allocator;
            // 模块升级
            let cyberpi_upgrade = app.getService('firmware.uploader').getDriver('esptool');
            let mainFirmwareData = _allocator.typeDatas[0];

            if (module_upgrade_flag) {
                await Protocol.uploadModules(app, device, logHandler, progressHandle, finishHandler, errHandler);
                finishHandler();
            } else {
                cyberpi_upgrade(mainFirmwareData.data, logHandler, progressHandle, finishHandler, errHandler);
            }
            neuronsKits.stop();
            // 主控升级
            // check if version is lower
            if (config.hasMainCtrl) {
                let mainFirmwareDataVersion = _allocator.typeDatas[0];
                Protocol.updateESP32(app, device, mainFirmwareDataVersion.data, logHandler, progressHandle, finishHandler, errHandler)
            } else {
                // finishHandler();
            }
        } else { // 单主控升级
            // 主控
            if (config.hasMainCtrl) {
                if (Protocol.updateESP32(app, device, datas, logHandler, progressHandle, finishHandler, errHandler)) {
                    return;
                }
            }
        }
    } catch (ex) {
        errHandler('unknown error of ' + ex);
        return;
    }
}

/**
 * firmware updator end
 */
// **************************************************************************************** //
class iotOperationManagerClass {
    constructor() {
        this._appContext = null;
        this.optionsMap = {};

        this.url = {
            cityURL: (city) => `https://mweather.makeblock.com/weatherSearch?city=${city}`,
            weatherURL: (woeid, type) => `https://mweather.makeblock.com/getweather?woeid=${woeid}&type=${type}`,
            airCityURL: 'https://msapi.makeblock.com/air/search',
            airURL: 'https://msapi.makeblock.com/air/getone',
            airListURL: 'https://msapi.makeblock.com/air/arglist'
        }
    }

    requestHttp(method, {
        url,
        header,
        data
    }, callback) {
        let http = new XMLHttpRequest();
        http.open(method, url);
        if (method == 'GET') {
            http.send();
        } else if (method == 'POST') {
            header && header.forEach(item => {
                http.setRequestHeader(item[0], item[1]);
            });
            if (data) {
                http.setRequestHeader('Content-Type', 'application/json')
                http.send(JSON.stringify(data));
            } else {
                http.send();
            }
        } else {
            http.send();
        }

        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status == 200) {
                if (callback) {
                    callback(http.responseText);
                }
            } else if (http.status != 200) {
                if (callback) {
                    callback("");
                }
            }

        }
    }

    getCity(city) {
        return new Promise(resolve => {
            this.requestHttp('GET', {
                url: this.url.cityURL(city)
            }, (result) => {
                resolve(JSON.parse(result));
            });

        })
    }

    getWeather(woeid, type) {
        if (woeid === '' || woeid == null || isNaN(woeid)) {
            return "";
        }
        return new Promise(resolve => {
            this.requestHttp('GET', {
                url: this.url.weatherURL(woeid, type)
            }, result => {
                resolve(result);
            });
        });
    }

    getCityAndWeather(city, type) {
        return this.getCity(city).then(data => {
            let woeid = JSON.parse(data)[0]['woeid'];
            return this.getWeather(woeid, type);
        })
    }

    getAirCityData(city) {
        return new Promise(resolve => {
            this.requestHttp('POST', {
                url: this.url.airCityURL,
                data: {
                    searchkey: city
                }
            }, result => {
                resolve(JSON.parse(result).data);
            });
        })
    }

    getAirQuality(cityID, type) {
        if (cityID === '' || cityID == null || isNaN(cityID)) {
            return "";
        }
        return new Promise(resolve => {
            this.requestHttp('POST', {
                url: this.url.airURL,
                data: {
                    cid: cityID,
                    arg: type
                }
            }, result => {
                resolve(result);
            });
        });
    }

    getAirList(cityID) {
        if (cityID === '' || cityID == null || isNaN(cityID)) {
            return "";
        }
        return new Promise(resolve => {
            this.requestHttp('POST', {
                url: this.url.airListURL,
                data: {
                    cid: cityID
                }
            }, result => {
                resolve(result);
            });
        });
    }


    async DialogWidget(widget, name, title, getOptions) {
        let requestTimer = undefined;
        let valueMap = widget.valueMap_;
        if (!(valueMap instanceof Array)) {
            valueMap = ['', ''];
        }

        const service = this._appContext.getService('system.ui');
        return await service.dialog(name, {
            title,
            width: '340px',
            fields: [{
                id: name,
                label: null,
                type: 'select',
                options: this.optionsMap[name],
                value: valueMap[0] || '',
                props: {
                    // mode: 'combobox',
                    showSearch: true,
                    autoFocus: true,
                    placeholder: 'search wifi',
                    filterOption: false,
                    // defaultActiveFirstOption: false,
                    // notFoundContent: null,
                    onBlur: (value) => {
                        if (!value) {
                            return;
                        }
                    },
                    onSelect: (value, resetValue) => {
                        if (!value) {
                            return;
                        }
                        if (typeof resetValue === 'function') {
                            resetValue(value);
                        }
                    },
                    onFocus: () => {},
                    onSearch: (value, resetOptions) => {
                        if (!value) {
                            return;
                        }
                        if (requestTimer) {
                            clearTimeout(requestTimer);
                            requestTimer = null;
                        }
                        requestTimer = setTimeout(async () => {
                            try {
                                const soptions = await getOptions(value);
                                if (soptions.length > 0) {
                                    resetOptions(soptions);
                                    this.optionsMap[name] = soptions;
                                }
                            } catch (error) {
                                console.warn(error)
                            }
                        }, 250);
                    }
                }
            }],
            buttons: [{
                    id: 'cancel',
                    type: 'default',
                    text: 'BUTTON.CANCEL.TEXT',
                    style: {
                        flex: 'auto'
                    },
                    handle: (ctx) => {
                        ctx.close();
                    }
                },
                {
                    id: 'ok',
                    text: 'BUTTON.OK.TEXT',
                    style: {
                        flex: 'auto'
                    },
                    handle: (ctx) => {
                        const value = ctx.values[name];
                        const options = this.optionsMap[name];
                        if (value && options && options.length > 0) {
                            for (const key in options) {
                                const option = options[key];
                                if (option.value === value) {
                                    widget.setValue([option.text, option.value]);
                                    break;
                                }
                            }
                        }
                        ctx.close();
                    }
                }
            ]
        });
    };

    async createIotCode(app, code) {
        // process code here
        let iotService = app.getService('iot');
        let accountService = app.getService('account');
        if (iotService && accountService) {
            const weatherDomain = await iotService.getDomain('weather');
            const airDomain = await iotService.getDomain('air');
            const user = await accountService.getUserInfo();

            const privateData = {
                iotWeatherDomain: weatherDomain.replace('https', 'http') || '',
                iotAirDomain: airDomain.replace('https', 'http') || '',
                iotUid: (user && user.uid) || '',
                iotDeviceType: '1',
                iotDeviceId: 'codey',
            };
            for (let key in privateData) {
                code = code.replace(new RegExp('\\[' + key + '\\]', 'g'), privateData[key]);
            }
        }
        return code
    }

    iotLibs() {
        return `
    #common functions
    def mb_safe(func):
        def _wrapper(*args, **kwargs):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                print('===== mb_safe: ' + str(e))
                return ''
        return _wrapper

    #create iot module
    import uos
    uos.chdir('/flash/flash')
    with open("iot.py", "w") as f:
        f.write("")

    import ujson
    import iot
    import time
    import codey
    import urequests
    # from codey_wlan_board import codey_wlan

    # 云列表请求 域名
    iot_list_request_domain = '[iotCloudListDomain]'
    iot_weather_request_domin = '[iotWeatherDomain]';
    iot_air_request_domain = '[iotAirDomain]';

    def __iot_get_request_header():
        return {
            'content-type': 'application/json; charset=utf-8',
            'uid': '[uId]',
            'devicetype': '[deviceType]',
            'deviceid': '[deviceId]'
        }

    def __iot_get(request_url):
        if not codey.wifi.is_connected():
            return ''
        res = urequests.request('GET', request_url, headers = __iot_get_request_header()).json()
        return res['data']

    def __iot_post(request_url, post_data):
        if not codey.wifi.is_connected():
            return ''
        res = urequests.request('POST', request_url, headers = __iot_get_request_header(), data = post_data).json()
        return res['data']

    # 添加数据项
    @mb_safe
    def iot_list_add(name, data):
        post_data = ujson.dumps({ "listName": name, "data": data})
        return __iot_post(iot_list_request_domain + 'meos/postcloudlist', post_data)

    iot.list_add = iot_list_add

    # 得到 index 指向数据项
    @mb_safe
    def iot_list_index(name, index):
        req_type = 'index'
        req_index = 0
        if index == 'random':
            req_type = 'random'
        elif index == 'last':
            req_type = 'last'
        else:
            index = int(index)
            if index > 0:
                req_index = index - 1
            else:
                return ''
        res = __iot_get(iot_list_request_domain + 'meos/getCloudListItemByIndex?listName=' + name + '&type=' + req_type + '&index=' + str(req_index))
        return res['itemData']['data']

    iot.list_index = iot_list_index

    # 获取云列表长度
    @mb_safe
    def iot_list_length(name):
        res = __iot_get(iot_list_request_domain + 'meos/getcloudlistlen?listName=' + name)
        return int(res['listLen'])

    iot.list_length = iot_list_length

    # 获取天气信息想
    #   city_code: 城市编码
    #   data_type: 获取数据类型
    @mb_safe
    def iot_weather(city_code, data_type):
        if not codey.wifi.is_connected():
            return ''
        request_url = iot_weather_request_domin + 'getweather?woeid=' + str(city_code) + '&type=' + str(data_type)
        res = urequests.request('GET', request_url)
        text = res.text
        if int(data_type) <= 3:
            return int(text)
        return text
    iot.weather = iot_weather

    # 获取空气信息
    #   cid: 检查站id
    #   arg: 需要查询的信息（pm25, so2等）
    @mb_safe
    def iot_air(cid, arg):
        if not codey.wifi.is_connected():
            return ''
        post_data = ujson.dumps({ "cid": cid, "arg": arg})
        res = urequests.request('POST', iot_air_request_domain + 'air/getone', headers = __iot_get_request_header(), data = post_data)
        text = res.text
        return float(text)
    iot.air = iot_air
    `;
    }
}

// **************************************************************************************** //
let halocodeOnlineTable = [
    // led
    new onlineDataStructure("haloboard_show_ring_effect", "halo.led.show_animation", ["firefly"]),
    new onlineDataStructure("BLOCK_1570879365614", "halo.led.show_animation", ["firefly"]),
    new onlineDataStructure("haloboard_show_ring_color", "halo.led.show_ring", ["white", 0]),
    new onlineDataStructure("haloboard_show_rotation_color", "halo.led.show_ring", ["white", 1]),

    new onlineDataStructure("haloboard_show_all_leds", "halo.led.show_all", [0, 0, 0]),
    new onlineDataStructure("haloboard_show_all_leds_with_lightness", "halo.led.show_all", [0, 0, 0, 100]),
    new onlineDataStructure("haloboard_off_all_leds", "halo.led.off_all", []),
    new onlineDataStructure("haloboard_show_all_leds_with_rgb", "halo.led.show_all", [0, 0, 0]),
    new onlineDataStructure("haloboard_show_single_led_with_rgb", "halo.led.show_single", [1, 0, 0, 0]),
    new onlineDataStructure("haloboard_off_single_led", "halo.led.off_single", [1]),
    new onlineDataStructure("haloboard_show_percentage", "halo.led.ring_graph", [100]),

    // sensor
    new onlineDataStructure("haloboard_detect_button_pressed", "halo.button.is_pressed", [], {
        default: "bool"
    }),

    new onlineDataStructure("haloboard_detect_touch_0", "halo.touchpad0.is_touched", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_touch_1", "halo.touchpad1.is_touched", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_touch_2", "halo.touchpad2.is_touched", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_touch_3", "halo.touchpad3.is_touched", [], {
        default: "bool"
    }),

    new onlineDataStructure("haloboard_detect_touch_value_0", "halo.touchpad0.get_value", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_touch_value_1", "halo.touchpad1.get_value", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_touch_value_2", "halo.touchpad2.get_value", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_touch_value_3", "halo.touchpad3.get_value", [], {
        default: "int"
    }),

    new onlineDataStructure("BLOCK_1552905879755_0", "halo.touchpad0.set_touch_sensitivity", []),
    new onlineDataStructure("BLOCK_1552905879755_1", "halo.touchpad1.set_touch_sensitivity", []),
    new onlineDataStructure("BLOCK_1552905879755_2", "halo.touchpad2.set_touch_sensitivity", []),
    new onlineDataStructure("BLOCK_1552905879755_3", "halo.touchpad3.set_touch_sensitivity", []),

    new onlineDataStructure("haloboard_detect_tilt_0", "halo.motion_sensor.is_tilted_left", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_1", "halo.motion_sensor.is_tilted_right", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_2", "halo.motion_sensor.is_arrow_up", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_3", "halo.motion_sensor.is_arrow_down", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_4", "halo.motion_sensor.is_led_ring_up", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_5", "halo.motion_sensor.is_led_ring_down", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_6", "halo.motion_sensor.is_rotate_clockwise", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_7", "halo.motion_sensor.is_rotate_anticlockwise", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_8", "halo.motion_sensor.is_free_fall", [], {
        default: "bool"
    }),

    new onlineDataStructure("haloboard_detect_volume", "halo.microphone.get_loudness", ["maximum"], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_shaked", "halo.motion_sensor.is_shaked", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_shaked_value", "halo.motion_sensor.get_shake_strength", [], {
        default: "int"
    }),

    new onlineDataStructure("haloboard_detect_axis_acceleration_x", "halo.motion_sensor.get_acceleration", ["x"], {
        default: "float1"
    }),
    new onlineDataStructure("haloboard_detect_axis_acceleration_y", "halo.motion_sensor.get_acceleration", ["y"], {
        default: "float1"
    }),
    new onlineDataStructure("haloboard_detect_axis_acceleration_z", "halo.motion_sensor.get_acceleration", ["z"], {
        default: "float1"
    }),

    new onlineDataStructure("haloboard_detect_axis_gyro_x", "halo.motion_sensor.get_gyroscope", ["x"], {
        default: "float1"
    }),
    new onlineDataStructure("haloboard_detect_axis_gyro_y", "halo.motion_sensor.get_gyroscope", ["y"], {
        default: "float1"
    }),
    new onlineDataStructure("haloboard_detect_axis_gyro_z", "halo.motion_sensor.get_gyroscope", ["z"], {
        default: "float1"
    }),

    new onlineDataStructure("haloboard_detect_tilt_degree_1", "halo.motion_sensor.get_pitch", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_tilt_degree_2", "halo.motion_sensor.get_roll", [], {
        default: "int"
    }),

    new onlineDataStructure("haloboard_detect_rotation_degree_x", "halo.motion_sensor.get_rotation", ["x"], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_rotation_degree_y", "halo.motion_sensor.get_rotation", ["y"], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_detect_rotation_degree_z", "halo.motion_sensor.get_rotation", ["z"], {
        default: "int"
    }),

    new onlineDataStructure("haloboard_reset_rotation_degree", "halo.motion_sensor.reset_rotation", ["all"]),

    new onlineDataStructure("haloboard_detect_time", "halo.get_timer", [], {
        default: "float1"
    }),
    new onlineDataStructure("haloboard_reset_time", "halo.reset_timer", []),

    new onlineDataStructure("haloboard_pin_is_digtial_0", "halo.pin0.read_digital", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_pin_is_digtial_1", "halo.pin1.read_digital", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_pin_is_digtial_2", "halo.pin2.read_digital", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_pin_is_digtial_3", "halo.pin3.read_digital", [], {
        default: "int"
    }),

    new onlineDataStructure("haloboard_pin_read_analog_0", "halo.pin0.read_analog", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_pin_read_analog_1", "halo.pin1.read_analog", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_pin_read_analog_2", "halo.pin2.read_analog", [], {
        default: "int"
    }),
    new onlineDataStructure("haloboard_pin_read_analog_3", "halo.pin3.read_analog", [], {
        default: "int"
    }),

    new onlineDataStructure("haloboard_pin_write_digtial_0", "halo.pin0.write_digital", []),
    new onlineDataStructure("haloboard_pin_write_digtial_1", "halo.pin1.write_digital", []),
    new onlineDataStructure("haloboard_pin_write_digtial_2", "halo.pin2.write_digital", []),
    new onlineDataStructure("haloboard_pin_write_digtial_3", "halo.pin3.write_digital", []),

    new onlineDataStructure("haloboard_pin_write_PWM_0", "halo.pin0.write_analog", []),
    new onlineDataStructure("haloboard_pin_write_PWM_1", "halo.pin1.write_analog", []),
    new onlineDataStructure("haloboard_pin_write_PWM_2", "halo.pin2.write_analog", []),
    new onlineDataStructure("haloboard_pin_write_PWM_3", "halo.pin3.write_analog", []),

    new onlineDataStructure("haloboard_pin_set_servo_0", "halo.pin0.servo_write", []),
    new onlineDataStructure("haloboard_pin_set_servo_1", "halo.pin1.servo_write", []),
    new onlineDataStructure("haloboard_pin_set_servo_2", "halo.pin2.servo_write", []),
    new onlineDataStructure("haloboard_pin_set_servo_3", "halo.pin3.servo_write", []),

    new onlineDataStructure("halo_pin_play_buzzer_with_frequency_0", "halo.pin0.play_tone", []),
    new onlineDataStructure("halo_pin_play_buzzer_with_frequency_1", "halo.pin1.play_tone", []),
    new onlineDataStructure("halo_pin_play_buzzer_with_frequency_2", "halo.pin2.play_tone", []),
    new onlineDataStructure("halo_pin_play_buzzer_with_frequency_3", "halo.pin3.play_tone", []),

    new onlineDataStructure("haloboard_mesh_create1", "halo.mesh.start_group", []),
    new onlineDataStructure("haloboard_mesh_join1", "halo.mesh.join_group", []),
    new onlineDataStructure("haloboard_mesh_broadcast_message", "halo.mesh.broadcast", []),
    new onlineDataStructure("haloboard_mesh_broadcast_message_with_value", "halo.mesh.broadcast", []),
    new onlineDataStructure("haloboard_mesh_get_value", "halo.mesh.get_info", [], {
        default: "string"
    }),
    new onlineDataStructure("haloboard_mesh_when_received_message", "mesh.get_all_info_status", []),

];

let halocodeStatusCheckTable = [
    new onlineDataStructure("__haloboard_sys_status_get_firmware", "makeblock.get_firmware_version", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_ble_name", "makeblock.get_ble_name", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_mbuild_modules", "status_check.get_online_module", [], {
        default: "array"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_speech_result", "status_check.speech.get_error_message", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_system_mode", "makeblock.get_system_mode", [], {
        default: "int"
    }),
    new onlineDataStructure("__haloboard_sys_status_is_wifi_connected", "halo.wifi.is_connected", [], {
        default: "bool"
    }),
    new onlineDataStructure("__haloboard_sys_status_is_mac_address", "halo.wifi.get_mac", [], {
        default: "string"
    }),
]

let halocodeSystemCmdTable = [
    new onlineDataStructure("__haloboard_sys_reset_online", "online_restart", [], {
        default: "string"
    }),
]

/////////////////////////////////////////////////////////////////////////////
let cyberpiOnlineTable = [
    new onlineDataStructure("cyberpi_set_ext_update_mode_sta", "internal_lib.set_ext_update_mode_sta", [1, 5]),
    new onlineDataStructure("cyberpi_set_ext_update_bind_passthrough_channels", "global_objects.communication_o.register_passthrough_channel", [3, 5]),
    new onlineDataStructure("cyberpi_set_ext_update_unbind_passthrough_channels", "global_objects.communication_o.unregister_passthrough_channel", [3, 5]),
    // led
    new onlineDataStructure("cyberpi_play_led_animation_until", "cyberpi.led.play", ["rainbow"]),
    new onlineDataStructure("cyberpi_show_led", "cyberpi.led.show", ["r r r r r", 0]),
    new onlineDataStructure("cyberpi_move_led", "cyberpi.led.move", [1]),
    new onlineDataStructure("cyberpi_led_show_common", "cyberpi.led.on", [40, 40, 40, 1]),
    new onlineDataStructure("cyberpi_add_led_brightness", "cyberpi.led.add_bri", [10]),
    new onlineDataStructure("cyberpi_set_led_brightness", "cyberpi.led.set_bri", [10]),
    new onlineDataStructure("cyberpi_get_led_brightness", "cyberpi.led.get_bri", [], {
        default: "int"
    }),

    //speaker
    new onlineDataStructure("cyberpi_play_audio_until", "cyberpi.audio.play_until", ["hi.mp3"]),
    new onlineDataStructure("cyberpi_play_audio", "cyberpi.audio.play", ["hi.mp3"]),
    new onlineDataStructure("cyberpi_play_buzzer_tone", "cyberpi.audio.play_tone", [0]),
    new onlineDataStructure("cyberpi_stop_audio", "cyberpi.audio.stop", []),
    new onlineDataStructure("cyberpi_play_buzzer_tone_with_time", "cyberpi.audio.play_tone", [0, 0]),
    new onlineDataStructure("cyberpi_get_volume", "cyberpi.audio.get_vol", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_set_volume", "cyberpi.audio.set_vol", [0]),
    new onlineDataStructure("cyberpi_add_volume", "cyberpi.audio.add_vol", [0]),
    new onlineDataStructure("cyberpi_get_audio_speed", "cyberpi.audio.get_tempo", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_set_audio_speed", "cyberpi.audio.set_tempo", [0]),
    new onlineDataStructure("cyberpi_add_audio_speed", "cyberpi.audio.add_tempo", [0]),
    new onlineDataStructure("cyberpi_play_music_with_note", "cyberpi.audio.play_drum", ["snare.wav", 0.25]),
    new onlineDataStructure("cyberpi_play_music_with_tone_and_note", "cyberpi.audio.play_music", [60, 0.25]),
    new onlineDataStructure("cyberpi_play_music_with_tone_and_note_2", "cyberpi.audio.play_music", [60, 0.25]),

    new onlineDataStructure("cyberpi_start_record", "cyberpi.audio.record", []),
    new onlineDataStructure("cyberpi_stop_record", "cyberpi.audio.stop_record", []),
    new onlineDataStructure("cyberpi_play_record_until", "cyberpi.audio.play_record_until", []),
    new onlineDataStructure("cyberpi_play_record", "cyberpi.audio.play_record", []),



    // sensor
    // button
    new onlineDataStructure("cyberpi_button_press_a", "cyberpi.controller.is_press", ["a"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_button_press_b", "cyberpi.controller.is_press", ["b"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_button_press_any_button", "cyberpi.controller.is_press", ["any_button"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_button_count_a", "cyberpi.controller.get_count", ["a"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_button_count_b", "cyberpi.controller.get_count", ["b"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_button_count_reset", "cyberpi.controller.reset_count", ["a"]),

    // joystick
    new onlineDataStructure("cyberpi_direction_key_press_up", "cyberpi.controller.is_press", ["up"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_direction_key_press_down", "cyberpi.controller.is_press", ["down"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_direction_key_press_left", "cyberpi.controller.is_press", ["left"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_direction_key_press_right", "cyberpi.controller.is_press", ["right"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_direction_key_press_middle", "cyberpi.controller.is_press", ["middle"], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_direction_key_press_any_direction", "cyberpi.controller.is_press", ["any_direction"], {
        default: "bool"
    }),

    new onlineDataStructure("cyberpi_direction_key_count_up", "cyberpi.controller.get_count", ["up"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_direction_key_count_down", "cyberpi.controller.get_count", ["down"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_direction_key_count_left", "cyberpi.controller.get_count", ["left"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_direction_key_count_right", "cyberpi.controller.get_count", ["right"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_direction_key_count_middle", "cyberpi.controller.get_count", ["middle"], {
        default: "int"
    }),

    new onlineDataStructure("cyberpi_direction_key_count_reset", "cyberpi.controller.reset_count", ["middle"]),

    // microphone
    new onlineDataStructure("cyberpi_loudness", "cyberpi.get_loudness", ["maximum"], {
        default: "int"
    }),

    // light sensor
    new onlineDataStructure("cyberpi_brightness", "cyberpi.get_bri", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_name", "cyberpi.get_name", [], {
        default: "string"
    }),
    new onlineDataStructure("cyberpi_set_name", "cyberpi.set_name", ["MB"]),

    // motion sensor
    new onlineDataStructure("cyberpi_detect_attitude_0", "cyberpi.is_tiltleft", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_1", "cyberpi.is_tiltright", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_2", "cyberpi.is_tiltforward", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_3", "cyberpi.is_tiltback", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_4", "cyberpi.is_faceup", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_5", "cyberpi.is_facedown", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_6", "cyberpi.is_stand", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_detect_attitude_7", "cyberpi.is_handstand", [], {
        default: "bool"
    }),

    new onlineDataStructure("cyberpi_when_detect_action_0", "cyberpi.is_waveleft", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_1", "cyberpi.is_waveright", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_2", "cyberpi.is_waveup", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_3", "cyberpi.is_wavedown", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_4", "cyberpi.is_clockwise", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_5", "cyberpi.is_anticlockwise", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_6", "cyberpi.is_freefall", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_when_detect_action_7", "cyberpi.is_shake", [], {
        default: "bool"
    }),

    new onlineDataStructure("cyberpi_shaked_value", "cyberpi.get_shakeval", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_wave_angle", "cyberpi.get_wave_angle", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_wave_speed", "cyberpi.get_wave_speed", [], {
        default: "int"
    }),

    new onlineDataStructure("cyberpi_tilt_degree_1", "cyberpi.get_pitch", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_tilt_degree_2", "cyberpi.get_pitch", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_tilt_degree_3", "cyberpi.get_roll", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_tilt_degree_4", "cyberpi.get_roll", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_tilt_degree_5", "cyberpi.get_yaw", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_tilt_degree_6", "cyberpi.get_yaw", [], {
        default: "int"
    }),

    new onlineDataStructure("cyberpi_axis_acceleration_x", "cyberpi.get_acc", ["x"], {
        default: "float1"
    }),
    new onlineDataStructure("cyberpi_axis_acceleration_y", "cyberpi.get_acc", ["y"], {
        default: "float1"
    }),
    new onlineDataStructure("cyberpi_axis_acceleration_z", "cyberpi.get_acc", ["z"], {
        default: "float1"
    }),

    new onlineDataStructure("cyberpi_axis_angle_speed_x", "cyberpi.get_gyro", ["x"], {
        default: "float1"
    }),
    new onlineDataStructure("cyberpi_axis_angle_speed_y", "cyberpi.get_gyro", ["y"], {
        default: "float1"
    }),
    new onlineDataStructure("cyberpi_axis_angle_speed_z", "cyberpi.get_gyro", ["z"], {
        default: "float1"
    }),

    new onlineDataStructure("cyberpi_axis_rotation_angle_x", "cyberpi.get_rotation", ["x"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_axis_rotation_angle_y", "cyberpi.get_rotation", ["y"], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_axis_rotation_angle_z", "cyberpi.get_rotation", ["z"], {
        default: "int"
    }),

    new onlineDataStructure("cyberpi_reset_axis_rotation_angle_x", "cyberpi.reset_rotation", ["x"]),
    new onlineDataStructure("cyberpi_reset_axis_rotation_angle_y", "cyberpi.reset_rotation", ["y"]),
    new onlineDataStructure("cyberpi_reset_axis_rotation_angle_z", "cyberpi.reset_rotation", ["z"]),
    new onlineDataStructure("cyberpi_reset_axis_rotation_angle_all", "cyberpi.reset_rotation", ["all"]),

    new onlineDataStructure("cyberpi_reset_yaw", "cyberpi.reset_yaw", []),

    // timer
    new onlineDataStructure("cyberpi_timer_get", "cyberpi.timer.get", [], {
        default: "float3"
    }),
    new onlineDataStructure("cyberpi_timer_reset", "cyberpi.timer.reset", []),

    // mesh
    new onlineDataStructure("cyberpi_mesh_create", "cyberpi.mesh.set", []),
    new onlineDataStructure("cyberpi_mesh_join", "cyberpi.mesh.join", []),
    new onlineDataStructure("cyberpi_set_wifi_broadcast", "cyberpi.mesh_broadcast.set", ["aa", 0]),
    new onlineDataStructure("cyberpi_set_wifi_broadcast_with_value", "cyberpi.mesh_broadcast.set", ["aa", 0]),
    new onlineDataStructure("cyberpi_wifi_broadcast_get_value", "cyberpi.mesh_broadcast.get", [], {
        default: "string"
    }),
    new onlineDataStructure("cyberpi_wifi_broadcast_when_received_message", "cyberpi.mesh_broadcast.get_all_info_status", []),

    // radio
    // new onlineDataStructure("cyberpi_set_wifi_broadcast", "cyberpi.wifi_broadcast.set", ["aa", 0]),
    // new onlineDataStructure("cyberpi_set_wifi_broadcast_with_value", "cyberpi.wifi_broadcast.set", ["aa", 0]),
    // new onlineDataStructure("cyberpi_wifi_broadcast_get_value", "cyberpi.wifi_broadcast.get", [], { default: "string" }),
    // new onlineDataStructure("cyberpi_wifi_broadcast_when_received_message", "cyberpi.wifi_broadcast.get_all_info_status", []),

    // display
    new onlineDataStructure("cyberpi_display_print", "cyberpi.console.print", []),
    new onlineDataStructure("cyberpi_display_println", "cyberpi.console.println", []),
    new onlineDataStructure("cyberpi_console_set_font", "cyberpi.console.set_font", [12]),
    new onlineDataStructure("cyberpi_display_set_chart_name", "cyberpi.chart.set_name", ["name"]),
    new onlineDataStructure("cyberpi_display_table_add_data_at_row_column", "cyberpi.table.add", [1, 1, "1"]),
    new onlineDataStructure("cyberpi_display_clear_chart", "cyberpi.chart.clear", []),
    new onlineDataStructure("cyberpi_display_clear", "cyberpi.console.clear", []),
    new onlineDataStructure("cyberpi_display_line_chart_add_data", "cyberpi.linechart.add", [1]),
    new onlineDataStructure("cyberpi_display_bar_chart_set_interval", "cyberpi.linechart.set_step", [1]),
    new onlineDataStructure("cyberpi_display_bar_chart_add_data", "cyberpi.barchart.add", [1]),
    new onlineDataStructure("cyberpi_display_set_brush_with_color", "cyberpi.display.set_brush", [1, 1, 1]),
    new onlineDataStructure("cyberpi_display_set_brush_with_r_g_b", "cyberpi.display.set_brush", [1, 1, 1]),
    new onlineDataStructure("cyberpi_display_rotate_to", "cyberpi.display.rotate_to", [0]),
    new onlineDataStructure("cyberpi_display_off", "cyberpi.display.off", []),
    new onlineDataStructure("cyberpi_display_show_at_somewhere_with_size", "cyberpi.display.show_label", ["mb", 1, 1, 16]),
    new onlineDataStructure("cyberpi_display_show_label_xy_with_size", "cyberpi.display.show_label", ["mb", 1, 1, 16]),
    new onlineDataStructure("cyberpi_display_label_show_at_somewhere_with_size", "cyberpi.display.show_label", ["mb", 16, 1, 1, 0]),
    new onlineDataStructure("cyberpi_display_label_show_label_xy_with_size", "cyberpi.display.show_label", ["mb", 16, 1, 1, 0]),

    new onlineDataStructure("cyberpi_get_info_battery", "cyberpi.get_battery", [], {
        default: "int"
    }),
    new onlineDataStructure("cyberpi_get_info_mac", "cyberpi.get_mac_address", [], {
        default: "string"
    }),
    new onlineDataStructure("cyberpi_get_info_ble", "cyberpi.get_ble", [], {
        default: "string"
    }),
    new onlineDataStructure("cyberpi_get_info_get_language", "cyberpi.get_language", [], {
        default: "string"
    }),

    new onlineDataStructure("cyberpi_restart", "cyberpi.restart", []),

    new onlineDataStructure("cyberpi_get_wifi_name", "cyberpi.wifi.get_wifi_info", [], {
        default: "array"
    }),
    new onlineDataStructure("cyberpi_set_wifi_name", "cyberpi.wifi.connect", ['ssid', 'possword']),
    new onlineDataStructure("cyberpi_wifi_set", "cyberpi.wifi.connect", ['ssid', 'possword']),
    new onlineDataStructure("cyberpi_wifi_is_connect", "cyberpi.wifi.is_connect", [], {
        default: "bool"
    }),
    new onlineDataStructure("cyberpi_speak_with_some_language_2", "cyberpi.cloud.tts", ["zh", "你好"]),
    new onlineDataStructure("cyberpi_speech_recognition_result", "cyberpi.cloud.listen_result", []),
    new onlineDataStructure("cyberpi_translate_to_some_language_2", "cyberpi.cloud.translate", ["ss", "zh"], {
        default: "string"
    }),


];

let cyberpiStatusCheckTable = [
    new onlineDataStructure("__haloboard_sys_status_get_firmware", "makeblock.get_firmware_version", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_ble_name", "makeblock.get_ble_name", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_mbuild_modules", "status_check.get_online_module", [], {
        default: "array"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_speech_result", "status_check.speech.get_error_message", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_system_mode", "makeblock.get_system_mode", [], {
        default: "int"
    }),
]

let cyberpiSystemCmdTable = [
    new onlineDataStructure("__haloboard_sys_reset_online", "online_restart", [], {
        default: "string"
    }),
]




// system init
var sysOperation = undefined;
var commonFunction = undefined;
var onlineCommunication = undefined;

var onlineProtocolPackage = undefined;
var onlineManager = undefined;
var iotOperationManager = undefined;


// all device that loaded in mblock will use the same haloSharedObject
// so, we just create once
function createOnlineobjects() {
    if (window.haloSharedObject === undefined) {

        sysOperation = new sysOperationClass();
        commonFunction = new commonFunctionClass();
        onlineCommunication = new onlineCommunicationClass();

        onlineProtocolPackage = new onlineProtocolPackageClass();
        onlineManager = new onlineManagerClass();
        iotOperationManager = new iotOperationManagerClass();

        onlineManager.updateOnlineTable("add", halocodeOnlineTable);
        onlineManager.updateOnlineTable("add", halocodeStatusCheckTable);
        onlineManager.updateOnlineTable("add", halocodeSystemCmdTable);
        onlineManager.updateOnlineTable("add", cyberpiOnlineTable);
        onlineManager.updateOnlineTable("add", cyberpiStatusCheckTable);
        onlineManager.updateOnlineTable("add", cyberpiSystemCmdTable);

        window.haloSharedObject = {
            sysOperation: sysOperation,
            commonFunction: commonFunction,
            onlineCommunication: onlineCommunication,
            onlineProtocolPackage: onlineProtocolPackage,
            onlineManager: onlineManager,
            onlineDataStructure: onlineDataStructure,
            iotOperationManager: iotOperationManager,
        }
    } else {
        sysOperation = window.haloSharedObject.sysOperation;
        commonFunction = window.haloSharedObject.commonFunction;
        onlineCommunication = window.haloSharedObject.onlineCommunication;
        onlineProtocolPackage = window.haloSharedObject.onlineProtocolPackage;
        onlineManager = window.haloSharedObject.onlineManager;
        iotOperationManager = window.haloSharedObject.iotOperationManager;

        onlineManager.updateOnlineTable("add", halocodeOnlineTable);
        onlineManager.updateOnlineTable("add", halocodeStatusCheckTable);
        onlineManager.updateOnlineTable("add", halocodeSystemCmdTable);
        onlineManager.updateOnlineTable("add", cyberpiOnlineTable);
        onlineManager.updateOnlineTable("add", cyberpiStatusCheckTable);
        onlineManager.updateOnlineTable("add", cyberpiSystemCmdTable);
    }
}

async function haloExtSystemInit(device, app) {
    onlineCommunication.setDevice(device);
    await sysOperation.init(onlineCommunication, app);
}

function haloExtSystemDeinit(device, app) {
    sysOperation.automaticModeSyncCancelHandle && sysOperation.automaticModeSyncCancelHandle();
    onlineCommunication.setDevice(null);
    sysOperation.deinit();
}

async function onlineSystemInit(device, app) {
    onlineManager.setCommunication(onlineCommunication);
    // reset device online table
    await sysOperation.resetOnlineModeOfDevice();
    await onlineManager.start();
}

async function onlineSystemDeinit(device, app) {
    onlineManager.stop();
    onlineManager.setCommunication(null);
}

createOnlineobjects();

const disableBlocks = {
    debug: ["cyberpi.cyberpi_wifi_set", "cyberpi.cyberpi_wifi_is_connect", "cyberpi.cyberpi_speak_with_some_language", "cyberpi.cyberpi_speak_with_some_language_2", "cyberpi.cyberpi_speak_with_some_language_3", "cyberpi.cyberpi_speech_recognition_with_time_3", "cyberpi.cyberpi_speech_recognition_with_time_2", "cyberpi.cyberpi_speech_recognition_with_time", "cyberpi.BLOCK_1599643085220", "cyberpi.cyberpi_speech_recognition_result", "cyberpi.cyberpi_translate_to_some_language_2", "cyberpi.cyberpi_translate_to_some_language", "cyberpi.cyberpi_wifi_set", "cyberpi.cyberpi_wifi_is_connect", "cyberpi.cyberpi_set_cloud_broadcast", "cyberpi.cyberpi_set_cloud_broadcast_with_value", "cyberpi.cyberpi_when_cloud_broadcast", "cyberpi.cyberpi_cloud_broadcast_get_value", "cyberpi.cyberpi_get_weather_from_internet", "cyberpi.cyberpi_get_air_quality_from_internet", "cyberpi.cyberpi_get_sun_time_from_internet", "cyberpi.BLOCK_1610527804319", "cyberpi.cyberpi_python_insert"],
    upload: ["cyberpi.cyberpi_follow_mblock_sprite", "cyberpi.cyberpi_speech_recognition_with_record_2", "event_whenflagclicked", "event_whenkeypressed", "data_showvariable", "data_hidevariable", "data_showlist", "data_hidelist"]
};

const mustLoginBlocks = ["cyberpi.cyberpi_speak_with_some_language", "cyberpi.cyberpi_speak_with_some_language_2", "cyberpi.cyberpi_speak_with_some_language_3", "cyberpi.cyberpi_speech_recognition_with_time_3", "cyberpi.cyberpi_speech_recognition_with_time_2", "cyberpi.cyberpi_speech_recognition_with_record_2", "cyberpi.cyberpi_speech_recognition_with_time", "cyberpi.BLOCK_1599643085220", "cyberpi.cyberpi_speech_recognition_with_record", "cyberpi.cyberpi_speech_recognition_result", "cyberpi.cyberpi_translate_to_some_language_2", "cyberpi.cyberpi_translate_to_some_language", "cyberpi.cyberpi_set_cloud_broadcast", "cyberpi.cyberpi_set_cloud_broadcast_with_value", "cyberpi.cyberpi_when_cloud_broadcast", "cyberpi.cyberpi_cloud_broadcast_get_value", "cyberpi.cyberpi_get_weather_from_internet", "cyberpi.cyberpi_get_air_quality_from_internet", "cyberpi.cyberpi_get_sun_time_from_internet", "cyberpi.cyberpi_get_local_time_from_internet", "cyberpi.cyberpi_get_time_from_internet"];

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



class ExtCyberpi {

    constructor() {
        this.funcs = {
            'firmwareSettingHandle': ({
                handle: (app, device, info) => {
                    const uploaderUI = app.getService('system.ui.firmware.uploader');
                    if (uploaderUI) {
                        uploaderUI.onOK(async (data) => {
                            if (device.isUploadMode()) {
                                await onlineSystemInit();
                            }
                            if (module_upgrade_flag) {
                                onlineManager.parasUpdate("cyberpi_set_ext_update_mode_sta", [1, 5]);
                                await onlineManager.request("cyberpi_set_ext_update_mode_sta");
                                //1->uart0 2->uart2 3->蓝牙 4->mesh 5->uart2
                                onlineManager.parasUpdate("cyberpi_set_ext_update_bind_passthrough_channels", [3, 5]);
                                await onlineManager.request("cyberpi_set_ext_update_bind_passthrough_channels");
                                neuronsKits.start(device);
                            }
                            device.uploadFirmware(data);
                        })
                        uploaderUI.onFail((err) => {
                            console.error(err);
                        })
                        uploaderUI.open(info);
                    }
                },

                check: (app, device, info) => {
                    // now use the old processing in PC
                    function isPC() {
                        if (window.platform === undefined) {
                            return false;
                        }

                        return !!(window.platform.name === "Electron");
                    };

                    return new Promise(async (resolve) => {
                        if (!this.moduleInfo) {
                            this.moduleInfo = new Map();
                            const defaultFirmware = info.firmware[0];
                            this.moduleInfo.set(0, defaultFirmware.version); //主板固件
                            for (const mod of defaultFirmware.modules) {
                                const typeid = parseInt(mod.type.substring(0, 6), 16);
                                this.moduleInfo.set(typeid, mod.version);
                            }
                        }
                        setTimeout(async () => {
                            try {
                                let ret = await sysOperation.checkFirmwareVersion(info.firmware[0].version);
                                if (device.isUploadMode()) {
                                    await onlineSystemInit();
                                }
                                onlineManager.parasUpdate("cyberpi_set_ext_update_mode_sta", [1, 5]);
                                await onlineManager.request("cyberpi_set_ext_update_mode_sta");

                                onlineManager.parasUpdate("cyberpi_set_ext_update_bind_passthrough_channels", [3, 5]);
                                await onlineManager.request("cyberpi_set_ext_update_bind_passthrough_channels");

                                await OnlineUtil.delay(1);
                                neuronsKits.start(device);
                                await getAllocator().allocID(app, device, true);
                                let ret_mbuild = await getAllocator().compareVersion(app, device, this.moduleInfo);
                                if (ret.code < 0) {
                                    ret.code = 1;
                                } else {
                                    ret.code = 0;
                                }

                                if (isPC()) {
                                    // resolve(!ret.isLatest);
                                    if ((ret.isLatest == false) || (ret_mbuild == true)) {
                                        resolve(true);
                                    } else {
                                        resolve(false);
                                    }
                                } else {
                                    if ((ret.isLatest == false) || (ret_mbuild == true)) {
                                        resolve(true);
                                    } else {
                                        resolve(false);
                                    }
                                }
                            } catch (e) {
                                console.log('firmware version check err:', e);
                                let retObject = {
                                    deviceName: "", // ext id
                                    deviceFirmwareVersion: "", // currentVersion
                                    supportFirmwareVersion: "", // support version
                                    isLatest: true, // whether the latest(supported) version 
                                    code: 1
                                };
                                if (isPC()) {
                                    resolve(!ret.isLatest);
                                } else {
                                    resolve(retObject);
                                }
                            }
                            await OnlineUtil.delay(2);
                            onlineManager.parasUpdate("cyberpi_set_ext_update_mode_sta", [0, 5]);
                            await onlineManager.request("cyberpi_set_ext_update_mode_sta");

                            onlineManager.parasUpdate("cyberpi_set_ext_update_unbind_passthrough_channels", [3, 5]);
                            await onlineManager.request("cyberpi_set_ext_update_unbind_passthrough_channels");


                            neuronsKits.stop();
                            if (device.isUploadMode()) {
                                await onlineSystemDeinit();
                            }
                        }, 2000);
                    });
                },

                otaUpdate: async (app, device, params, fn) => {
                    console.log("otaUpdate", app, device, params, fn);
                    let textPath = params.text.split('/');
                    textPath = '/' + textPath[textPath.length - 1];
                    await sysOperation.sendOtaUpdateCmd(params.ssid, params.pwd, params.host, textPath);
                    setTimeout(() => {
                        fn();
                    }, 1000);
                }
            }),
            'settings05De708EHandle': async (app, device, block) => {

                let deviceStatus = 0;
                let opcode = "cyberpi_set_name";
                let opcode1 = "cyberpi_name";
                if (device.isUploadMode()) {
                    await onlineSystemInit();
                }
                let cy_name = await onlineManager.request(opcode1, true, 2000);
                if (device.isUploadMode()) {
                    await onlineSystemDeinit();
                }
                const service = app.getService('system.ui');
                const label = ['cyberpi.settings_05de708e', 'cyberpi.cybeipi_name', 'cyberpi.affirm'];
                const dialog = await service.dialog('deviceStatuc', {
                    title: label[0],
                    width: '240px',
                    fields: [{
                        label: label[1],
                        type: 'input',
                        value: "" + cy_name,
                        id: 'ssid'
                    }],
                    buttons: [{
                        id: 'deviceStatusCheckClose',
                        text: label[2],
                        handle: async (ctx) => {
                            if (device.isUploadMode()) {
                                await onlineSystemInit();
                            }
                            let para = [ctx.values.ssid];
                            onlineManager.parasUpdate(opcode, para);
                            await onlineManager.request(opcode);
                            if (device.isUploadMode()) {
                                await onlineSystemDeinit();
                            }
                            setTimeout(() => {
                                dialog.close();
                            }, 100)
                        }
                    }]
                });
            },
            'settingsCc775EfdHandle': async (app, device, block) => {
                let deviceStatus = 0;
                let opcode = "cyberpi_get_wifi_name";
                let opcode1 = "cyberpi_set_wifi_name";
                if (device.isUploadMode()) {
                    await onlineSystemInit();
                }
                let wifi_info = await onlineManager.request(opcode, true, 2000);
                if (device.isUploadMode()) {
                    await onlineSystemDeinit();
                }
                const service = app.getService('system.ui');
                const label = ['cyberpi.settings_cc775efd', 'cyberpi.Wifi_name', 'cyberpi.Wifi_password', 'cyberpi.affirm'];
                const dialog = await service.dialog('deviceStatuc', {
                    title: label[0],
                    width: '240px',
                    fields: [{
                            label: label[1],
                            type: 'input',
                            value: "" + wifi_info[0],
                            id: 'ssid'
                        },
                        {
                            label: label[2],
                            type: 'input',
                            value: "" + wifi_info[1],
                            id: 'sspw'
                        }
                    ],
                    buttons: [{
                        id: 'deviceStatusCheckClose',
                        text: label[3],
                        handle: async (ctx) => {
                            if (device.isUploadMode()) {
                                await onlineSystemInit();
                            }
                            let para = [ctx.values.ssid, ctx.values.sspw];
                            onlineManager.parasUpdate(opcode1, para);
                            await onlineManager.request(opcode1);
                            if (device.isUploadMode()) {
                                await onlineSystemDeinit();
                            }
                            setTimeout(() => {
                                dialog.close();
                            }, 100)
                        }
                    }]
                });
            },
            'cyberpi_play_audio_until_2': {
                onRun: async (args, app, device, block) => {
                    await device.asyncWriteProtocol('f3f4',
                        onlineProtocolPackage.__createFrame(0x03, 0x00, 'cyberpi.audio.stop', [])
                    );
                    await commonFunction.delay(100);
                    let file_name = args.file_name;
                    let para = [file_name];
                    let opcode = "cyberpi_play_audio_until";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 30000);
                }
            },
            'cyberpi_play_audio_2': {
                onRun: async (args, app, device, block) => {
                    let file_name = args.file_name;
                    let para = [file_name];
                    let opcode = "cyberpi_play_audio";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'cyberpi_play_audio_until_3': {
                onRun: async (args, app, device, block) => {
                    await device.asyncWriteProtocol('f3f4',
                        onlineProtocolPackage.__createFrame(0x03, 0x00, 'cyberpi.audio.stop', [])
                    );
                    await commonFunction.delay(100);
                    let file_name = args.file_name;
                    let para = [file_name];
                    let opcode = "cyberpi_play_audio_until";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 30000);
                }
            },
            'cyberpi_play_audio_3': {
                onRun: async (args, app, device, block) => {
                    let file_name = args.file_name;
                    let para = [file_name];
                    let opcode = "cyberpi_play_audio";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'cyberpi_start_record': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_stop_record': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_play_record_until': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_play_record': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpiPlayMusicWithToneAndNoteCodesCode': (args) => {
                if (args.number_1 == "None" || (args.number_1 < 0)) {
                    args.number_1 = 0;
                } else if (args.number_1 > 132) {
                    args.number_1 = 132;
                }
                return `cyberpi.audio.play_music(${args.number_1}, ${args.number_2})`;
            },
            'cyberpi_play_music_with_tone_and_note': {
                onRun: async (args, app, device, block) => {
                    let beat = Number(args.number_2);
                    let time = beat;
                    let note = Number(args.number_1);
                    if (isNaN(note)) {
                        note = 0;
                    } else if (note < 0) {
                        note = 0;
                    } else if (note > 132) {
                        note = 132;
                    }
                    if (beat > 2) {
                        beat = 2;
                    }
                    let para = [note, beat];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        let opcode = "cyberpi_stop_audio";
                        onlineManager.parasUpdate(opcode);
                        await onlineManager.request(opcode, true, 30000);
                        await commonFunction.delay(50);
                    });
                }
            },
            'cyberpiPlayMusicWithToneAndNote2CodesCode': (args) => {
                if (args.number_1 == "None" || (args.number_1 < 0)) {
                    args.number_1 = 0;
                } else if (args.number_1 > 132) {
                    args.number_1 = 132;
                }
                return `cyberpi.audio.play_music(${args.number_1}, ${args.number_2})`;
            },
            'cyberpi_play_music_with_tone_and_note_2': {
                onRun: async (args, app, device, block) => {
                    let beat = Number(args.number_2);
                    let time = beat;
                    let note = Number(args.number_1);
                    if (isNaN(note)) {
                        note = 0;
                    } else if (note < 0) {
                        note = 0;
                    } else if (note > 132) {
                        note = 132;
                    }
                    if (beat > 2) {
                        beat = 2;
                    }
                    let para = [note, beat];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        let opcode = "cyberpi_stop_audio";
                        onlineManager.parasUpdate(opcode);
                        await onlineManager.request(opcode, true, 30000);
                        await commonFunction.delay(50);
                    });
                }
            },
            'cyberpi_play_music_with_note': {
                onRun: async (args, app, device, block) => {
                    let file_name = args.fieldMenu_1;
                    let beat = Number(args.number_3);
                    let time = beat;
                    if (beat > 2) {
                        beat = 2;
                    }
                    let para = [file_name, beat];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        let opcode = "cyberpi_stop_audio";
                        onlineManager.parasUpdate(opcode);
                        await onlineManager.request(opcode, true, 30000);
                        await commonFunction.delay(50);
                    });
                }
            },
            'cyberpi_add_audio_speed': {
                onRun: async (args, app, device, block) => {
                    let speed = Number(args.number_1);
                    let para = [speed];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_set_audio_speed': {
                onRun: async (args, app, device, block) => {
                    let speed = Number(args.number_1);
                    let para = [speed];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_get_audio_speed': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "cyberpi_get_audio_speed";
                    let value = await onlineManager.getValue(opcode);
                    return value;

                }
            },
            'cyberpi_add_volume': {
                onRun: async (args, app, device, block) => {
                    let volume = Number(args.number_1);
                    let para = [volume];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_set_volume': {
                onRun: async (args, app, device, block) => {
                    let volume = Number(args.number_1);
                    let para = [volume];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_get_volume': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "cyberpi_get_volume";
                    let value = await onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_play_buzzer_tone_with_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.number_2);
                    if (!time || time <= 0) return;

                    let hz = parseFloat(args.number_1);
                    hz = hz < 20 ? 0.1 : hz;
                    hz = hz > 5000 ? 0.1 : hz;

                    let opcode = "cyberpi_play_buzzer_tone_with_time";
                    let para = [hz, null];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);

                    opcode = "cyberpi_stop_audio";
                    para = [];
                    await commonFunction.delay(time * 1000, async () => {
                        onlineManager.parasUpdate(opcode, para);
                        await onlineManager.request(opcode);
                    });
                    return await commonFunction.delay(50, () => {
                        ;
                    });

                }
            },
            'cyberpi_play_buzzer_tone': {
                onRun: async (args, app, device, block) => {
                    let hz = parseFloat(args.number_2);
                    hz = hz < 20 ? 0.1 : hz;
                    hz = hz > 5000 ? 0.1 : hz;

                    let opcode = "cyberpi_play_buzzer_tone";
                    let para = [hz];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 30000);

                }
            },
            'cyberpi_stop_audio': {
                onRun: async (args, app, device, block) => {
                    // let opcode = "BLOCK_1569693514118";
                    // onlineManager.parasUpdate(opcode);
                    // await onlineManager.request(opcode, true, 30000);
                    // await commonFunction.delay(50);

                    // await onLineSendWithoutRespond(device, 'led.off_all');
                    // tell low computer to execute this command immediatly 
                    await device.asyncWriteProtocol('f3f4',
                        onlineProtocolPackage.__createFrame(0x03, 0x00, 'cyberpi.audio.stop', [])
                    );
                    await commonFunction.delay(100);
                }
            },
            'cyberpi_play_audio_until': {
                onRun: async (args, app, device, block) => {
                    let file_name = args.file_name + ".mp3";
                    let para = [file_name];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_play_audio': {
                onRun: async (args, app, device, block) => {
                    let file_name = args.file_name + ".mp3";
                    let para = [file_name];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 3000);
                }
            },
            'cyberpi_play_led_animation_until': {
                onRun: async (args, app, device, block) => {
                    let para = [args.LED_animation, true];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpiShowLedCodesCode': (args) => {
                let out_str = '';
                out_str = args.ledRing.split("").join(' ');

                out_str = out_str.replace(new RegExp(/0/g), 'black');
                out_str = out_str.replace(new RegExp(/1/g), 'red');
                out_str = out_str.replace(new RegExp(/2/g), 'orange');
                out_str = out_str.replace(new RegExp(/3/g), 'yellow');
                out_str = out_str.replace(new RegExp(/4/g), 'green');
                out_str = out_str.replace(new RegExp(/5/g), 'cyan');
                out_str = out_str.replace(new RegExp(/6/g), 'blue');
                out_str = out_str.replace(new RegExp(/7/g), 'purple');
                out_str = out_str.replace(new RegExp(/8/g), 'white');

                return `cyberpi.led.show('${out_str}')`
            },
            'cyberpi_show_led': {
                onRun: async (args, app, device, block) => {
                    let out_str = '';
                    out_str = args.ledRing.split("").join(' ');

                    out_str = out_str.replace(new RegExp(/0/g), 'black');
                    out_str = out_str.replace(new RegExp(/1/g), 'red');
                    out_str = out_str.replace(new RegExp(/2/g), 'orange');
                    out_str = out_str.replace(new RegExp(/3/g), 'yellow');
                    out_str = out_str.replace(new RegExp(/4/g), 'green');
                    out_str = out_str.replace(new RegExp(/5/g), 'cyan');
                    out_str = out_str.replace(new RegExp(/6/g), 'blue');
                    out_str = out_str.replace(new RegExp(/7/g), 'purple');
                    out_str = out_str.replace(new RegExp(/8/g), 'white');

                    let para = [out_str];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'cyberpi_move_led': {
                onRun: async (args, app, device, block) => {
                    let num = Number(args.led_number);

                    let para = [num];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'cyberpiLedShowSingleWithColorAndTime2CodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                if (args.number_3 == "None" || (args.number_3 < 0)) {
                    args.number_3 = 0;
                }

                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, "all")
time.sleep(${args.number_3})
cyberpi.led.on(0, 0, 0, "all")`;
                } else {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, ${args.fieldMenu_1})
time.sleep(${args.number_3})
cyberpi.led.on(0, 0, 0, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_color_and_time_2': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.number_3);
                    if (time <= 0) return;
                    let fieldMenu;
                    if (args.fieldMenu_1 == "\"all\"") {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_1);
                    }

                    let color = args.color_1;

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let para = [r, g, b, fieldMenu];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        para = [0, 0, 0, fieldMenu];
                        onlineManager.parasUpdate(opcode, para);
                        await onlineManager.request(opcode);
                    });
                }
            },
            'cyberpiLedShowSingleWithColor2CodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);

                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, "all")`;
                } else {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_color_2': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_1;

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    let fieldMenu;
                    if (args.fieldMenu_1 == "\"all\"") {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_1);
                    }
                    let para = [r, g, b, fieldMenu];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'cyberpiLedShowSingleWithRgbAndTimeCodesCode': (args) => {
                if (args.number_5 == "None" || (args.number_5 < 0)) {
                    args.number_5 = 0;
                }
                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${args.r}, ${args.g}, ${args.b}, "all")
time.sleep(${args.number_5})
cyberpi.led.on(0, 0, 0, "all")`;
                } else {
                    return `cyberpi.led.on(${args.r}, ${args.g}, ${args.b}, ${args.fieldMenu_1})
time.sleep(${args.number_5})
cyberpi.led.on(0, 0, 0, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_rgb_and_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.number_5);
                    if (time <= 0) return;
                    let r = Number(args.r);
                    let g = Number(args.g);
                    let b = Number(args.b);
                    let fieldMenu;
                    if (args.fieldMenu_1 == "\"all\"") {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_1);
                    }
                    let para = [r, g, b, fieldMenu];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        para = [0, 0, 0, fieldMenu];
                        onlineManager.parasUpdate(opcode, para);
                        await onlineManager.request(opcode);
                    });
                }
            },
            'cyberpiLedShowSingleWithRgb2CodesCode': (args) => {
                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${args.r}, ${args.g}, ${args.b}, "all")`;
                } else {
                    return `cyberpi.led.on(${args.r}, ${args.g}, ${args.b}, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_rgb_2': {
                onRun: async (args, app, device, block) => {
                    let r = Number(args.r);
                    let g = Number(args.g);
                    let b = Number(args.b);
                    let fieldMenu;
                    if (args.fieldMenu_1 == "\"all\"") {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_1);
                    }
                    let para = [r, g, b, fieldMenu];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'cyberpi_add_led_brightness': {
                onRun: async (args, app, device, block) => {
                    let num = Number(args.number_1);

                    let para = [num];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_set_led_brightness': {
                onRun: async (args, app, device, block) => {
                    let num = Number(args.number_1);

                    let para = [num];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_get_led_brightness': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_get_led_brightness";
                    let value = await onlineManager.getValue(opcode);
                    return value;

                }
            },
            'cyberpi_led_off_2': {
                onRun: async (args, app, device, block) => {
                    let fieldMenu;
                    if (args.fieldMenu_1 == "\"all\"") {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_1);
                    }

                    if (fieldMenu === "all") {
                        // await onLineSendWithoutRespond(device, 'led.off_all');
                        // tell low computer to execute this command immediatly 
                        await device.asyncWriteProtocol('f3f4',
                            onlineProtocolPackage.__createFrame(0x03, 0x00, 'cyberpi.led.off_all', [])
                        );
                        await commonFunction.delay(50);
                        return;
                    }


                    let para = [0, 0, 0, fieldMenu];

                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'cyberpiLedShowSingleWithColorAndTimeCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);

                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, "all")
time.sleep(${args.number_3})
cyberpi.led.on(0, 0, 0, "all")`;
                } else {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, ${args.fieldMenu_1})
time.sleep(${args.number_3})
cyberpi.led.on(0, 0, 0, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_color_and_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.number_3);
                    if (time <= 0) return;

                    let color = args.color_1;

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let para = [r, g, b, Number(args.fieldMenu_1)];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        para = [0, 0, 0, Number(args.fieldMenu_1)];
                        onlineManager.parasUpdate(opcode, para);
                        await onlineManager.request(opcode);
                    });
                }
            },
            'cyberpiLedShowSingleWithColorCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);

                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, "all")`;
                } else {
                    return `cyberpi.led.on(${r}, ${g}, ${b}, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_color': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_1;

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let para = [r, g, b, Number(args.fieldMenu_1)];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'cyberpiLedShowSingleWithRgbCodesCode': (args) => {
                if (Number(args.fieldMenu_1) === 0) {
                    return `cyberpi.led.on(${args.r}, ${args.g}, ${args.b}, "all")`;
                } else {
                    return `cyberpi.led.on(${args.r}, ${args.g}, ${args.b}, ${args.fieldMenu_1})`;
                }
            },
            'cyberpi_led_show_single_with_rgb': {
                onRun: async (args, app, device, block) => {
                    let r = Number(args.r);
                    let g = Number(args.g);
                    let b = Number(args.b);


                    let para = [r, g, b, Number(args.fieldMenu_1)];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'cyberpi_led_off': {
                onRun: async (args, app, device, block) => {
                    let para = [0, 0, 0, Number(args.fieldMenu_1)];
                    let opcode = "cyberpi_led_show_common";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'cyberpi_display_println': {
                onRun: async (args, app, device, block) => {
                    let para = [args.string_2];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_display_print': {
                onRun: async (args, app, device, block) => {
                    let para = [args.string_2];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_console_set_font': {
                onRun: async (args, app, device, block) => {
                    let inputMenu_1 = parseInt(args.inputMenu_1)
                    let para = [inputMenu_1];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_show_at_somewhere_with_size': {
                onRun: async (args, app, device, block) => {
                    let para = [args.string_2, args.inputMenu_4, args.fieldMenu_2];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_label_show_at_somewhere_with_size': {
                onRun: async (args, app, device, block) => {

                    let para = [args.string_2, args.inputMenu_4, args.fieldMenu_2, 0, parseInt(args.fieldMenu_1)];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_show_label_xy_with_size': {
                onRun: async (args, app, device, block) => {
                    let para = [args.string_2, args.inputMenu_4, parseInt(args.number_2), parseInt(args.number_3)];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_label_show_label_xy_with_size': {
                onRun: async (args, app, device, block) => {
                    let para = [args.string_2, args.inputMenu_4, parseInt(args.number_2), parseInt(args.number_3), parseInt(args.fieldMenu_1)];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_set_chart_name': {
                onRun: async (args, app, device, block) => {
                    let chart = String(args.string_1)
                    let para = [chart];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'cyberpi_display_line_chart_add_data': {
                onRun: async (args, app, device, block) => {
                    var number = Number(args.number_1);
                    if (isNaN(args.number_1)) {
                        number = 0;
                    }
                    let para = [number];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_bar_chart_set_interval': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.number_3)];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_bar_chart_add_data': {
                onRun: async (args, app, device, block) => {
                    var number = Number(args.number_1);
                    if (isNaN(args.number_1)) {
                        number = 0;
                    }
                    let para = [number];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpi_display_table_add_data_at_row_column_2': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.fieldMenu_1), Number(args.fieldMenu_2), String(args.string_3)];
                    let opcode = "cyberpi_display_table_add_data_at_row_column";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 30000);

                }
            },
            'cyberpi_display_table_add_data_at_row_column': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.fieldMenu_1), Number(args.fieldMenu_2), String(args.string_3)];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'cyberpi_display_clear_chart': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);

                }
            },
            'cyberpiDisplaySetBrushWithColorCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `cyberpi.display.set_brush(${r}, ${g}, ${b})`;
            },
            'cyberpi_display_set_brush_with_color': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_1;

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let para = [r, g, b];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_display_set_brush_with_r_g_b': {
                onRun: async (args, app, device, block) => {

                    var r = parseInt(args.number_1);
                    var g = parseInt(args.number_2);
                    var b = parseInt(args.number_3);

                    let para = [r, g, b];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_display_rotate_to_2': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.fieldMenu_1)];
                    let opcode = "cyberpi_display_rotate_to";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 30000);

                }
            },
            'cyberpi_display_rotate_to': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.fieldMenu_1)];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'cyberpi_display_clear': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_follow_mblock_sprite': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    let move_x, move_y, sprite_name;
                    let value_x = onlineManager.getValue("cyberpi_axis_angle_speed_z");
                    let value_y = onlineManager.getValue("cyberpi_axis_angle_speed_y");
                    sprite_name = args.spriteMenu_1;
                    let value = device.tar.runtime.targets.find(target => target.sprite.name == sprite_name);
                    if (value) {
                        move_x = parseInt(value.x);
                        move_y = parseInt(value.y);
                    }
                    if ((Math.abs(value_x) > 3) || (Math.abs(value_y) > 3)) {
                        move_x = move_x + value_x * -(parseFloat(args.GRADE));
                        if (move_x >= 262) {
                            move_x = 262;
                        } else if (move_x <= -256) {
                            move_x = -256;
                        }
                        move_y = move_y + value_y * parseFloat(args.GRADE);
                        if (move_y >= 215) {
                            move_y = 215;
                        } else if (move_y <= -217) {
                            move_y = -217;
                        }
                        return device.updateSpriteByName(args.spriteMenu_1, {
                            x: Number(move_x),
                            y: Number(move_y)
                        });
                    }
                }
            },
            'cyberpi_detect_attitude': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const tiltMap = {
                        tiltleft: 0,
                        tiltright: 1,
                        tiltforward: 2,
                        tiltback: 3,
                        faceup: 4,
                        facedown: 5,
                        stand: 6,
                        handstand: 7
                    }
                    const opcode = "cyberpi_detect_attitude" + '_' + tiltMap[args['tilt']];
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_detect_action': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const tiltMap = {
                        waveleft: 0,
                        waveright: 1,
                        waveup: 2,
                        wavedown: 3,
                        clockwise: 4,
                        anticlockwise: 5,
                        freefall: 6,
                        shake: 7
                    }
                    const opcode = "cyberpi_when_detect_action" + '_' + tiltMap[args['tilt']];
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_shaked_value': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_shaked_value";
                    let value = onlineManager.getValue(opcode);
                    return value;

                }
            },
            'cyberpi_wave_angle': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_wave_angle";
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_wave_speed': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_wave_speed";
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpiTiltDegreeCodesCode': (args) => {
                if (args.rotation == "up") {
                    return `-cyberpi.get_pitch()`;
                } else if (args.rotation == "down") {
                    return `cyberpi.get_pitch()`;
                } else if (args.rotation == "left") {
                    return `-cyberpi.get_roll()`;
                } else if (args.rotation == "right") {
                    return `cyberpi.get_roll()`;
                } else if (args.rotation == "clockwise") {
                    return `-cyberpi.get_yaw()`;
                } else if (args.rotation == "counterclockwise") {
                    return `cyberpi.get_yaw()`;
                }
            },
            'cyberpi_tilt_degree': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const attitudeMap = {
                        up: 1,
                        down: 2,
                        right: 3,
                        left: 4,
                        counterclockwise: 5,
                        clockwise: 6
                    };
                    let value = 0;
                    let opcode = "cyberpi_tilt_degree" + '_' + attitudeMap[args.rotation];
                    if ((args.rotation === "up") || (args.rotation === "left") || (args.rotation === "clockwise")) {
                        onlineManager.setValueUpdateCallback(opcode, (value) => {
                            let key = onlineManager.__getKeyViaTag(opcode);
                            if (key === undefined) {
                                return;
                            }
                            onlineManager.blockTable[key].value["default"] = -value;
                        }, "default");
                        value = onlineManager.getValue(opcode);
                    } else {
                        value = onlineManager.getValue(opcode);
                    }
                    return value;
                }
            },
            'cyberpi_axis_acceleration': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "cyberpi_axis_acceleration" + '_' + args.axis;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_axis_angle_speed': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "cyberpi_axis_angle_speed" + '_' + args.axis;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_axis_rotation_angle': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "cyberpi_axis_rotation_angle" + '_' + args.axis;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_reset_axis_rotation_angle': {
                onRun: async (args, app, device, block) => {
                    let para = [args.axis];

                    let opcode = "cyberpi_reset_axis_rotation_angle" + "_" + args.axis;
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_reset_yaw': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_direction_key_press': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    const opcode = "cyberpi_direction_key_press" + '_' + args.fieldMenu_1;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_direction_key_count': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_direction_key_count" + '_' + args.fieldMenu_1;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_direction_key_count_reset': {
                onRun: async (args, app, device, block) => {
                    let id = args.fieldMenu_1;
                    let para = [id];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_button_press': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    const opcode = "cyberpi_button_press" + '_' + args.fieldMenu_1;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_button_count': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_button_count" + '_' + args.fieldMenu_1;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_button_count_reset': {
                onRun: async (args, app, device, block) => {
                    let para = [args.fieldMenu_1];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                    await commonFunction.delay(50);
                }
            },
            'cyberpi_loudness': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_loudness";
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_brightness': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_brightness";
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_timer_get': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0.0;

                    const opcode = "cyberpi_timer_get";
                    let value = onlineManager.getValue(opcode);
                    return value;

                }
            },
            'cyberpi_timer_reset': {
                onRun: async (args, app, device, block) => {
                    await onlineManager.request(block.opcode);
                    // the value of timer should be reset
                    let key = onlineManager.__getKeyViaTag("cyberpi_timer_get");
                    await commonFunction.delay(50);
                    onlineManager.valueUpdate(key, 0.0);
                }
            },
            'cyberpi_name': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "cyberpi_name";
                    let value = await onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpiBatteryMacaddressBlenameAndSoOnCodesCode': (args) => {
                if (args.fieldMenu_1 == 'battery') {
                    return `cyberpi.get_battery()`
                } else if (args.fieldMenu_1 == 'mac') {
                    return `cyberpi.get_mac_address()`
                } else if (args.fieldMenu_1 == 'ble') {
                    return `cyberpi.get_ble()`
                } else if (args.fieldMenu_1 == 'get_language') {
                    return `cyberpi.get_language()`
                } else if (args.fieldMenu_1 == 'get_shield') {
                    return `cyberpi.get_shield()`
                }
            },
            'cyberpi_battery_macaddress_blename_and_so_on': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "cyberpi_get_info" + '_' + args.fieldMenu_1;
                    let value = await onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_mesh_create': {
                onRun: async (args, app, device, block) => {
                    let para = [args.mesh_name];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'cyberpi_mesh_join': {
                onRun: async (args, app, device, block) => {
                    let para = [args.mesh_name];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'cyberpi_set_wifi_broadcast': {
                onRun: async (args, app, device, block) => {
                    let para = [args.message, 0];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'cyberpi_set_wifi_broadcast_with_value': {
                onRun: async (args, app, device, block) => {
                    let value = 1;
                    if (commonFunction.isNumber(args.value)) {
                        value = Number(args.value)
                    } else {
                        value = args.value;
                    }
                    let para = [args.message, value];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'cyberpi_wifi_broadcast_when_received_message': {
                onRun: (args, app, device, block) => {
                    // 当不是因为runBlocks而触发时，直接触发
                    if (!app.workspace.isBlockRunning()) return true;

                    let ret = false;
                    for (let i = 1; i < this.meshMessageEventValue.length; i++) {
                        if (this.meshMessageEventValue[i] == args.message) {
                            ret = true;
                            break;
                        }
                    }
                    return ret;

                },
                onAdd: async (app, device, block) => {
                    const opcode = "cyberpi_wifi_broadcast_when_received_message";
                    onlineManager.setAutoSubscribeControlFlag(opcode, false);

                    await onlineManager.getValue(opcode);

                    onlineManager.setValueUpdateCallback(opcode, (value) => {
                        this.meshMessageEventValue = value;
                        if (this.meshMessageEventValue.length != 0) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    onlineManager.setAutoSubscribeControlFlag("cyberpi_wifi_broadcast_when_received_message", true);
                    onlineManager.setValueUpdateCallback("cyberpi_wifi_broadcast_when_received_message", undefined);
                }
            },
            'cyberpi_wifi_broadcast_get_value': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return "";

                    const opcode = "cyberpi_wifi_broadcast_get_value";
                    let para = [args.message];
                    onlineManager.parasUpdate(opcode, para);
                    let value = onlineManager.request(opcode, true, 3000);
                    return value;
                }
            },
            'cyberpi_wifi_set': {
                onRun: async (args, app, device, block) => {
                    let para = [args.ssid, args.wifipassword];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpi_wifi_is_connect': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    const opcode = "cyberpi_wifi_is_connect";
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpi_speak_with_some_language': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSpeakWithSomeLanguage2CodesLib': (args) => {
                return `cyberpi.driver.cloud_translate.TRANS_URL = "http://msapi.makeblock.com/ms/bing_speech/translate"
cyberpi.driver.cloud_translate.set_token("{ACCESSTOKEN}")`;
            },
            'cyberpi_speak_with_some_language_2': {
                onRun: async (args, app, device, block) => {
                    let para = ["zh", args.string_2];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'cyberpiSpeakWithSomeLanguage3CodesLib': (args) => {
                return `cyberpi.driver.cloud_translate.TTS_URL = "{TTSURL}"
cyberpi.driver.cloud_translate.set_token("{ACCESSTOKEN}")`;
            },
            'cyberpi_speak_with_some_language_3': {
                onRun: async (args, app, device, block) => {
                    // JavaScript code
                    const service = app.getService('account');
                    const user = await service.getUserInfo();
                    console.log(user);
                }
            },
            'cyberpiSpeechRecognitionWithTime3CodesLib': (args) => {
                return `cyberpi.speech.set_recognition_address(url = "{NAVIGATEURL}")
cyberpi.speech.set_access_token(token = "{ACCESSTOKEN}")`;
            },
            'cyberpi_speech_recognition_with_time_3': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpeechRecognitionWithTime2CodesLib': (args) => {
                return `cyberpi.speech.set_recognition_address(url = "{NAVIGATEURL}")
cyberpi.speech.set_access_token(token = "{ACCESSTOKEN}")`;
            },
            'cyberpi_speech_recognition_with_time_2': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpi_speech_recognition_with_record_2': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSpeechRecognitionWithTimeCodesLib': (args) => {
                return `cyberpi.speech.set_recognition_address(url = "{NAVIGATEURL}")
cyberpi.speech.set_access_token(token = "{ACCESSTOKEN}")`;
            },
            'cyberpi_speech_recognition_with_time': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'block1599643085220CodesLib': (args) => {
                return `cyberpi.speech.set_recognition_address(url = "{NAVIGATEURL}")
cyberpi.speech.set_access_token(token = "{ACCESSTOKEN}")`;
            },
            'BLOCK_1599643085220': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpi_speech_recognition_with_record': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpi_speech_recognition_result': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return "";
                    let opcode = "cyberpi_speech_recognition_result";
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'cyberpiTranslateToSomeLanguage2CodesLib': (args) => {
                return `cyberpi.driver.cloud_translate.TRANS_URL = "{TRANSURL}"
cyberpi.driver.cloud_translate.set_token("{ACCESSTOKEN}")`;
            },
            'cyberpi_translate_to_some_language_2': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return "";
                    let para = [args.fieldMenu_2, args.string_1];
                    let opcode = "cyberpi_translate_to_some_language_2";
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 30000);
                    return value;
                }
            },
            'cyberpiTranslateToSomeLanguageCodesLib': (args) => {
                return `cyberpi.driver.cloud_translate.TRANS_URL = "http://msapi.makeblock.com/ms/bing_speech/translate"
cyberpi.driver.cloud_translate.set_token("{ACCESSTOKEN}")`;
            },
            'cyberpi_translate_to_some_language': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSetCloudBroadcastCodesLib': (args) => {
                return `cyberpi.cloud_broadcast.start('{TOPIC}')`;
            },
            'cyberpi_set_cloud_broadcast': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSetCloudBroadcastWithValueCodesLib': (args) => {
                return `cyberpi.cloud_broadcast.start('{TOPIC}')`;
            },
            'cyberpi_set_cloud_broadcast_with_value': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiWhenCloudBroadcastCodesLib': (args) => {
                return `cyberpi.cloud_broadcast.start('{TOPIC}')`;
            },
            'cyberpi_when_cloud_broadcast': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onAdd: (app, device, block) => {
                    // TODO
                },
                onRemove: (app, device, block) => {
                    // TODO
                }
            },
            'cyberpiCloudBroadcastGetValueCodesLib': (args) => {
                return `cyberpi.cloud_broadcast.start('{TOPIC}')`;
            },
            'cyberpi_cloud_broadcast_get_value': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'customWidget445594F4': (widget) => {
                const getOptions = async (value) => {
                    const data = await iotOperationManager.getCity(value);
                    if (data instanceof Array) {
                        const options = data.map((item) => {
                            return {
                                text: item.name.toString(),
                                value: item.woeid.toString()
                            };
                        });
                        return options;
                    }
                    return [];
                };
                const title = 'cyberpi.city';
                widget.showEditor_ = () => {
                    iotOperationManager.DialogWidget(widget, 'weatherDialog', title, getOptions);
                }
            },
            'cyberpiGetWeatherFromInternetCodesCode': (args) => {
                let LOCATION = JSON.parse(args.LOCATION)[1];
                let ret_str = "";
                switch (Number(args.WEATHER_TYPE)) {
                    case 0:
                        ret_str = `cyberpi.cloud.weather('max_temp', '${LOCATION}')`;
                        break;
                    case 1:
                        ret_str = `cyberpi.cloud.weather('min_temp', '${LOCATION}')`;
                        break;
                    case 2:
                        ret_str = `cyberpi.cloud.weather('max_temp', '${LOCATION}') * 1.8 + 32`;
                        break;
                    case 3:
                        ret_str = `cyberpi.cloud.weather('min_temp', '${LOCATION}') * 1.8 + 32`;
                        break;
                    case 4:
                        ret_str = `cyberpi.cloud.weather('weather', '${LOCATION}')`;
                        break;
                    case 5:
                        ret_str = `cyberpi.cloud.weather('humidity', '${LOCATION}')`;
                        break;

                }
                return ret_str;
            },
            'cyberpi_get_weather_from_internet': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'customWidgetDcc97542': (widget) => {
                const getOptions = async (value) => {
                    const data = await iotOperationManager.getAirCityData(value);
                    if (data instanceof Array) {
                        const options = data.map((item) => {
                            return {
                                text: item.name.toString(),
                                value: item.cid.toString()
                            };
                        });
                        return options;
                    }
                    return [];
                };
                const title = 'cyberpi.city';
                widget.showEditor_ = () => {
                    iotOperationManager.DialogWidget(widget, 'airDialog', title, getOptions);
                }
            },
            'cyberpiGetAirQualityFromInternetCodesCode': (args) => {
                let meteorological = JSON.parse(args.METEOROLOGICAL)[1]
                return `cyberpi.cloud.air('${args.aq_type}', '${meteorological}')`;
            },
            'cyberpi_get_air_quality_from_internet': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiGetSunTimeFromInternetCodesCode': (args) => {
                let LOCATION = JSON.parse(args.LOCATION)[1];
                return `cyberpi.cloud.time('${args.sun_move_type}_${args.time_type}', '${LOCATION}')`;
            },
            'cyberpi_get_sun_time_from_internet': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpi_get_local_time_from_internet': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpi_get_time_from_internet': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'block1610527804319CodesLib': (args) => {
                return `cyberpi.cloud.time_request_domin = "{TIMEURL}"`;
            },
            'BLOCK_1610527804319': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_when_launch': {
                onRun: async (args, app, device, block) => {
                    let ret = false;
                    if (this.cyberpi_launch) {
                        ret = true;
                    }
                    await commonFunction.delay(200);
                    return true;
                },
                onAdd: async (app, device, block) => {
                    this.cyberpi_launch = false;
                    if (this.cyberpi_launch_flag) {
                        app.workspace.runBlocks(block.opcode);
                        this.cyberpi_launch = true;
                    }
                },
                onRemove: (app, device, block) => {
                    this.cyberpi_launch_flag = false;
                }
            },
            'cyberpi_when_direction_key_press': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.fieldMenu_2 == 'up') {
                        if (this.joystickEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.fieldMenu_2 == 'down') {
                        if (this.joystickEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.fieldMenu_2 == 'left') {
                        if (this.joystickEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.fieldMenu_2 == 'right') {
                        if (this.joystickEventValue[3]) {
                            ret = true;
                        }
                    } else if (args.fieldMenu_2 == 'middle') {
                        if (this.joystickEventValue[4]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.joystickEventValue = [false, false, false, false, false];
                    this.joystickEventType = [false, false, false, false, false];

                    let opcode = "cyberpi_direction_key_press_up";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.joystickEventValue[0] != value) {
                            this.joystickEventValue[0] = value;
                            if (this.joystickEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.joystickEventType[0] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_direction_key_press_down";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.joystickEventValue[1] != value) {
                            this.joystickEventValue[1] = value;
                            if (this.joystickEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.joystickEventType[1] = true;
                            }
                        }
                    });


                    opcode = "cyberpi_direction_key_press_left";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.joystickEventValue[2] != value) {
                            this.joystickEventValue[2] = value;
                            if (this.joystickEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.joystickEventType[2] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_direction_key_press_right";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.joystickEventValue[3] != value) {
                            this.joystickEventValue[3] = value;
                            if (this.joystickEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.joystickEventType[3] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_direction_key_press_middle";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.joystickEventValue[4] != value) {
                            this.joystickEventValue[4] = value;
                            if (this.joystickEventValue[4]) {
                                app.workspace.runBlocks(block.opcode);
                                this.joystickEventType[4] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "cyberpi_direction_key_press_up";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_direction_key_press_down";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_direction_key_press_left";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_direction_key_press_right";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_direction_key_press_middle";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'cyberpi_when_button_press': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.fieldMenu_2 == 'a') {
                        if (this.buttonEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.fieldMenu_2 == 'b') {
                        if (this.buttonEventValue[1]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.buttonEventValue = [false, false];
                    this.buttonEventType = [false, false];

                    let opcode = "cyberpi_button_press_a";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.buttonEventValue[0] != value) {
                            this.buttonEventValue[0] = value;
                            if (this.buttonEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.buttonEventType[0] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_button_press_b";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.buttonEventValue[1] != value) {
                            this.buttonEventValue[1] = value;
                            if (this.buttonEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.buttonEventType[1] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "cyberpi_button_press_a";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_button_press_b";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'cyberpi_when_detect_attitude': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.tilt == 'is_tiltleft') {
                        if (this.postureEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_tiltright') {
                        if (this.postureEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_tiltforward') {
                        if (this.postureEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_tiltback') {
                        if (this.postureEventValue[3]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_faceup') {
                        if (this.postureEventValue[4]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_facedown') {
                        if (this.postureEventValue[5]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.postureEventValue = [false, false, false, false, false, false];
                    this.postureEventType = [false, false, false, false, false, false];

                    let opcode = "cyberpi_detect_attitude_0";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.postureEventValue[0] != value) {
                            this.postureEventValue[0] = value;
                            if (this.postureEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.postureEventType[0] = true;
                            }
                        }
                    });


                    opcode = "cyberpi_detect_attitude_1";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.postureEventValue[1] != value) {
                            this.postureEventValue[1] = value;
                            if (this.postureEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.postureEventType[1] = true;
                            }
                        }
                    });


                    opcode = "cyberpi_detect_attitude_2";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.postureEventValue[2] != value) {
                            this.postureEventValue[2] = value;
                            if (this.postureEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.postureEventType[2] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_detect_attitude_3";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.postureEventValue[3] != value) {
                            this.postureEventValue[3] = value;
                            if (this.postureEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.postureEventType[3] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_detect_attitude_4";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.postureEventValue[4] != value) {
                            this.postureEventValue[4] = value;
                            if (this.postureEventValue[4]) {
                                app.workspace.runBlocks(block.opcode);
                                this.postureEventType[4] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_detect_attitude_5";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.postureEventValue[5] != value) {
                            this.postureEventValue[5] = value;
                            if (this.postureEventValue[5]) {
                                app.workspace.runBlocks(block.opcode);
                                this.postureEventType[5] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "cyberpi_detect_attitude_0";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_detect_attitude_1";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_detect_attitude_2";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_detect_attitude_3";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_detect_attitude_4";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_detect_attitude_5";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'cyberpi_when_detect_action': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.tilt == 'is_waveleft') {
                        if (this.attitudeEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_waveright') {
                        if (this.attitudeEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_waveup') {
                        if (this.attitudeEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_wavedown') {
                        if (this.attitudeEventValue[3]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_clockwise') {
                        if (this.attitudeEventValue[4]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_anticlockwise') {
                        if (this.attitudeEventValue[5]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_freefall') {
                        if (this.attitudeEventValue[6]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_shake') {
                        if (this.attitudeEventValue[7]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.attitudeEventValue = [false, false, false, false, false, false, false, false];
                    this.attitudeEventType = [false, false, false, false, false, false, false, false];

                    let opcode = "cyberpi_when_detect_action_0";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[0] != value) {
                            this.attitudeEventValue[0] = value;
                            if (this.attitudeEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[0] = true;
                            }
                        }
                    });


                    opcode = "cyberpi_when_detect_action_1";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[1] != value) {
                            this.attitudeEventValue[1] = value;
                            if (this.attitudeEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[1] = true;
                            }
                        }
                    });


                    opcode = "cyberpi_when_detect_action_2";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[2] != value) {
                            this.attitudeEventValue[2] = value;
                            if (this.attitudeEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[2] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_when_detect_action_3";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[3] != value) {
                            this.attitudeEventValue[3] = value;
                            if (this.attitudeEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[3] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_when_detect_action_4";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[4] != value) {
                            this.attitudeEventValue[4] = value;
                            if (this.attitudeEventValue[4]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[4] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_when_detect_action_5";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[5] != value) {
                            this.attitudeEventValue[5] = value;
                            if (this.attitudeEventValue[5]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[5] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_when_detect_action_6";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[6] != value) {
                            this.attitudeEventValue[6] = value;
                            if (this.attitudeEventValue[6]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[6] = true;
                            }
                        }
                    });

                    opcode = "cyberpi_when_detect_action_7";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[7] != value) {
                            this.attitudeEventValue[7] = value;
                            if (this.attitudeEventValue[7]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[7] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "cyberpi_when_detect_action_0";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_1";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_2";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_3";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_4";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_5";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_6";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_when_detect_action_7";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'cyberpi_when_sensor_value_bigger_or_smaller_than': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    let argVal = parseFloat(args.number_3);
                    let idVal = systemConstVariables.GT_MAP[block.id];
                    let val = 0;
                    let threshold = 0;

                    if (args.fieldMenu_2 == 'timer') {
                        val = this.greaterEventValue[0];
                        threshold = 0.05;
                    } else if (args.fieldMenu_2 == 'microphone') {
                        val = this.greaterEventValue[1];
                        threshold = 0.5;
                    } else if (args.fieldMenu_2 == 'shake_val') {
                        val = this.greaterEventValue[2];
                        threshold = 0.5;
                    } else if (args.fieldMenu_2 == 'light_sensor') {
                        val = this.greaterEventValue[3];
                        threshold = 0.5;
                    }
                    if (args.fieldMenu_3 == 'greater') {
                        if (typeof(idVal) == 'number') {
                            if (argVal - val > threshold) {
                                systemConstVariables.GT_MAP[block.id] = undefined;
                                ret = false;
                            } else {
                                ret = false;
                            }
                        } else if (val - argVal > threshold) {
                            systemConstVariables.GT_MAP[block.id] = argVal
                            ret = true;
                        } else {
                            ret = false;
                        }
                    } else if (args.fieldMenu_3 == 'smaller') {
                        if (typeof(idVal) == 'number') {
                            if (argVal - val < -threshold) {
                                systemConstVariables.GT_MAP[block.id] = undefined;
                                ret = false;
                            } else {
                                ret = false;
                            }
                        } else if (val - argVal < -threshold) {
                            systemConstVariables.GT_MAP[block.id] = argVal
                            ret = true;
                        } else {
                            ret = false;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.greaterEventValue = [0, 0, 0, 0];

                    let opcode = "cyberpi_timer_get";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[0] > 0.05) || (value - this.greaterEventValue[0] < -0.05)) {
                            this.greaterEventValue[0] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[0] = value;
                        }
                    });

                    opcode = "cyberpi_loudness";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[1] > 0.5) || (value - this.greaterEventValue[1] < -0.5)) {
                            this.greaterEventValue[1] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[1] = value;
                        }
                    });

                    opcode = "cyberpi_shaked_value";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[2] > 0.5) || (value - this.greaterEventValue[2] < -0.5)) {
                            this.greaterEventValue[2] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[2] = value;
                        }
                    });

                    opcode = "cyberpi_brightness";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[3] > 0.5) || (value - this.greaterEventValue[3] < -0.5)) {
                            this.greaterEventValue[3] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[3] = value;
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "cyberpi_timer_get";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_loudness";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_shaked_value";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "cyberpi_brightness";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'cyberpi_restart': {
                onRun: async (args, app, device, block) => {
                    onlineManager.parasUpdate(block.opcode);
                    await onlineManager.request(block.opcode);
                    await commonFunction.delay(2000);
                    this.cyberpi_launch_flag = true;
                }
            },
            'cyberpiPythonInsertCodesCode': (args) => {
                return args.string_1.slice(1, -1);
            },
            'cyberpi_python_insert': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'operatorMathopCodesCode': (args) => {
                let code = '';
                let arg = args.NUM
                switch (args.OPERATOR) {
                    case 'abs':
                        code = 'math.fabs(' + arg + ')';
                        break;
                    case 'floor':
                        code = 'math.floor(' + arg + ')';
                        break;
                    case 'ceiling':
                        code = 'math.ceil(' + arg + ')';
                        break;
                    case 'sqrt':
                        code = 'math.sqrt(' + arg + ')';
                        break;
                    case 'sin':
                        code = 'math.sin((' + arg + ') / 180.0 * math.pi)';
                        break;
                    case 'cos':
                        code = 'math.cos((' + arg + ') / 180.0 * math.pi)';
                        break;
                    case 'tan':
                        code = 'math.tan((' + arg + ') / 180.0 * math.pi)';
                        break;
                    case 'log':
                        code = 'math.log(' + arg + ' ,10)'; // microbit 不支持 log10，故此处统一为math.log(n, base)
                        break;
                    case 'ln': // 实际为 log(x)
                        code = 'math.log(' + arg + ')';
                        break;
                    case 'e ^':
                        code = 'math.exp(' + arg + ')';
                        break;
                    case 'exp': // exp 与 e ^ 等价
                        code = 'math.exp(' + arg + ')';
                        break;
                    case '10 ^':
                        code = 'math.pow(10, ' + arg + ')';
                        break;
                    case 'asin':
                        code = '(math.asin(' + arg + ') * 180.0 / math.pi)';
                        break;
                    case 'acos':
                        code = '(math.acos(' + arg + ') * 180.0 / math.pi)';
                        break;
                    case 'atan':
                        code = '(math.atan(' + arg + ') * 180.0 / math.pi)';
                        break;
                };
                return code
            },
            'operatorRandomCodesCode': (args) => {
                const isInt = (str) => {
                    const intReg = /^-?\d*$/;
                    return intReg.test(str);
                }

                var argument0 = args.FROM;
                var argument1 = args.TO;
                if (argument0 === 'NaN' || argument0 === 'None') {
                    argument0 = '0';
                }
                if (argument1 === 'NaN' || argument1 === 'None') {
                    argument1 = '0';
                }
                let randType = 'random.uniform';
                if (isInt(argument0) && isInt(argument1)) {
                    randType = 'random.randint';
                }
                var code = randType + '(' + argument0 + ', ' + argument1 + ')';
                return code;
            },
            'cyberpi_operator_casts': {
                onRun: async (args, app, device, block) => {
                    let fieldMenu_1 = args.fieldMenu_1;
                    let string_2 = args.string_2;
                    if (fieldMenu_1 == "int") {
                        return parseInt(string_2)
                    } else if (fieldMenu_1 == "float") {
                        return parseFloat(string_2)
                    } else if (fieldMenu_1 == "str") {
                        return String(string_2)
                    }
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "cyberpi",
            "targets": {
                "device": true,
                "name": "cyberpi",
                "icon": window.MbApi.getExtResPath('cyberpi/imgs/cf3ea8a97aa04f06b093c6200eaaf800.png', 'cyberpi'),
                "enableCode": true,
                "enableUpload": [
                    "serialport",
                    "ble",
                    "wifi"
                ],
                "enableOnline": [
                    "serialport",
                    "ble",
                    "wifi"
                ],
                "shouldConnect": [
                    "serialport",
                    "ble"
                ],
                "defaultOnline": true,
                "options": {
                    "connect": {
                        "serialport": {
                            "helpLink": "",
                            "tips": {
                                "success": [
                                    ""
                                ],
                                "fail": [
                                    "cyberpi.connect_fail_418dd2b0",
                                    "cyberpi.connect_fail_be44da45",
                                    "cyberpi.connect_fail_81f19800"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        },
                        "ble": {
                            "helpLink": "",
                            "tips": {
                                "success": [
                                    ""
                                ],
                                "fail": [
                                    "cyberpi.connect_fail_a2244e18",
                                    "cyberpi.connect_fail_2ff4c830",
                                    "cyberpi.connect_fail_f516f160"
                                ]
                            },
                            "channel": "1",
                            "localName": "Makeblock",
                            "serviceUUID": "ffe1",
                            "writeProperty": "ffe3",
                            "notifyProperty": "ffe2"
                        },
                        "hid": {
                            "helpLink": "",
                            "tips": {
                                "success": [
                                    ""
                                ],
                                "fail": [
                                    ""
                                ]
                            }
                        },
                        "wifi": {
                            "helpLink": "",
                            "tips": {
                                "success": [],
                                "fail": []
                            }
                        },
                        "24g": {
                            "helpLink": "",
                            "tips": {
                                "success": [],
                                "fail": []
                            }
                        }
                    },
                    "upload": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                ""
                            ],
                            "fail": [
                                "cyberpi.upload_fail_440e4ba6",
                                "cyberpi.upload_fail_24d8e745",
                                "cyberpi.upload_fail_c52d223b"
                            ]
                        },
                        "middlewares": [{
                                "name": "codey"
                            },
                            {
                                "name": "intl",
                                "func": cyberpiUploadMiddlewareIntl
                            }
                        ],
                        "driver": {
                            "name": "firefly_upload",
                            "func": cyberpiUploadDriverFireflyUpload
                        }
                    },
                    "firmware": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                "cyberpi.firmware_success_70e9b6c0"
                            ],
                            "fail": [
                                "cyberpi.firmware_fail_9b5aae92",
                                "cyberpi.firmware_fail_9a92af14"
                            ]
                        },
                        "driver": {
                            "name": "esp_tool",
                            "func": cyberpiFirmwareDriverEspTool
                        }
                    }
                },
                "firmware": [{
                    "id": "9c2fcf2b",
                    "name": "cyberpi.firmwares_version_9c2fcf2b",
                    "version": "44.01.006",
                    "isDefault": true,
                    "url": {
                        "name": "cyberpi_firmware_44_01_006-ht4.bin",
                        "url": window.MbApi.getExtResPath('cyberpi/res/5ca9b65f6f804430ab736d172403110a.bin', 'cyberpi')
                    },
                    "modules": [{
                            "id": "5ecebe3e",
                            "name": "standard_shield",
                            "type": "0x6709",
                            "version": "27.01.007",
                            "url": {
                                "name": "CyberPi_StandardShied_APP_V2701007_20210113.bin",
                                "url": window.MbApi.getExtResPath('cyberpi/res/5f50329b238e407f9843b66fbd38d233.bin', 'cyberpi')
                            }
                        },
                        {
                            "id": "3a37acb2",
                            "name": "starter_shield",
                            "type": "0x6707",
                            "version": "27.01.004",
                            "url": {
                                "name": "CyberPi_StarterShied_APP_V2701004_20210603.bin",
                                "url": window.MbApi.getExtResPath('cyberpi/res/ffbd73ddddec43ffbf8e24ef1cfb7206.bin', 'cyberpi')
                            }
                        }
                    ]
                }],
                "settings": [{
                        "text": "cyberpi.UPDATE_FIRMWARE",
                        "handle": this.funcs.firmwareSettingHandle
                    },
                    {
                        "id": "05de708e",
                        "text": "cyberpi.settings_05de708e",
                        "handle": this.funcs.settings05De708EHandle
                    },
                    {
                        "id": "cc775efd",
                        "text": "cyberpi.settings_cc775efd",
                        "handle": this.funcs.settingsCc775EfdHandle
                    }
                ],
                "categoriesOrder": [
                    "cate_34b1ba6f",
                    "E_1783_n",
                    "cate_52186034",
                    "cate_c589c493",
                    "E_1784_n",
                    "mesh",
                    "ai",
                    "iot",
                    "events",
                    "control",
                    "operators",
                    "data",
                    "myBlocks"
                ],
                "ota": {
                    "param": {
                        "host": "",
                        "text": ""
                    },
                    "desc": []
                }
            },
            "codeTypes": [
                "python"
            ],
            "version": "1.1.19",
            "platform": [
                "mblockweb",
                "mblockpc",
                "mblockapp"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "excludeBlocks": [
                "event_whengreaterthan",
                "event_whenthisspriteclicked",
                "event_whenbackdropswitchesto",
                "control_start_as_clone",
                "control_create_clone_of",
                "control_delete_this_clone"
            ],
            "generatorStartBlocks": [
                "cyberpi_wifi_broadcast_when_received_message",
                "cyberpi_when_cloud_broadcast",
                "cyberpi_when_launch",
                "cyberpi_when_direction_key_press",
                "cyberpi_when_button_press",
                "cyberpi_when_detect_attitude",
                "cyberpi_when_detect_action",
                "cyberpi_when_sensor_value_bigger_or_smaller_than",
                "event_whenbroadcastreceived"
            ],
            "feature": [],
            "mustLoginBlocks": [
                "cyberpi.cyberpi_speak_with_some_language",
                "cyberpi.cyberpi_speak_with_some_language_2",
                "cyberpi.cyberpi_speak_with_some_language_3",
                "cyberpi.cyberpi_speech_recognition_with_time_3",
                "cyberpi.cyberpi_speech_recognition_with_time_2",
                "cyberpi.cyberpi_speech_recognition_with_record_2",
                "cyberpi.cyberpi_speech_recognition_with_time",
                "cyberpi.BLOCK_1599643085220",
                "cyberpi.cyberpi_speech_recognition_with_record",
                "cyberpi.cyberpi_speech_recognition_result",
                "cyberpi.cyberpi_translate_to_some_language_2",
                "cyberpi.cyberpi_translate_to_some_language",
                "cyberpi.cyberpi_set_cloud_broadcast",
                "cyberpi.cyberpi_set_cloud_broadcast_with_value",
                "cyberpi.cyberpi_when_cloud_broadcast",
                "cyberpi.cyberpi_cloud_broadcast_get_value",
                "cyberpi.cyberpi_get_weather_from_internet",
                "cyberpi.cyberpi_get_air_quality_from_internet",
                "cyberpi.cyberpi_get_sun_time_from_internet",
                "cyberpi.cyberpi_get_local_time_from_internet",
                "cyberpi.cyberpi_get_time_from_internet"
            ],
            "disabledOffline": [
                "cyberpi.cyberpi_follow_mblock_sprite",
                "cyberpi.cyberpi_speech_recognition_with_record_2",
                "event_whenflagclicked",
                "event_whenkeypressed",
                "data_showvariable",
                "data_hidevariable",
                "data_showlist",
                "data_hidelist"
            ],
            "disabledOnline": [
                "cyberpi.cyberpi_wifi_set",
                "cyberpi.cyberpi_wifi_is_connect",
                "cyberpi.cyberpi_speak_with_some_language",
                "cyberpi.cyberpi_speak_with_some_language_2",
                "cyberpi.cyberpi_speak_with_some_language_3",
                "cyberpi.cyberpi_speech_recognition_with_time_3",
                "cyberpi.cyberpi_speech_recognition_with_time_2",
                "cyberpi.cyberpi_speech_recognition_with_time",
                "cyberpi.BLOCK_1599643085220",
                "cyberpi.cyberpi_speech_recognition_result",
                "cyberpi.cyberpi_translate_to_some_language_2",
                "cyberpi.cyberpi_translate_to_some_language",
                "cyberpi.cyberpi_wifi_set",
                "cyberpi.cyberpi_wifi_is_connect",
                "cyberpi.cyberpi_set_cloud_broadcast",
                "cyberpi.cyberpi_set_cloud_broadcast_with_value",
                "cyberpi.cyberpi_when_cloud_broadcast",
                "cyberpi.cyberpi_cloud_broadcast_get_value",
                "cyberpi.cyberpi_get_weather_from_internet",
                "cyberpi.cyberpi_get_air_quality_from_internet",
                "cyberpi.cyberpi_get_sun_time_from_internet",
                "cyberpi.BLOCK_1610527804319",
                "cyberpi.cyberpi_python_insert"
            ]
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

export default ExtCyberpi;