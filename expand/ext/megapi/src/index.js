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
    debug: ["megapi.megapi_main"],
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



class ExtMegapi {

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
                        var latest = '0e.01.016';
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL), parseInt(args.X), parseInt(args.Y)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString()));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString(), parseInt(args.X), parseInt(args.Y)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_number(index, parseInt(args.PORT), Number(args.NUMBER)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_time(index, parseInt(args.PORT), Number(args.NUMBER1), Number(args.NUMBER2)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowFaceOffCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'mcoreShowFaceOffCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcore_show_face_off': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultimateForwardTimeCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimateForwardTimeCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < 0) {
                    args.POWER = 0;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);

                if (args.TIME == "None") {
                    args.TIME = 0;
                } else if (Number(args.TIME) < 0) {
                    args.TIME = 0;
                }
                return `
move(1, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(1, 0);`
            },
            'ultimate_forward_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < 0) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);

                    if (isNaN(args.TIME)) {
                        args.TIME = 0;
                    } else if (Number(args.TIME) < 0) {
                        args.TIME = 0;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, -1 * Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultimateBackwardTimeCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimateBackwardTimeCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < 0) {
                    args.POWER = 0;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);

                if (args.TIME == "None") {
                    args.TIME = 0;
                } else if (Number(args.TIME) < 0) {
                    args.TIME = 0;
                }
                return `
move(2, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(2, 0);`
            },
            'ultimate_backward_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < 0) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);

                    if (isNaN(args.TIME)) {
                        args.TIME = 0;
                    } else if (Number(args.TIME) < 0) {
                        args.TIME = 0;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, -1 * Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultimateTurnleftTimeCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimateTurnleftTimeCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < 0) {
                    args.POWER = 0;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);

                if (args.TIME == "None") {
                    args.TIME = 0;
                } else if (Number(args.TIME) < 0) {
                    args.TIME = 0;
                }
                return `
move(3, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(3, 0);`
            },
            'ultimate_turnleft_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < 0) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);

                    if (isNaN(args.TIME)) {
                        args.TIME = 0;
                    } else if (Number(args.TIME) < 0) {
                        args.TIME = 0;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultimateTurnrightTimeCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimateTurnrightTimeCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < 0) {
                    args.POWER = 0;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);

                if (args.TIME == "None") {
                    args.TIME = 0;
                } else if (Number(args.TIME) < 0) {
                    args.TIME = 0;
                }
                return `
move(4, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(4, 0);`
            },
            'ultimate_turnright_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER)) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) < 0) {
                        args.POWER = 0;
                    } else if (Number(args.POWER) > 100) {
                        args.POWER = 100;
                    }
                    args.POWER = parseInt(args.POWER);

                    if (isNaN(args.TIME)) {
                        args.TIME = 0;
                    } else if (Number(args.TIME) < 0) {
                        args.TIME = 0;
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, -1 * Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, -1 * Number(args.POWER) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultimateMoveCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimateMoveCodesCode': (args) => {
                if (args.POWER == "None") {
                    args.POWER = 0;
                } else if (Number(args.POWER) < 0) {
                    args.POWER = 0;
                } else if (Number(args.POWER) > 100) {
                    args.POWER = 100;
                }
                // args.POWER = parseInt(args.POWER);
                return `
move(${args.MOVE_DIRECTION},${args.POWER} / 100.0 * 255);`
            },
            'ultimate_move': {
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
                    if (Number(args.MOVE_DIRECTION) == 1) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, -1 * Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                    } else if (Number(args.MOVE_DIRECTION) == 2) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, -1 * Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                    } else if (Number(args.MOVE_DIRECTION) == 3) {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                    } else {
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, -1 * Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                        await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, -1 * Number(args.POWER) / 100.0 * 255));
                        await device.asyncReadProtocol('ff55', []);
                    }
                    resetIndex(index)
                }
            },
            'ultimateMoveWheelSpeedCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimateMoveWheelSpeedCodesCode': (args) => {
                if (args.POWER_LEFT == "None") {
                    args.POWER_LEFT = 0;
                } else if (Number(args.POWER_LEFT) < -100) {
                    args.POWER_LEFT = -100;
                } else if (Number(args.POWER_LEFT) > 100) {
                    args.POWER_LEFT = 100;
                }
                // args.POWER_LEFT = parseInt(args.POWER_LEFT);

                if (args.POWER_RIGHT == "None") {
                    args.POWER_RIGHT = 0;
                } else if (Number(args.POWER_RIGHT) < -100) {
                    args.POWER_RIGHT = -100;
                } else if (Number(args.POWER_RIGHT) > 100) {
                    args.POWER_RIGHT = 100;
                }
                // args.POWER_RIGHT = parseInt(args.POWER_RIGHT);
                return `
Encoder_1.setTarPWM(${args.POWER_RIGHT} / 100.0 * 255);
Encoder_2.setTarPWM(-1 * (${args.POWER_LEFT} / 100.0 * 255));`
            },
            'ultimate_move_wheel_speed': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER_LEFT)) {
                        args.POWER_LEFT = 0;
                    } else if (Number(args.POWER_LEFT) < -100) {
                        args.POWER_LEFT = -100;
                    } else if (Number(args.POWER_LEFT) > 100) {
                        args.POWER_LEFT = 100;
                    }
                    args.POWER_LEFT = parseInt(args.POWER_LEFT);

                    if (isNaN(args.POWER_RIGHT)) {
                        args.POWER_RIGHT = 0;
                    } else if (Number(args.POWER_RIGHT) < -100) {
                        args.POWER_RIGHT = -100;
                    } else if (Number(args.POWER_RIGHT) > 100) {
                        args.POWER_RIGHT = 100;
                    }
                    args.POWER_RIGHT = parseInt(args.POWER_RIGHT);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, Number(args.POWER_RIGHT) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, -1 * Number(args.POWER_LEFT) / 100.0 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'ultimateMoveStopCodesSetup': ['attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'ultimate_move_stop': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 1, 0));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, 2, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
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
motor_${args.PORT}.run(${args.POWER} / 100.0 * 255);`
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_motor(index, Number(args.PORT), Number(args.POWER) / 100.0 * 255));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_encoder_motor(index, Number(args.PORT), Number(args.POWER) / 100.0 * 255));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.encoder_motor_set_speed(index, Number(args.PORT), Number(args.SPEED)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.encoder_motor_move_to(index, Number(args.PORT), Number(args.DEG), Math.abs(Number(args.SPEED))));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runStepperMotorPosCodesLib': ['MeStepperOnBoard stepper_/*{PORT}*/(/*{PORT}*/);'],
            'runStepperMotorPosCodesSetup': ['stepper_/*{PORT}*/.setMicroStep(16);',
                'stepper_/*{PORT}*/.enableOutputs();'
            ],
            'runStepperMotorPosCodesCode': (args) => {
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
            'run_stepper_motor_pos': {
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
                    //await device.asyncWriteProtocol('ff55', megapiProtocol.run_step_motor(index, Number(args.PORT), Math.abs(Number(args.SPEED)), Number(args.STEP)));
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_step_motor(index, Number(args.PORT), Number(args.STEP), Math.abs(Number(args.SPEED))));
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
            'linefollowerExternalCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'linefollower_external': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let side = Number(args.LINEFOLLOW_STATE);
                    let black_white = Number(args.BLACK_WHITE);
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
                    return black_white ? (side === 0 ? value[0] === 0 : (value[0] & side) == side) : (side === 0 ? value[0] === 3 : (value[0] & side) == 0);
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
                }
            },
            'shutterSetFunCodesLib': ['MeShutter shutter_/*{PORT}*/(/*{PORT}*/);'],
            'shutter_set_fun': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', megapiProtocol.run_shutter(index, Number(args.PORT), Number(args.SHUTTER_ACTION)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.encoder_motor_get_speed(index, Number(args.PORT)));
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
                    await device.asyncWriteProtocol('ff55', megapiProtocol.encoder_motor_get_pos(index, Number(args.PORT)));
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
                'double angle_deg = 180.0/PI;',
                'MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);',
                'MeEncoderOnBoard Encoder_3(SLOT3);',
                'MeEncoderOnBoard Encoder_4(SLOT4);'
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
            "id": "megapi",
            "targets": {
                "device": true,
                "name": "megapi",
                "icon": window.MbApi.getExtResPath('megapi/imgs/17dfca5bd76648a5b72ded9f3bb8c180.png', 'megapi'),
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
                                    "megapi.connect_fail_e3b8aead",
                                    "megapi.connect_fail_0a8e963b",
                                    "megapi.connect_fail_c6b30a1c"
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
                                    "megapi.connect_fail_9a8a4feb",
                                    "megapi.connect_fail_671017f3",
                                    "megapi.connect_fail_aad5f15d",
                                    "megapi.connect_fail_2df5ee83"
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
                                "megapi.upload_fail_c9f06d49",
                                "megapi.upload_fail_3bd7dbc4"
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
                                "megapi.firmware_success_5a28c266"
                            ],
                            "fail": [
                                "megapi.firmware_fail_e4b56cf5"
                            ]
                        },
                        "driver": {
                            "name": "stk500v2"
                        }
                    }
                },
                "firmware": [{
                    "id": "e0a3fed5",
                    "name": "megapi.firmwares_version_e0a3fed5",
                    "version": "0e.01.016",
                    "isDefault": false,
                    "url": {
                        "name": "Firmware_for_MegaPi.hex",
                        "url": window.MbApi.getExtResPath('megapi/res/f163687b11e64ad597cd446ba8122e89.hex', 'megapi')
                    }
                }],
                "settings": [{
                    "text": "megapi.UPDATE_FIRMWARE",
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
                ]
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
                "megapi.megapi_main"
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

export default ExtMegapi;