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

// enter your javascript code here
let engine = null;

const DIRECTION2SPEED = [
    [-1, 1],
    [1, -1],
    [1, 1],
    [-1, -1]
];
const FACE_DATA = '00000000000000000011110001111110011111100011110000000000000000000000000000000000001111000111111001111110001111000000000000000000';
const EMPTY_FACE_DATA = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
const LED_STIP_DATA = '123450000000000';
const BLACK_COLOR = '#000000';

// 在线配置的公共函数
class OnlineUtil {
    // 延时 n 秒
    static async delay(n) {
        return new Promise(res => setTimeout(() => res(), n * 1000));
    }
}

const formatColorData = (code) => {
    if (!isString(code)) {
        return code
    }
    var reg = /\"?#[0-9A-f]+\"?/g;
    return code.replace(reg, (item) => {
        item = item.replace(/"/g, '');
        item = item.replace('#', '0x');
        let r = Number(item) >> 16;
        let g = Number(item) >> 8 & 0xff;
        let b = Number(item) & 0xff;
        return [r, g, b].join(',');
    });
};
const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};

const onlyOnlineBlocks = [

];

const onlyOfflineBlocks = [

];

/**在线调用函数 */
//在线协议表
let devProtocol = {
    run_shutter: (index, port, action) => [
        ['byte', index], '0214', ['byte', port],
        ['byte', action]
    ],
    run_motor: (index, port, power) => [
        ['byte', index], '020a', ['byte', port],
        ['short', power]
    ],
    run_servo: (index, port, slot, degree) => [
        ['byte', index], '020b', ['byte', port],
        ['byte', slot],
        ['byte', degree]
    ],
    show_face: (index, port, face, x = 0, y = 0) => [
        ['byte', index], '0229', ['byte', port], '02', ['byte', x],
        ['byte', y],
        ['array16', face]
    ],
    show_text: (index, port, str, x = 0, y = 0) => [
        ['byte', index], '0229', ['byte', port], '01', ['byte', x],
        ['byte', Number(y) + 7],
        ['string', str]
    ],
    show_number: (index, port, number) => [
        ['byte', index], '0229', ['byte', port], '04', ['float', number]
    ],
    show_time: (index, port, hour, minute) => [
        ['byte', index], '0229', ['byte', port], '03', '01', ['byte', hour],
        ['byte', minute]
    ],
    show_external_led: (index, port, postion, [r, g, b], slot = 2) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    show_ledstrip: (index, port, slot, postion, [r, g, b]) => [
        ['byte', index], '0208', ['byte', port],
        ['byte', slot],
        ['byte', postion],
        ['byte', r],
        ['byte', g],
        ['byte', b]
    ],
    show_7segments: (index, port, number) => [
        ['byte', index], '0209', ['byte', port],
        ['float', number]
    ],
    run_board_encoder_motor: (index, slot, speed, port = 0) => [
        ['byte', index], '023d', ['byte', port],
        ['byte', slot],
        ['short', speed]
    ],
    run_board_encoder_motor_pos: (index, slot, degree, speed) => [
        ['byte', index], '023e01', ['byte', slot],
        ['long', degree],
        ['short', speed]
    ],
    run_board_encoder_motor_speed: (index, slot, degree, speed) => [
        ['byte', index], '023e02', ['byte', slot],
        ['long', degree],
        ['short', speed]
    ],
    run_encoder_motor: (index, slot, speed) => [
        ['byte', index], '020c08', ['byte', slot],
        ['short', speed]
    ],
    run_encoder_motor_pos: (index, slot, speed, degree) => [
        ['byte', index], '020c08', ['byte', slot],
        ['short', speed],
        ['float', degree]
    ],
    run_stepper_motor: (index, port, speed, distance) => [
        ['byte', index], '0228', ['byte', port],
        ['short', speed],
        ['long', distance]
    ],
    run_smart_servo_to_zero: (index, id, port = 5) => [
        ['byte', index], '024008', ['byte', port],
        ['byte', id]
    ],
    run_smart_servo: (index, id, speed, port = 5) => [
        ['byte', index], '024006', ['byte', port],
        ['byte', id],
        ['short', speed]
    ],
    run_smart_servo_absolute: (index, id, position, speed, port = 5) => [
        ['byte', index], '024004', ['byte', port],
        ['byte', id],
        ['long', position],
        ['float', speed]
    ],
    run_smart_servo_relative: (index, id, degree, speed, port = 5) => [
        ['byte', index], '024005', ['byte', port],
        ['byte', id],
        ['long', degree],
        ['float', speed]
    ],
};


//index号
let queue = Array(256).fill(false);
//板载按钮事件�������固定index
queue[128] = true
//获取index组装协议
const getIndex = () => {
    return new Promise((res) => {
        let index = -1
        let id = setInterval(getIdx, 32)

        function getIdx() {
            if (index != -1 && !queue[index]) {
                queue[index] = true
                clearInterval(id)
                res(index)
            } else {
                index = queue.indexOf(false)
            }
        }
    })
}
//在线执���������������������完毕，重置index
const resetIndex = (index) => {
    queue[index] = false
}

//等待x秒调用函数
const delay = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, time);
    });
};

//十六进制颜色转为rgb
const color2RGB = (color) => {
    color = color.replace('#', '0x');
    let r = Number(color) >> 16;
    let g = Number(color) >> 8 & 0xff;
    let b = Number(color) & 0xff;
    return [r, g, b];
};

//表情数据转为16位数组
const faceData2Array16 = (faceData) => {
    let array16 = []
    for (let i = 0; i < faceData.length; i += 8) {
        let data = faceData.substring(i, i + 8)
        data = parseInt(data, 2)
        array16.push(data)
    }
    return array16;
};

//将index转为十六进制，用于传感器匹配，获取返回值
const byte2Hex = (num) => {
    let byte = num.toString(16)
    byte = '0' + byte
    return byte.slice(-2)
}
const formatFaceData = (code) => {
    if (!isString(code)) {
        return code
    }
    let result = [];
    for (var i = 0; i + 8 <= code.length; i += 8) {
        var tmpD = code.substring(i, i + 8);
        tmpD = parseInt(tmpD, 2);
        result.push(tmpD);
    }
    return result;
};

