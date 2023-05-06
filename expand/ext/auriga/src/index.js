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
if (!window.aurigaEngine) {
    window.aurigaEngine = sensorium.createAuriga();
}
let engine = window.aurigaEngine;

const DIRECTION2SPEED = [
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 1]

];
const FACE_DATA = '00000000000000000011110001111110011111100011110000000000000000000000000000000000001111000111111001111110001111000000000000000000'
const EMPTY_FACE_DATA = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const LED_STIP_DATA = '123450000000000';
const BLACK_COLOR = '#000000';

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
let aurigaProtocol = {
    move: (index, leftspeed, rightspeed) => [
        ['byte', index], '0205', ['short', leftspeed],
        ['short', rightspeed]
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
    run_encoder_motor: (index, slot, speed, degree) => [
        ['byte', index], '020c08', ['byte', slot],
        ['short', speed],
        ['long', degree]
    ],
    run_motor: (index, port, power) => [
        ['byte', index], '020a', ['byte', port],
        ['short', power]
    ],
    run_stepper_motor: (index, port, speed, distance) => [
        ['byte', index], '0228', ['byte', port],
        ['short', speed],
        ['long', distance]
    ],
    run_servo: (index, port, slot, degree) => [
        ['byte', index], '020b', ['byte', port],
        ['byte', slot],
        ['byte', degree]
    ],
    run_shutter: (index, port, action) => [
        ['byte', index], '0214', ['byte', port],
        ['byte', action]
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
    show_led: (index, [r, g, b], postion = 0, port = 0, slot = 2) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    sound_play: (index, hz, time) => [
        ['byte', index], '02222d', ['short', hz],
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
        ['byte', index], '0229', ['byte', port], '0301', ['byte', hour],
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
    debug: ["auriga.auriga_when_board_launch"],
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



class ExtAuriga {

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
                        var latest = '09.01.017';
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
            'settings8013Da10Handle': //(app, device, block) => {
                //    // TODO
                //}
                async (app, device, block) => {
                    const service = app.getService('system.ui');
                    const title = 'auriga.SET_SMART_ZERO_TITLE';
                    const no = 'auriga.SET_SMART_ZERO_NO';
                    const btn = 'auriga.SET_SMART_ZERO_BTN';
                    const loading = 'auriga.SET_SMART_ZERO_BTN_LOADING';
                    const setZeroSuccess = 'auriga.SET_SMART_ZERO_SUCCESS';
                    const setZeroFail = 'auriga.SET_SMART_ZERO_FAIL';
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
            'aurigaShowAllLedTimeCodesLib': ['MeRGBLed rgbled_0(0, 12);'],
            'aurigaShowAllLedTimeCodesSetup': ['rgbled_0.setpin(44);',
                'rgbled_0.fillPixelsBak(0, 2, 1);'
            ],
            'aurigaShowAllLedTimeCodesCode': (args) => {
                const color = formatColorData(args.COLOR);

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
rgbled_0.setColor(0,${color});
rgbled_0.show();
_delay(${args.TIME});
rgbled_0.setColor(0,0,0,0);
rgbled_0.show();`
            },
            'auriga_show_all_led_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex();
                    let rgb = color2RGB(args.COLOR);
                    console.log(rgb.r);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, [0, 0, 0]));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaShowAllLedCodesLib': ['MeRGBLed rgbled_0(0, 12);'],
            'aurigaShowAllLedCodesSetup': ['rgbled_0.setpin(44);',
                'rgbled_0.fillPixelsBak(0, 2, 1);'
            ],
            'aurigaShowAllLedCodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                return `
rgbled_0.setColor(0,${color});
rgbled_0.show();`
            },
            'auriga_show_all_led': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaShowAllLedRgbCodesLib': ['MeRGBLed rgbled_0(0, 12);'],
            'aurigaShowAllLedRgbCodesSetup': ['rgbled_0.setpin(44);',
                'rgbled_0.fillPixelsBak(0, 2, 1);'
            ],
            'aurigaShowAllLedRgbCodesCode': (args) => {
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
rgbled_0.setColor(0, ${args.R}, ${args.G}, ${args.B});
rgbled_0.show();`
            },
            'auriga_show_all_led_rgb': {
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

                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, [args.R, args.G, args.B]));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaShowLedTimeCodesLib': ['MeRGBLed rgbled_0(0, 12);'],
            'aurigaShowLedTimeCodesSetup': ['rgbled_0.setpin(44);',
                'rgbled_0.fillPixelsBak(0, 2, 1);'
            ],
            'aurigaShowLedTimeCodesCode': (args) => {
                const color = formatColorData(args.COLOR);

                if ((args.LED_POSTION == "" || args.LED_POSTION == null) || args.LED_POSTION == "None" || (args.LED_POSTION < 1) || (args.LED_POSTION > 12)) {
                    args.LED_POSTION = 0;
                }
                // args.LED_POSTION = parseInt(args.LED_POSTION);

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
rgbled_0.setColor(${args.LED_POSTION},${color});
rgbled_0.show();
_delay(${args.TIME});
rgbled_0.setColor(${args.LED_POSTION},0,0,0);
rgbled_0.show();`
            },
            'auriga_show_led_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.LED_POSTION == "" || args.LED_POSTION == null) || args.LED_POSTION == "None" || (args.LED_POSTION < 1) || (args.LED_POSTION > 12)) {
                        args.LED_POSTION = 0;
                    }
                    // args.LED_POSTION = parseInt(args.LED_POSTION);

                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex();
                    let rgb = color2RGB(args.COLOR);
                    console.log(rgb.r);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, rgb, Number(args.LED_POSTION)));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, [0, 0, 0], Number(args.LED_POSTION)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaShowLedCodesLib': ['MeRGBLed rgbled_0(0, 12);'],
            'aurigaShowLedCodesSetup': ['rgbled_0.setpin(44);',
                'rgbled_0.fillPixelsBak(0, 2, 1);'
            ],
            'aurigaShowLedCodesCode': (args) => {
                const color = formatColorData(args.COLOR);

                if ((args.LED_POSTION == "" || args.LED_POSTION == null) || args.LED_POSTION == "None" || (args.LED_POSTION < 1) || (args.LED_POSTION > 12)) {
                    args.LED_POSTION = 0;
                }
                // args.LED_POSTION = parseInt(args.LED_POSTION);
                return `
rgbled_0.setColor(${args.LED_POSTION},${color});
rgbled_0.show();`
            },
            'auriga_show_led': {
                onRun: async (args, app, device, block) => {
                    if ((args.LED_POSTION == "" || args.LED_POSTION == null) || args.LED_POSTION == "None" || (args.LED_POSTION < 1) || (args.LED_POSTION > 12)) {
                        args.LED_POSTION = 0;
                    }
                    // args.LED_POSTION = parseInt(args.LED_POSTION);

                    let index = await getIndex();
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, rgb, Number(args.LED_POSTION)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaShowLedRgbCodesLib': ['MeRGBLed rgbled_0(0, 12);'],
            'aurigaShowLedRgbCodesSetup': ['rgbled_0.setpin(44);',
                'rgbled_0.fillPixelsBak(0, 2, 1);'
            ],
            'aurigaShowLedRgbCodesCode': (args) => {
                if ((args.LED_POSTION == "" || args.LED_POSTION == null) || args.LED_POSTION == "None" || (args.LED_POSTION < 1) || (args.LED_POSTION > 12)) {
                    args.LED_POSTION = 0;
                }
                // args.LED_POSTION = parseInt(args.LED_POSTION);

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
rgbled_0.setColor(${args.LED_POSTION}, ${args.R}, ${args.G}, ${args.B});
rgbled_0.show();`
            },
            'auriga_show_led_rgb': {
                onRun: async (args, app, device, block) => {
                    if ((args.LED_POSTION == "" || args.LED_POSTION == null) || args.LED_POSTION == "None" || (args.LED_POSTION < 1) || (args.LED_POSTION > 12)) {
                        args.LED_POSTION = 0;
                    }
                    // args.LED_POSTION = parseInt(args.LED_POSTION);

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

                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.show_led(index, [args.R, args.G, args.B], Number(args.LED_POSTION)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaSoundPlayNoteCodesLib': ['MeBuzzer buzzer;'],
            'aurigaSoundPlayNoteCodesSetup': ['buzzer.setpin(45);'],
            'aurigaSoundPlayNoteCodesCode': (args) => {
                if ((args.BEAT == "" || args.BEAT == null) || args.BEAT == "None" || (args.BEAT < 0)) {
                    args.BEAT = 0;
                }
                return `
buzzer.tone(${args.NOTE}, ${args.BEAT} * 1000);
_delay(0.02);`
            },
            'auriga_sound_play_note': {
                onRun: async (args, app, device, block) => {
                    if ((args.BEAT == "" || args.BEAT == null) || args.BEAT == "None" || (args.BEAT < 0)) {
                        args.BEAT = 0;
                    }

                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.sound_play(index, Number(args.NOTE), Number(args.BEAT) * 1000));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaSoundPlayHzCodesLib': ['MeBuzzer buzzer;'],
            'aurigaSoundPlayHzCodesSetup': ['buzzer.setpin(45);'],
            'aurigaSoundPlayHzCodesCode': (args) => {
                if ((args.HZ == "" || args.HZ == null) || args.HZ == "None" || (args.HZ < 20) || (args.HZ > 20000)) {
                    args.HZ = 0;
                }
                // args.HZ = parseInt(args.HZ);
                // if((args.HZ < 20) || (args.HZ > 20000))
                //     return;

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
buzzer.tone(${args.HZ}, ${args.TIME} * 1000);`
            },
            'auriga_sound_play_hz': {
                onRun: async (args, app, device, block) => {
                    if ((args.HZ == "" || args.HZ == null) || args.HZ == "None" || (args.HZ < 20) || (args.HZ > 20000)) {
                        args.HZ = 0;
                    }
                    // args.HZ = parseInt(args.HZ);
                    // if((args.HZ < 20) || (args.HZ > 20000))
                    //     return;

                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.sound_play(index, Number(args.HZ), Number(args.TIME) * 1000));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaForwardTimeCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaForwardTimeCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaForwardTimeCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'aurigaForwardTimeCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(1, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(1, 0);`
            },
            'aurigaForwardTimeCodesLoop': ['Encoder_1.loop();', 'Encoder_2.loop();'],
            'auriga_forward_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 0;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaBackwardTimeCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaBackwardTimeCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaBackwardTimeCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'aurigaBackwardTimeCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(2, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(2, 0);`
            },
            'aurigaBackwardTimeCodesLoop': ['Encoder_1.loop();', 'Encoder_2.loop();'],
            'auriga_backward_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 1;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaTurnleftTimeCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaTurnleftTimeCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaTurnleftTimeCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'aurigaTurnleftTimeCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(3, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(3, 0);`
            },
            'aurigaTurnleftTimeCodesLoop': ['Encoder_1.loop();', 'Encoder_2.loop();'],
            'auriga_turnleft_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 2;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaTurnrightTimeCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaTurnrightTimeCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaTurnrightTimeCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'aurigaTurnrightTimeCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }

                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
move(4, ${args.POWER} / 100.0 * 255);
_delay(${args.TIME}); 
move(4, 0);`
            },
            'aurigaTurnrightTimeCodesLoop': ['Encoder_1.loop();', 'Encoder_2.loop();'],
            'auriga_turnright_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let duration = Number(args.TIME) * 1000;
                    let direction = 3;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaMoveCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaMoveCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaMoveCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'aurigaMoveCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }
                return `
move(${args.MOVE_DIRECTION}, ${args.POWER} / 100.0 * 255);`
            },
            'aurigaMoveCodesLoop': ['Encoder_1.loop();', 'Encoder_2.loop();'],
            'auriga_move': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    let direction = Number(args.MOVE_DIRECTION) - 1;
                    let speed = Number(args.POWER) / 100 * 255;
                    let leftDir = DIRECTION2SPEED[direction][0];
                    let rightDir = DIRECTION2SPEED[direction][1];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, leftDir * speed, rightDir * speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaMoveWheelSpeedCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaMoveWheelSpeedCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaMoveWheelSpeedCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'aurigaMoveWheelSpeedCodesCode': (args) => {
                if ((args.POWER_LEFT == "" || args.POWER_LEFT == null) || args.POWER_LEFT == "None") {
                    args.POWER_LEFT = 0;
                }
                // args.POWER_LEFT = parseInt(args.POWER_LEFT);
                if (args.POWER_LEFT < -100) {
                    args.POWER_LEFT = -100;
                } else if (args.POWER_LEFT > 100) {
                    args.POWER_LEFT = 100;
                }

                if ((args.POWER_RIGHT == "" || args.POWER_RIGHT == null) || args.POWER_RIGHT == "None") {
                    args.POWER_RIGHT = 0;
                }
                // args.POWER_RIGHT = parseInt(args.POWER_RIGHT);
                if (args.POWER_RIGHT < -100) {
                    args.POWER_RIGHT = -100;
                } else if (args.POWER_RIGHT > 100) {
                    args.POWER_RIGHT = 100;
                }
                return `
Encoder_1.setTarPWM(-1 * ${args.POWER_RIGHT}/100.0*255);
Encoder_2.setTarPWM(${args.POWER_LEFT}/100.0*255);`
            },
            'aurigaMoveWheelSpeedCodesLoop': ['Encoder_1.loop();', 'Encoder_2.loop();'],
            'auriga_move_wheel_speed': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER_LEFT == "" || args.POWER_LEFT == null) || args.POWER_LEFT == "None") {
                        args.POWER_LEFT = 0;
                    }
                    // args.POWER_LEFT = parseInt(args.POWER_LEFT);
                    if (args.POWER_LEFT < -100) {
                        args.POWER_LEFT = -100;
                    } else if (args.POWER_LEFT > 100) {
                        args.POWER_LEFT = 100;
                    }

                    if ((args.POWER_RIGHT == "" || args.POWER_RIGHT == null) || args.POWER_RIGHT == "None") {
                        args.POWER_RIGHT = 0;
                    }
                    // args.POWER_RIGHT = parseInt(args.POWER_RIGHT);
                    if (args.POWER_RIGHT < -100) {
                        args.POWER_RIGHT = -100;
                    } else if (args.POWER_RIGHT > 100) {
                        args.POWER_RIGHT = 100;
                    }

                    let leftSpeed = Number(args.POWER_LEFT) / 100 * 255;
                    let rightSpeed = Number(args.POWER_RIGHT) / 100 * 255;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, -1 * rightSpeed, leftSpeed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaMoveStopCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaMoveStopCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`
            ],
            'aurigaMoveStopCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_1.getIntNum(), isr_process_encoder1, RISING);',
                'attachInterrupt(Encoder_2.getIntNum(), isr_process_encoder2, RISING);'
            ],
            'auriga_move_stop': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', aurigaProtocol.move(index, 0, 0));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaDetectLightLedCodesLib': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_light_led': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0203', ['byte', Number(args.PORT)],
                        ['byte', Number(args.STATUS)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaDetectLightCodesLib': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_light': {
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
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectTemperatureCodesLib': ['MeOnBoardTemp temperature_onboard(PORT_13);'],
            'auriga_detect_temperature': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '011b0d'
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
            'aurigaDetectLoudnessCodesLib': ['MeSoundSensor soundsensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_loudness': {
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
            'aurigaDetectBoardGyroAngleCodesLib': ['MeGyro gyro_0(0, 0x69);'],
            'aurigaDetectBoardGyroAngleCodesSetup': ['gyro_0.begin();'],
            'auriga_detect_board_gyro_angle': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010601', ['byte', Number(args.AXIS)]
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
            'aurigaDetectExternalUltrasonicCodesLib': ['MeUltrasonicSensor ultrasonic_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_external_ultrasonic': {
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
            'aurigaDetectExternalLinefollowerCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_external_linefollower': {
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
            'aurigaEventExternalLinefollowerCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_event_external_linefollower': {
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
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'aurigaDetectTimerCodesDeclare': [
                `double getLastTime() {
  return currentTime = millis()/1000.0 - lastTime;
}`
            ],
            'auriga_detect_timer': {
                onRun: async (args, app, device, block) => {
                    return (((new Date()).getTime() - lastTime) / 1000).toFixed(3);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaResetTimerCodesLib': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'auriga_reset_timer': {
                onRun: async (args, app, device, block) => {
                    lastTime = new Date().getTime();
                }
            },
            'aurigaWhenBoardLaunchCodesLib': ['MeLightSensor lightsensor_12(12);'],
            'aurigaWhenBoardLaunchCodesSetup': ['randomSeed((unsigned long)(lightsensor_12.read() * 123456));'],
            'auriga_when_board_launch': {
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
            "id": "auriga",
            "targets": {
                "device": true,
                "name": "auriga",
                "icon": window.MbApi.getExtResPath('auriga/imgs/33576a428829468b84da8387d73a1b81.png', 'auriga'),
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
                                    "auriga.connect_fail_4e720cf3",
                                    "auriga.connect_fail_29312b3b",
                                    "auriga.connect_fail_09099d40"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523",
                            "": ""
                        },
                        "ble": {
                            "helpLink": "",
                            "tips": {
                                "success": [
                                    ""
                                ],
                                "fail": [
                                    "auriga.connect_fail_34866b93",
                                    "auriga.connect_fail_c2d05fc8",
                                    "auriga.connect_fail_f198b930",
                                    "auriga.connect_fail_349388ff"
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
                                "auriga.upload_fail_068e0a12",
                                "auriga.upload_fail_62e96a5f"
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
                                "auriga.firmware_success_db9b07ee"
                            ],
                            "fail": [
                                "auriga.firmware_fail_901081f9"
                            ]
                        },
                        "driver": {
                            "name": "stk500v2"
                        }
                    }
                },
                "firmware": [{
                    "id": "0",
                    "name": "auriga.firmwares_version_0",
                    "version": "09.01.017",
                    "isDefault": false,
                    "url": {
                        "name": "Firmware_for_Auriga.hex",
                        "url": window.MbApi.getExtResPath('auriga/res/9a1638136a934bd285d836ebcc169153.hex', 'auriga')
                    }
                }],
                "settings": [{
                        "text": "auriga.UPDATE_FIRMWARE",
                        "handle": this.funcs.firmwareSettingHandle
                    },
                    {
                        "id": "8013da10",
                        "text": "auriga.settings_8013da10",
                        "handle": this.funcs.settings8013Da10Handle
                    }
                ],
                "categoriesOrder": [
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
                "event_whenthisspriteclicked",
                "event_whenbackdropswitchesto",
                "event_whengreaterthan",
                "control_start_as_clone",
                "control_create_clone_of",
                "control_delete_this_clone"
            ],
            "generatorStartBlocks": [
                "auriga_when_board_launch"
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

export default ExtAuriga;