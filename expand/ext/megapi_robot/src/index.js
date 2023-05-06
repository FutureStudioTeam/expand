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
if (!window.megaPiEngine) {
    window.megaPiEngine = sensorium.createMegaPi();
}
let engine = window.megaPiEngine;
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
let megapiProtocol = {
    show_external_led: (index, port, postion, [r, g, b], slot = 0) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    show_ledstrip: (index, port, slot, postion, [r, g, b]) => [
        ['byte', index], '0244', ['byte', port],
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
    run_car: (index, port, vxpower, vypower, vwpower) => [
        ['byte', index], '0264', ['byte', port],
        ['short', vxpower],
        ['short', vypower],
        ['short', vwpower]
    ],
    run_encoder_motor: (index, port, power) => [
        ['byte', index], '023e03', ['byte', port],
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
        ['byte', index], '023e04', ['byte', port]
    ],
    encoder_motor_get_pos: (index, port) => [
        ['byte', index], '013d00', ['byte', port], '01'
    ],
    encoder_motor_get_speed: (index, port) => [
        ['byte', index], '013d00', ['byte', port], '02'
    ],
    //run_step_motor: (index, port, speed, step) => [['byte', index], '0228', ['byte', port], ['short', speed], ['long', step]],
    run_step_motor: (index, port, step, speed) => [
        ['byte', index], '024c01', ['byte', port],
        ['long', step],
        ['short', speed]
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
    debug: ["megapi_robot.megapi_main"],
    upload: ["event_whenflagclicked", "event_whenkeypressed", "event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait", "control_stop"]
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



class ExtMegapiRobot {

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
                check: (info) => {
                    return new Promise(async function(resolve) {
                        var latest = '47.01.101';
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
            'block1616555651965CodesLib': ['MeNewRGBLed rgbled_/*{PORT}*/(/*{PORT}*/,4);'],
            'block1616555651965CodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'block1616555651965CodesCode': (args) => {
                let out_str = '';
                out_str = args.FACE_PANEL.split("").join(' ');
                return `
rgbled_${args.PORT}.setColor(${args.POS},  ${out_str});
rgbled_${args.PORT}.show();`
            },
            'BLOCK_1616555651965': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'block1617797266050CodesLib': ['MeNewRGBLed rgbled_/*{PORT}*/(/*{PORT}*/,4);'],
            'block1617797266050CodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'block1617797266050CodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                return `
rgbled_${args.PORT}.setColor(${args.POS}, ${color});
rgbled_${args.PORT}.show();`


            },
            'BLOCK_1617797266050': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR);
                    if (Number(args.POS) >= 0 && Number(args.POS) <= 4) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.show_external_led(index, Number(args.PORT), parseInt(args.POS), rgb));
                        await device.asyncReadProtocol('ff55', []);
                    }
                    resetIndex(index)
                }
            },
            'block1617797266243CodesLib': ['MeNewRGBLed rgbled_/*{PORT}*/(/*{PORT}*/,4);'],
            'block1617797266243CodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'block1617797266243CodesCode': (args) => {
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
rgbled_${args.PORT}.setColor(${args.POS}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}.show();`

            },
            'BLOCK_1617797266243': {
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
                    if (Number(args.POS) >= 0 && Number(args.POS) <= 4) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.show_external_led(index, Number(args.PORT), parseInt(args.POS), rgb));
                        await device.asyncReadProtocol('ff55', []);
                    }

                    resetIndex(index)
                }
            },
            'block1617797266441CodesLib': ['MeNewRGBLed rgbled_/*{PORT}*/(/*{PORT}*/,4);'],
            'block1617797266441CodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'block1617797266441CodesCode': (args) => {
                return `
rgbled_${args.PORT}.setColor(${args.POS},  0, 0, 0);
rgbled_${args.PORT}.show();`

            },
            'BLOCK_1617797266441': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = [0, 0, 0];
                    if (Number(args.POS) >= 0 && Number(args.POS) <= 4) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.show_external_led(index, Number(args.PORT), parseInt(args.POS), rgb));
                        await device.asyncReadProtocol('ff55', []);
                    }
                    resetIndex(index)
                }
            },
            'block1617797266298CodesLib': ['MeNewRGBLed rgbled_/*{PORT}*/(/*{PORT}*/,4);'],
            'block1617797266298CodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'block1617797266298CodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                return `