const disableBlocks = {
    debug: ["auriga_all.auriga_detect_infrared", "auriga_all.auriga_encoder_motor_V2_motor", "auriga_all.auriga_encoder_motor_V2_speed", "auriga_all.auriga_encoder_motor_V2_pos", "auriga_all.auriga_encoder_motor_V2_minute", "auriga_all.auriga_encoder_motor_V2_angle", "auriga_all.auriga_detect_pm25_sensor", "auriga_all.enhanced_encoder_motor_power", "auriga_all.enhanced_encoder_motor_speed", "auriga_all.enhanced_encoder_motor_pos"],
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



class ExtAurigaAll {

    constructor() {
        this.funcs = {
            'aurigaRunBoardEncoderMotorCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaRunBoardEncoderMotorCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaRunBoardEncoderMotorCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);'
            ],
            'aurigaRunBoardEncoderMotorCodesCode': (args) => {
                if ((args.POWER == "") || (args.POWER == null) || (args.POWER == "None") || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                //args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }
                return `
Encoder_${args.PORT}.setTarPWM(${args.ROTATE} * ${args.POWER}/100.0*255);`
            },
            'aurigaRunBoardEncoderMotorCodesLoop': ['Encoder_/*{PORT}*/.loop();'],
            'auriga_run_board_encoder_motor': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || (args.POWER == "None") || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    //args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }
                    let slot = Number(args.PORT);
                    let rotate = Number(args.ROTATE);
                    let power = Number(args.POWER);
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', devProtocol.run_board_encoder_motor(index, slot, rotate * power / 100 * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaRunBoardEncoderMotorSpeedCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaRunBoardEncoderMotorSpeedCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaRunBoardEncoderMotorSpeedCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);',
                'Encoder_/*{PORT}*/.setPulse(9);',
                'Encoder_/*{PORT}*/.setRatio(39.267);',
                'Encoder_/*{PORT}*/.setPosPid(1.8,0,1.2);',
                'Encoder_/*{PORT}*/.setSpeedPid(0.18,0,0);'
            ],
            'aurigaRunBoardEncoderMotorSpeedCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || (args.POWER == "None") || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                return `
Encoder_${args.PORT}.runSpeed(${args.ROTATE} * ${args.POWER});`
            },
            'aurigaRunBoardEncoderMotorSpeedCodesLoop': ['Encoder_/*{PORT}*/.loop();'],
            'auriga_run_board_encoder_motor_speed': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || (args.POWER == "None") || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);

                    let slot = Number(args.PORT);
                    let rotate = Number(args.ROTATE);
                    let speed = Number(args.POWER);
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', devProtocol.run_board_encoder_motor_speed(index, slot, rotate * speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaRunBoardEncoderMotorPosCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaRunBoardEncoderMotorPosCodesDeclare': [
                `void isr_process_encoder1(void)
{
  if(digitalRead(Encoder_1.getPortB()) == 0){
    Encoder_1.pulsePosMinus();
  }else{
    Encoder_1.pulsePosPlus();
  }
}`,
                `void isr_process_encoder2(void)
{
  if(digitalRead(Encoder_2.getPortB()) == 0){
    Encoder_2.pulsePosMinus();
  }else{
    Encoder_2.pulsePosPlus();
  }
}`,
                `void move(int direction, int speed)
{
  int leftSpeed = 0;
  int rightSpeed = 0;
  if(direction == 1){
    leftSpeed = -speed;
    rightSpeed = speed;
  }else if(direction == 2){
    leftSpeed = speed;
    rightSpeed = -speed;
  }else if(direction == 3){
    leftSpeed = -speed;
    rightSpeed = -speed;
  }else if(direction == 4){
    leftSpeed = speed;
    rightSpeed = speed;
  }
  Encoder_1.setTarPWM(leftSpeed);
  Encoder_2.setTarPWM(rightSpeed);
}`
            ],
            'aurigaRunBoardEncoderMotorPosCodesSetup': ['TCCR1A = _BV(WGM10);',
                'TCCR1B = _BV(CS11) | _BV(WGM12);',
                'TCCR2A = _BV(WGM21) | _BV(WGM20);',
                'TCCR2B = _BV(CS21);',
                'attachInterrupt(Encoder_/*{PORT}*/.getIntNum(), isr_process_encoder/*{PORT}*/, RISING);',
                'Encoder_/*{PORT}*/.setPulse(9);',
                'Encoder_/*{PORT}*/.setRatio(39.267);',
                'Encoder_/*{PORT}*/.setPosPid(1.8,0,1.2);',
                'Encoder_/*{PORT}*/.setSpeedPid(0.18,0,0);'
            ],
            'aurigaRunBoardEncoderMotorPosCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || (args.POWER) == "None") {
                    args.POWER = 0;
                }
                // args.POWER = Math.abs(args.POWER);

                if ((args.DEGREE == "" || args.DEGREE == null) || (args.DEGREE == "None") || (args.DEGREE < 0)) {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                return `
Encoder_${args.PORT}.move(${args.ROTATE}*${args.DEGREE},abs(${args.POWER}));`
            },
            'aurigaRunBoardEncoderMotorPosCodesLoop': ['Encoder_/*{PORT}*/.loop();'],
            'auriga_run_board_encoder_motor_pos': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || (args.POWER == "None")) {
                        args.POWER = 0;
                    }
                    args.POWER = Math.abs(args.POWER);

                    if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                        args.DEGREE = 0;
                    }
                    // args.DEGREE = parseInt(args.DEGREE);

                    let slot = Number(args.PORT); // 实为slot
                    let rotate = Number(args.ROTATE);
                    let degree = Number(args.DEGREE);
                    let speed = Number(args.POWER);
                    // 板载编码电机 slot 决定了方向
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', devProtocol.run_board_encoder_motor_pos(index, slot, rotate * degree, speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaRunEncoderMotorCodesLib': ['MeEncoderMotor encoder_/*{PORT}*/_/*{SLOT}*/(0x09, /*{SLOT}*/);'],
            'aurigaRunEncoderMotorCodesSetup': ['encoder_/*{PORT}*/_/*{SLOT}*/.begin();',
                'encoder_/*{PORT}*/_/*{SLOT}*/.runSpeed(0);'
            ],
            'aurigaRunEncoderMotorCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = Math.abs(args.POWER);

                if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                return `
encoder_${args.PORT}_${args.SLOT}.move(${args.ROTATE}*${args.DEGREE},abs(${args.POWER}));`
            },
            'auriga_run_encoder_motor': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                        args.POWER = 0;
                    }
                    args.POWER = Math.abs(args.POWER);

                    if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                        args.DEGREE = 0;
                    }
                    // args.DEGREE = parseInt(args.DEGREE);

                    let port = Number(args.PORT);
                    let slot = Number(args.SLOT);
                    let rotate = Number(args.ROTATE);
                    let degree = Number(args.DEGREE);
                    let speed = Number(args.POWER);
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', devProtocol.run_encoder_motor_pos(index, slot, speed, rotate * degree));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaEncoderMotorSpeedCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaEncoderMotorSpeedCodesLoop': ['Encoder_/*{PORT}*/.loop();'],
            'auriga_encoder_motor_speed': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '013d00', ['byte', Number(args.PORT)],
                        ['byte', 2]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'aurigaEncoderMotorPosCodesLib': ['MeEncoderOnBoard Encoder_1(SLOT1);',
                'MeEncoderOnBoard Encoder_2(SLOT2);'
            ],
            'aurigaEncoderMotorPosCodesLoop': ['Encoder_/*{PORT}*/.loop();'],
            'auriga_encoder_motor_pos': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '013d00', ['byte', Number(args.PORT)],
                        ['byte', 1]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}06`, 'long']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'aurigaRunMotorCodesLib': ['MeDCMotor motor_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaRunMotorCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }
                return `
motor_${args.PORT}.run(${args.ROTATE}*${args.POWER}/100.0*255);`
            },
            'auriga_run_motor': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    let port = Number(args.PORT);
                    let direction = Number(args.ROTATE);
                    let speed = Number(args.POWER) / 100 * 255;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_motor(index, port, direction * speed));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index);
                }
            },
            'aurigaRunStepperMotorPosCodesLib': ['MeStepper stepper_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaRunStepperMotorPosCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = Math.abs(args.POWER);
                if (args.POWER > 3000) {
                    args.POWER = 3000;
                }

                if ((args.DISTANCE == "" || args.DISTANCE == null) || args.DISTANCE == "None" || (args.DISTANCE < 0)) {
                    args.DISTANCE = 0;
                }
                // args.DISTANCE = parseInt(args.DISTANCE);
                return `
stepper_${args.PORT}.move(${args.ROTATE}*${args.DISTANCE});
stepper_${args.PORT}.setMaxSpeed(abs(${args.POWER}));
stepper_${args.PORT}.setSpeed(abs(${args.POWER}));`
            },
            'auriga_run_stepper_motor_pos': {
                onRun: async (args, app, device, block) => {
                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                        args.POWER = 0;
                    }
                    args.POWER = Math.abs(args.POWER);
                    if (args.POWER > 3000) {
                        args.POWER = 3000;
                    }

                    if ((args.DISTANCE == "" || args.DISTANCE == null) || args.DISTANCE == "None" || (args.DISTANCE < 0)) {
                        args.DISTANCE = 0;
                    }
                    // args.DISTANCE = parseInt(args.DISTANCE);

                    let port = Number(args.PORT);
                    let rotate = Number(args.ROTATE);
                    let distance = Number(args.DISTANCE);
                    let speed = Number(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_stepper_motor(index, port, speed, rotate * distance));
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'aurigaRunServoCodesLib': ['Servo servo_/*{PORT}*/_/*{SLOT}*/;',
                'MePort port_/*{PORT}*/(/*{PORT}*/);'
            ],
            'aurigaRunServoCodesSetup': ['servo_/*{PORT}*/_/*{SLOT}*/.attach(port_/*{PORT}*/.pin/*{SLOT}*/());'],
            'aurigaRunServoCodesCode': (args) => {
                if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                if (args.DEGREE > 180) {
                    args.DEGREE = 180;
                }
                return `
servo_${args.PORT}_${args.SLOT}.write(${args.DEGREE});`
            },
            'auriga_run_servo': {
                onRun: async (args, app, device, block) => {
                    if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                        args.DEGREE = 0;
                    }
                    // args.DEGREE = parseInt(args.DEGREE);
                    if (args.DEGREE > 180) {
                        args.DEGREE = 180;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_servo(index, Number(args.PORT), Number(args.SLOT), Number(args.DEGREE)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaRunFanCodesLib': ['MePort dc130_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaRunFanCodesDeclare': [
                `void dc130_run(MePort dc130, int8_t direction) {
  pinMode(dc130.pin1(), OUTPUT);
  pinMode(dc130.pin2(), OUTPUT);
  if(direction > 0) {
    digitalWrite(dc130.pin2(), 0);
    digitalWrite(dc130.pin1(), 1);
  } else if(direction < 0) {
    digitalWrite(dc130.pin1(), 0);
    digitalWrite(dc130.pin2(), 1);
  } else {
    digitalWrite(dc130.pin1(), 0);
    digitalWrite(dc130.pin2(), 0);
  }
}`
            ],
            'auriga_run_fan': {
                onRun: async (args, app, device, block) => {
                    let port = Number(args.PORT);
                    let dirMap = {
                        '1': -1,
                        '-1': 0,
                        '0': 1
                    }
                    let direction = dirMap[args.FAN_ROTATE];
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_motor(index, port, direction * 255));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaRunShutterCodesLib': ['MeShutter shutter_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_run_shutter': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_shutter(index, Number(args.PORT), Number(args.SHUTTER_ACTION)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaRunSmartServoToZeroCodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'aurigaRunSmartServoToZeroCodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'aurigaRunSmartServoToZeroCodesCode': (args) => {
                if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                    args.INDEX = 0;
                }
                // args.INDEX = parseInt(args.INDEX);
                return `
mysmartservo.setInitAngle(${args.INDEX});`
            },
            'auriga_run_smart_servo_to_zero': {
                onRun: async (args, app, device, block) => {
                    if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                        args.INDEX = 0;
                    }
                    // args.INDEX = parseInt(args.INDEX);

                    //舵机编号
                    let id = Number(args.INDEX);
                    //协议index
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_smart_servo_to_zero(index, id))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'aurigaRunSmartServoCodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'aurigaRunSmartServoCodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'aurigaRunSmartServoCodesCode': (args) => {
                if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                    args.INDEX = 0;
                }
                // args.INDEX = parseInt(args.INDEX);

                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER > 100) {
                    args.POWER = 100;
                }
                return `
mysmartservo.setPwmMove(${args.INDEX},-1*${args.ROTATE}*${args.POWER} /100.0*255 );`
            },
            'auriga_run_smart_servo': {
                onRun: async (args, app, device, block) => {
                    if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                        args.INDEX = 0;
                    }
                    // args.INDEX = parseInt(args.INDEX);

                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None" || (args.POWER < 0)) {
                        args.POWER = 0;
                    }
                    // args.POWER = parseInt(args.POWER);
                    if (args.POWER > 100) {
                        args.POWER = 100;
                    }

                    let id = Number(args.INDEX);
                    let rotate = -1 * Number(args.ROTATE);
                    let speed = Number(args.POWER);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_smart_servo(index, id, rotate * speed / 100.0 * 255))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'aurigaRunSmartServoAbsoluteCodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'aurigaRunSmartServoAbsoluteCodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'aurigaRunSmartServoAbsoluteCodesCode': (args) => {
                if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                    args.INDEX = 0;
                }
                // args.INDEX = parseInt(args.INDEX);

                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = Math.abs(args.POWER);

                if ((args.POSITION == "" || args.POSITION == null) || args.POSITION == "None" || (args.POSITION < 0)) {
                    args.POSITION = 0;
                }
                // args.POSITION = parseInt(args.POSITION);
                return `
mysmartservo.moveTo(${args.INDEX},-1*${args.ROTATE}*${args.POSITION},abs(${args.POWER}));`
            },
            'auriga_run_smart_servo_absolute': {
                onRun: async (args, app, device, block) => {
                    if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                        args.INDEX = 0;
                    }
                    // args.INDEX = parseInt(args.INDEX);

                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                        args.POWER = 0;
                    }
                    // args.POWER = Math.abs(args.POWER);

                    if ((args.POSITION == "" || args.POSITION == null) || args.POSITION == "None" || (args.POSITION < 0)) {
                        args.POSITION = 0;
                    }
                    // args.POSITION = parseInt(args.POSITION);

                    let id = Number(args.INDEX);
                    let rotate = -1 * Number(args.ROTATE);
                    let position = Number(args.POSITION);
                    let speed = Number(args.POWER);
                    speed = speed < 0 ? 0 : speed;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_smart_servo_absolute(index, id, rotate * position, speed))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'aurigaRunSmartServoToRelativeCodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'aurigaRunSmartServoToRelativeCodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'aurigaRunSmartServoToRelativeCodesCode': (args) => {
                if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                    args.INDEX = 0;
                }
                // args.INDEX = parseInt(args.INDEX);

                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = Math.abs(args.POWER);

                if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                return `
mysmartservo.move(${args.INDEX},-1*${args.ROTATE}*${args.DEGREE},abs(${args.POWER}));`
            },
            'auriga_run_smart_servo_to_relative': {
                onRun: async (args, app, device, block) => {
                    if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                        args.INDEX = 0;
                    }
                    // args.INDEX = parseInt(args.INDEX);

                    if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                        args.POWER = 0;
                    }
                    args.POWER = Math.abs(args.POWER);

                    if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                        args.DEGREE = 0;
                    }
                    // args.DEGREE = parseInt(args.DEGREE);

                    let id = Number(args.INDEX);
                    let rotate = -1 * Number(args.ROTATE);
                    let degree = Number(args.DEGREE);
                    let speed = Number(args.POWER);
                    speed = speed < 0 ? 0 : speed;
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.run_smart_servo_relative(index, id, rotate * degree, speed))
                    await device.asyncReadProtocol('ff55', [])
                    resetIndex(index)
                }
            },
            'aurigaRunSmartServoRgbCodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'aurigaRunSmartServoRgbCodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'aurigaRunSmartServoRgbCodesCode': (args) => {
                if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                    args.INDEX = 0;
                }
                // args.INDEX = parseInt(args.INDEX);
                return `
mysmartservo.setRGBLed(${args.INDEX},${args.R},${args.G},${args.B});`
            },
            'auriga_run_smart_servo_rgb': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()

                    if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                        args.INDEX = 0;
                    }
                    // args.INDEX = parseInt(args.INDEX);

                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '02400205', ['byte', Number(args.INDEX)],
                        ['byte', Number(args.R)],
                        ['byte', Number(args.G)],
                        ['byte', Number(args.B)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaRunSmartServoDetectCodesLib': ['MeSmartServo mysmartservo(PORT5);'],
            'aurigaRunSmartServoDetectCodesSetup': ['mysmartservo.begin(115200);', 'mysmartservo.assignDevIdRequest();', 'delay(50);'],
            'aurigaRunSmartServoDetectCodesCode': (args) => {
                if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                    args.INDEX = 0;
                }
                // args.INDEX = parseInt(args.INDEX);
                return `
getServoValue(${args.INDEX},${args.OPTION})`
            },
            'auriga_run_smart_servo_detect': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()

                    if ((args.INDEX == "" || args.INDEX == null) || args.INDEX == "None" || (args.INDEX < 0)) {
                        args.INDEX = 0;
                    }
                    // args.INDEX = parseInt(args.INDEX);

                    console.log(args.OPTION);
                    let value = null;
                    if (args.OPTION == '4') {
                        await device.asyncWriteProtocol('ff55', [
                            ['byte', index], '0140', ['byte', 0x09 + Number(args.OPTION)],
                            ['byte', 0x05],
                            ['byte', Number(args.INDEX)]
                        ]);
                        value = await device.asyncReadProtocol('ff55', [
                            ['byte', index], '06', 'long'
                        ]);
                    } else {
                        await device.asyncWriteProtocol('ff55', [
                            ['byte', index], '0140', ['byte', 0x09 + Number(args.OPTION)],
                            ['byte', 0x05],
                            ['byte', Number(args.INDEX)]
                        ]);
                        value = await device.asyncReadProtocol('ff55', [
                            ['byte', index], '02', 'float'
                        ]);
                    }
                    // await device.asyncWriteProtocol('ff55', [['byte', index], '0104', ['byte', 0x09 + Number(args.OPTION)], ['byte', 0x05], ['byte', Number(args.INDEX)]]);
                    // let value = await device.asyncReadProtocol('ff55', [['byte', index], '02', 'float']);

                    console.log(value);
                    resetIndex(index);
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'aurigaShowFaceTimeCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'aurigaShowFaceTimeCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'aurigaShowFaceTimeCodesCode': (args) => {
                const faceData = formatFaceData(args.FACE_PANEL);
                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
drawTemp = new unsigned char[16]{${faceData}};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.drawBitmap(0, 0, 16, drawBuffer);
_delay(${args.TIME});
ledMtx_${args.PORT}.clearScreen();`
            },
            'auriga_show_face_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowFaceCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'aurigaShowFaceCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'aurigaShowFaceCodesCode': (args) => {
                const faceData = formatFaceData(args.FACE_PANEL);
                return `
drawTemp = new unsigned char[16]{${faceData}};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.drawBitmap(0, 0, 16, drawBuffer);`
            },
            'auriga_show_face': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowFacePositionCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);',
                'unsigned char drawBuffer[16];',
                'unsigned char *drawTemp;'
            ],
            'aurigaShowFacePositionCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'aurigaShowFacePositionCodesCode': (args) => {
                const faceData = formatFaceData(args.FACE_PANEL);
                if ((args.X == "" || args.X == null) || args.X == "None") {
                    args.X = 0;
                }
                // args.X = parseInt(args.X);
                if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                    args.Y = 0;
                }
                // args.Y = parseInt(args.Y);
                return `
drawTemp = new unsigned char[16]{${faceData}};
memcpy(drawBuffer, drawTemp, 16);
free(drawTemp);
ledMtx_${args.PORT}.clearScreen();
ledMtx_${args.PORT}.drawBitmap(${args.X}, ${args.Y}, 16, drawBuffer);`
            },
            'auriga_show_face_position': {
                onRun: async (args, app, device, block) => {
                    if ((args.X == "" || args.X == null) || args.X == "None") {
                        args.X = 0;
                    }
                    // args.X = parseInt(args.X);
                    if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                        args.Y = 0;
                    }
                    // args.Y = parseInt(args.Y);

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(args.FACE_PANEL), parseInt(Number(args.X)), parseInt(Number(args.Y))));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowTextCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShowTextCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'auriga_show_text': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString()));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowTextPositionCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShowTextPositionCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'aurigaShowTextPositionCodesCode': (args) => {
                if ((args.X == "" || args.X == null) || args.X == "None") {
                    args.X = 0;
                }
                // args.X = parseInt(args.X);
                if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                    args.Y = 0;
                }
                // args.Y = parseInt(args.Y);
                return `
ledMtx_${args.PORT}.drawStr(${args.X}, ${args.Y} + 7, String(${args.TEXT}).c_str());`
            },
            'auriga_show_text_position': {
                onRun: async (args, app, device, block) => {
                    if ((args.X == "" || args.X == null) || args.X == "None") {
                        args.X = 0;
                    }
                    // args.X = parseInt(args.X);
                    if ((args.Y == "" || args.Y == null) || args.Y == "None") {
                        args.Y = 0;
                    }
                    // args.Y = parseInt(args.Y);

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_text(index, parseInt(args.PORT), args.TEXT.toString(), parseInt(Number(args.X)), parseInt(Number(args.Y))));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowNumberCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShowNumberCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'aurigaShowNumberCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }

                if (args.NUMBER < -999) {
                    args.NUMBER = -999;
                } else if (args.NUMBER > 9999) {
                    args.NUMBER = 9999;
                }
                return `
ledMtx_${args.PORT}.showNum(${args.NUMBER}, 3);`
            },
            'auriga_show_number': {
                onRun: async (args, app, device, block) => {
                    if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                        args.NUMBER = 0;
                    }

                    if (args.NUMBER < -999) {
                        args.NUMBER = -999;
                    } else if (args.NUMBER > 9999) {
                        args.NUMBER = 9999;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_number(index, parseInt(args.PORT), Number(args.NUMBER)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowTimeCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShowTimeCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'aurigaShowTimeCodesCode': (args) => {
                if ((args.NUMBER1 == "" || args.NUMBER1 == null) || args.NUMBER1 == "None" || (args.NUMBER1 < 0)) {
                    args.NUMBER1 = 0;
                }
                // args.NUMBER1 = parseInt(args.NUMBER1);
                if (args.NUMBER1 > 99) {
                    args.NUMBER1 = 99;
                }

                if ((args.NUMBER2 == "" || args.NUMBER2 == null) || args.NUMBER2 == "None" || (args.NUMBER2 < 0)) {
                    args.NUMBER2 = 0;
                }
                // args.NUMBER2 = parseInt(args.NUMBER2);
                if (args.NUMBER2 > 99) {
                    args.NUMBER2 = 99;
                }
                return `
ledMtx_${args.PORT}.showClock(${args.NUMBER1}, ${args.NUMBER2}, true);`
            },
            'auriga_show_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.NUMBER1 == "" || args.NUMBER1 == null) || args.NUMBER1 == "None" || (args.NUMBER1 < 0)) {
                        args.NUMBER1 = 0;
                    }
                    // args.NUMBER1 = parseInt(args.NUMBER1);
                    if (args.NUMBER1 > 99) {
                        args.NUMBER1 = 99;
                    }

                    if ((args.NUMBER2 == "" || args.NUMBER2 == null) || args.NUMBER2 == "None" || (args.NUMBER2 < 0)) {
                        args.NUMBER2 = 0;
                    }
                    // args.NUMBER2 = parseInt(args.NUMBER2);
                    if (args.NUMBER2 > 99) {
                        args.NUMBER2 = 99;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_time(index, parseInt(args.PORT), Number(args.NUMBER1), Number(args.NUMBER2)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowFaceOffCodesLib': ['MeLEDMatrix ledMtx_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShowFaceOffCodesSetup': ['ledMtx_/*{PORT}*/.setColorIndex(1);',
                'ledMtx_/*{PORT}*/.setBrightness(6);'
            ],
            'auriga_show_face_off': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_face(index, parseInt(args.PORT), faceData2Array16(EMPTY_FACE_DATA)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowExternalLedTimeCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'aurigaShowExternalLedTimeCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowExternalLedTimeCodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                    args.TIME = 0;
                }
                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION},  ${color});
rgbled_${args.PORT}.show();
_delay(${args.TIME});
rgbled_${args.PORT}.setColor(${args.LED_POSTION}, 0, 0, 0);
rgbled_${args.PORT}.show();`
            },
            'auriga_show_external_led_time': {
                onRun: async (args, app, device, block) => {
                    if ((args.TIME == "" || args.TIME == null) || args.TIME == "None" || (args.TIME < 0)) {
                        args.TIME = 0;
                    }
                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    await delay(Number(args.TIME) * 1000);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), [0, 0, 0]));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowExternalLedCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'aurigaShowExternalLedCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowExternalLedCodesCode': (args) => {
                const color = formatColorData(args.COLOR);
                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION},  ${color});
