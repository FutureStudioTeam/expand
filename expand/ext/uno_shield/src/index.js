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

undefined

const disableBlocks = {
    debug: ["uno_shield.uno_shield_set_motor_power", "uno_shield.uno_shield_set_server_angle", "uno_shield.uno_shield_stepper_motor_pos", "uno_shield.uno_shield_run_encoder_motor", "uno_shield.uno_shield_show_7segments_number", "uno_shield.uno_shield_show_external_led_rgb", "uno_shield.uno_shield_show_ledstrip_rbg", "uno_shield.uno_shield_set_light_sensor_led", "uno_shield.uno_shield_shutter_set_fun", "uno_shield.uno_shield_ultrasonic_dis", "uno_shield.uno_shield_linefollower_status", "uno_shield.uno_shield_light_sensor_read", "uno_shield.uno_shield_joystick", "uno_shield.uno_shield_pointmeter", "uno_shield.uno_shield_soundsensor", "uno_shield.uno_shield_ir_sensor", "uno_shield.uno_shield_limitswitch", "uno_shield.uno_shield_human_ir", "uno_shield.uno_shield_tempsensor", "uno_shield.uno_shield_gyro_sesor", "uno_shield.uno_shield_temp_moisture_sensor", "uno_shield.uno_shield_firesensor", "uno_shield.uno_shield_gassensor", "uno_shield.uno_shield_touch_sensor_touch_detected", "uno_shield.uno_shield_button_pressed"],
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



class ExtUnoShield {

    constructor() {
        this.funcs = {
            'unoShieldSetMotorPowerCodesDeclare': ['MeDCMotor motor_/*{PORT}*/(/*{PORT}*/);'],
            'unoShieldSetMotorPowerCodesCode': (args) => {
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
            'uno_shield_set_motor_power': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldSetServerAngleCodesDeclare': ['Servo servo_/*{PORT}*/_/*{SLOT}*/;',
                'MePort port_/*{PORT}*/(/*{PORT}*/);'
            ],
            'unoShieldSetServerAngleCodesSetup': ['servo_/*{PORT}*/_/*{SLOT}*/.attach(port_/*{PORT}*/.pin/*{SLOT}*/());'],
            'unoShieldSetServerAngleCodesCode': (args) => {
                if (args.DEGREE == "None") {
                    args.DEGREE = 0;
                } else if (Number(args.DEGREE) < 0) {
                    args.DEGREE = 0;
                } else if (Number(args.DEGREE) > 180) {
                    args.DEGREE = 180;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                return `
servo_${args.PORT}_${args.SLOT}.write(${args.DEGREE});`
            },
            'uno_shield_set_server_angle': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldStepperMotorPosCodesDeclare': ['MeStepper stepper_/*{PORT}*/(/*{PORT}*/);'],
            'unoShieldStepperMotorPosCodesCode': (args) => {
                if ((args.STEP == "" || args.STEP == null) || args.STEP == "None") {
                    args.STEP = 0;
                }

                if ((args.SPEED == "" || args.SPEED == null) || args.SPEED == "None") {
                    args.SPEED = 0;
                }
                return `
stepper_${args.PORT}.move(${args.STEP});
stepper_${args.PORT}.setMaxSpeed(${args.SPEED});
stepper_${args.PORT}.setSpeed(${args.SPEED});`
            },
            'uno_shield_stepper_motor_pos': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldRunEncoderMotorCodesDeclare': ['MeEncoderMotor encoder_/*{PORT}*/_/*{SLOT}*/(0x09, /*{SLOT}*/);'],
            'unoShieldRunEncoderMotorCodesSetup': ['encoder_/*{PORT}*/_/*{SLOT}*/.begin();',
                'encoder_/*{PORT}*/_/*{SLOT}*/.runSpeed(0);'
            ],
            'unoShieldRunEncoderMotorCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = Math.abs(args.POWER);

                if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None") {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                return `
encoder_${args.PORT}_${args.SLOT}.move(${args.DEGREE},abs(${args.POWER}));`
            },
            'uno_shield_run_encoder_motor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldShow7SegmentsNumberCodesDeclare': ['Me7SegmentDisplay seg7_/*{PORT}*/(/*{PORT}*/);'],
            'unoShieldShow7SegmentsNumberCodesCode': (args) => {
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
            'uno_shield_show_7segments_number': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldShowExternalLedRgbCodesDeclare': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'unoShieldShowExternalLedRgbCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'unoShieldShowExternalLedRgbCodesCode': (args) => {
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
            'uno_shield_show_external_led_rgb': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldShowLedstripRbgCodesDeclare': ['MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);'],
            'unoShieldShowLedstripRbgCodesSetup': ['rgbled_/*{PORT}*/_/*{SLOT}*/.fillPixelsBak(0, 2, 1);'],
            'unoShieldShowLedstripRbgCodesCode': (args) => {
                if ((args.POS == "" || args.POS == null) || args.POS == "None") {
                    args.POS = 0;
                }
                // args.POS = parseInt(args.POS);
                if (args.POS < 0) {
                    args.POS = 0;
                } else if (args.POS > 255) {
                    args.POS = 255;
                }

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
rgbled_${args.PORT}_${args.SLOT}.setColor(${args.POS}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}_${args.SLOT}.show();`
            },
            'uno_shield_show_ledstrip_rbg': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldSetLightSensorLedCodesDeclare': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_set_light_sensor_led': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldShutterSetFunCodesDeclare': ['MeShutter shutter_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_shutter_set_fun': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldUltrasonicDisCodesDeclare': ['MeUltrasonicSensor ultrasonic_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_ultrasonic_dis': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldLinefollowerStatusCodesDeclare': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_linefollower_status': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldLightSensorReadCodesDeclare': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_light_sensor_read': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldJoystickCodesDeclare': ['MeJoystick joystick_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_joystick': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldPointmeterCodesDeclare': ['MePotentiometer potentiometer_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_pointmeter': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldSoundsensorCodesDeclare': ['MeSoundSensor soundsensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_soundsensor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldIrSensorCodesDeclare': ['MeInfraredReceiver ir_/*{PORT}*/(/*{PORT}*/);'],
            'unoShieldIrSensorCodesSetup': ['ir_/*{PORT}*/.begin();'],
            'uno_shield_ir_sensor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldLimitswitchCodesDeclare': ['MeLimitSwitch sw_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'uno_shield_limitswitch': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldHumanIrCodesDeclare': ['MePIRMotionSensor pir_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_human_ir': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldTempsensorCodesDeclare': ['MeTemperature temperature_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'uno_shield_tempsensor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldGyroSesorCodesDeclare': ['MeGyro gyro_1;'],
            'unoShieldGyroSesorCodesSetup': ['gyro_1.begin();'],
            'uno_shield_gyro_sesor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldTempMoistureSensorCodesDeclare': ['MeHumiture humiture_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_temp_moisture_sensor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldFiresensorCodesDeclare': ['MeFlameSensor flameSensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_firesensor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldGassensorCodesDeclare': ['MeGasSensor gasSensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_gassensor': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldTouchSensorTouchDetectedCodesDeclare': ['MeTouchSensor touchSensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_touch_sensor_touch_detected': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldButtonPressedCodesDeclare': ['Me4Button buttonSensor_/*{PORT}*/(/*{PORT}*/);'],
            'uno_shield_button_pressed': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldTimerCodesDeclare': ['double currentTime = 0;',
                'double lastTime = 0;',
                'double getLastTime(){',
                '  return currentTime = millis()/1000.0 - lastTime;',
                '}'
            ],
            'uno_shield_timer': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'unoShieldTimerSetZeroCodesDeclare': ['double currentTime = 0;',
                'double lastTime = 0;'
            ],
            'uno_shield_timer_set_zero': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'BLOCK_1608630189153': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                },
                onAdd: (app, device, block) => {
                    // TODO
                },
                onRemove: (app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "uno_shield",
            "targets": [{
                "name": "arduino_uno",
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
            "version": "0.0.2",
            "platform": [
                "mblockpc",
                "mblockweb"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "generatorStartBlocks": [],
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [],
            "disabledOnline": [
                "uno_shield.uno_shield_set_motor_power",
                "uno_shield.uno_shield_set_server_angle",
                "uno_shield.uno_shield_stepper_motor_pos",
                "uno_shield.uno_shield_run_encoder_motor",
                "uno_shield.uno_shield_show_7segments_number",
                "uno_shield.uno_shield_show_external_led_rgb",
                "uno_shield.uno_shield_show_ledstrip_rbg",
                "uno_shield.uno_shield_set_light_sensor_led",
                "uno_shield.uno_shield_shutter_set_fun",
                "uno_shield.uno_shield_ultrasonic_dis",
                "uno_shield.uno_shield_linefollower_status",
                "uno_shield.uno_shield_light_sensor_read",
                "uno_shield.uno_shield_joystick",
                "uno_shield.uno_shield_pointmeter",
                "uno_shield.uno_shield_soundsensor",
                "uno_shield.uno_shield_ir_sensor",
                "uno_shield.uno_shield_limitswitch",
                "uno_shield.uno_shield_human_ir",
                "uno_shield.uno_shield_tempsensor",
                "uno_shield.uno_shield_gyro_sesor",
                "uno_shield.uno_shield_temp_moisture_sensor",
                "uno_shield.uno_shield_firesensor",
                "uno_shield.uno_shield_gassensor",
                "uno_shield.uno_shield_touch_sensor_touch_detected",
                "uno_shield.uno_shield_button_pressed"
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

export default ExtUnoShield;