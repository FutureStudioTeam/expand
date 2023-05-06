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

const codeyUploadDriverCodeyUpload =
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
const codeyUploadMiddlewareIntl =
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
            let urlRegex = /\{NAVIGATEURL\}/g;
            let tokenRegex = /\{ACCESSTOKEN\}/g;
            let topicRegex = /\{TOPIC\}/g;
            const service = app.getService('account');
            if (service) {
                const user = await service.getUserInfo();
                if (user) {
                    let topic = `/USER/${user.uid}/${CLOUD_MQTT}`;
                    if (user.intl) {
                        topic = `/EU/USER/${user.uid}/${CLOUD_MQTT}`;
                        // code = code.replace(urlRegex, urlConfig(true).speech);
                    } else {
                        // code = code.replace(urlRegex, urlConfig(false).speech);
                    }
                    code = code.replace(topicRegex, topic);
                }
                // const accesstoken = await getAccessToken(service);
                // code = code.replace(tokenRegex, accesstoken);
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

// this variable must be set
let checkFirmwareInForce = true;

// greenFlag 触发时
let greenFlag = false;

// 定义延时函数
function delay(time, fn) {
    return new Promise(resolve => {
        setTimeout(() => {
            typeof fn === 'function' && fn();
            resolve();
        }, time)
    })
}

function Bytes2Str(arr) {
    var str = "";

    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i].toString(16);
        if (tmp.length == 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
}

const formatData = data => {
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

// 生成在线的表情
const matrix2hexStr = strData => {
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

// 定义用户信息变量，会在 handler onLoad 里面赋值
let userInfo = null;
const CLOUD_MQTT = 'MESSAGE';
const getTopic = (service) => {
    let topic = '';
    let uid = '';
    try {
        let user = userInfo;
        if (typeof user === 'string') {
            user = JSON.parse(user);
        }
        if (typeof user === 'object') {
            uid = user.uid;
            if (user.intl) {
                return `/EU/USER/${uid}/${CLOUD_MQTT}`;
            } else {
                return `/USER/${uid}/${CLOUD_MQTT}`;
            }
        }
    } catch (err) {
        console.warn(err);
    }

    return '';
};
/* **********************************************************************/
// 以下代码为嵌入式修改， 互联网修改部分请在在该分割线以上
/* **********************************************************************/
// the firmware version that this mext supports    ---just a temporary solution
const codeyFirmwareVersionSupported = '23.01.014.006'

// for specific blocks
const codeyApiMap = {
    screen_up: 'display_up',
    screen_down: 'display_down',
    upright: 'upright',
    left: 'tilted_left',
    right: 'tilted_right',
    backward: 'ears_up',
    forward: 'ears_down',
    on_sound_over: 'sound_sensor',
    on_time_out: 'timer',
}

// this global value is used to record private datas for every event
let GT_MAP = {};
// event register table
const eventNameTable = {
    start: {
        key: '1',
        value: "start",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    button_a: {
        key: '2',
        value: "button_a.is_pressed",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    button_b: {
        key: '3',
        value: "button_b.is_pressed",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    button_c: {
        key: '4',
        value: "button_c.is_pressed",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    shaked: {
        key: '5',
        value: "motion_sensor.is_shaked",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    tilt_left: {
        key: '6',
        value: "motion_sensor.is_tilted_left",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    tilt_right: {
        key: '7',
        value: "motion_sensor.is_tilted_right",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    ears_up: {
        key: '8',
        value: "motion_sensor.is_ears_up",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    ears_down: {
        key: '9',
        value: "motion_sensor.is_ears_down",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    timer: {
        key: '10',
        value: "get_timer",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    sound_sensor: {
        key: '11',
        value: "sound_sensor.get_loudness",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
    light_sensor: {
        key: '12',
        value: "light_sensor.get_value",
        para: null,
        blockName: undefined,
        sensorValue: undefined,
        callBack: undefined
    },
};

function getVersionBytes() {
    let a = Number(codeyFirmwareVersionSupported[6]);
    let b = Number(codeyFirmwareVersionSupported[7]);
    let c = Number(codeyFirmwareVersionSupported[8]);

    return [a, b, c];
}

const eventRestTime = 2500;
// protocol id definition
const onLineProtocolId = 0x28;
const onLineCommonServiceSend = 0x00;
const onLineCommonServiceRead = 0x01;
const onLineCommonServiceSendSerialNum = 0x00;

const onLineSubscribeProtocolId = 0x29;
const onLineSubscribeReportCmdId = 0x00;

// define some protocol of whole datas
const readySignalProtocolId = 0x08
const checkDeviceModeProtocolId = 0x0d;

const chageToOnlineModeComamnd = [0x0d, 0x00, 0x03];
const chageToOfflineModeComamnd = [0x0d, 0x00, 0x00];
const getCurrentModeComamnd = [0x0d, 0x80];

// this function will create serial num automaticly 
// with a specific algorithm
var onlineProtocolDanamicIndex = 0x0000;

function getOnlineProtocolDanamicIndex() {
    let retArray = [0, 0, 0];
    onlineProtocolDanamicIndex = onlineProtocolDanamicIndex + 1;
    onlineProtocolDanamicIndex = onlineProtocolDanamicIndex & 0xffff;
    retArray[0] = onlineProtocolDanamicIndex;
    retArray[1] = onlineProtocolDanamicIndex & 0xff;
    retArray[2] = (onlineProtocolDanamicIndex >> 8) & 0xff;
    return retArray;
}

// add "" for a string variable
function stringFormat(str) {
    return '"' + str + '"';
}

// if the type of parameter is number, do not add "" for this variable,
// or the type of parameter is string, add "" 
function stringAndNumberFormat(str) {
    if (isNaN(str)) {
        // if (str[0] === '"' && str[str.length - 1] === '"') {
        //     return str;
        // }
        // else {
        str = str.replace(new RegExp(/\\/g), '\\\\');
        str = str.replace(new RegExp(/'/g), '\\\'');
        str = str.replace(new RegExp(/"/g), '\\\"');
        return '\"' + str + '\"';
        // }
    } else {
        return str;
    }
}

// define some function to switch value type
function __charToByte(chr) {
    return chr.charCodeAt(0);
}

function writeUTF(str, isGetBytes) {
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

function __strToArray(str) {
    var result = writeUTF(str, true);
    return result;
}

// fix decimal point number 
function fixDecimalPointNumber(value, bitsNum) {
    return parseFloat(Math.floor(value * 100) / 100).toFixed(bitsNum)
}

// create onlie framne, do not process the string
function createOnlineFrameOfSourceString(service_id, index, scriptString) {
    var frame = [];
    var scriptArray = [];
    var sn = [0, 0];
    var lenArray = [0, 0];

    scriptArray = __strToArray(scriptString);

    sn[0] = index & 0xff;
    sn[1] = (index >> 8) & 0xff;
    lenArray[0] = scriptArray.length & 0xff;
    lenArray[1] = (scriptArray.length >> 8) & 0xff;

    frame = frame.concat([onLineProtocolId, service_id, sn[0], sn[1], lenArray[0], lenArray[1]]); //[id, index, length]
    frame = frame.concat(scriptArray);
    return frame; //[...]
}

// create onlie framne, this function will add some requisite token for
// script, such as ')' and ','
function createOnlineFrame(service_id, index, scriptString, para) {
    var frame = [];
    var scriptArray = [];
    var sn = [0, 0];
    var lenArray = [0, 0];

    sn[0] = index & 0xff;
    sn[1] = (index >> 8) & 0xff;

    // because: para instanceof Array === true
    scriptString = scriptString + '(' + para.join(',') + ')'

    scriptArray = __strToArray(scriptString);

    lenArray[0] = scriptArray.length & 0xff;
    lenArray[1] = (scriptArray.length >> 8) & 0xff;

    frame = frame.concat([onLineProtocolId, service_id, sn[0], sn[1], lenArray[0], lenArray[1]]); // [id, index, length]
    frame = frame.concat(scriptArray);
    return frame;
}

/* functions about mode synchronization mechanism */
let calibrationInFlag = false;

function setCalibrationInFlag(sta) {
    calibrationInFlag = sta;
}
let deviceModeToBe = null;
let deviceModeOnline = 0x01;
let deviceModeOffline = 0x00;

function setDeviceModeToBe(mode) {
    deviceModeToBe = mode;
}

/* wait soft restar successed */
async function waitDeviceModeSwitcSuccessed(device) {
    let ret = false;
    let value = await device.asyncReadProtocol('f3f4', [readySignalProtocolId, 'byte'], 5000);
    console.log("received mode information");
    if (value != null) {
        ret = true;
    }
    return ret;
}

/* get current mode */
async function getDeviceCurrentMode(device, app) {
    await device.asyncWriteProtocol('f3f4', checkDeviceCurrentModeComamnd);
    let value = await device.asyncReadProtocol('f3f4', [checkDeviceModeProtocolId, 'byte', 'byte']);
    if (value === null) {
        return null;
    } else {
        return value[1];
    }
}

/* sync the mode of automaticality */
async function syncDeviceAndMblockMode(device, app) {
    await device.subscribeReadProtocol('f3f4', [checkDeviceModeProtocolId, 'byte', 'byte'], (values) => {
        if (values === null) {
            return null;
        }
        if (calibrationInFlag) {
            console.log("in calibration");
            return;
        }
        /* device is upload mode */
        if (values[1] == 0x00) {
            if (deviceModeToBe == deviceModeOnline) {
                // chang to online mode mode
                setTimeout(async () => {
                    await device.asyncWriteProtocol('f3f4', chageToOnlineModeComamnd);
                }, 200);

                setTimeout(async () => {
                    if (app.workspace.resetEvents) { // restet all events
                        app.workspace.resetEvents();
                    }
                }, 5000);
                console.log("device and mblock mode do not matched, device change to online mode");
            }
        } else /*if (values[1] == 0x01)*/ {
            // chang to upload mode
            if (deviceModeToBe == deviceModeOffline) {
                setTimeout(async () => {
                    device.asyncWriteProtocol('f3f4', chageToOfflineModeComamnd);
                }, 1000);

                console.log("device and mblock mode do not matched, device change to upload mode");
            }
        }
    });

}

/* functions about event */
async function onlineEventStart(device, app) {
    console.log("event start");
    /* resatrt GT_MAP */
    GT_MAP = {};
    await device.subscribeReadProtocol('f3f4', [onLineSubscribeProtocolId, onLineSubscribeReportCmdId, 'bigstring'], (values) => {
        let jsonJS = pythonItemToJavascriptItem(values[0]);
        let jsonObject = JSON.parse(jsonJS);

        for (var k1 in jsonObject) {
            for (var k2 in eventNameTable) {
                if (eventNameTable[k2].key == k1.toString()) {
                    eventNameTable[k2].sensorValue = jsonObject[k1];
                    if (eventNameTable[k2].callback) {
                        eventNameTable[k2].callback(eventNameTable[k2].sensorValue);
                    }
                    break;
                }
            }
        }
    });
}

function onlineEventSetCallback(item, cb) {
    if (!(item in eventNameTable)) {
        return;
    }
    eventNameTable[item].callback = cb;
}

// reset online dictionary in device 
async function resetOnlineEvent(device) {
    delay(50);
    await onLineSendWithoutRespond(device, 'subscribe.restart');
}
// register event for device
async function onLineRegisterEvent(device, item) {
    if (!(item in eventNameTable)) {
        return;
    }
    delay(50);
    let retry_count = 0;
    while (retry_count < 3) {
        let ret = 0;
        if (eventNameTable[item].para != null) {
            ret = await onLineRead(device, 'subscribe.add_item', stringFormat(eventNameTable[item].key), eventNameTable[item].value,
                eventNameTable[item].para);

        } else {
            ret = await onLineRead(device, 'subscribe.add_item', stringFormat(eventNameTable[item].key), eventNameTable[item].value, '()');
        }
        retry_count = retry_count + 1;
        if (ret == null) {
            return;
        }
    }
}
// unregister event for device
async function onLineUnregisterEvent(device, item) {
    if (!(item in eventNameTable)) {
        return;
    }
    // delay(50);
    // await onLineSendWithRespond(device, 'subscribe.del_item', stringFormat(eventNameTable[item].key));

}

// send script directly
// this function will not modify the script
// and the lenth of parameters 
async function onLineSendFixedScript(device, script) {
    if (device.isUploadMode()) {
        return;
    }
    if (arguments.length == 2) {
        await device.asyncWriteProtocol('f3f4',
            createOnlineFrameOfSourceString(onLineCommonServiceSend, onLineCommonServiceSendSerialNum, script)
        );
    } else {
        /* get the serial num */
        let index = getOnlineProtocolDanamicIndex();

        await device.asyncWriteProtocol('f3f4',
            createOnlineFrameOfSourceString(onLineCommonServiceRead, index[0], script)
        );
        let value = await device.asyncReadProtocol('f3f4',
            [onLineProtocolId, onLineCommonServiceRead, index[1], index[2], 'bigstring']
        );
    }
}

// send control command, the device would not send and response
async function onLineSendWithoutRespond(device, script, ...rest) {
    if (device.isUploadMode()) {
        return;
    }
    await device.asyncWriteProtocol('f3f4',
        createOnlineFrame(onLineCommonServiceSend, onLineCommonServiceSendSerialNum, script, rest)
    );
}

// read with default waiting time(3 seconds)
async function onLineRead(device, script, ...rest) {
    if (device.isUploadMode()) {
        return;
    }
    // get the serial num
    let index = getOnlineProtocolDanamicIndex();

    await device.asyncWriteProtocol('f3f4',
        createOnlineFrame(onLineCommonServiceRead, index[0], script, rest)
    );
    // wait the respond, 3 second maxinum
    let value = await device.asyncReadProtocol('f3f4',
        [onLineProtocolId, onLineCommonServiceRead, index[1], index[2], 'bigstring']
    );
    /* add processing codes */
    if (!value) {
        return 0;
    }
    var jsonRet = getReturnFromString(value[0]);
    return jsonRet;
}

// read with max waiting time
async function onLineReadWithTime(device, maxTime, script, ...rest) {
    // get the serial num
    let index = getOnlineProtocolDanamicIndex();

    await device.asyncWriteProtocol('f3f4',
        createOnlineFrame(onLineCommonServiceRead, index[0], script, rest)
    );
    // wait the respond, 3 second maxinum
    let value = await device.asyncReadProtocol('f3f4',
        [onLineProtocolId, onLineCommonServiceRead, index[1], index[2], 'bigstring'],
        maxTime * 1000
    );
    /* add processing codes */
    if (!value) {
        return 0;
    }
    var jsonRet = getReturnFromString(value[0]);
    return jsonRet;
}

// the response item is for python, switch to js types
function pythonItemToJavascriptItem(string) {
    var out_str = '';
    out_str = string.replace(new RegExp(/True/g), 'true');
    out_str = out_str.replace(new RegExp(/False/g), 'false');
    out_str = out_str.replace(new RegExp(/None/g), 'null');
    out_str = out_str.replace(new RegExp(/'/g), '"');
    return out_str;
}
// get item of 'ret' in device response
// the type of value is for python, switch it for js 
function getReturnFromString(jsonString) {
    if (jsonString.indexOf('ret') === -1) {
        return undefined;
    }
    var jsonJS = pythonItemToJavascriptItem(jsonString);
    // string to json object
    var jsonObject = JSON.parse(jsonJS);

    return jsonObject.ret;
}

// get item of 'err' in device response
// the type of value is for python, switch it for js
function getErrFromString(jsonString) {
    if (jsonString.search('err') === -1) {
        return undefined;
    }
    /* add codes to process error here */
    return undefined;
}

let deviceSystemStastus = {
    deviceName: "codey",
    firmwareVersion: "",
    bleName: "",
    isWifiConnected: false,
    currentChannel: "",
    currentMode: "",
    connectModules: [],
    speechResult: "",
    macAddress: ""
};

async function deviceStatucUpdate(device) {
    await onLineReadWithTime(device, 3000, "codey.wifi.__wifi_enable");
    let ret = await onLineReadWithTime(device, 3000, "codey.wifi.__wifi_get_mac", "0");
    // console.log("aaaa", ret, typeof (ret));
    deviceSystemStastus.macAddress = Bytes2Str(ret);

    return deviceSystemStastus;
}

const disableBlocks = {
    debug: ["codey.meos_when_board_launch"],
    upload: ["event_broadcastandwait", "event_whenflagclicked", "event_whenkeypressed", "data_showvariable", "data_hidevariable", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"]
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



class ExtCodey {

    constructor() {
        this.funcs = {
            'firmwareSettingHandle': // ({
                //     handle: (app, device, info) => {
                //         const uploaderUI = app.getService('system.ui.firmware.uploader');
                //         if (uploaderUI) {
                //             uploaderUI.onOK((data) => {
                //                 device.uploadFirmware(data);
                //             })
                //             uploaderUI.onFail((err) => {
                //                 console.error(err);
                //             })
                //             uploaderUI.open(info);
                //         }
                //     },
                //     check: (app, device) => {
                //         return new Promise(async function (resolve) {
                //             setTimeout(async () => {
                //                 var cmd = [0x06];
                //                 var firmVerBytes = '';

                //                 device.asyncWriteProtocol('f3f4', cmd);
                //                 firmVerBytes = await device.asyncReadProtocol('f3f4', [0x06, 0x32, 0x33, 0x2E, 0x30, 0x31, 0x2E, 'byte', 'byte', 'byte', 0x2E, 'byte', 'byte', 'byte']);
                //                 try {
                //                     if (firmVerBytes === null) {
                //                         resolve(false);
                //                         return;
                //                     }
                //                     for (var i = 0; i < 3; i++) {
                //                         firmVerBytes[i] = firmVerBytes[i] - 0x30;
                //                     }
                //                     var supprtVerBytes = getVersionBytes();
                //                     if (supprtVerBytes[0] * 100 + supprtVerBytes[1] * 10 + supprtVerBytes[2] > firmVerBytes[0] * 100 + firmVerBytes[1] * 10 + firmVerBytes[2]) {
                //                         resolve(true);
                //                     } else {
                //                         resolve(false);
                //                     }
                //                 } catch (e) {
                //                     resolve(true);
                //                 }
                //             }, 1800);
                //         });
                //     }
                // })

                ({
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
                                var cmd = [0x06];
                                var firmVerBytes = '';
                                let retObject = {
                                    deviceName: "", // ext id
                                    deviceFirmwareVersion: "", // currentVersion
                                    supportFirmwareVersion: "", // support version
                                    isLatest: true, // whether the latest(supported) version 
                                    code: 1
                                };

                                await device.asyncWriteProtocol('f3f4', cmd);
                                firmVerBytes = await device.asyncReadProtocol('f3f4', [0x06, 0x32, 0x33, 0x2E, 0x30, 0x31, 0x2E, 'byte', 'byte', 'byte', 0x2E, 'byte', 'byte', 'byte']);
                                if (firmVerBytes === null) {
                                    retObject.code = 1;
                                    if (isPC()) {
                                        resolve(false);
                                    } else {
                                        resolve(retObject);
                                    }
                                }

                                let firmVerStr = [0, 0, 0];
                                for (let i = 0; i < 3; i++) {
                                    firmVerStr[i] = String.fromCharCode(firmVerBytes[i]);
                                }
                                let currentVerStr = firmVerStr.join('');

                                let currentVer = firmVerBytes.slice(0, 3);
                                for (let i = 0; i < 3; i++) {
                                    currentVer[i] = currentVer[i] - 0x30;
                                }

                                let supportVer = getVersionBytes();
                                retObject.supportFirmwareVersion = codeyFirmwareVersionSupported.slice(0, 9);
                                retObject.deviceName = "codey";
                                retObject.deviceFirmwareVersion = "23.01." + currentVerStr;

                                // for status check
                                deviceSystemStastus.firmwareVersion = retObject.deviceFirmwareVersion;

                                console.log(currentVer, supportVer, retObject.supportFirmwareVersion);

                                try {
                                    if (currentVer < supportVer) {
                                        retObject.code = 0;
                                        retObject.isLatest = false;
                                    } else {
                                        retObject.code = 0;
                                        retObject.isLatest = true;
                                    }
                                    console.log(retObject);
                                    if (isPC()) {
                                        resolve(!retObject.isLatest);
                                    } else {
                                        resolve(retObject);
                                    }

                                } catch (e) {
                                    if (isPC()) {
                                        resolve(false);
                                    }
                                    resolve(retObject);
                                }
                            }, 1800);
                        });
                    }
                }),
            'settings0Handle': async (app, device) => {
                const service = app.getService('system.ui');
                const dialog = await service.dialog('color', {
                    title: 'CALIBRATE.COLOR.TITLE',
                    width: '480px',
                    fields: [{
                            id: 'step1',
                            label: 'CALIBRATE_COLOR_DESCRIPTION[0]',
                            type: 'image',
                            value: 'static/imgs/color1.svg',
                            layout: {
                                span: 12
                            }
                        },
                        {
                            id: 'step2',
                            label: 'CALIBRATE_COLOR_DESCRIPTION[1]',
                            type: 'image',
                            value: 'static/imgs/color2.svg',
                            info: {
                                text: 'CALIBRATE_COLOR_DESCRIPTION[3]',
                                style: {
                                    color: '#faad14'
                                }
                            },
                            layout: {
                                span: 12
                            }
                        },
                        {
                            id: 'step3',
                            label: 'CALIBRATE_COLOR_DESCRIPTION[2]'
                        }
                    ],
                    buttons: [{
                        id: 'colorCalibrate',
                        text: 'CALIBRATE.BUTTON.TEXT',
                        loadingText: 'CALIBRATE.BUTTON.TEXT.LOADING',
                        handle: async (ctx) => {
                            setCalibrationInFlag(true);
                            const res = await engine.correctColor();
                            setCalibrationInFlag(false);
                            if (!res.err) {
                                service.message('CALIBRATE.MSG.SUCCESS', 'success');
                                dialog.close();
                            } else {
                                service.message('CALIBRATE.MSG.FAIL', 'error');
                            }
                            setTimeout(() => {
                                app.workspace.resetEvents();
                            }, 2500)
                        }
                    }]
                });
            },
            'settings1Handle': async (app, device) => {
                const service = app.getService('system.ui');
                const dialog = await service.dialog('tuoluoyi', {
                    title: 'CALIBRATE.GYRO.TITLE',
                    width: '360px',
                    fields: [{
                            id: 'step1',
                            label: 'CALIBRATE_GYRO_DESCRIPTION[0]',
                            type: 'image',
                            value: 'static/imgs/gyro.svg'
                        },
                        {
                            id: 'step2',
                            label: 'CALIBRATE_GYRO_DESCRIPTION[1]'
                        }
                    ],
                    buttons: [{
                        id: 'gyroCalibrate',
                        text: 'CALIBRATE.BUTTON.TEXT',
                        loadingText: 'CALIBRATE.BUTTON.TEXT.LOADING',
                        handle: async (ctx) => {
                            setCalibrationInFlag(true);
                            const res = await engine.correctGyro();
                            setCalibrationInFlag(false);
                            if (!res.err) {
                                service.message('CALIBRATE.MSG.SUCCESS', 'success');
                                dialog.close();
                            } else {
                                service.message('CALIBRATE.MSG.FAIL', 'error');
                            }
                            setTimeout(() => {
                                app.workspace.resetEvents();
                            }, 2500)
                        }
                    }]
                });
            },
            'settings54Fdf115Handle': async (app, device, block) => {
                const service = app.getService('system.ui');

                setCalibrationInFlag(true);
                if (device.isUploadMode()) {
                    await device.asyncWriteProtocol('f3f4', chageToOnlineModeComamnd);
                    await delay(2000);
                    await deviceStatucUpdate(device);
                    await device.asyncWriteProtocol('f3f4', chageToOfflineModeComamnd);
                    setCalibrationInFlag(false);
                } else {
                    await deviceStatucUpdate(device);
                    setCalibrationInFlag(false);
                }

                const titleContent = "codey.status_device_state";
                const labelContent = ["codey.status_firmware_versions", "codey.status_mac_address", "codey.status_page_close"];


                const dialog = await service.dialog('deviceStatuc', {
                    title: titleContent,
                    width: '240px',
                    loadingText: 'CALIBRATE.BUTTON.TEXT.LOADING',
                    fields: [{
                            label: labelContent[0],
                            type: "text",
                            value: deviceSystemStastus.firmwareVersion
                        },
                        {
                            label: labelContent[1],
                            type: "text",
                            value: deviceSystemStastus.macAddress
                        },
                    ],
                    buttons: [{
                        id: 'deviceStatusCheckClose',
                        text: labelContent[2],
                        handle: async (ctx) => {
                            setTimeout(() => {
                                dialog.close();
                            }, 100)
                        }
                    }]
                });
            },
            'codey_emotion_look_up': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.look_up")
                }
            },
            'codey_emotion_look_down': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.look_down")
                }
            },
            'codey_emotion_look_left': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.look_left")
                }
            },
            'codey_emotion_look_right': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.look_right")
                }
            },
            'codey_emotion_look_around': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.look_around")
                }
            },
            'codey_emotion_wink': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.blink")
                }
            },
            'codey_emotion_smile': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.smile")
                }
            },
            'codey_emotion_yeah': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.yeah")
                }
            },
            'codey_emotion_naughty': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.naughty");
                }
            },
            'codey_emotion_proud': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.proud");
                }
            },
            'codey_emotion_coquetry': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.yummy");
                }
            },
            'codey_emotion_awkward': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.uh_oh");
                }
            },
            'codey_emotion_exclaim': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.wow");
                }
            },
            'codey_emotion_aggrieved': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.hurt");
                }
            },
            'codey_emotion_sad': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.sad");
                }
            },
            'codey_emotion_angry': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.angry");
                }
            },
            'codey_emotion_greeting': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.hello");
                }
            },
            'codey_emotion_sprint': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.sprint");
                }
            },
            'codey_emotion_startle': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.startle");
                }
            },
            'codey_emotion_shiver': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.shiver");
                }
            },
            'codey_emotion_dizzy': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.dizzy");
                }
            },
            'codey_emotion_sleepy': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.sleepy");
                }
            },
            'codey_emotion_sleeping': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.zzz");
                }
            },
            'codey_emotion_revive': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.wake_up");
                }
            },
            'codey_emotion_agree': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.yes");
                }
            },
            'codey_emotion_deny': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30000, "emotion.no");
                }
            },
            'meosShowLedMatrixFaceWithTimeCodesCode': ({
                PANEL = '',
                TIME = 1
            }) => {
                return `codey.display.show_image(${stringFormat(matrix2hexStr(PANEL))}, time_s=${TIME})`;
            },
            'meos_show_led_matrix_face_with_time': {
                onRun: async (args, app, device, block) => {
                    let matrixData = matrix2hexStr(args.PANEL); // Array
                    let time = Number(args.TIME);
                    if (!time || time <= 0) return;
                    await onLineSendWithoutRespond(device, 'codey.display.show_image', stringFormat(matrixData));
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'codey.display.clear')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meosShowLedMatrixFaceCodesCode': ({
                PANEL = ''
            }) => {
                return `codey.display.show_image(${stringFormat(matrix2hexStr(PANEL))})`;
            },
            'meos_show_led_matrix_face': {
                onRun: async (args, app, device, block) => {
                    let matrixData = matrix2hexStr(args.PANEL); // Array
                    await onLineSendWithoutRespond(device, 'codey.display.show_image', stringFormat(matrixData));
                }
            },
            'meosShowLedMatrixFacePositionCodesCode': (args) => {
                return `codey.display.show_image(${stringFormat(matrix2hexStr(args['PANEL']))}, ${args['AXIS-X']}, ${args['AXIS-Y']})`;
            },
            'meos_show_led_matrix_face_position': {
                onRun: async (args, app, device, block) => {
                    let matrixData = matrix2hexStr(args.PANEL); // Array
                    await onLineSendWithoutRespond(device, 'codey.display.show_image', stringFormat(matrixData), args['AXIS-X'], args['AXIS-Y']);
                }
            },
            'meos_show_led_matrix_turn_off': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.display.clear');
                }
            },
            'meos_show_led_matrix': {
                onRun: async (args, app, device, block) => {
                    if (args.STRING === NaN) {
                        return;
                    }
                    let str = '';
                    if (args.STRING === false) {
                        str = 'False';
                    } else if (args.STRING === true) {
                        str = 'True';
                    } else if (args.STRING === null) {
                        str = 'None';
                    } else if (args.STRING === '' || args.STRING === "") {
                        str = '""';
                    } else {
                        str = stringAndNumberFormat(args.STRING);
                    }
                    await onLineRead(device, 'codey.display.show', str, 'wait=False');
                }
            },
            'meos_show_led_matrix_string': {
                onRun: async (args, app, device, block) => {
                    if (args.STRING === NaN) {
                        return;
                    }

                    let str = '';
                    if (args.STRING === false) {
                        str = 'False';
                    } else if (args.STRING === true) {
                        str = 'True';
                    } else if (args.STRING === null) {
                        str = 'None';
                    } else if (args.STRING === '' || args.STRING === "") {
                        str = '""';
                    } else {
                        str = stringAndNumberFormat(args.STRING);
                    }
                    let maxWaitTime = 30; // s
                    await onLineReadWithTime(device, maxWaitTime, 'codey.display.show', str);
                }
            },
            'meos_show_led_matrix_string_position': {
                onRun: async (args, app, device, block) => {
                    let str = '';
                    if (args.STRING === false) {
                        str = 'False';
                    } else if (args.STRING === true) {
                        str = 'True';
                    } else if (args.STRING === null) {
                        str = 'None';
                    } else if (args.STRING === '' || args.STRING === "") {
                        str = '""';
                    } else {
                        str = stringAndNumberFormat(args.STRING);
                    }

                    await onLineSendWithoutRespond(device, 'codey.display.show', str, args.X, args.Y);
                }
            },
            'meos_show_led_matrix_position': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.display.set_pixel', args.X, args.Y, 1);
                }
            },
            'meos_light_off_led_matrix_position': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.display.set_pixel', args.X, args.Y, 0);
                }
            },
            'meos_toggle_led_matrix_position': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.display.toggle_pixel', args.X, args.Y);
                }
            },
            'meos_event_led_matrix_position_is_light': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let value = await onLineRead(device, 'codey.display.get_pixel', args.X, args.Y);
                    return !!value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
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
            'meosShowLedWithTimeCodesCode': (args) => {
                let color = args.COLOR;
                let time = args.TIME;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `codey.led.show(${r}, ${g}, ${b}, ${time})`
            },
            'meos_show_led_with_time': {
                onRun: async (args, app, device, block) => {
                    let color = args.COLOR;
                    let time = Number(args.TIME);
                    if (!time || time <= 0) return;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    await onLineSendWithoutRespond(device, 'codey.led.show', r, g, b);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'codey.led.show', 0, 0, 0)
                    });
                    return delay(50, () => {
                        ;
                    });
                }
            },
            'meosShowLedCodesCode': (args) => {
                let color = args.COLOR;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `codey.led.show(${r}, ${g}, ${b})`;
            },
            'meos_show_led': {
                onRun: async (args, app, device, block) => {
                    let color = args.COLOR;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    await onLineSendWithoutRespond(device, 'codey.led.show', r, g, b);
                }
            },
            'meos_show_led_rgb': {
                onRun: async (args, app, device, block) => {
                    // if(args.RGB === 'red'){
                    //   await onLineSendWithoutRespond(device, 'codey.led.set_red', args.VALUE);
                    // }
                    // else if(args.RGB === 'green'){
                    //   await onLineSendWithoutRespond(device, 'codey.led.set_green', args.VALUE);
                    // }
                    // else if(args.RGB === 'blue'){
                    //   await onLineSendWithoutRespond(device, 'codey.led.set_blue', args.VALUE);
                    // }
                    if (['red', 'green', 'blue'].includes(args.RGB)) {
                        await onLineSendWithoutRespond(device, 'codey.led.set_' + args.RGB, args.VALUE);
                    }
                }
            },
            'meos_turn_off_led': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.led.off');
                }
            },
            'meos_rocky_show_led_color': {
                onRun: async (args, app, device, block) => {
                    // 兼容旧项目，参数自带了'，这里去除
                    let color = args.COLORLIST.replace(/'/g, '');
                    await onLineSendWithoutRespond(device, 'rocky.color_ir_sensor.set_led_color', stringFormat(color));
                }
            },
            'meos_rocky_turn_off_led_color': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'rocky.color_ir_sensor.set_led_color', '"black"');
                }
            },
            'meos_show_play_sound': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.speaker.play_melody', stringFormat(args.SOUNDLIST));
                    return await delay(50);
                }
            },
            'meos_show_play_sound_wait': {
                onRun: async (args, app, device, block) => {
                    await onLineRead(device, 'codey.speaker.play_melody_until_done', stringFormat(args.SOUNDLIST));
                }
            },
            'meos_show_stop_allsound': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.speaker.stop_sounds');
                }
            },
            'meos_show_play_note_with_string': {
                onRun: async (args, app, device, block) => {
                    let soundnote_str = stringAndNumberFormat(args.SOUNDNOTE);
                    let time = Number(args.SOUNDBEAT);
                    if (!time || time <= 0) return;
                    await onLineSendWithoutRespond(device, 'codey.speaker.play_note', soundnote_str);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'codey.speaker.stop_sounds')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meosShowPauseNoteCodesCode': (args) => {
                    let time = args.TIME;
                    return `codey.speaker.rest(${time < 0 ? 0 : time})`
                }

                ,
            'meos_show_pause_note': {
                onRun: async (args, app, device, block) => {
                    // await onLineSendWithRespond(device, 'codey.speaker.rest', args.TIME);
                    let time = Number(args.TIME);
                    if (!time || time <= 0) return;
                    return await delay(time * 1000);
                }
            },
            'meos_show_play_hz': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    if (!time || time <= 0) return;
                    await onLineSendWithoutRespond(device, 'codey.speaker.play_tone', args.HZ);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'codey.speaker.stop_sounds')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meos_show_change_volume': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.speaker.change_volume', args.VOLUME);
                }
            },
            'meos_show_set_volume': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.speaker.set_volume', args.VOLUME);
                }
            },
            'meos_detect_sound_volume': {
                onRun: async (args, app, device, block) => {
                    return await onLineRead(device, 'codey.speaker.get_volume');
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_move_forward_with_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    let power = Number(args.POWER); //和上面的 speed 换算不同?
                    if (!time || time < 0) return;
                    await onLineSendWithoutRespond(device, 'rocky.forward', power);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'rocky.stop')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meos_move_backward_with_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    let power = Number(args.POWER); //和上面的 speed 换算不同?
                    if (!time || time < 0) return;
                    await onLineSendWithoutRespond(device, 'rocky.backward', power);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'rocky.stop')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meos_move_left_with_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    let power = Number(args.POWER);
                    if (!time || time < 0) return;
                    await onLineSendWithoutRespond(device, 'rocky.turn_left', power);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'rocky.stop')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meos_move_right_with_time': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    let power = Number(args.POWER); //和上面的 speed 换算不同?
                    if (!time || time < 0) return;
                    await onLineSendWithoutRespond(device, 'rocky.turn_right', power);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'rocky.stop')
                    });
                    return await delay(50, () => {
                        ;
                    });

                }
            },
            'meos_rocky_keep_absolute_forward': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    let power = Number(args.POWER);
                    if (!time || time < 0) return;

                    let str = 'rocky.forward(' + power + ',straight = True)';
                    await onLineSendFixedScript(device, str);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'rocky.stop')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meos_rocky_keep_absolute_backward': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.TIME);
                    let power = Number(args.POWER);
                    if (!time || time < 0) return;

                    let str = 'rocky.backward(' + power + ',straight = True)';
                    await onLineSendFixedScript(device, str);
                    await delay(time * 1000, () => {
                        onLineSendWithoutRespond(device, 'rocky.stop')
                    });
                    return await delay(50, () => {
                        ;
                    });
                }
            },
            'meos_move_left_with_angle': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30, 'rocky.turn_left_by_degree', args.ANGLE);
                }
            },
            'meos_move_right_with_angle': {
                onRun: async (args, app, device, block) => {
                    await onLineReadWithTime(device, 30, 'rocky.turn_right_by_degree', args.ANGLE);
                }
            },
            'meos_move': {
                onRun: async (args, app, device, block) => {
                    let power = Number(args.POWER);
                    let moveCommand = 'rocky.' + args.DIRECTION;
                    await onLineSendWithoutRespond(device, moveCommand, power);
                }
            },
            'meos_move_with_motors': {
                onRun: async (args, app, device, block) => {
                    let left_power = Number(args.LEFT_POWER);
                    let right_power = Number(args.RIGHT_POWER);
                    await onLineSendWithoutRespond(device, 'rocky.drive', left_power, right_power);
                }
            },
            'meos_move_stop': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'rocky.stop');
                }
            },
            'meos_rocky_keep_absolute_run': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'meos_event_button_pressed': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    var commadString = 'codey.button_' + args.BUTTONS + '.is_pressed';
                    var value = await onLineRead(device, commadString);
                    return !!value
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_event_connect_rocky': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    var value = await onLineRead(device, 'codey.is_rocky_connected');
                    return !!value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_potentiometer': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.potentiometer.get_value');
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_volume': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    let value = await onLineRead(device, 'codey.sound_sensor.get_loudness');
                    return fixDecimalPointNumber(value, 1);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_lightness': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    let value = await onLineRead(device, 'codey.light_sensor.get_value');
                    return fixDecimalPointNumber(value, 1);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_dump_energy': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.battery.get_percentage')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_event_is_shaked': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let value = await onLineRead(device, 'codey.motion_sensor.is_shaked');
                    return !!value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_shaked_strength': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.motion_sensor.get_shake_strength')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meosEventIsTiltCodesCode': (args) => {
                return `codey.motion_sensor.is_${codeyApiMap[args.DIRECTION]}()`;
            },
            'meos_event_is_tilt': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    var commadString = 'codey.motion_sensor.is_' + codeyApiMap[args.DIRECTION] || args.DIRECTION;
                    var value = await onLineRead(device, commadString);
                    return !!value
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meosEventIsOrientateToCodesCode': (args) => {
                return `codey.motion_sensor.is_${codeyApiMap[args.ORIENTATE]}()`;
            },
            'meos_event_is_orientate_to': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    var commadString = 'codey.motion_sensor.is_' + codeyApiMap[args.ORIENTATE] || args.ORIENTATE; // screen_up, screen_down
                    var value = await onLineRead(device, commadString);
                    return !!value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_gyro_roll_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.motion_sensor.get_roll')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_gyro_pitch_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.motion_sensor.get_pitch')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_rotatex_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.motion_sensor.get_rotation', '"x"')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_rotatey_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.motion_sensor.get_rotation', '"y"')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_rotatez_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'codey.motion_sensor.get_rotation', '"z"')
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_reset_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    await onLineSendWithoutRespond(device, 'codey.motion_sensor.reset_rotation', stringFormat(args.AXIS))
                }
            },
            'meos_detect_time': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    let value = await onLineRead(device, 'codey.get_timer');
                    return fixDecimalPointNumber(value, 1);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_show_reset_time': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.reset_timer');
                }
            },
            'meos_rocky_event_obstacles_ahead': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    var value = await onLineRead(device, 'rocky.color_ir_sensor.is_obstacle_ahead');
                    return !!value
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_event_is_color': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let color = args.COLOR.replace(/'/g, ''); // 旧项目自带了 \' 号，正好无需处理
                    let value = await onLineRead(device, 'rocky.color_ir_sensor.is_color', stringFormat(color));
                    return !!value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_rocky_detect_rgb': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    var commadString = 'rocky.color_ir_sensor.get_' + args.RGB;
                    return await onLineRead(device, commadString)
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_rocky_detect_lightness': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'rocky.color_ir_sensor.get_light_strength');
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_rocky_detect_reflection': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'rocky.color_ir_sensor.get_reflected_light');
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_rocky_detect_ir_reflection': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'rocky.color_ir_sensor.get_reflected_infrared');
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_rocky_detect_grey': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await onLineRead(device, 'rocky.color_ir_sensor.get_greyness');
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_rotate_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return await Math.round(onLineRead(device, 'codey.meos_detect_rotate_angle_' + args.AXIS));
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_detect_gyro_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    // 精确度 1，四舍五入
                    return await Math.round(onLineRead(device, 'codey.meos_detect_gyro_angle_' + args.AXIS));
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_comm_send_ir': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.ir.send', stringFormat(args.STRING));
                }
            },
            'meos_comm_receive_ir': {
                onRun: async (args, app, device, block) => {
                    let value = await onLineRead(device, 'codey.ir.receive');
                    if (!value) {
                        return '';
                    }
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'meos_comm_learn_with_time': {
                onRun: async (args, app, device, block) => {
                    /* 改为异步操作 */
                    await onLineSendWithoutRespond(device, 'codey.ir.start_learning');
                    return await delay(3000, () => {
                        onLineSendWithoutRespond(device, 'codey.ir.stop_learning');
                        onLineSendWithoutRespond(device, 'codey.ir.save_learned_result');
                    });
                }
            },
            'meos_comm_send_learn_result': {
                onRun: async (args, app, device, block) => {
                    await onLineSendWithoutRespond(device, 'codey.ir.send_learned_result');
                }
            },
            'meos_when_board_launch': {
                onRun: (args, app, device, block) => {
                    return true;
                },
                onAdd: (app, device, block) => {},
                onRemove: (app, device, block) => {

                }
            },
            'meos_when_button_press': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.BUTTONS.toLowerCase() == 'a') {
                        if (this.buttonEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.BUTTONS.toLowerCase() == 'b') {
                        if (this.buttonEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.BUTTONS.toLowerCase() == 'c') {
                        if (this.buttonEventValue[2]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.buttonEventValue = [false, false, false];
                    onlineEventSetCallback('button_a', (value) => {
                        this.buttonEventValue[0] = value;
                        if (this.buttonEventValue[0]) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });
                    await onLineRegisterEvent(device, 'button_a');

                    onlineEventSetCallback('button_b', (value) => {
                        this.buttonEventValue[1] = value;
                        if (this.buttonEventValue[1]) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });
                    await onLineRegisterEvent(device, 'button_b');

                    onlineEventSetCallback('button_c', (value) => {
                        this.buttonEventValue[2] = value;
                        if (this.buttonEventValue[2]) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });
                    await onLineRegisterEvent(device, 'button_c');
                },
                onRemove: async (app, device, block) => {
                    await onLineUnregisterEvent(device, 'button_a');
                    await onLineUnregisterEvent(device, 'button_b');
                    await onLineUnregisterEvent(device, 'button_c');
                }
            },
            'meos_when_board_shake': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (this.shakedEventValue) {
                        ret = true;
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    onlineEventSetCallback('shaked', (value) => {
                        this.shakedEventValue = value;
                        if (this.shakedEventValue) {
                            app.workspace.runBlocks(block.opcode);
                        }
                    });
                    await onLineRegisterEvent(device, 'shaked');
                },
                onRemove: async (app, device, block) => {
                    await onLineUnregisterEvent(device, 'shaked');
                }
            },
            'meos_when_board_tilt': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.DIRECTION == 'backward') {
                        if (this.attitudeEventValue[0]) {
                            ret = true;
                        }
                    } else if (args.DIRECTION == 'forward') {
                        if (this.attitudeEventValue[1]) {
                            ret = true;
                        }
                    } else if (args.DIRECTION == 'left') {
                        if (this.attitudeEventValue[2]) {
                            ret = true;
                        }
                    } else if (args.DIRECTION == 'right') {
                        if (this.attitudeEventValue[3]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.attitudeEventValue = [false, false, false, false];
                    this.attitudeEventType = [false, false, false, false];
                    onlineEventSetCallback('ears_up', (value) => {
                        if (this.attitudeEventValue[0] != value) {
                            this.attitudeEventValue[0] = value;
                            if (this.attitudeEventValue[0]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[0] = true;
                            }
                        }
                    });
                    await onLineRegisterEvent(device, 'ears_up');

                    onlineEventSetCallback('ears_down', (value) => {
                        if (this.attitudeEventValue[1] != value) {
                            this.attitudeEventValue[1] = value;
                            if (this.attitudeEventValue[1]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[1] = true;
                            }
                        }
                    });
                    await onLineRegisterEvent(device, 'ears_down');

                    onlineEventSetCallback('tilt_left', (value) => {
                        if (this.attitudeEventValue[2] != value) {
                            this.attitudeEventValue[2] = value;
                            if (this.attitudeEventValue[2]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[2] = true;
                            }
                        }
                    });
                    await onLineRegisterEvent(device, 'tilt_left');

                    onlineEventSetCallback('tilt_right', (value) => {
                        if (this.attitudeEventValue[3] != value) {
                            this.attitudeEventValue[3] = value;
                            if (this.attitudeEventValue[3]) {
                                app.workspace.runBlocks(block.opcode);
                                this.attitudeEventType[3] = true;
                            }
                        }
                    });
                    await onLineRegisterEvent(device, 'tilt_right');
                },
                onRemove: async (app, device, block) => {
                    await onLineUnregisterEvent(device, 'ears_up');
                    await onLineUnregisterEvent(device, 'ears_down');
                    await onLineUnregisterEvent(device, 'tilt_left');
                    await onLineUnregisterEvent(device, 'tilt_right');
                }
            },
            'meos_when_volume_over': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    let argVal = parseFloat(args.SOUNDVOLUME);
                    let idVal = GT_MAP[block.id];
                    let val = 0;
                    let threshold = 0;

                    if (args.MENU_LIST == 'on_time_out') {
                        val = this.greaterEventValue[0];
                        threshold = this.greaterEventThreshold[0];
                    } else if (args.MENU_LIST == 'on_sound_over') {
                        val = this.greaterEventValue[1];
                        threshold = this.greaterEventThreshold[1];
                    }

                    if (typeof(idVal) == 'number') {
                        if (argVal - val > threshold) {
                            GT_MAP[block.id] = undefined;
                            ret = false;
                        } else {
                            ret = false;
                        }
                    } else if (val - argVal > threshold) {
                        GT_MAP[block.id] = argVal
                        ret = true;
                    } else {
                        ret = false;
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.greaterEventValue = [0, 0];
                    this.greaterEventThreshold = [0.1, 0.8];

                    await onlineEventSetCallback('timer', (value) => {
                        if ((value - this.greaterEventValue[0] > this.greaterEventThreshold[0]) ||
                            (value - this.greaterEventValue[0] < -1 * this.greaterEventThreshold[0])) {
                            app.workspace.runBlocks(block.opcode);
                        }
                        this.greaterEventValue[0] = value;
                    });
                    await onLineRegisterEvent(device, 'timer');

                    onlineEventSetCallback('sound_sensor', (value) => {
                        if ((value - this.greaterEventValue[1] > this.greaterEventThreshold[1]) ||
                            (value - this.greaterEventValue[1] < -1 * this.greaterEventThreshold[1])) {
                            delay(200, () => {
                                app.workspace.runBlocks(block.opcode);
                            })
                        }
                        this.greaterEventValue[1] = value;
                    });
                    await onLineRegisterEvent(device, 'sound_sensor');
                },
                onRemove: async (app, device, block) => {
                    await onLineUnregisterEvent(device, 'timer');
                    await onLineUnregisterEvent(device, 'sound_sensor');
                }
            },
            'meos_when_brightness_less': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    let argVal = parseFloat(args.BRIGHTNESS);
                    let idVal = GT_MAP[block.id];
                    let val = this.lesserEventValue;
                    let threshold = 0; // this.lesserEventThreshold;

                    if (typeof(idVal) == 'number') {
                        if (val - argVal > threshold) {
                            GT_MAP[block.id] = undefined;
                            ret = false;
                        } else {
                            ret = false;
                        }
                    } else if (argVal - val > threshold) {
                        GT_MAP[block.id] = argVal
                        ret = true;
                    } else {
                        ret = false;
                    }
                    return ret;
                },
                onAdd: async (app, device, block) => {
                    this.lesserEventValue = 0;
                    this.lesserEventThreshold = 1;
                    onlineEventSetCallback('light_sensor', (value) => {
                        if ((value - this.lesserEventValue > this.lesserEventThreshold) ||
                            (value - this.lesserEventValue < -1 * this.lesserEventThreshold) ||
                            (value < 0.01)) {
                            delay(200, () => {
                                app.workspace.runBlocks(block.opcode);
                            })
                        }
                        this.lesserEventValue = value;
                    });
                    await onLineRegisterEvent(device, 'light_sensor');
                },
                onRemove: async (app, device, block) => {
                    await onLineUnregisterEvent(device, 'light_sensor');
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
                        code = 'math.sin(' + arg + ' / 180.0 * math.pi)';
                        break;
                    case 'cos':
                        code = 'math.cos(' + arg + ' / 180.0 * math.pi)';
                        break;
                    case 'tan':
                        code = 'math.tan(' + arg + ' / 180.0 * math.pi)';
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
                        code = '(math.asin(' + arg + ') / math.pi * 180.0)';
                        break;
                    case 'acos':
                        code = '(math.acos(' + arg + ') / math.pi * 180.0)';
                        break;
                    case 'atan':
                        code = '(math.atan(' + arg + ') / math.pi * 180.0)';
                        break;
                };
                return code
            }
        };
    }

    getInfo() {
        return {
            "id": "codey",
            "targets": {
                "device": true,
                "name": "codey",
                "icon": window.MbApi.getExtResPath('codey/imgs/933fd76379c74b918ec6ec04606fc81d.png', 'codey'),
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
                    "serialport",
                    "ble"
                ],
                "defaultOnline": false,
                "options": {
                    "connect": {
                        "serialport": {
                            "helpLink": "http://docs.makeblock.com/codeyrocky/zh/faq/faq.html",
                            "tips": {
                                "success": [
                                    ""
                                ],
                                "fail": [
                                    "codey.connect_fail_dc0edd70",
                                    "codey.connect_fail_ac025070",
                                    "codey.connect_fail_3a075878"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        },
                        "ble": {
                            "helpLink": "http://docs.makeblock.com/codeyrocky/zh/faq/faq.html",
                            "tips": {
                                "success": [
                                    ""
                                ],
                                "fail": [
                                    "codey.connect_fail_12b07c7c",
                                    "codey.connect_fail_ccd91361",
                                    "codey.connect_fail_1e4caec6"
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
                        "helpLink": "http://docs.makeblock.com/codeyrocky/zh/faq/faq.html",
                        "tips": {
                            "success": [
                                ""
                            ],
                            "fail": [
                                "codey.upload_fail_d5fa5444",
                                "codey.upload_fail_ae3a4ed5",
                                "codey.upload_fail_d36df56a"
                            ]
                        },
                        "middlewares": [{
                                "name": "codey"
                            },
                            {
                                "name": "intl",
                                "func": codeyUploadMiddlewareIntl
                            }
                        ],
                        "driver": {
                            "name": "codey_upload",
                            "func": codeyUploadDriverCodeyUpload
                        }
                    },
                    "firmware": {
                        "helpLink": "http://docs.makeblock.com/codeyrocky/zh/faq/faq.html",
                        "tips": {
                            "success": [
                                "codey.firmware_success_c205609a"
                            ],
                            "fail": [
                                "codey.firmware_fail_34b7a344",
                                "codey.firmware_fail_340c3de8"
                            ]
                        },
                        "driver": {
                            "name": "esptool",
                            "params": {
                                "driverName": "esptoolByExec"
                            }
                        }
                    }
                },
                "firmware": [{
                    "id": "0",
                    "name": "codey.firmwares_version_0",
                    "version": "23.01.014",
                    "isDefault": false,
                    "url": {
                        "name": "CR_codey_firmware_23_01_014_006_ht1.bin",
                        "url": window.MbApi.getExtResPath('codey/res/2469e776436b4e95a7fbf6856fd3d78a.bin', 'codey')
                    }
                }],
                "settings": [{
                        "text": "codey.UPDATE_FIRMWARE",
                        "handle": this.funcs.firmwareSettingHandle
                    },
                    {
                        "id": "0",
                        "text": "codey.settings_0",
                        "handle": this.funcs.settings0Handle
                    },
                    {
                        "id": "1",
                        "text": "codey.settings_1",
                        "handle": this.funcs.settings1Handle
                    },
                    {
                        "id": "54fdf115",
                        "text": "codey.settings_54fdf115",
                        "handle": this.funcs.settings54Fdf115Handle
                    }
                ],
                "categoriesOrder": [
                    "CATEGORY_EMOTION",
                    "CATEGORY_SHOW",
                    "CATEGORY_LIGHT",
                    "CATEGORY_PLAY",
                    "CATEGORY_ACTION",
                    "CATEGORY_SENSOR",
                    "CATEGORY_COMM",
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
            "version": "0.4.3",
            "platform": [
                "mblockpc",
                "mblockweb",
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
                "meos_when_board_launch",
                "meos_when_button_press",
                "meos_when_board_shake",
                "meos_when_board_tilt",
                "meos_when_volume_over",
                "meos_when_brightness_less",
                "event_broadcastandwait"
            ],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [
                "event_broadcastandwait",
                "event_whenflagclicked",
                "event_whenkeypressed",
                "data_showvariable",
                "data_hidevariable",
                "data_listcontents",
                "data_addtolist",
                "data_deleteoflist",
                "data_deletealloflist",
                "data_insertatlist",
                "data_replaceitemoflist",
                "data_itemoflist",
                "data_itemnumoflist",
                "data_lengthoflist",
                "data_listcontainsitem",
                "data_showlist",
                "data_hidelist"
            ],
            "disabledOnline": [
                "codey.meos_when_board_launch"
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

export default ExtCodey;