rgbled_${args.PORT}.show();`
            },
            'auriga_show_external_led': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowExternalLedRgbCodesLib': ['MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);'],
            'aurigaShowExternalLedRgbCodesSetup': ['rgbled_/*{PORT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowExternalLedRgbCodesCode': (args) => {
                //R
                if ((args.R == "" || args.R == null) || args.R == "None" || (args.R < 0)) {
                    args.R = 0;
                }
                // args.R = parseInt(args.R);
                if (args.R > 255) {
                    args.R = 255;
                }

                //G
                if ((args.G == "" || args.G == null) || args.G == "None" || (args.G < 0)) {
                    args.G = 0;
                }
                // args.G = parseInt(args.G);
                if (args.G > 255) {
                    args.G = 255;
                }
                //B
                if ((args.B == "" || args.B == null) || args.B == "None" || (args.B < 0)) {
                    args.B = 0;
                }
                // args.B = parseInt(args.B);
                if (args.B > 255) {
                    args.B = 255;
                }
                return `
rgbled_${args.PORT}.setColor(${args.LED_POSTION}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}.show();`
            },
            'auriga_show_external_led_rgb': {
                onRun: async (args, app, device, block) => {
                    //R
                    if ((args.R == "" || args.R == null) || args.R == "None" || (args.R < 0)) {
                        args.R = 0;
                    }
                    // args.R = parseInt(args.R);
                    if (args.R > 255) {
                        args.R = 255;
                    }

                    //G
                    if ((args.G == "" || args.G == null) || args.G == "None" || (args.G < 0)) {
                        args.G = 0;
                    }
                    // args.G = parseInt(args.G);
                    if (args.G > 255) {
                        args.G = 255;
                    }
                    //B
                    if ((args.B == "" || args.B == null) || args.B == "None" || (args.B < 0)) {
                        args.B = 0;
                    }
                    // args.B = parseInt(args.B);
                    if (args.B > 255) {
                        args.B = 255;
                    }

                    let index = await getIndex()
                    let rgb = [args.R, args.G, args.B];
                    await device.asyncWriteProtocol('ff55', devProtocol.show_external_led(index, Number(args.PORT), Number(args.LED_POSTION), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowAllLedstripColorCodesLib': ['MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);'],
            'aurigaShowAllLedstripColorCodesSetup': ['rgbled_/*{PORT}*/_/*{SLOT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowAllLedstripColorCodesCode': (args) => {
                const rgb = color2RGB(args.COLOR_LIST);
                return `
