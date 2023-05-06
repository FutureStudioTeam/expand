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

const halocodeMbuildCameraHaloboardUploadMiddlewareTemp =
    /**
     * Custom Upload Middleware
     * 
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {String} code
     * @param {Object} params
     * @param {Function} logH
     * @param {Function} progessH
     */
    (app, device, code, params, logH, progessH) => {
        // process code here
        return code;
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

// on exts that belong to halocode
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

    // "smart_camera"
    let mbuildSmartCameraTable = [

        new onlineDataStructure("BLOCK_2565095026871", "mbuild.smart_camera.set_mode", []),
        new onlineDataStructure("BLOCK_2565095026872", "mbuild.smart_camera.learn", []),
        new onlineDataStructure("BLOCK_2565095026873", "mbuild.smart_camera.detect_sign", [1, 1], {
            default: "bool"
        }),
        new onlineDataStructure("BLOCK_2565095026874", "mbuild.smart_camera.detect_sign_location", [], {
            default: "bool"
        }),
        new onlineDataStructure("BLOCK_2565095026875", "mbuild.smart_camera.get_sign_x", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_2565095026876", "mbuild.smart_camera.get_sign_y", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_2565095026877", "mbuild.smart_camera.get_sign_wide", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_2565095026878", "mbuild.smart_camera.get_sign_hight", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_2565095026879", "mbuild.smart_camera.open_light", []),
        new onlineDataStructure("BLOCK_25650950268710", "mbuild.smart_camera.close_light", []),
        new onlineDataStructure("BLOCK_25650950268711", "mbuild.smart_camera.reset", []),

        new onlineDataStructure("BLOCK_25650950268712", "mbuild.smart_camera.detect_label", [], {
            default: "bool"
        }),
        new onlineDataStructure("BLOCK_25650950268713", "mbuild.smart_camera.get_label_x", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268714", "mbuild.smart_camera.get_label_y", [], {
            default: "int"
        }),

        new onlineDataStructure("BLOCK_25650950268715", "mbuild.smart_camera.detect_cross", [], {
            default: "bool"
        }),
        new onlineDataStructure("BLOCK_25650950268716", "mbuild.smart_camera.get_cross_x", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268717", "mbuild.smart_camera.get_cross_y", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268718", "mbuild.smart_camera.get_cross_road", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268719", "mbuild.smart_camera.get_cross_angle", [], {
            default: "int"
        }),

        new onlineDataStructure("BLOCK_25650950268720", "mbuild.smart_camera.set_line", []),
        new onlineDataStructure("BLOCK_25650950268721", "mbuild.smart_camera.set_vector_angle", []),
        new onlineDataStructure("BLOCK_25650950268722", "mbuild.smart_camera.get_vector_angle", [], {
            default: "int"
        }),

        new onlineDataStructure("BLOCK_25650950268723", "mbuild.smart_camera.get_vector_end_x", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268724", "mbuild.smart_camera.get_vector_end_y", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268725", "mbuild.smart_camera.get_vector_start_x", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268726", "mbuild.smart_camera.get_vector_start_y", [], {
            default: "int"
        }),

        new onlineDataStructure("BLOCK_25650950268727", "mbuild.smart_camera.set_kp", []),
        new onlineDataStructure("BLOCK_25650950268728", "mbuild.smart_camera.get_sign_diff_speed", [], {
            default: "int"
        }),
        // new onlineDataStructure("BLOCK_25650950268729", "mbuild.smart_camera.get_sign_diff_speed_y", [], { default: "int" }),
        new onlineDataStructure("BLOCK_25650950268730", "mbuild.smart_camera.get_label_diff_speed", [], {
            default: "int"
        }),
        // new onlineDataStructure("BLOCK_25650950268731", "mbuild.smart_camera.get_label_diff_speed_y", [], { default: "int" }),
        new onlineDataStructure("BLOCK_25650950268732", "mbuild.smart_camera.get_follow_vector_diff_speed", [], {
            default: "int"
        }),
        new onlineDataStructure("BLOCK_25650950268733", "mbuild.smart_camera.is_lock_sign", [], {
            default: "bool"
        }),
        // new onlineDataStructure("BLOCK_25650950268734", "mbuild.smart_camera.is_lock_sign_y", [], { default: "bool" }),
        new onlineDataStructure("BLOCK_25650950268735", "mbuild.smart_camera.is_lock_label", [], {
            default: "bool"
        }),
        // new onlineDataStructure("BLOCK_25650950268736", "mbuild.smart_camera.is_lock_label_y", [], { default: "bool" }),
    ]



    onlineManager.updateOnlineTable("add", mbuildSmartCameraTable);
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



