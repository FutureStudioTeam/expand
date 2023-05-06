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
let _device;

let BLEService = {
    DEVICE_SERVICE: '00001523-1212-efde-1523-785feabcd123',
    IO_SERVICE: '00004f0e-1212-efde-1523-785feabcd123'
};
BLEService = new Proxy(BLEService, {
    get(target, key) {
        return target[key].replace(/-/g, '');
    }
})

let BLECharacteristic = {
    ATTACHED_IO: '00001527-1212-efde-1523-785feabcd123',
    LOW_VOLTAGE_ALERT: '00001528-1212-efde-1523-785feabcd123',
    INPUT_VALUES: '00001560-1212-efde-1523-785feabcd123',
    INPUT_COMMAND: '00001563-1212-efde-1523-785feabcd123',
    OUTPUT_COMMAND: '00001565-1212-efde-1523-785feabcd123'
};
BLECharacteristic = new Proxy(BLECharacteristic, {
    get(target, key) {
        return target[key].replace(/-/g, '');
    }
})
const MathUtil = {
    clamp(n, min, max) {
        return Math.min(Math.max(n, min), max);
    },
    wrapClamp(n, min, max) {
        const range = (max - min) + 1;
        return n - (Math.floor((n - min) / range) * range);
    }
}
const Color = {
    hsvToRgb(hsv) {
        let h = hsv.h % 360;
        if (h < 0) h += 360;
        const s = Math.max(0, Math.min(hsv.s, 1));
        const v = Math.max(0, Math.min(hsv.v, 1));

        const i = Math.floor(h / 60);
        const f = (h / 60) - i;
        const p = v * (1 - s);
        const q = v * (1 - (s * f));
        const t = v * (1 - (s * (1 - f)));

        let r;
        let g;
        let b;

        switch (i) {
            default:
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }

        return {
            r: Math.floor(r * 255),
            g: Math.floor(g * 255),
            b: Math.floor(b * 255)
        };
    },
    rgbToDecimal(rgb) {
        return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }
}
const Cast = {
    toNumber(value) {
        // If value is already a number we don't need to coerce it with
        // Number().
        if (typeof value === 'number') {
            // Scratch treats NaN as 0, when needed as a number.
            // E.g., 0 + NaN -> 0.
            if (Number.isNaN(value)) {
                return 0;
            }
            return value;
        }
        const n = Number(value);
        if (Number.isNaN(n)) {
            // Scratch treats NaN as 0, when needed as a number.
            // E.g., 0 + NaN -> 0.
            return 0;
        }
        return n;
    }
}

const BLEBatteryCheckInterval = 5000;

/**
 * A time interval to wait (in milliseconds) while a block that sends a BLE message is running.
 * @type {number}
 */
const BLESendInterval = 100;

/**
 * A maximum number of BLE message sends per second, to be enforced by the rate limiter.
 * @type {number}
 */
const BLESendRateMax = 20;

/**
 * Enum for WeDo 2.0 sensor and output types.
 * @readonly
 * @enum {number}
 */
const WeDo2Device = {
    MOTOR: 1,
    PIEZO: 22,
    LED: 23,
    TILT: 34,
    DISTANCE: 35
};

/**
 * Enum for connection/port ids assigned to internal WeDo 2.0 output devices.
 * @readonly
 * @enum {number}
 */
// TODO: Check for these more accurately at startup?
const WeDo2ConnectID = {
    LED: 6,
    PIEZO: 5
};

/**
 * Enum for ids for various output commands on the WeDo 2.0.
 * @readonly
 * @enum {number}
 */
const WeDo2Command = {
    MOTOR_POWER: 1,
    PLAY_TONE: 2,
    STOP_TONE: 3,
    WRITE_RGB: 4,
    SET_VOLUME: 255
};

/**
 * Enum for modes for input sensors on the WeDo 2.0.
 * @enum {number}
 */
const WeDo2Mode = {
    TILT: 0, // angle
    DISTANCE: 0, // detect
    LED: 1 // RGB
};

/**
 * Enum for units for input sensors on the WeDo 2.0.
 *
 * 0 = raw
 * 1 = percent
 *
 * @enum {number}
 */
const WeDo2Unit = {
    TILT: 0,
    DISTANCE: 1,
    LED: 0
};

function sendHandler(data, options) {
    _device.writeRaw(data, null, options);
}
const listenerList = {};

function addListener(name, cb) {
    removeListener(name);
    const t = setInterval(cb, 50);
    listenerList[name] = t;
}