rgbled_${args.PORT}.setColor(0, ${color});
rgbled_${args.PORT}.show();`
            },
            'BLOCK_1617797266298': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_external_led(index, Number(args.PORT), 0, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1617797266352CodesLib': ['MeNewRGBLed rgbled_/*{PORT}*/(/*{PORT}*/,4);'],
            'block1617797266352CodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'block1617797266352CodesCode': (args) => {
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
rgbled_${args.PORT}.setColor(0, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}.show();`

            },
            'BLOCK_1617797266352': {
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_external_led(index, Number(args.PORT), 0, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1616555750567CodesLib': ['MeMegaPiDCMotor motor_/*{PORT}*/(/*{PORT}*/);'],
            'block1616555750567CodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER)
                return `
motor_${args.PORT}.run(${args.POWER} / 100.0 * 255);`
            },
            'BLOCK_1616555750567': {
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(args.PORT), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1616555750670CodesLib': ['MeMegaPiDCMotor motor_/*{PORT1}*/(/*{PORT1}*/);',
                'MeMegaPiDCMotor motor_/*{PORT2}*/(/*{PORT2}*/);'
            ],
            'block1616555750670CodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                let same_port = 0;
                if (args.PORT1 == args.PORT2) {
                    same_port = 1;
                }

                if (same_port) {
                    return `
motor_${args.PORT1}.run(${args.POWER} / 100.0 * 255);`

                } else {
                    return `
motor_${args.PORT1}.run(${args.POWER} / 100.0 * 255);
motor_${args.PORT2}.run(${args.POWER} / 100.0 * 255);`

                }
            },
            'BLOCK_1616555750670': {
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
                    let same_port = 0;
                    if (args.PORT1 == args.PORT2) {
                        same_port = 1;
                    }
                    if (same_port) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(args.PORT1), Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                    } else {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(args.PORT1), Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(args.PORT2), Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                    }
                    resetIndex(index)
                }
            },
            'block1616555750741CodesLib': ['MeMegaPiDCMotor motor_1(1);',
                'MeMegaPiDCMotor motor_9(9);',
                'MeMegaPiDCMotor motor_2(2);',
                'MeMegaPiDCMotor motor_10(10);',
                'MeMegaPiDCMotor motor_3(3);',
                'MeMegaPiDCMotor motor_11(11);',
                'MeMegaPiDCMotor motor_4(4);',
                'MeMegaPiDCMotor motor_12(12);'
            ],
            'block1616555750741CodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < -100) {
                    args.POWER = -100;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
motor_1.run(${args.POWER} / 100.0 * 255);
motor_9.run(${args.POWER} / 100.0 * 255);
motor_2.run(${args.POWER} / 100.0 * 255);
motor_10.run(${args.POWER} / 100.0 * 255);
motor_3.run(${args.POWER} / 100.0 * 255);
motor_11.run(${args.POWER} / 100.0 * 255);
motor_4.run(${args.POWER} / 100.0 * 255);
motor_12.run(${args.POWER} / 100.0 * 255);`
            },
            'BLOCK_1616555750741': {
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(1), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(9), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(2), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(10), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(3), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(11), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(4), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(12), Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1617082946013CodesLib': ['MeMegaPiDCMotor motor_1(1);',
                'MeMegaPiDCMotor motor_9(9);',
                'MeMegaPiDCMotor motor_2(2);',
                'MeMegaPiDCMotor motor_10(10);',
                'MeMegaPiDCMotor motor_3(3);',
                'MeMegaPiDCMotor motor_11(11);',
                'MeMegaPiDCMotor motor_4(4);',
                'MeMegaPiDCMotor motor_12(12);'
            ],
            'block1617082946013CodesCode': (args) => {
                return `