class ExtHalocodeMbuildCamera {

    constructor() {
        this.funcs = {
            'BLOCK_2565095026870': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_2565095026871': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let index = Number(args.INDEX);
                    let para = ["color", index];
                    let opcode = "BLOCK_2565095026871";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_2565095026872': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let sign = Number(args.SIGN);
                    // var time;
                    let index = Number(args.INDEX);
                    let para = [sign, "until_button", index];
                    let opcode = "BLOCK_2565095026872";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_1561689384426': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_2565095026873': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "BLOCK_2565095026873";
                    var cur_sign;
                    if (args.SIGN == "'any'") {
                        cur_sign = 255;
                    } else {
                        cur_sign = Number(args.SIGN);
                    }
                    // console.log(cur_sign);
                    let para = [cur_sign, Number(args.INDEX)];

                    onlineManager.parasUpdate(opcode, para, args.SIGN + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.SIGN + args.INDEX);
                    return value;
                }
            },
            'BLOCK_2565095026874': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "BLOCK_2565095026874";
                    // console.log(args.LOCATION);
                    let para = [Number(args.SIGN), args['LOCATION'], Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.SIGN + args.LOCATION + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.SIGN + args.LOCATION + args.INDEX);
                    return value;
                }
            },
            'BLOCK_2565095026875': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    var cur_opcode = "";
                    if (args.PARA == "x") {
                        cur_opcode = "BLOCK_2565095026875";
                    } else if (args.PARA == "y") {
                        cur_opcode = "BLOCK_2565095026876";
                    } else if (args.PARA == "wide") {
                        cur_opcode = "BLOCK_2565095026877";
                    } else if (args.PARA == "hight") {
                        cur_opcode = "BLOCK_2565095026878";
                    }

                    const opcode = cur_opcode;
                    let para = [Number(args.SIGN), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.SIGN + args.PARA + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.SIGN + args.PARA + args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_2565095026879': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    var cur_opcode = "";
                    if (args.PARA == "open_light") {
                        cur_opcode = "BLOCK_2565095026879";
                    } else if (args.PARA == "close_light") {
                        cur_opcode = "BLOCK_25650950268710";
                    }
                    const opcode = cur_opcode;
                    // console.log(opcode);
                    let index = Number(args.INDEX);
                    let para = [index];

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_25650950268711': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let index = Number(args.INDEX);
                    let para = [index];
                    let opcode = "BLOCK_25650950268711";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                    //5s
                    await commonFunction.delay(5000, async () => {
                        //
                    });
                    return await commonFunction.delay(50, () => {
                        ;
                    });
                }
            },
            'BLOCK_1565855617299': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_2565095026871_1': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let index = Number(args.INDEX);
                    let para = ["line", index];
                    let opcode = "BLOCK_2565095026871";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_25650950268712': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "BLOCK_25650950268712";
                    // let para = [Number(args.SIGN), Number(args.INDEX)];
                    var cur_label;
                    if (args.LABEL == "'any'") {
                        cur_label = 255;
                    } else {
                        cur_label = Number(args.LABEL);
                    }
                    // console.log(cur_label);
                    let para = [cur_label, Number(args.INDEX)];

                    onlineManager.parasUpdate(opcode, para, args.LABEL + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.LABEL + args.INDEX);
                    return value;
                }
            },
            'BLOCK_25650950268713': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    var cur_opcode = "";
                    if (args.COORD == "x") {
                        cur_opcode = "BLOCK_25650950268713";
                    } else if (args.COORD == "y") {
                        cur_opcode = "BLOCK_25650950268714";
                    }

                    const opcode = cur_opcode;
                    let para = [Number(args.LABEL), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.LABEL + args.COORD + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.LABEL + args.COORD + args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268723': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    var cur_opcode = "";
                    if (args.COORD == "end_x") {
                        cur_opcode = "BLOCK_25650950268723";
                    } else if (args.COORD == "end_y") {
                        cur_opcode = "BLOCK_25650950268724";
                    } else if (args.COORD == "start_x") {
                        cur_opcode = "BLOCK_25650950268725";
                    } else if (args.COORD == "start_y") {
                        cur_opcode = "BLOCK_25650950268726";
                    }

                    const opcode = cur_opcode;
                    let para = [Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.INDEX);

                    let value = onlineManager.getValue(opcode, args.INDEX);
                    return value;
                }
            },
            'BLOCK_25650950268715': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    const opcode = "BLOCK_25650950268715";

                    let para = [Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.INDEX);

                    let value = onlineManager.getValue(opcode, args.INDEX);
                    return value;
                }
            },
            'BLOCK_25650950268716': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    var cur_opcode = "";
                    if (args.COORD == "x") {
                        cur_opcode = "BLOCK_25650950268716";
                    } else if (args.COORD == "y") {
                        cur_opcode = "BLOCK_25650950268717";
                    }

                    const opcode = cur_opcode;
                    let para = [Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.COORD + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.COORD + args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268718': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268718";

                    let para = [Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.INDEX);

                    let value = onlineManager.getValue(opcode, args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268719': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268719";

                    let para = [Number(args.NUM), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.NUM + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.NUM + args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268720': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let para = [args['PARA'], Number(args.INDEX)];
                    let opcode = "BLOCK_25650950268720";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_25650950268721': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let para = [Number(args.ANGLE), Number(args.INDEX)];
                    let opcode = "BLOCK_25650950268721";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_25650950268722': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268722";

                    let para = [Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para);

                    let value = onlineManager.getValue(opcode);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268727': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    //TODO
                    let para = [Number(args.NUM), Number(args.INDEX)];
                    let opcode = "BLOCK_25650950268727";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode);
                }
            },
            'BLOCK_25650950268728': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268728";
                    let para = [Number(args.SIGN), args['COORD'], Number(args.NUM), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.SIGN + args.COORD + args.NUM + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.SIGN + args.COORD + args.NUM + args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268730': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268730";
                    let para = [Number(args.LABEL), args['COORD'], Number(args.NUM), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.LABEL + args.COORD + args.NUM + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.LABEL + args.COORD + args.NUM + args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268732': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268732";
                    let para = [Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.INDEX);

                    let value = onlineManager.getValue(opcode, args.INDEX);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BLOCK_25650950268733': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268733";
                    let para = [Number(args.SIGN), args['COORD'], Number(args.NUM), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.SIGN + args.COORD + args.NUM + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.SIGN + args.COORD + args.NUM + args.INDEX);
                    return value;
                }
            },
            'BLOCK_25650950268735': {
                onRun: (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return 0;

                    const opcode = "BLOCK_25650950268735";
                    let para = [Number(args.LABEL), args['COORD'], Number(args.NUM), Number(args.INDEX)];
                    onlineManager.parasUpdate(opcode, para, args.LABEL + args.COORD + args.NUM + args.INDEX);

                    let value = onlineManager.getValue(opcode, args.LABEL + args.COORD + args.NUM + args.INDEX);
                    return value;
                }
            },
            'BLOCK_1567922355409xxx': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "halocode_mbuild_camera",
            "targets": [
                "haloboard",
                "cyberpi"
            ],
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

export default ExtHalocodeMbuildCamera;