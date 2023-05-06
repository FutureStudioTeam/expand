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

const fingertipPianoFirmwareDriverMyTool =
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
            mbuild_daul_rgb: 0x6311,
            mbuild_fingertip_piano: 0x640f
        };
        this.addresses = {};
        this.datas = {}

        this._canceller = [];

        //add for event
        // this.events = {};
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
        this.datas[addr * 16] = data;
        // this.listenerHandler && this.listenerHandler();
    };

    getData(typeId, idx) {
        let addr = this.getAddr(typeId, idx);
        if (addr == 0) {
            return 0;
        } else {
            let data = this.datas[addr * 16];
            if (data != undefined) return data;
            return 0;
        }
    };

    setDataWithCmd(addr, data, cmd) {
        this.datas[addr * 16 + cmd] = data;
    };

    addListener(event_name, listener) {
        // this.listenerHandler = listener;
        if (event_name == "event_button_pressed") {
            this.buttonListenerHandler = listener;
        } else if (event_name == "event_touchpad_pressed") {
            this.touchpadListenerHandler = listener;
        } else if (event_name == "event_joystick") {
            this.joystickListenerHandler = listener;
        } else if (event_name == "event_gesture") {
            this.gestureListenerHandler = listener;
        } else if (event_name == "event_obstacle_motion") {
            this.obstacleMotionListenerHandler = listener;
        } else if (event_name == "event_detected_obstacle") {
            this.detectedObstacleListenerHandler = listener;
        } else if (event_name == "event_detected_distance") {
            this.detectedDistanceListenerHandler = listener;
        }

    };

    clearEventFlag(event_name) {
        if (event_name == "event_button_pressed") {
            this.buttonListenerHandler = null;
        } else if (event_name == "event_touchpad_pressed") {
            this.touchpadListenerHandler = null;
        } else if (event_name == "event_joystick") {
            this.joystickListenerHandler = null;
        } else if (event_name == "event_gesture") {
            this.gestureListenerHandler = null;
        } else if (event_name == "event_obstacle_motion") {
            this.obstacleMotionListenerHandler = null;
        } else if (event_name == "event_detected_obstacle") {
            this.detectedObstacleListenerHandler = null;
        } else if (event_name == "event_detected_distance") {
            this.detectedDistanceListenerHandler = null;
        }
    }

    getDataWithCmd(typeId, idx, cmd) {
        let addr = this.getAddr(typeId, idx);
        if (addr == 0) {
            return 0;
        } else {
            let data = this.datas[addr * 16 + cmd];
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
            if (this.detectedObstacleListenerHandler || this.detectedDistanceListenerHandler) {
                let typeId = neuronsKits.types.mbuild_fingertip_piano;
                var type = typeId >> 8;
                var subtype = typeId & 0xff;
                // let index = parseIndex(args.index);
                let index = 1;
                let id = neuronsKits.getAddr(typeId, index);
                // console.log("send cycle id is:", id)
                if (id != 0) {
                    let report_time = 30;
                    device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x7a, 0x02, ['long', report_time]
                    ], 0);
                }
            }
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
            let button1 = data[1];
            let button2 = data[2];
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

        let cancelListenmbuild_fingertip_piano_button = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x02, 'BYTE', 'BYTE'], (data) => {
            let addr = data[0];
            let button1 = data[1];
            let button2 = data[2];
            this.setDataWithCmd(addr, {
                button1,
                button2
            }, 0x02);
            this.buttonListenerHandler && this.buttonListenerHandler();
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_button);

        let cancelListenmbuild_fingertip_piano_touchpad = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x03, 'BYTE', 'BYTE', 'BYTE', 'BYTE'], (data) => {
            let addr = data[0];
            let touchpad1 = data[1];
            let touchpad2 = data[2];
            let touchpad3 = data[3];
            let touchpad4 = data[4];
            this.setDataWithCmd(addr, {
                touchpad1,
                touchpad2,
                touchpad3,
                touchpad4
            }, 0x03);
            this.touchpadListenerHandler && this.touchpadListenerHandler();
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_touchpad);

        let cancelListenmbuild_fingertip_piano_joystick_state = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x04, 'byte', 'byte'], (data) => {
            let addr = data[0];
            let joystick_x_state = data[1];
            let joystick_y_state = data[2];
            this.setDataWithCmd(addr, {
                joystick_x_state,
                joystick_y_state
            }, 0x04);
            this.joystickListenerHandler && this.joystickListenerHandler();
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_joystick_state);

        let cancelListenmbuild_fingertip_piano_joystick_value = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x05, 'byte', 'byte'], (data) => {
            let addr = data[0];
            let joystick_x_value = data[1];
            let joystick_y_value = data[2];
            this.setDataWithCmd(addr, {
                joystick_x_value,
                joystick_y_value
            }, 0x05);
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_joystick_value);

        let cancelListenmbuild_fingertip_piano_gesture = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x06, 'BYTE'], (data) => {
            let addr = data[0];
            let gesture = data[1];
            this.setDataWithCmd(addr, {
                gesture
            }, 0x06);
            this.gestureListenerHandler && this.gestureListenerHandler();
            this.obstacleMotionListenerHandler && this.obstacleMotionListenerHandler();
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_gesture);

        let cancelListenmbuild_fingertip_piano_distance = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x07, 'BYTE'], (data) => {
            let addr = data[0];
            let distance = data[1];
            this.setDataWithCmd(addr, {
                distance
            }, 0x07);
            this.detectedObstacleListenerHandler && this.detectedObstacleListenerHandler();
            this.detectedDistanceListenerHandler && this.detectedDistanceListenerHandler();
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_distance);

        let cancelListenmbuild_fingertip_piano_touchpad_value = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x08, 'SHORT', 'SHORT', 'SHORT', 'SHORT'], (data) => {
            let addr = data[0];
            let touchpad1_value = data[1];
            let touchpad2_value = data[2];
            let touchpad3_value = data[3];
            let touchpad4_value = data[4];
            this.setDataWithCmd(addr, {
                touchpad1_value,
                touchpad2_value,
                touchpad3_value,
                touchpad4_value
            }, 0x08);
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_touchpad_value);

        let cancelListenmbuild_fingertip_piano_button_count = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.mbuild_fingertip_piano >> 8, this.types.mbuild_fingertip_piano & 0xff, 0x09, 'long', 'long'], (data) => {
            let addr = data[0];
            let button1_count = data[1];
            let button2_count = data[2];
            this.setDataWithCmd(addr, {
                button1_count,
                button2_count
            }, 0x09);
        });
        this._canceller.push(cancelListenmbuild_fingertip_piano_button_count);
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
        hidL: 683,
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
    },
    {
        hidM: 380,
        hidL: 579,
        typeid: 0x640f
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
    upload: ["fingertip_piano.fingertip_piano_set_rgb_clolor", "fingertip_piano.fingertip_piano_reset_rgb", "fingertip_piano.fingertip_piano_set_rgb_value", "fingertip_piano.fingertip_piano_is_touchpad_touched", "fingertip_piano.fingertip_piano_is_button_pressed", "fingertip_piano.fingertip_piano_get_button_count", "fingertip_piano.fingertip_piano_reset_button_count", "fingertip_piano.fingertip_piano_is_joystick_moved", "fingertip_piano.fingertip_piano_touchpad_value", "fingertip_piano.fingertip_piano_detected_obstacle", "fingertip_piano.fingertip_piano_detected_obstacle_directon", "fingertip_piano.fingertip_piano_get_obstacle_distance", "fingertip_piano.fingertip_piano_get_ir_sensor_value", "fingertip_piano.fingertip_piano_get_gesture", "fingertip_piano.fingertip_piano_obstacle_event", "fingertip_piano.fingertip_piano_detected_obstacle_event", "fingertip_piano.fingertip_piano_get_obstacle_event", "fingertip_piano.fingertip_piano_touchpad_event", "fingertip_piano.fingertip_piano_button_event", "fingertip_piano.fingertip_piano_joystick_event", "fingertip_piano.fingertip_piano_gesture_event"]
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



class ExtFingertipPiano {

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
            'fingertip_piano_set_rgb_clolor': {
                onRun: async (args, app, device, block) => {
                    var percent = parseParameter(args.lightness);
                    if (isNaN(percent)) {
                        return;
                    }

                    if (percent < 0) percent = 0;
                    else if (percent > 100) percent = 100;

                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    // console.log(id);
                    if (id == 0) {
                        return;
                    }
                    let color = args.color;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    r = percent * r / 100;
                    g = percent * g / 100;
                    b = percent * b / 100;

                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x01, ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ], 0);
                }
            },
            'fingertip_piano_reset_rgb': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    var r = 0;
                    var g = 0;
                    var b = 0;
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x01, ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ], 0);
                }
            },
            'fingertip_piano_set_rgb_value': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
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

                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x01, ['SHORT', r],
                        ['SHORT', g],
                        ['SHORT', b]
                    ], 0);
                }
            },
            'fingertip_piano_is_touchpad_touched': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    //let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x03);
                    // console.log("touchpad state", data);

                    if (args.channel == '1') {
                        if (1 == data.touchpad1) return true;
                        else return false;
                    } else if (args.channel == '2') {
                        if (1 == data.touchpad2) return true;
                        else return false;
                    } else if (args.channel == '3') {
                        if (1 == data.touchpad3) return true;
                        else return false;
                    } else if (args.channel == '4') {
                        if (1 == data.touchpad4) return true;
                        else return false;
                    }
                }
            },
            'fingertip_piano_is_button_pressed': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    //let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x02);
                    // console.log("button state", data);

                    if (args.button == 'A') {
                        if (1 == data.button1) return true;
                        else return false;
                    } else if (args.button == 'B') {
                        if (1 == data.button2) return true;
                        else return false;
                    }
                }
            },
            'fingertip_piano_get_button_count': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x09
                    ], 0);
                    //let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x09);
                    // console.log(data)
                    if (args.button == 'A') {
                        return data.button1_count;
                    } else if (args.button == 'B') {
                        return data.button2_count;
                    }
                }
            },
            'fingertip_piano_reset_button_count': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    let button_index = 0;
                    if (args.button == "A") {
                        button_index = 0;
                    } else if (args.button == "B") {
                        button_index = 1;
                    } else {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x11, ['BYTE', button_index]
                    ], 0);
                }
            },
            'fingertip_piano_is_joystick_moved': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x04);

                    // console.log(data.joystick_y_state)

                    if (args.direction == 'up') {
                        if (data.joystick_y_state == 1) return true;
                        else return false;
                    } else if (args.direction == 'down') {
                        if (data.joystick_y_state == 255) return true;
                        else return false;
                    } else if (args.direction == 'left') {
                        if (data.joystick_x_state == 255) return true;
                        else return false;
                    } else if (args.direction == 'right') {
                        if (data.joystick_x_state == 1) return true;
                        else return false;
                    }
                }
            },
            'fingertip_piano_touchpad_value': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }

                    let thread = 160;
                    let influence_value = 120;
                    let channel_thread = 145;
                    let temp_val = thread;
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x08
                    ], 0);
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x08);


                    if (args.channel == '1') {
                        temp_val = data.touchpad1_value;
                    } else if (args.channel == '2') {
                        if (data.touchpad1_value < influence_value && data.touchpad2_value > channel_thread) {
                            temp_val = thread;
                        } else {
                            temp_val = data.touchpad2_value;
                        }
                    } else if (args.channel == '3') {
                        if (data.touchpad2_value < influence_value && data.touchpad3_value > channel_thread) {
                            temp_val = thread;
                        } else {
                            temp_val = data.touchpad3_value;
                        }
                    } else if (args.channel == '4') {
                        if (data.touchpad3_value < influence_value && data.touchpad4_value > channel_thread) {
                            temp_val = thread;
                        } else {
                            temp_val = data.touchpad4_value;
                        }
                    }

                    if (temp_val >= thread) {
                        temp_val = thread;
                    } else if (temp_val < 0) {
                        temp_val = 0;
                    }

                    temp_val = temp_val * 100 / thread;
                    return parseInt(temp_val);
                }
            },
            'fingertip_piano_detected_obstacle': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x07
                    ], 0);
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x07);

                    if (data.distance < 95) return true;
                    else return false;
                }
            },
            'fingertip_piano_detected_obstacle_directon': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x06);
                    // console.log(data.gesture)
                    if (args.attitude == "close") {
                        if (data.gesture == 2) return true;
                        else return false;
                    } else if (args.attitude == "away") {
                        if (data.gesture == 3) return true;
                        else return false;
                    }
                }
            },
            'fingertip_piano_get_obstacle_distance': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x07
                    ], 0);
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x07);

                    if (data.distance >= 0 && data.distance <= 100) {
                        return data.distance;
                    } else {
                        return 100;
                    }
                }
            },
            'fingertip_piano_get_ir_sensor_value': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                        ['BYTE', subtype], 0x07
                    ], 0);
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x07);

                    if (data.distance >= 0 && data.distance <= 100) {
                        return (100 - data.distance);
                    } else {
                        return 0;
                    }
                }
            },
            'fingertip_piano_get_gesture': {
                onRun: async (args, app, device, block) => {
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id == 0) {
                        return;
                    }
                    // let data = neuronsKits.getData(typeId, index);
                    let data = neuronsKits.getDataWithCmd(typeId, index, 0x06);
                    if (args.attitude == "down") {
                        if (data.gesture == 2) return true;
                        else return false;
                    } else if (args.attitude == "up") {
                        if (data.gesture == 3) return true;
                        else return false;
                    } else if (args.attitude == "wave") {
                        if (data.gesture == 1) return true;
                        else return false;
                    }
                }
            },
            'fingertip_piano_obstacle_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (true == this.detectedObstacleEventType) {
                        ret = true;
                    }
                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.detectedObstacleEventType = false;
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id != 0) {
                        let report_time = 30;
                        device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                            ['BYTE', subtype], 0x7a, 0x02, ['long', report_time]
                        ], 0);
                    }

                    neuronsKits.addListener("event_detected_obstacle", () => {
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x07);
                        this.detectedObstacleEventType = false;
                        if (data.distance < 95) {
                            this.detectedObstacleEventType = true;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.detectedObstacleEventType = false;
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id != 0) {
                        let report_time = 0;
                        device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                            ['BYTE', subtype], 0x7a, 0x00, ['long', report_time]
                        ], 0);
                    }
                    neuronsKits.clearEventFlag("event_detected_obstacle");
                }
            },
            'fingertip_piano_detected_obstacle_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.attitude == "close") {
                        if (true == this.obstacleMotionEventType[0]) {
                            ret = true;
                        }
                    } else if (args.attitude == "away") {
                        if (true == this.obstacleMotionEventType[1]) {
                            ret = true;
                        }
                    }

                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.obstacleMotionEventType = [false, false, false];
                    neuronsKits.addListener("event_obstacle_motion", () => {
                        let typeId = neuronsKits.types.mbuild_fingertip_piano;
                        var type = typeId >> 8;
                        var subtype = typeId & 0xff;
                        // let index = parseIndex(args.index);
                        let index = 1;
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        // let data = neuronsKits.getData(typeId, index);
                        this.obstacleMotionEventType = [false, false, false];
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x06);
                        if (2 == data.gesture) {
                            this.obstacleMotionEventType[0] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (3 == data.gesture) {
                            this.obstacleMotionEventType[1] = true;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.obstacleMotionEventType[0] = false;
                    this.obstacleMotionEventType[1] = false;
                    neuronsKits.clearEventFlag("event_obstacle_motion");
                }
            },
            'fingertip_piano_get_obstacle_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    var thread_distance = parseParameter(args.distance);
                    if (isNaN(thread_distance)) {
                        return;
                    }
                    if (thread_distance < 0) {
                        thread_distance = 0
                    } else if (thread_distance > 100) {
                        thread_distance = 100;
                    }
                    if (true == this.detectedDistanceEventType) {
                        if (this.detectedDistanceEventValue < thread_distance) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.detectedDistanceEventType = false;
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id != 0) {
                        let report_time = 30;
                        device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                            ['BYTE', subtype], 0x7a, 0x02, ['long', report_time]
                        ], 0);
                    }
                    neuronsKits.addListener("event_detected_distance", () => {
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x07);
                        this.detectedDistanceEventType = false;
                        if (data.distance >= 0 && data.distance < 100) {
                            this.detectedDistanceEventType = true;
                            this.detectedDistanceEventValue = data.distance;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.detectedDistanceEventType = false;
                    this.detectedDistanceEventValue = 100;
                    let typeId = neuronsKits.types.mbuild_fingertip_piano;
                    var type = typeId >> 8;
                    var subtype = typeId & 0xff;
                    // let index = parseIndex(args.index);
                    let index = 1;
                    let id = neuronsKits.getAddr(typeId, index);
                    if (id != 0) {
                        let report_time = 0;
                        device.asyncWriteProtocol('f0f7', [id, ['BYTE', type],
                            ['BYTE', subtype], 0x7a, 0x00, ['long', report_time]
                        ], 0);
                    }
                    neuronsKits.clearEventFlag("event_detected_distance");
                }
            },
            'fingertip_piano_touchpad_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.channel == '1') {
                        if (true == this.touchpadEventType[0]) {
                            ret = true;
                        }
                    } else if (args.channel == '2') {
                        if (true == this.touchpadEventType[1]) {
                            ret = true;
                        }
                    } else if (args.channel == '3') {
                        if (true == this.touchpadEventType[2]) {
                            ret = true;
                        }
                    } else if (args.channel == '4') {
                        if (true == this.touchpadEventType[3]) {
                            ret = true;
                        }
                    }

                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.touchpadEventType = [false, false, false, false];
                    neuronsKits.addListener("event_touchpad_pressed", () => {
                        let typeId = neuronsKits.types.mbuild_fingertip_piano;
                        var type = typeId >> 8;
                        var subtype = typeId & 0xff;
                        // let index = parseIndex(args.index);
                        let index = 1;
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x03);
                        this.touchpadEventType = [false, false, false, false];
                        if (1 == data.touchpad1) {
                            this.touchpadEventType[0] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (1 == data.touchpad2) {
                            this.touchpadEventType[1] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (1 == data.touchpad3) {
                            this.touchpadEventType[2] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (1 == data.touchpad4) {
                            this.touchpadEventType[3] = true;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.touchpadEventType[0] = false;
                    this.touchpadEventType[1] = false;
                    this.touchpadEventType[2] = false;
                    this.touchpadEventType[3] = false;
                    neuronsKits.clearEventFlag("event_touchpad_pressed");
                }
            },
            'fingertip_piano_button_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.button == 'A') {
                        if (true == this.buttonEventType[0]) {
                            ret = true;
                        }
                    } else if (args.button == 'B') {
                        if (true == this.buttonEventType[1]) {
                            ret = true;
                        }
                    }
                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.buttonEventType = [false, false];
                    neuronsKits.addListener("event_button_pressed", () => {
                        let typeId = neuronsKits.types.mbuild_fingertip_piano;
                        var type = typeId >> 8;
                        var subtype = typeId & 0xff;
                        // let index = parseIndex(args.index);
                        let index = 1;
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x02);
                        this.buttonEventType = [false, false];
                        if (1 == data.button1) {
                            this.buttonEventType[0] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (1 == data.button2) {
                            this.buttonEventType[1] = true;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.buttonEventType[0] = false;
                    this.buttonEventType[1] = false;
                    neuronsKits.clearEventFlag("event_button_pressed");
                }
            },
            'fingertip_piano_joystick_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.direction == 'up') {
                        if (true == this.joystickEventType[0]) {
                            ret = true;
                        }
                    } else if (args.direction == 'down') {
                        if (true == this.joystickEventType[1]) {
                            ret = true;
                        }
                    } else if (args.direction == 'left') {
                        if (true == this.joystickEventType[2]) {
                            ret = true;
                        }
                    } else if (args.direction == 'right') {
                        if (true == this.joystickEventType[3]) {
                            ret = true;
                        }
                    }

                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.joystickEventType = [false, false, false, false];
                    neuronsKits.addListener("event_joystick", () => {
                        let typeId = neuronsKits.types.mbuild_fingertip_piano;
                        var type = typeId >> 8;
                        var subtype = typeId & 0xff;
                        // let index = parseIndex(args.index);
                        let index = 1;
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x04);
                        this.joystickEventType = [false, false, false, false];
                        if (1 == data.joystick_y_state) {
                            this.joystickEventType[0] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (255 == data.joystick_y_state) {
                            this.joystickEventType[1] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (255 == data.joystick_x_state) {
                            this.joystickEventType[2] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (1 == data.joystick_x_state) {
                            this.joystickEventType[3] = true;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.joystickEventType[0] = false;
                    this.joystickEventType[1] = false;
                    this.joystickEventType[2] = false;
                    this.joystickEventType[3] = false;
                    neuronsKits.clearEventFlag("event_joystick");
                }
            },
            'fingertip_piano_gesture_event': {
                onRun: (args, app, device, block) => {
                    let ret = false;
                    if (args.attitude == "wave") {
                        if (true == this.gestureEventType[0]) {
                            ret = true;
                        }
                    } else if (args.attitude == "down") {
                        if (true == this.gestureEventType[1]) {
                            ret = true;
                        }
                    } else if (args.attitude == "up") {
                        if (true == this.gestureEventType[2]) {
                            ret = true;
                        }
                    }

                    return ret;
                },
                onAdd: (app, device, block) => {
                    this.gestureEventType = [false, false, false];
                    neuronsKits.addListener("event_gesture", () => {
                        let typeId = neuronsKits.types.mbuild_fingertip_piano;
                        var type = typeId >> 8;
                        var subtype = typeId & 0xff;
                        // let index = parseIndex(args.index);
                        let index = 1;
                        let id = neuronsKits.getAddr(typeId, index);
                        if (id == 0) {
                            return;
                        }
                        let data = neuronsKits.getDataWithCmd(typeId, index, 0x06);
                        this.gestureEventType = [false, false, false];
                        if (1 == data.gesture) {
                            this.gestureEventType[0] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (2 == data.gesture) {
                            this.gestureEventType[1] = true;
                            app.workspace.runBlocks(block.opcode);
                        } else if (3 == data.gesture) {
                            this.gestureEventType[2] = true;
                            app.workspace.runBlocks(block.opcode);
                        }
                    })
                },
                onRemove: (app, device, block) => {
                    this.gestureEventType[0] = false;
                    this.gestureEventType[1] = false;
                    this.gestureEventType[2] = false;
                    neuronsKits.clearEventFlag("event_gesture");
                }
            },
            'dataVariableCodesCode': [`get_variable('{VARIABLE}')`, 0]
        };
    }

    getInfo() {
        return {
            "id": "fingertip_piano",
            "targets": {
                "device": true,
                "name": "fingertip_piano",
                "icon": window.MbApi.getExtResPath('fingertip_piano/imgs/425435ffaf74431ea2a7ee9c105beed3.jpg', 'fingertip_piano'),
                "enableCode": false,
                "enableUpload": false,
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
                                "fail": [
                                    "fingertip_piano.connect_fail_c01ed169",
                                    "fingertip_piano.connect_fail_718157dd",
                                    "fingertip_piano.connect_fail_3da2d16f"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        },
                        "ble": {
                            "helpLink": "",
                            "tips": {
                                "fail": [
                                    "fingertip_piano.connect_fail_a777d1e4",
                                    "fingertip_piano.connect_fail_e573866d",
                                    "fingertip_piano.connect_fail_b7a97436"
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
                                "fingertip_piano.firmware_success_0ef92dd4"
                            ],
                            "fail": [
                                "fingertip_piano.firmware_fail_3dfa6a56"
                            ]
                        },
                        "driver": {
                            "name": "my_tool",
                            "func": fingertipPianoFirmwareDriverMyTool
                        }
                    }
                },
                "firmware": [{
                    "id": "ae4299ad",
                    "name": "fingertip_piano.firmwares_version_ae4299ad",
                    "version": "27.01.002",
                    "isDefault": false,
                    "url": {
                        "name": "dc_motor_sensor_firmware_27_01_002_001_6209_ht1.bin",
                        "url": window.MbApi.getExtResPath('fingertip_piano/res/10d51d65ae8a42a78e89f730e63835c6.bin', 'fingertip_piano')
                    },
                    "modules": [{
                        "id": "d4f6d2f1",
                        "name": "fingertip_piano",
                        "type": "640f",
                        "version": "27.01.002",
                        "url": {
                            "name": "updata_27_01_002_001_640f.bin",
                            "url": window.MbApi.getExtResPath('fingertip_piano/res/4279cf29ef55448ea2604c6ff4e7632a.bin', 'fingertip_piano')
                        }
                    }]
                }],
                "settings": [{
                    "text": "fingertip_piano.UPDATE_FIRMWARE",
                    "handle": this.funcs.firmwareSettingHandle
                }],
                "categoriesOrder": [
                    "cate_515586b6",
                    "cate_9ca82b40",
                    "cate_12fc6527",
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
            "version": "1.0.2",
            "platform": [
                "mblockpc",
                "mblockweb"
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
                "fingertip_piano_reset_button_count",
                "fingertip_piano_get_gesture",
                "fingertip_piano_joystick_event"
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

export default ExtFingertipPiano;