motor_1.run(0);
motor_9.run(0);
motor_2.run(0);
motor_10.run(0);
motor_3.run(0);
motor_11.run(0);
motor_4.run(0);
motor_12.run(0);`
            },
            'BLOCK_1617082946013': {
                onRun: async (args, app, device, block) => {

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(1), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(9), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(2), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(10), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(3), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(11), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(4), 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(12), 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1616747767054CodesLib': ['MeMegaPiDCMotor motor_1(1);',
                'MeMegaPiDCMotor motor_9(9);',
                'MeMegaPiDCMotor motor_2(2);',
                'MeMegaPiDCMotor motor_10(10);'
            ],
            'block1616747767054CodesCode': (args) => {
                let dirction = args.MOVE_DIRECTION;
                if (args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }
                if (dirction == 0) {
                    return `
move_control(0, ${args.POWER} / 100.0 * 255, 0);`
                } else if (dirction == 1) {
                    return `
move_control(0, -${args.POWER} / 100.0 * 255, 0);`
                } else if (dirction == 2) {
                    return `
move_control(-${args.POWER} / 100.0 * 255, 0, 0);`
                } else if (dirction == 3) {
                    return `
move_control(${args.POWER} / 100.0 * 255, 0, 0);`
                }

            },
            'BLOCK_1616747767054': {
                onRun: async (args, app, device, block) => {
                    let dirction = args.MOVE_DIRECTION;
                    if (args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    } else if (args.POWER > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);
                    let index = await getIndex()
                    if (dirction == 0) { //前进
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_car(index, 0, 0, Number(args.POWER) / 100.0 * 255), 0);
                    } else if (dirction == 1) { //后退
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_car(index, 0, 0, Number(-args.POWER) / 100.0 * 255), 0);
                    } else if (dirction == 2) { //左移
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_car(index, 0, Number(-args.POWER) / 100.0 * 255), 0, 0);
                    } else if (dirction == 3) { //右移
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_car(index, 0, Number(args.POWER) / 100.0 * 255), 0, 0);
                    }
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1616748288206CodesLib': ['MeMegaPiDCMotor motor_1(1);',
                'MeMegaPiDCMotor motor_9(9);',
                'MeMegaPiDCMotor motor_2(2);',
                'MeMegaPiDCMotor motor_10(10);'
            ],
            'block1616748288206CodesCode': (args) => {
                if (args.vx == "None") {
                    args.vx = 0;
                } else if (Number(args.vx) < -100) {
                    args.vx = -100;
                } else if (Number(args.vx) > 100) {
                    args.vx = 100;
                }

                if (args.vy == "None") {
                    args.vy = 0;
                } else if (Number(args.vy) < -100) {
                    args.vy = -100;
                } else if (Number(args.vy) > 100) {
                    args.vy = 100;
                }

                if (args.vw == "None") {
                    args.vw = 0;
                } else if (Number(args.vw) < -100) {
                    args.vw = -100;
                } else if (Number(args.vw) > 100) {
                    args.vw = 100;
                }
                return `
