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

import Sensorium from 'exts/common/sensorium';
const sensorium = new Sensorium();
if (!window.mcoreEngine) {
    window.mcoreEngine = sensorium.createMcore();
}
let engine = window.mcoreEngine;
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
let mbotProtocol = {
    move: (index, leftspeed, rightspeed) => [
        ['byte', index], '0205', ['short', leftspeed],
        ['short', rightspeed]
    ],
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
    show_led: (index, postion, [r, g, b], port = 7, slot = 2) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    sound_play: (index, hz, time) => [
        ['byte', index], '0222', ['short', hz],
        ['short', time]
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
    ]
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
    debug: ["mcore.mcore_when_board_launch"],
    upload: ["event_whenflagclicked", "event_whenkeypressed", "mcore.mcore_when_board_button", "event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait", "control_stop", "data_showvariable", "data_hidevariable", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"]
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



class ExtMcore {

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
                check: () => {
                    return new Promise(async function(resolve) {
                        var latest = '06.01.107';
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
                if (args.TIME == "None" || (args.TIME < 0)) {
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShowPointPositionCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'mcoreShowPointPositionCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'mcoreShowPointPositionCodesCode': (args) => {
                if ((args.X == "" || args.X == null) || args.X == "None") {
                    args.X = 0;
                }
                if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                    args.Y = 0;
                }
                return `
drawTemp = new unsigned char[16]{128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.drawBitmap(${args.X}, ${args.Y}, 1, drawBuffer);`
            },
            'mcore_show_point_position': {
                onRun: async (args, app, device, block) => {
                    const POINT_DATA = [128];
                    if (isNaN(args.X)) {
                        args.X = 0;
                    }
                    args.X = parseInt(args.X);
                    if (isNaN(args.Y)) {
                        args.Y = 0;
                    }
                    args.Y = parseInt(args.Y);

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), POINT_DATA, parseInt(Number(args.X)), parseInt(Number(args.Y))));
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL), parseInt(Number(args.X)), parseInt(Number(args.Y))));
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString()));
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString(), parseInt(args.X), parseInt(args.Y)));
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_number(index, parseInt(args.PORT), Number(args.NUMBER)));
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
                if (args.NUMBER2 == "None") {
                    args.NUMBER2 = 0;
                } else if (Number(args.NUMBER2) < 0) {
                    args.NUMBER2 = 0;
                } else if (Number(args.NUMBER2) > 99) {
                    args.NUMBER2 = 99;
                }
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_time(index, parseInt(args.PORT), Number(args.NUMBER1), Number(args.NUMBER2)));
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
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreShow7SegmentsNumberCodesDeclare': ['Me7SegmentDisplay seg7_/*{PORT}*/(/*{PORT}*/);'],
            'mcore_show_7segments_number': {
                onRun: async (args, app, device, block) => {
                    await engine.SevenSegment(Number(args.PORT))
                        .number(Number(args.NUMBER))
                        .runAwait()
                }
            },
            'mcoreShowLedTimeCodesLib': ['MeRGBLed rgbled_7(7, 2);'],
            'mcoreShowLedTimeCodesSetup': ['rgbled_7.fillPixelsBak(0, 2, 1);'],
            'mcoreShowLedTimeCodesCode': (args) => {
                const color = formatColorData(args.COLOR);

                if (args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
rgbled_7.setColor(${args.LED_POSTION},${color});
rgbled_7.show();
_delay(${args.TIME});
rgbled_7.setColor(${args.LED_POSTION},0,0,0);
rgbled_7.show();`
            },
            'mcore_show_led_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex();
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_led(index, args.LED_POSTION, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_led(index, args.LED_POSTION, [0, 0, 0]));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'mcoreShowLedCodesLib': ['MeRGBLed rgbled_7(7, 2);'],
            'mcoreShowLedCodesSetup': ['rgbled_7.fillPixelsBak(0, 2, 1);'],
            'mcoreShowLedCodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                return `
rgbled_7.setColor(${args.LED_POSTION},${color});
rgbled_7.show();`
            },
            'mcore_show_led': {
                onRun: async (args, app, device, block) => {
                    if ((args.TIME == "" || args.TIME == null) || isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex();
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_led(index, args.LED_POSTION, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'mcoreShowLedRgbCodesLib': ['MeRGBLed rgbled_7(7, 2);'],
            'mcoreShowLedRgbCodesSetup': ['rgbled_7.fillPixelsBak(0, 2, 1);'],
            'mcoreShowLedRgbCodesCode': (args) => {
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
rgbled_7.setColor(${args.LED_POSTION}, ${args.R}, ${args.G}, ${args.B});
rgbled_7.show();`
            },
            'mcore_show_led_rgb': {
                onRun: async (args, app, device, block) => {
                    //R
                    if (isNaN(args.R) || (args.R < 0)) {
                        args.R = 0;
                    }
                    args.R = parseInt(args.R);
                    if (args.R > 255) {
                        args.R = 255;
                    }
                    //G
                    if (isNaN(args.G) || (args.G < 0)) {
                        args.G = 0;
                    }
                    args.G = parseInt(args.G);
                    if (args.G > 255) {
                        args.G = 255;
                    }
                    //B
                    if (isNaN(args.B) || (args.B < 0)) {
                        args.B = 0;
                    }
                    args.B = parseInt(args.B);
                    if (args.B > 255) {
                        args.B = 255;
                    }
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', mbotProtocol.show_led(index, args.LED_POSTION, [args.R, args.G, args.B]));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'mcoreSoundPlayNoteCodesLib': ['MeBuzzer buzzer;'],
            'mcoreSoundPlayNoteCodesCode': (args) => {
                if (args.BEAT == "None" || (args.BEAT < 0)) {
                    args.BEAT = 0;
                }
                return `
buzzer.tone(${args.NOTE}, ${args.BEAT} * 1000);
_delay(0.02);`
            },
            'mcore_sound_play_note': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.BEAT) || (args.BEAT < 0)) {
                        args.BEAT = 0;
                    }

                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', mbotProtocol.sound_play(index, Number(args.NOTE), Number(args.BEAT) * 1000));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'mcoreSoundPlayHzCodesLib': ['MeBuzzer buzzer;'],
            'mcoreSoundPlayHzCodesCode': (args) => {
                if (args.HZ == "None" || (args.HZ < 20) || (args.HZ > 20000)) {
                    args.HZ = 0;
                }

                if (args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
buzzer.tone(${args.HZ}, ${args.TIME} * 1000);`
            },
            'mcore_sound_play_hz': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.HZ) || (args.HZ < 20) || (args.HZ > 20000)) {
                        args.HZ = 0;
                    }
                    args.HZ = parseInt(args.HZ);

                    if (isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', mbotProtocol.sound_play(index, Number(args.HZ), Number(args.TIME) * 1000));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'mcore_show_external_led_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.TIME) || Number(args.TIME) <= 0) {
                        return
                    }
                    let duration = Number(args.TIME)
                    await engine.FourLeds(Number(args.PORT))
                        .position(Number(args.LED_POSTION))
                        .rgb(args.COLOR)
                        .runAwait(duration * 1000)
                    await engine.FourLeds(Number(args.PORT))
                        .position(Number(args.LED_POSTION))
                        .rgb('#000000')
                        .runAwait()
                }
            },
            'mcore_show_external_led': {
                onRun: async (args, app, device, block) => {
                    await engine.FourLeds(Number(args.PORT))
                        .position(Number(args.LED_POSTION))
                        .rgb(args.COLOR)
                        .runAwait();
                }
            },
            'mcore_show_external_led_rgb': {
                onRun: async (args, app, device, block) => {
                    await engine.FourLeds(Number(args.PORT))
                        .position(Number(args.LED_POSTION))
                        .r(Number(args.R))
                        .g(Number(args.G))
                        .b(Number(args.B))
                        .runAwait();
                }
            },
            'mcore_show_all_ledstrip_color': {
                onRun: async (args, app, device, block) => {
                    await engine.RgbLed(Number(args.PORT), Number(args.SLOT))
                        .position(0)
                        .rgb(args.COLOR_LIST).runAwait();
                }
            },
            'mcore_show_ledstrip_color': {
                onRun: async (args, app, device, block) => {
                    if (Number(args.POS) < 0) return;
                    await engine.RgbLed(Number(args.PORT), Number(args.SLOT))
                        .position(Number(args.POS))
                        .rgb(args.COLOR_LIST).runAwait();
                }
            },
            'mcore_show_ledstrip_rbg': {
                onRun: async (args, app, device, block) => {
                    if (Number(args.POS) < 0) return;
                    await engine.RgbLed(Number(args.PORT), Number(args.SLOT))
                        .position(Number(args.POS))
                        .r(Number(args.R))
                        .g(Number(args.G))
                        .b(Number(args.B))
                        .runAwait();
                }
            },
            'mcoreForwardTimeCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcoreForwardTimeCodesDeclare': [
                `void move(int direction, int speed) {
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1) {
    leftSpeed = speed;
    rightSpeed = speed;
  } else if(direction == 2) {
    leftSpeed = -speed;
    rightSpeed = -speed;
  } else if(direction == 3) {
    leftSpeed = -speed;
    rightSpeed = speed;
  } else if(direction == 4) {
    leftSpeed = speed;
    rightSpeed = -speed;
  }
  motor_9.run((9) == M1 ? -(leftSpeed) : (leftSpeed));
  motor_10.run((10) == M1 ? -(rightSpeed) : (rightSpeed));
}`
            ],
            'mcoreForwardTimeCodesCode': (args) => {
                if (args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if (args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(1, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(1, 0);`
            },
            'mcore_forward_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER) || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if (isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 0;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreBackwardTimeCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcoreBackwardTimeCodesDeclare': [
                `void move(int direction, int speed) {
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1) {
    leftSpeed = speed;
    rightSpeed = speed;
  } else if(direction == 2) {
    leftSpeed = -speed;
    rightSpeed = -speed;
  } else if(direction == 3) {
    leftSpeed = -speed;
    rightSpeed = speed;
  } else if(direction == 4) {
    leftSpeed = speed;
    rightSpeed = -speed;
  }
  motor_9.run((9) == M1 ? -(leftSpeed) : (leftSpeed));
  motor_10.run((10) == M1 ? -(rightSpeed) : (rightSpeed));
}`
            ],
            'mcoreBackwardTimeCodesCode': (args) => {
                if (args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if (args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(2, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(2, 0);`
            },
            'mcore_backward_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER) || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if (isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 1;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'mcoreTurnleftTimeCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcoreTurnleftTimeCodesDeclare': [
                `void move(int direction, int speed) {
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1) {
    leftSpeed = speed;
    rightSpeed = speed;
  } else if(direction == 2) {
    leftSpeed = -speed;
    rightSpeed = -speed;
  } else if(direction == 3) {
    leftSpeed = -speed;
    rightSpeed = speed;
  } else if(direction == 4) {
    leftSpeed = speed;
    rightSpeed = -speed;
  }
  motor_9.run((9) == M1 ? -(leftSpeed) : (leftSpeed));
  motor_10.run((10) == M1 ? -(rightSpeed) : (rightSpeed));
}`
            ],
            'mcoreTurnleftTimeCodesCode': (args) => {
                if (args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if (args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(3, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(3, 0);`
            },
            'mcore_turnleft_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER) || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if (isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 2;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreTurnrightTimeCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcoreTurnrightTimeCodesDeclare': [
                `void move(int direction, int speed) {
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1) {
    leftSpeed = speed;
    rightSpeed = speed;
  } else if(direction == 2) {
    leftSpeed = -speed;
    rightSpeed = -speed;
  } else if(direction == 3) {
    leftSpeed = -speed;
    rightSpeed = speed;
  } else if(direction == 4) {
    leftSpeed = speed;
    rightSpeed = -speed;
  }
  motor_9.run((9) == M1 ? -(leftSpeed) : (leftSpeed));
  motor_10.run((10) == M1 ? -(rightSpeed) : (rightSpeed));
}`
            ],
            'mcoreTurnrightTimeCodesCode': (args) => {
                if (args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if (args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(4, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(4, 0);`
            },
            'mcore_turnright_time': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER) || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if (isNaN(args.TIME) || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 3;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreMoveCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcoreMoveCodesDeclare': [
                `void move(int direction, int speed) {
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1) {
    leftSpeed = speed;
    rightSpeed = speed;
  } else if(direction == 2) {
    leftSpeed = -speed;
    rightSpeed = -speed;
  } else if(direction == 3) {
    leftSpeed = -speed;
    rightSpeed = speed;
  } else if(direction == 4) {
    leftSpeed = speed;
    rightSpeed = -speed;
  }
  motor_9.run((9) == M1 ? -(leftSpeed) : (leftSpeed));
  motor_10.run((10) == M1 ? -(rightSpeed) : (rightSpeed));
}`
            ],
            'mcoreMoveCodesCode': (args) => {
                if (args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }
                return `
move(${args.MOVE_DIRECTION}, ${args.POWER} / 100.0 * 255);`
            },
            'mcore_move': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER) || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    let direction = Number(args.MOVE_DIRECTION) - 1;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreMoveWheelSpeedCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcoreMoveWheelSpeedCodesCode': (args) => {
                if (args.POWER_LEFT == "None") {
                    args.POWER_LEFT = 0;
                }

                if (args.POWER_LEFT < -100) {
                    args.POWER_LEFT = -100;
                } else if (args.POWER_LEFT > 100) {
                    args.POWER_LEFT = 100;
                }

                if (args.POWER_RIGHT == "None") {
                    args.POWER_RIGHT = 0;
                }

                if (args.POWER_RIGHT < -100) {
                    args.POWER_RIGHT = -100;
                } else if (args.POWER_RIGHT > 100) {
                    args.POWER_RIGHT = 100;
                }
                return `
motor_9.run(-1 * ${args.POWER_LEFT}/100.0*255);
motor_10.run(${args.POWER_RIGHT}/100.0*255);`
            },
            'mcore_move_wheel_speed': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.POWER_LEFT)) {
                        args.POWER_LEFT = 0;
                    }
                    args.POWER_LEFT = parseInt(args.POWER_LEFT);
                    if (args.POWER_LEFT < -100) {
                        args.POWER_LEFT = -100;
                    } else if (args.POWER_LEFT > 100) {
                        args.POWER_LEFT = 100;
                    }

                    if (isNaN(args.POWER_RIGHT)) {
                        args.POWER_RIGHT = 0;
                    }
                    args.POWER_RIGHT = parseInt(args.POWER_RIGHT);
                    if (args.POWER_RIGHT < -100) {
                        args.POWER_RIGHT = -100;
                    } else if (args.POWER_RIGHT > 100) {
                        args.POWER_RIGHT = 100;
                    }

                    let leftSpeed = Number(args.POWER_LEFT) / 100 * 255;
                    let rightSpeed = Number(args.POWER_RIGHT) / 100 * 255;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, -1 * leftSpeed, rightSpeed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreMoveStopCodesLib': ['MeDCMotor motor_9(9);',
                'MeDCMotor motor_10(10);'
            ],
            'mcore_move_stop': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', mbotProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcore_run_shutter': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let actionID = Number(args.SHUTTER_ACTION);
                    await engine.Shutter(port)
                        .action(actionID)
                        .runAwait();
                }
            },
            'mcore_run_motor': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let direction = Number(args.ROTATE);
                    let speed = Number(args.POWER) / 100 * 255;
                    await engine.DcMotor(port)
                        .speed(direction * speed)
                        .runAwait();
                }
            },
            'mcoreRunServoCodesDeclare': ['Servo servo_/*{PORT}*/_/*{SLOT}*/;',
                'MePort port_/*{PORT}*/(/*{PORT}*/);'
            ],
            'mcore_run_servo': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let slot = Number(args.SLOT);
                    let degree = Number(args.DEGREE);
                    await engine.ServoMotor(port, slot)
                        .angle(degree)
                        .runAwait();
                }
            },
            'mcoreRunFanCodesDeclare': ['MePort dc130_/*{PORT}*/(/*{PORT}*/);',
                `void dc130_run(MePort dc130, int8_t direction) {
  pinMode(dc130.pin1(), OUTPUT);
  pinMode(dc130.pin2(), OUTPUT);
  if(direction > 0) {
    digitalWrite(dc130.pin2(), 0);
    digitalWrite(dc130.pin1(), 1);
  } else if(direction < 0) {
    digitalWrite(dc130.pin1(), 0);
    digitalWrite(dc130.pin2(), 1);
  } else {
    digitalWrite(dc130.pin1(), 0);
    digitalWrite(dc130.pin2(), 0);
  }
}`
            ],
            'mcore_run_fan': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let dirMap = {
                        '1': -1,
                        '-1': 0,
                        '0': 1
                    }
                    let direction = dirMap[args.FAN_ROTATE];
                    await engine.DcMotor(port)
                        .speed(direction * 255)
                        .runAwait();
                }
            },
            'mcoreDetectExternalLightCodesLib': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'mcore_detect_external_light': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0103', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [
                        ['byte', index], '02', 'float'
                    ]);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'mcoreDetectExternalUltrasonicCodesLib': ['MeUltrasonicSensor ultrasonic_/*{PORT}*/(/*{PORT}*/);'],
            'mcore_detect_external_ultrasonic': {
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
                }
            },
            'mcoreDetectExternalLinefollowerCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'mcore_detect_external_linefollower': {
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
                }
            },
            'mcoreEventExternalLinefollowerCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'mcore_event_external_linefollower': {
                onRun: async (args, app, device, block) => {
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
                        return false;
                    }
                    return black_white ? (side === 0 ? value[0] === 0 : (value[0] & side) == side) : (side === 0 ? value[0] === 3 : (value[0] & side) == 0);
                }
            },
            'mcore_event_board_button_pressed': {
                onRun: async (args, app, device, block) => {
                    let options = {
                        1: 0,
                        0: 1
                    }
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '012307', ['byte', Number(args.OPTION)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return false;
                    }
                    return value[0];
                }
            },
            'mcoreEventIrRemoteCodesLib': ['MeIR ir;'],
            'mcoreEventIrRemoteCodesSetup': ['ir.begin();'],
            'mcore_event_ir_remote': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010e', ['byte', 0],
                        ['byte', Number(args.REMOTE_KEY)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0] > 0;
                }
            },
            'mcoreSendIrCodesLib': ['MeIR ir;'],
            'mcoreSendIrCodesSetup': ['ir.begin();'],
            'mcore_send_ir': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '020d', ['string', args.MESSAGE]
                    ]);
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'mcoreDetectIrCodesLib': ['MeIR ir;'],
            'mcoreDetectIrCodesSetup': ['ir.begin();'],
            'mcore_detect_ir': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010d'
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}04`, 'string']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'mcoreDetectTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'mcoreDetectTimerCodesDeclare': [
                `double getLastTime(){
  return currentTime = millis() / 1000.0 - lastTime;
}`
            ],
            'mcore_detect_timer': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return (((new Date()).getTime() - lastTime) / 1000).toFixed(3);
                }
            },
            'mcoreResetTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'mcore_reset_timer': {
                onRun: (args, app, device, block) => {
                    lastTime = (new Date()).getTime();
                }
            },
            'mcore_detect_external_loudness': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let soundMixer = engine.Sound(port);
                    return await soundMixer.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detec_temperature': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let slot = Number(args.SLOT);
                    let temperature = engine.Temperature(port, slot);
                    return await temperature.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_humiture': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let humtem = args.TEMP_HUMITURE;
                    let humidity = engine.Humiture(port);
                    let result;
                    if (humtem === '1') {
                        result = humidity.readTemperature.bind(humidity);
                    } else if (humtem === '0') {
                        result = humidity.readHumidity.bind(humidity);
                    }
                    return await result().getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_event_touch': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let touch = engine.Touch(port);
                    return await touch.getData().then(val => val > 0);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_compass': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let compass = engine.Compass(port);
                    return await compass.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_flame': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let flame = engine.Flame(port);
                    return await flame.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_gas': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let gas = engine.Gas(port);
                    return await gas.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_gyro_angle': {
                onRun: async (args, app, device, block) => {
                    let axis = Number(args.AXIS);
                    let gyro = engine.Gyro();
                    return await gyro.axis(axis).getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_event_pir_motion': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let pir = engine.Pirmotion(port);
                    return await pir.getData().then(val => val > 0);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_event_button_press': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let key = Number(args.FOUR_KEY);
                    let fourKeys = engine.FourKeys(port);
                    fourKeys.key(key);
                    return await fourKeys.getData().then(val => val > 0);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_event_limit_switch': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let slot = Number(args.SLOT);
                    let limitSwitch = engine.LimitSwitch(port, slot);
                    let value = await limitSwitch.getData().then(val => val > 0);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_potentiometer': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let potentiometer = engine.Potentionmeter(port);
                    return await potentiometer.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_joystick': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let axis = Number(args.AXIS_X_Y);
                    let joystick = engine.Joystick(port);
                    joystick.axis(axis);
                    return await joystick.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_detect_infrared': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let infrared = engine.Infrared(port);
                    return await infrared.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_event_linefollower': {
                onRun: async (args, app, device, block) => {
                    let value = await engine.LineFollower(2).getData();
                    return value === 0;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcoreEventObstacleCodesDeclare': ['MeUltrasonicSensor ultrasonic_3(3);'],
            'mcore_event_obstacle': {
                onRun: async (args, app, device, block) => {
                    let ultrasonic = engine.Ultrasonic(3);
                    let value = await ultrasonic.getData();
                    return value < 20;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcoreDetectObstacleDistanceCodesDeclare': ['MeUltrasonicSensor ultrasonic_3(3);'],
            'mcore_detect_obstacle_distance': {
                onRun: async (args, app, device, block) => {
                    let ultrasonic = engine.Ultrasonic(3);
                    let value = await ultrasonic.getData();
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcoreDetectLightCodesDeclare': ['MeLightSensor lightsensor_6(6);'],
            'mcore_detect_light': {
                onRun: async (args, app, device, block) => {
                    let LightOnBoard = engine.LightOnBoard();
                    return LightOnBoard.getData();
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_when_board_launch': {
                onRun: (app, device, block) => {
                    // TODO
                },
                onAdd: (app, device, block) => {
                    // TODO
                },
                onRemove: (app, device, block) => {
                    // TODO
                }
            },
            'mcore_when_board_button': {
                onRun: (args, app, device, block) => {
                    if (args.IS_PRESS === '0') {
                        return isBoardButtonPressed;
                    } else {
                        return !isBoardButtonPressed;
                    }
                },
                onAdd: (app, device, block) => {
                    this.intervalT = setInterval(() => {
                        engine.ButtonOnBoard()
                            .checkPressed()
                            .getData()
                            .then(val => {
                                val = Boolean(val);
                                if (val !== isBoardButtonPressed) {
                                    isBoardButtonPressed = val;
                                    app.workspace.runBlocks(block.opcode);
                                }
                            });
                    }, 500);
                },
                onRemove: (app, device, block) => {
                    // TODO
                    clearInterval(this.intervalT);
                }
            },
            'proceduresDefinitionCodesDeclare': [`void /*{$PROC_CODE}*/{
  /*{$BRANCH}*/
}`, 0]
        };
    }

    getInfo() {
        return {
            "id": "mcore",
            "targets": {
                "device": true,
                "name": "mcore",
                "icon": window.MbApi.getExtResPath('mcore/imgs/31e8bc3eec1e4c45b359d979c5f5b79a.png', 'mcore'),
                "enableCode": true,
                "enableUpload": [
                    "serialport"
                ],
                "enableOnline": [
                    "ble",
                    "serialport",
                    "24g"
                ],
                "shouldConnect": [
                    "serialport",
                    "ble",
                    "24g"
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
                                    "mcore.connect_fail_2a0b1f15",
                                    "mcore.connect_fail_488c674d",
                                    "mcore.connect_fail_0adf83ae"
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
                                    "mcore.connect_fail_9a020618",
                                    "mcore.connect_fail_f0f225df",
                                    "mcore.connect_fail_3d459770",
                                    "mcore.connect_fail_13e00731"
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
                            },
                            "vendorId": "0x0416",
                            "productId": "0xffff"
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
                                "fail": [
                                    "mcore.connect_fail_4f0e9760",
                                    "mcore.connect_fail_e6e51d02",
                                    "mcore.connect_fail_dc54eaae",
                                    "mcore.connect_fail_7c45be19"
                                ]
                            },
                            "vendorId": "0x0416",
                            "productId": "0xffff"
                        }
                    },
                    "upload": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                ""
                            ],
                            "fail": [
                                "mcore.upload_fail_fded06b5",
                                "mcore.upload_fail_17773a37"
                            ]
                        },
                        "middlewares": [{
                            "name": "arduino",
                            "params": {
                                "board": "uno",
                                "sources": extSources.arduino
                            }
                        }],
                        "driver": {
                            "name": "stk500v1"
                        }
                    },
                    "firmware": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                "mcore.firmware_success_ddc56406"
                            ],
                            "fail": [
                                "mcore.firmware_fail_f1b7513c"
                            ]
                        },
                        "driver": {
                            "name": "stk500v1"
                        }
                    }
                },
                "firmware": [{
                        "id": "0",
                        "name": "mcore.firmwares_version_0",
                        "version": "06.01.107",
                        "url": {
                            "name": "mbot.hex",
                            "url": window.MbApi.getExtResPath('mcore/res/96baf280bdcf4a79a49a1942e2c4b229.hex', 'mcore')
                        },
                        "isDefault": false
                    },
                    {
                        "id": "73cf5917",
                        "name": "mcore.firmwares_version_73cf5917",
                        "version": "06.01.009",
                        "url": {
                            "name": "mbot_reset.hex",
                            "url": window.MbApi.getExtResPath('mcore/res/54ebb9e638a1492bac15b1aa95bee499.hex', 'mcore')
                        },
                        "isDefault": false
                    }
                ],
                "settings": [{
                    "text": "mcore.UPDATE_FIRMWARE",
                    "handle": this.funcs.firmwareSettingHandle
                }],
                "categoriesOrder": [
                    "CATEGORY_SHOW",
                    "CATEGORY_LIGHT",
                    "CATEGORY_ACTION",
                    "CATEGORY_SENSOR",
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
            "version": "0.4.0",
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
                "event_whenthisspriteclicked",
                "event_whenbackdropswitchesto",
                "event_whengreaterthan",
                "control_start_as_clone",
                "control_create_clone_of",
                "control_delete_this_clone"
            ],
            "generatorStartBlocks": [
                "mcore_when_board_launch"
            ],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [
                "event_whenflagclicked",
                "event_whenkeypressed",
                "mcore.mcore_when_board_button",
                "event_whenbroadcastreceived",
                "event_broadcast",
                "event_broadcastandwait",
                "control_stop",
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
                "mcore.mcore_when_board_launch"
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

export default ExtMcore;