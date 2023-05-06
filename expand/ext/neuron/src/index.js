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

const delay = (t) => new Promise(res => setTimeout(() => res(), t))

class CNeurons {
    constructor() {
        this.types = {
            ranging: 0x630e,
            temperatureHumidity: 0x6307,
            knob: 0x6401,
            temperature: 0x6301,
            moisture: 0x6308,
            voice: 0x630D,
            light: 0x6302,
            button: 0x6402,
            infrared: 0x630c,
            joystick: 0x6407,
            follower: 0x6304,
            touch: 0x6404,
            coloridentify: 0x6305,
            rgb: 0x6502,
            buzzer: 0x6602,
            display: 0x6505,
            wire: 0x6506,
            servo: 0x6203,
            dcmotor: 0x6202,
            ledstrip: 0x6503,
            led: 0x6504,
            ultrasonic: 0x6303,
            smartServo: 0x60
        };
        this.addresses = {};
        this.datas = {};
        this.index = {};
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
            for (var tpn in this.index) {
                this.index[tpn] = 0;
            }
            //     this.addresses = {};
        }
        let addrs = this.addresses[typename];
        if (!addrs) {
            addrs = [];
            this.addresses[typename] = addrs;
        }
        addrs[this.index[typename]] = addr;
        this.index[typename]++;
    };

    getAddr(typeId, idx) {
        let typename = this._getTypeNameByTypeId(typeId);
        let addrs = this.addresses[typename]
        if (addrs == undefined) {
            return 0;
        }
        // invalid
        let r = addrs[idx - 1];
        if (r === undefined) return 0;
        return r;
    };

    setData(typeId, addr, data) {
        this.datas[typeId] = {};
        this.datas[typeId][addr] = data;
    };

    getData(typeId, idx) {
        let addr = this.getAddr(typeId, idx);
        if (addr == 0) {
            //            console.warn('cannot find ' + addr + ' of type ' + typeId + ' idx:' + idx);
            return 0;
        } else {
            if (this.datas[typeId] == undefined) return 0;
            if (this.datas[typeId][addr] == undefined) return 0;
            let data = this.datas[typeId][addr];
            if (data != undefined) return data;
            return 0;
        }
    };

    start(device) {
        this.stop();

        let askAddrTimerId = setInterval(() => {
            device.asyncWriteProtocol('f0f7', ['ff1000']);
        }, 1000);

        let cancellAskAddr = () => {
            clearInterval(askAddrTimerId);
        }
        this._canceller.push(cancellAskAddr);

        // 设�����������地址
        let cancellSetAddr = device.subscribeReadProtocol('f0f7', ['BYTE', '10', 'BYTE', 'BYTE'], (data) => {
            let addr = data[0];
            let type = data[1];
            let subtype = data[2];
            let typeId = type * 256 + subtype;
            this.setAddr(addr, typeId);
        });
        this._canceller.push(cancellSetAddr);

        let cancellerSmartServo = device.subscribeReadProtocol('f0f7',
            ['BYTE', 0x10, 0x60], (data) => {
                let addr = data[0]
                let typeId = 0x60
                this.setAddr(addr, typeId);
            });
        this._canceller.push(cancellerSmartServo);

        let cancelListenRanging = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.ranging >> 8, this.types.ranging & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(this.types.ranging, addr, value);
        });
        this._canceller.push(cancelListenRanging);

        let cancelListentemperatureHumidity = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.temperatureHumidity >> 8, this.types.temperatureHumidity & 0xff, 0x01, 'byte', 'BYTE'], (data) => {
            let addr = data[0];
            let temperature = data[1].toFixed(1) * 100 / 100;
            let humidity = data[2].toFixed(1) * 100 / 100;
            this.setData(this.types.temperatureHumidity, addr, {
                temperature,
                humidity
            });
        });
        this._canceller.push(cancelListentemperatureHumidity);

        let cancelListenknob = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.knob >> 8, this.types.knob & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(0);
            this.setData(this.types.knob, addr, value);
        });
        this._canceller.push(cancelListenknob);

        let cancelListentemperature = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.temperature >> 8, this.types.temperature & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1);
            this.setData(this.types.temperature, addr, value);
        });
        this._canceller.push(cancelListentemperature);

        let cancelListenmoisture = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.moisture >> 8, this.types.moisture & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(0);
            this.setData(this.types.moisture, addr, value);
        });
        this._canceller.push(cancelListenmoisture);

        let cancelListenvoice = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.voice >> 8, this.types.voice & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(0);
            this.setData(this.types.voice, addr, value);
        });
        this._canceller.push(cancelListenvoice);

        let cancelListenlight = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.light >> 8, this.types.light & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(0);
            this.setData(this.types.light, addr, value);
        });
        this._canceller.push(cancelListenlight);

        let cancelListenbutton = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.button >> 8, this.types.button & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(this.types.button, addr, value);
        });
        this._canceller.push(cancelListenbutton);

        let cancelListeninfrared = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.infrared >> 8, this.types.infrared & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(this.types.infrared, addr, value);
        });
        this._canceller.push(cancelListeninfrared);

        let cancelListenjoystick = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.joystick >> 8, this.types.joystick & 0xff, 0x01, 'byte', 'byte'], (data) => {
            let addr = data[0];
            let joystick_x = data[1].toFixed(0);
            let joystick_y = data[2].toFixed(0);
            this.setData(this.types.joystick, addr, {
                joystick_x,
                joystick_y
            });
        });
        this._canceller.push(cancelListenjoystick);

        let cancelListenfollower = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.follower >> 8, this.types.follower & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(this.types.follower, addr, value);
        });
        this._canceller.push(cancelListenfollower);

        let cancelListentouch = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.touch >> 8, this.types.touch & 0xff, 0x01, 'BYTE'], (data) => {
            let addr = data[0];
            let value = data[1];
            this.setData(this.types.touch, addr, value);
        });
        this._canceller.push(cancelListentouch);

        let cancelListencoloridentify = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.coloridentify >> 8, this.types.coloridentify & 0xff, 0x01, 'SHORT', 'SHORT', 'SHORT'], (data) => {
            let addr = data[0];
            let coloridentify_r = data[1].toFixed(0);
            let coloridentify_g = data[2].toFixed(0);
            let coloridentify_b = data[3].toFixed(0);
            this.setData(this.types.coloridentify, addr, {
                coloridentify_r,
                coloridentify_g,
                coloridentify_b
            });
        });
        this._canceller.push(cancelListencoloridentify);

        let cancelListenultrasonic = device.subscribeReadProtocol('f0f7', ['BYTE', this.types.ultrasonic >> 8, this.types.ultrasonic & 0xff, 0x01, 'float'], (data) => {
            let addr = data[0];
            let value = data[1].toFixed(1) * 100 / 100;
            this.setData(this.types.ultrasonic, addr, value);
        });
        this._canceller.push(cancelListenultrasonic);
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

