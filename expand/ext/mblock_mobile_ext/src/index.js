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

let SLIDE_DIRECTION;
let LEAN_ORIENTATION;
let LEAN_ORIENTATION_UP_VALUE = 0;
let LEAN_ORIENTATION_DOWN_VALUE = 0;
let LEAN_ORIENTATION_LEFT_VALUE = 0;
let LEAN_ORIENTATION_RIGHT_VALUE = 0;
let IS_DEVICE_SHAKING = false;
let IS_FINGER_TOUCH = false;
let IS_SUPPORT_ROTATION = true;
let IS_SUPPORT_DEVICEMOTION = true;

const _throttle = function(fun, delay) {
    let last, deferTimer;
    return function() {
        let that = this;
        let _args = arguments;
        let now = +new Date();
        if (last && now < last + delay) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fun.apply(that, _args);
            }, delay);
        } else {
            last = now;
            fun.apply(that, _args);
        }
    }
}

const isDeiviceSupportMotionAndOrientation = () => {
    const {
        userAgent
    } = navigator;
    if (!window.DeviceMotionEvent) {
        return false;
    } else if (!window.DeviceOrientationEvent) {
        return false;
    }
    // iOS 13+ 版本现在只能通过这种方式来判断
    else if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
        return false;
    } else {
        const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIOS) {
            const version = userAgent.split(';')[1].match(/(\d+)_(\d+)_?(\d+)?/)[0];
            if (version.replace(/_/g, '.').match(/^(\d+.\d+)/)[0] >= 13.0) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
};

const notifyNotSupport = _throttle((app) => {
    IS_SUPPORT_ROTATION = false;
    IS_SUPPORT_DEVICEMOTION = false;
    const service = app.getService('system.ui');
    service.message('mblock_mobile_ext.NOT_SUPPORT_ROTATION');
}, 1000);