function removeListener(name) {
    if (!isNaN(listenerList[name])) {
        clearInterval(listenerList[name]);
    }
}
class WeDo2Motor {
    /**
     * Construct a WeDo 2.0 Motor instance.
     * @param {WeDo2} parent - the WeDo 2.0 peripheral which owns this motor.
     * @param {int} index - the zero-based index of this motor on its parent peripheral.
     */
    constructor(parent, index) {
        /**
         * The WeDo 2.0 peripheral which owns this motor.
         * @type {WeDo2}
         * @private
         */
        this._parent = parent;

        /**
         * The zero-based index of this motor on its parent peripheral.
         * @type {int}
         * @private
         */
        this._index = index;

        /**
         * This motor's current direction: 1 for "this way" or -1 for "that way"
         * @type {number}
         * @private
         */
        this._direction = 1;

        /**
         * This motor's current power level, in the range [0,100].
         * @type {number}
         * @private
         */
        this._power = 100;

        /**
         * Is this motor currently moving?
         * @type {boolean}
         * @private
         */
        this._isOn = false;

        /**
         * If the motor has been turned on or is actively braking for a specific duration, this is the timeout ID for
         * the end-of-action handler. Cancel this when changing plans.
         * @type {Object}
         * @private
         */
        this._pendingTimeoutId = null;

        /**
         * The starting time for the pending timeout.
         * @type {Object}
         * @private
         */
        this._pendingTimeoutStartTime = null;

        /**
         * The delay/duration of the pending timeout.
         * @type {Object}
         * @private
         */
        this._pendingTimeoutDelay = null;

        this.startBraking = this.startBraking.bind(this);
        this.turnOff = this.turnOff.bind(this);
    }

    /**
     * @return {number} - the duration of active braking after a call to startBraking(). Afterward, turn the motor off.
     * @constructor
     */
    static get BRAKE_TIME_MS() {
        return 1000;
    }

    /**
     * @return {int} - this motor's current direction: 1 for "this way" or -1 for "that way"
     */
    get direction() {
        return this._direction;
    }

    /**
     * @param {int} value - this motor's new direction: 1 for "this way" or -1 for "that way"
     */
    set direction(value) {
        if (value < 0) {
            this._direction = -1;
        } else {
            this._direction = 1;
        }
    }

    /**
     * @return {int} - this motor's current power level, in the range [0,100].
     */
    get power() {
        return this._power;
    }

    /**
     * @param {int} value - this motor's new power level, in the range [0,100].
     */
    set power(value) {
        const p = Math.max(0, Math.min(value, 100));
        // Lego Wedo 2.0 hub only turns motors at power range [30 - 100], so
        // map value from [0 - 100] to [30 - 100].
        if (p === 0) {
            this._power = 0;
        } else {
            const delta = 100 / p;
            this._power = 30 + (70 / delta);
        }
    }

    /**
     * @return {boolean} - true if this motor is currently moving, false if this motor is off or braking.
     */
    get isOn() {
        return this._isOn;
    }

    /**
     * @return {boolean} - time, in milliseconds, of when the pending timeout began.
     */
    get pendingTimeoutStartTime() {
        return this._pendingTimeoutStartTime;
    }

    /**
     * @return {boolean} - delay, in milliseconds, of the pending timeout.
     */
    get pendingTimeoutDelay() {
        return this._pendingTimeoutDelay;
    }

    /**
     * Turn this motor on indefinitely.
     */
    turnOn() {
        if (this._power === 0) return;

        const cmd = this._parent.generateOutputCommand(
            this._index + 1,
            WeDo2Command.MOTOR_POWER,
            [this._power * this._direction] // power in range 0-100
        );

        this._parent.send(BLECharacteristic.OUTPUT_COMMAND, cmd);

        this._isOn = true;
        this._clearTimeout();
    }

    /**
     * Turn this motor on for a specific duration.
     * @param {number} milliseconds - run the motor for this long.
     */
    turnOnFor(milliseconds) {
        if (this._power === 0) return;

        milliseconds = Math.max(0, milliseconds);
        this.turnOn();
        this._setNewTimeout(this.startBraking, milliseconds);
    }

    /**
     * Start active braking on this motor. After a short time, the motor will turn off.
     */
    startBraking() {
        if (this._power === 0) return;

        const cmd = this._parent.generateOutputCommand(
            this._index + 1,
            WeDo2Command.MOTOR_POWER,
            [127] // 127 = break
        );

        this._parent.send(BLECharacteristic.OUTPUT_COMMAND, cmd);

        this._isOn = false;
        this._setNewTimeout(this.turnOff, WeDo2Motor.BRAKE_TIME_MS);
    }

    /**
     * Turn this motor off.
     * @param {boolean} [useLimiter=true] - if true, use the rate limiter
     */
    turnOff(useLimiter = true) {
        if (this._power === 0) return;

        const cmd = this._parent.generateOutputCommand(
            this._index + 1,
            WeDo2Command.MOTOR_POWER,
            [0] // 0 = stop
        );

        this._parent.send(BLECharacteristic.OUTPUT_COMMAND, cmd, useLimiter);

        this._isOn = false;
    }

    /**
     * Clear the motor action timeout, if any. Safe to call even when there is no pending timeout.
     * @private
     */
    _clearTimeout() {
        if (this._pendingTimeoutId !== null) {
            clearTimeout(this._pendingTimeoutId);
            this._pendingTimeoutId = null;
            this._pendingTimeoutStartTime = null;
            this._pendingTimeoutDelay = null;
        }
    }