move_control(${args.vx} / 100.0 * 255,${args.vy} / 100.0 * 255,${args.vw} / 100.0 * 255);`
            },
            'BLOCK_1616748288206': {
                onRun: async (args, app, device, block) => {
                    if (args.vx == "None") {
                        args.vx = 0;
                    } else if (Number(args.vx) < -100) {
                        args.vx = -100;
                    } else if (Number(args.vx) > 100) {
                        args.vx = 100;
                    }

                    if (args.vy == "None") {
                        args.vy = 0;
                    } else if (Number(args.vy) < -100) {
                        args.vy = -100;
                    } else if (Number(args.vy) > 100) {
                        args.vy = 100;
                    }

                    if (args.vw == "None") {
                        args.vw = 0;
                    } else if (Number(args.vw) < -100) {
                        args.vw = -100;
                    } else if (Number(args.vw) > 100) {
                        args.vw = 100;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_car(index, 0, Number(args.vx) / 100.0 * 255, Number(args.vy) / 100.0 * 255, Number(args.vw) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1616555666950CodesLib': ['MeBarrierSensor barrier_/*{PORT}*/(/*{PORT}*/);'],
            'BLOCK_1616555666950': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0146', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return !value[0];
                }
            },
            'block1616555667136CodesLib': ['MeSingleLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'BLOCK_1616555667136': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let black_white = Number(args.COLOR);
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0144', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }

                    if (black_white) {
                        return !!value[0];
                    } else {
                        return !value[0];
                    }

                }
            },
            'block1616555667069CodesLib': ['MeCollisionSensor collision_/*{PORT}*/(/*{PORT}*/);'],
            'BLOCK_1616555667069': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0145', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return !value[0];
                }
            },
            'detectTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'detectTimerCodesDeclare': [
                `double getLastTime() {
  return currentTime = millis()/1000.0 - lastTime;
}`
            ],
            'detect_timer': {
                onRun: async (args, app, device, block) => {
                    return (((new Date()).getTime() - lastTime) / 1000).toFixed(3);
                }
            },
            'resetTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'reset_timer': {
                onRun: async (args, app, device, block) => {
                    lastTime = new Date().getTime();
                }
            },
            'megapiMainCodesLib': ['double angle_rad = PI/180.0;',
                'double angle_deg = 180.0/PI;'
            ],
            'megapiMainCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);'
            ],
            'megapi_main': {
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
            'proceduresDefinitionCodesDeclare': [`void /*{$PROC_CODE}*/{
  /*{$BRANCH}*/
}`, 0]
        };
    }

    getInfo() {
        return {
            "id": "megapi_robot",
            "targets": {
                "device": true,
                "name": "megapi_robot",
                "icon": window.MbApi.getExtResPath('megapi_robot/imgs/80d0de0d8bdc49cda92cbebcc5112f33.png', 'megapi_robot'),
                "enableCode": true,
                "enableUpload": [
                    "serialport"
                ],
                "enableOnline": [
                    "serialport"
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
                                    "megapi_robot.connect_fail_e3b8aead",
                                    "megapi_robot.connect_fail_0a8e963b",
                                    "megapi_robot.connect_fail_c6b30a1c"
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
                                    "megapi_robot.connect_fail_9a8a4feb",
                                    "megapi_robot.connect_fail_671017f3",
                                    "megapi_robot.connect_fail_aad5f15d",
                                    "megapi_robot.connect_fail_2df5ee83"
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
                                "megapi_robot.upload_fail_c9f06d49",
                                "megapi_robot.upload_fail_3bd7dbc4"
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
                                "megapi_robot.firmware_success_5a28c266"
                            ],
                            "fail": [
                                "megapi_robot.firmware_fail_e4b56cf5"
                            ]
                        },
                        "driver": {
                            "name": "stk500v2"
                        }
                    }
                },
                "firmware": [{
                        "id": "e0a3fed5",
                        "name": "megapi_robot.firmwares_version_e0a3fed5",
                        "version": "47.01.101",
                        "isDefault": false,
                        "url": {
                            "name": "Firmware_for_mBot_mega_online.ino.mega.hex",
                            "url": window.MbApi.getExtResPath('megapi_robot/res/dbca654e29934f6ca930ee0024d3dc54.hex', 'megapi_robot')
                        }
                    },
                    {
                        "id": "625bba0b",
                        "name": "megapi_robot.firmwares_version_625bba0b",
                        "version": "47.01.002",
                        "isDefault": false,
                        "url": {
                            "name": "Firmware_for_mBot_mega.ino.mega.hex",
                            "url": window.MbApi.getExtResPath('megapi_robot/res/17b0215b4d94470db3d3bdf6afd1ba8e.hex', 'megapi_robot')
                        }
                    }
                ],
                "settings": [{
                    "text": "megapi_robot.UPDATE_FIRMWARE",
                    "handle": this.funcs.firmwareSettingHandle
                }],
                "categoriesOrder": [
                    "display",
                    "power",
                    "sensing",
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
                "arduinoc"
            ],
            "version": "1.0.5",
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
                "megapi_main"
            ],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [
                "event_whenflagclicked",
                "event_whenkeypressed",
                "event_whenbroadcastreceived",
                "event_broadcast",
                "event_broadcastandwait",
                "control_stop"
            ],
            "disabledOnline": [
                "megapi_robot.megapi_main"
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

export default ExtMegapiRobot;