rgbled_${args.PORT}_${args.SLOT}.setColor(0, ${rgb});
rgbled_${args.PORT}_${args.SLOT}.show();`
            },
            'auriga_show_all_ledstrip_color': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR_LIST);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_ledstrip(index, Number(args.PORT), Number(args.SLOT), 0, rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowLedstripColorCodesLib': ['MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);'],
            'aurigaShowLedstripColorCodesSetup': ['rgbled_/*{PORT}*/_/*{SLOT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowLedstripColorCodesCode': (args) => {
                if ((args.POS == "" || args.POS == null) || args.POS == "None") {
                    args.POS = 0;
                }
                // args.POS = parseInt(args.POS);
                if (args.POS < 1) {
                    args.POS = 1;
                } else if (args.POS > 255) {
                    args.POS = 255;
                }

                const rgb = color2RGB(args.COLOR_LIST);
                return `
rgbled_${args.PORT}_${args.SLOT}.setColor(${args.POS}, ${rgb});
rgbled_${args.PORT}_${args.SLOT}.show();`
            },
            'auriga_show_ledstrip_color': {
                onRun: async (args, app, device, block) => {
                    if ((args.POS == "" || args.POS == null) || args.POS == "None") {
                        args.POS = 0;
                    }
                    // args.POS = parseInt(args.POS);
                    if (args.POS < 1) {
                        args.POS = 1;
                    } else if (args.POS > 255) {
                        args.POS = 255;
                    }

                    let index = await getIndex()
                    let rgb = color2RGB(args.COLOR_LIST);
                    await device.asyncWriteProtocol('ff55', devProtocol.show_ledstrip(index, Number(args.PORT), Number(args.SLOT), Number(args.POS), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShowLedstripRbgCodesLib': ['MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);'],
            'aurigaShowLedstripRbgCodesSetup': ['rgbled_/*{PORT}*/_/*{SLOT}*/.fillPixelsBak(0, 2, 1);'],
            'aurigaShowLedstripRbgCodesCode': (args) => {
                if ((args.POS == "" || args.POS == null) || args.POS == "None") {
                    args.POS = 0;
                }
                // args.POS = parseInt(args.POS);
                if (args.POS < 1) {
                    args.POS = 1;
                } else if (args.POS > 255) {
                    args.POS = 255;
                }

                //R
                if ((args.R == "" || args.R == null) || args.R == "None" || (args.R < 0)) {
                    args.R = 0;
                }
                // args.R = parseInt(args.R);
                if (args.R > 255) {
                    args.R = 255;
                }

                //G
                if ((args.G == "" || args.G == null) || args.G == "None" || (args.G < 0)) {
                    args.G = 0;
                }
                // args.G = parseInt(args.G);
                if (args.G > 255) {
                    args.G = 255;
                }
                //B
                if ((args.B == "" || args.B == null) || args.B == "None" || (args.B < 0)) {
                    args.B = 0;
                }
                // args.B = parseInt(args.B);
                if (args.B > 255) {
                    args.B = 255;
                }
                return `
