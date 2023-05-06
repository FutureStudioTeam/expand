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

import Meoser from 'exts/common/meoser';

const engine = new Meoser();
const uploader = engine.uploader;

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
const codeyFirmwareVersionSupported = '23.01.010.005'

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

function __strToArray(str) {
    var tempArray = str.split("");
    return tempArray.map(__charToByte)
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



class ExtCodeyBluetoothcontroller {

    constructor() {
        this.funcs = {
            'getBluetoothJoystickValue': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    let value = await onLineRead(device, 'gamepad.get_joystick', stringFormat(args['AXIS']));
                    return value;
                }
            },
            'CheckBluetoothKey': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    let value = await onLineRead(device, 'gamepad.is_key_pressed', stringFormat(args['AXIS']));
                    return !!value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "codey_bluetoothcontroller",
            "targets": [
                "codey"
            ],
            "codeTypes": [
                "python"
            ],
            "version": "0.0.2",
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
            "feature": []
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

export default ExtCodeyBluetoothcontroller;