const limitedScopeOfArgs = (val, min, max) => {
    if (val < min)
        val = min;
    else if (val > max)
        val = max;
    return val;
}

const BITS2HEX = (matrix, w, h) => {
    let r = [];
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            r[j + i * 8] = matrix[i + j * 8];
        }
        //        r.push(temp);
    }
    return r;
}

const demandData = async (device, typename, index, type) => {
    let id = neuronsKits.getAddr(typename, index);
    await device.asyncWriteProtocol('f0f7', [id, type, 0x01], 0);
    //    console.warn(typename, type);
}

const _mk_throttle_timers = {}
/**
 * 
 * @param {number} cd 冷却时���������
 * @param {*} obj 如果是对象方法的this
 * @param {*} fun 函数
 * @param  {...any} args ���数的应用参数 
 */
const mk_throttle = (cd, obj, fun, ...args) => {
    let now = Date.now();
    let tid = _mk_throttle_timers[fun]
    if (!tid) {
        tid = now - 1
    }
    if (now < tid) {
        return
    }
    _mk_throttle_timers[fun] = now + cd
    return fun.call(obj, ...args)
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

let smartServoLockList = []

function smartServoGetLock(id) {
    if (smartServoLockList[id] == true) {
        return false;
    } else {
        smartServoLockList[id] = true
        return true;
    }
}

function smartServoUnlock(id) {
    smartServoLockList[id] = false
}

let smartServoFreeFlagList = [];

function setSmartServoFreeFlag(id, bool_value) {
    smartServoFreeFlagList[id] = bool_value;
}

function getSmartServoFreeFlag(id) {
    if (smartServoFreeFlagList[id] != false) {
        return true;
    } else {
        return false;
    }
}

let smartServoBlockFlagList = [];

function setSmartServoBlockFlag(id, bool_value) {
    smartServoBlockFlagList[id] = bool_value;
}

function getSmartServoBlockFlag(id) {
    if (smartServoBlockFlagList[id] != false) {
        return true;
    } else {
        return false;
    }
}

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



class ExtNeuron {

    constructor() {
        this.funcs = {
            'neuron_run_dcmotor_with_time': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6202, index);

                    let time = parseFloat(args.TIME);
                    let speed = Number(args.POWER);
                    console.warn(index, id, time, speed);
                    speed = limitedScopeOfArgs(speed, -100, 100);
                    if (isNaN(time) || time <= 0) {
                        return
                    } else {
                        if (args.SLOT == '0') {
                            await device.asyncWriteProtocol('f0f7', [id, '6202', 0x01, ['byte', speed],
                                ['byte', speed]
                            ], 0);
                            await delay(time * 1000)
                            await device.asyncWriteProtocol('f0f7', [id, '6202', 0x01, ['byte', 0],
                                ['byte', 0]
                            ], 0);
                        } else if (args.SLOT == '1') {
                            await device.asyncWriteProtocol('f0f7', [id, '6202', 0x02, ['byte', speed]], 0);
                            await delay(time * 1000)
                            await device.asyncWriteProtocol('f0f7', [id, '6202', 0x02, ['byte', 0]], 0);
                        } else if (args.SLOT == '2') {
                            await device.asyncWriteProtocol('f0f7', [id, '6202', 0x03, ['byte', speed]], 0);
                            await delay(time * 1000)
                            await device.asyncWriteProtocol('f0f7', [id, '6202', 0x03, ['byte', 0]], 0);
                        }
                    }
                }
            },
            'neuron_run_dcmotor_with_speed': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6202, index);
                    let speed = Number(args.POWER);
                    speed = limitedScopeOfArgs(speed, -100, 100);
                    if (args.SLOT == '0') {
                        await device.asyncWriteProtocol('f0f7', [id, '6202', 0x01, ['byte', speed],
                            ['byte', speed]
                        ], 0);
                    } else if (args.SLOT == '1') {
                        await device.asyncWriteProtocol('f0f7', [id, '6202', 0x02, ['byte', speed]], 0);
                    } else if (args.SLOT == '2') {
                        await device.asyncWriteProtocol('f0f7', [id, '6202', 0x03, ['byte', speed]], 0);
                    }
                }
            },
            'neuron_run_dcmotors': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6202, index);
                    let speed_1 = Number(args.POWER_LEFT);
                    let speed_2 = Number(args.POWER_RIGHT);
                    speed_1 = limitedScopeOfArgs(speed_1, -100, 100);
                    speed_2 = limitedScopeOfArgs(speed_2, -100, 100);
                    await device.asyncWriteProtocol('f0f7', [id, '6202', 0x01, ['byte', speed_1],
                        ['byte', speed_2]
                    ], 0);
                }
            },
            'neuron_run_servo': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6203, index);
                    let angle = parseInt(args.ANGLE);
                    if (isNaN(angle)) {
                        angle = 0;
                    }
                    angle = limitedScopeOfArgs(angle, 0, 180);
                    if (args.SLOT == 0) {
                        await device.asyncWriteProtocol('f0f7', [id, '6203', 0x01, ['SHORT', angle]], 0);
                    } else if (args.SLOT == 1) {
                        await device.asyncWriteProtocol('f0f7', [id, '6203', 0x02, ['SHORT', angle]], 0);
                    } else if (args.SLOT == 2) {
                        await device.asyncWriteProtocol('f0f7', [id, '6203', 0x03, ['SHORT', angle]], 0);
                    }
                }
            },
            'BLOCK_1566873821085': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    let angle = parseParameter(args.angle, -0x1fffffff, 0x1fffffff)
                    if (isNaN(angle)) {
                        return;
                    }
                    angle = -angle;
                    let speed = parseParameter(args.speed, -600, 600)

                    if (isNaN(speed)) {
                        return;
                    }
                    let speed_rpm = Math.floor(speed * 60 / 360)
                    /*
                    if (speed_rpm <= 0) {
                        await device.asyncWriteProtocol('f0f7', [id, 0x60, 0x16, 0], 0);
                        return;
                    }*/
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x036], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '60', 0x36, 'long']);
                    if (data == null) {
                        return;
                    }
                    while (!getSmartServoFreeFlag(id)) {
                        setSmartServoBlockFlag(id, false);
                        await delay(10)
                    }
                    setSmartServoBlockFlag(id, true);
                    setSmartServoFreeFlag(id, false)
                    let target_angle = data[0] + angle;
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x033, ['long', target_angle],
                        ['SHORT', speed_rpm]
                    ], 0);
                    while (getSmartServoBlockFlag(id)) {
                        await device.asyncWriteProtocol('f0f7', [id, '60', 0x036], 30);
                        let current_angle = await device.asyncReadProtocol('f0f7', [id, '60', 0x36, 'long']);
                        if (current_angle == null) {
                            break;
                        }
                        if (Math.abs(current_angle[0] - target_angle) < 10) {
                            break;
                        }
                    }
                    setSmartServoFreeFlag(id, true)
                }
            },
            'BLOCK_1566873830496': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    let angle = parseParameter(args.angle, -0x1fffffff, 0x1fffffff)
                    if (isNaN(angle)) {
                        return;
                    }
                    angle = -angle;
                    let speed = parseParameter(args.speed, -600, 600)
                    if (isNaN(speed)) {
                        return;
                    }
                    let speed_rpm = Math.floor(speed * 60 / 360)
                    /*
                    if (speed_rpm <= 0) {
                        await device.asyncWriteProtocol('f0f7', [id, 0x60, 0x16, 0], 0);
                        return;
                    }*/
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x036], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '60', 0x36, 'long']);
                    if (data == null) {
                        return;
                    }
                    while (!getSmartServoFreeFlag(id)) {
                        setSmartServoBlockFlag(id, false);
                        await delay(10)
                    }
                    setSmartServoBlockFlag(id, true);
                    setSmartServoFreeFlag(id, false)
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x033, ['long', angle],
                        ['SHORT', speed_rpm]
                    ], 0);
                    while (getSmartServoBlockFlag(id)) {
                        await device.asyncWriteProtocol('f0f7', [id, '60', 0x036], 30);
                        let current_angle = await device.asyncReadProtocol('f0f7', [id, '60', 0x36, 'long']);
                        if (current_angle == null) {
                            break;
                        }
                        if (Math.abs(current_angle[0] - angle) < 10) {
                            break;
                        }
                    }
                    setSmartServoFreeFlag(id, true)
                }
            },
            'BLOCK_1566873904029': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    let time = parseParameter(args.time, 0)
                    if (isNaN(time)) {
                        return;
                    }
                    let speed = parseParameter(args.speed_percent, -100, 100)
                    if (isNaN(speed)) {
                        return;
                    }
                    speed = -Math.floor(speed * 255 / 100);
                    setSmartServoBlockFlag(id, false);
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x035, ['short', speed]], 0);
                    await delay(time * 1000);
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x035, ['short', 0]], 0);
                }
            },
            'BLOCK_1566873923438': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    let speed = parseParameter(args.speed_percent, -100, 100)
                    if (isNaN(speed)) {
                        return;
                    }
                    speed = -Math.floor(speed * 255 / 100);
                    setSmartServoBlockFlag(id, false);
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x035, ['short', speed]], 0);
                }
            },
            'BLOCK_1566874019471': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    setSmartServoBlockFlag(id, false);
                    await device.asyncWriteProtocol('f0f7', [id, 0x60, 0x16, 0], 0);
                }
            },
            'BLOCK_1566874230002': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return 0;
                    }
                    let angle = parseParameter(args.angle)
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x036], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '60', 0x36, 'long']);
                    if (data == null) {
                        return 0;
                    } else {
                        return -data[0];
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1566874263478': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return 0;
                    }
                    let angle = parseParameter(args.angle)
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x036], 0x00);
                    let data = await device.asyncReadProtocol('f0f7', [id, '60', 0x36, 'long']);
                    if (data == null) {
                        return 0;
                    } else {
                        return Math.floor(-data[0] / 360)
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1566874323828': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);
                    if (isNaN(index)) {
                        return 0;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return 0;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x023], 0x00);
                    let data = await device.asyncReadProtocol('f0f7', [id, '60', 0x23, 'float']);
                    if (data == null) {
                        return 0;
                    } else {
                        return Math.floor(-data[0] * 360 / 60)
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_1566874317863': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    setSmartServoBlockFlag(id, false);
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x16, 1], 0);
                }
            },
            'BLOCK_1566874339176': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    let cmd_type = 0x16
                    setSmartServoBlockFlag(id, false);
                    await device.asyncWriteProtocol('f0f7', [id, 0x60, cmd_type, 0], 0);
                }
            },
            'BLOCK_1566985510345': {
                onRun: async (args, app, device, block) => {
                    let index = parseIndex(args.index);

                    if (isNaN(index)) {
                        return;
                    }
                    let id = neuronsKits.getAddr(0x60, index);
                    if (id == 0) {
                        return;
                    }
                    setSmartServoBlockFlag(id, false);
                    await device.asyncWriteProtocol('f0f7', [id, 0x60, 0x16, 0], 0);
                    await delay(3000)
                    await device.asyncWriteProtocol('f0f7', [id, '60', 0x30], 0);
                    await device.asyncWriteProtocol('f0f7', [id, 0x60, 0x16, 0], 0);
                }
            },
            'neuron_set_led_with_time': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6502, index);
                    let color = args.COLOR;
                    let color_r = parseInt(color.substring(1, 3), 16);
                    let color_g = parseInt(color.substring(3, 5), 16);
                    let color_b = parseInt(color.substring(5, 7), 16);
                    let time = parseFloat(args.TIME);
                    if (isNaN(time) || time <= 0) {
                        return
                    } else {
                        await device.asyncWriteProtocol('f0f7', [id, '6502', 0x01, ['SHORT', color_r],
                            ['SHORT', color_g],
                            ['SHORT', color_b]
                        ], 0);
                        await delay(time * 1000)
                        await device.asyncWriteProtocol('f0f7', [id, '6502', 0x01, ['SHORT', 0],
                            ['SHORT', 0],
                            ['SHORT', 0]
                        ], 0);
                    }
                }
            },
            'neuron_set_led': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6502, index);
                    let color = args.COLOR;
                    let color_r = parseInt(color.substring(1, 3), 16);
                    let color_g = parseInt(color.substring(3, 5), 16);
                    let color_b = parseInt(color.substring(5, 7), 16);
                    await device.asyncWriteProtocol('f0f7', [id, '6502', 0x01, ['SHORT', color_r],
                        ['SHORT', color_g],
                        ['SHORT', color_b]
                    ], 0);
                }
            },
            'neuron_set_led_with_rgb': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6502, index);
                    let color_r = parseInt(args.R);
                    let color_g = parseInt(args.G);
                    let color_b = parseInt(args.B);
                    if (isNaN(color_r)) {
                        color_r = 0;
                    }
                    if (isNaN(color_g)) {
                        color_g = 0;
                    }
                    if (isNaN(color_b)) {
                        color_b = 0;
                    }
                    color_r = limitedScopeOfArgs(color_r, 0, 255);
                    color_g = limitedScopeOfArgs(color_g, 0, 255);
                    color_b = limitedScopeOfArgs(color_b, 0, 255);
                    await device.asyncWriteProtocol('f0f7', [id, '6502', 0x01, ['SHORT', color_r],
                        ['SHORT', color_g],
                        ['SHORT', color_b]
                    ], 0);
                }
            },
            'neuron_turn_off_led': {
                onRun: async (args, app, device, block) => {
                    await device.asyncWriteProtocol('f0f7', [0xff, '6502', 0x01, ['SHORT', 0],
                        ['SHORT', 0],
                        ['SHORT', 0]
                    ], 0);
                }
            },
            'neuron_set_ledstrip_mode': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6503, index);
                    let strip = args.STRIP.split('');
                    for (let i = 0; i < 15; i++) {
                        strip[i] = parseInt(strip[i]);
                    }
                    strip.unshift(15);
                    strip.unshift(1);
                    strip.unshift(0);
                    strip.unshift(0x02);
                    strip.unshift(0x03);
                    strip.unshift(0x65);
                    strip.unshift(id);
                    await device.asyncWriteProtocol('f0f7', strip, 0);
                }
            },
            'neuron_set_ledstrip_with_color': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6503, index);
                    let position = parseInt(args.POSITION);
                    if ((isNaN(position)) || (position < 0)) {
                        position = 1;
                    }
                    if (position > 15) {
                        position = 15;
                    }
                    let color = args.COLOR;
                    let color_r = parseInt(color.substring(1, 3), 16);
                    let color_g = parseInt(color.substring(3, 5), 16);
                    let color_b = parseInt(color.substring(5, 7), 16);
                    await device.asyncWriteProtocol('f0f7', [id, '6503', 0x01, ['BYTE', position],
                        ['SHORT', color_r],
                        ['SHORT', color_g],
                        ['SHORT', color_b]
                    ], 0);
                }
            },
            'neuron_set_ledstrip_with_rgb': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6503, index);
                    let position = parseInt(args.POSITION);
                    if ((isNaN(position)) || (position < 0)) {
                        position = 1;
                    }
                    if (position > 15) {
                        position = 15;
                    }
                    let color_r = parseInt(args.R);
                    let color_g = parseInt(args.G);
                    let color_b = parseInt(args.B);
                    if (isNaN(color_r)) {
                        color_r = 0;
                    }
                    if (isNaN(color_g)) {
                        color_g = 0;
                    }
                    if (isNaN(color_b)) {
                        color_b = 0;
                    }
                    color_r = limitedScopeOfArgs(color_r, 0, 255);
                    color_g = limitedScopeOfArgs(color_g, 0, 255);
                    color_b = limitedScopeOfArgs(color_b, 0, 255);
                    await device.asyncWriteProtocol('f0f7', [id, '6503', 0x01, ['BYTE', position],
                        ['SHORT', color_r],
                        ['SHORT', color_g],
                        ['SHORT', color_b]
                    ], 0);
                }
            },
            'neuron_turn_off_ledstrip': {
                onRun: async (args, app, device, block) => {
                    await device.asyncWriteProtocol('f0f7', [0xff, '6503', 0x01, ['BYTE', 0],
                        ['SHORT', 0],
                        ['SHORT', 0],
                        ['SHORT', 0]
                    ], 0);
                }
            },
            'neuron_set_ledpanel_with_time': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6504, index);
                    let time = parseFloat(args.TIME);
                    let panel = args.PANEL.split('');
                    for (let i = 0; i < 64; i++) {
                        panel[i] = parseInt(panel[i]);
                    }
                    panel = BITS2HEX(panel, 8, 8);
                    panel.unshift(64);
                    panel.unshift(0);
                    panel.unshift(0x03);
                    panel.unshift(0x04);
                    panel.unshift(0x65);
                    panel.unshift(id);
                    if (isNaN(time) || time <= 0) {
                        return
                    } else {
                        await device.asyncWriteProtocol('f0f7', panel, 0);
                        await delay(time * 1000)
                        await device.asyncWriteProtocol('f0f7', [0xff, '6504', 0x02, ['BYTE', 0],
                            ['SHORT', 0],
                            ['SHORT', 0],
                            ['SHORT', 0]
                        ], 0);
                    }
                }
            },
            'neuron_set_ledpanel_face': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6504, index);
                    let panel = args.PANEL.split('');
                    for (let i = 0; i < 64; i++) {
                        panel[i] = parseInt(panel[i]);
                    }
                    panel = BITS2HEX(panel, 8, 8);
                    panel.unshift(64);
                    panel.unshift(0);
                    panel.unshift(0x03);
                    panel.unshift(0x04);
                    panel.unshift(0x65);
                    panel.unshift(id);
                    await device.asyncWriteProtocol('f0f7', panel, 0);
                }
            },
            'neuron_set_ledpanel_postion': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6504, index);
                    let color = args.COLOR;
                    let color_r = parseInt(color.substring(1, 3), 16);
                    let color_g = parseInt(color.substring(3, 5), 16);
                    let color_b = parseInt(color.substring(5, 7), 16);
                    if (args.X >= 8) {
                        args.X = 64;
                    }
                    if (args.Y >= 8) {
                        args.Y = 8;
                    }
                    let x = Number(args.X);
                    let y = Number(args.Y);
                    if (((parseInt(x) == parseFloat(x))) && ((parseInt(y) == parseFloat(y)))) {
                        if (isNaN(x)) {
                            x = 0;
                        }
                        if (isNaN(y)) {
                            y = 0;
                        }
                        let number = x + 1 + (8 * y);
                        await device.asyncWriteProtocol('f0f7', [id, '6504', 0x02, ['BYTE', number],
                            ['SHORT', color_r],
                            ['SHORT', color_g],
                            ['SHORT', color_b]
                        ], 0);
                    } else {
                        return
                    }
                }
            },
            'neuron_set_ledpanel_postion_rgb': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6504, index);
                    let color_r = parseInt(args.R);
                    let color_g = parseInt(args.G);
                    let color_b = parseInt(args.B);
                    if (isNaN(color_r)) {
                        color_r = 0;
                    }
                    if (isNaN(color_g)) {
                        color_g = 0;
                    }
                    if (isNaN(color_b)) {
                        color_b = 0;
                    }
                    color_r = limitedScopeOfArgs(color_r, 0, 255);
                    color_g = limitedScopeOfArgs(color_g, 0, 255);
                    color_b = limitedScopeOfArgs(color_b, 0, 255);
                    if (args.X >= 8) {
                        args.X = 64;
                    }
                    if (args.Y >= 8) {
                        args.Y = 8;
                    }
                    let x = Number(args.X);
                    let y = Number(args.Y);
                    if (((parseInt(x) == parseFloat(x))) && ((parseInt(y) == parseFloat(y)))) {
                        if (isNaN(x)) {
                            x = 0;
                        }
                        if (isNaN(y)) {
                            y = 0;
                        }
                        let number = x + 1 + (8 * y);
                        await device.asyncWriteProtocol('f0f7', [id, '6504', 0x02, ['BYTE', number],
                            ['SHORT', color_r],
                            ['SHORT', color_g],
                            ['SHORT', color_b]
                        ], 0);
                    } else {
                        return
                    }
                }
            },
            'neuron_turn_off_ledpanel_postion': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6504, index);
                    if (args.X >= 8) {
                        args.X = 64;
                    }
                    if (args.Y >= 8) {
                        args.Y = 8;
                    }
                    let x = Number(args.X);
                    let y = Number(args.Y);
                    if (((parseInt(x) == parseFloat(x))) && ((parseInt(y) == parseFloat(y)))) {

                        if (isNaN(x)) {
                            x = 0;
                        }
                        if (isNaN(y)) {
                            y = 0;
                        }
                        let number = x + 1 + (8 * y);
                        await device.asyncWriteProtocol('f0f7', [id, '6504', 0x02, ['BYTE', number],
                            ['SHORT', 0],
                            ['SHORT', 0],
                            ['SHORT', 0]
                        ], 0);
                    } else {
                        return
                    }
                }
            },
            'neuron_turn_off_ledpanel': {
                onRun: async (args, app, device, block) => {
                    await device.asyncWriteProtocol('f0f7', [0xff, '6504', 0x02, ['BYTE', 0],
                        ['SHORT', 0],
                        ['SHORT', 0],
                        ['SHORT', 0]
                    ], 0);
                }
            },
            'neuron_display_emotion': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6505, index);
                    let emotion = parseInt(args.EMOTION);
                    await device.asyncWriteProtocol('f0f7', [id, '6505', 0x02, ['BYTE', emotion],
                        ['BYTE', 0]
                    ], 50);
                }
            },
            'neuron_display_emotion_with_time': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6505, index);
                    let emotion = parseInt(args.EMOTION);
                    let time = parseFloat(args.DURATION);
                    if (isNaN(time) || time <= 0) {
                        return
                    } else {
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x02, ['BYTE', emotion],
                            ['BYTE', 0]
                        ], 0);
                        await delay(time * 1000)
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 1],
                            ['BYTE', 1],
                            ['SHORT', 0]
                        ], 0);
                    }
                }
            },
            'neuron_display_icon': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6505, index);
                    var string = (args.STRING).toString();
                    string = string.split('');
                    if (args.ICON_ID == 1) {
                        for (let i = 0; i < 12; i++) {
                            if (string[i] == undefined) {
                                string[i] = "20";
                            } else {
                                string[i] = (string[i]).charCodeAt();
                            }
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 2],
                            ['BYTE', 1],
                            ['SHORT', 12],
                            ['BYTE', string[0]],
                            ['BYTE', string[1]],
                            ['BYTE', string[2]],
                            ['BYTE', string[3]],
                            ['BYTE', string[4]],
                            ['BYTE', string[5]],
                            ['BYTE', string[6]],
                            ['BYTE', string[7]],
                            ['BYTE', string[8]],
                            ['BYTE', string[9]],
                            ['BYTE', string[10]],
                            ['BYTE', string[11]]
                        ], 0);
                    } else {
                        let emotion = [];
                        for (let i = 0; i < 6; i++) {
                            emotion[i] = (args.ICON_ID[i]).charCodeAt();
                        }
                        for (let i = 0; i < 10; i++) {
                            if (string[i] == undefined) {
                                string[i] = "20";
                            } else {
                                string[i] = (string[i]).charCodeAt();
                            }
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 2],
                            ['BYTE', 1],
                            ['SHORT', 16],
                            ['BYTE', emotion[0]],
                            ['BYTE', emotion[1]],
                            ['BYTE', emotion[2]],
                            ['BYTE', emotion[3]],
                            ['BYTE', emotion[4]],
                            ['BYTE', emotion[5]],
                            ['BYTE', string[0]],
                            ['BYTE', string[1]],
                            ['BYTE', string[2]],
                            ['BYTE', string[3]],
                            ['BYTE', string[4]],
                            ['BYTE', string[5]],
                            ['BYTE', string[6]],
                            ['BYTE', string[7]],
                            ['BYTE', string[8]],
                            ['BYTE', string[9]]
                        ], 0);
                    }
                }
            },
            'neuron_display_icon_with_pos': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6505, index);
                    var string_1 = (args.STRING_1).toString();
                    string_1 = string_1.split('');
                    var string_2 = (args.STRING_2).toString();
                    string_2 = string_2.split('');
                    let emotion = [];
                    if ((args.ICON_ID_1 == 1) && (args.ICON_ID_2 != 1)) {
                        let emotion1 = [];
                        for (let i = 0; i < 6; i++) {
                            emotion1[i] = (args.ICON_ID_2[i]).charCodeAt();
                        }
                        for (let i = 0; i < 12; i++) {
                            if (string_1[i] == undefined) {
                                string_1[i] = "20";
                            } else {
                                string_1[i] = (string_1[i]).charCodeAt();
                            }
                        }
                        for (let i = 0; i < 10; i++) {
                            if (string_2[i] == undefined) {
                                string_2[i] = "20";
                            } else {
                                string_2[i] = (string_2[i]).charCodeAt();
                            }
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 1],
                            ['BYTE', 1],
                            ['SHORT', 28],
                            ['BYTE', string_1[0]],
                            ['BYTE', string_1[1]],
                            ['BYTE', string_1[2]],
                            ['BYTE', string_1[3]],
                            ['BYTE', string_1[4]],
                            ['BYTE', string_1[5]],
                            ['BYTE', string_1[6]],
                            ['BYTE', string_1[7]],
                            ['BYTE', string_1[8]],
                            ['BYTE', string_1[9]],
                            ['BYTE', string_1[10]],
                            ['BYTE', string_1[11]],
                            ['BYTE', emotion1[0]],
                            ['BYTE', emotion1[1]],
                            ['BYTE', emotion1[2]],
                            ['BYTE', emotion1[3]],
                            ['BYTE', emotion1[4]],
                            ['BYTE', emotion1[5]],
                            ['BYTE', string_2[0]],
                            ['BYTE', string_2[1]],
                            ['BYTE', string_2[2]],
                            ['BYTE', string_2[3]],
                            ['BYTE', string_2[4]],
                            ['BYTE', string_2[5]],
                            ['BYTE', string_2[6]],
                            ['BYTE', string_2[7]],
                            ['BYTE', string_2[8]],
                            ['BYTE', string_2[9]]
                        ], 0);
                    } else if ((args.ICON_ID_1 != 1) && (args.ICON_ID_2 == 1)) {
                        let emotion = [];
                        for (let i = 0; i < 6; i++) {
                            emotion[i] = (args.ICON_ID_1[i]).charCodeAt();
                        }
                        for (let i = 0; i < 10; i++) {
                            if (string_1[i] == undefined) {
                                string_1[i] = "20";
                            } else {
                                string_1[i] = (string_1[i]).charCodeAt();
                            }
                        }
                        for (let i = 0; i < 12; i++) {
                            if (string_2[i] == undefined) {
                                string_2[i] = "20";
                            } else {
                                string_2[i] = (string_2[i]).charCodeAt();
                            }
                            await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 1],
                                ['BYTE', 1],
                                ['SHORT', 28],
                                ['BYTE', emotion[0]],
                                ['BYTE', emotion[1]],
                                ['BYTE', emotion[2]],
                                ['BYTE', emotion[3]],
                                ['BYTE', emotion[4]],
                                ['BYTE', emotion[5]],
                                ['BYTE', string_1[0]],
                                ['BYTE', string_1[1]],
                                ['BYTE', string_1[2]],
                                ['BYTE', string_1[3]],
                                ['BYTE', string_1[4]],
                                ['BYTE', string_1[5]],
                                ['BYTE', string_1[6]],
                                ['BYTE', string_1[7]],
                                ['BYTE', string_1[8]],
                                ['BYTE', string_1[9]],
                                ['BYTE', string_2[0]],
                                ['BYTE', string_2[1]],
                                ['BYTE', string_2[2]],
                                ['BYTE', string_2[3]],
                                ['BYTE', string_2[4]],
                                ['BYTE', string_2[5]],
                                ['BYTE', string_2[6]],
                                ['BYTE', string_2[7]],
                                ['BYTE', string_2[8]],
                                ['BYTE', string_2[9]],
                                ['BYTE', string_2[10]],
                                ['BYTE', string_2[11]]
                            ], 0);
                        }
                    } else if ((args.ICON_ID_1 == 1) && (args.ICON_ID_2 == 1)) {
                        for (let i = 0; i < 12; i++) {
                            if (string_1[i] == undefined) {
                                string_1[i] = "20";
                            } else {
                                string_1[i] = (string_1[i]).charCodeAt();
                            }
                        }
                        for (let i = 0; i < 12; i++) {
                            if (string_2[i] == undefined) {
                                string_2[i] = "20";
                            } else {
                                string_2[i] = (string_2[i]).charCodeAt();
                            }
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 1],
                            ['BYTE', 1],
                            ['SHORT', 24],
                            ['BYTE', string_1[0]],
                            ['BYTE', string_1[1]],
                            ['BYTE', string_1[2]],
                            ['BYTE', string_1[3]],
                            ['BYTE', string_1[4]],
                            ['BYTE', string_1[5]],
                            ['BYTE', string_1[6]],
                            ['BYTE', string_1[7]],
                            ['BYTE', string_1[8]],
                            ['BYTE', string_1[9]],
                            ['BYTE', string_1[10]],
                            ['BYTE', string_1[11]],
                            ['BYTE', string_2[0]],
                            ['BYTE', string_2[1]],
                            ['BYTE', string_2[2]],
                            ['BYTE', string_2[3]],
                            ['BYTE', string_2[4]],
                            ['BYTE', string_2[5]],
                            ['BYTE', string_2[6]],
                            ['BYTE', string_2[7]],
                            ['BYTE', string_2[8]],
                            ['BYTE', string_2[9]],
                            ['BYTE', string_2[10]],
                            ['BYTE', string_2[11]]
                        ], 0);
                    } else {
                        let emotion = [];
                        for (let i = 0; i < 6; i++) {
                            emotion[i] = (args.ICON_ID_1[i]).charCodeAt();
                        }
                        let emotion1 = [];
                        for (let i = 0; i < 6; i++) {
                            emotion1[i] = (args.ICON_ID_2[i]).charCodeAt();
                        }
                        for (let i = 0; i < 12; i++) {
                            if (string_1[i] == undefined) {
                                string_1[i] = "20";
                            } else {
                                string_1[i] = (string_1[i]).charCodeAt();
                            }
                        }
                        for (let i = 0; i < 12; i++) {
                            if (string_2[i] == undefined) {
                                string_2[i] = "20";
                            } else {
                                string_2[i] = (string_2[i]).charCodeAt();
                            }
                        }
                        await device.asyncWriteProtocol('f0f7', [id, '6505', 0x01, ['BYTE', 1],
                            ['BYTE', 1],
                            ['SHORT', 32],
                            ['BYTE', emotion[0]],
                            ['BYTE', emotion[1]],
                            ['BYTE', emotion[2]],
                            ['BYTE', emotion[3]],
                            ['BYTE', emotion[4]],
                            ['BYTE', emotion[5]],
                            ['BYTE', string_1[0]],
                            ['BYTE', string_1[1]],
                            ['BYTE', string_1[2]],
                            ['BYTE', string_1[3]],
                            ['BYTE', string_1[4]],
                            ['BYTE', string_1[5]],
                            ['BYTE', string_1[6]],
                            ['BYTE', string_1[7]],
                            ['BYTE', string_1[8]],
                            ['BYTE', string_1[9]],
                            ['BYTE', emotion1[0]],
                            ['BYTE', emotion1[1]],
                            ['BYTE', emotion1[2]],
                            ['BYTE', emotion1[3]],
                            ['BYTE', emotion1[4]],
                            ['BYTE', emotion1[5]],
                            ['BYTE', string_2[0]],
                            ['BYTE', string_2[1]],
                            ['BYTE', string_2[2]],
                            ['BYTE', string_2[3]],
                            ['BYTE', string_2[4]],
                            ['BYTE', string_2[5]],
                            ['BYTE', string_2[6]],
                            ['BYTE', string_2[7]],
                            ['BYTE', string_2[8]],
                            ['BYTE', string_2[9]]
                        ], 0);
                    }
                }
            },
            'neuron_light_on_el_wiredriver': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6506, index);
                    if (args.SLOT == 0) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x01, ['BYTE', 0x0f]], 0);
                    } else if (args.SLOT == 1) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x02, ['BYTE', 1]], 0);
                    } else if (args.SLOT == 2) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x03, ['BYTE', 1]], 0);
                    } else if (args.SLOT == 3) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x04, ['BYTE', 1]], 0);
                    } else if (args.SLOT == 4) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x05, ['BYTE', 1]], 0);
                    }
                }
            },
            'neuron_light_off_el_wiredriver': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6506, index);
                    if (args.SLOT == 0) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x01, ['BYTE', 0]], 0);
                    } else if (args.SLOT == 1) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x02, ['BYTE', 0]], 0);
                    } else if (args.SLOT == 2) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x03, ['BYTE', 0]], 0);
                    } else if (args.SLOT == 3) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x04, ['BYTE', 0]], 0);
                    } else if (args.SLOT == 4) {
                        await device.asyncWriteProtocol('f0f7', [id, '6506', 0x05, ['BYTE', 0]], 0);
                    }
                }
            },
            'neuron_play_tone': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6602, index);
                    let tone = parseInt(args.TONE);
                    let time = parseFloat(args.BEAT);
                    if (isNaN(time) || time <= 0) {
                        return
                    } else {
                        await device.asyncWriteProtocol('f0f7', [id, '6602', 0x01, ['short', tone],
                            ['BYTE', 50], 0
                        ]);
                        await delay(time * 1000)
                        await device.asyncWriteProtocol('f0f7', [id, '6602', 0x01, ['short', 0],
                            ['BYTE', 0], 0
                        ]);
                    }
                }
            },
            'neuron_play_hz': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6602, index);
                    let hz = parseInt(args.HZ);
                    hz = limitedScopeOfArgs(hz, 0, 5000);
                    let time = parseFloat(args.TIME);
                    if ((isNaN(time)) || (time <= 0) || (hz < 20) || (isNaN(hz))) {
                        return
                    } else {
                        await device.asyncWriteProtocol('f0f7', [id, '6602', 0x01, ['short', hz],
                            ['BYTE', 50], 0
                        ]);
                        await delay(time * 1000)
                        await device.asyncWriteProtocol('f0f7', [id, '6602', 0x01, ['short', 0],
                            ['BYTE', 0], 0
                        ]);
                    }
                }
            },
            'neuron_event_button_pressed': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.button, index);
                    if (data == 1) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_knob': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x6401, index, '6401');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.knob, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_temperature': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.temperature, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_event_linefollow': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(50, null, demandData, device, 0x6304, index, '6304');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.follower, index);
                    if (args.AXIS == '2') {
                        if ((data == 1) || (data == 3)) return true;
                        else return false;
                    } else if (args.AXIS == '1') {
                        if ((data == 2) || (data == 3)) return true;
                        else return false;
                    } else if (args.AXIS == '0') {
                        if (data == 3) return true;
                        else return false;
                    } else if (args.AXIS == '3') {
                        if (data == 0) return true;
                        else return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_lightness': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x6302, index, '6302');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.light, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_event_touch_color': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x6404, index, '6404');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.touch, index);
                    if (args.COLOR == '0') {
                        if ((data & 0x01) == 1) return true;
                        else return false;
                    }
                    if (args.COLOR == '1') {
                        if (data & 0x02) return true;
                        else return false;
                    }
                    if (args.COLOR == '2') {
                        if (data & 0x04) return true;
                        else return false;
                    }
                    if (args.COLOR == '3') {
                        if (data & 0x08) return true;
                        else return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_volume': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x630d, index, '630d');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.voice, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_ultrasonic': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.ultrasonic, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_event_tilt': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6306, index);
                    let threshold = 15;
                    if (args.DIRECTION == 'forward') {
                        await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x08],
                            ['long', 40]
                        ], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x08, 'short']);
                        if (data == null) return false;
                        let value = data[0];
                        if (value <= -threshold) return true;
                        else return false;
                    } else if (args.DIRECTION == 'backward') {
                        await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x08],
                            ['long', 40]
                        ], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x08, 'short']);
                        if (data == null) return false;
                        let value = data[0];
                        if (value >= threshold) return true;
                        else return false;
                    } else if (args.DIRECTION == 'left') {
                        await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x09],
                            ['long', 40]
                        ], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x09, 'short']);
                        if (data == null) return false;
                        let value = data[0];
                        if (value <= -threshold) return true;
                        else return false;
                    } else if (args.DIRECTION == 'right') {
                        await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x09],
                            ['long', 40]
                        ], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x09, 'short']);
                        if (data == null) return false;
                        let value = data[0];
                        if (value >= threshold) return true;
                        else return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_event_shaked': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6306, index);
                    await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x01],
                        ['long', 40]
                    ], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x01, 'BYTE']);
                    if (data == 1) return true;
                    else return false;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_gyro_angle': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6306, index);
                    if (args.COORDINATE == 'x') {
                        await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x09],
                            ['long', 40]
                        ], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x09, 'short']);
                        if (data == null) return 0;
                        return data;
                    } else if (args.COORDINATE == 'y') {
                        await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', 0x08],
                            ['long', 40]
                        ], 0);
                        let data = await device.asyncReadProtocol('f0f7', [id, '6306', 0x08, 'short']);
                        if (data == null) return 0;
                        return data;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_gyro_speed': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let id = neuronsKits.getAddr(0x6306, index);
                    let aix = args.COORDINATE;
                    let type = 0;
                    if (aix == 'x') {
                        type = 0x02;
                    } else if (aix == 'y') {
                        type = 0x03;
                    } else if (aix == 'z') {
                        type = 0x04;
                    } else {
                        return;
                    }
                    await device.asyncWriteProtocol('f0f7', [id, '6306', 0x01, 0x02, ['BYTE', type],
                        ['long', 40]
                    ], 0);
                    let data = await device.asyncReadProtocol('f0f7', [id, '6306', type, 'float']);
                    if (data == null) {
                        data = 0;
                        return data;
                    }
                    return (data * 9.8).toFixed(2);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_color_sensor': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(50, null, demandData, device, 0x6305, index, '6305');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.coloridentify, index);
                    if (args.COLOR == '0') {
                        if (isNaN(data.coloridentify_r)) return 0;
                        return data.coloridentify_r;
                    } else if (args.COLOR == '1') {
                        if (isNaN(data.coloridentify_g)) return 0;
                        return data.coloridentify_g;
                    } else if (args.COLOR == '2') {
                        if (isNaN(data.coloridentify_b)) return 0;
                        return data.coloridentify_b;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_event_josystick_direction': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x6407, index, '6407');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.joystick, index);
                    if (args.DIRECTION == 'forward') {
                        if ((0 < data.joystick_y) && (data.joystick_y <= 100)) return true;
                        else return false;
                    } else if (args.DIRECTION == 'backward') {
                        if (data.joystick_y > 155) return true;
                        else return false;
                    } else if (args.DIRECTION == 'left') {
                        if (data.joystick_x > 155) return true;
                        else return false;
                    } else if (args.DIRECTION == 'right') {
                        if ((0 < data.joystick_x) && (data.joystick_x <= 100)) return true;
                        else return false;
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_joystick': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x6407, index, '6407');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.joystick, index);

                    if (args.AXIS == 'X-Axis') {
                        if (isNaN(data.joystick_x)) {
                            return 0;
                        }
                        if (data.joystick_x < 156) return data.joystick_x;
                        else return (data.joystick_x - 256);
                    } else if (args.AXIS == 'Y-Axis') {
                        if (isNaN(data.joystick_y)) {
                            return 0;
                        }
                        if (data.joystick_y < 156) return data.joystick_y;
                        else return (data.joystick_y - 256);
                    }
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_event_pir': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.infrared, index);
                    if (data == 0) return false;
                    else return true;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'neuron_detect_humidity': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x6308, index, '6308');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.moisture, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'op_ranging': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let x = mk_throttle(200, null, demandData, device, 0x630e, index, '630e');
                    if (x) {
                        await x;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.ranging, index);
                    return data;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'op_humidity': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.temperatureHumidity, index);
                    if (data == 0) return 0;
                    return data.humidity;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'op_temperature': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.ID);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.temperatureHumidity, index);
                    if (data == 0) return 0;
                    return data.temperature;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'op_htemperature': {
                onRun: async (args, app, device, block) => {
                    let index = parseInt(args.index);
                    if ((isNaN(index)) || (index <= 0)) {
                        index = 1;
                    }
                    let data = neuronsKits.getData(neuronsKits.types.temperatureHumidity, index);
                    let temperature = (data.temperature * 1.8 + 32).toFixed(1);
                    if (data == 0) return 32;
                    return temperature;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "neuron",
            "targets": {
                "device": true,
                "name": "neuron",
                "icon": window.MbApi.getExtResPath('neuron/imgs/bbc615d461fe4105b487a09a95de5156.png', 'neuron'),
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
                                    "neuron.connect_fail_3eef6a81",
                                    "neuron.connect_fail_2cdd56fc",
                                    "neuron.connect_fail_5f94d30a"
                                ]
                            },
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        },
                        "ble": {
                            "helpLink": "",
                            "tips": {
                                "success": [],
                                "fail": []
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
                            "success": [
                                ""
                            ],
                            "fail": [
                                ""
                            ]
                        },
                        "middlewares": [],
                        "driver": {}
                    },
                    "firmware": {
                        "helpLink": "",
                        "tips": {
                            "success": [],
                            "fail": []
                        },
                        "driver": {}
                    }
                },
                "settings": [],
                "categoriesOrder": [
                    "CATEGORY_ACTION",
                    "CATEGORY_SHOW",
                    "CATEGORY_PLAY",
                    "CATEGORY_SENSOR",
                    "events",
                    "control",
                    "operators",
                    "data",
                    "myBlocks"
                ]
            },
            "codeTypes": [],
            "version": "0.6.0",
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

export default ExtNeuron;