rgbled_${args.PORT}_${args.SLOT}.setColor(${args.POS}, ${args.R}, ${args.G}, ${args.B});
rgbled_${args.PORT}_${args.SLOT}.show();`
            },
            'auriga_show_ledstrip_rbg': {
                onRun: async (args, app, device, block) => {
                    if ((args.POS == "" || args.POS == null) || args.POS == "None") {
                        args.POS = 0;
                    }
                    // args.POS = parseInt(args.POS);
                    if (args.POS < 1) {
                        args.POS = 1;
                    } else if (args.POS > 255) {
                        args.POS = 255;
                    }

                    //R
                    if ((args.R == "" || args.R == null) || args.R == "None" || (args.R < 0)) {
                        args.R = 0;
                    }
                    // args.R = parseInt(args.R);
                    if (args.R > 255) {
                        args.R = 255;
                    }

                    //G
                    if ((args.G == "" || args.G == null) || args.G == "None" || (args.G < 0)) {
                        args.G = 0;
                    }
                    // args.G = parseInt(args.G);
                    if (args.G > 255) {
                        args.G = 255;
                    }
                    //B
                    if ((args.B == "" || args.B == null) || args.B == "None" || (args.B < 0)) {
                        args.B = 0;
                    }
                    // args.B = parseInt(args.B);
                    if (args.B > 255) {
                        args.B = 255;
                    }

                    let index = await getIndex()
                    let rgb = [args.R, args.G, args.B];
                    await device.asyncWriteProtocol('ff55', devProtocol.show_ledstrip(index, Number(args.PORT), Number(args.SLOT), Number(args.POS), rgb));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaShow7SegmentsNumberCodesLib': ['Me7SegmentDisplay seg7_/*{PORT}*/(/*{PORT}*/);'],
            'aurigaShow7SegmentsNumberCodesCode': (args) => {
                if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                    args.NUMBER = 0;
                }
                if (args.NUMBER < -999) {
                    args.NUMBER = -999;
                } else if (args.NUMBER > 9999) {
                    args.NUMBER = 9999;
                }
                return `
