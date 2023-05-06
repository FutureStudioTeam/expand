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

// enter your javascript code here
import Sensorium from 'exts/common/sensorium';
const sensorium = new Sensorium();
if (!window.megaPiProEngine) {
    window.megaPiProEngine = sensorium.createMegaPiPro();
}
let engine = window.megaPiProEngine;
const DIRECTION2SPEED = [
    [-1, 1],
    [1, -1],
    [1, 1],
    [-1, -1]
];
const FACE_DATA = '00000000000000000011110001111110011111100011110000000000000000000000000000000000001111000111111001111110001111000000000000000000';
const EMPTY_FACE_DATA = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
const LED_STIP_DATA = '123450000000000';
let lastTime = (new Date()).getTime();
let isBoardButtonPressed = false;

// 在线配置的公共函数
class OnlineUtil {
    // 延时 n 秒
    static async delay(n) {
        return new Promise(res => setTimeout(() => res(), n * 1000));
    }
}

const formatPowerData = (code) => {
    if (!isString(code)) {
        return code
    }
    var reg = /[0-9]+%/g;
    return code.replace(reg, (item) => {
        item = item.replace('%', '');
        return Number(item) / 100 * 255;
    });
};

const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};

const onlyOnlineBlocks = [

];

const onlyOfflineBlocks = [

];



/**在线调用函数 */
//在线协议表
let megapiproProtocol = {
    show_external_led: (index, port, postion, [r, g, b], slot = 2) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    show_ledstrip: (index, port, slot, postion, [r, g, b]) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    show_7segments: (index, port, number) => [
        ['byte', index], '0209', ['byte', port],
        ['float', number]
    ],
    run_shutter: (index, port, action) => [
        ['byte', index], '0214', ['byte', port],
        ['byte', action]
    ],
    run_motor: (index, port, power) => [
        ['byte', index], '020a', ['byte', port],
        ['short', power]
    ],
    run_motor_shield: (index, port, power) => [
        ['byte', index], '0241', ['byte', port],
        ['short', power]
    ],
    init_bldc_motor: (index, port) => [
        ['byte', index], '024401', ['byte', port]
    ],
    run_bldc_motor: (index, port, power) => [
        ['byte', index], '024402', ['byte', port],
        ['short', power]
    ],
    run_encoder_motor: (index, port, power) => [
        ['byte', index], '023d00', ['byte', port],
        ['short', power]
    ],
    encoder_motor_move_to: (index, port, angle, speed) => [
        ['byte', index], '023e01', ['byte', port],
        ['long', angle],
        ['short', speed]
    ],
    encoder_motor_set_speed: (index, port, speed) => [
        ['byte', index], '023e02', ['byte', port],
        ['short', speed]
    ],
    encoder_motor_set_zero: (index, port) => [
        ['byte', index], '023e03', ['byte', port]
    ],
    encoder_motor_get_pos: (index, port) => [
        ['byte', index], '013d00', ['byte', port], '01'
    ],
    encoder_motor_get_speed: (index, port) => [
        ['byte', index], '013d00', ['byte', port], '02'
    ],
    run_powerful_encoder_motor: (index, addr, slot, power) => [
        ['byte', index], '024503', ['byte', addr],
        ['byte', slot],
        ['short', power]
    ],
    powerful_encoder_motor_move_to: (index, addr, slot, angle, speed) => [
        ['byte', index], '024501', ['byte', addr],
        ['byte', slot],
        ['long', angle],
        ['short', speed]
    ],
    powerful_encoder_motor_set_speed: (index, addr, slot, speed) => [
        ['byte', index], '024502', ['byte', addr],
        ['byte', slot],
        ['short', speed]
    ],
    powerful_encoder_motor_set_zero: (index, addr, slot) => [
        ['byte', index], '024504', ['byte', addr],
        ['byte', slot]
    ],
    powerful_encoder_motor_get_pos: (index, addr, slot) => [
        ['byte', index], '014510', ['byte', addr],
        ['byte', slot]
    ],
    powerful_encoder_motor_get_speed: (index, addr, slot) => [
        ['byte', index], '014511', ['byte', addr],
        ['byte', slot]
    ],
    run_step_motor: (index, port, speed, step) => [
        ['byte', index], '0228', ['byte', port],
        ['short', speed],
        ['long', step]
    ],
    run_servo: (index, port, slot, degree) => [
        ['byte', index], '020b', ['byte', port],
        ['byte', slot],
        ['byte', degree]
    ],
    show_led: (index, postion, [r, g, b], port = 7, slot = 2) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    show_face: (index, port, face, x = 0, y = 0) => [
        ['byte', index], '0229', ['byte', port], '02', ['byte', x],
        ['byte', y],
        ['array16', face]
    ],
    show_number: (index, port, number) => [
        ['byte', index], '0229', ['byte', port], '04', ['float', number]
    ],
    show_time: (index, port, hour, minute) => [
        ['byte', index], '0229', ['byte', port], '03', '01', ['byte', hour],
        ['byte', minute]
    ],
    show_text: (index, port, str, x = 0, y = 0) => [
        ['byte', index], '0229', ['byte', port], '01', ['byte', x],
        ['byte', Number(y) + 7],
        ['string', str]
    ],
    run_smart_servo_to_zero: (index, id, port = 5) => [
        ['byte', index], '024008', ['byte', port],
        ['byte', id]
    ],
    run_smart_servo: (index, id, speed, port = 5) => [
        ['byte', index], '024006', ['byte', port],
        ['byte', id],
        ['short', speed]
    ],
    run_smart_servo_absolute: (index, id, position, speed, port = 5) => [
        ['byte', index], '024004', ['byte', port],
        ['byte', id],
        ['long', position],
        ['float', speed]
    ],
    run_smart_servo_relative: (index, id, degree, speed, port = 5) => [
        ['byte', index], '024005', ['byte', port],
        ['byte', id],
        ['long', degree],
        ['float', speed]
    ],
    run_smart_servo_setpower: (index, id, power, port = 5) => [
        ['byte', index], '024006', ['byte', port],
        ['byte', id],
        ['short', power]
    ],
};

