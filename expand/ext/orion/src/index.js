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
if (!window.orionEngine) {
    window.orionEngine = sensorium.createOrion();
}
let engine = window.orionEngine;
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
let orionProtocol = {
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
    run_stepper_motor: (index, port, speed, distance) => [
        ['byte', index], '0228', ['byte', port],
        ['short', speed],
        ['long', distance]
    ],
    run_step_motor: (index, port, step, speed) => [
        ['byte', index], '024c01', ['byte', port],
        ['long', step],
        ['short', speed]
    ],
    run_board_encoder_motor_pos: (index, slot, degree, speed) => [
        ['byte', index], '023e01', ['byte', slot],
        ['long', degree],
        ['short', speed]
    ],
    run_encoder_motor_pos: (index, slot, speed, degree) => [
        ['byte', index], '020c08', ['byte', slot],
        ['short', speed],
        ['float', degree]
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
    debug: ["orion.getInfrared", "orion.runArduino"],
    upload: ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait", "event_whenflagclicked", "event_whenkeypressed", "control_stop", "data_showvariable", "data_hidevariable", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"]
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



class ExtOrion {

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
                check: (app) => {

                    const showImageDialog = async () => {
                        const service = app.getService('system.ui');
                        const title = 'orion.update_firmware_prompt';
                        const dialog = await service.dialog('color', {
                            title: title,
                            width: '400px',
                            fields: [{
                                    id: 'port',
                                    type: 'image',
                                    value: 'https://mblock-expanded.oss-cn-shenzhen.aliyuncs.com/f6689926b3b34c3ea3695940c991627a.png'
                                },

                            ]
                        });
                    };
                    return new Promise(async function(resolve) {
                        var latest = '0a.01.106';
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
                                if (shouldUpdate === true) {
                                    showImageDialog();
                                }
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
                                if (shouldUpdate === true) {
                                    showImageDialog();
                                }
                                resolve(shouldUpdate);
                                clearInterval(interval);
                                return;
                            }
                        }, 800);
                    });
                }
            }),
            'runSevsegCodesLib': ['Me7SegmentDisplay seg7_/*{bluePorts}*/(/*{bluePorts}*/);'],
            'runSevsegCodesCode': (args) => {
                if (args.args0 == "None") {
                    args.args0 = 0;
                }
                if (args.args0 < -999) {
                    args.args0 = -999;
                } else if (args.args0 > 9999) {
                    args.args0 = 9999;
                }
                return `
seg7_${args.bluePorts}.display(float(${args.args0}));`
            },
            'runSevseg': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.args0)) {
                        args.args0 = 0;
                    }
                    if (args.args0 < -999) {
                        args.args0 = -999;
                    } else if (args.args0 > 9999) {
                        args.args0 = 9999;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_7segments(index, Number(args.bluePorts), Number(args.args0)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runLedCodesLib': ['MeRGBLed rgbled_/*{lport}*/(/*{lport}*/, 4);'],
            'runLedCodesSetup': ['rgbled_/*{lport}*/.fillPixelsBak(0, 2, 1);'],
            'runLedCodesCode': (args) => {
                const color = formatColorData(args.color);
                return `
rgbled_${args.lport}.setColor(${args.index},  ${color});
rgbled_${args.lport}.show();`
            },
            'runLed': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.color);
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_external_led(index, Number(args.lport), Number(args.index), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1569571656649CodesLib': ['MeRGBLed rgbled_/*{lport}*/(/*{lport}*/, 4);'],
            'block1569571656649CodesSetup': ['rgbled_/*{lport}*/.fillPixelsBak(0, 2, 1);'],
            'block1569571656649CodesCode': (args) => {
                if (args.value == "None") {
                    args.value = 0;
                } else if (Number(args.value) < 0) {
                    args.value = 0;
                } else if (Number(args.value) > 255) {
                    args.value = 255;
                }

                if (args.value1 == "None") {
                    args.value1 = 0;
                } else if (Number(args.value1) < 0) {
                    args.value1 = 0;
                } else if (Number(args.value1) > 255) {
                    args.value1 = 255;
                }

                if (args.value2 == "None") {
                    args.value2 = 0;
                } else if (Number(args.value2) < 0) {
                    args.value2 = 0;
                } else if (Number(args.value2) > 255) {
                    args.value2 = 255;
                }

                return `
rgbled_${args.lport}.setColor(${args.index}, ${args.value}, ${args.value1}, ${args.value2});
rgbled_${args.lport}.show();`
            },
            'BLOCK_1569571656649': {
                onRun: async (args, app, device, block) => {
                    //R
                    if ((isNaN(args.value)) || (args.value < 0)) {
                        args.value = 0;
                    } else if (args.value > 255) {
                        args.value = 255;
                    }
                    args.value = parseInt(args.value);

                    //G
                    if ((isNaN(args.value1)) || (args.value1 < 0)) {
                        args.value1 = 0;
                    } else if (args.value1 > 255) {
                        args.value1 = 255;
                    }
                    args.value1 = parseInt(args.value1);

                    //B
                    if ((isNaN(args.value2)) || (args.value2 < 0)) {
                        args.value2 = 0;
                    } else if (args.value2 > 255) {
                        args.value2 = 255;
                    }
                    args.value2 = parseInt(args.value2);

                    let index = await getIndex()
                    let rgb = [args.value, args.value1, args.value2];
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_external_led(index, Number(args.lport), Number(args.index), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1569572294998CodesLib': ['MeRGBLed rgbled_/*{normalPort}*/_/*{slot}*/(/*{normalPort}*/, /*{slot}*/, 32);'],
            'block1569572294998CodesSetup': ['rgbled_/*{normalPort}*/_/*{slot}*/.fillPixelsBak(0, 2, 1);'],
            'block1569572294998CodesCode': (args) => {
                const color = formatColorData(args.color);
                return `
rgbled_${args.normalPort}_${args.slot}.setColor(0, ${color});
rgbled_${args.normalPort}_${args.slot}.show();`
            },
            'BLOCK_1569572294998': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.color);
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_ledstrip(index, Number(args.normalPort), Number(args.slot), 0, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1571019759214CodesLib': ['MeRGBLed rgbled_/*{normalPort}*/_/*{slot}*/(/*{normalPort}*/, /*{slot}*/, 32);'],
            'block1571019759214CodesSetup': ['rgbled_/*{normalPort}*/_/*{slot}*/.fillPixelsBak(0, 2, 1);'],
            'block1571019759214CodesCode': (args) => {
                if ((args.index == "None") || (args.index < 1)) {
                    args.index = 1;
                } else if (args.index > 255) {
                    args.index = 255;
                }

                const color = formatColorData(args.color);
                return `
rgbled_${args.normalPort}_${args.slot}.setColor(${args.index}, ${color});
rgbled_${args.normalPort}_${args.slot}.show();`
            },
            'BLOCK_1571019759214': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.index) || (args.index < 1)) {
                        args.index = 1;
                    } else if (args.index > 255) {
                        args.index = 255;
                    }
                    args.index = parseInt(args.index);

                    let index = await getIndex()
                    let rgb = color2RGB(args.color);
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_ledstrip(index, Number(args.normalPort), Number(args.slot), Number(args.index), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runLedStripCodesLib': ['MeRGBLed rgbled_/*{normalPort}*/_/*{slot}*/(/*{normalPort}*/, /*{slot}*/, 32);'],
            'runLedStripCodesSetup': ['rgbled_/*{normalPort}*/_/*{slot}*/.fillPixelsBak(0, 2, 1);'],
            'runLedStripCodesCode': (args) => {
                if (args.value == "None") {
                    args.value = 0;
                } else if (Number(args.value) < 0) {
                    args.value = 0;
                } else if (Number(args.value) > 255) {
                    args.value = 255;
                }

                if (args.value1 == "None") {
                    args.value1 = 0;
                } else if (Number(args.value1) < 0) {
                    args.value1 = 0;
                } else if (Number(args.value1) > 255) {
                    args.value1 = 255;
                }

                if (args.value2 == "None") {
                    args.value2 = 0;
                } else if (Number(args.value2) < 0) {
                    args.value2 = 0;
                } else if (Number(args.value2) > 255) {
                    args.value2 = 255;
                }
                return `
rgbled_${args.normalPort}_${args.slot}.setColor(0, ${args.value}, ${args.value1}, ${args.value2});
rgbled_${args.normalPort}_${args.slot}.show();`
            },
            'runLedStrip': {
                onRun: async (args, app, device, block) => {
                    //R
                    if ((isNaN(args.value)) || (args.value < 0)) {
                        args.value = 0;
                    } else if (args.value > 255) {
                        args.value = 255;
                    }
                    args.value = parseInt(args.value);

                    //G
                    if ((isNaN(args.value1)) || (args.value1 < 0)) {
                        args.value1 = 0;
                    } else if (args.value1 > 255) {
                        args.value1 = 255;
                    }
                    args.value1 = parseInt(args.value1);

                    //B
                    if ((isNaN(args.value2)) || (args.value2 < 0)) {
                        args.value2 = 0;
                    } else if (args.value2 > 255) {
                        args.value2 = 255;
                    }
                    args.value2 = parseInt(args.value2);

                    let index = await getIndex()
                    let rgb = [args.value, args.value1, args.value2];
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_ledstrip(index, Number(args.normalPort), Number(args.slot), 0, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'block1571022561858CodesLib': ['MeRGBLed rgbled_/*{normalPort}*/_/*{slot}*/(/*{normalPort}*/, /*{slot}*/, 32);'],
            'block1571022561858CodesSetup': ['rgbled_/*{normalPort}*/_/*{slot}*/.fillPixelsBak(0, 2, 1);'],
            'block1571022561858CodesCode': (args) => {
                if (((args.index2 == "None")) || (args.index2 < 1)) {
                    args.index2 = 1;
                } else if (args.index2 > 255) {
                    args.index2 = 255;
                }

                if (args.value == "None") {
                    args.value = 0;
                } else if (Number(args.value) < 0) {
                    args.value = 0;
                } else if (Number(args.value) > 255) {
                    args.value = 255;
                }

                if (args.value1 == "None") {
                    args.value1 = 0;
                } else if (Number(args.value1) < 0) {
                    args.value1 = 0;
                } else if (Number(args.value1) > 255) {
                    args.value1 = 255;
                }

                if (args.value2 == "None") {
                    args.value2 = 0;
                } else if (Number(args.value2) < 0) {
                    args.value2 = 0;
                } else if (Number(args.value2) > 255) {
                    args.value2 = 255;
                }
                return `
rgbled_${args.normalPort}_${args.slot}.setColor(${args.index2}, ${args.value}, ${args.value1}, ${args.value2});
rgbled_${args.normalPort}_${args.slot}.show();`
            },
            'BLOCK_1571022561858': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.index2) || (args.index2 < 1)) {
                        args.index2 = 1;
                    } else if (args.index2 > 255) {
                        args.index2 = 255;
                    }
                    args.index2 = parseInt(args.index2);
                    //R
                    if ((isNaN(args.value)) || (args.value < 0)) {
                        args.value = 0;
                    } else if (args.value > 255) {
                        args.value = 255;
                    }
                    args.value = parseInt(args.value);

                    //G
                    if ((isNaN(args.value1)) || (args.value1 < 0)) {
                        args.value1 = 0;
                    } else if (args.value1 > 255) {
                        args.value1 = 255;
                    }
                    args.value1 = parseInt(args.value1);

                    //B
                    if ((isNaN(args.value2)) || (args.value2 < 0)) {
                        args.value2 = 0;
                    } else if (args.value2 > 255) {
                        args.value2 = 255;
                    }
                    args.value2 = parseInt(args.value2);

                    let index = await getIndex()
                    let rgb = [args.value, args.value1, args.value2];
                    await device.asyncWriteProtocol('ff55', orionProtocol.show_ledstrip(index, Number(args.normalPort), Number(args.slot), Number(args.index2), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runMotorCodesDeclare': ["MeDCMotor motor_/*{motorPort}*/(/*{motorPort}*/);\n"],
            'runMotorCodesCode': (args) => {
                let port = parseInt(args.motorPort);
                let speed = parseInt(args.motorvalue);
                let direction = parseInt(args.direction);
                if (speed < 0) {
                    speed = 0;
                } else if (speed > 100) {
                    speed = 100;
                }
                speed = speed / 100 * 255;
                if (direction == 1) {
                    speed = -speed;
                }
                return `motor_${port}.run(${speed});
`
            },
            'runMotor': {
                onRun: async (args, app, device, block) => {
                    let port = parseInt(args.motorPort);
                    let speed = parseInt(args.motorvalue);
                    let direction = parseInt(args.direction);
                    speed = limitedScopeOfArgs(speed, 0, 100);
                    speed = speed / 100 * 255;
                    if (direction == 1) {
                        speed = -speed;
                    }
                    await writeHandle('dc_motor', port, speed);
                }
            },
            'runDcMotorCodesLib': ['MeDCMotor motor_/*{motorPort}*/(/*{motorPort}*/);'],
            'runDcMotorCodesCode': (args) => {
                if ((args.motorvalue == "None") || (args.motorvalue < 0)) {
                    args.motorvalue = 0;
                }
                if (args.motorvalue > 100) {
                    args.motorvalue = 100;
                }
                return `
motor_${args.motorPort}.run(${args.direction} * ${args.motorvalue} / 100.0 * 255);`
            },
            'runDcMotor': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.motorvalue) || (args.motorvalue < 0)) {
                        args.motorvalue = 0;
                    } else if (args.motorvalue > 100) {
                        args.motorvalue = 100;
                    }
                    args.motorvalue = parseInt(args.motorvalue);

                    let port = Number(args.motorPort);
                    let direction = Number(args.direction);
                    let speed = Number(args.motorvalue) / 100 * 255;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_motor(index, port, direction * speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'runDcMotor1CodesLib': ['MeDCMotor motor_/*{motorPort}*/(/*{motorPort}*/);'],
            'runDcMotor1CodesCode': (args) => {
                if ((args.motorvalue == "None") || (args.motorvalue < 0)) {
                    args.motorvalue = 0;
                }
                if (args.motorvalue > 100) {
                    args.motorvalue = 100;
                }
                return `
motor_${args.motorPort}.run(${args.direction} * ${args.motorvalue} / 100.0 * 255);`
            },
            'runDcMotor_1': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.motorvalue) || (args.motorvalue < 0)) {
                        args.motorvalue = 0;
                    } else if (args.motorvalue > 100) {
                        args.motorvalue = 100;
                    }
                    args.motorvalue = parseInt(args.motorvalue);

                    let port = Number(args.motorPort);
                    let direction = Number(args.direction);
                    let speed = Number(args.motorvalue) / 100 * 255;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_motor(index, port, direction * speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'runServoCodesLib': ['Servo servo_/*{servoPort}*/_/*{slot}*/;',
                'MePort port_/*{servoPort}*/(/*{servoPort}*/);'
            ],
            'runServoCodesSetup': ['servo_/*{servoPort}*/_/*{slot}*/.attach(port_/*{servoPort}*/.pin/*{slot}*/());'],
            'runServoCodesCode': (args) => {
                if (args.angle == "None") {
                    args.angle = 0;
                } else if (Number(args.angle) < 0) {
                    args.angle = 0;
                } else if (Number(args.angle) > 180) {
                    args.angle = 180;
                }
                return `
servo_${args.servoPort}_${args.slot}.write(${args.angle});`
            },
            'runServo': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.angle) || (args.angle < 0)) {
                        args.angle = 0;
                    } else if (args.angle > 180) {
                        args.angle = 180;
                    }
                    args.angle = parseInt(args.angle);

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_servo(index, Number(args.servoPort), Number(args.slot), Number(args.angle)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runStepperMotorCodesDeclare': ["MeStepper stepper_/*{exMotorPort}*/(/*{exMotorPort}*/);\n"],
            'runStepperMotorCodesCode': (args) => {
                let port = parseInt(args.exMotorPort);
                let speed = parseInt(args.stepperSpeed);
                if (speed < 0) {
                    speed = 0;
                } else if (speed > 3000) {
                    speed = 3000;
                }
                let distance = parseInt(args.distance);
                if (distance < 0) {
                    distance = 0;
                }
                let direction = parseInt(args.direction);
                if (direction == 1) {
                    speed = -speed;
                }
                return `stepper_${port}.move(${distance});
stepper_${port}.setMaxSpeed(${speed});
stepper_${port}.setSpeed(${speed});
`
            },
            'runStepperMotor': {
                onRun: async (args, app, device, block) => {
                    let port = parseInt(args.exMotorPort);
                    let speed = parseInt(args.stepperSpeed);
                    let distance = parseInt(args.distance);
                    let direction = parseInt(args.direction);
                    speed = limitedScopeOfArgs(speed, 0, 3000);
                    if (direction == 1) {
                        speed = -speed;
                    }
                    if (distance < 0) {
                        distance = 0;
                    }
                    await writeHandle('step_motor', port, speed, distance);
                }
            },
            'runStepperMotor1CodesLib': ['MeStepper stepper_/*{port}*/(/*{port}*/);'],
            'runStepperMotor1CodesCode': (args) => {
                if ((args.step == "None") || (args.step < 0)) {
                    args.step = 0;
                }
                if (args.speed == "None") {
                    args.speed = 0;
                }
                return `
stepper_${args.port}.move(${args.direction} * ${args.step});
stepper_${args.port}.setMaxSpeed(abs(${args.speed}));
stepper_${args.port}.setSpeed(abs(${args.speed}));`
            },
            'runStepperMotor_1': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.step) || (args.step < 0)) {
                        args.step = 0;
                    }
                    args.step = parseInt(args.step);
                    if (isNaN(args.speed)) {
                        args.speed = 0;
                    }
                    args.speed = parseInt(args.speed);

                    let port = Number(args.port);
                    let rotate = Number(args.direction);
                    let distance = Number(args.step);
                    let speed = Math.abs(args.speed);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_stepper_motor(index, port, speed, rotate * distance));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runEncoderMotorCodesDeclare': ["MeEncoderMotor encoder_/*{exMotorPort}*/_/*{slot}*/(0x09,/*{slot}*/);\n"],
            'runEncoderMotorCodesCode': (args) => {
                let port = parseInt(args.exMotorPort);
                let slot = parseInt(args.slot);
                let direction = parseInt(args.direction);
                let speed = parseInt(args.encoderSpeed);
                let distance = parseInt(args.args0);
                if (distance < 0) {
                    distance = 0;
                }
                if (speed < 0) {
                    speed = 0;
                } else if (speed > 200) {
                    speed = 200;
                }
                if (direction == 1) {
                    speed = -speed;
                }
                return `encoder_${port}_${slot}.move(${distance}, ${speed});
`
            },
            'runEncoderMotor': {
                onRun: async (args, app, device, block) => {
                    let port = parseInt(args.exMotorPort);
                    let slot = args.slot;
                    let direction = parseInt(args.direction);
                    let speed = parseInt(args.encoderSpeed);
                    let distance = parseInt(args.args0);
                    if (distance < 0) {
                        distance = 0;
                    }
                    speed = limitedScopeOfArgs(speed, 0, 200);
                    if (direction == 1) {
                        speed = -speed;
                    }
                    await writeHandle('encode_motor', slot, speed, distance);
                }
            },
            'runEncoderMotor1CodesLib': ['MeEncoderMotor encoder_/*{exMotorPort}*/_/*{slot}*/(0x09, /*{slot}*/);'],
            'runEncoderMotor1CodesCode': (args) => {
                if (args.encoderSpeed == "None") {
                    args.encoderSpeed = 0;
                }
                if ((args.args0 == "None") || (args.args0 <= 0)) {
                    args.args0 = 1;
                }

                return `
encoder_${args.exMotorPort}_${args.slot}.move(${args.direction} * ${args.args0},abs(${args.encoderSpeed}));`
            },
            'runEncoderMotor_1': {
                onRun: async (args, app, device, block) => {
                    if (isNaN(args.encoderSpeed)) {
                        args.encoderSpeed = 0;
                    }
                    args.encoderSpeed = Math.abs(parseInt(args.encoderSpeed));

                    if (isNaN(args.args0) || (args.args0 <= 0)) {
                        args.args0 = 1;
                    }

                    let port = Number(args.exMotorPort);
                    let slot = Number(args.slot);
                    let rotate = Number(args.direction);
                    let args0 = Math.abs(args.args0);
                    let speed = Number(args.encoderSpeed);
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_encoder_motor_pos(index, slot, speed, rotate * args0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'runShutterCodesLib': ['MeShutter shutter_/*{bluePorts}*/(/*{bluePorts}*/);'],
            'runShutter': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_shutter(index, Number(args.bluePorts), Number(args.shutter)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runFanCodesLib': ['MePort dc130_/*{fanPorts}*/(/*{fanPorts}*/);'],
            'runFanCodesDeclare': [
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
            'runFan': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.fanPorts);
                    let dirMap = {
                        '1': -1,
                        '-1': 0,
                        '0': 1
                    }
                    let direction = dirMap[args.fan];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', orionProtocol.run_motor(index, port, direction * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'runLightsensorCodesDeclare': ["MeLightSensor lightsensor_/*{lightPorts}*/(/*{lightPorts}*/);\n"],
            'runLightsensor': {
                onRun: async (args, app, device, block) => {
                    let port = parseInt(args.lightPorts);
                    let status = args.switch;
                    await writeHandle('light_led', port, status);
                }
            },
            'getLightsensorCodesLib': ['MeLightSensor lightsensor_/*{laport}*/(/*{laport}*/);'],
            'getLightsensor': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0103', ['byte', Number(args.laport)]
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
            'getInfraredCodesLib': ['MeInfraredReceiver ir_/*{bluePorts}*/(/*{bluePorts}*/);'],
            'getInfraredCodesSetup': ['ir_/*{bluePorts}*/.begin();'],
            'getInfrared': {
                onRun: (args, app, device, block) => {
                    /*let port = Number(args.PORT);
                    let value = await engine.Infrared(port).getData();
                    return value;*/
                }
            },
            'getPirmotionCodesLib': ['MePIRMotionSensor pir_/*{bluePorts}*/(/*{bluePorts}*/);'],
            'getPirmotion': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010f', ['byte', Number(args.bluePorts)]
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
            'getTemperatureCodesLib': ['MeTemperature temperature_/*{normalPort}*/_/*{slot}*/(/*{normalPort}*/, /*{slot}*/);'],
            'getTemperature': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0102', ['byte', Number(args.normalPort)],
                        ['byte', Number(args.slot)]
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
            'getHumitureCodesLib': ['MeHumiture humiture_/*{normalPort}*/(/*{normalPort}*/);'],
            'getHumiture': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0117', ['byte', Number(args.normalPort)],
                        ['byte', Number(args.humiture)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'getUltrasonicCodesLib': ['MeUltrasonicSensor ultrasonic_/*{whitePorts}*/(/*{whitePorts}*/);'],
            'getUltrasonic': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0101', ['byte', Number(args.whitePorts)]
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
            'getLinefollowerCodesLib': ['MeLineFollower linefollower_/*{bluePorts}*/(/*{bluePorts}*/);'],
            'getLinefollower': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0111', ['byte', Number(args.bluePorts)]
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
            'getJoystickCodesLib': ['MeJoystick joystick_/*{blackPorts}*/(/*{blackPorts}*/);'],
            'getJoystick': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0105', ['byte', Number(args.blackPorts)],
                        ['byte', Number(args.Axis)]
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
            'getPotentiometerCodesLib': ['MePotentiometer potentiometer_/*{blackPorts}*/(/*{blackPorts}*/);'],
            'getPotentiometer': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0104', ['byte', Number(args.blackPorts)]
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
            'getSoundsensorCodesLib': ['MeSoundSensor soundsensor_/*{soundPort}*/(/*{soundPort}*/);'],
            'getSoundsensor': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0107', ['byte', Number(args.soundPort)]
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
            'getLimitswitchCodesLib': ['MeLimitSwitch sw_/*{normalPort}*/_/*{slot}*/(/*{normalPort}*/, /*{slot}*/);'],
            'getLimitswitch': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0115', ['byte', Number(args.normalPort)],
                        ['byte', Number(args.slot)]
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
            'gyroSesorReadCodesLib': ['MeGyro gyro_1;'],
            'gyroSesorReadCodesSetup': ['gyro_1.begin();'],
            'gyro_sesor_read': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010600', ['byte', Number(args.GyroAxis)]
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
            'getFlameCodesLib': ['MeFlameSensor flameSensor_/*{blackPorts}*/(/*{blackPorts}*/);'],
            'getFlame': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0118', ['byte', Number(args.blackPorts)]
                    ]);
                    var value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}03`, 'short']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'getGasCodesLib': ['MeGasSensor gasSensor_/*{blackPorts}*/(/*{blackPorts}*/);'],
            'getGas': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0119', ['byte', Number(args.blackPorts)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}03`, 'short']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'getTouchSensorCodesLib': ['MeTouchSensor touchSensor_/*{bluePorts}*/(/*{bluePorts}*/);'],
            'getTouchSensor': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0133', ['byte', Number(args.bluePorts)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return false;
                    }
                    return value[0] > 0;
                }
            },
            'getButtonCodesLib': ['Me4Button buttonSensor_/*{blackPorts}*/(/*{blackPorts}*/);'],
            'getButton': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0116', ['byte', Number(args.blackPorts)],
                        ['byte', Number(args.button_key)]
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
            'getTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'getTimerCodesDeclare': [
                `double getLastTime(){
  return currentTime = millis() / 1000.0 - lastTime;
}`
            ],
            'getTimer': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    return (((new Date()).getTime() - lastTime) / 1000).toFixed(3);
                }
            },
            'resetTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'resetTimer': {
                onRun: (args, app, device, block) => {
                    lastTime = (new Date()).getTime();
                }
            },
            'runArduino': {
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
            "id": "orion",
            "targets": {
                "device": true,
                "name": "orion",
                "icon": window.MbApi.getExtResPath('orion/imgs/fabacb07d17b468dbf75952c7bfa26a3.png', 'orion'),
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
                                "fail": [
                                    "orion.connect_fail_c0e2b9a5",
                                    "orion.connect_fail_2d58cae4",
                                    "orion.connect_fail_19a23a8c"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        },
                        "ble": {
                            "helpLink": "",
                            "tips": {
                                "fail": [
                                    "orion.connect_fail_71e3a310",
                                    "orion.connect_fail_c6660567",
                                    "orion.connect_fail_18b1b666",
                                    "orion.connect_fail_321f3fab"
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
                                "success": [],
                                "fail": []
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
                            "fail": [
                                "orion.upload_fail_7f425b63",
                                "orion.upload_fail_c59c7bc9",
                                "orion.upload_fail_bfa364fb"
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
                                "orion.firmware_success_b589e7b9"
                            ],
                            "fail": [
                                "orion.firmware_fail_8141b74c"
                            ]
                        },
                        "driver": {
                            "name": "stk500v1"
                        }
                    }
                },
                "firmware": [{
                        "id": "60bbba12",
                        "name": "orion.firmwares_version_60bbba12",
                        "version": "0a.01.106",
                        "isDefault": true,
                        "url": {
                            "name": "starter.hex",
                            "url": window.MbApi.getExtResPath('orion/res/c86444174daa4faeaa41b10f7ed60359.hex', 'orion')
                        }
                    },
                    {
                        "id": "01bb1787",
                        "name": "orion.firmwares_version_01bb1787",
                        "version": "0a.01.007",
                        "isDefault": false,
                        "url": {
                            "name": "starter_factory_firmware.hex",
                            "url": window.MbApi.getExtResPath('orion/res/07e3806ae017424ebf9d14fc9a7e8a48.hex', 'orion')
                        }
                    }
                ],
                "settings": [{
                    "text": "orion.UPDATE_FIRMWARE",
                    "handle": this.funcs.firmwareSettingHandle
                }],
                "categoriesOrder": [
                    "cate_b072ec4f",
                    "cate_2ced8c33",
                    "cate_79d47608",
                    "cate_53f02e41",
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
            "version": "0.0.8",
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
                "control_delete_this_clone",
                "control_stop"
            ],
            "generatorStartBlocks": [
                "runArduino"
            ],
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

export default ExtOrion;