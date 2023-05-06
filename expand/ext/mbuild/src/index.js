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

const mbuildFirmwareDriverMyTool =
    /**
     * Custom Upload Driver
     *
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {ArrayBuffer | string} data
     * @param {() => void} logHandler
     * @param {(percent: number) => void} progressHandle
     * @param {(err: any, result: any) => void} callback
     */
    (app, device, datas, logHandler, progressHandle, finishHandler, errHandler) => {
        Protocol.updateFirmwares(app, device, datas, logHandler, progressHandle, finishHandler, errHandler);
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
const delay = (t) => new Promise(res => setTimeout(() => res(), t))

class CNeurons {
    constructor() {
        this.types = {
            mbuild_dc_motor: 0x6209,
            mbuild_servo_motor: 0x620a,
            mbuild_speaker: 0x6604,
            mbuild_ranging: 0x6312,
            sound_sensor: 0x6313,
            light: 0x6314,
            soil_moisture: 0x6315,
            ultrasonic_ranging: 0x6316,
            mbuild_temperature: 0x6318,
            mbuild_pir: 0x6317,
            mbuild_temperatureHumidity: 0x6319,
            mbuild_motion: 0x631a,
            mbuild_slider: 0x640d,
            mbuild_touch_sensor: 0x640a,
            mbuild_button: 0x640b,
            mbuild_joystick: 0x640c,
            mbuild_knob: 0x640e,
            led: 0x6507,
            mbuild_rgb_led_strip: 0x6508,
            mbuild_led_matrix: 0x6509,
            mbuild_gpio_module: 0x6801,
            mbuild_IR_mdoule: 0x6802,
            mbuild_flame: 0x631b,
            mbuild_gas: 0x631c,
            mbuild_magnetic: 0x631e,
            mbuild_daul_rgb: 0x6311
        };
        this.addresses = {};
        this.datas = {}

        this._canceller = [];
    }

    _getTypeNameByTypeId(typeId) {
        let typename = '';
        for (let name in this.types) {
            if (this.types[name] == typeId) {
                typename = name;
            }
        }
        return typename;
    }

    setAddr(addr, typeId) {
        let typename = this._getTypeNameByTypeId(typeId);
        if (addr == 1) {
            this.addresses = {}
        }
        let addrs = this.addresses[typename];
        if (!addrs) {
            addrs = [];
            this.addresses[typename] = addrs;
        }
        addrs.push(addr);
    };

    getAddr(typeId, idx) {
        let typename = this._getTypeNameByTypeId(typeId);
        let addrs = this.addresses[typename]
        if (addrs == undefined) return 0; // invalid
        let r = addrs[idx - 1];
        if (r === undefined) return 0;
        return r;
    };

    setData(addr, data) {
        this.datas[addr] = data;
    };

    getData(typeId, idx) {
        let addr = this.getAddr(typeId, idx);
        if (addr == 0) {
            return 0;
        } else {
            let data = this.datas[addr];
            if (data != undefined) return data;
            return 0;
        }
    };

    regAllocID(handler) { //handler : (index, type, subtype)=>void
        if (!this.allocIDHandlers) {
            this.allocIDHandlers = []
        }
        this.allocIDHandlers.push(handler);
    }

    unregAllocID(handler) {
        if (!this.allocIDHandlers) {
            this.allocIDHandlers = []
        }
        let allocIDHandlers1 = [];
        for (let handler1 of this.allocIDHandlers) {
            if (handler == handler1) continue;
            allocIDHandlers1.push(handler);
        }
        this.allocIDHandlers = allocIDHandlers1;
    }

    start(device) {
        this.stop();

        let askAddrTimerId = setInterval(() => {
            device.asyncWriteProtocol('f0f7', ['ff1000']);
        }, 1000);

        let cancellAskAddr = () => {
            clearInterval(askAddrTimerId);
        }
        this._canceller.push(cancellAskAddr);

        // 设置地址
        let cancellSetAddr = device.subscribeReadProtocol('f0f7', ['BYTE', '10', 'BYTE', 'BYTE'], (data) => {
            let addr = data[0];
            let type = data[1];
            let subtype = data[2];
            let typeId = type * 256 + subtype;
            this.setAddr(addr, typeId);
            if (this.allocIDHandlers) {
                for (let handler of this.allocIDHandlers) {
                    try {
                        handler(addr, type, subtype);
                    } catch (ex) {
                        console.error('allocID', ex.toString());
                    }
                }
            }

        });
        this._canceller.push(cancellSetAddr);

        let cancelListenmbuild_ranging = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_ranging >> 8, this.types.mbuild_ranging & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_ranging);

        let cancelListenmbuild_temperatureHumidity = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_temperatureHumidity >> 8, this.types.mbuild_temperatureHumidity & 0xff, 0x01, 'byte', 'BYTE'], (data) => {
            let addr = data[0];
            let temperature = data[1].toFixed(1) * 100 / 100;
            let humidity = data[2].toFixed(1) * 100 / 100;
            this.setData(addr, {
                temperature,
                humidity
            });
        });
        this._canceller.push(cancelListenmbuild_temperatureHumidity);

        let cancelListenmbuild_temperature = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_temperature >> 8, this.types.mbuild_temperature & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_temperature);

        let cancelListensound_sensor = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.sound_sensor >> 8, this.types.sound_sensor & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListensound_sensor);

        let cancelListenlight = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.light >> 8, this.types.light & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenlight);

        let cancelListensoil_moisture = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.soil_moisture >> 8, this.types.soil_moisture & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListensoil_moisture);

        let cancelListenultrasonic_ranging = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.ultrasonic_ranging >> 8, this.types.ultrasonic_ranging & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenultrasonic_ranging);

        let cancelListenmbuild_button = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_button >> 8, this.types.mbuild_button & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_button);

        let cancelListenmbuild_pir = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_pir >> 8, this.types.mbuild_pir & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_pir);

        let cancelListenmbuild_joystick = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_joystick >> 8, this.types.mbuild_joystick & 0xff, 0x01, 'byte', 'byte'], (data) => {
            let addr = data[0];
            let joystick_x = data[1];
            let joystick_y = data[2];
            this.setData(addr, {
                joystick_x,
                joystick_y
            });
        });
        this._canceller.push(cancelListenmbuild_joystick);

        let cancelListenmbuild_touch_sensor = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_touch_sensor >> 8, this.types.mbuild_touch_sensor & 0xff, 0x01, 'byte'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_touch_sensor);

        let cancelListenfollower = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.follower >> 8, this.types.follower & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenfollower);

        let cancelListentouch = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.touch >> 8, this.types.touch & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListentouch);

        let cancelListencoloridentify = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.coloridentify >> 8, this.types.coloridentify & 0xff, 0x01, 'SHORT', 'SHORT', 'SHORT'], (data) => {
            let addr = data[0];
            let coloridentify_r = data[1];
            let coloridentify_g = data[2];
            let coloridentify_b = data[3];
            this.setData(addr, {
                coloridentify_r,
                coloridentify_g,
                coloridentify_b
            });
        });
        this._canceller.push(cancelListencoloridentify);

        let cancelListengyro = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.gyro >> 8, this.types.gyro & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListengyro);


        let cancelListenmagnetic = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.magnetic >> 8, this.types.magnetic & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmagnetic);

        let cancelListenmbuild_slider = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_slider >> 8, this.types.mbuild_slider & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_slider);

        let cancelListenmbuild_flame = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_flame >> 8, this.types.mbuild_flame & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_flame);

        let cancelListenmbuild_gas = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_gas >> 8, this.types.mbuild_gas & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(addr, value);
        });
        this._canceller.push(cancelListenmbuild_gas);
    };


    stop() {
        for (let can of this._canceller) {
            can();
        }
        this._canceller = [];
    }
}

const neuronsKits = new CNeurons();
async (args, app, device, block) => {
    let index = parseInt(args.index);
    let data = neuronsKits.getData(neuronsKits.types.mbuild_ranging, index);
    return data;
}
async (args, app, device, block) => {
    let index = parseInt(args.index);
    let data = neuronsKits.getData(neuronsKits.types.mbuild_temperatureHumidity, index);
    if (data == 0) return 0;
    return data.mbuild_temperature;
}

const BITS2HEX = (matrix, w, h) => {
    let r = [];
    for (let i = 0; i < w * h; i = i + 8) {
        let temp = 0;
        for (let j = 0; j < 8; j++) {
            if (isNaN(matrix[i + j])) {
                matrix = matrix + '0'
            }
            temp += parseInt(matrix[i + j]) * Math.pow(2, (7 - j));
        }
        r.push(temp);
    }
    return r
}

const limitedScopeOfArgs = (val, min, max) => {
    if (val < min)
        val = min;
    else if (val > max)
        val = max;
    return val;
}

const Datamanage = (index) => {
    let id = Math.round(parseFloat(index));
    if (id <= 0) {
        id = 1;
    }
    return id;
}

const parseIndex = (index) => {
    let id = Math.round(parseFloat(index));
    if (id <= 0) {
        id = 1;
    }
    return id;
}

const parseParameter = (value, min, max) => {
    let data = Math.round(parseFloat(value));
    if (!isNaN(data)) {
        if (min != undefined) {
            if (data < min) {
                data = min;
            }
        }
        if (max != undefined) {
            if (data > max) {
                data = max;
            }
        }
    }
    return data;
}

