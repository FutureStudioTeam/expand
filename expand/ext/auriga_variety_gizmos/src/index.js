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
let engine = null;

const DIRECTION2SPEED = [
    [-1, 1],
    [1, -1],
    [1, 1],
    [-1, -1]
];
const FACE_DATA = '00000000000000000011110001111110011111100011110000000000000000000000000000000000001111000111111001111110001111000000000000000000';
const EMPTY_FACE_DATA = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
const LED_STIP_DATA = '123450000000000';
const BLACK_COLOR = '#000000';

// 在线配置的公共函数
class OnlineUtil {
    // 延时 n 秒
    static async delay(n) {
        return new Promise(res => setTimeout(() => res(), n * 1000));
    }
}

const formatColorData = (code) => {
    if (!isString(code)) {
        return code
    }
    var reg = /\"?#[0-9A-f]+\"?/g;
    return code.replace(reg, (item) => {
        item = item.replace(/"/g, '');
        item = item.replace('#', '0x');
        let r = Number(item) >> 16;
        let g = Number(item) >> 8 & 0xff;
        let b = Number(item) & 0xff;
        return [r, g, b].join(',');
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
let devProtocol = {
    run_shutter: (index, port, action) => [
        ['byte', index], '0214', ['byte', port],
        ['byte', action]
    ],
    run_motor: (index, port, power) => [
        ['byte', index], '020a', ['byte', port],
        ['short', power]
    ],
    run_servo: (index, port, slot, degree) => [
        ['byte', index], '020b', ['byte', port],
        ['byte', slot],
        ['byte', degree]
    ],
    show_face: (index, port, face, x = 0, y = 0) => [
        ['byte', index], '0229', ['byte', port], '02', ['byte', x],
        ['byte', y],
        ['array16', face]
    ],
    show_text: (index, port, str, x = 0, y = 0) => [
        ['byte', index], '0229', ['byte', port], '01', ['byte', x],
        ['byte', Number(y) + 7],
        ['string', str]
    ],
    show_number: (index, port, number) => [
        ['byte', index], '0229', ['byte', port], '04', ['float', number]
    ],
    show_time: (index, port, hour, minute) => [
        ['byte', index], '0229', ['byte', port], '03', '01', ['byte', hour],
        ['byte', minute]
    ],
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
    run_board_encoder_motor: (index, slot, speed, port = 0) => [
        ['byte', index], '023d', ['byte', port],
        ['byte', slot],
        ['short', speed]
    ],
    run_board_encoder_motor_pos: (index, slot, degree, speed) => [
        ['byte', index], '023e01', ['byte', slot],
        ['long', degree],
        ['short', speed]
    ],
    run_board_encoder_motor_speed: (index, slot, degree, speed) => [
        ['byte', index], '023e02', ['byte', slot],
        ['long', degree],
        ['short', speed]
    ],
    run_encoder_motor: (index, slot, speed) => [
        ['byte', index], '020c08', ['byte', slot],
        ['short', speed]
    ],
    run_encoder_motor_pos: (index, slot, speed, degree) => [
        ['byte', index], '020c08', ['byte', slot],
        ['short', speed],
        ['float', degree]
    ],
    run_stepper_motor: (index, port, speed, distance) => [
        ['byte', index], '0228', ['byte', port],
        ['short', speed],
        ['long', distance]
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



class ExtAurigaVarietyGizmos {

    constructor() {
        this.funcs = {
            'aurigaShowExternalLedTimeCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'aurigaShowExternalLedTimeCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowExternalLedTimeCodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION},  ${color});
rgbled_${args.PORT}.show();
_delay(${args.TIME});
rgbled_${args.PORT}.setColor(${args.LED_POSTION}, 0, 0, 0);
rgbled_${args.PORT}.show();`
            },
            'auriga_show_external_led_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), [0, 0, 0]));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowExternalLedCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'aurigaShowExternalLedCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowExternalLedCodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION},  ${color});
rgbled_${args.PORT}.show();`
            },
            'auriga_show_external_led': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowExternalLedRgbCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'aurigaShowExternalLedRgbCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowExternalLedRgbCodesCode': (args) => {
                //R
                if ((args.R == "" || args.R == null) || args.R == "None" || (args.R < 0)) {
                    args.R = 0;
                }
                // args.R = parseInt(args.R);
                if (args.R > 255) {
                    args.R = 255;
                }
                //G
                if ((args.G == "" || args.G == null) || args.G == "None" || (args.G < 0)) {
                    args.G = 0;
                }
                // args.G = parseInt(args.G);
                if (args.G > 255) {
                    args.G = 255;
                }
                //B
                if ((args.B == "" || args.B == null) || args.B == "None" || (args.B < 0)) {
                    args.B = 0;
                }
                // args.B = parseInt(args.B);
                if (args.B > 255) {
                    args.B = 255;
                }
                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}.show();`
            },
            'auriga_show_external_led_rgb': {
                onRun: async (args, app, device, block) => {
                    //R
                    if ((args.R == "" || args.R == null) || args.R == "None" || (args.R < 0)) {
                        args.R = 0;
                    }
                    // args.R = parseInt(args.R);
                    if (args.R > 255) {
                        args.R = 255;
                    }
                    //G
                    if ((args.G == "" || args.G == null) || args.G == "None" || (args.G < 0)) {
                        args.G = 0;
                    }
                    // args.G = parseInt(args.G);
                    if (args.G > 255) {
                        args.G = 255;
                    }
                    //B
                    if ((args.B == "" || args.B == null) || args.B == "None" || (args.B < 0)) {
                        args.B = 0;
                    }
                    // args.B = parseInt(args.B);
                    if (args.B > 255) {
                        args.B = 255;
                    }

                    let index = await getIndex()
                    let rgb = [args.R, args.G, args.B];
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaRunServoCodesLib': ['Servo servo_/*{PORT}*/_/*{SLOT}*/;',
                'MePort port_/*{PORT}*/(/*{PORT}*/);'
            ],
            'aurigaRunServoCodesSetup': ['servo_/*{PORT}*/_/*{SLOT}*/.attach(port_/*{PORT}*/.pin/*{SLOT}*/());'],
            'aurigaRunServoCodesCode': (args) => {
                if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                if (args.DEGREE > 180) {
                    args.DEGREE = 180;
                }
                return `
servo_${args.PORT}_${args.SLOT}.write(${args.DEGREE});`
            },
            'auriga_run_servo': {
                onRun: async (args, app, device, block) => {
                    if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                        args.DEGREE = 0;
                    }
                    // args.DEGREE = parseInt(args.DEGREE);
                    if (args.DEGREE > 180) {
                        args.DEGREE = 180;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_servo(index, Number(args.PORT), Number(args.SLOT), Number(args.DEGREE)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShow7SegmentsNumberCodesLib': ['Me7SegmentDisplay seg7_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShow7SegmentsNumberCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }
                if (args.NUMBER < -999) {
                    args.NUMBER = -999;
                } else if (args.NUMBER > 9999) {
                    args.NUMBER = 9999;
                }
                return `
seg7_${args.PORT}.display(float(${args.NUMBER}));`
            },
            'auriga_show_7segments_number': {
                onRun: async (args, app, device, block) => {
                    if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                        args.NUMBER = 0;
                    }
                    if (args.NUMBER < -999) {
                        args.NUMBER = -999;
                    } else if (args.NUMBER > 9999) {
                        args.NUMBER = 9999;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_7segments(index, Number(args.PORT), Number(args.NUMBER)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaEventLimitSwitchCodesLib': ['MeLimitSwitch sw_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'auriga_event_limit_switch': {
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
            }
        };
    }

    getInfo() {
        return {
            "id": "auriga_variety_gizmos",
            "targets": [{
                "name": "auriga",
                "options": {
                    "upload": {
                        "middlewares": [{
                            "name": "arduino",
                            "params": {
                                "sources": extSources.arduino
                            }
                        }]
                    }
                }
            }],
            "codeTypes": [
                "arduinoc"
            ],
            "version": "0.4.2",
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

export default ExtAurigaVarietyGizmos;