//index号
let queue = Array(256).fill(false);
//板载按钮事件�������固定index
queue[128] = true
//获取index组装协议
const getIndex = () => {
    return new Promise((res) => {
        let index = -1
        let id = setInterval(getIdx, 32)

        function getIdx() {
            if (index != -1 && !queue[index]) {
                queue[index] = true
                clearInterval(id)
                res(index)
            } else {
                index = queue.indexOf(false)
            }
        }
    })
}
//在线执���������������������完毕，重置index
const resetIndex = (index) => {
    queue[index] = false
}

//等待x秒调用函数
const delay = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, time);
    });
};

//十六进制颜色转为rgb
const color2RGB = (color) => {
    color = color.replace('#', '0x');
    let r = Number(color) >> 16;
    let g = Number(color) >> 8 & 0xff;
    let b = Number(color) & 0xff;
    return [r, g, b];
};

//表情数据转为16位数组
const faceData2Array16 = (faceData) => {
    let array16 = []
    for (let i = 0; i < faceData.length; i += 8) {
        let data = faceData.substring(i, i + 8)
        data = parseInt(data, 2)
        array16.push(data)
    }
    return array16;
};

//将index转为十六进制，用于传感器匹配，获取返回值
const byte2Hex = (num) => {
    let byte = num.toString(16)
    byte = '0' + byte
    return byte.slice(-2)
}
const formatFaceData = (code) => {
    if (!isString(code)) {
        return code
    }
    let result = [];
    for (var i = 0; i + 8 <= code.length; i += 8) {
        var tmpD = code.substring(i, i + 8);
        tmpD = parseInt(tmpD, 2);
        result.push(tmpD);
    }
    return result;
};