class OnlineUtil {
    // 延时 n 秒
    static async delay(n) {
        return new Promise(res => setTimeout(() => res(), n * 1000));
    }
    static bits2hex(matrix, w, h) {
        let r = ''
        for (let i = 0; i < w * h - 1; i = i + 4) {
            let x = Number(matrix[i])
            let y = Number(matrix[i + 1])
            let z = Number(matrix[i + 2])
            let w1 = Number(matrix[i + 3])
            r += (x * 8 + y * 4 + z * 2 + w1).toString(16)
        }
        return r
    }
    static crc32(Instr) {
        if (!OnlineUtil._Crc32Table) OnlineUtil._initCrc();
        let Crc = 0xFFFFFFFF;
        for (let i = 0; i < Instr.length; i++)
            Crc = ((Crc >> 8) & 0x00FFFFFF) ^ OnlineUtil._Crc32Table[(Crc & 0xFF) ^ Instr[i]];
        Crc ^= 0xFFFFFFFF;
        Crc = Crc >>> 0
        return Crc;
    }
    static _initCrc() {
        OnlineUtil._Crc32Table = []
        for (let i = 0; i < 256; i++) {
            let Crc = i;
            for (let j = 0; j < 8; j++) {
                if (Crc & 1)
                    Crc = ((Crc >> 1) & 0x7FFFFFFF) ^ 0xEDB88320;
                else
                    Crc = ((Crc >> 1) & 0x7FFFFFFF);
            }
            OnlineUtil._Crc32Table.push(Crc)
        }
    }
}

/**
 * firmware updator
 */

const config = {
    allocReq: [0xff, 0x10, 0x00],
    channel: 'firmware.uploader',
    protocol: 'f0f7',
    hasPort: false,
    servoProtocol: false,
    segment: 64,
    hasMainCtrl: false,
    allocIDProxy: true
};


const hardwareIDTab = [{
        hidM: 256,
        hidL: 580,
        typeid: 0x6209
    },
    {
        hidM: 256,
        hidL: 683,
        typeid: 0x620a
    },
    {
        hidM: 256,
        hidL: 0,
        typeid: 0x6604
    },
    {
        hidM: 194,
        hidL: 379,
        typeid: 0x6312
    },
    {
        hidM: 256,
        hidL: 960,
        typeid: 0x6313
    },
    {
        hidM: 194,
        hidL: 512,
        typeid: 0x6314
    },
    {
        hidM: 194,
        hidL: 960,
        typeid: 0x6315
    },
    {
        hidM: 256,
        hidL: 64,
        typeid: 0x6316
    },
    {
        hidM: 194,
        hidL: 768,
        typeid: 0x6318
    },
    {
        hidM: 320,
        hidL: 1023,
        typeid: 0x6317
    },
    {
        hidM: 194,
        hidL: 830,
        typeid: 0x6319
    },
    {
        hidM: 256,
        hidL: 830,
        typeid: 0x631a
    },
    {
        hidM: 320,
        hidL: 256,
        typeid: 0x640d
    },
    {
        hidM: 194,
        hidL: 129,
        typeid: 0x640a
    },
    {
        hidM: 194,
        hidL: 645,
        typeid: 0x640b
    },
    {
        hidM: 194,
        hidL: 579,
        typeid: 0x640c
    },
    {
        hidM: 320,
        hidL: 194,
        typeid: 0x6507
    },
    {
        hidM: 256,
        hidL: 129,
        typeid: 0x6508
    },
    {
        hidM: 256,
        hidL: 1023,
        typeid: 0x6509
    },
    {
        hidM: 194,
        hidL: 1023,
        typeid: 0x6802
    },
    {
        hidM: 320,
        hidL: 645,
        typeid: 0x631b
    },
    {
        hidM: 320,
        hidL: 683,
        typeid: 0x631c
    },
    {
        hidM: 256,
        hidL: 768,
        typeid: 0x631e
    },
    {
        hidM: 256,
        hidL: 895,
        typeid: 0x640e
    },
    {
        hidM: 194,
        hidL: 895,
        typeid: 0x6311
    }
];


/**
 * 协议配置
 */
const MAX_ID = 0xffff; // short
const Protocol = {
    _id: 0,
    // ID生成器，用于请求流水号，和返回对应
    generateID() {
        if (Protocol._id > MAX_ID) {
            Protocol._id = 0;
        }
        return Protocol._id++;
    },
}

// console.log("crc32=",makeCrc32Table());
// 步骤0(option)：request ready for update to controller
if (config.hasMainCtrl) {
    Protocol._prepareUpdate = async (app, device) => {
        let req = [0x00, 0x00, 0x70, 0x00, 0x71, 0x01]
        await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    }
    // 步骤0(option)：request ready for update to controller
    Protocol._endUpdate = async (app, device) => {
        let req = [0x00, 0x00, 0x70, 0x00, 0x71, 0x02]
        await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    }
}

// 步骤一：分配ID
Protocol._allocID = async (app, device, port) => {
    let req = config.allocReq;
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
}

// 步骤二：查询固版本
Protocol._checkVer = async (app, device, port, modID) => {
    let req = [modID, 0x12];
    if (config.hasPort) {
        req = [port].concat(req);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let rsp = [modID, 0x12, 'BYTE', 'BYTE', 'SHORT'];
    if (config.hasPort) {
        rsp = [port].concat(rsp);
    }
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let version1 = ret[0].toString().padStart(2, '0');
        let version2 = ret[1].toString().padStart(2, '0');
        let version3 = ret[2].toString().padStart(3, '0');
        let ver = `${version1}.${version2}.${version3}`;
        return ver;
    }
    return null;
}
// 步骤三:升级模块
// 切升级模式
Protocol._switchBootLoad = async (app, device, port, modID, types) => {
    let type = types[0];
    let subtype = types[1];
    let req = [modID, 0x61, 0x05, ['BYTE', type],
        ['BYTE', subtype]
    ];
    let rsp = [modID, 0x15, 'byte'];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    return true;
    throw "TODO by CKR"
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let res = ret[0]
        let err = ''
        if (res == 0x0f) { //succ
            return true
        } else if (res == 0x11) { //信道忙
            err = 'channel busy when update';
            app.log(err);
            console.error(err);
        } else if (res == 0x12) { //错误的服???类�����
            err = 'wrong serice request when update';
            app.log(err);
            console.error(err);
        } else if (res == 0x13) { //错误的数据
            err = 'wrong data when update';
            app.log(err);
            console.error(err);
        } else {
            err = `unknown error of ${res.toString(16)} when update`;
            app.log(err);
            console.error(err);
        }
    }
    return false;
}
// 步骤五：查模块硬件ID
Protocol._getHardwareID = async (app, device, port, modID) => {
    let req = [modID, 0x61, 0x06];
    let rsp = [modID, 0x61, 0x06, 'short', 'short'];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp, 2000);
    if (ret) {
        return [ret[0], ret[1]] //ID1, ID2
    }
    return null;
}
// 步骤六：传送升级文件（若返回校验错误或者没���返回，可以重传包）
// 6.1 传送文件信息
Protocol._updateFileInfo = async (app, device, port, index, data) => {
    let reqID = 0x00;
    let fileSz = data.length;
    let crcData = OnlineUtil.crc32(data);
    let req = [index, 0x61, 0x07, ['SHORT', reqID],
        ['long', data.length],
        ['long', crcData]
    ];
    let rsp = [index, 0x61, 0x07, ['SHORT', reqID], 'BYTE']
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    let err = '';
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let res = ret[0]
        if (res == 0x01) return true;
        else if (res == 0x00) {
            err = `error ${res} when updata file info`;
        } else {
            err = `internal error ${res} when updata file info`;
        }
    } else {
        err = `time out when updata file info`;
    }
    app.log(err);
    console.error(err);
    return false;
}
// 6.2 传送文件块
Protocol._updateChunk = async (app, device, port, modID, chunk, chunkIdx) => {
    let req = [modID, 0x61, 0x07, ['SHORT', chunkIdx],
        ['block', chunk]
    ];
    let rsp = [modID, 0x61, 0x07, ['SHORT', chunkIdx],
        'BYTE'
    ];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    };

    let err = '';
    await device.asyncWriteProtocol(config.protocol, req, 0, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    if (ret) {
        let res = ret[0]
        if (res == 0x01) return true;
        else if (res == 0x00) {
            err = `error ${res} when updata file chunk`;
        } else {
            err = `internal error ${res} when updata file chunk`;
        }
    } else {
        err = `time out when updata file chunk`;
    }
    app.log(err);
    console.error(err);
    return false;
}
// 步骤7：查询升级结果，若返回升级失败，重新传送升级文件。
Protocol._updateCheckSucc = async (app, device, port, modID) => {
    let reqID = Protocol.generateID();
    let req = [modID, 0x61, 0x08];
    let rsp = [modID, 0x61, 0x08, 'BYTE'];
    if (config.hasPort) {
        req = [port].concat(req);
        rsp = [port].concat(rsp);
    }
    let err = '';
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    let ret = await device.asyncReadProtocol(config.protocol, rsp);
    // throw "TODO by lxf"
    if (ret) {
        let res = ret[0]
        if (res == 0x01) return true;
        else if (res == 0x00) {
            err = `error ${res} after updating the whole file`;
        } else {
            err = `internal error ${res} after updating the whole file`;
        }
    } else {
        err = `time out after updating the whole file`;
    }
    app.log(err);
    console.error(err);
    return false;
}
// 步骤八：重启模块（升级成功后重启模块
Protocol._updateReset = async (app, device, port, modID) => {
    let req = [modID, 0x11]
    if (config.hasPort) {
        req = [port].concat(req);
    }
    await device.asyncWriteProtocol(config.protocol, req, 50, config.channel);
    await OnlineUtil.delay(2);
}
// step:6~8
Protocol._update = async (app, device, port, index, data, logHandler, progressHandle, finishHandler, errHandler) => {
    let err = 'update faie';
    // try 3 times
    let tryMax = 5;
    let tryCount = 0
    for (tryCount = 0; tryCount < tryMax; ++tryCount) {
        OnlineUtil.delay(5);
        let r = await Protocol._updateFileInfo(app, device, port, index, data);
        if (r) break;
    }
    if (tryCount == tryMax) {
        err = `update file info fail ${tryMax} times, update quit`
        return false
    }

    let fileOffset = 0;
    let fileSz = data.length;
    let chunkIdx = 1;
    do {
        let end = fileOffset + config.segment;
        if (end >= data.length) {
            end = data.length
        }
        let chunk = data.slice(fileOffset, end);

        for (tryCount = 0; tryCount < tryMax; ++tryCount) {
            let r = await Protocol._updateChunk(app, device, port, index, chunk, chunkIdx);
            if (r) break;
        }
        if (tryCount == 3) {
            err = `update chunk at ${fileOffset} fail ${tryMax} times, update quit`
            return false
        }
        chunkIdx++;
        fileOffset = end;
        progressHandle(Math.floor((fileOffset / data.length) * 100));
    } while (fileOffset < data.length);
    let res = await Protocol._updateCheckSucc(app, device, port, index);
    if (!res) return false;
    progressHandle(100);
    await Protocol._updateReset(app, device, port, index);
    return true;
}