    /**
     * Set a new motor action timeout, after clearing an existing one if necessary.
     * @param {Function} callback - to be called at the end of the timeout.
     * @param {int} delay - wait this many milliseconds before calling the callback.
     * @private
     */
    _setNewTimeout(callback, delay) {
        this._clearTimeout();
        const timeoutID = setTimeout(() => {
            if (this._pendingTimeoutId === timeoutID) {
                this._pendingTimeoutId = null;
                this._pendingTimeoutStartTime = null;
                this._pendingTimeoutDelay = null;
            }
            callback();
        }, delay);
        this._pendingTimeoutId = timeoutID;
        this._pendingTimeoutStartTime = Date.now();
        this._pendingTimeoutDelay = delay;
    }
}
class WeDo2 {

    constructor(runtime, extensionId) {

        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;
        this._runtime.on('PROJECT_STOP_ALL', this.stopAll.bind(this));

        /**
         * The id of the extension this peripheral belongs to.
         */
        this._extensionId = extensionId;

        /**
         * A list of the ids of the motors or sensors in ports 1 and 2.
         * @type {string[]}
         * @private
         */
        this._ports = ['none', 'none'];

        /**
         * The motors which this WeDo 2.0 could possibly have.
         * @type {WeDo2Motor[]}
         * @private
         */
        this._motors = [null, null];

        /**
         * The most recently received value for each sensor.
         * @type {Object.<string, number>}
         * @private
         */
        this._sensors = {
            tiltX: 0,
            tiltY: 0,
            distance: 0
        };

        /**
         * The Bluetooth connection socket for reading/writing peripheral data.
         * @type {BLE}
         * @private
         */
        this._ble = null;
        this._runtime.registerPeripheralExtension(extensionId, this);

        /**
         * A rate limiter utility, to help limit the rate at which we send BLE messages
         * over the socket to Scratch Link to a maximum number of sends per second.
         * @type {RateLimiter}
         * @private
         */
        // this._rateLimiter = new RateLimiter(BLESendRateMax);

        /**
         * An interval id for the battery check interval.
         * @type {number}
         * @private
         */
        this._batteryLevelIntervalId = null;

        this.reset = this.reset.bind(this);
        this._onConnect = this._onConnect.bind(this);
        this._checkBatteryLevel = this._checkBatteryLevel.bind(this);
    }

    /**
     * @return {number} - the latest value received for the tilt sensor's tilt about the X axis.
     */
    get tiltX() {
        return this._sensors.tiltX;
    }

    /**
     * @return {number} - the latest value received for the tilt sensor's tilt about the Y axis.
     */
    get tiltY() {
        return this._sensors.tiltY;
    }

    /**
     * @return {number} - the latest value received from the distance sensor.
     */
    get distance() {
        return this._sensors.distance;
    }

    /**
     * Access a particular motor on this peripheral.
     * @param {int} index - the zero-based index of the desired motor.
     * @return {WeDo2Motor} - the WeDo2Motor instance, if any, at that index.
     */
    motor(index) {
        return this._motors[index];
    }

    /**
     * Stop all the motors that are currently running.
     */
    stopAllMotors() {
        this._motors.forEach(motor => {
            if (motor) {
                // Send the motor off command without using the rate limiter.
                // This allows the stop button to stop motors even if we are
                // otherwise flooded with commands.
                motor.turnOff(false);
            }
        });
    }

    /**
     * Set the WeDo 2.0 peripheral's LED to a specific color.
     * @param {int} inputRGB - a 24-bit RGB color in 0xRRGGBB format.
     * @return {Promise} - a promise of the completion of the set led send operation.
     */
    setLED(inputRGB) {
        const rgb = [
            (inputRGB >> 16) & 0x000000FF,
            (inputRGB >> 8) & 0x000000FF,
            (inputRGB) & 0x000000FF
        ];

        const cmd = this.generateOutputCommand(
            WeDo2ConnectID.LED,
            WeDo2Command.WRITE_RGB,
            rgb
        );

        return this.send(BLECharacteristic.OUTPUT_COMMAND, cmd);
    }

    /**
     * Sets the input mode of the LED to RGB.
     * @return {Promise} - a promise returned by the send operation.
     */
    setLEDMode() {
        const cmd = this.generateInputCommand(
            WeDo2ConnectID.LED,
            WeDo2Device.LED,
            WeDo2Mode.LED,
            0,
            WeDo2Unit.LED,
            false
        );

        return this.send(BLECharacteristic.INPUT_COMMAND, cmd);
    }

    /**
     * Switch off the LED on the WeDo 2.0.
     * @return {Promise} - a promise of the completion of the stop led send operation.
     */
    stopLED() {
        const cmd = this.generateOutputCommand(
            WeDo2ConnectID.LED,
            WeDo2Command.WRITE_RGB,
            [0, 0, 0]
        );

        return this.send(BLECharacteristic.OUTPUT_COMMAND, cmd);
    }

