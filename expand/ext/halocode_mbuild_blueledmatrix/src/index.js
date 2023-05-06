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

const halocodeMbuildBlueledmatrixHaloboardUploadMiddlewareTemp =
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

    let mbuildLedPanelTable = [
        // {panel}, {time_s}, {index}
        new onlineDataStructure("BLOCK_1550543294244", "mbuild.led_panel.show_image", []),
        // {string}, wait = False, index = {index}
        new onlineDataStructure("BLOCK_1550543317242", "mbuild.led_panel.show", []),
        new onlineDataStructure("BLOCK_1550543356832", "mbuild.led_panel.clear", [1]),
        // ({pos_x}, {pos_y}, True, {index})
        new onlineDataStructure("BLOCK_1552138178736", "mbuild.led_panel.set_pixel", [0, 0, "True", 1]),
        // ({pos_x}, {pos_y}, {index})
        new onlineDataStructure("BLOCK_1552139669994", "mbuild.led_panel.toggle_pixel", [0, 0, 1]),
        // ({pos_x}, {pos_y}, {index})
        new onlineDataStructure("BLOCK_1552139701778", "mbuild.led_panel.get_pixel", [0, 0, 1], {
            default: "bool"
        }),
        // get the status of led panel
        new onlineDataStructure("mbuild_ledpanel_get_status", "", null, {
            default: "array"
        }),
    ]

    onlineManager.updateOnlineTable("add", mbuildLedPanelTable);
}

function syncShareDatasFromDevice() {
    setTimeout(() => {
        updateShareDatas();
    }, 500);
}
syncShareDatasFromDevice();


const matrix2hexStr = strData => {
    let data = "";
    for (let i = 0; i < 128; i += 8) {
        let strByte = strData.substring(i, i + 8);
        if (strByte.length < 8) {
            strByte += new Array(9 - strByte.length).join('0');
        }
        let tempHex = parseInt(strByte, 2).toString(16);
        if (tempHex.length === 1) {
            tempHex = 0 + tempHex;
        }
        data = data + tempHex;
    }
    return data;
};


function panelInfoAdapter(info, pos_x, pos_y) {

    if (pos_y < 0) {
        let infoValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < 32; i++) {
            if (i % 2 !== 0) {
                infoValue[(i - 1) / 2] = parseInt(info.slice(i - 1, i + 1), 16);
            }
        }


        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < -pos_y; j++) {
                infoValue[i] &= (~(1 << (7 - j)));
            }

            infoValue[i] = infoValue[i].toString(16);
            if (infoValue[i].length === 1) {
                infoValue[i] = "0" + infoValue[i];
            }
        }
        return infoValue.join('');
    } else {
        return info;
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



class ExtHalocodeMbuildBlueledmatrix {

    constructor() {
        this.funcs = {
            'block1550543294244CodesCode': (args) => {
                return `mbuild.led_panel.show_image(${'"' + matrix2hexStr(args.panel) + '"'}, time_s = ${args.time}, index = ${args.index})`;
            },
            'BLOCK_1550543294244': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;
                    let time = Number(args.time);
                    if (!time || time <= 0) return;

                    let panelStr = commonFunction.matrix2hexStr(args.panel);
                    let para = [panelStr, 0, 0, null, Number(args.index)];
                    let opcode = "BLOCK_1550543294244";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                    await commonFunction.delay(time * 1000, async () => {
                        para = [Number(args.index)];
                        opcode = "BLOCK_1550543356832";
                        onlineManager.parasUpdate(opcode, para);
                        let value = await onlineManager.request(opcode);

                    });
                    return await commonFunction.delay(50, () => {
                        ;
                    });
                }
            },
            'block1550543302075CodesCode': (args) => {
                return `mbuild.led_panel.show_image(${'"' + matrix2hexStr(args.face_panel) + '"'}, index = ${args.index})`;
            },
            'BLOCK_1550543302075': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let panelStr = commonFunction.matrix2hexStr(args.face_panel);
                    let para = [panelStr, 0, 0, null, Number(args.index)];
                    let opcode = "BLOCK_1550543294244";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);
                }
            },
            'block1550543309462CodesCode': (args) => {
                return `mbuild.led_panel.show_image(__panelInfoAdapter(${'"' + matrix2hexStr(args.face_panel) + '"'}, ${args.x}, ${args.y}), ${args.x}, ${args.y}, index = ${args.index})`;
            },
            'BLOCK_1550543309462': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    let panelStr = panelInfoAdapter(commonFunction.matrix2hexStr(args.face_panel), Number(args.x), Number(args.y));
                    let para = [panelStr, Number(args.x), Number(args.y), null, Number(args.index)];
                    let opcode = "BLOCK_1550543294244";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);
                }
            },
            'BLOCK_1550543317242': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let para = [args.string, null, null, false, Number(args.index)];
                    let opcode = "BLOCK_1550543317242";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                }
            },
            'BLOCK_1550543324310': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let para = [args.string, null, null, true, Number(args.index)];
                    let opcode = "BLOCK_1550543317242";

                    onlineManager.parasUpdate(opcode, para);
                    await onlineManager.request(opcode, true, 500);

                    let readStatusScript = "mbuild.led_panel.neurons_blocking_read(\"m_led_panel\",\"get_status\",()," + args.index + ')';

                    let key = onlineManager.__getKeyViaTag("mbuild_ledpanel_get_status");
                    if (key === undefined) {
                        return;
                    }

                    onlineManager.blockTable[key].func = readStatusScript;

                    let count = 0;
                    await commonFunction.delay(100);
                    while (1) {
                        let ret = await onlineManager.requestWithOriginalScript("mbuild_ledpanel_get_status", true, 200);
                        if (ret == null || ret[0] === 1) {
                            return;
                        } else if (ret[0] === 0) {
                            count = 0;
                        } else {
                            if (count++ > 10) {
                                return;
                            }
                        }

                        await commonFunction.delay(200);
                    }

                }
            },
            'BLOCK_1550543331829': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    let para = [args.string, Number(args.pos_x), Number(args.pos_y), false, Number(args.index)];
                    let opcode = "BLOCK_1550543317242";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                }
            },
            'BLOCK_1550543356832': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let para = [Number(args.index)];
                    let opcode = "BLOCK_1550543356832";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                }
            },
            'BLOCK_1552138178736': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let para = [Number(args.pos_x), Number(args.pos_y), true, Number(args.index)];
                    let opcode = "BLOCK_1552138178736";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                }
            },
            'BLOCK_1552138216442': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let para = [Number(args.pos_x), Number(args.pos_y), false, Number(args.index)];
                    let opcode = "BLOCK_1552138178736";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                }
            },
            'BLOCK_1552139669994': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return;

                    let para = [Number(args.pos_x), Number(args.pos_y), Number(args.index)];
                    let opcode = "BLOCK_1552139669994";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode);

                }
            },
            'BLOCK_1552139701778': {
                onRun: async (args, app, device, block) => {
                    if (!device.isConnected() || device.isUploadMode()) return false;

                    let para = [Number(args.pos_x), Number(args.pos_y), Number(args.index)];
                    let opcode = "BLOCK_1552139701778";

                    onlineManager.parasUpdate(opcode, para);
                    let value = await onlineManager.request(opcode, true, 500);
                    return !!value;
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "halocode_mbuild_blueledmatrix",
            "targets": [
                "haloboard",
                "cyberpi"
            ],
            "codeTypes": [
                "python"
            ],
            "version": "0.0.6",
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

export default ExtHalocodeMbuildBlueledmatrix;