/*分配ID等待回包*/
Protocol.assign_id_command = async (app, device, port, idx) => {
    await OnlineUtil.delay(3);
    await Protocol._allocID(app, device, port);
    let send_count = 0;
    let typeid = await _allocator.getAddr(port, idx);
    while (typeid == null) {
        send_count += 1;
        await OnlineUtil.delay(1);
        await Protocol._allocID(app, device, port);
        typeid = await _allocator.getAddr(port, idx);
        if (typeid != null) {
            break;
        }
        if (send_count > 5) {
            break
        }
    }
    // # print (responses_result_dict["assign_id"])
    if (typeid != null) {
        return typeid;
    }
    return null;
}

/*升级一个模块*/
Protocol.updateModeByAddr = async (app, device, port, index, typeid, data, logHandler, progressHandle, finishHandler, errHandler) => {
    let tryMax = 5;
    let type = Math.floor(typeid / 256);
    let subType = typeid % 256
    // for (let i = 0; i < tryMax; ++i) {
    await Protocol._switchBootLoad(app, device, port, index, [type, subType]) //[type, subType]
    let typeid1 = await Protocol.assign_id_command(app, device, port, index);
    type = Math.floor(typeid1 / 256);
    subType = typeid1 % 256
    await OnlineUtil.delay(0.2)

    await OnlineUtil.delay(5)
    //if ((type == 0x00) && (subType == 0x00)) {
    await Protocol.allocID(app, device);
    await OnlineUtil.delay(1);
    await Protocol._update(app, device, port, index, data, logHandler, progressHandle, finishHandler, errHandler);
    return
    //}
    // }
    throw "bootload fail"
}

Protocol.HardwareIDTotypeId = async (hardwareID) => {
    let found = hardwareIDTab.find((data) => {
        let cond1 = Math.abs(hardwareID[0] - data.hidM) < 50;
        let cond2 = Math.abs(hardwareID[1] - data.hidL) < 50;
        return cond1 && cond2
    })
    if (found) return found.typeid
}



class CAllocator {
    constructor() {
        // [portID:[index:{typeId, version}]
        this.addresses = [];
        // {typeId:{data, version}} //user provided
        this.typeDatas = {}
        if (config.allocIDProxy) {
            this.onAllocID = this.onAllocID.bind(this);
            neuronsKits.regAllocID(this.onAllocID);
        }
    }

    resetAddr() {
        this.addresses = []
    }

    onAllocID(index, type, subtype) {
        let typeId = type * 256 + subtype;
        this.setAddr(1, index, typeId);
    }

    setAddr(port, index, typeId) {
        let portDatas = this.addresses[port];
        if (!portDatas) {
            portDatas = [];
            this.addresses[port] = portDatas;
        }
        let addr = portDatas[index];
        if (!addr) {
            addr = {}
            portDatas[index] = addr;
        }
        addr.typeId = typeId;
    };

    getAddr(portID, idx) {
        let addrs = this.addresses[portID]
        if (addrs == undefined) return 0; // invalid
        let r = addrs[idx - 1];
        if (r === undefined) return 0;
        return r.typeId;
    };

    async iterateModule(asyncHandler) {
        for (let port = 1; port < _allocator.addresses.length; ++port) {
            let addrs = _allocator.addresses[port];
            if (addrs == undefined) continue;
            for (let index = 1; index < addrs.length; ++index) {
                let addr = addrs[index];
                if (addr == undefined) continue;
                await asyncHandler(port, index, addr)
            }
        }
    }

    async fixAllocIDByHw(app, device) {
        await this.iterateModule(async (port, index, addr) => {
            let typeid = addr.typeId;
            if (typeid == 0) {
                let hardid = await Protocol._getHardwareID(app, device, port, index);
                let count_typid = await Protocol.HardwareIDTotypeId(hardid);
                typeid = count_typid;
                addr.typeId = typeid;
            }
        })

    }

    setVersion(port, index, version) {
        let portDatas = this.addresses[port];
        if (!portDatas) {
            portDatas = [];
            this.addresses[port] = portDatas;
        }
        let addr = portDatas[index];
        if (!addr) {
            addr = {}
            portDatas[index] = addr;
        }
        addr.version = version;
    };

    //比较所有模块版本号
    async compareVersion(app, device, moduleInfo) {
        let needUpdate = false;
        await this.iterateModule(async (port, index, addr) => {
            if (addr.typeId == 0) {
                needUpdate = true;
            }
            let device_ver = addr.version;
            let file_ver = moduleInfo.get(addr.typeId)
            console.log(`-------typeId:${addr.typeId},device_ver:${device_ver},file_ver:${file_ver}`)
            if ((file_ver != device_ver) && (device_ver != null)) {
                needUpdate = true;
            }
        });
        return needUpdate;
    }

    async allocID(app, device, getVersion = false) {
        await Protocol._allocID(app, device, 1);
        if (config.allocIDProxy) {
            await OnlineUtil.delay(0.5);
            await this.fixAllocIDByHw(app, device);
            if (getVersion) {
                await this.iterateModule(async (port, index, addr) => {
                    let version = await Protocol._checkVer(app, device, port, index);
                    addr.version = version;
                })
            }
            return;
        }

        let req = ['BYTE', 0x10, 'BYTE', 'BYTE'];
        if (config.hasPort) {
            req = ['BYTE'].concat(req);
        }
        let cancellSetAddr = device.subscribeReadProtocol(config.protocol, req, async (data) => {
            let portIdx = 0;
            let indexIdx = 0;
            let typeIdx = 1;
            let subTypeIdx = 2;
            let port = 1;
            if (config.hasPort) {
                indexIdx = 1;
                typeIdx = 2;
                subTypeIdx = 3;
                port = data[portIdx];
            }
            let index = data[indexIdx];
            let type = data[typeIdx];
            let subtype = data[subTypeIdx];
            let typeId = type * 256 + subtype;
            let count_typid = 0;
            console.log(`set port: ${port}, addr:${index}, typeId:${typeId}`);
            if (typeId == 0) {
                let hardid = await Protocol._getHardwareID(app, device, port, index);
                count_typid = await Protocol.HardwareIDTotypeId(hardid);
                console.log(`--------------------------------------hardid:${hardid},count_typid:${count_typid}`);
                typeId = count_typid;
            }
            this.setAddr(port, index, typeId);
            if (getVersion) {
                let version = await Protocol._checkVer(app, device, port, index);
                this.setVersion(port, index, version);
            }
        });

        let cancellSetSmartServo;
        if (config.servoProtocol) {
            cancellSetSmartServo = device.subscribeReadProtocol(config.protocol, ['BYTE', 'BYTE', 0x10, 0x60], (data) => {
                let port = data[0];
                let index = data[1];
                let typeId = 0x6000;
                this.setAddr(port, index, typeId);
            });
        }
        await OnlineUtil.delay(1.5);

        cancellSetAddr();
        if (config.servoProtocol) {
            cancellSetSmartServo();
        }
    }

    bindDatas(datas) {
        this.typeDatas = {}
        for (let {
                type,
                data,
                version
            } of datas) {
            if (type == "") { // if mother board
                this.typeDatas[0] = {
                    data,
                    version
                };
            } else {
                let typeId = parseInt(type, 16);
                this.typeDatas[typeId] = {
                    data,
                    version
                };
            }
        }
    }
}

let _allocator = null;

function getAllocator() {
    if (!_allocator) {
        _allocator = new CAllocator();
    }
    return _allocator;
}

Protocol.bindDatas = (datas) => {
    getAllocator().bindDatas(datas)
}

Protocol.allocID = async (app, device) => {
    getAllocator().resetAddr();
    await getAllocator().allocID(app, device);
}


Protocol.uploadModules = async (app, device, logHandler, progressHandle, finishHandler, errHandler) => {
    for (let port = 0; port < _allocator.addresses.length; ++port) {
        let typeIdVers = _allocator.addresses[port]
        if (!typeIdVers) continue;
        let typeids = typeIdVers.map(addr => addr.typeId)
        for (let index = 1; index < typeids.length; ++index) {
            let typeid = typeids[index]
            if (!typeid) continue // empty type// but unreachable!!
            let dataversion = _allocator.typeDatas[typeid]
            if (!dataversion) {
                throw "not have this dataversion file!!!" + dataversion;
            }
            // check if version is lower
            let device_ver = await Protocol._checkVer(app, device, port, index);
            console.log(`--------------------------port:${port},index:${index},device_ver:${device_ver}`)
            let file_ver = dataversion.version;
            console.log(`--------------------------file_ver:${file_ver}`)
            //if (file_ver >= device_ver || device_ver == null)
            {
                let data = dataversion.data;
                if (!data) {
                    throw "not have this data file!!!" + dataversion;
                }

                let type = Math.floor(typeid / 256);
                let subType = typeid % 256
                await Protocol.updateModeByAddr(app, device, port, index, typeid, new Uint8Array(data), logHandler, progressHandle, finishHandler, errHandler);
                console.log(`upload module of port:${port} index:${index} type:${type}, subType:${subType} succuess`);
            }
        }
    }
}

