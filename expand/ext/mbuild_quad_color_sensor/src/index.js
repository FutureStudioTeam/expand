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

    let mbuildUltrasonicTable = [
        new onlineDataStructure("mbuild_quad_color_sensor_get_line_sta_with_inputMenu", "mbuild.quad_rgb_sensor.get_line_sta", [1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_line_sta_with_number", "mbuild.quad_rgb_sensor.get_line_sta", [1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_off_track", "mbuild.quad_rgb_sensor.get_offset_track", [1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_is_line_and_background", "mbuild.quad_rgb_sensor.get_line_sta", [1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_is_line_and_background_2", "mbuild.quad_rgb_sensor.is_background", ["R2", 1], {
            default: "bool"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_rgb_gray_light_1", "mbuild.quad_rgb_sensor.get_red", ["R2", 1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_rgb_gray_light_2", "mbuild.quad_rgb_sensor.get_green", ["R2", 1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_rgb_gray_light_3", "mbuild.quad_rgb_sensor.get_blue", ["R2", 1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_rgb_gray_light_4", "mbuild.quad_rgb_sensor.get_gray", ["R2", 1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_rgb_gray_light_5", "mbuild.quad_rgb_sensor.get_light", ["R2", 1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_rgb_gray_light_6", "mbuild.quad_rgb_sensor.get_color_sta", ["R2", 1], {
            default: "string"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_is_color", "mbuild.quad_rgb_sensor.get_color_sta", ["R2", 1], {
            default: "string"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_is_color_2", "mbuild.quad_rgb_sensor.is_color", ["white", "any", 1], {
            default: "bool"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_set_led", "mbuild.quad_rgb_sensor.set_led", ["red", 1]),
        new onlineDataStructure("mbuild_quad_color_sensor_set_led_color", "mbuild.quad_rgb_sensor.set_led_color", ["red", 1]),
        new onlineDataStructure("mbuild_quad_color_sensor_is_rgb_data", "mbuild.quad_rgb_sensor._get_rgb_value", [1], {
            default: "int"
        }),
        new onlineDataStructure("mbuild_quad_color_sensor_get_all_data", "mbuild.quad_rgb_sensor.get_all_data", [1], {
            default: "array"
        }),

    ];

    onlineManager.updateOnlineTable("add", mbuildUltrasonicTable);
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



class ExtMbuildQuadColorSensor {

    constructor() {
        this.funcs = {
            'block1618397452023CodesCode': (args) => {
                let para = args.inputMenu_1;
                if (para === 'background') {
                    return `(((mbuild.quad_rgb_sensor.get_line_sta(${args.index}) >> 1) & 3) == ${args.inputMenu_2})`
                } else if (para === 'line') {
                    return `(((mbuild.quad_rgb_sensor.get_line_sta(${args.index}) >> 1) & 3) == (3-${args.inputMenu_2}))`
                } else {
                    return `(get_color_sta_byte("${args.inputMenu_1}",${args.index}) == ${args.inputMenu_2})`
                }
            },
            'BLOCK_1618397452023': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let para_color = args.inputMenu_1;
                    let para = [Number(args.index)];

                    if (para_color === 'background') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_inputMenu";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        return (((value >> 1) & 3) == args.inputMenu_2);
                    } else if (para_color === 'line') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_inputMenu";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        return (((value >> 1) & 3) == (3 - args.inputMenu_2));
                    } else {
                        let obj_color = 0;
                        if (para_color === 'white') {
                            obj_color = 0x00;
                        } else if (para_color === 'red') {
                            obj_color = 0x02;
                        } else if (para_color === 'yellow') {
                            obj_color = 0x04;
                        } else if (para_color === 'green') {
                            obj_color = 0x05;
                        } else if (para_color === 'cyan') {
                            obj_color = 0x06;
                        } else if (para_color === 'blue') {
                            obj_color = 0x07;
                        } else if (para_color === 'purple') {
                            obj_color = 0x01;
                        } else if (para_color === 'black') {
                            obj_color = 0x09;
                        }
                        const opcode1 = "mbuild_quad_color_sensor_get_all_data";
                        onlineManager.parasUpdate(opcode1, para);
                        let value = await onlineManager.request(opcode1, true, 3000);
                        let sta = [];
                        for (let i = 0; i <= 2; i++) {
                            if (value[i + 9 + 1] == obj_color) {
                                sta[i] = 1;
                            }
                        }

                        let status = sta[1] | (sta[2] << 1)
                        return (status == args.inputMenu_2);
                    }

                }
            },
            'block1618397596925CodesCode': (args) => {
                let para = args.inputMenu_1;
                if (para === 'background') {
                    return `((mbuild.quad_rgb_sensor.get_line_sta(${args.index}) >> 1) & 3)`
                } else if (para === 'line') {
                    return `(3 - ((mbuild.quad_rgb_sensor.get_line_sta(${args.index}) >> 1) & 3))`
                } else {
                    return `(get_color_sta_byte("${args.inputMenu_1}",${args.index}))`
                }
            },
            'BLOCK_1618397596925': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let para_color = args.inputMenu_1;
                    let para = [Number(args.index)];

                    if (para_color === 'background') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_number";
                        onlineManager.parasUpdate(opcode, para, args.index);
                        let value = await onlineManager.getValue(opcode, args.index);
                        return ((value >> 1) & 3);
                    } else if (para_color === 'line') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_number";
                        onlineManager.parasUpdate(opcode, para, args.index);
                        let value = await onlineManager.getValue(opcode, args.index);
                        return (3 - ((value >> 1) & 3));
                    } else {
                        let obj_color = 0;
                        if (para_color === 'white') {
                            obj_color = 0x00;
                        } else if (para_color === 'red') {
                            obj_color = 0x02;
                        } else if (para_color === 'yellow') {
                            obj_color = 0x04;
                        } else if (para_color === 'green') {
                            obj_color = 0x05;
                        } else if (para_color === 'cyan') {
                            obj_color = 0x06;
                        } else if (para_color === 'blue') {
                            obj_color = 0x07;
                        } else if (para_color === 'purple') {
                            obj_color = 0x01;
                        } else if (para_color === 'black') {
                            obj_color = 0x09;
                        }
                        const opcode1 = "mbuild_quad_color_sensor_get_all_data";
                        onlineManager.parasUpdate(opcode1, para, args.index);
                        let value = await onlineManager.getValue(opcode1, args.index);
                        let sta = [];
                        for (let i = 0; i <= 2; i++) {
                            if (value[i + 9 + 1] == obj_color) {
                                sta[i] = 1;
                            }
                        }

                        let status = sta[1] | (sta[2] << 1)
                        return status;
                    }

                }
            },
            'block1618364921511CodesCode': (args) => {
                let para = args.inputMenu_1;
                if (para === 'background') {
                    return `(mbuild.quad_rgb_sensor.get_line_sta(${args.index}) == ${args.inputMenu_2})`
                } else if (para === 'line') {
                    return `(mbuild.quad_rgb_sensor.get_line_sta(${args.index}) == (15-${args.inputMenu_2}))`
                } else {
                    return `(get_color_sta_bytes("${args.inputMenu_1}",${args.index}) == ${args.inputMenu_2})`
                }
            },
            'BLOCK_1618364921511': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let para_color = args.inputMenu_1;
                    let para = [Number(args.index)];

                    if (para_color === 'background') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_inputMenu";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        return (value == args.inputMenu_2);
                    } else if (para_color === 'line') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_inputMenu";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        return (value == (15 - args.inputMenu_2));
                    } else {
                        let obj_color = 0;
                        if (para_color === 'white') {
                            obj_color = 0x00;
                        } else if (para_color === 'red') {
                            obj_color = 0x02;
                        } else if (para_color === 'yellow') {
                            obj_color = 0x04;
                        } else if (para_color === 'green') {
                            obj_color = 0x05;
                        } else if (para_color === 'cyan') {
                            obj_color = 0x06;
                        } else if (para_color === 'blue') {
                            obj_color = 0x07;
                        } else if (para_color === 'purple') {
                            obj_color = 0x01;
                        } else if (para_color === 'black') {
                            obj_color = 0x09;
                        }
                        const opcode1 = "mbuild_quad_color_sensor_get_all_data";
                        onlineManager.parasUpdate(opcode1, para);
                        let value = await onlineManager.request(opcode1, true, 3000);
                        let sta = [];
                        for (let i = 0; i <= 4; i++) {
                            if (value[i + 9] == obj_color) {
                                sta[i] = 1;
                            }
                        }

                        let status = sta[0] | (sta[1] << 1) | (sta[2] << 2) | (sta[3] << 3)
                        return (status == args.inputMenu_2);
                    }

                }
            },
            'block1618397679204CodesCode': (args) => {
                let para = args.inputMenu_1;
                if (para === 'background') {
                    return `(mbuild.quad_rgb_sensor.get_line_sta(${args.index}))`
                } else if (para === 'line') {
                    return `(15 - mbuild.quad_rgb_sensor.get_line_sta(${args.index}))`
                } else {
                    return `(get_color_sta_bytes("${args.inputMenu_1}",${args.index}))`
                }
            },
            'BLOCK_1618397679204': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let para_color = args.inputMenu_1;
                    let para = [Number(args.index)];

                    if (para_color === 'background') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_number";
                        onlineManager.parasUpdate(opcode, para, args.index);
                        let value = await onlineManager.getValue(opcode, args.index);
                        return value;
                    } else if (para_color === 'line') {
                        const opcode = "mbuild_quad_color_sensor_get_line_sta_with_number";
                        onlineManager.parasUpdate(opcode, para, args.index);
                        let value = await onlineManager.getValue(opcode, args.index);
                        return (15 - value);
                    } else {
                        let obj_color = 0;
                        if (para_color === 'white') {
                            obj_color = 0x00;
                        } else if (para_color === 'red') {
                            obj_color = 0x02;
                        } else if (para_color === 'yellow') {
                            obj_color = 0x04;
                        } else if (para_color === 'green') {
                            obj_color = 0x05;
                        } else if (para_color === 'cyan') {
                            obj_color = 0x06;
                        } else if (para_color === 'blue') {
                            obj_color = 0x07;
                        } else if (para_color === 'purple') {
                            obj_color = 0x01;
                        } else if (para_color === 'black') {
                            obj_color = 0x09;
                        }
                        const opcode1 = "mbuild_quad_color_sensor_get_all_data";
                        onlineManager.parasUpdate(opcode1, para, args.index);
                        let value = await onlineManager.getValue(opcode1, para, args.index);
                        let sta = [];
                        for (let i = 0; i <= 4; i++) {
                            if (value[i + 9] == obj_color) {
                                sta[i] = 1;
                            }
                        }

                        let status = sta[0] | (sta[1] << 1) | (sta[2] << 2) | (sta[3] << 3)
                        return status;
                    }

                }
            },
            'mbuildQuadColorSensorIsLineAndBackgroundCodesCode': (args) => {
                let para = args.inputMenu_3;
                if (para === 'line') {
                    return `(mbuild.quad_rgb_sensor.is_line("${args.inputMenu_2}",${args.index}))`
                } else if (para === 'background') {
                    return `(mbuild.quad_rgb_sensor.is_background("${args.inputMenu_2}",${args.index}))`
                } else {
                    return `(mbuild.quad_rgb_sensor.is_color("${args.inputMenu_3}","${args.inputMenu_2}",${args.index}))`
                }
            },
            'mbuild_quad_color_sensor_is_line_and_background': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    let para_color = args.inputMenu_3;
                    let para = [Number(args.index)];

                    if (para_color == "line") {
                        const opcode = "mbuild_quad_color_sensor_is_line_and_background";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        if (args.inputMenu_2 == "R2") {
                            value = !(value & 1);
                        } else if (args.inputMenu_2 == "R1") {
                            value = !((value >> 1) & 1);
                        } else if (args.inputMenu_2 == "L1") {
                            value = !((value >> 2) & 1);
                        } else if (args.inputMenu_2 == "L2") {
                            value = !((value >> 3) & 1);
                        } else {
                            if (value == 15) {
                                return false;
                            } else {
                                return true;
                            }
                        }
                        return (value == 1);
                    } else if (para_color == "background") {
                        const opcode = "mbuild_quad_color_sensor_is_line_and_background";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        if (args.inputMenu_2 == "R2") {
                            value = value & 1;
                        } else if (args.inputMenu_2 == "R1") {
                            value = (value >> 1) & 1;
                        } else if (args.inputMenu_2 == "L1") {
                            value = (value >> 2) & 1;
                        } else if (args.inputMenu_2 == "L2") {
                            value = (value >> 3) & 1;
                        } else {
                            if (value == 0) {
                                return false;
                            } else {
                                return true;
                            }
                        }
                        return (value == 1);
                    } else {
                        if (args.inputMenu_2 == "any") {
                            let para = [args.inputMenu_3, args.inputMenu_2, Number(args.index)];
                            let opcode = "mbuild_quad_color_sensor_is_color_2";
                            onlineManager.parasUpdate(opcode, para);
                            let value = await onlineManager.request(opcode, true, 3000);
                            return value;
                        } else {
                            let para = [args.inputMenu_2, Number(args.index)];
                            let opcode = "mbuild_quad_color_sensor_is_color";
                            onlineManager.parasUpdate(opcode, para);
                            let value = await onlineManager.request(opcode, true, 3000);
                            return value == args.inputMenu_3;
                        }
                    }
                }
            },
            'mbuild_quad_color_sensor_get_rgb_gray_light': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const tiltMap = {
                        red: 1,
                        green: 2,
                        blue: 3,
                        gray: 4,
                        light: 5,
                        color_sta: 6
                    }

                    let para = [args.inputMenu_2, Number(args.index)];
                    let opcode = "mbuild_quad_color_sensor_get_rgb_gray_light" + "_" + tiltMap[args['inputMenu_3']];
                    onlineManager.parasUpdate(opcode, para, args.inputMenu_2);
                    let value = onlineManager.getValue(opcode, args.inputMenu_2);
                    return value;
                }
            },
            'mbuild_quad_color_sensor_get_off_track': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "mbuild_quad_color_sensor_get_off_track";
                    let para = [Number(args.index)];
                    onlineManager.parasUpdate(opcode, para, args.index);

                    let value = onlineManager.getValue(opcode, args.index);
                    return value;
                }
            },
            'BLOCK_1618382823173': {
                onRun: async (args, app, device, block) => {
                    let color = args.fieldMenu_3;
                    let para = [color, Number(args.index)];
                    let opcode = "mbuild_quad_color_sensor_set_led_color";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'BLOCK_1620904215289': {
                onRun: async (args, app, device, block) => {
                    let para = ["black", Number(args.index)];
                    let opcode = "mbuild_quad_color_sensor_set_led";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'mbuild_quad_color_sensor_set_led': {
                onRun: async (args, app, device, block) => {
                    let color = args.fieldMenu_3;
                    let para = [color, Number(args.index)];
                    let opcode = "mbuild_quad_color_sensor_set_led";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'mbuild_quad_color_sensor_off_led': {
                onRun: async (args, app, device, block) => {
                    let para = [Number(args.index)];
                    let opcode = "mbuild_quad_color_sensor_off_led";
                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 3000);
                    await commonFunction.delay(50);
                }
            },
            'BLOCK_1619088858273': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let opcode = "mbuild_quad_color_sensor_is_rgb_data";
                    let para = [];

                    para = [0, args.channel, Number(args.index)];
                    onlineManager.parasUpdate(opcode, para);
                    let r_value = await onlineManager.request(opcode, true, 3000);

                    para = [1, args.channel, Number(args.index)];
                    onlineManager.parasUpdate(opcode, para);
                    let g_value = await onlineManager.request(opcode, true, 3000);

                    para = [2, args.channel, Number(args.index)];
                    onlineManager.parasUpdate(opcode, para);
                    let b_value = await onlineManager.request(opcode, true, 3000);

                    if ((Math.abs(r_value - args.r) <= args.tolerance) && (Math.abs(g_value - args.g) <= args.tolerance) && (Math.abs(b_value - args.b) <= args.tolerance)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            'mbuild_quad_color_sensor_is_color': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    if (args.inputMenu_2 == "any") {
                        let para = [args.inputMenu_3, args.inputMenu_2, Number(args.index)];
                        let opcode = "mbuild_quad_color_sensor_is_color_2";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        return value;
                    } else {
                        let para = [args.inputMenu_2, Number(args.index)];
                        let opcode = "mbuild_quad_color_sensor_is_color";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode, true, 3000);
                        return value == args.inputMenu_3;
                    }


                }
            },
            'mbuild_quad_color_sensor_get_line_sta_with_inputMenu': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "mbuild_quad_color_sensor_get_line_sta_with_inputMenu";
                    let para = [Number(args.index)];
                    onlineManager.parasUpdate(opcode, para);

                    let value = await onlineManager.request(opcode, true, 3000);
                    return (value == args.inputMenu_2);
                }
            },
            'mbuild_quad_color_sensor_get_line_sta_with_number': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "mbuild_quad_color_sensor_get_line_sta_with_number";
                    let para = [Number(args.index)];
                    onlineManager.parasUpdate(opcode, para, args.index);

                    let value = onlineManager.getValue(opcode, args.index);
                    return value;
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "mbuild_quad_color_sensor",
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

export default ExtMbuildQuadColorSensor;