const disableBlocks = {
    debug: ["megapipro.enhanced_encoder_motor_power", "megapipro.enhanced_encoder_motor_speed", "megapipro.enhanced_encoder_motor_pos", "megapipro.small_fun", "megapipro.mpp_main", "megapipro.match_in_automode"],
    upload: ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait", "event_whenkeypressed", "event_whenflagclicked"]
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



class ExtMegapipro {

    constructor() {
        this.funcs = {
            'firmwareSettingHandle': ({
                handle: (app, device, info) => {
                    const uploaderUI = app.getService('system.ui.firmware.uploader');
                    if (uploaderUI) {
                        uploaderUI.onOK((data) => {
                            device.uploadFirmware(data);
                        });
                        uploaderUI.onFail((err) => {
                            console.error(err);
                        });
                        uploaderUI.open(info);
                    }
                },
                check: () => {
                    return new Promise(async function(resolve) {
                        var latest = '0f.01.003';
                        var count = 1,
                            maxCount = 8,
                            info = null,
                            shouldUpdate = false;
                        var interval = setInterval(async () => {
                            console.log('version count: ', count);
                            if (count > maxCount) {
                                shouldUpdate = true;
                                resolve(shouldUpdate);
                                clearInterval(interval);
                                return;
                            }
                            count++;
                            info = await engine.version.getData();
                            if (info) {
                                var matchVersionRule = info && info.toString().split('').filter(function(item) {
                                    return item == '.';
                                }).length > 1;
                                shouldUpdate = info === null || info !== latest && matchVersionRule;
                                console.log('version: ' + info, 'shouldUpdate: ' + shouldUpdate);
                                resolve(shouldUpdate);
                                clearInterval(interval);
                                return;
                            }
                        }, 800);
                    });
                }
            }),
            'settings292995A5Handle': //(app, device, block) => {
                //    // TODO
                //}
                async (app, device, block) => {
                    const service = app.getService('system.ui');
                    const title = 'megapipro.SET_SMART_ZERO_TITLE';
                    const no = 'megapipro.SET_SMART_ZERO_NO';
                    const btn = 'megapipro.SET_SMART_ZERO_BTN';
                    const loading = 'megapipro.SET_SMART_ZERO_BTN_LOADING';
                    const setZeroSuccess = 'megapipro.SET_SMART_ZERO_SUCCESS';
                    const setZeroFail = 'megapipro.SET_SMART_ZERO_FAIL';
                    const dialog = await service.dialog('color', {
                        title: title,
                        width: '320px',
                        fields: [{
                            id: 'index',
                            label: no,
                            type: 'select',
                            options: [{
                                    text: '1',
                                    value: 1
                                },
                                {
                                    text: '2',
                                    value: 2
                                },
                                {
                                    text: '3',
                                    value: 3
                                },
                                {
                                    text: '4',
                                    value: 4
                                },
                                {
                                    text: '5',
                                    value: 5
                                },
                                {
                                    text: '6',
                                    value: 6
                                }
                            ],
                            value: '1',
                            props: {}
                        }],
                        buttons: [{
                            id: 'id',
                            text: btn,
                            loadingText: loading,
                            handle: async (ctx) => {
                                const {
                                    values
                                } = ctx;
                                const index = parseInt(values.index);
                                console.log('index = ', index);

                                await OnlineUtil.delay(0.2);
                                await device.asyncWriteProtocol('ff55', [0x00, 0x02, 0x40, 0x07, 0x05, index]);
                                await device.asyncReadProtocol('ff55', ['0d0a'], 500);

                                await OnlineUtil.delay(0.2);
                                await device.asyncWriteProtocol('ff55', [0x00, 0x01, 0x40, 0x0d, 0x05, index]);
                                let angle = await device.asyncReadProtocol('ff55', ['0006', 'long'], 1000);
                                console.log('angle = ', angle);
                                if ((angle != null) && (Math.abs(angle) < 2)) {
                                    service.message(setZeroSuccess, 'success', 1);
                                } else {
                                    service.message(setZeroFail, 'warning', 1);
                                }
                                //await OnlineUtil.delay(0.5);
                            }
                        }]
                    });
                },
            'timerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'timer': {
                onRun: async (args, app, device, block) => {
                    return (((new Date()).getTime() - lastTime) / 1000).toFixed(3);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'timerResetCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'timer_reset': {
                onRun: (args, app, device, block) => {
                    lastTime = (new Date()).getTime();
                }
            },
            'seg7ShowNumberCodesLib': ['Me7SegmentDisplay seg7_/*{PORT}*/(/*{PORT}*/);'],
            'seg7ShowNumberCodesCode': (args) => {
                if (args.NUMBER == "None") {
                    args.NUMBER = 0;
                } else if (Number(args.NUMBER) < -999) {
                    args.NUMBER = -999;
                } else if (Number(args.NUMBER) > 9999) {
                    args.NUMBER = 9999;
                }
                return `
seg7_${args.PORT}.display((float)${args.NUMBER});`
            },
            'seg7_show_number': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.NUMBER)) {
                        args.NUMBER = 0;
                    } else if (Number(args.NUMBER) < -999) {
                        args.NUMBER = -999;
                    } else if (Number(args.NUMBER) > 9999) {
                        args.NUMBER = 9999;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_7segments(index, Number(args.PORT), Number(args.NUMBER)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowFaceTimeCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'mcoreShowFaceTimeCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowFaceTimeCodesCode': (args) => {
                const faceData = formatFaceData(args.FACE_PANEL);
                if (args.TIME == "None") {
                    args.TIME = 0;
                } else if (Number(args.TIME) < 0) {
                    args.TIME = 0;
                }
                return `
drawTemp = new unsigned char[16]{${faceData}};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.drawBitmap(0, 0, 16, drawBuffer);
_delay(${args.TIME});
ledMtx_${args.PORT}.clearScreen();`
            },
            'mcore_show_face_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.TIME)) {
                        args.TIME = 0;
                    } else if (Number(args.TIME) < 0) {
                        args.TIME = 0;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowFaceCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'mcoreShowFaceCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowFaceCodesCode': (args) => {
                const faceData = formatFaceData(args.FACE_PANEL);
                return `
drawTemp = new unsigned char[16]{${faceData}};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.drawBitmap(0, 0, 16, drawBuffer);`
            },
            'mcore_show_face': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowFacePositionCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'mcoreShowFacePositionCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowFacePositionCodesCode': (args) => {
                const faceData = formatFaceData(args.FACE_PANEL);
                if ((args.X == "" || args.X == null) || args.X == "None") {
                    args.X = 0;
                }
                if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                    args.Y = 0;
                }
                return `
drawTemp = new unsigned char[16]{${faceData}};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.clearScreen();
ledMtx_${args.PORT}.drawBitmap(${args.X}, ${args.Y}, 16, drawBuffer);`
            },
            'mcore_show_face_position': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.X)) {
                        args.X = 0;
                    }
                    args.X = parseInt(args.X);
                    if (isNaN(args.Y)) {
                        args.Y = 0;
                    }
                    args.Y = parseInt(args.Y);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL), parseInt(args.X), parseInt(args.Y)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowTextCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'mcoreShowTextCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcore_show_text': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString()));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowTextPositionCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'mcoreShowTextPositionCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowTextPositionCodesCode': (args) => {
                if ((args.X == "" || args.X == null) || args.X == "None") {
                    args.X = 0;
                }
                if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                    args.Y = 0;
                }
                return `
ledMtx_${args.PORT}.drawStr(${args.X}, ${args.Y} + 7, String(${args.TEXT}).c_str());`
            },
            'mcore_show_text_position': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.X)) {
                        args.X = 0;
                    }
                    args.X = parseInt(args.X);
                    if (isNaN(args.Y)) {
                        args.Y = 0;
                    }
                    args.Y = parseInt(args.Y);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString(), parseInt(args.X), parseInt(args.Y)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowNumberCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'mcoreShowNumberCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowNumberCodesCode': (args) => {
                if (args.NUMBER == "None") {
                    args.NUMBER = 0;
                }
                return `
ledMtx_${args.PORT}.showNum(${args.NUMBER}, 3);`
            },
            'mcore_show_number': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.NUMBER)) {
                        args.NUMBER = 0;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_number(index, parseInt(args.PORT), Number(args.NUMBER)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowTimeCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'mcoreShowTimeCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowTimeCodesCode': (args) => {
                if (args.NUMBER1 == "None") {
                    args.NUMBER1 = 0;
                } else if (Number(args.NUMBER1) < 0) {
                    args.NUMBER1 = 0;
                } else if (Number(args.NUMBER1) > 99) {
                    args.NUMBER1 = 99;
                }
                // args.NUMBER1 = parseInt(args.NUMBER1);

                if (args.NUMBER2 == "None") {
                    args.NUMBER2 = 0;
                } else if (Number(args.NUMBER2) < 0) {
                    args.NUMBER2 = 0;
                } else if (Number(args.NUMBER2) > 99) {
                    args.NUMBER2 = 99;
                }
                // args.NUMBER2 = parseInt(args.NUMBER2);
                return `
ledMtx_${args.PORT}.showClock(${args.NUMBER1}, ${args.NUMBER2}, true);`
            },
            'mcore_show_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.NUMBER1)) {
                        args.NUMBER1 = 0;
                    } else if (Number(args.NUMBER1) < 0) {
                        args.NUMBER1 = 0;
                    } else if (Number(args.NUMBER1) > 99) {
                        args.NUMBER1 = 99;
                    }
                    args.NUMBER1 = parseInt(args.NUMBER1);

                    if (isNaN(args.NUMBER2)) {
                        args.NUMBER2 = 0;
                    } else if (Number(args.NUMBER2) < 0) {
                        args.NUMBER2 = 0;
                    } else if (Number(args.NUMBER2) > 99) {
                        args.NUMBER2 = 99;
                    }
                    args.NUMBER2 = parseInt(args.NUMBER2);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_time(index, parseInt(args.PORT), Number(args.NUMBER1), Number(args.NUMBER2)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ledModuleSetColorCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'ledModuleSetColorCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'ledModuleSetColorCodesCode': (args) => {
                if (args.R == "None") {
                    args.R = 0;
                } else if (Number(args.R) < 0) {
                    args.R = 0;
                } else if (Number(args.R) > 255) {
                    args.R = 255;
                }

                if (args.G == "None") {
                    args.G = 0;
                } else if (Number(args.G) < 0) {
                    args.G = 0;
                } else if (Number(args.G) > 255) {
                    args.G = 255;
                }

                if (args.B == "None") {
                    args.B = 0;
                } else if (Number(args.B) < 0) {
                    args.B = 0;
                } else if (Number(args.B) > 255) {
                    args.B = 255;
                }

                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}.show();`
            },
            'led_module_set_color': {
                onRun: async (args, app, device, block) => {
                    //R
                    if ((isNaN(args.R)) || (args.R < 0)) {
                        args.R = 0;
                    } else if (args.R > 255) {
                        args.R = 255;
                    }
                    args.R = parseInt(args.R);

                    //G
                    if ((isNaN(args.G)) || (args.G < 0)) {
                        args.G = 0;
                    } else if (args.G > 255) {
                        args.G = 255;
                    }
                    args.G = parseInt(args.G);

                    //B
                    if ((isNaN(args.B)) || (args.B < 0)) {
                        args.B = 0;
                    } else if (args.B > 255) {
                        args.B = 255;
                    }
                    args.B = parseInt(args.B);

                    let index = await getIndex()
                    let rgb = [args.R, args.G, args.B];
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ledStripSetColorCodesLib': ['MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);'],
            'ledStripSetColorCodesSetup': ['rgbled_/*{PORT}*/_/*{SLOT}*/.fillPixelsBak(0, 2, 1);'],
            'ledStripSetColorCodesCode': (args) => {
                if (((args.POS == "None")) || (args.POS < 1)) {
                    args.POS = 1;
                } else if (args.POS > 255) {
                    args.POS = 255;
                }

                if (args.R == "None") {
                    args.R = 0;
                } else if (Number(args.R) < 0) {
                    args.R = 0;
                } else if (Number(args.R) > 255) {
                    args.R = 255;
                }

                if (args.G == "None") {
                    args.G = 0;
                } else if (Number(args.G) < 0) {
                    args.G = 0;
                } else if (Number(args.G) > 255) {
                    args.G = 255;
                }

                if (args.B == "None") {
                    args.B = 0;
                } else if (Number(args.B) < 0) {
                    args.B = 0;
                } else if (Number(args.B) > 255) {
                    args.B = 255;
                }
                return `
rgbled_${args.PORT}_${args.SLOT}.setColor(${args.POS}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}_${args.SLOT}.show();`
            },
            'led_strip_set_color': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POS) || (args.POS < 1)) {
                        args.POS = 1;
                    } else if (args.POS > 255) {
                        args.POS = 255;
                    }
                    args.POS = parseInt(args.POS);
                    //R
                    if ((isNaN(args.R)) || (args.R < 0)) {
                        args.R = 0;
                    } else if (args.R > 255) {
                        args.R = 255;
                    }
                    args.R = parseInt(args.R);

                    //G
                    if ((isNaN(args.G)) || (args.G < 0)) {
                        args.G = 0;
                    } else if (args.G > 255) {
                        args.G = 255;
                    }
                    args.G = parseInt(args.G);

                    //B
                    if ((isNaN(args.B)) || (args.B < 0)) {
                        args.B = 0;
                    } else if (args.B > 255) {
                        args.B = 255;
                    }
                    args.B = parseInt(args.B);

                    let index = await getIndex()
                    let rgb = [args.R, args.G, args.B];
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.show_ledstrip(index, Number(args.PORT), Number(args.SLOT), Number(args.POS), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'encoderMotorPowerCodesSetup': ['attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);'],
            'encoderMotorPowerCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
Encoder_${args.PORT}.setTarPWM(${args.POWER}/100.0*255);`
            },
            'encoder_motor_power': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < -100) {
                        args.POWER = -100;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_encoder_motor(index, Number(args.PORT), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'encoderMotorPosCodesSetup': ['attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);',
                'Encoder_/*{PORT}*/.setPulse(8);',
                'Encoder_/*{PORT}*/.setRatio(46.67);',
                'Encoder_/*{PORT}*/.setPosPid(1.8,0,1.2);',
                'Encoder_/*{PORT}*/.setSpeedPid(0.18,0,0);'
            ],
            'encoderMotorPosCodesCode': (args) => {
                if (args.DEG == "None") {
                    args.DEG = 0;
                }
                // args.DEG = parseInt(args.DEG);
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
Encoder_${args.PORT}.move(${args.DEG},abs(${args.SPEED}));`
            },
            'encoder_motor_pos': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.DEG)) {
                        args.DEG = 0;
                    }
                    args.DEG = parseInt(args.DEG);
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.encoder_motor_move_to(index, Number(args.PORT), Number(args.DEG), Math.abs(Number(args.SPEED))));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'encoderMotorSpeedCodesSetup': ['attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);',
                'Encoder_/*{PORT}*/.setPulse(8);',
                'Encoder_/*{PORT}*/.setRatio(46.67);',
                'Encoder_/*{PORT}*/.setPosPid(1.8,0,1.2);',
                'Encoder_/*{PORT}*/.setSpeedPid(0.18,0,0);'
            ],
            'encoderMotorSpeedCodesCode': (args) => {
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
Encoder_${args.PORT}.runSpeed(${args.SPEED});`
            },
            'encoder_motor_speed': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.encoder_motor_set_speed(index, Number(args.PORT), Number(args.SPEED)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'encoderMotorGetSpeedCodesSetup': ['attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);',
                'Encoder_/*{PORT}*/.setPulse(8);',
                'Encoder_/*{PORT}*/.setRatio(46.67);',
                'Encoder_/*{PORT}*/.setPosPid(1.8,0,1.2);',
                'Encoder_/*{PORT}*/.setSpeedPid(0.18,0,0);'
            ],
            'encoder_motor_get_speed': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.encoder_motor_get_speed(index, Number(args.PORT)));
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'encoderMotorGetPosCodesSetup': ['attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);',
                'Encoder_/*{PORT}*/.setPulse(8);',
                'Encoder_/*{PORT}*/.setRatio(46.67);',
                'Encoder_/*{PORT}*/.setPosPid(1.8,0,1.2);',
                'Encoder_/*{PORT}*/.setSpeedPid(0.18,0,0);'
            ],
            'encoder_motor_get_pos': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.encoder_motor_get_pos(index, Number(args.PORT)));
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}06`, 'long']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'hpEncoderMotorPowerCodesLib': ['MeEncoderNew superMotor_/*{SWITCH}*/_/*{SLOT}*/(0x09 + /*{SWITCH}*/,/*{SLOT}*/);'],
            'hpEncoderMotorPowerCodesSetup': ['superMotor_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'hpEncoderMotorPowerCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
superMotor_${args.SWITCH}_${args.SLOT}.setPWM(${args.POWER}/100.0*255);`
            },
            'hp_encoder_motor_power': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < -100) {
                        args.POWER = -100;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_powerful_encoder_motor(index, 0x09 + Number(args.SWITCH), Number(args.SLOT), Number(args.POWER) / 100 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'hpEncoderMotorPosCodesLib': ['MeEncoderNew superMotor_/*{SWITCH}*/_/*{SLOT}*/(0x09 + /*{SWITCH}*/,/*{SLOT}*/);'],
            'hpEncoderMotorPosCodesSetup': ['superMotor_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'hpEncoderMotorPosCodesCode': (args) => {
                if (args.DEG == "None") {
                    args.DEG = 0;
                }
                // args.DEG = parseInt(args.DEG);
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
superMotor_${args.SWITCH}_${args.SLOT}.move(${args.DEG},abs(${args.SPEED}));`
            },
            'hp_encoder_motor_pos': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.DEG)) {
                        args.DEG = 0;
                    }
                    args.DEG = parseInt(args.DEG);
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.powerful_encoder_motor_move_to(index, 0x09 + Number(args.SWITCH), Number(args.SLOT), Number(args.DEG), Number(args.SPEED)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'hpEncoderMotorSpeedCodesLib': ['MeEncoderNew superMotor_/*{SWITCH}*/_/*{SLOT}*/(0x09 + /*{SWITCH}*/,/*{SLOT}*/);'],
            'hpEncoderMotorSpeedCodesSetup': ['superMotor_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'hpEncoderMotorSpeedCodesCode': (args) => {
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
superMotor_${args.SWITCH}_${args.SLOT}.runSpeed(${args.SPEED});`
            },
            'hp_encoder_motor_speed': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.powerful_encoder_motor_set_speed(index, 0x09 + Number(args.SWITCH), Number(args.SLOT), Number(args.SPEED)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'hpEncoderMotorGetSpeedCodesLib': ['MeEncoderNew superMotor_/*{SWITCH}*/_/*{SLOT}*/(0x09 + /*{SWITCH}*/,/*{SLOT}*/);'],
            'hpEncoderMotorGetSpeedCodesSetup': ['superMotor_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'hp_encoder_motor_get_speed': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.powerful_encoder_motor_get_speed(index, 0x09 + Number(args.SWITCH), Number(args.SLOT)));
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'hpEncoderMotorGetPosCodesLib': ['MeEncoderNew superMotor_/*{SWITCH}*/_/*{SLOT}*/(0x09 + /*{SWITCH}*/,/*{SLOT}*/);'],
            'hpEncoderMotorGetPosCodesSetup': ['superMotor_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'hp_encoder_motor_get_pos': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.powerful_encoder_motor_get_pos(index, 0x09 + Number(args.SWITCH), Number(args.SLOT)));
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}06`, 'long']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'stepperMotorPosCodesLib': ['MeStepperOnBoard stepper_/*{PORT}*/(/*{PORT}*/);'],
            'stepperMotorPosCodesSetup': ['stepper_/*{PORT}*/.setMicroStep(16);',
                'stepper_/*{PORT}*/.enableOutputs();'
            ],
            'stepperMotorPosCodesCode': (args) => {
                if (args.STEP == "None") {
                    args.STEP = 0;
                }
                // args.STEP = parseInt(args.STEP);
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
stepper_${args.PORT}.move(${args.STEP});
stepper_${args.PORT}.setMaxSpeed(abs(${args.SPEED}));
stepper_${args.PORT}.setSpeed(abs(${args.SPEED}));`
            },
            'stepper_motor_pos': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.STEP)) {
                        args.STEP = 0;
                    }
                    args.STEP = parseInt(args.STEP);
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_step_motor(index, Number(args.PORT), Math.abs(Number(args.SPEED)), Number(args.STEP)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'enhancedEncoderMotorPowerCodesLib': ['MeEnhanceEncoderOnBoard EnhanceEncoder_1(SLOT1);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_2(SLOT2);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_3(SLOT3);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_4(SLOT4);'
            ],
            'enhancedEncoderMotorPowerCodesSetup': ['attachInterrupt(EnhanceEncoder_/*{PORT}*/.getIntNum(), isr_process_enhance_encoder/*{PORT}*/, RISING);'],
            'enhancedEncoderMotorPowerCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
EnhanceEncoder_${args.PORT}.setTarPWM(${args.POWER}/100.0*255);`
            },
            'enhanced_encoder_motor_power': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'enhancedEncoderMotorSpeedCodesLib': ['MeEnhanceEncoderOnBoard EnhanceEncoder_1(SLOT1);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_2(SLOT2);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_3(SLOT3);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_4(SLOT4);'
            ],
            'enhancedEncoderMotorSpeedCodesSetup': ['attachInterrupt(EnhanceEncoder_/*{PORT}*/.getIntNum(), isr_process_enhance_encoder/*{PORT}*/, RISING);'],
            'enhanced_encoder_motor_speed': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'enhancedEncoderMotorPosCodesLib': ['MeEnhanceEncoderOnBoard EnhanceEncoder_1(SLOT1);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_2(SLOT2);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_3(SLOT3);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_4(SLOT4);'
            ],
            'enhancedEncoderMotorPosCodesSetup': ['attachInterrupt(EnhanceEncoder_/*{PORT}*/.getIntNum(), isr_process_enhance_encoder/*{PORT}*/, RISING);'],
            'enhanced_encoder_motor_pos': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'dCmotorPower1CodesLib': ['MeMegaPiDCMotor motor_/*{PORT}*/(/*{PORT}*/);'],
            'dCmotorPower1CodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
motor_${args.PORT}.run(${args.POWER}/100.0*255);`
            },
            'DCmotor_power_1': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < -100) {
                        args.POWER = -100;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_motor(index, Number(args.PORT), Number(args.POWER) / 100 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'dCmotorPower2CodesLib': ['MeDCMotor dcfourmotor_/*{PORT}*/(/*{PORT}*/);'],
            'dCmotorPower2CodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
dcfourmotor_${args.PORT}.run(${args.POWER}/100.0*255);`
            },
            'DCmotor_power_2': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < -100) {
                        args.POWER = -100;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_motor_shield(index, Number(args.PORT), Number(args.POWER) / 100 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'bLmotorLockCodesLib': ['MeMegaPiProESCMotor bldcmotor_/*{PORT}*/(/*{PORT}*/);'],
            'BLmotor_lock': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.init_bldc_motor(index, Number(args.PORT)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'bLmotorPowerCodesLib': ['MeMegaPiProESCMotor bldcmotor_/*{PORT}*/(/*{PORT}*/);'],
            'bLmotorPowerCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < 0) {
                    args.POWER = 0;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
bldcmotor_${args.PORT}.run(${args.POWER}/100.0*255);`
            },
            'BLmotor_power': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < 0) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_bldc_motor(index, Number(args.PORT), Math.abs(Number(args.POWER))));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1577092133273CodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'block1577092133273CodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'BLOCK_1577092133273': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_smart_servo_to_zero(index, args.INDEX))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'block1577092158156CodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'block1577092158156CodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'block1577092158156CodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