// 升级主控ESP32
Protocol.updateESP32 = (app, device, data, logHandler, progressHandle, finishHandler, errHandler) => {
    // TODO by CKR
    finishHandler();
    return true
    let uploaderService = app.getService('firmware.uploader');
    let uploader1 = uploaderService.getDriver('esptool');
    if (!uploader1) {
        errHandler('cannot find firmware driver of esptool');
        return false;
    }
    try {
        uploader1(data, logHandler, progressHandle, finishHandler, errHandler);
    } catch (ex) { // 主控升级出错
        errHandler(`upload esptool fail` + ex);
        return false;
    }
    return true
}

// let total_size = 1
// 升级升部固件
Protocol.updateFirmwares = async (app, device, datas, logHandler, progressHandle, finishHandler, errHandler) => {
    try {
        if (datas instanceof Array) { // 包括模块的升级
            // prepare datas for update
            if (config.hasMainCtrl) {
                await Protocol._prepareUpdate(app, device);
            }
            Protocol.bindDatas(datas);
            await Protocol.allocID(app, device)
            window._allocID_debug = _allocator;
            // 模块升级
            await Protocol.uploadModules(app, device, logHandler, progressHandle, finishHandler, errHandler);
            // 主控升级
            // check if version is lower
            if (config.hasMainCtrl) {
                let mainFirmwareDataVersion = _allocator.typeDatas[0];
                Protocol.updateESP32(app, device, mainFirmwareDataVersion.data, logHandler, progressHandle, finishHandler, errHandler)
            } else {
                finishHandler();
            }

        } else { // 单主控升级
            // 主控
            if (config.hasMainCtrl) {
                if (Protocol.updateESP32(app, device, datas, logHandler, progressHandle, finishHandler, errHandler)) {
                    return;
                }
            }
        }
    } catch (ex) {
        errHandler('unknown error of ' + ex);
        return;
    }
}

/**
 * firmware updator end
 */

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