seg7_${args.PORT}.display(float(${args.NUMBER}));`
            },
            'auriga_show_7segments_number': {
                onRun: async (args, app, device, block) => {
                    if ((args.NUMBER == "" || args.NUMBER == null) || args.NUMBER == "None") {
                        args.NUMBER = 0;
                    }
                    if (args.NUMBER < -999) {
                        args.NUMBER = -999;
                    } else if (args.NUMBER > 9999) {
                        args.NUMBER = 9999;
                    }

                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', devProtocol.show_7segments(index, Number(args.PORT), Number(args.NUMBER)));
                    await device.asyncReadProtocol('ff55', []);
                    resetIndex(index)
                }
            },
            'aurigaDetectExternalUltrasonicCodesLib': ['MeUltrasonicSensor ultrasonic_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_external_ultrasonic': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0101', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectExternalLightCodesLib': ['MeLightSensor lightsensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_external_light': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0103', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectExternalLoudnessCodesLib': ['MeSoundSensor soundsensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_external_loudness': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0107', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectExternalLinefollowerCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_external_linefollower': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0111', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaEventExternalLinefollowerCodesLib': ['MeLineFollower linefollower_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_event_external_linefollower': {
                onRun: async (args, app, device, block) => {
                    let side = Number(args.LINEFOLLOW_STATE);
                    let black_white = Number(args.BLACK_WHITE);
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0111', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return false;
                    }
                    return black_white ? side === 0 ? value[0] === 0 : (value[0] & side) == side : side === 0 ? value[0] === 3 : (value[0] & side) == 0;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetecTemperatureCodesLib': ['MeTemperature temperature_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'auriga_detec_temperature': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0102', ['byte', Number(args.PORT)],
                        ['byte', Number(args.SLOT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectHumitureCodesLib': ['MeHumiture humiture_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_humiture': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0117', ['byte', Number(args.PORT)],
                        ['byte', Number(args.TEMP_HUMITURE)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaEventTouchCodesLib': ['MeTouchSensor touchSensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_event_touch': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0133', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return false;
                    }
                    return value[0] > 0;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectCompassCodesLib': ['MeCompass compass_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_compass': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '011a', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectFlameCodesLib': ['MeFlameSensor flameSensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_flame': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0118', ['byte', Number(args.PORT)]
                    ]);
                    var value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}03`, 'short']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectGasCodesLib': ['MeGasSensor gasSensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_gas': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0119', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}03`, 'short']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectBoardGyroAngleCodesLib': ['MeGyro gyro_0(0, 0x69);'],
            'auriga_detect_board_gyro_angle': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010601', ['byte', Number(args.AXIS)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectGyroAngleCodesLib': ['MeGyro gyro_1;'],
            'auriga_detect_gyro_angle': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010600', ['byte', Number(args.AXIS)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'aurigaEventPirMotionCodesLib': ['MePIRMotionSensor pir_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_event_pir_motion': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '010f', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaEventButtonPressCodesLib': ['Me4Button buttonSensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_event_button_press': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0116', ['byte', Number(args.PORT)],
                        ['byte', Number(args.FOUR_KEY)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}01`, 'byte']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0] > 0;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaEventLimitSwitchCodesLib': ['MeLimitSwitch sw_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);'],
            'auriga_event_limit_switch': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0115', ['byte', Number(args.PORT)],
                        ['byte', Number(args.SLOT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectPotentiometerCodesLib': ['MePotentiometer potentiometer_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_potentiometer': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0104', ['byte', Number(args.PORT)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectJoystickCodesLib': ['MeJoystick joystick_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_joystick': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex();
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '0105', ['byte', Number(args.PORT)],
                        ['byte', Number(args.AXIS_X_Y)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [`${byte2Hex(index)}02`, 'float']);
                    resetIndex(index)
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectInfraredCodesLib': ['MeInfraredReceiver ir_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_infrared': {
                onRun: async (args, app, device, block) => {
                    /*let port = Number(args.PORT);
                    let value = await engine.Infrared(port).getData();
                    return value;*/
                }
            },
            'aurigaEncoderMotorV2MotorCodesLib': ['MeEncoderNew encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/(0x11+ /*{SWITCH}*/,/*{SLOT}*/);'],
            'aurigaEncoderMotorV2MotorCodesSetup': ['encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'aurigaEncoderMotorV2MotorCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER < -100) {
                    args.POWER = -100;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }

                return `
encoderMotorV2_${args.SWITCH}_${args.SLOT}.setPWM(${args.POWER} /100.0 * 255);`
            },
            'auriga_encoder_motor_V2_motor': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'aurigaEncoderMotorV2SpeedCodesLib': ['MeEncoderNew encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/(0x11+ /*{SWITCH}*/,/*{SLOT}*/);'],
            'aurigaEncoderMotorV2SpeedCodesSetup': ['encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'aurigaEncoderMotorV2SpeedCodesCode': (args) => {
                if ((args.SPEED == "" || args.SPEED == null) || args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = parseInt(args.SPEED);

                return `
encoderMotorV2_${args.SWITCH}_${args.SLOT}.runSpeed(${args.SPEED});`
            },
            'auriga_encoder_motor_V2_speed': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'aurigaEncoderMotorV2PosCodesLib': ['MeEncoderNew encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/(0x11+ /*{SWITCH}*/,/*{SLOT}*/);'],
            'aurigaEncoderMotorV2PosCodesSetup': ['encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'aurigaEncoderMotorV2PosCodesCode': (args) => {
                if ((args.SPEED == "" || args.SPEED == null) || args.SPEED == "None") {
                    args.SPEED = 0;
                }
                // args.SPEED = Math.abs(args.SPEED);

                if ((args.DEGREE == "" || args.DEGREE == null) || args.DEGREE == "None" || (args.DEGREE < 0)) {
                    args.DEGREE = 0;
                }
                // args.DEGREE = parseInt(args.DEGREE);
                return `
encoderMotorV2_${args.SWITCH}_${args.SLOT}.move(${args.DEGREE}, abs(${args.SPEED}));`
            },
            'auriga_encoder_motor_V2_pos': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'aurigaEncoderMotorV2MinuteCodesLib': ['MeEncoderNew encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/(0x11+ /*{SWITCH}*/,/*{SLOT}*/);'],
            'aurigaEncoderMotorV2MinuteCodesSetup': ['encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'auriga_encoder_motor_V2_minute': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'aurigaEncoderMotorV2AngleCodesLib': ['MeEncoderNew encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/(0x11+ /*{SWITCH}*/,/*{SLOT}*/);'],
            'aurigaEncoderMotorV2AngleCodesSetup': ['encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.begin();'],
            'auriga_encoder_motor_V2_angle': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'aurigaDetectPm25SensorCodesLib': ['MePm25Sensor myMePm25Sensor_/*{PORT}*/(/*{PORT}*/);'],
            'auriga_detect_pm25_sensor': {
                onRun: async (args, app, device, block) => {
                    let index = await getIndex()
                    // console.log("index:", index);
                    await device.asyncWriteProtocol('ff55', [
                        ['byte', index], '013f', ['byte', Number(args.PORT)],
                        ['byte', Number(args.OPTION)]
                    ]);
                    let value = await device.asyncReadProtocol('ff55', [
                        ['byte', index], '03', 'short'
                    ]);
                    // console.log(value);

                    resetIndex(index);
                    if (value == null) {
                        console.error('超时');
                        return 0;
                    }
                    return value[0];
                }
            },
            'BLOCK_1575275074292': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'enhancedEncoderMotorPowerCodesLib': ['MeEnhanceEncoderOnBoard EnhanceEncoder_1(SLOT1);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_2(SLOT2);'
            ],
            'enhancedEncoderMotorPowerCodesSetup': ['attachInterrupt(EnhanceEncoder_/*{PORT}*/.getIntNum(), isr_process_enhance_encoder/*{PORT}*/, RISING);'],
            'enhancedEncoderMotorPowerCodesCode': (args) => {
                if ((args.POWER == "" || args.POWER == null) || args.POWER == "None") {
                    args.POWER = 0;
                }
                // args.POWER = parseInt(args.POWER);
                if (args.POWER < -100) {
                    args.POWER = -100;
                } else if (args.POWER > 100) {
                    args.POWER = 100;
                }

                return `
EnhanceEncoder_${args.PORT}.setTarPWM(${args.POWER} /100.0 * 255);`
            },
            'enhanced_encoder_motor_power': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'enhancedEncoderMotorSpeedCodesLib': ['MeEnhanceEncoderOnBoard EnhanceEncoder_1(SLOT1);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_2(SLOT2);'
            ],
            'enhancedEncoderMotorSpeedCodesSetup': ['attachInterrupt(EnhanceEncoder_/*{PORT}*/.getIntNum(), isr_process_enhance_encoder/*{PORT}*/, RISING);'],
            'enhanced_encoder_motor_speed': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'enhancedEncoderMotorPosCodesLib': ['MeEnhanceEncoderOnBoard EnhanceEncoder_1(SLOT1);',
                'MeEnhanceEncoderOnBoard EnhanceEncoder_2(SLOT2);'
            ],
            'enhancedEncoderMotorPosCodesSetup': ['attachInterrupt(EnhanceEncoder_/*{PORT}*/.getIntNum(), isr_process_enhance_encoder/*{PORT}*/, RISING);'],
            'enhanced_encoder_motor_pos': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "auriga_all",
            "targets": [{
                "name": "auriga",
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
            "version": "0.4.6",
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
                "auriga_all.auriga_detect_infrared",
                "auriga_all.auriga_encoder_motor_V2_motor",
                "auriga_all.auriga_encoder_motor_V2_speed",
                "auriga_all.auriga_encoder_motor_V2_pos",
                "auriga_all.auriga_encoder_motor_V2_minute",
                "auriga_all.auriga_encoder_motor_V2_angle",
                "auriga_all.auriga_detect_pm25_sensor",
                "auriga_all.enhanced_encoder_motor_power",
                "auriga_all.enhanced_encoder_motor_speed",
                "auriga_all.enhanced_encoder_motor_pos"
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

export default ExtAurigaAll;