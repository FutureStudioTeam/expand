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

let OnlineProtocol = undefined;

const delay = (t) => new Promise(res => setTimeout(() => res(), t))

// on exts that belong to halocode
function updateShareDatas() {
    OnlineProtocol = window.novapi_online_operation;
}

function syncShareDatasFromDevice() {
    let interval_handler = setInterval(() => {
        console.log(window.novapi_online_operation)
        if (window.novapi_online_operation != undefined) {
            clearInterval(interval_handler);
            updateShareDatas();
        }
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



class ExtNovapiMbuildRgbLed {

    constructor() {
        this.funcs = {
            'BLOCK_RGB_LED_1574244770906': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `from mbuild.rgb_led import rgb_led_class
rgb_led_${args.NUM} = rgb_led_class("${args.PORT}", "${args.INDEX}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'block1565078276055CodesCode': (args) => {
                    let color = args.color_2;
                    let r = parseInt(color.substr(2, 2), 16);
                    let g = parseInt(color.substr(4, 2), 16);
                    let b = parseInt(color.substr(6, 2), 16);

                    let t = Number(args.number_3);
                    return `rgb_led_${args.index}.show(${r}, ${g}, ${b})
time.sleep(${t = t >= 0 ? t:0})
rgb_led_${args.index}.show(0, 0, 0)`;
                }

                ,
            'BLOCK_1565078276055': {
                onRun: async (args, app, device, block) => {
                    let time = Number(args.number_3);
                    if (!time || time <= 0) return;

                    let color = args.color_2;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let scriptString = [];
                    scriptString = `rgb_led_${args.index}.show(${r}, ${g}, ${b})`
                    await OnlineProtocol.writeScript(device, scriptString);
                    await delay(time * 1000)

                    scriptString = `rgb_led_${args.index}.show(0, 0, 0)`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'block1565078427193CodesCode': (args) => {
                    let color = args.color_2;
                    let r = parseInt(color.substr(2, 2), 16);
                    let g = parseInt(color.substr(4, 2), 16);
                    let b = parseInt(color.substr(6, 2), 16);

                    return `rgb_led_${args.index}.show(${r}, ${g}, ${b})`
                }

                ,
            'BLOCK_1565078427193': {
                onRun: async (args, app, device, block) => {
                    let color = args.color_2;
                    var r = parseInt(color.substr(1, 2), 16);
                    var g = parseInt(color.substr(3, 2), 16);
                    var b = parseInt(color.substr(5, 2), 16);

                    let scriptString = [];
                    scriptString = `rgb_led_${args.index}.show(${r}, ${g}, ${b})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'BLOCK_1565078500887': {
                onRun: async (args, app, device, block) => {
                    let r = args.r;
                    let g = args.g;
                    let b = args.b;

                    let scriptString = [];
                    scriptString = `rgb_led_${args.index}.show(${r}, ${g}, ${b})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'BLOCK_1565078533128': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `rgb_led_${args.index}.off()`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'BLOCK_1569143379816': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `rgb_led_${args.index}.set_${args.color}(${args.value})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'BLOCK_1565078755274': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `rgb_led_${args.index}.change_${args.color}(${args.value})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'BLOCK_1565078777662': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = (rgb_led_${args.index}.get_${args.color}())
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "novapi_mbuild_rgb_led",
            "targets": [
                "novapi"
            ],
            "codeTypes": [
                "python"
            ],
            "version": "0.0.1",
            "platform": [
                "mblockpc",
                "mblockweb"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
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

export default ExtNovapiMbuildRgbLed;