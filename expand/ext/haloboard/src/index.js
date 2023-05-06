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

const haloboardUploadDriverFireflyUpload =
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
    (app, device, code, logHandler, progressHandle, finishHandler, errHandler) => {
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
        uploader.path = '/flash/main.py';
        uploader.content = code;
        uploader.uploadContent();
    };
const haloboardUploadMiddlewareIntl =
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
            // 特殊处理， 由于盒子项目组使用007固件和最新插件，且无法提供升级工具，
            //  因此需要使用007固件上实现的挥动算法（插件上实现），无法使用009固件之后的算法。
            code = haloboard_detect_brandish_code + code;

            code = await iotOperationManager.createIotCode(app, code);

            // cloud message and speech recognition code processing
            let urlRegex = /\{NAVIGATEURL\}/g;
            let tokenRegex = /\{ACCESSTOKEN\}/g;
            let topicRegex = /\{TOPIC\}/g;
            const service = app.getService('account');
            if (service) {
                const user = await service.getUserInfo();
                if (user) {
                    let topic = `/USER/${user.uid}/${systemConstVariables.CLOUD_MQTT}`;
                    if (user.intl) {
                        topic = `/EU/USER/${user.uid}/${systemConstVariables.CLOUD_MQTT}`;
                        code = code.replace(urlRegex, sysOperation.urlConfig(true).speech);
                    } else {
                        code = code.replace(urlRegex, sysOperation.urlConfig(false).speech);
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
// Note: not halocode, and should not be modified
const deviceExtId = "haloboard";

const supportFirmwareVersion = "25.01.009";

const haloboard_detect_brandish_code = `
import  halo, event, time, math
from global_objects import gyro_o
__brandish_left = False
__brandish_right = False
__brandish_down = False
__brandish_up = False
global __inter_shaken_eve_threshold
__inter_shaken_eve_threshold = 0


@event.start
def on_start_loop():
    global __brandish_left
    global __brandish_right
    global __brandish_down
    global __brandish_up
    current_x = 0
    current_y = 0
    current_z = 0

    fil = 0.5
    thres = 200
    while True:
        current_strength = gyro_o.get_shaked_strength()
        gx = halo.motion_sensor.get_gyroscope('x') 
        gy = halo.motion_sensor.get_gyroscope('y') 
        gz = halo.motion_sensor.get_gyroscope('z') 

        current_x = current_x * fil + gx * (1- fil)
        current_y = current_y * fil + gy * (1- fil)
        current_z = current_z * fil + gz * (1- fil)

        if  current_strength >= __inter_shaken_eve_threshold:
            halo.broadcast("__inter_shaken")

        if __brandish_left == False and __brandish_right == False and\
           __brandish_down == False and __brandish_up == False:
            if current_z > thres:
                halo.broadcast("__inter_left")
                __brandish_left = True
                __brandish_right = False
                __brandish_up = False
                __brandish_down = False
            elif current_z < -thres:
                halo.broadcast("__inter_right")
                __brandish_left = False
                __brandish_right = True
                __brandish_up = False
                __brandish_down = False

            if current_x < -thres:
                halo.broadcast("__inter_brandish_down")
                __brandish_down = True
                __brandish_up = False
                __brandish_left = False
                __brandish_right = False

            elif current_x > thres:
                halo.broadcast("__inter_brandish_up")
                __brandish_up = True
                __brandish_down = False
                __brandish_left = False
                __brandish_right = False

        else:
            if math.fabs(gx) + math.fabs(gz) < 100:
                __brandish_left = False
                __brandish_right = False
                __brandish_down = False
                __brandish_up = False

def is_brandish_up():
    global __brandish_up
    return __brandish_up

def is_brandish_down():
    global __brandish_down
    return __brandish_down

def is_brandish_left():
    global __brandish_left
    return __brandish_left

def is_brandish_right():
    global __brandish_right
    return __brandish_right
`;

// const variable
const AUTOMATICALLY_UNSCRIBE_TIME_MS = 5000;
const FIRMWARE_READ_MAX_TIME = 1000;
const FIRMWARE_CHECK_TIME_DELAY = 7000;
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
        if (!this.device) return;
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
        // we can't use global variabl here
        this.supportFirmwareVersion = supportFirmwareVersion;
        this.currentFirmwareVersion = undefined;
        this.communication = communication;

        this.accessToken = "";
        this.userInfo = null;

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
        if (!this.communication) return;
        let value = null;
        for (let n = 0; n < 3; n++) {
            await this.communication.write(systemConstVariables.getCurrentFirmwareVersionComamnd);
            //                                                                                               '2'   '5'     '.'   '0',  '1'   '.'      
            value = await this.communication.read([0x06, 'byte', 'byte', 'byte', 'byte', 'byte', 'byte', 'byte', 'byte', 'byte'], FIRMWARE_READ_MAX_TIME);
            if (value !== null) {
                break;
            }
        }
        if (value === null) {
            return null;
        } else {
            return value;
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
                        this.appContext.workspace.resetEvents();
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
    async checkFirmwareVersion() {
        // supportFirmwareVersion and deviceExtId are defined
        // at the top of script
        let retObject = {
            deviceName: "", // ext id
            deviceFirmwareVersion: "", // currentVersion
            supportFirmwareVersion: supportFirmwareVersion, // support version
            isLatest: true, // whether the latest(supported) version 
            code: 0
        };


        if (!this.communication) {
            retObject.code = -1;
            return retObject
        }

        let firmVerBytes = await this.getCurrentVersionOfDevice();
        if (firmVerBytes === null) {
            retObject.code = -3;
            return retObject
        }

        for (let i = 0; i < firmVerBytes.length; i++) {
            firmVerBytes[i] = String.fromCharCode(firmVerBytes[i]);
        }

        let currentVerStr = firmVerBytes.join('');
        let currentVer = firmVerBytes.join('').split('.');
        let supportVer = this.supportFirmwareVersion.split('.');

        this.currentFirmwareVersion = currentVerStr;

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

        if (currentVer[0] == 'T') {
            if (supportVer[0] != "T") {
                retObject.isLatest = false;
                retObject.code = 1;
                retObject.deviceFirmwareVersion = currentVerStr;
                return retObject
            } else {
                if (currentVer.slice(6, 8) < supportVer.slice(6, 8)) {
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
        mac_address_hexvalue = mac_address_string.split(",");
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

    urlConfig(intl = false) {
        if (intl) {
            return {
                speech: 'http://eu.msapi.passport3.makeblock.com/ms/bing_speech/interactive',
                getaccesstoken: 'https://eu.passport2.makeblock.com/v1/api/getaccesstoken'
            };
        } else {
            return {
                speech: 'http://msapi.passport3.makeblock.com/ms/bing_speech/interactive',
                getaccesstoken: 'https://passport2.makeblock.com/v1/api/getaccesstoken'
            }
        }
    };

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
                            if (this.blockTable[key].subscribeFlag[item] === 2) {
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
        if (tag && tag.indexOf(this.extName + ".") > -1) {
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
        if (this.blockTable[key].value[addition_para] === undefined &&
            (+new Date() - this.blockTable[key].subscribeCmdSendTime[addition_para] > 500)) {
            this.blockTable[key].subscribeCmdSendTime[addition_para] = +new Date();
            // to subscribe
            this.blockTable[key].subscribeFlag[addition_para] = 1;
            return new Promise(async (resolve) => {
                try {
                    await commonFunction.delay(Math.ceil(Math.random() * 50) + 10);
                    await this.subscribe(tag, addition_para);
                    ret = await this.getValueUntilDataUpdate(tag, 500, addition_para);
                    // subscribed
                    this.blockTable[key].subscribeFlag[addition_para] = 2;

                    if (!(addition_para in this.blockTable[key].autoSubscribeControlFlag)) {
                        this.setAutoSubscribeControlFlag(tag, true, addition_para);
                    }
                    if (specialProcessHandle !== undefined) {
                        resolve(specialProcessHandle(this.blockTable[key].getValueViaType(addition_para, valType)));
                    } else {
                        resolve(this.blockTable[key].getValueViaType(addition_para, valType));
                    }

                } catch (e) {
                    this.blockTable[key].subscribeFlag[addition_para] = 0;
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

        if (this.communication && this.blockTable[key].subscribeFlag[addition_para] === 2) {
            let dynamicIndex = onlineProtocolPackage.getOnlineProtocolDanamicIndex()[0];

            let subKey = key;
            if (addition_para !== "default") {
                subKey = key + '_' + addition_para;
            }

            await this.communication.write(onlineProtocolPackage.__createFrame(
                0x04, dynamicIndex, 'subscribe.del_item', [subKey]));
            this.blockTable[key].subscribeFlag[addition_para] = 0;
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
    new onlineDataStructure("haloboard_detect_tilt_9", "halo.motion_sensor.is_waveleft", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_10", "halo.motion_sensor.is_waveright", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_11", "halo.motion_sensor.is_waveup", [], {
        default: "bool"
    }),
    new onlineDataStructure("haloboard_detect_tilt_12", "halo.motion_sensor.is_wavedown", [], {
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
    new onlineDataStructure("haloboard_mesh_when_received_message", "halo.mesh.get_all_info_status", []),

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
    new onlineDataStructure("__haloboard_sys_status_get_speech_error_message", "status_check.speech.get_error_message", [], {
        default: "string"
    }),
    new onlineDataStructure("__haloboard_sys_status_get_speech_result", "status_check.speech.get_result_code", [], {
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


// system init
var sysOperation = undefined;
var commonFunction = undefined;
var onlineCommunication = undefined;

var onlineProtocolPackage = undefined;
var onlineManager = undefined;
var iotOperationManager = undefined;

// 当连接光环板时， 使用本地的对象，并备份当前windows下的haloSharedObject变量，
// 当光环板断开或者角色删除时，还原到备份。
var windowHaloSharedObjectBackup = undefined;
var localSharedObject = undefined;

// all device that loaded in mblock will use the same haloSharedObject
// so, we just create once
/* we only share the function, but not the global config, so this interface update the global parameters for a special device*/
function updateProjectGlobalParameter() {
    sysOperation.supportFirmwareVersion = supportFirmwareVersion;
}

function createOnlineobjects() {
    if (1 /*window.haloSharedObject === undefined*/ ) {

        if (sysOperation == undefined) {
            sysOperation = new sysOperationClass();
        }
        if (commonFunction == undefined) {
            commonFunction = new commonFunctionClass();
        }
        if (onlineCommunication == undefined) {
            onlineCommunication = new onlineCommunicationClass();
        }

        if (onlineProtocolPackage == undefined) {
            onlineProtocolPackage = new onlineProtocolPackageClass();
        }
        if (onlineManager == undefined) {
            onlineManager = new onlineManagerClass();
        }
        if (iotOperationManager == undefined) {
            iotOperationManager = new iotOperationManagerClass();
        }

        onlineManager.updateOnlineTable("add", halocodeOnlineTable);
        onlineManager.updateOnlineTable("add", halocodeStatusCheckTable);
        onlineManager.updateOnlineTable("add", halocodeSystemCmdTable);

        localSharedObject = {
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
    }
}

async function haloExtSystemInit(device, app) {
    // 连接时使用本地对象，并备份系统对象
    windowHaloSharedObjectBackup = window.haloSharedObject;
    window.haloSharedObject = localSharedObject;

    onlineCommunication.setDevice(device);
    await sysOperation.init(onlineCommunication, app);
}

function haloExtSystemDeinit(device, app) {
    // 断开连接时恢复到之前的状态
    window.haloSharedObject = windowHaloSharedObjectBackup;

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
    debug: ["haloboard.haloboard_wifi_set", "haloboard.haloboard_wifi_is_connect", "haloboard.haloboard_wifi_speech_recognition", "haloboard.haloboard_wifi_speech_recognition_v2", "haloboard.haloboard_wifi_speech_recognition_word", "haloboard.haloboard_wifi_user_broadcast", "haloboard.haloboard_wifi_user_broadcast_with_value", "haloboard.haloboard_wifi_when_user_broadcast", "haloboard.haloboard_wifi_user_broadcast_value", "haloboard.BLOCK_1560701681811", "haloboard.BLOCK_1560702195139", "haloboard.BLOCK_1560702421892", "haloboard.BLOCK_1560702536759", "haloboard.haloboard_when_launch"],
    upload: ["event_whenflagclicked", "event_whenkeypressed", "data_showvariable", "data_hidevariable", "data_showlist", "data_hidelist"]
};

const mustLoginBlocks = ["haloboard.haloboard_wifi_speech_recognition", "haloboard.haloboard_wifi_speech_recognition_v2", "haloboard.haloboard_wifi_speech_recognition_word", "haloboard.haloboard_wifi_user_broadcast", "haloboard.haloboard_wifi_user_broadcast_with_value", "haloboard.haloboard_wifi_when_user_broadcast", "haloboard.haloboard_wifi_user_broadcast_value", "haloboard.BLOCK_1560701681811", "haloboard.BLOCK_1560702195139", "haloboard.BLOCK_1560702421892"];

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



class ExtHaloboard {

    constructor() {
        this.funcs = {
            'firmwareSettingHandle': ({
                handle: (app, device, info) => {
                    const uploaderUI = app.getService('system.ui.firmware.uploader');
                    if (uploaderUI) {
                        uploaderUI.onOK((data) => {
                            device.uploadFirmware(data);
                        })
                        uploaderUI.onFail((err) => {
                            console.error(err);
                        })
                        uploaderUI.open(info);
                    }
                },
                check: (app, device) => {
                    // now use the old processing in PC
                    function isPC() {
                        if (window.platform === undefined) {
                            return false;
                        }

                        return !!(window.platform.name === "Electron");
                    };

                    return new Promise(async function(resolve) {
                        setTimeout(async () => {
                            try {
                                let ret = await sysOperation.checkFirmwareVersion();
                                console.log('firmware version check :', ret);

                                if (ret.code < 0) {
                                    ret.code = 1;
                                } else {
                                    ret.code = 0;
                                }


                                if (isPC()) {
                                    resolve(!ret.isLatest);
                                } else {
                                    resolve(ret);
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
                        }, FIRMWARE_CHECK_TIME_DELAY);
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
            'settings717E2676Handle': async (app, device, block) => {
                let mbuildModuleNmaeTable = {
                    m_mq2_sensor: "气体传感器",
                    m_button: "按钮",
                    m_joystick: "遥杆",
                    m_temp_sensor: "温度传感器",
                    m_humiture_sensor: "温湿度传感器",
                    m_slider: "电位器",
                    m_ranging_sensor: "测距传感器",
                    m_flame: "火焰传感器",
                    m_pir: "热运动传感器",
                    m_angle_sensor: "角度传感器",
                    m_speaker: "扬声器",
                    m_dc_motor: "电机驱动",
                    m_servo: "舵机驱动",
                    m_rgb: "RGB灯",
                    m_led_panel: "LED点阵",
                    m_ultrasonic_sensor: "超声波传感器",
                    m_rgb_led_ring: "彩灯驱动",
                    m_dual_rgb_sensor: "双路颜色传感器",
                    m_light_sensor: "光线传感器",
                    m_soil_moisture: "土壤湿度传感器",
                    m_sound_sensor: "声音传感器",
                    m_mult_touch: "多路触摸",
                    m_magneto_dependent_sensor: "磁敏传感器",
                    m_ir_sensor: "红外收发",
                    m_motion_sensor: "运动传感器",
                    m_halobot: "光环小车",
                    m_smartservo: "智能舵机",
                    m_smart_camera: "视觉模块",
                }

                let deviceStatus = 0;

                if (device.isUploadMode()) {
                    await onlineSystemInit();
                    deviceStatus = await sysOperation.deviceStatucUpdate();
                    await onlineSystemDeinit();
                } else {
                    deviceStatus = await sysOperation.deviceStatucUpdate();
                }

                let modulesNameStr = "";
                for (let i in deviceStatus.connectModules) {
                    let moduleName = deviceStatus.connectModules[i].split("X");

                    if (moduleName.length > 1) {
                        modulesNameStr += mbuildModuleNmaeTable[moduleName[0]] + "X" + moduleName[1] + ', '
                    } else if (moduleName.length === 1) {
                        modulesNameStr += mbuildModuleNmaeTable[moduleName[0]] + ', '
                    }

                }

                let lableText = "固件版本: " + deviceStatus.firmwareVersion + '\r\n' +
                    "当前模式: " + deviceStatus.currentMode + '\r\n' +
                    //        "连接通道: " + deviceStatus.currentChannel + '\r\n' +
                    "FI连接状态: " + deviceStatus.isWifiConnected + '\r\n' +
                    "蓝牙地址:" + deviceStatus.bleName + '\r\n' +
                    "语音识别结果：" + deviceStatus.speechResult + '\r\n' +
                    "MAC地址：" + deviceStatus.macAddress + '\r\n';

                console.log(lableText)

                const service = app.getService('system.ui');

                const title = 'haloboard.device_state';
                const label = ['haloboard.firmware_versions', 'haloboard.show_mode', 'haloboard.wifi_link_status',
                    'haloboard.bluetooth_address', 'haloboard.language_recognition_results', 'haloboard.mac_address', 'haloboard.prompt_message'
                ];

                const dialog = await service.dialog('deviceStatuc', {
                    title: title,
                    width: '240px',
                    fields: [{
                            label: label[0],
                            type: 'text',
                            value: deviceStatus.firmwareVersion
                        },
                        {
                            label: label[1],
                            type: 'text',
                            value: deviceStatus.currentMode
                        },
                        // {
                        //     label: "连接通道: " + deviceStatus.currentChannel
                        // },
                        {
                            label: label[2],
                            type: 'text',
                            value: deviceStatus.isWifiConnected
                        },
                        {
                            label: label[3],
                            type: 'text',
                            value: deviceStatus.bleName
                        },
                        {
                            label: label[4],
                            type: 'text',
                            value: deviceStatus.speechResult
                        },
                        {
                            label: label[5],
                            type: 'text',
                            value: deviceStatus.macAddress
                        },
                        {
                            label: '<br />',
                            text: '<br />'
                        },
                        {
                            label: label[6]
                        },
                    ],
                    buttons: [{
                        id: 'deviceStatusCheckClose',
                        text: '关闭',
                        handle: async (ctx) => {
                            setTimeout(() => {
                                dialog.close();
                            }, 100)
                        }
                    }]
                });
            },
            'BLOCK_1570879365614': {
                onRun: async (args, app, device, block) => {
                    let para = [args.LED_animation, true];

                    // a temporary process for 25.01.005
                    // remove it after 25.01.006
                    await device.asyncWriteProtocol('f3f4',
                        [0x28, 0x04, 0x00, 0x00, 0x1b, 0x00, 0x68, 0x61, 0x6c, 0x6f, 0x2e, 0x6c, 0x65, 0x64, 0x2e, 0x63, 0x6c, 0x65, 0x61, 0x72, 0x5f, 0x66, 0x6c, 0x61, 0x67, 0x20, 0x3d, 0x20, 0x46, 0x61, 0x6c, 0x73, 0x65]
                    );

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'haloboard_show_ring_effect': {
                onRun: async (args, app, device, block) => {
                    let para = [args.LED_animation, true];

                    // a temporary process for 25.01.005
                    // remove it after 25.01.006
                    await device.asyncWriteProtocol('f3f4',
                        [0x28, 0x04, 0x00, 0x00, 0x1b, 0x00, 0x68, 0x61, 0x6c, 0x6f, 0x2e, 0x6c, 0x65, 0x64, 0x2e, 0x63, 0x6c, 0x65, 0x61, 0x72, 0x5f, 0x66, 0x6c, 0x61, 0x67, 0x20, 0x3d, 0x20, 0x46, 0x61, 0x6c, 0x73, 0x65]
                    );

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode, true, 30000);
                }
            },
            'haloboardShowRingColorCodesCode': (args) => {
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

                return `halo.led.show_ring('${out_str}')`
            },
            'haloboard_show_ring_color': {
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
            'haloboardShowRotationColorCodesCode': (args) => {
                let offset = args.led_number;
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

                return `halo.led.show_ring('${out_str}', ${offset})`
            },
            'haloboard_show_rotation_color': {
                onRun: async (args, app, device, block) => {
                    let out_str = '';
                    let num = Number(args.led_number);
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


                    let para = [out_str, num];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'haloboardShowAllLedsCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `halo.led.show_all(${r}, ${g}, ${b})`;
            },
            'haloboard_show_all_leds': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_1;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let para = [r, g, b];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboardShowAllLedsWithLightnessCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                var lightness = args.lightness;
                return `halo.led.show_all(${r}, ${g}, ${b}, ${lightness})`;
            },
            'haloboard_show_all_leds_with_lightness': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_1;
                    let percentage = Number(args.lightness);

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let para = [r, g, b, percentage];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboard_off_all_leds': {
                onRun: async (args, app, device, block) => {
                    // await onLineSendWithoutRespond(device, 'led.off_all');
                    // tell low computer to execute this command immediatly 
                    await device.asyncWriteProtocol('f3f4',
                        onlineProtocolPackage.__createFrame(0x03, 0x00, 'led.off_all', [])
                    );
                    await commonFunction.delay(50);
                }
            },
            'haloboard_show_all_leds_with_rgb': {
                onRun: async (args, app, device, block) => {
                    let r = Number(args.r);
                    let g = Number(args.g);
                    let b = Number(args.b);

                    onlineManager.parasUpdate(block.opcode, [r, g, b]);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboard_show_single_led_with_rgb': {
                onRun: async (args, app, device, block) => {
                    let led_id = Number(args.led_id);
                    let r = Number(args.r);
                    let g = Number(args.g);
                    let b = Number(args.b);

                    let para = [led_id, r, g, b]
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboard_off_single_led': {
                onRun: async (args, app, device, block) => {
                    let led_id = Number(args.led_id);

                    let para = [led_id]
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'haloboard_show_percentage': {
                onRun: async (args, app, device, block) => {
                    let percentage = Number(args.percentage);

                    let para = [percentage]
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                }
            },
            'haloboard_detect_button_pressed': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "haloboard_detect_button_pressed";
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_detect_volume': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "haloboard_detect_volume";
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {

                }
            },
            'haloboard_detect_touch': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    let id = args.touchpad_number;
                    const opcode = "haloboard_detect_touch" + '_' + id;
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_detect_touch_value': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    let id = args.touchpad_number;
                    const opcode = "haloboard_detect_touch_value" + '_' + id;
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552905879755': {
                onRun: async (args, app, device, block) => {
                    let id = args.touchpad_number;
                    let para = [args.sensitivity];
                    let opcode = block.opcode + '_' + id;
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'haloboardDetectTilt1CodesCode': (args) => {
                if (args.tilt == 'arrow_left_brandish') {
                    return `is_brandish_left()`
                } else if (args.tilt == 'arrow_right_brandish') {
                    return `is_brandish_right()`
                } else if (args.tilt == 'arrow_up_brandish') {
                    return `is_brandish_up()`
                } else if (args.tilt == 'arrow_down_brandish') {
                    return `is_brandish_down()`
                } else {
                    return `halo.motion_sensor.is_${args.tilt}()`
                }
            },
            'haloboard_detect_tilt_1': {
                onRun:

                    (args, app, device, block) => {
                        if (!device.isConnected() || device.isUploadMode()) return false;

                        let value = false;
                        const tiltMap = {
                            tilted_left: 0,
                            tilted_right: 1,
                            arrow_up: 2,
                            arrow_down: 3,
                            led_ring_up: 4,
                            led_ring_down: 5,
                            rotate_clockwise: 6,
                            rotate_anticlockwise: 7,
                            free_fall: 8
                        }
                        this.brandishFilterValue = [0, 0];
                        this.attitudeBrandishValue = [false, false, false, false];
                        let filterValue = 0.2;
                        let thres = 300;
                        let thres_y = 290;
                        let staticThres = 260;

                        let value_x = onlineManager.getValue("haloboard_detect_axis_gyro_z");

                        this.brandishFilterValue[0] = this.brandishFilterValue[0] * filterValue + value_x * (1 - filterValue);

                        if (!(this.attitudeBrandishValue[0] || this.attitudeBrandishValue[1] || this.attitudeBrandishValue[2] || this.attitudeBrandishValue[3])) {
                            if (this.brandishFilterValue[0] > thres) {
                                this.attitudeBrandishValue[0] = true;
                                this.attitudeBrandishValue[2] = false;
                                this.attitudeBrandishValue[3] = false;
                            } else if (this.brandishFilterValue[0] < -thres) {
                                this.attitudeBrandishValue[1] = true;
                                this.attitudeBrandishValue[2] = false;
                                this.attitudeBrandishValue[3] = false;
                            }
                        } else {
                            if (Math.abs(this.brandishFilterValue[0]) + Math.abs(this.brandishFilterValue[1]) < staticThres) {
                                this.attitudeBrandishValue[0] = false;
                                this.attitudeBrandishValue[1] = false;
                                this.attitudeBrandishValue[2] = false;
                                this.attitudeBrandishValue[3] = false;
                            }
                        }

                        let value_y = onlineManager.getValue("haloboard_detect_axis_gyro_x");
                        this.brandishFilterValue[1] = this.brandishFilterValue[1] * filterValue + value_y * (1 - filterValue);

                        if (!(this.attitudeBrandishValue[0] || this.attitudeBrandishValue[1] || this.attitudeBrandishValue[2] || this.attitudeBrandishValue[3])) {
                            if (this.brandishFilterValue[1] > thres_y) {
                                this.attitudeBrandishValue[0] = false;
                                this.attitudeBrandishValue[1] = false;
                                this.attitudeBrandishValue[2] = true;
                            } else if (this.brandishFilterValue[1] < -thres) {
                                this.attitudeBrandishValue[0] = false;
                                this.attitudeBrandishValue[1] = false;
                                this.attitudeBrandishValue[3] = true;
                            } else {
                                if (Math.abs(this.brandishFilterValue[0]) + Math.abs(this.brandishFilterValue[1]) < staticThres) {
                                    this.attitudeBrandishValue[0] = false;
                                    this.attitudeBrandishValue[1] = false;
                                    this.attitudeBrandishValue[2] = false;
                                    this.attitudeBrandishValue[3] = false;
                                }
                            }
                        }

                        if (args.tilt == 'arrow_left_brandish') {
                            value = this.attitudeBrandishValue[0];
                        } else if (args.tilt == 'arrow_right_brandish') {
                            value = this.attitudeBrandishValue[1];
                        } else if (args.tilt == 'arrow_up_brandish') {
                            value = this.attitudeBrandishValue[2];
                        } else if (args.tilt == 'arrow_down_brandish') {
                            value = this.attitudeBrandishValue[3];
                        } else {
                            const opcode = "haloboard_detect_tilt" + '_' + tiltMap[args['tilt']];
                            value = onlineManager.getValue(opcode);
                        }

                        return value;
                    }
            },
            'haloboard_detect_tilt': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const tiltMap = {
                        tilted_left: 0,
                        tilted_right: 1,
                        arrow_up: 2,
                        arrow_down: 3,
                        led_ring_up: 4,
                        led_ring_down: 5,
                        rotate_clockwise: 6,
                        rotate_anticlockwise: 7,
                        free_fall: 8
                    }
                    const opcode = "haloboard_detect_tilt" + '_' + tiltMap[args['tilt']];
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'haloboardDetectInclineCodesCode': (args) => {
                if (args.incline == "left_incline") {
                    return `-halo.motion_sensor.get_roll()`;
                } else if (args.incline == "right_incline") {
                    return `halo.motion_sensor.get_roll()`;
                } else if (args.incline == "up_incline") {
                    return `-halo.motion_sensor.get_pitch()`;
                } else if (args.incline == "down_incline") {
                    return `halo.motion_sensor.get_pitch()`;
                }
            },
            'haloboard_detect_incline': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const inclineMap = {
                        up_incline: 1,
                        down_incline: 1,
                        left_incline: 2,
                        right_incline: 2
                    };
                    let value = onlineManager.getValue("haloboard_detect_tilt_degree" + '_' + inclineMap[args.incline]);
                    if ((args.incline == 'left_incline') || (args.incline == 'up_incline')) {
                        value = value * -1;
                    } else if ((args.incline == 'right_incline') || (args.incline == 'down_incline')) {
                        value = value;
                    }
                    if (isNaN(value)) {
                        value = 0;
                    }
                    return value;
                }
            },
            'haloboard_detect_shaked': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "haloboard_detect_shaked";
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_detect_shaked_value': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "haloboard_detect_shaked_value";
                    let value = onlineManager.getValue(opcode);
                    return value;

                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_detect_axis_acceleration': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "haloboard_detect_axis_acceleration" + '_' + args.axis;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'haloboard_detect_axis_gyro': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "haloboard_detect_axis_gyro" + '_' + args.axis;
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_detect_tilt_degree': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const attitudeMap = {
                        pitch: 1,
                        roll: 2
                    };
                    let value = onlineManager.getValue("haloboard_detect_tilt_degree" + '_' + attitudeMap[args.rotation]);
                    return value;

                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_detect_rotation_degree': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const opcode = "haloboard_detect_rotation_degree" + '_' + args.axis;
                    let value = onlineManager.getValue(opcode);
                    // if (value instanceof Promise) {
                    //     return 0;
                    // }
                    return value;
                }
            },
            'haloboard_reset_rotation_degree': {
                onRun: async (args, app, device, block) => {
                    let para = [args.axis];

                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);

                    // the value of timer should be reset
                    const reset_func = async (axis) => {
                        let opcode = "haloboard_detect_rotation_degree" + '_' + axis;
                        let key = onlineManager.__getKeyViaTag(opcode);
                        if (onlineManager.blockTable[key].value["default"] !== undefined) {
                            onlineManager.valueUpdate(key, 0);
                            await commonFunction.delay(20);
                        }
                    }
                    if (args.aixs == "all") {
                        reset_func("x");
                        reset_func("y");
                        reset_func("z");
                    } else {
                        reset_func(args.axis);
                    }


                }
            },
            'haloboard_detect_time': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0.0;

                    const opcode = "haloboard_detect_time";
                    let value = onlineManager.getValue(opcode);
                    return value;

                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_reset_time': {
                onRun: async (args, app, device, block) => {
                    await onlineManager.request(block.opcode);
                    // the value of timer should be reset
                    let key = onlineManager.__getKeyViaTag("haloboard_detect_time");
                    if (onlineManager.blockTable[key].value["default"] !== undefined) {
                        await commonFunction.delay(50);
                        onlineManager.valueUpdate(key, 0.0);
                    }
                }
            },
            'haloboard_pin_is_digtial': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "haloboard_pin_is_digtial" + '_' + args.pin_number
                    let value = onlineManager.getValue(opcode, "default", "bool");
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_pin_read_digtial': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "haloboard_pin_is_digtial" + '_' + args.pin_number
                    let value = onlineManager.getValue(opcode);

                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_pin_read_analog': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "haloboard_pin_read_analog" + '_' + args.pin_number;
                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_pin_write_digtial': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.Digtial_value)];
                    let opcode = block.opcode + '_' + args.pin_number;

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'haloboard_pin_write_PWM': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.PWM_value)];

                    let opcode = block.opcode + '_' + args.pin_number;

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'haloboard_pin_set_servo': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.ServoRotaryAngle)];

                    let opcode = block.opcode + '_' + args.pin_number;
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'halo_pin_play_buzzer_with_frequency': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.duration);
                    if (!time || time <= 0) return;

                    let para = [Number(args.frequency)];

                    let opcode = "halo_pin_play_buzzer_with_frequency" + '_' + args.pin_num;

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                    await commonFunction.delay(time * 1000, () => {
                        para = [0];
                        onlineManager.parasUpdate(opcode, para);
                        onlineManager.request(opcode);
                    });
                    return await commonFunction.delay(50, () => {
                        ;
                    });
                }
            },
            'halo_play_buzzer_with_note': {
                onRun: async (args, app, device, block) => {

                }
            },
            'haloboard_wifi_set': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'haloboard_wifi_is_connect': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboardWifiSpeechRecognitionCodesLib': (args) => {
                return `halo.speech_recognition.set_recognition_address(url = "{NAVIGATEURL}")
halo.speech_recognition.set_access_token(token = "{ACCESSTOKEN}")`;
            },
            'haloboard_wifi_speech_recognition': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'haloboardWifiSpeechRecognitionV2CodesLib': (args) => {
                return `halo.speech_recognition.set_recognition_address(url = "{NAVIGATEURL}")
halo.speech_recognition.set_access_token(token = "{ACCESSTOKEN}")`;
            },
            'haloboard_wifi_speech_recognition_v2': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'haloboard_wifi_speech_recognition_word': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'haloboardWifiUserBroadcastCodesLib': (args) => {
                return `halo.cloud_message.start('{TOPIC}')`;
            },
            'haloboard_wifi_user_broadcast': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'haloboardWifiUserBroadcastWithValueCodesLib': (args) => {
                return `halo.cloud_message.start('{TOPIC}')`;
            },
            'haloboard_wifi_user_broadcast_with_value': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'haloboardWifiWhenUserBroadcastCodesLib': (args) => {
                return `halo.cloud_message.start('{TOPIC}')`;
            },
            'haloboard_wifi_when_user_broadcast': {
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
            'haloboardWifiUserBroadcastValueCodesLib': (args) => {
                return `halo.cloud_message.start('{TOPIC}')`;
            },
            'haloboard_wifi_user_broadcast_value': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1543814805990': {
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

                widget.showEditor_ = () => {
                    iotOperationManager.DialogWidget(widget, 'weatherDialog', 'haloboard.CHOOSE_CITY', getOptions);
                }
            },
            'block1560701681811CodesCode': (args) => {
                let LOCATION = JSON.parse(args.LOCATION)[1];
                let ret_str = "";
                switch (Number(args.WEATHER_TYPE)) {
                    case 0:
                        ret_str = `iot.max_temp('${LOCATION}', 'celsius')`;
                        break;
                    case 1:
                        ret_str = `iot.min_temp('${LOCATION}', 'celsius')`;
                        break;
                    case 2:
                        ret_str = `iot.max_temp('${LOCATION}', 'fahrenheit')`;
                        break;
                    case 3:
                        ret_str = `iot.min_temp('${LOCATION}', 'fahrenheit')`;
                        break;
                    case 4:
                        ret_str = `iot.weather('${LOCATION}')`;
                        break;
                    case 5:
                        ret_str = `iot.humidity('${LOCATION}')`;
                        break;

                }
                return ret_str;
            },
            'BLOCK_1560701681811': {
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

                widget.showEditor_ = () => {
                    iotOperationManager.DialogWidget(widget, 'airDialog', 'haloboard.METEOROLOGICAL', getOptions);
                }
            },
            'block1560702195139CodesCode': (args) => {
                let meteorological = JSON.parse(args.METEOROLOGICAL)[1]
                return `iot.air('${meteorological}', '${args.aq_type}')`;
            },
            'BLOCK_1560702195139': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'block1560702421892CodesCode': (args) => {
                let LOCATION = JSON.parse(args.LOCATION)[1];
                return `iot.${args.sun_move_type}('${LOCATION}', '${args.time_type}')`;
            },
            'BLOCK_1560702421892': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1560702536759': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_mesh_create1': {
                onRun: async (args, app, device, block) => {
                    let para = [args.mesh_name];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboard_mesh_join1': {
                onRun: async (args, app, device, block) => {
                    let para = [args.mesh_name];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboard_mesh_broadcast_message': {
                onRun: async (args, app, device, block) => {
                    let para = [args.message];
                    onlineManager.parasUpdate(block.opcode, para);
                    await onlineManager.request(block.opcode);
                }
            },
            'haloboard_mesh_broadcast_message_with_value': {
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
            'haloboard_mesh_when_received_message': {
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
                    const opcode = "haloboard_mesh_when_received_message";
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
                    onlineManager.setAutoSubscribeControlFlag("haloboard_mesh_when_received_message", true);
                    onlineManager.setValueUpdateCallback("haloboard_mesh_when_received_message", undefined);
                }
            },
            'haloboard_mesh_get_value': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return "";

                    const opcode = "haloboard_mesh_get_value";
                    let para = [args.message];

                    // onlineManager.parasUpdate(opcode, para, args.message);
                    // let value = onlineManager.getValue(opcode, args.message);

                    onlineManager.parasUpdate(opcode, para);
                    let value = onlineManager.request(opcode, args.message);

                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1554191633131': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_when_launch': {
                onRun: (args, app, device, block) => {},
                onAdd: (app, device, block) => {
                    // TODO
                },
                onRemove: (app, device, block) => {
                    // TODO
                }
            },
            'haloboard_when_button_pressed': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (this.buttonEventValue) {
                        ret = true;
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    onlineManager.addEvent("haloboard_detect_button_pressed", (value) => {
                        this.buttonEventValue = value;
                        if (this.buttonEventValue) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    onlineManager.setAutoSubscribeControlFlag("haloboard_detect_button_pressed", true);
                    onlineManager.setValueUpdateCallback("haloboard_detect_button_pressed", undefined);
                }
            },
            'haloboard_when_shaked': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (this.shakedEventValue) {
                        ret = true;
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    onlineManager.addEvent("haloboard_detect_shaked", (value) => {
                        this.shakedEventValue = value;
                        if (this.shakedEventValue) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });

                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_shaked";

                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'haloboard_when_tilt': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.tilt == 'arrow_up') {
                        if (this.attitudeEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'arrow_down') {
                        if (this.attitudeEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'tilted_left') {
                        if (this.attitudeEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'tilted_right') {
                        if (this.attitudeEventValue[3]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'rotate_clockwise') {
                        if (this.attitudeEventValue[4]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'rotate_anticlockwise') {
                        if (this.attitudeEventValue[5]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'free_fall') {
                        if (this.attitudeEventValue[6]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.attitudeEventValue = [false, false, false, false, false, false, false];
                    this.attitudeEventType = [false, false, false, false, false, false, false];

                    let opcode = "haloboard_detect_tilt_2";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[0] != value) {
                            this.attitudeEventValue[0] = value;
                            if (this.attitudeEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[0] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_3";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[1] != value) {
                            this.attitudeEventValue[1] = value;
                            if (this.attitudeEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[1] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_0";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[2] != value) {
                            this.attitudeEventValue[2] = value;
                            if (this.attitudeEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[2] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_1";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[3] != value) {
                            this.attitudeEventValue[3] = value;
                            if (this.attitudeEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[3] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_6";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[4] != value) {
                            this.attitudeEventValue[4] = value;
                            if (this.attitudeEventValue[4]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[4] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_7";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[5] != value) {
                            this.attitudeEventValue[5] = value;
                            if (this.attitudeEventValue[5]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[5] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_8";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[6] != value) {
                            this.attitudeEventValue[6] = value;
                            if (this.attitudeEventValue[6]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[6] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_tilt_0";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_1";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_2";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_3";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_6";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_7";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_8";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'haloboard_when_tilt_1': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.tilt == 'arrow_up') {
                        if (this.attitudeEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'arrow_down') {
                        if (this.attitudeEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'tilted_left') {
                        if (this.attitudeEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'tilted_right') {
                        if (this.attitudeEventValue[3]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'rotate_clockwise') {
                        if (this.attitudeEventValue[4]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'rotate_anticlockwise') {
                        if (this.attitudeEventValue[5]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'free_fall') {
                        if (this.attitudeEventValue[6]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'received("__inter_left")') {
                        if (this.attitudeEventValue[7]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'received("__inter_right")') {
                        if (this.attitudeEventValue[8]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'received("__inter_brandish_up")') {
                        if (this.attitudeEventValue[9]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'received("__inter_brandish_down")') {
                        if (this.attitudeEventValue[10]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.attitudeEventValue = [false, false, false, false, false, false, false, false, false, false, false];
                    this.attitudeEventType = [false, false, false, false, false, false, false, false, false, false, false];
                    this.brandishFilterValue = [0, 0];
                    let opcode = "haloboard_detect_tilt_2";
                    let filterValue = 0.2;
                    let thres = 300;
                    let thres_y = 290;
                    let staticThres = 260;

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[0] != value) {
                            this.attitudeEventValue[0] = value;
                            if (this.attitudeEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[0] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_3";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[1] != value) {
                            this.attitudeEventValue[1] = value;
                            if (this.attitudeEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[1] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_0";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[2] != value) {
                            this.attitudeEventValue[2] = value;
                            if (this.attitudeEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[2] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_1";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[3] != value) {
                            this.attitudeEventValue[3] = value;
                            if (this.attitudeEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[3] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_6";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[4] != value) {
                            this.attitudeEventValue[4] = value;
                            if (this.attitudeEventValue[4]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[4] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_7";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[5] != value) {
                            this.attitudeEventValue[5] = value;
                            if (this.attitudeEventValue[5]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[5] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_8";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[6] != value) {
                            this.attitudeEventValue[6] = value;
                            if (this.attitudeEventValue[6]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[6] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_axis_gyro_z";

                    onlineManager.addEvent(opcode, (value) => {


                        this.brandishFilterValue[0] = this.brandishFilterValue[0] * filterValue +
                            value * (1 - filterValue);


                        if (!(this.attitudeEventValue[7] || this.attitudeEventValue[8] ||
                                this.attitudeEventValue[9] || this.attitudeEventValue[10])) {
                            if (this.brandishFilterValue[0] > thres) {

                                this.attitudeEventValue[7] = true;
                                this.attitudeEventValue[9] = false;
                                this.attitudeEventValue[10] = false;

                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[7] = true;
                            } else if (this.brandishFilterValue[0] < -thres) {
                                this.attitudeEventValue[8] = true;
                                this.attitudeEventValue[9] = false;
                                this.attitudeEventValue[10] = false;

                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[8] = true;
                            }
                        } else {
                            if (Math.abs(this.brandishFilterValue[0]) + Math.abs(this.brandishFilterValue[1]) < staticThres) {
                                this.attitudeEventValue[7] = false;
                                this.attitudeEventValue[8] = false;
                                this.attitudeEventValue[9] = false;
                                this.attitudeEventValue[10] = false;
                            }
                        }
                    });

                    opcode = "haloboard_detect_axis_gyro_x";

                    onlineManager.addEvent(opcode, (value) => {
                        this.brandishFilterValue[1] = this.brandishFilterValue[1] * filterValue +
                            value * (1 - filterValue);

                        if (!(this.attitudeEventValue[7] || this.attitudeEventValue[8] ||
                                this.attitudeEventValue[9] || this.attitudeEventValue[10])) {

                            if (this.brandishFilterValue[1] > thres_y) {
                                this.attitudeEventValue[7] = false;
                                this.attitudeEventValue[8] = false;
                                this.attitudeEventValue[9] = true;

                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[9] = true;

                            } else if (this.brandishFilterValue[1] < -thres) {
                                this.attitudeEventValue[7] = false;
                                this.attitudeEventValue[8] = false;
                                this.attitudeEventValue[10] = true;
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[10] = true;

                            }
                        } else {
                            if (Math.abs(this.brandishFilterValue[0]) + Math.abs(this.brandishFilterValue[1]) < staticThres) {
                                this.attitudeEventValue[7] = false;
                                this.attitudeEventValue[8] = false;
                                this.attitudeEventValue[9] = false;
                                this.attitudeEventValue[10] = false;
                            }
                        }
                    });

                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_tilt_0";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_1";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_2";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_3";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_6";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_7";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_8";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_axis_acceleration_x";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_axis_acceleration_z";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'haloboard_when_tilt_2': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.tilt == 'arrow_up') {
                        if (this.attitudeEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'arrow_down') {
                        if (this.attitudeEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'tilted_left') {
                        if (this.attitudeEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'tilted_right') {
                        if (this.attitudeEventValue[3]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'rotate_clockwise') {
                        if (this.attitudeEventValue[4]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'rotate_anticlockwise') {
                        if (this.attitudeEventValue[5]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'free_fall') {
                        if (this.attitudeEventValue[6]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_waveleft') {
                        if (this.attitudeEventValue[7]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_waveright') {
                        if (this.attitudeEventValue[8]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_waveup') {
                        if (this.attitudeEventValue[9]) {
                            ret = true;
                        }
                    } else if (args.tilt == 'is_wavedown') {
                        if (this.attitudeEventValue[10]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.attitudeEventValue = [false, false, false, false, false, false, false, false, false, false, false];
                    this.attitudeEventType = [false, false, false, false, false, false, false, false, false, false, false];
                    this.brandishFilterValue = [0, 0];
                    let opcode = "haloboard_detect_tilt_2";
                    let filterValue = 0.2;
                    let thres = 300;
                    let thres_y = 290;
                    let staticThres = 260;

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[0] != value) {
                            this.attitudeEventValue[0] = value;
                            if (this.attitudeEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[0] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_3";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[1] != value) {
                            this.attitudeEventValue[1] = value;
                            if (this.attitudeEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[1] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_0";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[2] != value) {
                            this.attitudeEventValue[2] = value;
                            if (this.attitudeEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[2] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_1";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[3] != value) {
                            this.attitudeEventValue[3] = value;
                            if (this.attitudeEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[3] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_6";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[4] != value) {
                            this.attitudeEventValue[4] = value;
                            if (this.attitudeEventValue[4]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[4] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_7";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[5] != value) {
                            this.attitudeEventValue[5] = value;
                            if (this.attitudeEventValue[5]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[5] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_8";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[6] != value) {
                            this.attitudeEventValue[6] = value;
                            if (this.attitudeEventValue[6]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[6] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_9";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[7] != value) {
                            this.attitudeEventValue[7] = value;
                            if (this.attitudeEventValue[7]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[7] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_tilt_10";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[8] != value) {
                            this.attitudeEventValue[8] = value;
                            if (this.attitudeEventValue[8]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[8] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_11";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[9] != value) {
                            this.attitudeEventValue[9] = value;
                            if (this.attitudeEventValue[9]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[9] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_tilt_12";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.attitudeEventValue[10] != value) {
                            this.attitudeEventValue[10] = value;
                            if (this.attitudeEventValue[10]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[10] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_tilt_0";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_1";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_2";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_3";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_6";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_7";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_8";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_9";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_10";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_11";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_tilt_12";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                }
            },
            'haloboard_when_touched': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (this.tpEventValue[parseInt(args.touchpad_number)]) {
                        ret = true;
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.tpEventValue = [false, false, false, false];
                    this.tpEventType = [false, false, false, false];

                    let opcode = "haloboard_detect_touch_0";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.tpEventValue[0] != value) {
                            this.tpEventValue[0] = value;
                            if (this.tpEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.tpEventType[0] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_touch_1";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.tpEventValue[1] != value) {
                            this.tpEventValue[1] = value;
                            if (this.tpEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.tpEventType[1] = true;
                            }
                        }
                    });


                    opcode = "haloboard_detect_touch_2";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.tpEventValue[2] != value) {
                            this.tpEventValue[2] = value;
                            if (this.tpEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.tpEventType[2] = true;
                            }
                        }
                    });

                    opcode = "haloboard_detect_touch_3";

                    onlineManager.addEvent(opcode, (value) => {
                        if (this.tpEventValue[3] != value) {
                            this.tpEventValue[3] = value;
                            if (this.tpEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.tpEventType[3] = true;
                            }
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_touch_0";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);

                    opcode = "haloboard_detect_touch_1";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);

                    opcode = "haloboard_detect_touch_2";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);

                    opcode = "haloboard_detect_touch_3";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);

                }
            },
            'haloboard_when_greater_than': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    let argVal = parseFloat(args.value);
                    let idVal = systemConstVariables.GT_MAP[block.id];
                    let val = 0;
                    let threshold = 0;

                    if (args.category == 'timer') {
                        val = this.greaterEventValue[0];
                        threshold = 0.05;
                    } else if (args.category == 'microphone') {
                        val = this.greaterEventValue[1];
                        threshold = 0.5
                    }

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
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.greaterEventValue = [0, 0];

                    let opcode = "haloboard_detect_time";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[0] > 0.05) || (value - this.greaterEventValue[0] < -0.05)) {
                            this.greaterEventValue[0] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[0] = value;
                        }
                    });

                    opcode = "haloboard_detect_volume";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[1] > 0.5) || (value - this.greaterEventValue[1] < -0.5)) {
                            this.greaterEventValue[1] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[1] = value;
                        }
                    });

                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_volume";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_time";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);

                }
            },
            'haloboardWhenGreaterThan1CodesLib': (args) => {
                if (args.category == "shaken") {
                    return `from global_objects import event_o
import events.event_manager as event_manager

def greater_than_cover(threshold, mode):
    def decorator(callback):
        if not isinstance(threshold, (int, float)):
            return
        threshold_data = threshold
        if threshold_data < 0:
            threshold_data = 0
        type_str = mode
        if type_str == "microphone":
            event_manager.event_register(event_o.EVENT_MICROPHONE, event_o.TRIGGER_ONCE_BY_VALUE_LARGER, callback, threshold_data)
        elif type_str == "timer":
            event_manager.event_register(event_o.EVE_TIME_OVER, event_o.TRIGGER_ONCE_BY_VALUE_LARGER, callback, threshold_data)
        elif type_str == "shaken":
            mstr_str = "__inter_shaken"
            event_manager.event_register(event_o.EVE_MESSAGE, event_o.TRIGGER_BY_STRING_MATCHING, callback, mstr_str)
    return decorator

event.greater_than = greater_than_cover
__inter_shaken_eve_threshold = ${args.value}`;
                }
            },
            'haloboard_when_greater_than_1': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    let argVal = parseFloat(args.value);
                    let idVal = systemConstVariables.GT_MAP[block.id];
                    let val = 0;
                    let threshold = 0;

                    if (args.category == 'timer') {
                        val = this.greaterEventValue[0];
                        console.log('timer', val);
                        threshold = 0.05;
                    } else if (args.category == 'microphone') {
                        val = this.greaterEventValue[1];
                        console.log('microphone', val);
                        threshold = 0.5
                    } else if (args.category == 'shaken') {
                        val = this.greaterEventValue[2];
                        console.log('shaken', val);
                        threshold = 0.5
                    }

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
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.greaterEventValue = [0, 0, 0];

                    let opcode = "haloboard_detect_time";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[0] > 0.05) || (value - this.greaterEventValue[0] < -0.05)) {
                            this.greaterEventValue[0] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[0] = value;
                        }
                    });

                    opcode = "haloboard_detect_volume";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[1] > 0.5) || (value - this.greaterEventValue[1] < -0.5)) {
                            this.greaterEventValue[1] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[1] = value;
                        }
                    });

                    opcode = "haloboard_detect_shaked_value";

                    onlineManager.addEvent(opcode, (value) => {
                        if ((value - this.greaterEventValue[2] > 0.5) || (value - this.greaterEventValue[2] < -0.5)) {
                            this.greaterEventValue[2] = value;
                            app.workspace.runBlocks(block.opcode);
                        } else {
                            this.greaterEventValue[2] = value;
                        }
                    });
                },
                onRemove: async (app, device, block) => {
                    let opcode = "haloboard_detect_volume";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_time";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
                    opcode = "haloboard_detect_shaked_value";
                    onlineManager.setAutoSubscribeControlFlag(opcode, true);
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
            }
        };
    }

    getInfo() {
        return {
            "id": "haloboard",
            "targets": {
                "device": true,
                "name": "haloboard",
                "icon": window.MbApi.getExtResPath('haloboard/imgs/3e959a4e7db84897b0ecf938483e3e25.png', 'haloboard'),
                "enableCode": true,
                "enableUpload": [
                    "serialport",
                    "ble"
                ],
                "enableOnline": [
                    "serialport",
                    "ble"
                ],
                "shouldConnect": [
                    "serialport"
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
                                    "haloboard.connect_fail_418dd2b0",
                                    "haloboard.connect_fail_be44da45",
                                    "haloboard.connect_fail_81f19800"
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
                                    "haloboard.connect_fail_a2244e18",
                                    "haloboard.connect_fail_2ff4c830",
                                    "haloboard.connect_fail_f516f160"
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
                                "haloboard.upload_fail_440e4ba6",
                                "haloboard.upload_fail_24d8e745",
                                "haloboard.upload_fail_c52d223b"
                            ]
                        },
                        "middlewares": [{
                                "name": "codey"
                            },
                            {
                                "name": "intl",
                                "func": haloboardUploadMiddlewareIntl
                            }
                        ],
                        "driver": {
                            "name": "firefly_upload",
                            "func": haloboardUploadDriverFireflyUpload
                        }
                    },
                    "firmware": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                "haloboard.firmware_success_70e9b6c0"
                            ],
                            "fail": [
                                "haloboard.firmware_fail_9b5aae92",
                                "haloboard.firmware_fail_9a92af14"
                            ]
                        },
                        "driver": {
                            "name": "esptool"
                        }
                    }
                },
                "firmware": [{
                    "id": "9c2fcf2b",
                    "name": "haloboard.firmwares_version_9c2fcf2b",
                    "version": "25.01.009",
                    "isDefault": true,
                    "url": {
                        "name": "firefly_firmware_25_01_009-ht2.bin",
                        "url": window.MbApi.getExtResPath('haloboard/res/8176798e5c29408dbf48a9d88a5dd108.bin', 'haloboard')
                    }
                }],
                "settings": [{
                        "text": "haloboard.UPDATE_FIRMWARE",
                        "handle": this.funcs.firmwareSettingHandle
                    },
                    {
                        "id": "717e2676",
                        "text": "haloboard.settings_717e2676",
                        "handle": this.funcs.settings717E2676Handle
                    }
                ],
                "categoriesOrder": [
                    "E_1783_n",
                    "E_1784_n",
                    "cate_74a71a9d",
                    "Wi-Fi",
                    "mesh",
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
            "version": "1.2.0",
            "platform": [
                "mblockpc",
                "mblockapp",
                "mblockweb"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "excludeBlocks": [
                "event_whenthisspriteclicked",
                "control_create_clone_of",
                "event_whenbackdropswitchesto",
                "control_delete_this_clone",
                "event_whengreaterthan",
                "control_start_as_clone"
            ],
            "generatorStartBlocks": [
                "haloboard_wifi_when_user_broadcast",
                "haloboard_mesh_when_received_message",
                "haloboard_when_launch",
                "haloboard_when_button_pressed",
                "haloboard_when_shaked",
                "haloboard_when_tilt",
                "haloboard_when_tilt_1",
                "haloboard_when_tilt_2",
                "haloboard_when_touched",
                "haloboard_when_greater_than",
                "haloboard_when_greater_than_1"
            ],
            "feature": [],
            "mustLoginBlocks": [
                "haloboard.haloboard_wifi_speech_recognition",
                "haloboard.haloboard_wifi_speech_recognition_v2",
                "haloboard.haloboard_wifi_speech_recognition_word",
                "haloboard.haloboard_wifi_user_broadcast",
                "haloboard.haloboard_wifi_user_broadcast_with_value",
                "haloboard.haloboard_wifi_when_user_broadcast",
                "haloboard.haloboard_wifi_user_broadcast_value",
                "haloboard.BLOCK_1560701681811",
                "haloboard.BLOCK_1560702195139",
                "haloboard.BLOCK_1560702421892"
            ],
            "disabledOffline": [
                "event_whenflagclicked",
                "event_whenkeypressed",
                "data_showvariable",
                "data_hidevariable",
                "data_showlist",
                "data_hidelist"
            ],
            "disabledOnline": [
                "haloboard.haloboard_wifi_set",
                "haloboard.haloboard_wifi_is_connect",
                "haloboard.haloboard_wifi_speech_recognition",
                "haloboard.haloboard_wifi_speech_recognition_v2",
                "haloboard.haloboard_wifi_speech_recognition_word",
                "haloboard.haloboard_wifi_user_broadcast",
                "haloboard.haloboard_wifi_user_broadcast_with_value",
                "haloboard.haloboard_wifi_when_user_broadcast",
                "haloboard.haloboard_wifi_user_broadcast_value",
                "haloboard.BLOCK_1560701681811",
                "haloboard.BLOCK_1560702195139",
                "haloboard.BLOCK_1560702421892",
                "haloboard.BLOCK_1560702536759",
                "haloboard.haloboard_when_launch"
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

export default ExtHaloboard;