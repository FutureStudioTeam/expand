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
    debug: ["megapipro_mbuild_camera.megapipro_camera_switch_color_mode", "megapipro_mbuild_camera.megapipro_camera_recognize_color", "megapipro_mbuild_camera.megapipro_camera_center_saturation", "megapipro_mbuild_camera.megapipro_camera_get_color", "megapipro_mbuild_camera.megapipro_camera_color_in_center", "megapipro_mbuild_camera.megapipro_camera_color_coordinate", "megapipro_mbuild_camera.megapipro_camera_turn_on_light", "megapipro_mbuild_camera.megapipro_camera_set_white_balance", "megapipro_mbuild_camera.megapipro_camera_switch_line_qrcode_mode", "megapipro_mbuild_camera.megapipro_camera_get_qrcode_move", "megapipro_mbuild_camera.megapipro_camera_get_qrcode_coordinate", "megapipro_mbuild_camera.megapipro_camera_line_start_coordinate", "megapipro_mbuild_camera.megapipro_camera_get_cross", "megapipro_mbuild_camera.megapipro_camera_corss_coordinate", "megapipro_mbuild_camera.megapipro_camera_get_branch_num", "megapipro_mbuild_camera.megapipro_camera_get_branch_angle", "megapipro_mbuild_camera.megapipro_camera_set_line_mode", "megapipro_mbuild_camera.megapipro_camera_1566200454757", "megapipro_mbuild_camera.megapipro_camera_1566200474887", "megapipro_mbuild_camera.megapipro_camera_set_kp", "megapipro_mbuild_camera.megapipro_camera_follow_color", "megapipro_mbuild_camera.megapipro_camera_follow_qrcode", "megapipro_mbuild_camera.megapipro_camera_get_diff_speed", "megapipro_mbuild_camera.megapipro_camera_lock_color", "megapipro_mbuild_camera.megapipro_camera_lock_qrcode"],
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



class ExtMegapiproMbuildCamera {