    /**
     * Play a tone from the WeDo 2.0 peripheral for a specific amount of time.
     * @param {int} tone - the pitch of the tone, in Hz.
     * @param {int} milliseconds - the duration of the note, in milliseconds.
     * @return {Promise} - a promise of the completion of the play tone send operation.
     */
    playTone(tone, milliseconds) {
        const cmd = this.generateOutputCommand(
            WeDo2ConnectID.PIEZO,
            WeDo2Command.PLAY_TONE,
            [
                tone,
                tone >> 8,
                milliseconds,
                milliseconds >> 8
            ]
        );

        return this.send(BLECharacteristic.OUTPUT_COMMAND, cmd);
    }

    /**
     * Stop the tone playing from the WeDo 2.0 peripheral, if any.
     * @return {Promise} - a promise that the command sent.
     */
    stopTone() {
        const cmd = this.generateOutputCommand(
            WeDo2ConnectID.PIEZO,
            WeDo2Command.STOP_TONE
        );

        // Send this command without using the rate limiter, because it is
        // only triggered by the stop button.
        return this.send(BLECharacteristic.OUTPUT_COMMAND, cmd, false);
    }

    /**
     * Stop the tone playing and motors on the WeDo 2.0 peripheral.
     */
    stopAll() {
        if (!this.isConnected()) return;
        this.stopTone();
        this.stopAllMotors();
    }

    /**
     * Called by the runtime when user wants to scan for a WeDo 2.0 peripheral.
     */
    scan() {
        if (this._ble) {
            this._ble.disconnect();
        }
        this._ble = new BLE(this._runtime, this._extensionId, {
            filters: [{
                services: [BLEService.DEVICE_SERVICE]
            }],
            optionalServices: [BLEService.IO_SERVICE]
        }, this._onConnect, this.reset);
    }

    /**
     * Called by the runtime when user wants to connect to a certain WeDo 2.0 peripheral.
     * @param {number} id - the id of the peripheral to connect to.
     */
    connect(id) {
        if (this._ble) {
            this._ble.connectPeripheral(id);
        }
    }

    /**
     * Disconnects from the current BLE socket.
     */
    disconnect() {
        if (this._ble) {
            this._ble.disconnect();
        }

        this.reset();
    }

    /**
     * Reset all the state and timeout/interval ids.
     */
    reset() {
        this._ports = ['none', 'none'];
        this._motors = [null, null];
        this._sensors = {
            tiltX: 0,
            tiltY: 0,
            distance: 0
        };

        if (this._batteryLevelIntervalId) {
            window.clearInterval(this._batteryLevelIntervalId);
            this._batteryLevelIntervalId = null;
        }
    }

    /**
     * Called by the runtime to detect whether the WeDo 2.0 peripheral is connected.
     * @return {boolean} - the connected state.
     */
    isConnected() {
        let connected = false;
        if (this._ble) {
            connected = this._ble.isConnected();
        }
        return connected;
    }

    /**
     * Write a message to the WeDo 2.0 peripheral BLE socket.
     * @param {number} uuid - the UUID of the characteristic to write to
     * @param {Array} message - the message to write.
     * @param {boolean} [useLimiter=true] - if true, use the rate limiter
     * @return {Promise} - a promise result of the write operation
     */
    send(uuid, message, options) {
        /* if (!this.isConnected()) return Promise.resolve();

        if (useLimiter) {
            if (!this._rateLimiter.okayToSend()) return Promise.resolve();
        } */

        return sendHandler(message, Object.assign({
            serviceUUID: BLEService.IO_SERVICE,
            writeProperty: uuid,
            notifyProperty: ''
        }, options));
    }

    /**
     * Generate a WeDo 2.0 'Output Command' in the byte array format
     * (CONNECT ID, COMMAND ID, NUMBER OF BYTES, VALUES ...).
     *
     * This sends a command to the WeDo 2.0 to actuate the specified outputs.
     *
     * @param  {number} connectID - the port (Connect ID) to send a command to.
     * @param  {number} commandID - the id of the byte command.
     * @param  {array}  values    - the list of values to write to the command.
     * @return {array}            - a generated output command.
     */
    generateOutputCommand(connectID, commandID, values = null) {
        let command = [connectID, commandID];
        if (values) {
            command = command.concat(
                values.length
            ).concat(
                values
            );
        }
        return command;
    }

