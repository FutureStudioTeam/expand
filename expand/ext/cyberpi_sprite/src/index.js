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

function dismatrix2hexStr(strData) {
    let data = "";
    for (let i = 0; i < 256; i += 8) {
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
}

function stringFormat(str) {
    return '"' + str + '"';
}

function arrTrans(num, arr) {
    var newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, num));
    }
    return newArr;
}

// on exts that belong to halocode
function updateShareDatas() {
    sysOperation = window.haloSharedObject.sysOperation;
    commonFunction = window.haloSharedObject.commonFunction;
    onlineCommunication = window.haloSharedObject.onlineCommunication;
    onlineProtocolPackage = window.haloSharedObject.onlineProtocolPackage;
    onlineManager = window.haloSharedObject.onlineManager;
    onlineDataStructure = window.haloSharedObject.onlineDataStructure;

    let cyberpiDisplayTable = [
        new onlineDataStructure("pocket_motor_set_power_cw", "cyberpi.pocket.motor_set", [20, 1]),
    ]

    onlineManager.updateOnlineTable("add", cyberpiDisplayTable);
}

function syncShareDatasFromDevice() {
    setTimeout(() => {
        updateShareDatas();
    }, 500);
}

syncShareDatasFromDevice();

const disableBlocks = {
    debug: ["cyberpi_sprite.cyberpi_sprite_background_fill_with_color", "cyberpi_sprite.cyberpi_sprite_background_fill_with_rgb", "cyberpi_sprite.BLOCK_1592812638164", "cyberpi_sprite.cyberpi_sprite_draw_pixel_with_matrix16", "cyberpi_sprite.cyberpi_sprite_draw_pixel_with_icon", "cyberpi_sprite.cyberpi_sprite_draw_text", "cyberpi_sprite.cyberpi_sprite_draw_QR", "cyberpi_sprite.cyberpi_mirror_with_axis", "cyberpi_sprite.cyberpi_sprite_delete", "cyberpi_sprite.cyberpi_sprite_set_align", "cyberpi_sprite.cyberpi_sprite_move_x_and_y", "cyberpi_sprite.cyberpi_sprite_move_to", "cyberpi_sprite.cyberpi_sprite_move_random", "cyberpi_sprite.cyberpi_sprite_rotate", "cyberpi_sprite.cyberpi_sprite_rotate_to", "cyberpi_sprite.cyberpi_sprite_add_size", "cyberpi_sprite.cyberpi_sprite_set_size", "cyberpi_sprite.cyberpi_sprite_set_color_with_color", "cyberpi_sprite.cyberpi_sprite_set_color_with_rgb", "cyberpi_sprite.cyberpi_sprite_close_color", "cyberpi_sprite.cyberpi_sprite_show_and_hide", "cyberpi_sprite.cyberpi_sprite_z_max_and_min", "cyberpi_sprite.cyberpi_sprite_z_up_and_down", "cyberpi_sprite.cyberpi_sprite_is_touch_other_sprite", "cyberpi_sprite.cyberpi_sprite_is_touch_edge", "cyberpi_sprite.cyberpi_sprite_get_x_y_rotation_size_align", "cyberpi_sprite.cyberpi_screen_get_color_equal_with_rgb", "cyberpi_sprite.cyberpi_screen_inable_and_disable_auto_render", "cyberpi_sprite.cyberpi_screen_render", "cyberpi_sprite.cyberpi_sketch_clear", "cyberpi_sprite.cyberpi_sketch_start", "cyberpi_sprite.cyberpi_sketch_end", "cyberpi_sprite.cyberpi_sketch_set_color_with_color", "cyberpi_sprite.cyberpi_sketch_set_color_with_rgb", "cyberpi_sprite.cyberpi_sketch_set_size", "cyberpi_sprite.cyberpi_sketch_set_speed", "cyberpi_sprite.cyberpi_sketch_cw", "cyberpi_sprite.cyberpi_sketch_set_angle", "cyberpi_sprite.cyberpi_sketch_set_angle_2", "cyberpi_sprite.cyberpi_sketch_move", "cyberpi_sprite.cyberpi_sketch_move_to_center", "cyberpi_sprite.cyberpi_sketch_move_to", "cyberpi_sprite.cyberpi_sketch_move_x_and_y", "cyberpi_sprite.cyberpi_sketch_circle", "cyberpi_sprite.cyberpi_sketch_get_x_y_angle_and_size", "cyberpi_sprite.cyberpi_sketch_if_start", "cyberpi_sprite.cyberpi_sprite_draw_sketch"],
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



class ExtCyberpiSprite {

    constructor() {
        this.funcs = {
            'cyberpiSpriteVariableListCodesCode': (args) => {
                let string_1 = args.fieldVariable_1;
                string_1 = string_1.replace("'", "");
                string_1 = string_1.replace("'", "");
                return `${string_1}`;
            },
            'cyberpi_sprite_variable_list': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteBackgroundFillWithColorCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `cyberpi.background.fill(${r}, ${g}, ${b})`;
            },
            'cyberpi_sprite_background_fill_with_color': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteBackgroundFillWithRgbCodesCode': (args) => {
                var r = (args.number_1);
                var g = (args.number_2);
                var b = (args.number_3);
                return `cyberpi.background.fill(${r}, ${g}, ${b})`;
            },
            'cyberpi_sprite_background_fill_with_rgb': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'BLOCK_1592812638164': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteDrawPixelWithMatrix16CodesLib': (args) => {
                let string_1 = args.string_1;
                return `${string_1} = cyberpi.sprite()`;
            },
            'cyberpiSpriteDrawPixelWithMatrix16CodesCode': (args) => {
                let panel = args.facePanel_2.replace(new RegExp(/#/g), "0x");
                panel = panel.replace(/0x000000/g, "0x101010");
                panel = panel.replace(/0xfff/g, "0xffffff");
                panel = panel.replace(/0x9b9b9b/g, "0x000000");
                panel = panel.split(',');
                var ss = arrTrans(16, panel);
                var ss_new = [];
                for (let i = 0; i < ss[0].length; i++) {
                    ss_new[i] = [];
                }
                for (let i = 0; i < ss.length; i++) {
                    for (let j = 0; j < ss[i].length; j++) {
                        ss_new[j][i] = ss[i][j];
                    }
                }
                return `${args.string_1}.draw_pixel([${ss_new}])`;
            },
            'cyberpi_sprite_draw_pixel_with_matrix16': {
                onRun: (args, app, device, block) => {
                    // let panel = args.facePanel_2.replace(new RegExp(/#/g), "0x");
                    // console.log(panel);
                }
            },
            'cyberpiSpriteDrawPixelWithIconCodesLib': (args) => {
                let string_1 = args.string_1;
                return `${string_1} = cyberpi.sprite()`;
            },
            'cyberpiSpriteDrawPixelWithIconCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.draw_pixel("${args.inputMenu_2}")`;
            },
            'cyberpi_sprite_draw_pixel_with_icon': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSpriteDrawTextCodesLib': (args) => {
                let string_1 = args.string_1;
                return `${string_1} = cyberpi.sprite()`;
            },
            'cyberpiSpriteDrawTextCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.draw_text(${args.string_2})`;
            },
            'cyberpi_sprite_draw_text': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSpriteDrawQrCodesLib': (args) => {
                let string_1 = args.string_1;
                return `${string_1} = cyberpi.sprite()`;
            },
            'cyberpiSpriteDrawQrCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.draw_QR(${args.string_2})`;
            },
            'cyberpi_sprite_draw_QR': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiMirrorWithAxisCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.mirror("${args.fieldMenu_3}")`;
            },
            'cyberpi_mirror_with_axis': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteDeleteCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.delete()`;
            },
            'cyberpi_sprite_delete': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteSetAlignCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.set_align("${args.inputMenu_2}")`;
            },
            'cyberpi_sprite_set_align': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteMoveXAndYCodesCode': (args) => {
                let string_1 = args.string_1;
                let fieldMenu_2 = args.fieldMenu_2;
                let number_3 = args.number_3;
                if (fieldMenu_2 == "up") {
                    fieldMenu_2 = "y";
                    number_3 = -number_3;
                } else if (fieldMenu_2 == "left") {
                    fieldMenu_2 = "x";
                    number_3 = -number_3;
                }
                return `${string_1}.move_${fieldMenu_2}(${number_3})`;
            },
            'cyberpi_sprite_move_x_and_y': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteMoveToCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.move_to(${args.number_2}, ${args.number_3})`;
            },
            'cyberpi_sprite_move_to': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteMoveRandomCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.move_random()`;
            },
            'cyberpi_sprite_move_random': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteRotateCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.rotate(${args.number_2})`;
            },
            'cyberpi_sprite_rotate': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteRotateToCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.rotate_to(${args.number_2})`;
            },
            'cyberpi_sprite_rotate_to': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sprite_add_size': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteSetSizeCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.set_size(${args.number_2})`;
            },
            'cyberpi_sprite_set_size': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteSetColorWithColorCodesCode': (args) => {
                let string_1 = args.string_1;
                let color = args.number_2;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `${string_1}.set_color(${r}, ${g}, ${b})`;
            },
            'cyberpi_sprite_set_color_with_color': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteSetColorWithRgbCodesCode': (args) => {
                let string_1 = args.string_1;
                var r = (args.number_2);
                var g = (args.number_3);
                var b = (args.number_4);
                return `${string_1}.set_color(${r}, ${g}, ${b})`;
            },
            'cyberpi_sprite_set_color_with_rgb': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSpriteCloseColorCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.close_color()`;
            },
            'cyberpi_sprite_close_color': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'cyberpiSpriteShowAndHideCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${args.inputVariable_2}.${string_1}()`;
            },
            'cyberpi_sprite_show_and_hide': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteZMaxAndMinCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.${args.fieldMenu_2}()`;
            },
            'cyberpi_sprite_z_max_and_min': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteZUpAndDownCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.${args.fieldMenu_2}()`;
            },
            'cyberpi_sprite_z_up_and_down': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteIsTouchOtherSpriteCodesCode': (args) => {
                let string_1 = args.string_1;
                let string_2 = args.string_2;
                return `${string_1}.is_touch(${string_2})`;
            },
            'cyberpi_sprite_is_touch_other_sprite': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteIsTouchEdgeCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.is_touch("edge")`;
            },
            'cyberpi_sprite_is_touch_edge': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteGetXYRotationSizeAlignCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.${args.fieldMenu_2}()`;
            },
            'cyberpi_sprite_get_x_y_rotation_size_align': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_screen_get_color_equal_with_color': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiScreenGetColorEqualWithRgbCodesCode': (args) => {
                let number_2 = args.number_2;
                let number_3 = args.number_3;
                let red = parseInt(args.number_4);
                let green = parseInt(args.number_5);
                let blue = parseInt(args.number_6);
                let rgb565 = (red & 0xF8) << 8 | (green & 0xFC) << 3 | blue >> 3
                let color = '0x' + rgb565.toString(16);
                return `cyberpi.screen.is_color(${number_2}, ${number_3}) == ${color}`;
            },
            'cyberpi_screen_get_color_equal_with_rgb': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_screen_inable_and_disable_auto_render': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_screen_render': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_clear': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_start': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_end': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSketchSetColorWithColorCodesCode': (args) => {
                let color = args.color_1;
                var r = parseInt(color.substr(2, 2), 16);
                var g = parseInt(color.substr(4, 2), 16);
                var b = parseInt(color.substr(6, 2), 16);
                return `cyberpi.sketch.set_color(${r}, ${g}, ${b})`;
            },
            'cyberpi_sketch_set_color_with_color': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_set_color_with_rgb': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_set_size': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_set_speed': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_cw': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_set_angle': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_set_angle_2': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_move': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_move_to_center': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_move_to': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSketchMoveXAndYCodesCode': (args) => {
                let fieldMenu_1 = args.fieldMenu_1;
                let number_1 = args.number_1;
                if (fieldMenu_1 == "up") {
                    fieldMenu_1 = "y";
                    number_1 = -number_1;
                } else if (fieldMenu_1 == "left") {
                    fieldMenu_1 = "x";
                    number_1 = -number_1;
                }
                return `cyberpi.sketch.move_${fieldMenu_1}(${number_1})`;
            },
            'cyberpi_sketch_move_x_and_y': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_circle': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSketchGetXYAngleAndSizeCodesCode': (args) => {
                let Menu = args.fieldMenu_1;
                if (Menu == "x") {
                    return `round(cyberpi.sketch.get_${args.fieldMenu_1}())`;
                } else if (Menu == "y") {
                    return `round(cyberpi.sketch.get_${args.fieldMenu_1}())`;
                } else {
                    return `cyberpi.sketch.get_${args.fieldMenu_1}()`;
                }
            },
            'cyberpi_sketch_get_x_y_angle_and_size': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpi_sketch_if_start': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            },
            'cyberpiSpriteDrawSketchCodesLib': (args) => {
                let string_1 = args.string_1;
                return `${string_1} = cyberpi.sprite()`;
            },
            'cyberpiSpriteDrawSketchCodesCode': (args) => {
                let string_1 = args.string_1;
                return `${string_1}.draw_sketch()`;
            },
            'cyberpi_sprite_draw_sketch': {
                onRun: (args, app, device, block) => {
                    // JavaScript code
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "cyberpi_sprite",
            "targets": [{
                "name": "cyberpi",
                "options": {
                    "upload": {}
                }
            }],
            "codeTypes": [
                "python"
            ],
            "version": "0.0.11",
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
            "disabledOnline": [
                "cyberpi_sprite.cyberpi_sprite_background_fill_with_color",
                "cyberpi_sprite.cyberpi_sprite_background_fill_with_rgb",
                "cyberpi_sprite.BLOCK_1592812638164",
                "cyberpi_sprite.cyberpi_sprite_draw_pixel_with_matrix16",
                "cyberpi_sprite.cyberpi_sprite_draw_pixel_with_icon",
                "cyberpi_sprite.cyberpi_sprite_draw_text",
                "cyberpi_sprite.cyberpi_sprite_draw_QR",
                "cyberpi_sprite.cyberpi_mirror_with_axis",
                "cyberpi_sprite.cyberpi_sprite_delete",
                "cyberpi_sprite.cyberpi_sprite_set_align",
                "cyberpi_sprite.cyberpi_sprite_move_x_and_y",
                "cyberpi_sprite.cyberpi_sprite_move_to",
                "cyberpi_sprite.cyberpi_sprite_move_random",
                "cyberpi_sprite.cyberpi_sprite_rotate",
                "cyberpi_sprite.cyberpi_sprite_rotate_to",
                "cyberpi_sprite.cyberpi_sprite_add_size",
                "cyberpi_sprite.cyberpi_sprite_set_size",
                "cyberpi_sprite.cyberpi_sprite_set_color_with_color",
                "cyberpi_sprite.cyberpi_sprite_set_color_with_rgb",
                "cyberpi_sprite.cyberpi_sprite_close_color",
                "cyberpi_sprite.cyberpi_sprite_show_and_hide",
                "cyberpi_sprite.cyberpi_sprite_z_max_and_min",
                "cyberpi_sprite.cyberpi_sprite_z_up_and_down",
                "cyberpi_sprite.cyberpi_sprite_is_touch_other_sprite",
                "cyberpi_sprite.cyberpi_sprite_is_touch_edge",
                "cyberpi_sprite.cyberpi_sprite_get_x_y_rotation_size_align",
                "cyberpi_sprite.cyberpi_screen_get_color_equal_with_rgb",
                "cyberpi_sprite.cyberpi_screen_inable_and_disable_auto_render",
                "cyberpi_sprite.cyberpi_screen_render",
                "cyberpi_sprite.cyberpi_sketch_clear",
                "cyberpi_sprite.cyberpi_sketch_start",
                "cyberpi_sprite.cyberpi_sketch_end",
                "cyberpi_sprite.cyberpi_sketch_set_color_with_color",
                "cyberpi_sprite.cyberpi_sketch_set_color_with_rgb",
                "cyberpi_sprite.cyberpi_sketch_set_size",
                "cyberpi_sprite.cyberpi_sketch_set_speed",
                "cyberpi_sprite.cyberpi_sketch_cw",
                "cyberpi_sprite.cyberpi_sketch_set_angle",
                "cyberpi_sprite.cyberpi_sketch_set_angle_2",
                "cyberpi_sprite.cyberpi_sketch_move",
                "cyberpi_sprite.cyberpi_sketch_move_to_center",
                "cyberpi_sprite.cyberpi_sketch_move_to",
                "cyberpi_sprite.cyberpi_sketch_move_x_and_y",
                "cyberpi_sprite.cyberpi_sketch_circle",
                "cyberpi_sprite.cyberpi_sketch_get_x_y_angle_and_size",
                "cyberpi_sprite.cyberpi_sketch_if_start",
                "cyberpi_sprite.cyberpi_sprite_draw_sketch"
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

export default ExtCyberpiSprite;