const init = (app) => {
    if (!isDeiviceSupportMotionAndOrientation() && IS_SUPPORT_ROTATION && IS_SUPPORT_DEVICEMOTION) {
        notifyNotSupport(app);
        return null;
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



class ExtMblockMobileExt {

    constructor() {
        this.funcs = {
            'BLOCK_1567130118234': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (args.GESTURE.toLowerCase() == 'up' && SLIDE_DIRECTION === 'up') {
                        isRun = true;
                    } else if (args.GESTURE.toLowerCase() == 'down' && SLIDE_DIRECTION === 'down') {
                        isRun = true;
                    } else if (args.GESTURE.toLowerCase() == 'left' && SLIDE_DIRECTION === 'left') {
                        isRun = true;
                    } else if (args.GESTURE.toLowerCase() == 'right' && SLIDE_DIRECTION === 'right') {
                        isRun = true;
                    } else {
                        isRun = false;
                    }
                    return isRun;
                },
                onAdd: (app, device, block) => {
                    let that = this;
                    let startX, startY;

                    const getAngle = function(angx, angy) {
                        return Math.atan2(angy, angx) * 180 / Math.PI;
                    };

                    const getDirection = function(startX, startY, endX, endY) {
                        const angx = endX - startX;
                        const angy = endY - startY;
                        let result = '';
                        //如果滑动距离太短
                        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                            return result;
                        }
                        const angle = getAngle(angx, angy);
                        if (angle >= -135 && angle <= -45) {
                            result = 'up';
                        } else if (angle > 45 && angle < 135) {
                            result = 'down';
                        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                            result = 'left';
                        } else if (angle >= -45 && angle <= 45) {
                            result = 'right';
                        }
                        return result;
                    }

                    that.onTouchStart = function(e) {
                        startX = e.touches[0].pageX;
                        startY = e.touches[0].pageY;
                    };

                    that.onTouchMove = function(e) {
                        var endX, endY;
                        endX = e.changedTouches[0].pageX;
                        endY = e.changedTouches[0].pageY;
                        SLIDE_DIRECTION = getDirection(startX, startY, endX, endY);
                        app.workspace.runBlocks(block.opcode);
                    }

                    that.onTouchEnd = function(e) {
                        var endX, endY;
                        endX = e.changedTouches[0].pageX;
                        endY = e.changedTouches[0].pageY;
                        SLIDE_DIRECTION = '';
                        app.workspace.runBlocks(block.opcode);
                    }

                    document.addEventListener("touchstart", that.onTouchStart, false);
                    document.addEventListener("touchmove", that.onTouchMove, false);
                    document.addEventListener("touchend", that.onTouchEnd, false);
                },
                onRemove: (app, device, block) => {
                    document.addEventListener("touchstart", this.onTouchStart);
                    document.addEventListener("touchmove", this.onTouchMove);
                    document.addEventListener("touchend", this.onTouchEnd);
                }
            },
            'BLOCK_1567130249111': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (IS_DEVICE_SHAKING) {
                        isRun = true;
                    } else {
                        isRun = false;
                    }
                    return isRun;
                },
                onAdd: (app, device, block) => {
                    if (!IS_SUPPORT_ROTATION) {
                        notifyNotSupport(app);
                    } else {
                        let that = this;
                        const speed = 25;
                        let x, y, z, lastX, lastY, lastZ;
                        x = y = z = lastX = lastY = lastZ = 0;
                        that.isShaking = false;
                        that.onDeviceMotion = function(event) {
                            const acceleration = event.accelerationIncludingGravity;
                            x = acceleration.x;
                            y = acceleration.y;
                            if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
                                IS_DEVICE_SHAKING = true;
                                that.isShaking = true;
                            } else {
                                IS_DEVICE_SHAKING = false;
                                that.isShaking = false;
                            }
                            lastX = x;
                            lastY = y;
                            setInterval(function() {
                                app.workspace.runBlocks(block.opcode, 0);
                            }, 1000);
                        };
                        window.addEventListener('devicemotion', that.onDeviceMotion, false);
                    }
                },
                onRemove: (app, device, block) => {
                    window.removeEventListener('devicemotion', this.onDeviceMotion);
                }
            },
            'BLOCK_1567130338068': {
                onRun: (args, app, device, block) => {
                    // TODO
                    // 由于实际为横屏情况，所以上下左右颠倒
                    // this.alpha; // 旋转角度，共 360deg
                    // this.beta; // 左右倾斜，正为右，负为左
                    // this.gamma; // 上下倾斜，正为上，负为下
                    let isRun = false;
                    if (!IS_SUPPORT_ROTATION) {
                        isRun = false;
                    } else {
                        if (args.LEAN.toLowerCase() === 'up' && LEAN_ORIENTATION === 'up') {
                            isRun = true;
                        } else if (args.LEAN.toLowerCase() === 'down' && LEAN_ORIENTATION === 'down') {
                            isRun = true;
                        } else if (args.LEAN.toLowerCase() === 'left' && LEAN_ORIENTATION === 'left') {
                            isRun = true;
                        } else if (args.LEAN.toLowerCase() === 'right' && LEAN_ORIENTATION === 'right') {
                            isRun = true;
                        } else {
                            isRun = false;
                        }
                    }
                    return isRun;
                },
                onAdd: (app, device, block) => {
                    if (!IS_SUPPORT_ROTATION) {
                        notifyNotSupport(app);
                    } else {
                        let that = this;
                        that.handleDeviceorientation = function(event) {
                            // 由于实际为横屏情况，所以上下左右颠倒
                            that.alpha = Math.floor(event.alpha); // 旋转角度，共 360deg
                            that.beta = Math.floor(event.beta); // 左右倾斜，正为右，负为左
                            that.gamma = Math.floor(event.gamma); // 上下倾斜，正为上，负为下
                            if (that.gamma >= 0) {
                                LEAN_ORIENTATION_UP_VALUE = that.gamma;
                            }
                            if (that.gamma <= 0) {
                                LEAN_ORIENTATION_DOWN_VALUE = that.gamma;
                            }
                            if (that.beta <= 0) {
                                LEAN_ORIENTATION_LEFT_VALUE = that.beta;
                            }
                            if (that.beta >= 0) {
                                LEAN_ORIENTATION_RIGHT_VALUE = that.beta;
                            }
                            if (that.gamma > 10 && Math.abs(that.beta) <= 10) {
                                LEAN_ORIENTATION = 'up';
                                that.leanOrientation = 'up';
                            } else if (that.gamma < -10 && Math.abs(that.beta) <= 10) {
                                LEAN_ORIENTATION = 'down';
                                that.leanOrientation = 'down';
                            } else if (that.beta < -10 && Math.abs(that.gamma) <= 50) {
                                LEAN_ORIENTATION = 'left';
                                that.leanOrientation = 'left';
                            } else if (that.beta > 10 && Math.abs(that.gamma) <= 50) {
                                LEAN_ORIENTATION = 'right';
                                that.leanOrientation = 'right';
                            } else {
                                LEAN_ORIENTATION = '';
                            }
                            setInterval(function() {
                                app.workspace.runBlocks(block.opcode, 0);
                            }, 1000)
                        }
                        window.addEventListener('deviceorientation', that.handleDeviceorientation, false);
                    }
                },
                onRemove: (app, device, block) => {
                    if (IS_SUPPORT_ROTATION) {
                        window.removeEventListener('deviceorientation', this.handleDeviceorientation);
                    }
                }
            },
            'BLOCK_1567130298625': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (args.TOUCH.toLowerCase() === 'touchdown' && IS_FINGER_TOUCH) {
                        isRun = true;
                    } else if (args.TOUCH.toLowerCase() === 'touchend' && !IS_FINGER_TOUCH) {
                        isRun = true;
                    } else {
                        isRun = false;
                    }
                    return isRun;
                },
                onAdd: (app, device, block) => {
                    // TODO
                    let that = this;
                    that.isTouch = false;
                    that.onTouchStart = function(e) {
                        IS_FINGER_TOUCH = true;
                        that.isTouch = true;
                    }
                    that.onTouchEnd = function(e) {
                        IS_FINGER_TOUCH = false;
                        that.isTouch = false;
                    }
                    setInterval(function() {
                        app.workspace.runBlocks(block.opcode, 0);
                    }, 0);
                    window.addEventListener('touchstart', that.onTouchStart, false);
                    window.addEventListener('touchmove', that.onTouchStart, false);
                    window.addEventListener('touchend', that.onTouchEnd, false);
                },
                onRemove: (app, device, block) => {
                    // TODO
                    window.removeEventListener('touchstart', this.onTouchStart);
                    window.removeEventListener('touchmove', that.onTouchStart, false);
                    window.removeEventListener('touchend', this.onTouchEnd);
                }
            },
            'BLOCK_1567130768076': {
                onRun: (args, app, device, block) => {
                    let value = 0;
                    if (args.LEAN.toLowerCase() === 'up' && LEAN_ORIENTATION_UP_VALUE) {
                        value = LEAN_ORIENTATION_UP_VALUE;
                    } else if (args.LEAN.toLowerCase() === 'down' && LEAN_ORIENTATION_DOWN_VALUE) {
                        value = LEAN_ORIENTATION_DOWN_VALUE;
                    } else if (args.LEAN.toLowerCase() === 'left' && LEAN_ORIENTATION_LEFT_VALUE) {
                        value = LEAN_ORIENTATION_LEFT_VALUE;
                    } else if (args.LEAN.toLowerCase() === 'right' && LEAN_ORIENTATION_RIGHT_VALUE) {
                        value = LEAN_ORIENTATION_RIGHT_VALUE;
                    } else {
                        value = 0;
                    }
                    return value;
                }
            },
            'BLOCK_1567130606981': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (args.GESTURE.toLowerCase() == 'up' && SLIDE_DIRECTION === 'up') {
                        isRun = true;
                    } else if (args.GESTURE.toLowerCase() == 'down' && SLIDE_DIRECTION === 'down') {
                        isRun = true;
                    } else if (args.GESTURE.toLowerCase() == 'left' && SLIDE_DIRECTION === 'left') {
                        isRun = true;
                    } else if (args.GESTURE.toLowerCase() == 'right' && SLIDE_DIRECTION === 'right') {
                        isRun = true;
                    } else {
                        isRun = false;
                    }
                    return isRun;
                }
            },
            'BLOCK_1569566602161': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (IS_DEVICE_SHAKING) {
                        isRun = true;
                    }
                    return isRun;
                }
            },
            'BLOCK_1567130683604': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (args.LEAN.toLowerCase() === 'up' && LEAN_ORIENTATION === 'up') {
                        isRun = true;
                    } else if (args.LEAN.toLowerCase() === 'down' && LEAN_ORIENTATION === 'down') {
                        isRun = true;
                    } else if (args.LEAN.toLowerCase() === 'left' && LEAN_ORIENTATION === 'left') {
                        isRun = true;
                    } else if (args.LEAN.toLowerCase() === 'right' && LEAN_ORIENTATION === 'right') {
                        isRun = true;
                    } else {
                        isRun = false;
                    }
                    return isRun;
                }
            },
            'BLOCK_1567130415412': {
                onRun: (args, app, device, block) => {
                    let isRun = false;
                    if (args.TOUCH.toLowerCase() === 'touchdown' && IS_FINGER_TOUCH) {
                        isRun = true;
                    } else if (args.TOUCH.toLowerCase() === 'touchend' && !IS_FINGER_TOUCH) {
                        isRun = true;
                    } else {
                        isRun = false;
                    }
                    return isRun;
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "mblock_mobile_ext",
            "targets": [{
                "name": "sprites",
                "options": {
                    "upload": {}
                }
            }],
            "version": "1.2.2",
            "platform": [
                "mblockapp",
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

export default ExtMblockMobileExt;