mysmartservo.setPwmMove(${args.INDEX},${args.POWER} /100.0*255 );`
            },
            'BLOCK_1577092158156': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < -100) {
                        args.POWER = -100;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_smart_servo_setpower(index, args.INDEX, args.POWER / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1577092279792CodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'block1577092279792CodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'block1577092279792CodesCode': (args) => {
                if (args.DEG == "None") {
                    args.DEG = 0;
                }
                // args.DEG = parseInt(args.DEG);
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
mysmartservo.moveTo(${args.INDEX},${args.DEG},abs(${args.SPEED}));`
            },
            'BLOCK_1577092279792': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.DEG)) {
                        args.DEG = 0;
                    }
                    args.DEG = parseInt(args.DEG);
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_smart_servo_absolute(index, args.INDEX, args.DEG, Math.abs(Number(args.SPEED))))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'block1577094190142CodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'block1577094190142CodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'block1577094190142CodesCode': (args) => {
                if (args.DEG == "None") {
                    args.DEG = 0;
                }
                // args.DEG = parseInt(args.DEG);
                if (args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);
                return `
mysmartservo.move(${args.INDEX},${args.DEG},abs(${args.SPEED}));`
            },
            'BLOCK_1577094190142': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.DEG)) {
                        args.DEG = 0;
                    }
                    args.DEG = parseInt(args.DEG);
                    if (isNaN(args.SPEED)) {
                        args.SPEED = 0;
                    }
                    args.SPEED = parseInt(args.SPEED);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_smart_servo_relative(index, args.INDEX, args.DEG, Math.abs(Number(args.SPEED))))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'block1577094267367CodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'block1577094267367CodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'block1577094267367CodesCode': (args) => {
                if (args.OPTION == 2) {
                    return `mysmartservo.getCurrentRequest(${args.INDEX})`
                } else if (args.OPTION == 3) {
                    return `mysmartservo.getVoltageRequest(${args.INDEX})`
                } else if (args.OPTION == 0) {
                    return `mysmartservo.getSpeedRequest(${args.INDEX})`
                } else if (args.OPTION == 4) {
                    return `mysmartservo.getAngleRequest(${args.INDEX})`
                } else if (args.OPTION == 1) {
                    return `mysmartservo.getTempRequest(${args.INDEX})`
                }
            },
            'BLOCK_1577094267367': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let value = null;
                    if (args.OPTION == '4') {
                        await device.asyncWriteProtocol('ff55', [
                            ['byte', index], '0140', ['byte', 0x09 + Number(args.OPTION)],
                            ['byte', 0x05],
                            ['byte', Number(args.INDEX)]
                        ]);
                        value = await device.asyncReadProtocol('ff55', [
                            ['byte', index], '06', 'float'
                        ]);
                    } else {
                        await device.asyncWriteProtocol('ff55', [
                            ['byte', index], '0140', ['byte', 0x09 + Number(args.OPTION)],
                            ['byte', 0x05],
                            ['byte', Number(args.INDEX)]
                        ]);
                        value = await device.asyncReadProtocol('ff55', [
                            ['byte', index], '02', 'float'
                        ]);
                    }
                    // await device.asyncWriteProtocol('ff55', [['byte', index], '0104', ['byte', 0x09 + Number(args.OPTION)], ['byte', 0x05], ['byte', Number(args.INDEX)]]);
                    // let value = await device.asyncReadProtocol('ff55', [['byte', index], '02', 'float']);

                    // console.log(value);
                    resetIndex(index);
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'valveStatusACodesLib': ['MeMegaPiDCMotor motor_/*{PORT}*/(/*{PORT}*/);'],
            'valve_status_a': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_motor(index, Number(args.PORT), Number(args.STATUS)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'valveStatusBCodesLib': ['MeDCMotor dcfourmotor_/*{PORT}*/(/*{PORT}*/);'],
            'valve_status_b': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_motor_shield(index, Number(args.PORT), Number(args.STATUS)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'smallFunCodesLib': ['MePort dc130_/*{PORT}*/(/*{PORT}*/);'],
            'small_fun': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let dirMap = {
                        '1': -1,
                        '-1': 0,
                        '0': 1
                    }
                    let direction = dirMap[args.FAN_ROTATE];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_motor(index, port, direction * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultrasonicDisCodesLib': ['MeUltrasonicSensor ultrasonic_/*{PORT}*/(/*{PORT}*/);'],
            'ultrasonic_dis': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0101', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'linefollowerStatusCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'linefollower_status': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0111', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'colorSensorReadCodesLib': ['MeColorSensor colorsensor_/*{PORT}*/(/*{PORT}*/);'],
            'colorSensorReadCodesSetup': ['colorsensor_/*{PORT}*/.SensorInit();'],
            'color_sensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0143', ['byte', Number(args.PORT)], '01', ['byte', Number(args.COLOR)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'colorSensorColorDetectedCodesLib': ['MeColorSensor colorsensor_/*{PORT}*/(/*{PORT}*/);'],
            'colorSensorColorDetectedCodesSetup': ['colorsensor_/*{PORT}*/.SensorInit();'],
            'color_sensor_color_detected': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0143', ['byte', Number(args.PORT)], '02', ['byte', Number(args.COLOR)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'joystickCodesLib': ['MeJoystick joystick_/*{PORT}*/(/*{PORT}*/);'],
            'joystick': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0105', ['byte', Number(args.PORT)],
                        ['byte', Number(args.AXIS_X_Y)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'buttonPressedCodesLib': ['Me4Button buttonSensor_/*{PORT}*/(/*{PORT}*/);'],
            'button_pressed': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0116', ['byte', Number(args.PORT)],
                        ['byte', Number(args.FOUR_KEY)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0] > 0;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'touchSensorTouchDetectedCodesLib': ['MeTouchSensor touchSensor_/*{PORT}*/(/*{PORT}*/);'],
            'touch_sensor_touch_detected': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0133', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return false;
                    }
                    return value[0] > 0;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'pointmeterCodesLib': ['MePotentiometer potentiometer_/*{PORT}*/(/*{PORT}*/);'],
            'pointmeter': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0104', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'limitswitchReadCodesLib': ['MeLimitSwitch sw_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'limitswitch_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0115', ['byte', Number(args.PORT)],
                        ['byte', Number(args.SLOT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'lightSensorReadCodesLib': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'light_sensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0103', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'lightSensorCodesLib': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'light_sensor': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0203', ['byte', Number(args.PORT)],
                        ['byte', Number(args.STATUS)]
                    ]);
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'soundsensorReadCodesLib': ['MeSoundSensor soundsensor_/*{PORT}*/(/*{PORT}*/);'],
            'soundsensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0107', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'iRsensorReadCodesLib': ['MeInfraredReceiver ir_/*{PORT}*/(/*{PORT}*/);'],
            'iRsensorReadCodesSetup': ['ir_/*{PORT}*/.begin();'],
            'IRsensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0110', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'humanIrReadCodesLib': ['MePIRMotionSensor pir_/*{PORT}*/(/*{PORT}*/);'],
            'humanIR_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010f', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'tempsensorReadCodesLib': ['MeTemperature temperature_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'tempsensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0102', ['byte', Number(args.PORT)],
                        ['byte', Number(args.SLOT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'tempMoistureSensorReadCodesLib': ['MeHumiture humiture_/*{PORT}*/(/*{PORT}*/);'],
            'temp_moisture_sensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0117', ['byte', Number(args.PORT)],
                        ['byte', Number(args.TEMP_HUMITURE)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'firesensorReadCodesLib': ['MeFlameSensor flameSensor_/*{PORT}*/(/*{PORT}*/);'],
            'firesensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0118', ['byte', Number(args.PORT)]
                    ]);
                    var value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}03`, 'short']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'gassensorReadCodesLib': ['MeGasSensor gasSensor_/*{PORT}*/(/*{PORT}*/);'],
            'gassensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0119', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}03`, 'short']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'gyroSesorReadCodesLib': ['MeGyro gyro_1;'],
            'gyroSesorReadCodesSetup': ['gyro_1.begin();'],
            'gyro_sesor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010600', ['byte', Number(args.AXIS)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'magsensorReadCodesLib': ['MeCompass compass_/*{PORT}*/(/*{PORT}*/);'],
            'magsensorReadCodesSetup': ['compass_/*{PORT}*/.begin();'],
            'magsensor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '011a', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'shutterSetFunCodesLib': ['MeShutter shutter_/*{PORT}*/(/*{PORT}*/);'],
            'shutter_set_fun': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiproProtocol.run_shutter(index, Number(args.PORT), Number(args.SHUTTER_ACTION)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mppMainCodesLib': ['double angle_rad = PI/180.0;',
                'double angle_deg = 180.0/PI;',
                'MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);',
                'MeEncoderOnBoard Encoder_3(SLOT3);',
                'MeEncoderOnBoard Encoder_4(SLOT4);'
            ],
            'mppMainCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(CS10) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS22);',
                'TCCR3A = _BV(WGM30);',
                'TCCR3B = _BV(CS31) | _BV(CS30) | _BV(WGM32);',
                'TCCR4A = _BV(WGM40);',
                'TCCR4B = _BV(CS41) | _BV(CS40) | _BV(WGM42);'
            ],
            'mpp_main': {
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
            'match_in_automode': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'proceduresDefinitionCodesDeclare': [`void /*{$PROC_CODE}*/{
  /*{$BRANCH}*/
}`, 0]
        };
    }

    getInfo() {
        return {
            "id": "megapipro",
            "targets": {
                "device": true,
                "name": "megapipro",
                "icon": window.MbApi.getExtResPath('megapipro/imgs/67e8ac8897834f7e91d61d4b859c4519.png', 'megapipro'),
                "enableCode": true,
                "enableUpload": [
                    "serialport"
                ],
                "enableOnline": [
                    "serialport",
                    "ble"
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
                                    "megapipro.connect_fail_e3b8aead",
                                    "megapipro.connect_fail_0a8e963b",
                                    "megapipro.connect_fail_c6b30a1c"
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
                                    "megapipro.connect_fail_9a8a4feb",
                                    "megapipro.connect_fail_671017f3",
                                    "megapipro.connect_fail_aad5f15d",
                                    "megapipro.connect_fail_2df5ee83"
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
                        }
                    },
                    "upload": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                ""
                            ],
                            "fail": [
                                "megapipro.upload_fail_c9f06d49",
                                "megapipro.upload_fail_3bd7dbc4"
                            ]
                        },
                        "middlewares": [{
                            "name": "arduino",
                            "params": {
                                "board": "mega",
                                "sources": extSources.arduino
                            }
                        }],
                        "driver": {
                            "name": "stk500v2"
                        }
                    },
                    "firmware": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                "megapipro.firmware_success_5a28c266"
                            ],
                            "fail": [
                                "megapipro.firmware_fail_e4b56cf5"
                            ]
                        },
                        "driver": {
                            "name": "stk500v2"
                        }
                    }
                },
                "firmware": [{
                    "id": "e0a3fed5",
                    "name": "megapipro.firmwares_version_e0a3fed5",
                    "version": "0f.01.003",
                    "isDefault": false,
                    "url": {
                        "name": "Firmware_for_MegaPiPro.hex",
                        "url": window.MbApi.getExtResPath('megapipro/res/a7aa37a003c54ac2b6a9943db3cf68d7.hex', 'megapipro')
                    }
                }],
                "settings": [{
                        "text": "megapipro.UPDATE_FIRMWARE",
                        "handle": this.funcs.firmwareSettingHandle
                    },
                    {
                        "id": "292995a5",
                        "text": "megapipro.settings_292995a5",
                        "handle": this.funcs.settings292995A5Handle
                    }
                ],
                "categoriesOrder": [
                    "MegaPi Pro",
                    "display",
                    "soundandlight",
                    "power",
                    "sensing",
                    "events",
                    "control",
                    "operators",
                    "data",
                    "myBlocks"
                ]
            },
            "codeTypes": [
                "arduinoc"
            ],
            "version": "1.0.5",
            "platform": [
                "mblockpc",
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
                "mpp_main"
            ],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [
                "event_whenbroadcastreceived",
                "event_broadcast",
                "event_broadcastandwait",
                "event_whenkeypressed",
                "event_whenflagclicked"
            ],
            "disabledOnline": [
                "megapipro.enhanced_encoder_motor_power",
                "megapipro.enhanced_encoder_motor_speed",
                "megapipro.enhanced_encoder_motor_pos",
                "megapipro.small_fun",
                "megapipro.mpp_main",
                "megapipro.match_in_automode"
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

export default ExtMegapipro;