    /**
     * Generate a WeDo 2.0 'Input Command' in the byte array format
     * (COMMAND ID, COMMAND TYPE, CONNECT ID, TYPE ID, MODE, DELTA INTERVAL (4 BYTES),
     * UNIT, NOTIFICATIONS ENABLED).
     *
     * This sends a command to the WeDo 2.0 that sets that input format
     * of the specified inputs and sets value change notifications.
     *
     * @param  {number}  connectID           - the port (Connect ID) to send a command to.
     * @param  {number}  type                - the type of input sensor.
     * @param  {number}  mode                - the mode of the input sensor.
     * @param  {number}  delta               - the delta change needed to trigger notification.
     * @param  {array}   units               - the unit of the input sensor value.
     * @param  {boolean} enableNotifications - whether to enable notifications.
     * @return {array}                       - a generated input command.
     */
    generateInputCommand(connectID, type, mode, delta, units, enableNotifications) {
        const command = [
            1, // Command ID = 1 = "Sensor Format"
            2, // Command Type = 2 = "Write"
            connectID,
            type,
            mode,
            delta,
            0, // Delta Interval Byte 2
            0, // Delta Interval Byte 3
            0, // Delta Interval Byte 4
            units,
            enableNotifications ? 1 : 0
        ];

        return command;
    }

    /**
     * Sets LED mode and initial color and starts reading data from peripheral after BLE has connected.
     * @private
     */
    _onConnect() {
        this.setLEDMode();
        this.setLED(0x0000FF);
        sendHandler([0], {
            serviceUUID: BLEService.DEVICE_SERVICE,
            notifyProperty: BLECharacteristic.ATTACHED_IO
        });
        this._batteryLevelIntervalId = window.setInterval(this._checkBatteryLevel, BLEBatteryCheckInterval);
    }

    /**
     * Process the sensor data from the incoming BLE characteristic.
     * @param {object} base64 - the incoming BLE data.
     * @private
     */
    onMessage(data) {
        // console.info(data);

        /**
         * If first byte of data is '1' or '2', then either clear the
         * sensor present in ports 1 or 2 or set their format.
         *
         * If first byte of data is anything else, read incoming sensor value.
         */
        switch (data[0]) {
            case 1:
            case 2: {
                const connectID = data[0];
                if (data[1] === 0) {
                    // clear sensor or motor
                    this._clearPort(connectID);
                } else {
                    // register sensor or motor
                    this._registerSensorOrMotor(connectID, data[3]);
                }
                break;
            }
            default: {
                // read incoming sensor value
                const connectID = data[1];
                const type = this._ports[connectID - 1];
                if (type === WeDo2Device.DISTANCE) {
                    this._sensors.distance = data[2];
                }
                if (type === WeDo2Device.TILT) {
                    this._sensors.tiltX = data[2];
                    this._sensors.tiltY = data[3];
                }
                break;
            }
        }
    }

    /**
     * Check the battery level on the WeDo 2.0. If the WeDo 2.0 has disconnected
     * for some reason, the BLE socket will get an error back and automatically
     * close the socket.
     */
    _checkBatteryLevel() {
        /* this._ble.read(
            BLEService.DEVICE_SERVICE,
            BLECharacteristic.LOW_VOLTAGE_ALERT,
            false
        ); */
    }

    /**
     * Register a new sensor or motor connected at a port.  Store the type of
     * sensor or motor internally, and then register for notifications on input
     * values if it is a sensor.
     * @param {number} connectID - the port to register a sensor or motor on.
     * @param {number} type - the type ID of the sensor or motor
     * @private
     */
    _registerSensorOrMotor(connectID, type) {
        // Record which port is connected to what type of device
        this._ports[connectID - 1] = type;

        // Record motor port
        if (type === WeDo2Device.MOTOR) {
            this._motors[connectID - 1] = new WeDo2Motor(this, connectID - 1);
        } else {
            // Set input format for tilt or distance sensor
            const typeString = type === WeDo2Device.DISTANCE ? 'DISTANCE' : 'TILT';
            const cmd = this.generateInputCommand(
                connectID,
                type,
                WeDo2Mode[typeString],
                1,
                WeDo2Unit[typeString],
                true
            );

            this.send(BLECharacteristic.INPUT_COMMAND, cmd, {
                notifyProperty: BLECharacteristic.INPUT_VALUES
            });
        }
    }

    /**
     * Clear the sensor or motor present at port 1 or 2.
     * @param {number} connectID - the port to clear.
     * @private
     */
    _clearPort(connectID) {
        const type = this._ports[connectID - 1];
        if (type === WeDo2Device.TILT) {
            this._sensors.tiltX = this._sensors.tiltY = 0;
        }
        if (type === WeDo2Device.DISTANCE) {
            this._sensors.distance = 0;
        }
        this._ports[connectID - 1] = 'none';
        this._motors[connectID - 1] = null;
    }
}
/**
 * Enum for motor specification.
 * @readonly
 * @enum {string}
 */
const WeDo2MotorLabel = {
    DEFAULT: 'motor',
    A: 'motor A',
    B: 'motor B',
    ALL: 'all motors'
};

/**
 * Enum for motor direction specification.
 * @readonly
 * @enum {string}
 */
const WeDo2MotorDirection = {
    FORWARD: 'this way',
    BACKWARD: 'that way',
    REVERSE: 'reverse'
};

/**
 * Enum for tilt sensor direction.
 * @readonly
 * @enum {string}
 */
const WeDo2TiltDirection = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
    ANY: 'any'
};

class Scratch3WeDo2Blocks {

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID() {
        return 'wedo2';
    }

