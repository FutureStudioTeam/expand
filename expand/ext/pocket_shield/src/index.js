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

let sysOperation = undefined;
let commonFunction = undefined;
let onlineCommunication = undefined;
let onlineProtocolPackage = undefined;
let onlineManager = undefined;
let onlineDataStructure = undefined;

// on exts that belong to halocode
function updateShareDatas() {
    sysOperation = window.haloSharedObject.sysOperation;
    commonFunction = window.haloSharedObject.commonFunction;
    onlineCommunication = window.haloSharedObject.onlineCommunication;
    onlineProtocolPackage = window.haloSharedObject.onlineProtocolPackage;
    onlineManager = window.haloSharedObject.onlineManager;
    onlineDataStructure = window.haloSharedObject.onlineDataStructure;

    let mbuildSpeakerTable = [
        //motor
        new onlineDataStructure("pocket_motor_set_power_cw", "cyberpi.pocket.motor_set", [20, 1]),
        new onlineDataStructure("pocket_motor_add_power_cw", "cyberpi.pocket.motor_add", [20, 1]),
        new onlineDataStructure("pocket_motor_driver_power_cw", "cyberpi.pocket.motor_drive", [50, 50]),
        new onlineDataStructure("pocket_motor_get_power_cw_1", "cyberpi.pocket.motor_get", [1], {
            default: "float1"
        }),
        new onlineDataStructure("pocket_motor_get_power_cw_2", "cyberpi.pocket.motor_get", [2], {
            default: "float1"
        }),
        new onlineDataStructure("pocket_motor_stop_power", "cyberpi.pocket.motor_stop", [1]),
        //servo
        new onlineDataStructure("pocket_servo_set_angle", "cyberpi.pocket.servo_set", [90, 1]),
        new onlineDataStructure("pocket_servo_add_angle", "cyberpi.pocket.servo_add", [90, 1]),
        new onlineDataStructure("pocket_servo_driver", "cyberpi.pocket.servo_drive", [90, 90]),
        new onlineDataStructure("pocket_servo_release_angle", "cyberpi.pocket.servo_release", [1]),
        new onlineDataStructure("pocket_servo_get_angle_1", "cyberpi.pocket.servo_get", [1], {
            default: "int"
        }),
        new onlineDataStructure("pocket_servo_get_angle_2", "cyberpi.pocket.servo_get", [2], {
            default: "int"
        }),
        new onlineDataStructure("pocket_servo_reset_angle", "cyberpi.pocket.servo_set", [0, 1]),
        //led

        new onlineDataStructure("pocket_led_show", "cyberpi.pocket.led_show", ["r r r r r r r r r r r r r r r", 1]),
        new onlineDataStructure("pocket_led_on_with_color", "cyberpi.pocket.led_on", [50, 50, 50, 1, 1]),
        new onlineDataStructure("pocket_led_on_with_rgb", "cyberpi.pocket.led_on", [50, 50, 50, 1, 1]),
        new onlineDataStructure("pocket_led_move_with_cycle", "cyberpi.pocket.led_move", [1, 1, 1]),
        new onlineDataStructure("pocket_led_off", "cyberpi.pocket.led_off", [1, 1]),
        new onlineDataStructure("pocket_led_add_brightness", "cyberpi.pocket.led_add_bri", [20, 1]),
        new onlineDataStructure("pocket_led_set_brightness", "cyberpi.pocket.led_set_bri", [20, 1]),
        new onlineDataStructure("pocket_led_get_brightness_1", "cyberpi.pocket.led_get_bri", [1], {
            default: "int"
        }),
        new onlineDataStructure("pocket_led_get_brightness_2", "cyberpi.pocket.led_get_bri", [2], {
            default: "int"
        }),
        //pin
        new onlineDataStructure("pocket_pin_is_high_1", "cyberpi.pocket.read_digital", [1], {
            default: "int"
        }),
        new onlineDataStructure("pocket_pin_is_high_2", "cyberpi.pocket.read_digital", [2], {
            default: "int"
        }),
        new onlineDataStructure("pocket_pin_read_digtial_1", "cyberpi.pocket.read_digital", [1], {
            default: "int"
        }),
        new onlineDataStructure("pocket_pin_read_digtial_2", "cyberpi.pocket.read_digital", [2], {
            default: "int"
        }),
        new onlineDataStructure("pocket_pin_use_5V_read_digtial_1", "cyberpi.pocket.read_analog", [1], {
            default: "float1"
        }),
        new onlineDataStructure("pocket_pin_use_5V_read_digtial_2", "cyberpi.pocket.read_analog", [2], {
            default: "float1"
        }),
        new onlineDataStructure("pocket_pin_write_digtial", "cyberpi.pocket.write_digital", [1, 1]),
        new onlineDataStructure("pocket_pin_set_pwm_with_duty_and_frquency", "cyberpi.pocket.set_pwm", [1, 1000, 1]),
    ]

    onlineManager.updateOnlineTable("add", mbuildSpeakerTable);
}