    constructor() {
        this.funcs = {
            'megapipro_1566200222835': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraSwitchColorModeCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraSwitchColorModeCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_switch_color_mode': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraRecognizeColorCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraRecognizeColorCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_recognize_color': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapipro_camera_center_saturation': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetColorCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetColorCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraGetColorCodesCode': [`MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, 0)`],
            'megapipro_camera_get_color': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraColorInCenterCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraColorInCenterCodesDeclare': [
                `uint8_t getCCC_location(uint8_t sig, uint8_t location, uint16_t x, uint16_t y){
    int a,b,c,d;
    switch(location)
    {
        
        case 1:
        if((130 < x) && (x < 190) && (100 < y) && (y < 140))
         return true;
        else
          return false;

        case 2:
         a = (0-320)*(y);
         b = (130 -  0)*(y) - 100*(x);
         c = (190 - 130)*(y - 100);
         d = (320 - 190)*(y - 100) - (0 - 100)*(x - 190);
        if(a < 0 && b < 0 && c < 0 && d < 0)
        {
            return true;
        }
        else{
            return false;
        }

        case 3:
         a = (190 - 130)*(y - 140);
         b = (320 -  190)*(y - 140) - 100*(x - 190);
         c = (0 - 320)*(y - 240);
         d = (130 - 0)*(y - 240) - (140 - 240)*(x);
        if(a > 0 && b > 0 && c > 0 && d > 0)
        {
            return true;
        }
        else{
            return false;
        }

        case 4:
         a = -(40)*(x - 130);
         b = (0 -  130)*(y-140) - (240-140)*(x - 130);
         c = -(0 - 240)*(x);
         d = (130 - 0)*(y) - (100)*(x);
        if(a > 0 && b > 0 && c > 0 && d > 0)
        {
            return true;
        }
        else{
            return false;
        }

        case 5:
         a = (190 - 320)*(y)-(100)*(x - 320);
         b = -(140-100)*(x - 190);
         c = (320 - 190)*(y - 140)-(240 - 140)*(x - 190);
         d = -(0 - 240)*(x - 320);
        if(a < 0 && b < 0 && c < 0 && d < 0)
        {
            return true;
        }
        else{
            return false;
        }

        default: return false;
    }
}`
            ],
            'megapiproCameraColorInCenterCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_color_in_center': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraColorCoordinateCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraColorCoordinateCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_color_coordinate': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraTurnOnLightCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraTurnOnLightCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_turn_on_light': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraSetWhiteBalanceCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraSetWhiteBalanceCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_set_white_balance': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapipro_camera_1566200222835': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraSwitchLineQrcodeModeCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraSwitchLineQrcodeModeCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_switch_line_qrcode_mode': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetQrcodeMoveCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetQrcodeMoveCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraGetQrcodeMoveCodesCode': [`MeCamera_/*{PORT}*/.getBarCodeValue(/*{BARCODE}*/, 0)`],
            'megapipro_camera_get_qrcode_move': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetQrcodeCoordinateCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetQrcodeCoordinateCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_get_qrcode_coordinate': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraLineStartCoordinateCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraLineStartCoordinateCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_line_start_coordinate': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetCrossCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetCrossCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraGetCrossCodesCode': [`MeCamera_/*{PORT}*/.getIntersectionValue(2)`],
            'megapipro_camera_get_cross': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraCorssCoordinateCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraCorssCoordinateCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_corss_coordinate': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetBranchNumCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetBranchNumCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_get_branch_num': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetBranchAngleCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetBranchAngleCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraGetBranchAngleCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }
                return `MeCamera_${args.PORT}.getIntersectionAngle(${args.NUMBER})`
            },
            'megapipro_camera_get_branch_angle': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraSetLineModeCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraSetLineModeCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_set_line_mode': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCamera1566200454757CodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCamera1566200454757CodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_1566200454757': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCamera1566200474887CodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCamera1566200474887CodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_1566200474887': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraSetKpCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraSetKpCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraSetKpCodesCode': (args) => {
                if ((args.KP == "" || args.KP == null) || args.KP == "None") {
                    args.KP = 0;
                }
                return `
MeCamera_${args.PORT}.setMotorDiffSpeedKp(${args.KP});`
            },
            'megapipro_camera_set_kp': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraFollowColorCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraFollowColorCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraFollowColorCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }

                if (args.LOCATION == "0") {
                    return `MeCamera_${args.PORT}.getFollowColorValue(${args.SIG}, ${args.NUMBER}, -1)`;
                } else if (args.LOCATION == "1") {
                    return `MeCamera_${args.PORT}.getFollowColorValue(${args.SIG}, -1, ${args.NUMBER})`;
                }
            },
            'megapipro_camera_follow_color': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraFollowQrcodeCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraFollowQrcodeCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraFollowQrcodeCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }

                if (args.LOCATION == "0") {
                    return `MeCamera_${args.PORT}.getFollowBarcodeValue(${args.BARCODE}, ${args.NUMBER}, -1)`;
                } else {
                    return `MeCamera_${args.PORT}.getFollowBarcodeValue(${args.BARCODE}, -1, ${args.NUMBER})`;
                }
            },
            'megapipro_camera_follow_qrcode': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraGetDiffSpeedCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraGetDiffSpeedCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapipro_camera_get_diff_speed': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraLockColorCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraLockColorCodesSetup': ['MeCamera_/*{PORT}*/.begin();'],
            'megapiproCameraLockColorCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }

                if (args.LOCATION == "0") {
                    return `MeCamera_${args.PORT}.isLockedCCC(${args.SIG}, ${args.NUMBER}, -1)`;
                } else {
                    return `MeCamera_${args.PORT}.isLockedCCC(${args.SIG}, -1, ${args.NUMBER})`;
                }
            },
            'megapipro_camera_lock_color': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'megapiproCameraLockQrcodeCodesLib': ['MeCamera MeCamera_/*{PORT}*/(/*{PORT}*/);'],
            'megapiproCameraLockQrcodeCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }

                if (args.LOCATION == "0") {
                    return `MeCamera_${args.PORT}.isLockedBarcode(${args.BARCODE}, ${args.NUMBER}, -1)`;
                } else {
                    return `MeCamera_${args.PORT}.isLockedBarcode(${args.BARCODE}, -1, ${args.NUMBER})`;
                }
            },
            'megapipro_camera_lock_qrcode': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "megapipro_mbuild_camera",
            "targets": [{
                "name": "megapipro",
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
            "feature": [],
            "mustLoginBlocks": [],
            "disabledOffline": [],
            "disabledOnline": [
                "megapipro_mbuild_camera.megapipro_camera_switch_color_mode",
                "megapipro_mbuild_camera.megapipro_camera_recognize_color",
                "megapipro_mbuild_camera.megapipro_camera_center_saturation",
                "megapipro_mbuild_camera.megapipro_camera_get_color",
                "megapipro_mbuild_camera.megapipro_camera_color_in_center",
                "megapipro_mbuild_camera.megapipro_camera_color_coordinate",
                "megapipro_mbuild_camera.megapipro_camera_turn_on_light",
                "megapipro_mbuild_camera.megapipro_camera_set_white_balance",
                "megapipro_mbuild_camera.megapipro_camera_switch_line_qrcode_mode",
                "megapipro_mbuild_camera.megapipro_camera_get_qrcode_move",
                "megapipro_mbuild_camera.megapipro_camera_get_qrcode_coordinate",
                "megapipro_mbuild_camera.megapipro_camera_line_start_coordinate",
                "megapipro_mbuild_camera.megapipro_camera_get_cross",
                "megapipro_mbuild_camera.megapipro_camera_corss_coordinate",
                "megapipro_mbuild_camera.megapipro_camera_get_branch_num",
                "megapipro_mbuild_camera.megapipro_camera_get_branch_angle",
                "megapipro_mbuild_camera.megapipro_camera_set_line_mode",
                "megapipro_mbuild_camera.megapipro_camera_1566200454757",
                "megapipro_mbuild_camera.megapipro_camera_1566200474887",
                "megapipro_mbuild_camera.megapipro_camera_set_kp",
                "megapipro_mbuild_camera.megapipro_camera_follow_color",
                "megapipro_mbuild_camera.megapipro_camera_follow_qrcode",
                "megapipro_mbuild_camera.megapipro_camera_get_diff_speed",
                "megapipro_mbuild_camera.megapipro_camera_lock_color",
                "megapipro_mbuild_camera.megapipro_camera_lock_qrcode"
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

export default ExtMegapiproMbuildCamera;