class ExtMbuild {

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
                check: (app, device, info) => {
                    return new Promise(async (resolve) => {
                        if (!this.moduleInfo) {
                            this.moduleInfo = new Map();
                            const defaultFirmware = info.firmware[0];
                            this.moduleInfo.set(0, defaultFirmware.version); //主板固件
                            for (const mod of defaultFirmware.modules) {
                                const typeid = parseInt(mod.type.substring(0, 6), 16);
                                this.moduleInfo.set(typeid, mod.version);
                            }
                        }

                        // checkFirmwareVersionFinish = false;
                        //await OnlineUtil.delay(2);

                        setTimeout(async () => {
                            try {
                                await getAllocator().allocID(app, device, true);
                                let ret = await getAllocator().compareVersion(app, device, this.moduleInfo);
                                resolve(ret);
                            } catch (e) {
                                console.log('firmware version check err:', e);
                                resolve(false);
                            }
                            // checkFirmwareVersionFinish = true;
                        }, 2000);
                    });
                }
            }),
            'BLOCK_1552098662564': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    let audio = args.audio;
                    let audio_len = audio.length;
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x01, ['BYTE', audio_len],
                        ['BYTE', audio[0].charCodeAt()],
                        ['BYTE', audio[1].charCodeAt()],
                        ['BYTE', audio[2].charCodeAt()],
                        ['BYTE', audio[3].charCodeAt()]
                    ], 0);
                }
            },
            'BLOCK_1552098518281': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    let audio = args.audio;
                    let audio_len = audio.length;

                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x01, ['BYTE', audio_len],
                        ['BYTE', audio[0].charCodeAt()],
                        ['BYTE', audio[1].charCodeAt()],
                        ['BYTE', audio[2].charCodeAt()],
                        ['BYTE', audio[3].charCodeAt()]
                    ], 0);
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x07], 0);
                    await device.asyncReadProtocol('f0f7', [id, '6604', 0x07, 0x00], 5000);
                }
            },
            'BLOCK_1553659508570': {
                onRun: async (args, app, device, block) => {
                    let string = args.emotion;
                    return string;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1553659477597': {
                onRun: async (args, app, device, block) => {
                    let string = args.electronic;
                    return string;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1554135354526': {
                onRun: async (args, app, device, block) => {
                    let string = args.physics;
                    return string;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1554135384603': {
                onRun: async (args, app, device, block) => {
                    let string = args.letter;
                    return string;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1554170476791': {
                onRun: async (args, app, device, block) => {
                    let string = args.english;
                    return string;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552097730509': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    let hz = parseInt(args.scale);
                    let time = parseFloat(args.time);
                    if ((isNaN(time)) || (time <= 0)) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x02, ['SHORT', hz]], 0);
                    await delay(time * 1000);
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x02, ['SHORT', 0]], 0);
                }
            },
            'BLOCK_1551941729010': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    let hz = Datamanage(args.hz);
                    hz = limitedScopeOfArgs(hz, 0, 5000);
                    if (isNaN(hz)) {
                        hz = 1;
                    }
                    let time = parseFloat(args.time);
                    if ((isNaN(time)) || (time <= 0)) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x02, ['SHORT', hz]], 0);
                    await delay(time * 1000);
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x02, ['SHORT', 0]], 0);

                }
            },
            'BLOCK_1552098352986': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x06], 0);
                }
            },
            'BLOCK_1552098700328': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    let volume = Math.round(parseFloat(args.volume));
                    if (isNaN(volume)) {
                        return;
                    }
                    volume = limitedScopeOfArgs(volume, -100, 100);
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x04, ['byte', volume]], 0);
                }
            },
            'BLOCK_1552098863431': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return;
                    }
                    let volume = Math.round(parseFloat(args.volume));
                    if (isNaN(volume)) {
                        return;
                    }
                    volume = limitedScopeOfArgs(volume, 0, 100);
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x03, ['BYTE', volume]], 0);
                }
            },
            'BLOCK_1552099437309': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x05], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6604', 0x05, 'byte']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1544499601258': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6604, index);
                    if (id == 0) {
                        return false;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6604', 0x07], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6604', 0x07, 'BYTE']);
                    if (data[0] == 1) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1551511400423': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6507, index);
                    if (id == 0) {
                        return;
                    }

                    let color = args.color;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    let time = parseFloat(args.time);
                    if ((time <= 0) || (isNaN(time))) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6507', 0x01, ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ]);
                    await delay(time * 1000);
                    await device.asyncWriteProtocol('f0f7', [id, '6507', 0x01, ['SHORT', 0],
                        ['SHORT', 0],
                        ['SHORT', 0]
                    ]);
                }
            },
            'BLOCK_1551512546915': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    let id = neuronsKits.getAddr(0x6507, index);
                    if (id == 0) {
                        return;
                    }
                    let color = args.color;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    await device.asyncWriteProtocol('f0f7', [id, '6507', 0x01, ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ]);
                }
            },
            'BLOCK_1551512619907': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    let id = 0;
                    id = neuronsKits.getAddr(0x6507, index);
                    if (id == 0) {
                        return;
                    }
                    var r = 0;
                    var g = 0;
                    var b = 0;
                    await device.asyncWriteProtocol('f0f7', [id, '6507', 0x01, ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ]);
                }
            },
            'BLOCK_1551512869956': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6507, index);
                    if (id == 0) {
                        return;
                    }
                    let color = args.color;
                    let value = parseParameter(args.value);
                    if (isNaN(value)) {
                        return;
                    }
                    if (value < 0) {
                        value = 0;
                    } else if (value > 255) {
                        value = 255;
                    }
                    if (color == 'r') {
                        await device.asyncWriteProtocol('f0f7', [id, '6507', 0x02, ['SHORT', value]]);
                    } else if (color == 'g') {
                        await device.asyncWriteProtocol('f0f7', [id, '6507', 0x03, ['SHORT', value]]);
                    }
                    if (color == 'b') {
                        await device.asyncWriteProtocol('f0f7', [id, '6507', 0x04, ['SHORT', value]]);
                    }
                }
            },
            'BLOCK_1551512900115': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6507, index);
                    if (id == 0) {
                        return;
                    }
                    let color = args.color;
                    let value = parseParameter(args.value);
                    if (isNaN(value)) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6507', 0x05]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6507', 0x05, 'SHORT', 'SHORT', 'SHORT']);
                    let r = data[0];
                    let g = data[1];
                    let b = data[2];
                    if (color == 'r') {
                        r = r + value;
                        if (r < 0) {
                            r = 0;
                        } else if (r > 255) {
                            r = 255
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6507', 0x02, ['SHORT', r]]);
                    } else if (color == 'g') {
                        g = g + value;
                        if (g < 0) {
                            g = 0;
                        } else if (g > 255) {
                            g = 255;
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6507', 0x03, ['SHORT', g]]);
                    } else if (color == 'b') {
                        b = b + value;
                        if (b < 0) {
                            b = 0;
                        } else if (b > 255) {
                            b = 255;
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6507', 0x04, ['SHORT', b]]);
                    }
                }
            },
            'BLOCK_1551513087035': {
                onRun: async (args, app, device, block) => {
                    let index = parseParameter(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6507, index);
                    if (id == 0) {
                        return 0;
                    }
                    let color = args.color;
                    await device.asyncWriteProtocol('f0f7', [id, '6507', 0x05]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6507', 0x05, 'SHORT', 'SHORT', 'SHORT']);
                    let r = data[0];
                    let g = data[1];
                    let b = data[2];
                    if (color == 'r') {
                        return r;
                    } else if (color == 'g') {
                        return g;
                    } else if (color == 'b') {
                        return b;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550541402675': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }
                    let color_array = (function(matrix, v, h) {
                        let ret_array = [];
                        for (let i = 0; i < (v * h); i++) {
                            ret_array.push(matrix[v * (i % h) + Math.floor(i / 12)]);
                        }
                        return ret_array;
                    }(args.facePanel, 3, 12));
                    let data = [];
                    for (let i = 0; i < color_array.length; i++) {
                        let byte = ['BYTE', color_array[i]];
                        data.push(byte);
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6508', 0x0c, ['BYTE', data.length]].concat(data), 0);
                }
            },
            'BLOCK_1550541816855': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }
                    let position = parseParameter(args.POSITION);
                    if (position < 1) {
                        position = 1;
                    } else if (position > 96) {
                        position = 96
                    }
                    let color = args.color;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);
                    await device.asyncWriteProtocol('f0f7', [id, '6508', 0x01, ['BYTE', position],
                        ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ], 0);
                }
            },
            'BLOCK_1550541885794': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }
                    let position = parseParameter(args.position);
                    if (isNaN(position)) {
                        return;
                    }
                    if (position < 1) {
                        position = 1;
                    } else if (position > 96) {
                        position = 96
                    }
                    var r = parseParameter(args.r);
                    if (isNaN(r)) {
                        return;
                    }
                    var g = parseParameter(args.g);
                    if (isNaN(g)) {
                        return;
                    }
                    var b = parseParameter(args.b);
                    if (isNaN(b)) {
                        return;
                    }
                    if (r < 0) {
                        r = 0
                    } else if (r > 255) {
                        r = 255;
                    }

                    if (g < 0) {
                        g = 0;
                    } else if (g > 255) {
                        g = 255;
                    }

                    if (b < 0) {
                        b = 0;
                    } else if (b > 255) {
                        b = 255;
                    }

                    await device.asyncWriteProtocol('f0f7', [id, '6508', 0x01, ['BYTE', position],
                        ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ], 0);
                }
            },
            'BLOCK_1550541898810': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }
                    let position = parseParameter(args.position);
                    if (isNaN(position)) {
                        return;
                    }
                    if (position < 1) {
                        position = 1;
                    } else if (position > 96) {
                        position = 96;
                    }
                    var r = 0;
                    var g = 0;
                    var b = 0;
                    await device.asyncWriteProtocol('f0f7', [id, '6508', 0x01, ['BYTE', position],
                        ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ], 0);
                }
            },
            'BLOCK_1550541910495': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6508', 0x04], 0);
                }
            },
            'BLOCK_1550541922579': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }
                    let color = args.color;
                    let position = parseParameter(args.position);
                    if (isNaN(position)) {
                        return;
                    }
                    if (position < 1) {
                        position = 1
                    } else if (position > 96) {
                        position = 96
                    }
                    var value = parseParameter(args.value);
                    if (isNaN(value)) {
                        return;
                    }
                    let cmd_type;
                    if (color == 'r') {
                        cmd_type = 0x05;
                    } else if (color == 'g') {
                        cmd_type = 0x06;
                    } else if (color == 'b') {
                        cmd_type = 0x07;
                    }
                    if (value < 0) {
                        value = 0;
                    } else if (value > 255) {
                        value = 255;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6508', cmd_type, ['BYTE', position],
                        ['SHORT', value]
                    ], 0);
                }
            },
            'BLOCK_1550541936947': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }

                    let color = args.color;
                    let position = parseParameter(args.position);
                    if (isNaN(position)) {
                        return;
                    }
                    if (position < 1) {
                        position = 1
                    } else if (position > 96) {
                        position = 96;
                    }
                    var value = parseParameter(args.value);
                    if (isNaN(value)) {
                        return;
                    }
                    let cmd_type;
                    if (color == 'r') {
                        cmd_type = 0x08;
                    } else if (color == 'g') {
                        cmd_type = 0x09;
                    } else if (color == 'b') {
                        cmd_type = 0x0a;
                    }
                    if (value < -255) {
                        value = -255;
                    } else if (value > 255) {
                        value = 255;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6508', cmd_type, ['BYTE', position],
                        ['short', value]
                    ], 0)
                }
            },
            'BLOCK_1550541949702': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = 0;
                    id = neuronsKits.getAddr(0x6508, index);
                    if (id == 0) {
                        return;
                    }

                    let mode = args.mode;
                    let display_mode = 0;
                    if (mode == '0') {
                        display_mode = 0;
                    } else if (mode == '1') {
                        display_mode = 0x04;
                    } else if (mode == '2') {
                        display_mode = 0x03;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6508', 0x0b, ['BYTE', display_mode]], 0);
                }
            },
            'BLOCK_1550543294244': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let time = parseFloat(args.time);
                    if ((time <= 0) || (isNaN(time))) {
                        return;
                    }
                    let panel = BITS2HEX(args.panel, 8, 16);
                    let data = [];
                    for (let i = 0; i < 16; i++) {
                        let byte = ['SHORT', panel[i]];
                        data.push(byte);
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x02].concat(data), 0);
                    await delay(time * 1000);
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x03], 0);
                }
            },
            'BLOCK_1550543302075': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let panel = BITS2HEX(args.face_panel, 8, 16);
                    let data = [];
                    for (let i = 0; i < 16; i++) {
                        let byte = ['SHORT', panel[i]];
                        data.push(byte);
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x02].concat(data), 0);
                }
            },
            'BLOCK_1550543309462': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }

                    let panel = BITS2HEX(args.face_panel, 8, 16);
                    let x = parseParameter(args.x, -16, 16);
                    if (isNaN(x)) {
                        return;
                    }
                    let y = parseParameter(args.y, -8, 8);
                    if (isNaN(y)) {
                        return;
                    }
                    let show_panel = [];

                    if (x >= 0) {
                        for (let i = 0; i < x; i++) {
                            show_panel.push(0);
                        }
                        for (let i = 0; i < (16 - x); i++) {
                            if (y > 0) {
                                show_panel.push(Math.floor(panel[i] / Math.pow(2, y)));
                            } else {
                                show_panel.push((panel[i] * Math.pow(2, -y)) % 256);
                            }

                        }
                    } else {
                        for (let i = -x; i < 16; i++) {
                            if (y > 0) {
                                show_panel.push(Math.floor(panel[i] / Math.pow(2, y)));
                            } else {
                                show_panel.push((panel[i] * Math.pow(2, -y)) % 256);
                            }
                        }
                        for (let i = (16 + x); i < 16; i++) {
                            show_panel.push(0)
                        }
                    }
                    let data = [];
                    for (let i = 0; i < 16; i++) {
                        let byte = ['SHORT', show_panel[i]];
                        data.push(byte);
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x02].concat(data), 0);
                }
            },
            'BLOCK_1550543317242': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let str = args.string;
                    if (typeof(str) == 'boolean') {
                        if (str == true) {
                            str = 'true';
                        } else if (str == false) {
                            str = 'false';
                        }
                    }
                    if (typeof(str) == 'number') {
                        str = "" + str;
                    }
                    let data = [];
                    for (let i = 0; i < str.length; i++) {
                        let ascii_code = str[i].charCodeAt();
                        if (ascii_code >= 128) {
                            ascii_code = 127;
                        }
                        let byte = ['BYTE', ascii_code];
                        data.push(byte);
                    }

                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x07, ['SHORT', str.length]].concat(data), 0);
                }
            },
            'BLOCK_1550543324310': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let str = args.string;
                    if (typeof(str) == 'boolean') {
                        if (str == true) {
                            str = 'true';
                        } else if (str == false) {
                            str = 'false';
                        }
                    }
                    if (typeof(str) == 'number') {
                        str = "" + str;
                    }
                    let data = [];
                    for (let i = 0; i < str.length; i++) {
                        let ascii_code = str[i].charCodeAt();
                        if (ascii_code >= 128) {
                            ascii_code = 127;
                        }
                        let byte = ['BYTE', ascii_code];
                        data.push(byte);
                    }

                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x0a, ['SHORT', str.length]].concat(data), 0);
                    let counts = 0;
                    while (true) {
                        if (counts > 600) {
                            break;
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6509', 0x08], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6509', 0x08, 'BYTE']);
                        if (data == 0x01) {
                            break;
                        }
                        counts++;
                        await delay(50)
                    }
                }
            },
            'BLOCK_1550543331829': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let x = parseParameter(args.pos_x, -240, 240);
                    if (isNaN(x)) {
                        return;
                    }
                    let y = parseParameter(args.pos_y, -8, 8);
                    if (isNaN(y)) {
                        return;
                    }
                    let str = args.string;

                    let data = [];
                    for (let i = 0; i < str.length; i++) {
                        let ascii_code = str[i].charCodeAt();
                        if (ascii_code >= 128) {
                            ascii_code = 127;
                        }
                        let byte = ['BYTE', ascii_code];
                        data.push(byte);
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x03], 0);
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x06, ['short', x],
                        ['short', y],
                        ['SHORT', str.length]
                    ].concat(data), 0);
                }
            },
            'BLOCK_1550543356832': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }

                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x03], 0);
                }
            },
            'BLOCK_1551514167557': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let x = parseParameter(args.pos_x, -1, 16);
                    if (isNaN(x)) {
                        return;
                    }
                    if (x < 0) {
                        return;
                    }
                    if (x > 15) {
                        return;
                    }
                    let y = parseParameter(args.pos_y, -1, 8);
                    if (isNaN(y)) {
                        return;
                    }
                    if (y < 0) {
                        return;
                    }
                    if (y > 7) {
                        return;
                    }
                    let value = 1;

                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x01, ['BYTE', x],
                        ['BYTE', y],
                        ['BYTE', value]
                    ], 0);

                }
            },
            'BLOCK_1551514227707': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let x = parseParameter(args.pos_x, -1, 16);
                    if (isNaN(x)) {
                        return;
                    }
                    if (x < 0) {
                        return;
                    }
                    if (x > 15) {
                        return;
                    }
                    let y = parseParameter(args.pos_y, -1, 8);
                    if (isNaN(y)) {
                        return;
                    }
                    if (y < 0) {
                        return;
                    }
                    if (y > 7) {
                        return;
                    }
                    let value = 0;

                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x01, ['BYTE', x],
                        ['BYTE', y],
                        ['BYTE', value]
                    ], 0);
                }
            },
            'BLOCK_1551514268592': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return;
                    }
                    let x = parseParameter(args.pos_x, -1, 16);
                    if (isNaN(x)) {
                        return;
                    }
                    if (x < 0) {
                        return;
                    }
                    if (x > 15) {
                        return;
                    }
                    let y = parseParameter(args.pos_y, -1, 8);
                    if (isNaN(y)) {
                        return;
                    }
                    if (y < 0) {
                        return;
                    }
                    if (y > 7) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x05, ['BYTE', x],
                        ['BYTE', y]
                    ], 0);
                }
            },
            'BLOCK_1551514378788': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6509, index);
                    if (id == 0) {
                        return false;
                    }
                    let x = parseParameter(args.pos_x, -1, 16);
                    if (isNaN(x)) {
                        return false;
                    }
                    if (x < 0) {
                        return false;
                    }
                    if (x > 15) {
                        return false
                    }
                    let y = parseParameter(args.pos_y, -1, 8);
                    if (isNaN(y)) {
                        return false;
                    }
                    if (y < 0) {
                        return false;
                    }
                    if (y > 7) {
                        return false;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6509', 0x04, ['BYTE', x],
                        ['BYTE', y]
                    ], 0);
                    let value = await device.asyncReadProtocol('f0f7', [id, '6509', 0x04, x, y, 'BYTE']);
                    if (value[0] == 1) {
                        return true;
                    } else {
                        return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550542693995': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6209, index);
                    if (id == 0) {
                        return;
                    }
                    let power = Math.round(parseFloat(args.power));
                    if (isNaN(power)) {
                        return;
                    }
                    power = limitedScopeOfArgs(power, -100, 100);
                    let time = parseFloat(args.time);
                    if ((isNaN(time)) || (time <= 0)) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x01, ['byte', power]], 0);
                    await delay(time * 1000)
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x01, ['byte', 0]], 0);
                }
            },
            'BLOCK_1552101702926': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6209, index);
                    if (id == 0) {
                        return;
                    }
                    let power = Math.round(parseFloat(args.power));
                    if (isNaN(power)) {
                        return;
                    }
                    power = limitedScopeOfArgs(power, -100, 100);
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x01, ['byte', power]], 0);
                }
            },
            'BLOCK_1550542713045': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6209, index);
                    if (id == 0) {
                        return;
                    }
                    let power = Math.round(parseFloat(args.power));
                    if (isNaN(power)) {
                        return;
                    }
                    power = limitedScopeOfArgs(power, -100, 100);
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x03, ['byte', power]], 0);
                }
            },
            'BLOCK_1550542725573': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6209, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x01, ['byte', 0]], 0)
                }
            },
            'BLOCK_1550543155224': {
                onRun: async (args, app, device, block) => {
                    await device.asyncWriteProtocol('f0f7', [0xff, '6209', 0x01, ['byte', 0]], 0);
                }
            },
            'BLOCK_1550543162879': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6209, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6209', 0x02, 'byte']);
                    if (data[0] == null) return 0;
                    else if (data[0] < 156) return data[0];
                    else return data[0] - 256;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552976796575': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6209, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6209', 0x04], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6209', 0x04, 'SHORT']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550543186478': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x620a, index);
                    if (id == 0) {
                        return;
                    }
                    let angle = Math.round(parseFloat(args.angle));
                    if (isNaN(angle)) {
                        return;
                    }
                    angle = limitedScopeOfArgs(angle, 0, 180);
                    await device.asyncWriteProtocol('f0f7', [id, '620a', 0x01, ['SHORT', angle]], 0);
                }
            },
            'BLOCK_1550543202398': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x620a, index);
                    if (id == 0) {
                        return;
                    }
                    let angle = Math.round(parseFloat(args.angle));
                    if (isNaN(angle)) {
                        return;
                    }
                    angle = limitedScopeOfArgs(angle, -180, 180);
                    await device.asyncWriteProtocol('f0f7', [id, '620a', 0x03, ['short', angle]], 0);
                }
            },
            'BLOCK_1550543213773': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x620a, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '620a', 0x05], 0);
                }
            },
            'BLOCK_1550543222423': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x620a, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '620a', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '620a', 0x02, 'SHORT']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1553052295849': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if ((isNaN(index)) || (index == 0)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x620a, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '620a', 0x04], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '620a', 0x04, 'SHORT']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1553053740419': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x620a, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '620a', 0x06], 0);
                }
            },
            'BLOCK_1555645299381': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x640b, index);
                    if (id == 0) {
                        return false;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_button, index);
                    if (data == 0) return false;
                    else return true;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645312097': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x640b, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640b', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '640b', 0x02, 'long']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645319188': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x640b, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640b', 0x03], 0);
                }
            },
            'BLOCK_1551968143352': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x640d, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_slider, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1553844092397': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x640a, index);
                    if (id == 0) {
                        return false;
                    }

                    let data = neuronsKits.getData(neuronsKits.types.mbuild_touch_sensor, index);
                    let channel_array = ['0', '1', '2', '3', '4', '5', '6', '7'];
                    for (let i = 0; i < channel_array.length; i++) {
                        if (args.channel == channel_array[i]) {
                            if ((data >> i) & 0x01) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1556449634844': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x640a, index);
                    if (id == 0) {
                        return false;
                    }

                    let sensitivity_string = args.sensitivity;
                    let sensitivity = 4;
                    if (sensitivity_string == "high") {
                        sensitivity = 1;
                    } else if (sensitivity_string == "middle") {
                        sensitivity = 3
                    } else if (sensitivity_string == "low") {
                        sensitivity = 4;
                    } else {
                        sensitivity = 4;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640a', 0x04, ['BYTE', sensitivity]]);
                }
            },
            'BLOCK_1555645328383': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x640c, index);
                    if (id == 0) {
                        return false;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_joystick, index);
                    if (args.direction == '1') {
                        if ((0 < data.joystick_y) && (data.joystick_y <= 100)) return true;
                        else return false;
                    } else if (args.direction == '2') {
                        if (data.joystick_y > 155) return true;
                        else return false;
                    } else if (args.direction == '3') {
                        if (data.joystick_x > 155) return true;
                        else return false;
                    } else if (args.direction == '4') {
                        if ((0 < data.joystick_x) && (data.joystick_x <= 100)) return true;
                        else return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645335674': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x640c, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_joystick, index);
                    if (args.axis == '1') {
                        if (isNaN(data.joystick_x)) return 0;
                        else if (data.joystick_x < 156) return data.joystick_x;
                        else return data.joystick_x - 256;
                    } else if (args.axis == '2') {
                        if (isNaN(data.joystick_y)) return 0;
                        else if (data.joystick_y < 156) return data.joystick_y;
                        else return data.joystick_y - 256;
                    }

                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645344622': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x640e, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640e', 0x01], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '640e', 0x01, 'long']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645348446': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x640e, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640e', 0x04], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '640e', 0x04, 'long']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645352654': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x640e, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640e', 0x03], 0);
                }
            },
            'BLOCK_1555645356390': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x640e, index);
                    if (id == 0) {
                        return false;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640e', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '640e', 0x02, 'BYTE']);
                    if (data[0] == 1) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645361151': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x640e, index);
                    if (id == 0) {
                        return false;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '640e', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '640e', 0x02, 'BYTE']);
                    if (data[0] == 2) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552103583411': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6313, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.sound_sensor, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555587069320': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6314, index);
                    if (id == 0) {
                        return 0;
                    }

                    let data = neuronsKits.getData(neuronsKits.types.light, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645371376': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6317, index);
                    if (id == 0) {
                        return false;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_pir, index);
                    if (data == 0) return false;
                    else return true;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645374714': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6317, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6317', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6317', 0x02, 'long']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645377519': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6317, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6317', 0x03], 0);
                }
            },
            'BLOCK_1552103618656': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6316, index);
                    if (id == 0) {
                        return 0;
                    }

                    let data = neuronsKits.getData(neuronsKits.types.ultrasonic_ranging, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555587128369': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6316, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.ultrasonic_ranging, index);
                    if (data == 300) {
                        return true;
                    } else {
                        return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645389358': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6312, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_ranging, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645392266': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6312, index);
                    if (id == 0) {
                        return false;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_ranging, index);
                    if (data == 200) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1548926368295': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return false;
                    }
                    let threshold_value = parseInt(args.threshold);
                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x01]]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631a', 0x01, 'BYTE']);
                    if (data[0] >= threshold_value) {
                        return true;
                    } else {
                        return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1548926209844': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x01]]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631a', 0x01, 'BYTE']);
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1551515039493': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return false;
                    }
                    let orientation = args.orientation;
                    if (orientation == '0') {
                        await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x09]], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '631a', 0x09, 'short']);
                        if ((data[0] <= -15) && (data[0] >= -50)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (orientation == '1') {
                        await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x09]], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '631a', 0x09, 'short']);
                        if ((data[0] >= 15) && (data[0] <= 50)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (orientation == '2') {
                        await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x08]], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '631a', 0x08, 'short']);
                        if ((data[0] <= -15) && (data[0] >= -50)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (orientation == '3') {
                        await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x08]], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '631a', 0x08, 'short']);
                        if ((data[0] >= 15) && (data[0] <= 50)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1551515082749': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return false;
                    }
                    let orientation = args.orientation;

                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x08]], 0);
                    let pitch = await device.asyncReadProtocol('f0f7', [id, '631a', 0x08, 'short']);

                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', 0x09]], 0);
                    let roll = await device.asyncReadProtocol('f0f7', [id, '631a', 0x09, 'short']);

                    if (orientation == '0') {
                        if ((pitch[0] <= 5) && (pitch[0] >= -5) && (roll[0] <= 5) && (roll[0] >= -5)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (orientation == '1') {
                        if ((pitch[0] <= 180) && (pitch[0] >= 175) && (roll[0] <= 5) && (roll[0] >= -5)) {
                            return true;
                        } else if ((pitch[0] <= -175) && (pitch[0] >= -180) && (roll[0] <= 5) && (roll[0] >= -5)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (orientation == '2') {
                        if ((pitch[0] <= 90) && (pitch[0] >= 85) && (roll[0] <= 5) && (roll[0] >= -5)) {
                            return true;
                        } else if ((pitch[0] <= -85) && (pitch[0] >= -90) && (roll[0] <= 5) && (roll[0] >= -5)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552819376095': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return 0;
                    }
                    let axis = args.axis;
                    let data_type = 0;
                    if (axis == "pitch") {
                        data_type = 0x08;
                    } else if (axis == "roll") {
                        data_type = 0x09;
                    } else {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', data_type]]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631a', data_type, 'short']);
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1551085611073': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return 0;
                    }
                    let aix = args.aix;
                    let type = 0;
                    if (aix == 'x') {
                        type = 0x02;
                    } else if (aix == 'y') {
                        type = 0x03;
                    } else if (aix == 'z') {
                        type = 0x04;
                    } else {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', type]]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631a', type, 'float']);
                    return (data[0] * 9.8).toFixed(2);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1551515253917': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return 0;
                    }
                    let aix = args.aix;
                    let type = 0;
                    if (aix == 'x') {
                        type = 0x05;
                    } else if (aix == 'y') {
                        type = 0x06;
                    } else if (aix == 'z') {
                        type = 0x07;
                    } else {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', type]]);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631a', type, 'float']);
                    return (data[0] * 1.0).toFixed(2);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550662378936': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return 0;
                    }
                    let aix = args.aix;
                    let type = 0;
                    if (aix == 'x') {
                        type = 0x0b;
                    } else if (aix == 'y') {
                        type = 0x0c;
                    } else if (aix == 'z') {
                        type = 0x0a;
                    } else {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631a', 0x01, 0x00, ['BYTE', type]], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631a', type, 'short']);
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1551515378530': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x631a, index);
                    if (id == 0) {
                        return;
                    }
                    let aix = args.aix;
                    let type = 0;
                    if (aix == 'x') {
                        type = 0x05;
                    } else if (aix == 'y') {
                        type = 0x06;
                    } else if (aix == 'z') {
                        type = 0x04;
                    } else {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631a', type], 0);
                }
            },
            'BLOCK_1555587327036': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6315, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.soil_moisture, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552111641761': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6318, index);
                    if (id == 0) {
                        return 0;
                    }
                    let unit = args.unit;
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_temperature, index);
                    if (unit == '0') {
                        data = (data).toFixed(1);
                    } else if (unit == '1') {
                        data = (data * 1.8 + 32).toFixed(1);
                    }
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552111937374': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6319, index);
                    if (id == 0) {
                        return 0;
                    }
                    let unit = args.unit;
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_temperatureHumidity, index);
                    if (data == null) return 0;
                    if (unit == '0') {
                        if (data.temperature < 156) return data.temperature;
                        else return data.temperature - 256;
                    } else if (unit == '1') {
                        if (data.temperature < 156) return (data.temperature * 1.8 + 32).toFixed(1);
                        else return (data.temperature * 1.8 + 32 - 256).toFixed(1);
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645409110': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6319, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_temperatureHumidity, index);
                    if (data == 0) return 0;
                    return data.humidity;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645416079': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x631e, index);
                    if (id == 0) {
                        return false;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631e', 0x01], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631e', 0x01, 'BYTE']);
                    if (data[0] == 0) return false;
                    else return true;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645421654': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631e, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631e', 0x02], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '631e', 0x02, 'long']);
                    if (data[0] == null) return 0;
                    return data[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555645428045': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x631e, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '631e', 0x03], 0);
                }
            },
            'BLOCK_1552104097047': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x631b, index);
                    if (id == 0) {
                        return false;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_flame, index);
                    if (data >= 15) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552104103568': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x631b, index);
                    if (id == 0) {
                        return 0;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_flame, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550543590966': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x631c, index);
                    if (id == 0) {
                        return false;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.mbuild_gas, index);
                    if (args.sensitivity == 1) {
                        if (data >= 10) return true;
                        else return false;
                    } else if (args.sensitivity == 2) {
                        if (data >= 30) return true;
                        else return false;
                    }

                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552820345489': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6311, index);
                    if (id == 0) {
                        return false;
                    }
                    let probe = args.probe;
                    let color = args.color;
                    await device.asyncWriteProtocol('f0f7', [id, '6311', 0x06], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6311', 0x06, 'BYTE', 'BYTE']);
                    if (probe == '1') {
                        if (data[0] == color) return true;
                        else return false;
                    } else if (probe == '2') {
                        if (data[1] == color) return true;
                        else return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552820374349': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6311, index);
                    if (id == 0) {
                        return 0;
                    }
                    let probe = args.probe;
                    let color = args.color;
                    await device.asyncWriteProtocol('f0f7', [id, '6311', 0x08], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6311', 0x08, 'SHORT', 'SHORT', 'SHORT', 'SHORT', 'SHORT', 'SHORT']);
                    if (probe == '1') {
                        if (color == 'r') return data[0];
                        else if (color == 'g') return data[1];
                        else if (color == 'b') return data[2];
                    } else if (probe == '2') {
                        if (color == 'r') return data[3];
                        else if (color == 'g') return data[4];
                        else if (color == 'b') return data[5];
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552820411668': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6311, index);
                    if (id == 0) {
                        return 0;
                    }
                    let probe = args.probe;
                    await device.asyncWriteProtocol('f0f7', [id, '6311', 0x09], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6311', 0x09, 'SHORT', 'SHORT']);
                    if (probe == '1') {
                        return data[0];
                    } else if (probe == '2') {
                        return data[1];
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552820423403': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x6311, index);
                    if (id == 0) {
                        return 0;
                    }
                    let probe = args.probe;
                    await device.asyncWriteProtocol('f0f7', [id, '6311', 0x0a], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6311', 0x0a, 'SHORT', 'SHORT']);
                    if (probe == '1') {
                        return data[0];
                    } else if (probe == '2') {
                        return data[1];
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1552820434265': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6311, index);
                    if (id == 0) {
                        return;
                    }
                    let color = args.color;
                    await device.asyncWriteProtocol('f0f7', [id, '6311', 0x11, ['BYTE', color]], 0);
                }
            },
            'BLOCK_1552890642680': {
                onRun: async (args, app, device, block) => {
                    let index = Datamanage(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6311, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6311', 0x11, ['BYTE', 0x09]], 0);
                }
            },
            'BLOCK_1550543818117': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return;
                    }

                    let str = args.string;
                    let length = str.length;
                    if (length > 30) {
                        length = 30;
                    }
                    let data = [];
                    for (let i = 0; i < length; i++) {

                        let ascii_code = str[i].charCodeAt();
                        if (ascii_code >= 128) {
                            ascii_code = 127;
                        }
                        let byte = ['BYTE', ascii_code];
                        data.push(byte);
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6802', 0x02, ['BYTE', str.length]].concat(data), 0);

                }
            },
            'BLOCK_1550807378580': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return "";
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return "";
                    }
                    let data = await device.asyncReadProtocol('f0f7', [id, '6802', 0x02, 'block'], 4000);
                    if (data == null) {
                        return "";
                    }
                    let ret_str = [];
                    for (let i = 0; i < data[0].length; i++) {
                        let a = String.fromCharCode(data[0][i]);
                        ret_str.push(String.fromCharCode(data[0][i]))
                    }
                    return ret_str.join("");
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1555587622976': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return;
                    }

                    let number = parseInt(args.number);
                    let record_tinme = 3000;
                    await device.asyncWriteProtocol('f0f7', [id, '6802', 0x03, ['long', record_tinme],
                        ['BYTE', number]
                    ]);
                    await delay(record_tinme)
                }
            },
            'BLOCK_1555587631677': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return;
                    }
                    let number = parseInt(args.number);
                    await device.asyncWriteProtocol('f0f7', [id, '6802', 0x04, ['BYTE', number]]);
                }
            },
            'BLOCK_1550734851249': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return false;
                    }
                    let ir_data = 0
                    let character = args.character;
                    if (character == 'A') {
                        ir_data = 0x45;
                    } else if (character == 'B') {
                        ir_data = 0x46;
                    } else if (character == 'C') {
                        ir_data = 0x47;
                    } else if (character == 'D') {
                        ir_data = 0x44;
                    } else if (character == 'E') {
                        ir_data = 0x43;
                    } else if (character == 'F') {
                        ir_data = 0x0d;
                    }
                    let data = await device.asyncReadProtocol('f0f7', [id, '6802', 0x01, 'SHORT', 'SHORT']);
                    if (data != null) {
                        if ((data[0] == 0) && (data[1] == ir_data)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return false
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550734282470': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return false;
                    }
                    let ir_data = 0
                    let arrow = args.arrow;
                    if (arrow == 'UP') {
                        ir_data = 0x40;
                    } else if (arrow == 'DOWN') {
                        ir_data = 0x19;
                    } else if (arrow == 'LEFT') {
                        ir_data = 0x07;
                    } else if (arrow == 'RIGHT') {
                        ir_data = 0x09;
                    } else if (arrow == 'SETUP') {
                        ir_data = 0x15;
                    }

                    let data = await device.asyncReadProtocol('f0f7', [id, '6802', 0x01, 'SHORT', 'SHORT']);
                    if (data != null) {
                        if ((data[0] == 0) && (data[1] == ir_data)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return false
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1550734041865': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return false;
                    }
                    let id = neuronsKits.getAddr(0x6802, index);
                    if (id == 0) {
                        return false;
                    }
                    let ir_data = 0
                    let num = args.num;
                    if (num == '0') {
                        ir_data = 0x16;
                    } else if (num == '1') {
                        ir_data = 0x0c;
                    } else if (num == '2') {
                        ir_data = 0x18;
                    } else if (num == '3') {
                        ir_data = 0x5e;
                    } else if (num == '4') {
                        ir_data = 0x08;
                    } else if (num == '5') {
                        ir_data = 0x1c;
                    } else if (num == '6') {
                        ir_data = 0x5a;
                    } else if (num == '7') {
                        ir_data = 0x42;
                    } else if (num == '8') {
                        ir_data = 0x52;
                    } else if (num == '9') {
                        ir_data = 0x4a;
                    }
                    let data = await device.asyncReadProtocol('f0f7', [id, '6802', 0x01, 'SHORT', 'SHORT']);
                    if (data != null) {
                        if ((data[0] == 0) && (data[1] == ir_data)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return false
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'dataVariableCodesCode': [`get_variable('{VARIABLE}')`, 0]
        };
    }

    getInfo() {
        return {
            "id": "mbuild",
            "targets": {
                "device": true,
                "name": "mbuild",
                "icon": window.MbApi.getExtResPath('mbuild/imgs/3394aeb4fa4f4e7b86a5c79aa1ee0bad.png', 'mbuild'),
                "enableCode": false,
                "enableUpload": false,
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
                                    "mbuild.connect_fail_30384c15",
                                    "mbuild.connect_fail_1ccaf618",
                                    "mbuild.connect_fail_95f27a4f"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        },
                        "ble": {
                            "helpLink": "",
                            "tips": {
                                "fail": [
                                    "mbuild.connect_fail_5cf182dc",
                                    "mbuild.connect_fail_1a932d27",
                                    "mbuild.connect_fail_404739b9"
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
                            "success": [],
                            "fail": []
                        },
                        "middlewares": [],
                        "driver": {}
                    },
                    "firmware": {
                        "helpLink": "",
                        "tips": {
                            "success": [
                                "mbuild.firmware_success_9f672bb1"
                            ],
                            "fail": [
                                "mbuild.firmware_fail_73fac398"
                            ]
                        },
                        "driver": {
                            "name": "my_tool",
                            "func": mbuildFirmwareDriverMyTool
                        }
                    }
                },
                "firmware": [{
                    "id": "d1b57d95",
                    "name": "mbuild.firmwares_version_d1b57d95",
                    "version": "27.01.001",
                    "isDefault": false,
                    "url": {
                        "name": "dc_motor_sensor_firmware_27_01_001_002_6209_ht1.bin",
                        "url": window.MbApi.getExtResPath('mbuild/res/b4d331fe7c644214abcacab72b9cb2bf.bin', 'mbuild')
                    },
                    "modules": [{
                            "id": "6f8c442b",
                            "name": "speaker",
                            "type": "6604",
                            "version": "27.01.001",
                            "url": {
                                "name": "speaker_firmware_27_01_001_003_6604_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/188584d9dda34fe682c1c483df12b91d.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "7bfabb50",
                            "name": "angle",
                            "type": "640e",
                            "version": "27.01.001",
                            "url": {
                                "name": "angle_sensor_firmware_27_01_001_002_640e_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/e612045485bc41d8ae1ab402c0124f3e.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "9a1fc404",
                            "name": "dcmotor",
                            "type": "6209",
                            "version": "27.01.002",
                            "url": {
                                "name": "dc_motor_sensor_firmware_27_01_002_002_6209_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/a8a8dda066c141df9fbf010711aac36d.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "273e2845",
                            "name": "servomotor",
                            "type": "620a",
                            "version": "27.01.001",
                            "url": {
                                "name": "Servo_driver_firmware_27_01_001_003_620a_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/0b1b42a7fc25483cb626e16f4c1e36ec.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "e99ccd3f",
                            "name": "ranging",
                            "type": "6312",
                            "version": "27.01.001",
                            "url": {
                                "name": "ranging_sensor_firmware_27_01_001_002_6312_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/0f89d3ec29aa409d8520ee0f3c11988e.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "a016492e",
                            "name": "sound",
                            "type": "6313",
                            "version": "27.01.001",
                            "url": {
                                "name": "sound_sensor_firmware_27_01_001_002_6313_ht2.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/4ab01aa9f94b485b9c2a3819e9bc4909.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "0a127f0c",
                            "name": "light",
                            "type": "6314",
                            "version": "27.01.001",
                            "url": {
                                "name": "light_sensor_firmware__27_01_001_002_6314_ht2.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/a03c70c7359240b4854e1df63a7b8146.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "8a0e4b3d",
                            "name": "soilmoisture",
                            "type": "6315",
                            "version": "27.01.001",
                            "url": {
                                "name": "soil_moisture_firmware_27_01_001_002_6315_ht2.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/742d95783091493cbccd470d826d4355.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "92cb9a67",
                            "name": "ultrasonic",
                            "type": "6316",
                            "version": "27.01.001",
                            "url": {
                                "name": "ultrasoinc_range_firmware_27_01_003_6316_ht3.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/7cd33c886dc64478b61c8ac1340792be.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "634c30c8",
                            "name": "temperture",
                            "type": "6318",
                            "version": "27.01.001",
                            "url": {
                                "name": "temperature_sensor_firmware_27_01_001_002_6318_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/cafd2cbc6bf34de9904c62e91abaa088.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "2adf6f00",
                            "name": "pir",
                            "type": "6317",
                            "version": "27.01.001",
                            "url": {
                                "name": "pir_sensor_firmware_27_01_001_002_6317_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/c5c61559768f4ceb8734255f967a85b2.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "08940ac6",
                            "name": "humiture",
                            "type": "6319",
                            "version": "27.01.001",
                            "url": {
                                "name": "humiture_sensor_firmware_27_01_001_002_6319_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/8460fce2b5334280ba92740692e42e40.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "c300feab",
                            "name": "motion",
                            "type": "631a",
                            "version": "27.01.001",
                            "url": {
                                "name": "motion_sensor_firmware_27_01_001_003_631a_ht3.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/dd9f643fbbc34f6296171e5bf18e52e4.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "e2244d0e",
                            "name": "slider",
                            "type": "640d",
                            "version": "27.01.001",
                            "url": {
                                "name": "slider_sensor_firmware_27_01_001_002_640d_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/3b1feda4432549dab32be08fdf7c03f3.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "6c2f9549",
                            "name": "touch",
                            "type": "640a",
                            "version": "27.01.001",
                            "url": {
                                "name": "multi_touch_sensor_firmware_27_01_001_002_640a_ht2.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/1aa7a5b69d8147a09f2273592d13334e.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "5fb15f7b",
                            "name": "button",
                            "type": "640b",
                            "version": "27.01.001",
                            "url": {
                                "name": "button_sensor_firmware_27_01_001_002_640b_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/4966682db0e94dc18024de0671d0a58a.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "95143ee8",
                            "name": "joystick",
                            "type": "640c",
                            "version": "27.01.001",
                            "url": {
                                "name": "joystick_firmware_27_01_001_002_640c_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/9ee471de779e444ea56129dc7cecb60f.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "547c1382",
                            "name": "led",
                            "type": "6507",
                            "version": "27.01.001",
                            "url": {
                                "name": "RGB_LED_firmware_27_01_001_003_6507_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/555b52df6cff41ad90da7b09102b4643.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "4e60fe07",
                            "name": "ledstrip",
                            "type": "6508",
                            "version": "27.01.001",
                            "url": {
                                "name": "led_strip_firmware_27_01_001_004_6508_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/29a4c203d6284d979b3a346ba884743d.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "7d66dde6",
                            "name": "ledmatrix",
                            "type": "6509",
                            "version": "27.01.001",
                            "url": {
                                "name": "8x16LED_matrix_firmware_27_01_001_003_6509_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/343703d6305e4ff89db47477b830d1c7.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "07eebec8",
                            "name": "ir",
                            "type": "6802",
                            "version": "27.01.001",
                            "url": {
                                "name": "IR_Transceiver_firmware_27_01_001_002_6802_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/f34bee3089a542e9b8635cf274c5d25f.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "917d49c3",
                            "name": "flame",
                            "type": "631b",
                            "version": "27.01.001",
                            "url": {
                                "name": "flame_sensor_firmware_27_01_001_002_631b_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/a1de2d253f4d4f728ba1cc66c16d1edd.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "1ccba120",
                            "name": "gas",
                            "type": "631c",
                            "version": "27.01.001",
                            "url": {
                                "name": "MQ2_gas_sensor_firmware_27_01_001_002_631c_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/763cd3d3ac3e4ee587e83ec11669af17.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "758989d4",
                            "name": "magnetic",
                            "type": "631e",
                            "version": "27.01.001",
                            "url": {
                                "name": "magnetic_sensor_firmware_27_01_001_002_631e_ht1.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/20cc3b164eb64f888e1262db92ea0910.bin', 'mbuild')
                            }
                        },
                        {
                            "id": "aeffd9f6",
                            "name": "dual_light_sensor",
                            "type": "6311",
                            "version": "27.01.004",
                            "url": {
                                "name": "updata_27_01_004_001_6311.bin",
                                "url": window.MbApi.getExtResPath('mbuild/res/472c9074c98e4fb694d29a7596950b36.bin', 'mbuild')
                            }
                        }
                    ]
                }],
                "settings": [{
                    "text": "mbuild.UPDATE_FIRMWARE",
                    "handle": this.funcs.firmwareSettingHandle
                }],
                "categoriesOrder": [
                    "play",
                    "light",
                    "According",
                    "movement",
                    "mb_control",
                    "perception",
                    "communication",
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
            "codeTypes": [],
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
                "event_whenthisspriteclicked",
                "control_create_clone_of",
                "event_whenbackdropswitchesto",
                "control_delete_this_clone",
                "event_whengreaterthan",
                "control_start_as_clone"
            ],
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

export default ExtMbuild;