function syncShareDatasFromDevice() {
    setTimeout(() => {
        updateShareDatas();
    }, 500);
}

syncShareDatasFromDevice();

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



class ExtPocketShield {

    constructor() {
        this.funcs = {
            'pocket_motor_set_power_cw': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_motor_set_power_cw";
                    const tiltMap = {
                        all: "all",
                        M1: 1,
                        M2: 2
                    }
                    let para = [Number(args.number_2), tiltMap[args['fieldMenu_1']]];
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_motor_add_power_cw': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_motor_add_power_cw";
                    const tiltMap = {
                        all: "all",
                        M1: 1,
                        M2: 2
                    }
                    let para = [Number(args.power), tiltMap[args['fieldMenu_1']]];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_motor_driver_power_cw': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_motor_driver_power_cw";
                    let para = [Number(args.number_1), Number(args.number_2)];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_motor_get_power_cw': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const tiltMap = {
                        M1: 1,
                        M2: 2
                    }

                    let para = [tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_motor_get_power_cw" + "_" + tiltMap[args['fieldMenu_1']];
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 3000);
                    return value;
                }
            },
            'pocket_motor_stop_power': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_motor_stop_power";
                    const tiltMap = {
                        all: "all",
                        M1: 1,
                        M2: 2
                    }
                    let para = [tiltMap[args['fieldMenu_1']]];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_servo_set_angle': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_servo_set_angle";
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.angle), tiltMap[args['fieldMenu_1']]];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_servo_add_angle': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_servo_add_angle";
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.angle), tiltMap[args['fieldMenu_1']]];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_servo_driver': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_servo_driver";
                    let para = [Number(args.number_1), Number(args.number_2)];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_servo_get_angle': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const tiltMap = {
                        S1: 1,
                        S2: 2
                    }
                    let para = [tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_servo_get_angle" + "_" + tiltMap[args['fieldMenu_1']];
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 3000);
                    return value;
                }
            },
            'pocket_servo_release_angle': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_servo_release_angle";
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [tiltMap[args['fieldMenu_1']]];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'pocket_servo_reset_angle_to_zero': {
                onRun: async (args, app, device, block) => {
                    let opcode = "pocket_servo_reset_angle";
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [0, tiltMap[args['fieldMenu_1']]];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocketLedShowCodesCode': (args) => {
                let out_str = '';
                out_str = args.facePanel.split("").join(' ');

                out_str = out_str.replace(new RegExp(/0/g), 'black');
                out_str = out_str.replace(new RegExp(/1/g), 'red');
                out_str = out_str.replace(new RegExp(/2/g), 'orange');
                out_str = out_str.replace(new RegExp(/3/g), 'yellow');
                out_str = out_str.replace(new RegExp(/4/g), 'green');
                out_str = out_str.replace(new RegExp(/5/g), 'cyan');
                out_str = out_str.replace(new RegExp(/6/g), 'blue');
                out_str = out_str.replace(new RegExp(/7/g), 'purple');
                out_str = out_str.replace(new RegExp(/8/g), 'white');

                return `cyberpi.pocket.led_show('${out_str}',"${args.fieldMenu_1}")  
time.sleep(0.05)`
            },
            'pocket_led_show': {
                onRun: async (args, app, device, block) => {
                    let out_str = '';
                    out_str = args.facePanel.split("").join(' ');

                    out_str = out_str.replace(new RegExp(/0/g), 'black');
                    out_str = out_str.replace(new RegExp(/1/g), 'red');
                    out_str = out_str.replace(new RegExp(/2/g), 'orange');
                    out_str = out_str.replace(new RegExp(/3/g), 'yellow');
                    out_str = out_str.replace(new RegExp(/4/g), 'green');
                    out_str = out_str.replace(new RegExp(/5/g), 'cyan');
                    out_str = out_str.replace(new RegExp(/6/g), 'blue');
                    out_str = out_str.replace(new RegExp(/7/g), 'purple');
                    out_str = out_str.replace(new RegExp(/8/g), 'white');
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [out_str, tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_show";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);

                }
            },
            'pocketLedOnWithColorCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);

                return `cyberpi.pocket.led_on(${r}, ${g}, ${b}, ${args.fieldMenu_2}, "${args.fieldMenu_1}")`;

            },
            'pocket_led_on_with_color': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_1;
                    let fieldMenu;

                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    if (args.fieldMenu_2 == '"all"') {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_2);
                    }
                    console.log(fieldMenu);
                    let para = [r, g, b, fieldMenu, tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_on_with_color";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'pocket_led_on_with_rgb': {
                onRun: async (args, app, device, block) => {
                    let fieldMenu = 0;
                    let r = Number(args.r);
                    let g = Number(args.g);
                    let b = Number(args.b);

                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    if (args.fieldMenu_2 == '"all"') {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_2);
                    }
                    let para = [r, g, b, fieldMenu, tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_on_with_rgb";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'pocket_led_move_with_cycle': {
                onRun: async (args, app, device, block) => {
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.number_2), Number(args.number_3), tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_move_with_cycle";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'pocket_led_off': {
                onRun: async (args, app, device, block) => {
                    let fieldMenu = 0;
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    if (args.fieldMenu_2 == '"all"') {
                        fieldMenu = "all";
                    } else {
                        fieldMenu = Number(args.fieldMenu_2);
                    }
                    let para = [fieldMenu, tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_off";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            },
            'pocket_led_add_brightness': {
                onRun: async (args, app, device, block) => {
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.number_1), tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_add_brightness";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_led_set_brightness': {
                onRun: async (args, app, device, block) => {
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.number_1), tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_set_brightness";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_led_get_brightness': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const tiltMap = {
                        S1: 1,
                        S2: 2
                    }
                    let para = [tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_led_get_brightness" + "_" + tiltMap[args['fieldMenu_1']];
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 3000);
                    return value;
                }
            },
            'pocket_pin_is_high': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    const tiltMap = {
                        S1: 1,
                        S2: 2
                    }
                    let para = [tiltMap[args['pin_number']]];
                    let opcode = "pocket_pin_is_high" + "_" + tiltMap[args['pin_number']];
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 3000);
                    if (value == 1) {
                        return true;
                    } else {
                        return false;
                    }

                }
            },
            'pocket_pin_read_digtial': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;
                    const tiltMap = {
                        S1: 1,
                        S2: 2
                    }
                    let para = [tiltMap[args['pin_number']]];
                    let opcode = "pocket_pin_read_digtial" + "_" + tiltMap[args['pin_number']];
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 3000);
                    return value;
                }
            },
            'pocket_pin_read_analog': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "haloboard_pin_read_analog" + '_' + args.pin_number;
                    let value = onlineManager.getValue(opcode);
                    return value;
                }
            },
            'pocket_pin_use_5V_read_digtial': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0.000;
                    const tiltMap = {
                        S1: 1,
                        S2: 2
                    }
                    let para = [tiltMap[args['inputMenu_1']]];
                    let opcode = "pocket_pin_use_5V_read_digtial" + "_" + tiltMap[args['inputMenu_1']];
                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 3000);
                    return value;
                }
            },
            'pocket_pin_write_digtial': {
                onRun: async (args, app, device, block) => {
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.Digtial_value), tiltMap[args['fieldMenu_1']]];
                    let opcode = "pocket_pin_write_digtial";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'pocket_pin_set_pwm_with_duty_and_frquency': {
                onRun: async (args, app, device, block) => {
                    const tiltMap = {
                        all: "all",
                        S1: 1,
                        S2: 2
                    }
                    let para = [Number(args.PWM_value), Number(args.fieldMenu_3), tiltMap[args['pin_number']]];
                    let opcode = "pocket_pin_set_pwm_with_duty_and_frquency";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "pocket_shield",
            "targets": [{
                "name": "cyberpi",
                "options": {
                    "upload": {}
                }
            }],
            "codeTypes": [
                "python"
            ],
            "version": "0.0.4",
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
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [],
            "disabledOnline": []
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

export default ExtPocketShield;