    /**
     * @return {number} - the tilt sensor counts as "tilted" if its tilt angle meets or exceeds this threshold.
     */
    static get TILT_THRESHOLD() {
        return 15;
    }

    /**
     * Construct a set of WeDo 2.0 blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor(runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        // Create a new WeDo 2.0 peripheral instance
        peripheral = new WeDo2(this.runtime, Scratch3WeDo2Blocks.EXTENSION_ID);
    }

    /**
     * Turn specified motor(s) on for a specified duration.
     * @param {object} args - the block's arguments.
     * @property {MotorID} MOTOR_ID - the motor(s) to activate.
     * @property {int} DURATION - the amount of time to run the motors.
     * @return {Promise} - a promise which will resolve at the end of the duration.
     */
    motorOnFor(args) {
        // TODO: cast args.MOTOR_ID?
        let durationMS = Cast.toNumber(args.DURATION) * 1000;
        durationMS = MathUtil.clamp(durationMS, 0, 15000);
        return new Promise(resolve => {
            this._forEachMotor(args.MOTOR_ID, motorIndex => {
                const motor = peripheral.motor(motorIndex);
                if (motor) {
                    motor.turnOnFor(durationMS);
                }
            });

            // Run for some time even when no motor is connected
            setTimeout(resolve, durationMS);
        });
    }

    /**
     * Turn specified motor(s) on indefinitely.
     * @param {object} args - the block's arguments.
     * @property {MotorID} MOTOR_ID - the motor(s) to activate.
     * @return {Promise} - a Promise that resolves after some delay.
     */
    motorOn(args) {
        // TODO: cast args.MOTOR_ID?
        this._forEachMotor(args.MOTOR_ID, motorIndex => {
            const motor = peripheral.motor(motorIndex);
            if (motor) {
                motor.turnOn();
            }
        });

        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Turn specified motor(s) off.
     * @param {object} args - the block's arguments.
     * @property {MotorID} MOTOR_ID - the motor(s) to deactivate.
     * @return {Promise} - a Promise that resolves after some delay.
     */
    motorOff(args) {
        // TODO: cast args.MOTOR_ID?
        this._forEachMotor(args.MOTOR_ID, motorIndex => {
            const motor = peripheral.motor(motorIndex);
            if (motor) {
                motor.turnOff();
            }
        });

        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Turn specified motor(s) off.
     * @param {object} args - the block's arguments.
     * @property {MotorID} MOTOR_ID - the motor(s) to be affected.
     * @property {int} POWER - the new power level for the motor(s).
     * @return {Promise} - a Promise that resolves after some delay.
     */
    startMotorPower(args) {
        // TODO: cast args.MOTOR_ID?
        this._forEachMotor(args.MOTOR_ID, motorIndex => {
            const motor = peripheral.motor(motorIndex);
            if (motor) {
                motor.power = MathUtil.clamp(Cast.toNumber(args.POWER), 0, 100);
                motor.turnOn();
            }
        });

        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Set the direction of rotation for specified motor(s).
     * If the direction is 'reverse' the motor(s) will be reversed individually.
     * @param {object} args - the block's arguments.
     * @property {MotorID} MOTOR_ID - the motor(s) to be affected.
     * @property {MotorDirection} MOTOR_DIRECTION - the new direction for the motor(s).
     * @return {Promise} - a Promise that resolves after some delay.
     */
    setMotorDirection(args) {
        // TODO: cast args.MOTOR_ID?
        this._forEachMotor(args.MOTOR_ID, motorIndex => {
            const motor = peripheral.motor(motorIndex);
            if (motor) {
                switch (args.MOTOR_DIRECTION) {
                    case WeDo2MotorDirection.FORWARD:
                        motor.direction = 1;
                        break;
                    case WeDo2MotorDirection.BACKWARD:
                        motor.direction = -1;
                        break;
                    case WeDo2MotorDirection.REVERSE:
                        motor.direction = -motor.direction;
                        break;
                    default:
                        console.warn(`Unknown motor direction in setMotorDirection: ${args.DIRECTION}`);
                        break;
                }
                // keep the motor on if it's running, and update the pending timeout if needed
                if (motor.isOn) {
                    if (motor.pendingTimeoutDelay) {
                        motor.turnOnFor(motor.pendingTimeoutStartTime + motor.pendingTimeoutDelay - Date.now());
                    } else {
                        motor.turnOn();
                    }
                }
            }
        });

        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Set the LED's hue.
     * @param {object} args - the block's arguments.
     * @property {number} HUE - the hue to set, in the range [0,100].
     * @return {Promise} - a Promise that resolves after some delay.
     */
    setLightHue(args) {
        // Convert from [0,100] to [0,360]
        let inputHue = Cast.toNumber(args.HUE);
        inputHue = MathUtil.wrapClamp(inputHue, 0, 100);
        const hue = inputHue * 360 / 100;

        const rgbObject = Color.hsvToRgb({
            h: hue,
            s: 1,
            v: 1
        });

        const rgbDecimal = Color.rgbToDecimal(rgbObject);

        peripheral.setLED(rgbDecimal);

        return new Promise(resolve => {
            window.setTimeout(() => {
                resolve();
            }, BLESendInterval);
        });
    }

    /**
     * Make the WeDo 2.0 peripheral play a MIDI note for the specified duration.
     * @param {object} args - the block's arguments.
     * @property {number} NOTE - the MIDI note to play.
     * @property {number} DURATION - the duration of the note, in seconds.
     * @return {Promise} - a promise which will resolve at the end of the duration.
     */
    playNoteFor(args) {
        let durationMS = Cast.toNumber(args.DURATION) * 1000;
        durationMS = MathUtil.clamp(durationMS, 0, 3000);
        const note = MathUtil.clamp(Cast.toNumber(args.NOTE), 25, 125); // valid WeDo 2.0 sounds
        if (durationMS === 0) return; // WeDo 2.0 plays duration '0' forever
        return new Promise(resolve => {
            const tone = this._noteToTone(note);
            peripheral.playTone(tone, durationMS);

            // Run for some time even when no piezo is connected
            setTimeout(resolve, durationMS);
        });
    }

    /**
     * Compare the distance sensor's value to a reference.
     * @param {object} args - the block's arguments.
     * @property {string} OP - the comparison operation: '<' or '>'.
     * @property {number} REFERENCE - the value to compare against.
     * @return {boolean} - the result of the comparison, or false on error.
     */
    whenDistance(args) {
        switch (args.OP) {
            case '<':
                return peripheral.distance < Cast.toNumber(args.REFERENCE);
            case '>':
                return peripheral.distance > Cast.toNumber(args.REFERENCE);
            default:
                console.warn(`Unknown comparison operator in whenDistance: ${args.OP}`);
                return false;
        }
    }

    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} TILT_DIRECTION_ANY - the tilt direction to test (up, down, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     */
    whenTilted(args) {
        return this._isTilted(args.TILT_DIRECTION_ANY);
    }

    /**
     * @return {number} - the distance sensor's value, scaled to the [0,100] range.
     */
    getDistance() {
        return peripheral.distance;
    }

    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} TILT_DIRECTION_ANY - the tilt direction to test (up, down, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     */
    isTilted(args) {
        return this._isTilted(args.TILT_DIRECTION_ANY);
    }

    /**
     * @param {object} args - the block's arguments.
     * @property {TiltDirection} TILT_DIRECTION - the direction (up, down, left, right) to check.
     * @return {number} - the tilt sensor's angle in the specified direction.
     * Note that getTiltAngle(up) = -getTiltAngle(down) and getTiltAngle(left) = -getTiltAngle(right).
     */
    getTiltAngle(args) {
        return this._getTiltAngle(args.TILT_DIRECTION);
    }

    /**
     * Test whether the tilt sensor is currently tilted.
     * @param {TiltDirection} direction - the tilt direction to test (up, down, left, right, or any).
     * @return {boolean} - true if the tilt sensor is tilted past a threshold in the specified direction.
     * @private
     */
    _isTilted(direction) {
        switch (direction) {
            case WeDo2TiltDirection.ANY:
                return this._getTiltAngle(WeDo2TiltDirection.UP) >= Scratch3WeDo2Blocks.TILT_THRESHOLD ||
                    this._getTiltAngle(WeDo2TiltDirection.DOWN) >= Scratch3WeDo2Blocks.TILT_THRESHOLD ||
                    this._getTiltAngle(WeDo2TiltDirection.LEFT) >= Scratch3WeDo2Blocks.TILT_THRESHOLD ||
                    this._getTiltAngle(WeDo2TiltDirection.RIGHT) >= Scratch3WeDo2Blocks.TILT_THRESHOLD;
            default:
                return this._getTiltAngle(direction) >= Scratch3WeDo2Blocks.TILT_THRESHOLD;
        }
    }

    /**
     * @param {TiltDirection} direction - the direction (up, down, left, right) to check.
     * @return {number} - the tilt sensor's angle in the specified direction.
     * Note that getTiltAngle(up) = -getTiltAngle(down) and getTiltAngle(left) = -getTiltAngle(right).
     * @private
     */
    _getTiltAngle(direction) {
        switch (direction) {
            case WeDo2TiltDirection.UP:
                return peripheral.tiltY > 45 ? 256 - peripheral.tiltY : -peripheral.tiltY;
            case WeDo2TiltDirection.DOWN:
                return peripheral.tiltY > 45 ? peripheral.tiltY - 256 : peripheral.tiltY;
            case WeDo2TiltDirection.LEFT:
                return peripheral.tiltX > 45 ? 256 - peripheral.tiltX : -peripheral.tiltX;
            case WeDo2TiltDirection.RIGHT:
                return peripheral.tiltX > 45 ? peripheral.tiltX - 256 : peripheral.tiltX;
            default:
                console.warn(`Unknown tilt direction in _getTiltAngle: ${direction}`);
        }
    }

    /**
     * Call a callback for each motor indexed by the provided motor ID.
     * @param {MotorID} motorID - the ID specifier.
     * @param {Function} callback - the function to call with the numeric motor index for each motor.
     * @private
     */
    _forEachMotor(motorID, callback) {
        let motors;
        switch (motorID) {
            case WeDo2MotorLabel.A:
                motors = [0];
                break;
            case WeDo2MotorLabel.B:
                motors = [1];
                break;
            case WeDo2MotorLabel.ALL:
            case WeDo2MotorLabel.DEFAULT:
                motors = [0, 1];
                break;
            default:
                console.warn(`Invalid motor ID: ${motorID}`);
                motors = [];
                break;
        }
        for (const index of motors) {
            callback(index);
        }
    }

    /**
     * @param {number} midiNote - the MIDI note value to convert.
     * @return {number} - the frequency, in Hz, corresponding to that MIDI note value.
     * @private
     */
    _noteToTone(midiNote) {
        // Note that MIDI note 69 is A4, 440 Hz
        return 440 * Math.pow(2, (midiNote - 69) / 12);
    }
}

let fakeRuntime = {
    on: () => {},
    registerPeripheralExtension: () => {}
}
let peripheral;
let wedo2Instance = new Scratch3WeDo2Blocks(fakeRuntime);

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



class ExtLegoWedo {

    constructor() {
        this.funcs = {
            'BLOCK_1598607079201': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.motorOnFor(args);
                }
            },
            'BLOCK_1598607480941': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.motorOn(args);
                }
            },
            'BLOCK_1598607566123': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.motorOff(args);
                }
            },
            'BLOCK_1598607636946': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.startMotorPower(args);
                }
            },
            'BLOCK_1598607898218': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.setMotorDirection(args);
                }
            },
            'BLOCK_1599103169984': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.setLightHue(args);
                }
            },
            'BLOCK_1599103209202': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.getDistance();
                }
            },
            'BLOCK_1599103209359': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.isTilted(args);
                }
            },
            'BLOCK_1599103209450': {
                onRun: (args, app, device, block) => {
                    return wedo2Instance.getTiltAngle(args);
                }
            },
            'BLOCK_1598608620452': {
                onRun: function(args, app, device, block) {
                    let cando = false;
                    if (args.OP == 'less-than') {
                        args.OP = '<';
                    } else if (args.OP == 'more-than') {
                        args.OP = '>';
                    }
                    const value = wedo2Instance.whenDistance(args);
                    if (!this.oldValue && value) {
                        cando = true;
                    }
                    this.oldValue = value;
                    return cando;
                },
                onAdd: (app, device, block) => {
                    // TODO
                    addListener('whenDistance', () => {
                        app.workspace.runBlocks(block.opcode);
                    })
                },
                onRemove: (app, device, block) => {
                    // TODO
                    removeListener('whenDistance');
                }
            },
            'BLOCK_1598608792983': {
                onRun: function(args, app, device, block) {
                    let cando = false;
                    const value = wedo2Instance.whenTilted(args);
                    if (!this.oldValue && value) {
                        cando = true;
                    }
                    this.oldValue = value;
                    return cando;
                },
                onAdd: (app, device, block) => {
                    // TODO
                    addListener('whenTilted', () => {
                        app.workspace.runBlocks(block.opcode);
                    })
                },
                onRemove: (app, device, block) => {
                    removeListener('whenTilted');
                }
            },
            'dataVariableCodesCode': [`get_variable('{VARIABLE}')`, 0]
        };
    }

    getInfo() {
        return {
            "id": "lego_wedo",
            "targets": {
                "device": true,
                "name": "lego_wedo",
                "icon": window.MbApi.getExtResPath('lego_wedo/imgs/589646045c90414fbfec017da09d6888.png', 'lego_wedo'),
                "enableCode": true,
                "enableUpload": false,
                "enableOnline": [
                    "ble"
                ],
                "shouldConnect": [
                    "ble"
                ],
                "defaultOnline": false,
                "options": {
                    "connect": {
                        "ble": {
                            "channel": "1",
                            "localName": "LPF2 Smart Hub 2 I/O",
                            "serviceUUID": "000015231212efde1523785feabcd123",
                            "writeProperty": "",
                            "notifyProperty": "000015601212efde1523785feabcd123"
                        },
                        "serialport": {
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        }
                    },
                    "upload": {
                        "middlewares": [],
                        "driver": {}
                    },
                    "firmware": {
                        "driver": {}
                    }
                },
                "settings": [],
                "categoriesOrder": [
                    "cate_db5a5a24",
                    "cate_7cf881f1",
                    "cate_d65d5fe8",
                    "events",
                    "control",
                    "operators",
                    "data",
                    "myBlocks"
                ]
            },
            "version": "0.0.5",
            "platform": [
                "mblockweb",
                "mblockpc"
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

export default ExtLegoWedo;