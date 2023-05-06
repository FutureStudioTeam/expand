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

const novapiFirmwareDriverNovapiDriver =
    /**
     * Custom Firmware Driver
     *
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {ArrayBuffer | string} data
     * @param {(percent: number) => void} progressHandle
     * @param {Function} caerrHandlerllback
     * @param {Function} errHandler
     */
    (app, device, data, logHandle, progressHandle, finishHandler, errHandler) => {
        Protocol.updateFirmwares(app, device, data, logHandle, progressHandle, finishHandler, errHandler);
    };
const novapiUploadDriverNovapiUploader =
    /**
     * Custom Upload Driver
     *
     * @param {AppContext} app
     * @param {DeviceContext} device
     * @param {ArrayBuffer | string} code
     * @param {() => void} logHandler
     * @param {(percent: number) => void} progressHandle
     * @param {(err: any, result: any) => void} callback
     */
    (app, device, code, logHandler, progressHandle, finishHandler, errHandler) => {
        device.switchChannel(null);
        if (!uploader.initialized) {
            uploader.initialized = true;
            var handle = function handle(err, data) {
                var percent = data.uploaded / data.total * 100;
                if (percent >= 100) {
                    finishHandler();
                } else {
                    progressHandle(percent);
                }
            };
            uploader.onUploadProgress(handle);
        }
        uploader.path = '/main.py';
        uploader.content = code;
        uploader.uploadContent();
    };
const novapiUploadMiddlewareNovapi =
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
    (app, device, code, logHandler, progressHandle, finishHandler, errHandler) => {
        // TODO
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


const checkFirmwareInForce = true;
let checkFirmwareVersionFinish = false;
const hardwareIDTab = [
    //{ hidM: 256, hidL: 444, typeId: 0x6000 }, //smart servo
    {
        hidM: 256,
        hidL: 193,
        typeId: 0x016206
    }, //encoder180 motor
    {
        hidM: 320,
        hidL: 830,
        typeId: 0x026206
    }, //encoder36 motor
    {
        hidM: 256,
        hidL: 256,
        typeId: 0x6409
    }, //power_manage_module
    {
        hidM: 194,
        hidL: 895,
        typeId: 0x6311
    }, //dual_rgb_sensor
    {
        hidM: 256,
        hidL: 320,
        typeId: 0x6207
    }, //power_expand_board
]

const getReady = (checker) => {
    return new Promise((resolve) => {
        let timer = null;
        const check = () => {
            timer = requestAnimationFrame(check);
            if (checker()) {
                cancelAnimationFrame(timer);
                resolve();
            }
        };
        check();
    });
};


// 在线配置的公共函数
class OnlineUtil {
    // 延时 n 秒
    static async delay(n) {
        return new Promise(res => setTimeout(() => res(), n * 1000));
    }

    //切换为离线模式
    static async changeUploadMode(device) {
        await device.asyncWriteProtocol('f3f4', [0x0d, 0x00, 0x00]);
        //device.writeRaw([0xf3, 0xf6, 0x03, 0x00, 0x0d, 0x00, 0x00, 0x0d, 0xf4]);
    }

    //切换为在线调试模式
    static async changeDebugMode(device) {
        await device.asyncWriteProtocol('f3f4', [0x0d, 0x00, 0x01]);
        //device.writeRaw([0xf3, 0xf6, 0x03, 0x00, 0x0d, 0x00, 0x01, 0x0e, 0xf4]);
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
 * 在线调试协议
 */
const MAX_ONLINE_SCRIPT_SIZE = 500
const MAX_ONLINE_WAITE_TIME = 1000
let _serialNum = 0;
class OnlineProtocol {
    //流水号生成器
    static generateSerialNum() {
        _serialNum++;
        if (_serialNum >= 65536) {
            _serialNum = 0;
        }
        return _serialNum;
    }

    //写脚本
    static async writeScript(device, scriptString) {
        let serialNum = _serialNum;
        if (device.isUploadMode()) {
            //return;
        }
        if (scriptString.lenght > MAX_ONLINE_SCRIPT_SIZE) {
            return;
        }
        let numLow = (serialNum) & 0xff;
        let numHigh = (serialNum >> 8) & 0xff;
        await device.asyncWriteProtocol('f3f4', ['2800', numLow, numHigh, ['string0', scriptString]]);
        await OnlineUtil.delay(0.01);
    }

    //读脚本
    static async readScript(device, scriptString) {
        let serialNum = OnlineProtocol.generateSerialNum();
        if (device.isUploadMode()) {
            //return;
        }

        let numLow = (serialNum) & 0xff;
        let numHigh = (serialNum >> 8) & 0xff;
        await device.asyncWriteProtocol('f3f4', ['2801', numLow, numHigh, ['string0', scriptString]]);
        let ackString = await device.asyncReadProtocol('f3f4', ['2801', numLow, numHigh, 'string0'], MAX_ONLINE_WAITE_TIME);
        if (ackString == null) {
            console.error('超时');
            //return null;
            return 0;
        }

        let obj;
        ackString = ackString[0]
        //ackString = ackString.replace('None', null);
        ackString = ackString.replace('None', 0);
        ackString = ackString.replace('False', false);
        ackString = ackString.replace('True', true);
        if (typeof(ackString) == "string") {
            obj = JSON.parse('{"ret":' + '"' + ackString + '"' + '}');
        } else {
            obj = JSON.parse('{"ret":' + ackString + '}');
        }
        return obj.ret;
    }
}

/**
 * 主板固件升级协议
 */
const UPLOAD_FIRMWARE_BLOCK_SIZE = 4096
class MainUpgrade {
    //通用命令响应
    static async _checkResponseStatus(app, device, timeout) {
        const respondField = '102705f00100';
        let statueRet = await device.asyncReadProtocol('f3f4', [respondField, 0x00], timeout);
        if (!statueRet) {
            return false;
        }
        return true;
    }

    //读版本号
    static async _checkVersion(app, device) {
        let retransmission_times = 3;
        let version = null;
        do {
            await device.asyncWriteProtocol('ff55', ['000100'], 0, 'firmware.uploader');
            version = await device.asyncReadProtocol('ff55', ['0004', 'string'], 1000);
            console.log({
                version
            });
            retransmission_times--;
        } while ((version == null) && (retransmission_times > 0));
        console.log({
            version1: version
        })
        if (version) {
            return version[0];
        } else {
            await device.asyncWriteProtocol('f3f4', ['10270505', '0000'], 0, 'firmware.uploader');
            let responed = await device.asyncReadProtocol('f3f4', ['102705f00100', 0xF0], 200);
            if (responed) {
                return '00.00.000';
            }
        }
        return null
    }

    //步骤1：进������������������������������������������������������������������������������������������������������������������件�������������������������������������级�������������式
    static async _enterUploadMode(app, device) {
        const protoHeadField = '10270501';
        let retransmission_times = 3;
        let ret = false;

        await device.asyncWriteProtocol('f3f4', [protoHeadField, '0000'], 0, 'firmware.uploader');
        await OnlineUtil.delay(0.5);
        do {
            await device.asyncWriteProtocol('f3f4', [protoHeadField, '0000'], 0, 'firmware.uploader');
            ret = await MainUpgrade._checkResponseStatus(app, device, 1000);
            retransmission_times--;
        } while ((ret == false) && (retransmission_times > 0));

        return ret;
    }

    //步骤2：配置串口波特率
    static async _configBuadrate(app, device) {
        const protoHeadField = '10270502';
        return true;
    }

    //步骤3：上传文件头部信息
    static async _uploadFileInfo(app, device, path, data) {
        const protoHeadField = '10270503';
        let dataSize = 9 + path.length + 1;
        const dataSizeField = ['short', dataSize];
        const fileTypeField = 0x03;
        const fileSizeField = ['long', data.length];
        window.data_ = data
        //console.log(data)
        let crc = OnlineUtil.crc32(data);
        //console.log(crc);
        const crcField = ['long', crc];
        const fileNameField = ['string0', path];

        let retransmission_times = 1; //3
        let ret = false;
        do {
            await device.asyncWriteProtocol('f3f4', [protoHeadField, dataSizeField, fileTypeField, fileSizeField, crcField, fileNameField], 0, 'firmware.uploader');
            ret = await MainUpgrade._checkResponseStatus(app, device, 15000);
            retransmission_times--;
        } while ((ret == false) && (retransmission_times > 0));
        return ret;
    }

    static async _is_equal_ff(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] != 0xFF) {
                return false;
            }
        }
        return true;
    }

    static async _uploadFileBlock(app, device, path, fileSize, fileOffset, block, onProgressHandler) {
        try {
            let progress = Math.floor((fileOffset + block.length) * 100 / fileSize);
            if (onProgressHandler) onProgressHandler(progress);
        } catch (ex) {
            app.log(`handler of upload file ${path} fail: ${ex.toString()}`);
        }
        //if (await MainUpgrade._is_equal_ff(block) == true) {
        //    return true;
        //}
        const protoHeadField = '10270504';
        let fileOffsetArray = [(fileOffset & 0xff), (fileOffset >> 8 & 0xff), (fileOffset >> 16 & 0xff), (fileOffset >> 24 & 0xff)];
        let data = fileOffsetArray.concat(block);

        let retransmission_times = 3;
        let ret = false;
        do {
            await device.asyncWriteProtocol('f3f4', [protoHeadField, ['block', data]], 0, 'firmware.uploader');
            ret = await MainUpgrade._checkResponseStatus(app, device, 2000);
            retransmission_times--;
        } while ((ret == false) && (retransmission_times > 0));
        return ret;
    }


    //步骤4：上传文件
    static async _uploadFile(app, device, path, data, onProgressHandler, errHandler) {
        // upload file blocks
        let fileOffset = 0;
        let fileSize = data.length;
        do {
            let end = fileOffset + UPLOAD_FIRMWARE_BLOCK_SIZE;
            if (end >= data.length) {
                end = data.length
            }
            let block = data.slice(fileOffset, end);
            let st = await MainUpgrade._uploadFileBlock(app, device, path, fileSize, fileOffset, block, onProgressHandler);
            if (!st) {
                return false;
            }
            fileOffset = end;
        } while (fileOffset < data.length);
        return true;
    }

    //步骤5：查询升级结果
    static async _checkUploadResult(app, device) {
        const protoHeadField = '10270505';
        let retransmission_times = 3;
        let ret = false;

        do {
            await device.asyncWriteProtocol('f3f4', [protoHeadField, '0000'], 0, 'firmware.uploader');
            ret = await MainUpgrade._checkResponseStatus(app, device, 1000);
            retransmission_times--;
        } while ((ret == false) && (retransmission_times > 0));
        return ret;
    }

    //�������骤6：重启模块
    static async _resetModule(app, device) {
        const protoHeadField = '10270506';
        await device.asyncWriteProtocol('f3f4', [protoHeadField, '0000'], 0, 'firmware.uploader');
        OnlineUtil.delay(0.5);
        return true;
    }

    //固件升级主流程
    static async upload(app, device, _data, logHandler, onProgressHandler, finishHandler, errHandler) {
        const u8Arr = new Uint8Array(_data);
        const data = Array.from(u8Arr);
        let status = false;
        const path = '\novapi_app.bin'

        //console.log("step1:")
        status = await MainUpgrade._enterUploadMode(app, device);
        if (status != true) {
            if (errHandler) errHandler('fail on uploadFirmware: _enterUploadMode');
            return false;
        }

        //console.log("step2:")
        status = await MainUpgrade._configBuadrate(app, device);
        if (status != true) {
            if (errHandler) errHandler('fail on uploadFirmware: _configBuadrate');
            return false;
        }

        //console.log("step3:")
        status = await MainUpgrade._uploadFileInfo(app, device, path, data);
        if (status != true) {
            if (errHandler) errHandler('fail on uploadFirmware: _uploadFileInfo');
            return false;
        }

        //console.log("step4:")
        status = await MainUpgrade._uploadFile(app, device, path, data, onProgressHandler, errHandler);
        if (status != true) {
            if (errHandler) errHandler('fail on uploadFirmware: _uploadFile');
            return false;
        }

        //console.log("step5:")
        status = await MainUpgrade._checkUploadResult(app, device);
        if (status != true) {
            if (errHandler) errHandler('fail on uploadFirmware: _checkUploadResult');
            return false;
        }

        //console.log("step6:")
        status = await MainUpgrade._resetModule(app, device);
        if (status != true) {
            if (errHandler) errHandler('fail on uploadFirmware: _resetModule');
            return false;
        }

        finishHandler();
        return true;
    }
}

let _allocator = null;
class CNeurons {
    constructor() {
        this.addresses = [];
        this.hardId = [];
        this.typeDatas = {}
    }

    resetHardwareId() {
        this.hardId = [];
    }

    setHardwareId(port, index, _hardId) {
        let portDatas = this.hardId[port];
        if (!portDatas) {
            portDatas = [];
            this.hardId[port] = portDatas;
        }
        portDatas[index] = _hardId;
    };

    getHardwareId(typeId, idx) {
        let addrs = this.hardId[typeId]
        if (addrs == undefined) return 0; // invalid
        let r = addrs[idx - 1];
        if (r === undefined) return 0;
        return r;
    };

    async allocHardwareId(app, device) {
        await device.asyncWriteProtocol('f8f9', [0xFF, 0xFF, 0x61, 0x06], 50, "firmware.uploader");
        let cancellsetHardwareId = device.subscribeReadProtocol('f8f9', ['BYTE', 'BYTE', 0x61, 0x06, 'short', 'short'], async (data) => {
            let port = data[0];
            let index = data[1];
            let hardId = [data[2], data[3]];
            //console.log(`port:${port}, index:${index},hardId:${hardId}`);
            this.setHardwareId(port, index, hardId); //填表，需要升级的模块
        });
        await OnlineUtil.delay(1); //订阅1s，退出
        cancellsetHardwareId();
        console.log("hardId infos:", this.hardId);
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

/* 模块升级协议 */
class ModuleUpgrade {
    static HardwareIDTotypeId(hardwareID) {
        let found = hardwareIDTab.find((data) => {
            let cond1 = Math.abs(hardwareID[0] - data.hidM) < 50;
            let cond2 = Math.abs(hardwareID[1] - data.hidL) < 50;
            return cond1 && cond2
        })
        if (found) return found.typeId
    }

    static bindDatas(datas) {
        if (!_allocator) {
            _allocator = new CNeurons();
        }
        _allocator.bindDatas(datas)
    }

    static async allocHardwareId(app, device) {
        if (!_allocator) {
            _allocator = new CNeurons();
            // console.log(`-------------------CNeurons is inited`)
        }
        _allocator.resetHardwareId()
        return await _allocator.allocHardwareId(app, device)
    }

    //比较所有模块版本号
    static async compareVersion(app, device, moduleInfo) {
        await ModuleUpgrade.allocHardwareId(app, device);
        for (let port = 1; port < _allocator.hardId.length; ++port) {
            let hardIds = _allocator.hardId[port]
            if (!hardIds) continue // empty port
            for (let index = 1; index < hardIds.length; ++index) {
                let hardId = hardIds[index];
                if (!hardId) continue

                let count_typid = ModuleUpgrade.HardwareIDTotypeId(hardId);
                if (count_typid) {
                    let device_ver = await ModuleUpgrade._checkVer(app, device, port, index);
                    let file_ver = moduleInfo.get(count_typid)
                    console.log(`----port:${port},index:${index},count_typid:${count_typid},device_ver:${device_ver},file_ver:${file_ver}`)
                    if ((file_ver > device_ver) || (device_ver == null)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // 步骤0(option)：request ready for update to controller
    static async _prepareUpdate(app, device) {
        let req = [0x0d, 0x00, 0x03]
        await device.asyncWriteProtocol('f3f4', req, 50, "firmware.uploader"); //电机会重启
        await OnlineUtil.delay(0.2);
    }
    // 步骤0(option)：request ready for update to controller
    static async _endUpdate(app, device) {
        let req = [0x0d, 0x00, 0x00]
        await device.asyncWriteProtocol('f3f4', req, 50, "firmware.uploader"); //主控会重启
        await OnlineUtil.delay(3);
    }
    // 步骤一：分配ID
    static async _allocID(app, device, port) {
        let req = [port, 0xff, 0x10, 0x00]
        await device.asyncWriteProtocol('f8f9', req, 50, "firmware.uploader");
    }
    // 回包
    static async _getAddr(app, device, port, modID) {
        await ModuleUpgrade._allocID(app, device, port);
        let mod_req = [port, modID, 0x10, 'BYTE', 'BYTE'];
        let servo_req = [port, modID, 0x10, 'BYTE']; //should be [0x60]
        let async_mod_req = device.asyncReadProtocol('f8f9', mod_req);
        let async_servo_req = device.asyncReadProtocol('f8f9', servo_req);
        let res = await Promise.race([async_mod_req, async_servo_req]);
        if (res == null) {
            return res // 超时
        } else if (res.length == 1) {
            return [res[0], 0]
        } else if (res.length == 2) {
            return [res[0], res[1]]
        }
    }
    // 步骤二：查询固件版本
    static async _checkVer(app, device, port, modID) {
        let req = [port, modID, 0x12];
        await device.asyncWriteProtocol('f8f9', req, 0, "firmware.uploader");
        let rsp = [port, modID, 0x12, 'BYTE', 'BYTE', 'SHORT'];
        let ret = await device.asyncReadProtocol('f8f9', rsp, 200);
        if (ret) {
            let version1 = ret[0].toString().padStart(2, '0');
            let version2 = ret[1].toString().padStart(2, '0');
            let version3 = ret[2].toString().padStart(3, '0');
            return `${version1}.${version2}.${version3}`;
        }
        return null
    }
    // 步骤三:升级模块
    // 切升级模式
    static async _switchBootLoad(app, device, port, modID, types) {
        let type = types[0];
        let subtype = types[1];
        let req = [port, modID, 0x61, 0x05, ['BYTE', type],
            ['BYTE', subtype]
        ];
        let rsp = [port, modID, 0x15, 'byte'];
        await device.asyncWriteProtocol('f8f9', req, 50, "firmware.uploader");
        return true;
        throw "TODO by CKR"
        let ret = await device.asyncReadProtocol('f8f9', rsp);
        console.log('ret', ret);
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
            } else if (res == 0x1) { //错误的数据
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
    static async _getHardwareID(app, device, port, modID) {
        let req = [port, modID, 0x61, 0x06];
        let res = [port, modID, 0x61, 0x06, 'short', 'short'];
        await device.asyncWriteProtocol('f8f9', req, 50, "firmware.uploader");
        let ret = await device.asyncReadProtocol('f8f9', res, 200);
        if (ret) {
            return [ret[0], ret[1]] //ID1, ID2
        }
        return null;
    }
    // 步骤六：传送升级文件（若返回校验错误或者没���返回，可以重传包）
    // 6.1 传送文件信息
    static async _updateFileInfo(app, device, port, modID, data) {
        let reqID = 0x00;
        let fileSz = data.length;

        let crcData = OnlineUtil.crc32(data);
        console.log(crcData.toString(16))
        let req = [port, modID, 0x61, 0x07, ['SHORT', reqID],
            ['long', data.length],
            ['long', crcData]
        ];
        let rsp = [port, modID, 0x61, 0x07, ['SHORT', reqID],
            'BYTE'
        ]
        let err = '';
        await device.asyncWriteProtocol('f8f9', req, 0, "firmware.uploader");
        let ret = await device.asyncReadProtocol('f8f9', rsp);
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
    static async _updateChunk(app, device, port, modID, chunk, chunkIdx) {
        let req = [port, modID, 0x61, 0x07, ['SHORT', chunkIdx],
            ['block', chunk]
        ];
        let rsp = [port, modID, 0x61, 0x07, ['SHORT', chunkIdx],
            'BYTE'
        ]
        let err = '';
        await device.asyncWriteProtocol('f8f9', req, 0, "firmware.uploader");
        let ret = await device.asyncReadProtocol('f8f9', rsp);
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
    static async _updateCheckSucc(app, device, port, modID) {
        let req = [port, modID, 0x61, 0x08];
        let rsp = [port, modID, 0x61, 0x08, 'BYTE'];
        let err = '';
        await device.asyncWriteProtocol('f8f9', req, 50, "firmware.uploader");
        let ret = await device.asyncReadProtocol('f8f9', rsp);
        // console.log('ret', ret)
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
    static async _updateReset(app, device, port, modID) {
        let req = [port, modID, 0x11]
        await device.asyncWriteProtocol('f8f9', req, 50, "firmware.uploader");
        await OnlineUtil.delay(2);
    }
    // step:6~8
    static async _update(app, device, port, modID, data, logHandler, progressHandle, finishHandler, errHandler) {
        let err = 'update faie';
        // try 3 times
        let tryMax = 3;
        let tryCount = 0
        for (tryCount = 0; tryCount < tryMax; ++tryCount) {
            let r = await ModuleUpgrade._updateFileInfo(app, device, port, modID, data);
            if (r) break;
        }
        if (tryCount == tryMax) {
            err = `update file info fail ${tryMax} times, update quit`
            throw err
            return false
        }

        const segment = 64;
        let fileOffset = 0;
        let fileSz = data.length;
        let chunkIdx = 1;
        do {
            let end = fileOffset + segment;
            if (end >= data.length) {
                end = data.length
            }
            let chunk = data.slice(fileOffset, end);

            for (tryCount = 0; tryCount < tryMax; ++tryCount) {
                let r = await ModuleUpgrade._updateChunk(app, device, port, modID, chunk, chunkIdx);
                if (r) break;
            }

            if (tryCount == tryMax) {
                err = `update chunk at ${fileOffset} fail ${tryMax} times, update quit`
                throw err
                return false
            }
            chunkIdx++;
            fileOffset = end;
            progressHandle(Math.floor((fileOffset / data.length) * 100));
        } while (fileOffset < data.length);
        let res = await ModuleUpgrade._updateCheckSucc(app, device, port, modID);
        if (!res) {
            throw "_updateCheck Fault"
            return false;
        }
        progressHandle(100);
        await ModuleUpgrade._updateReset(app, device, port, modID);
        return true;
    }

    /*分配ID等待回包*/
    static async assign_id_command(app, device, port, idx) {
        await ModuleUpgrade._allocID(app, device, port);
        let send_count = 0;
        let responses = await ModuleUpgrade._getAddr(app, device, port, idx);
        while (responses == null) {
            send_count += 1;
            // await ModuleUpgrade._allocID(app, device, port);
            await OnlineUtil.delay(0.01);
            responses = await ModuleUpgrade._getAddr(app, device, port, idx);
            if (responses != null) {
                break;
            }
            if (send_count > 5) {
                break
            }
        }
        // # print (responses_result_dict["assign_id"])
        if (responses != null) {
            return responses;
        }
        return null;
    }

    /*升级一个模块*/
    static async updateModeByAddr(app, device, port, idx, typeId, data, logHandler, progressHandle, finishHandler, errHandler) {
        let is_module_in_bootloader = false
        let tryCount = 0;
        let type = typeId / 256
        let subType = typeId % 256

        //再判断一次硬件ID是否正确，以防错升固件
        let hardId = await ModuleUpgrade._getHardwareID(app, device, port, idx);
        let count_typid = ModuleUpgrade.HardwareIDTotypeId(hardId);
        if (count_typid != typeId) {
            console.log(`typeId:${typeId},count_typid:${count_typid}`);
            throw "HardwareID is changed!"
        }

        while (is_module_in_bootloader == false) {
            //[type, subType]
            let res_assign_id = await ModuleUpgrade.assign_id_command(app, device, port, idx)
            console.log("res_assign_id:", res_assign_id)
            if (res_assign_id != null) {
                //if ((type == res_assign_id[0]) && (subType == res_assign_id[1])) { 
                //
                //}
                await ModuleUpgrade._switchBootLoad(app, device, port, idx, res_assign_id)
                await OnlineUtil.delay(0.2)
                if ((res_assign_id[0] == 0x00) && (res_assign_id[1] == 0x00)) {
                    is_module_in_bootloader = true
                    await ModuleUpgrade._update(app, device, port, idx, data, logHandler, progressHandle, finishHandler, errHandler);
                    break
                } else {
                    tryCount++;
                    if (tryCount > 5) {
                        throw "bootload fail"
                    }
                    // print("dev_id: 0x%x, type: 0x%x, subtype: 0x%x" % (res_assign_id[0], res_assign_id[1], res_assign_id[2]))
                }
            } else {
                await OnlineUtil.delay(1);
                tryCount++;
                if (tryCount > 5) {
                    throw "try assign id timeout"
                }
                // print("No neuron module inserted!")
            }

        }
    }

    //升级所有模块固件
    static async uploadModules(app, device, logHandler, progressHandle, finishHandler, errHandler) {
        let powerInfo = null;

        //分配ID 0.5s
        await ModuleUpgrade._allocID(app, device, 0xFF);
        await OnlineUtil.delay(0.1);

        //订阅硬件ID
        await ModuleUpgrade.allocHardwareId(app, device);

        for (let port = 1; port < _allocator.hardId.length; ++port) {
            let hardIds = _allocator.hardId[port]
            if (!hardIds) continue // empty port
            for (let index = 1; index < hardIds.length; ++index) {
                let hardId = hardIds[index];
                if (!hardId) continue

                let count_typid = ModuleUpgrade.HardwareIDTotypeId(hardId);
                if (count_typid) {
                    let dataversion = _allocator.typeDatas[count_typid]
                    if (!dataversion) {
                        throw "not have this dataversion file!!!" + dataversion;
                    }

                    //await ModuleUpgrade._allocID(app, device, port);//电源管理模块会断电，重新分配一次ID
                    let device_ver = await ModuleUpgrade._checkVer(app, device, port, index);
                    let file_ver = dataversion.version;
                    let file_data = dataversion.data;
                    if ((file_ver > device_ver) || (device_ver == null)) {
                        let data = dataversion.data;
                        if (!data) {
                            throw "not have this data file!!!" + dataversion;
                        }
                        //电源管理模块最后再升级
                        if (count_typid == 0x6409) {
                            powerInfo = {
                                port,
                                index,
                                count_typid,
                                device_ver,
                                file_ver,
                                data
                            };
                            continue;
                        }
                        console.log(`updataing: port:${port},index:${index},device_ver:${device_ver},file_ver:${file_ver}`)
                        await ModuleUpgrade.updateModeByAddr(app, device, port, index, count_typid, new Uint8Array(data), logHandler, progressHandle, finishHandler, errHandler);
                    }
                }
            }
        }
        console.log("powerInfo:", powerInfo)
        if (powerInfo) {
            let {
                port,
                index,
                count_typid,
                device_ver,
                file_ver,
                data
            } = powerInfo;
            console.log(`updataing: port:${port},index:${index},device_ver:${device_ver},file_ver:${file_ver}`)
            await ModuleUpgrade.updateModeByAddr(app, device, port, index, count_typid, new Uint8Array(data), logHandler, progressHandle, finishHandler, errHandler);
        }
    }
}

// 升级固件
const Protocol = {
    async updateFirmwares(app, device, datas, logHandler, progressHandle, finishHandler, errHandler) {
        //等待检测版本结束
        await getReady(() => checkFirmwareVersionFinish === true);
        try {
            if (datas instanceof Array) { // 包括模块的升级
                await ModuleUpgrade._prepareUpdate(app, device);

                // 遍历bin文件
                ModuleUpgrade.bindDatas(datas);

                // 模块升级
                await ModuleUpgrade.uploadModules(app, device, logHandler, progressHandle, finishHandler, errHandler);

                await OnlineUtil.delay(1);

                // 主控升级
                let mainBoardFile = _allocator.typeDatas[0];
                await MainUpgrade.upload(app, device, mainBoardFile.data, logHandler, progressHandle, finishHandler, errHandler);
            } else { // 单主控升级
                // 主控
                await MainUpgrade.upload(app, device, datas, logHandler, progressHandle, finishHandler, errHandler);
            }
        } catch (ex) {
            errHandler('unknown error of ' + ex);
            return;
        }
    },
}

window.novapi_online_operation = OnlineProtocol

const disableBlocks = {
    debug: ["novapi.NovaPi main program setup", "novapi.compitition_mode", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"],
    upload: ["event_whenflagclicked", "data_showvariable", "data_hidevariable", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"]
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



class ExtNovapi {

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
                            window.moduleInfo = this.moduleInfo;
                            const defaultFirmware = info.firmware[0];
                            this.moduleInfo.set(0, defaultFirmware.version); //主板固件
                            for (const mod of defaultFirmware.modules) {
                                const typeid = parseInt(mod.type.substring(0, 6), 16);
                                this.moduleInfo.set(typeid, mod.version);
                            }
                        }

                        checkFirmwareVersionFinish = false;
                        //await OnlineUtil.delay(2);

                        setTimeout(async () => {
                            try {
                                //读主板固件版本号
                                const mainDeviceVersion = await MainUpgrade._checkVersion(app, device);
                                const mainFileVersion = this.moduleInfo.get(0);
                                console.log('main device version:', mainDeviceVersion);
                                console.log('main file version:', mainFileVersion);

                                if (mainDeviceVersion != null) {
                                    //check product id
                                    let productId = mainDeviceVersion.slice(0, 3);
                                    if ((productId == "41.") || (productId == "40.") || (productId == "00.")) {
                                        //check main board version
                                        if (mainFileVersion != mainDeviceVersion) {
                                            resolve(true);
                                        }
                                        //check modules version
                                        else {
                                            let ret = await ModuleUpgrade.compareVersion(app, device, this.moduleInfo);
                                            if (ret) {
                                                resolve(true);
                                            } else {
                                                resolve(false);
                                            }
                                        }
                                    } else {
                                        resolve(false);
                                    }
                                } else {
                                    resolve(false);
                                }
                            } catch (e) {
                                console.log('firmware version check err:', e);
                                resolve(false);
                            }
                            checkFirmwareVersionFinish = true;
                        }, 2000);
                    });
                }
            }),
            'settingsCbe1Cff9Handle': //(app, device, block) => {
                //    // TODO
                //}
                async (app, device, block) => {
                    const service = app.getService('system.ui');
                    const title = 'novapi.SET_SMART_ZERO_TITLE';
                    const port = 'novapi.SET_SMART_ZERO_PORT';
                    const no = 'novapi.SET_SMART_ZERO_NO';
                    const btn = 'novapi.SET_SMART_ZERO_BTN';
                    const loading = 'novapi.SET_SMART_ZERO_BTN_LOADING';
                    const setZeroSuccess = 'novapi.SET_SMART_ZERO_SUCCESS';
                    const setZeroFail = 'novapi.SET_SMART_ZERO_FAIL';
                    const dialog = await service.dialog('color', {
                        title: title,
                        width: '320px',
                        fields: [{
                                id: 'port',
                                label: port,
                                type: 'select',
                                options: [{
                                        text: 'M1',
                                        value: 'M1'
                                    },
                                    {
                                        text: 'M2',
                                        value: 'M2'
                                    },
                                    {
                                        text: 'M3',
                                        value: 'M3'
                                    },
                                    {
                                        text: 'M4',
                                        value: 'M4'
                                    },
                                    {
                                        text: 'M5',
                                        value: 'M5'
                                    },
                                    {
                                        text: 'M6',
                                        value: 'M6'
                                    }
                                ],
                                value: 'M1',
                                props: {}
                            },
                            {
                                id: 'index',
                                label: no,
                                type: 'select',
                                options: [{
                                        text: '1',
                                        value: 'INDEX1'
                                    },
                                    {
                                        text: '2',
                                        value: 'INDEX2'
                                    },
                                    {
                                        text: '3',
                                        value: 'INDEX3'
                                    },
                                    {
                                        text: '4',
                                        value: 'INDEX4'
                                    },
                                    {
                                        text: '5',
                                        value: 'INDEX5'
                                    },
                                    {
                                        text: '6',
                                        value: 'INDEX6'
                                    }
                                ],
                                value: 'INDEX1',
                                props: {}
                            }
                        ],
                        buttons: [{
                            id: 'id',
                            text: btn,
                            loadingText: loading,
                            handle: async (ctx) => {
                                const {
                                    values
                                } = ctx;
                                const port = values.port;
                                const index = values.index;
                                //console.log('port = ', port);
                                //console.log('index = ', index);

                                const isUploadMode = device.isUploadMode();
                                await OnlineUtil.changeDebugMode(device);
                                await OnlineUtil.delay(2);
                                let scriptString = [];
                                scriptString = `from mbuild.smartservo import smartservo_class
__smartservo_0 = smartservo_class("${port}", "${index}")
__smartservo_0.set_zero()`
                                await OnlineProtocol.writeScript(device, scriptString)

                                await OnlineUtil.delay(0.2);
                                scriptString = `value = __smartservo_0.get_value("angle")
online_debug_respond(value)`
                                let angle = await OnlineProtocol.readScript(device, scriptString);
                                console.log('angle = ', angle);

                                scriptString = `value = __smartservo_0.get_value("voltage")
online_debug_respond(value)`
                                let voltage = await OnlineProtocol.readScript(device, scriptString);
                                console.log('voltage = ', voltage);

                                if (isUploadMode) {
                                    await OnlineUtil.changeUploadMode(device);
                                }
                                if ((voltage > 0) && (Math.abs(angle) < 2)) {
                                    service.message(setZeroSuccess, 'success', 1);
                                } else {
                                    service.message(setZeroFail, 'warning', 1);
                                }
                                await OnlineUtil.delay(0.5);
                            }
                        }]
                    });
                },
            'timer': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = novapi.timer()
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'timer_reset': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `novapi.reset_timer()`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'motion_sensor_acc': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = novapi.get_acceleration("${args.AXIS}")
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'motion_sensor_gyro': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = novapi.get_gyroscope("${args.AXIS}")
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'motionSensorAngleCodesCode': (args) => {
                if (args.AXIS == "x") {
                    return `novapi.get_pitch()`;
                } else if (args.AXIS == "y") {
                    return `novapi.get_roll()`;
                } else if (args.AXIS == "z") {
                    return `novapi.get_yaw()`;
                } else {
                    console.log('param error');
                }
            },
            'motion_sensor_angle': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    if (args.AXIS == "x") {
                        scriptString = 'novapi.get_pitch()';
                    } else if (args.AXIS == "y") {
                        scriptString = 'novapi.get_roll()';
                    } else if (args.AXIS == "z") {
                        scriptString = 'novapi.get_yaw()';
                    } else {
                        console.error('参数错误');
                        return;
                    }
                    scriptString = `value = ` + scriptString + `
online_debug_respond(value)`

                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'motion_sensor_set_threshold': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `novapi.set_shake_threshold(${args.THRESHOLD})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'motion_sensor_check_shake': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = novapi.is_shaked()
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'motion_sensor_reset_rotation': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `novapi.reset_rotation("${args.AXIS}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'DRGB_INIT': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `from mbuild.dual_rgb_sensor import dual_rgb_sensor_class
__dual_rgb_sensor_${args.NUM} = dual_rgb_sensor_class("${args.PORT}", "${args.INDEX}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'DRGB_SET_SENSOR_KP': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `__dual_rgb_sensor_${args.NUM}.set_motor_diff_speed_kp(${args.KP})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'DRGB_SET_SENSOR_COLOR': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `__dual_rgb_sensor_${args.NUM}.set_led_color("${args.COLOR}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'DRGB_CHECK_COLOR': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = (__dual_rgb_sensor_${args.NUM}.is_color("${args.CHANNEL}", "${args.COLOR}"))
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'DRGB_SENSOR_STATUS': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = (__dual_rgb_sensor_${args.NUM}.is_state("${args.STATE}"))
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'DRGB_BACKGROUND_DETECTED': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = (__dual_rgb_sensor_${args.NUM}.is_on_background("${args.CHANNEL}"))
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'DRGB_GET_INTENSITY': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = __dual_rgb_sensor_${args.NUM}.get_intensity("${args.CHANNEL}")
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'DRGB_GET_POSITION_OFFSET': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = __dual_rgb_sensor_${args.NUM}.get_offset_track_value()
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'DRGB_GET_POSITION_OFFSET_KP': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = __dual_rgb_sensor_${args.NUM}.get_motor_diff_speed()
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'POWER_EXPAND_DCmotor_power': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `power_expand_board.set_power("${args.CHANNEL}", ${args.POWER})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'POWER_EXPAND_DCmotor_stop': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `power_expand_board.stop("${args.CHANNEL}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'POWER_EXPAND_BLmotor_power': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `power_expand_board.set_power("${args.CHANNEL}", ${args.POWER})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'POWER_EXPAND_BLmotor_stop': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `power_expand_board.stop("${args.CHANNEL}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'powerExpandSolenoidvalveCodesCode': (args) => {
                if (args.STATUS == 0) {
                    return `power_expand_board.set_power("${args.CHANNEL}", 0)`;
                } else if (args.STATUS == 1) {
                    return `power_expand_board.set_power("${args.CHANNEL}", 100)`;
                } else {
                    console.log('param error');
                }
            },
            'POWER_EXPAND_solenoidvalve': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `power_expand_board.set_power("${args.CHANNEL}", ${args.STATUS}*100)`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'encoder_motor_power': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    let pwm = parseInt(args.POWER * 255 / 100);
                    scriptString = `neurons_send("encoder_motor", "set_power", PORT["${args.PORT}"], 1, (${pwm},))`
                    console.log(scriptString)
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'encoder_motor_move': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    let pwm = parseInt(args.POWER * 255 / 100);
                    scriptString = `neurons_send("encoder_motor", "move", PORT["${args.PORT}"], 1, (${args.POSITION}, ${args.SPEED}))`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'encoder_motor_move_to': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    let pwm = parseInt(args.POWER * 255 / 100);
                    scriptString = `neurons_send("encoder_motor", "move_to", PORT["${args.PORT}"], 1, (${args.POSITION}, ${args.SPEED}))`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'encoder_motor_speed': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    let pwm = parseInt(args.POWER * 255 / 100);
                    scriptString = `neurons_send("encoder_motor", "set_speed", PORT["${args.PORT}"], 1, (${args.SPEED},))`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'encoder_motor_get_speed': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = neurons_sync_read("encoder_motor", "get_speed", PORT["${args.PORT}"], 1, ())
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'encoder_motor_get_pos': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = neurons_sync_read("encoder_motor", "get_position", PORT["${args.PORT}"], 1, ())
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'smartservo_init': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `from mbuild.smartservo import smartservo_class
__smartservo_${args.NUM} = smartservo_class("${args.PORT}", "${args.INDEX}")`
                    await OnlineProtocol.writeScript(device, scriptString);;
                }
            },
            'smartservo_move': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `__smartservo_${args.NUM}.move(${args.POSITION}, ${args.SPEED})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'smartservo_move_to': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `__smartservo_${args.NUM}.move_to(${args.POSITION}, ${args.SPEED})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'smartservo_set_power': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `__smartservo_${args.NUM}.set_power(${args.POWER})`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'SMARTSERVO_POWER': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = __smartservo_${args.NUM}.get_value("${args.TYPE}")
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'BT_CONTROLLER_BUTTON_PRESSED': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    console.log(args.BUTTON)
                    scriptString = `value = gamepad.is_key_pressed("${args.BUTTON}")
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'BT_CONTROLLER_JOYSTICK': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = gamepad.get_joystick("${args.POSITION}")
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'distance_sensor_init': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `from mbuild.ranging_sensor import ranging_sensor_class
__distance_sensor_${args.NUM} = ranging_sensor_class("${args.PORT}", "${args.INDEX}")`
                    await OnlineProtocol.writeScript(device, scriptString);
                }
            },
            'distance_sensor_get_data': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = __distance_sensor_${args.NUM}.get_distance()
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'NovaPimainprogramsetup': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onAdd: (app, device, block) => {
                    // TODO
                },
                onRemove: (app, device, block) => {
                    // TODO
                }
            },
            'compitition_mode': {
                onRun: async (args, app, device, block) => {
                    let scriptString = [];
                    scriptString = `value = power_manage_module.is_auto_mode()
online_debug_respond(value)`
                    let value = await OnlineProtocol.readScript(device, scriptString);
                    return value;
                }
            },
            'operatorMathopCodesCode': (args) => {
                let code = '';
                let arg = args.NUM
                switch (args.OPERATOR) {
                    case 'abs':
                        code = 'math.fabs(' + arg + ')';
                        break;
                    case 'floor':
                        code = 'math.floor(' + arg + ')';
                        break;
                    case 'ceiling':
                        code = 'math.ceil(' + arg + ')';
                        break;
                    case 'sqrt':
                        code = 'math.sqrt(' + arg + ')';
                        break;
                    case 'sin':
                        code = 'math.sin(' + arg + ' / 180.0 * math.pi)';
                        break;
                    case 'cos':
                        code = 'math.cos(' + arg + ' / 180.0 * math.pi)';
                        break;
                    case 'tan':
                        code = 'math.tan(' + arg + ' / 180.0 * math.pi)';
                        break;
                    case 'log':
                        code = 'math.log(' + arg + ' ,10)'; // microbit 不支持 log10，故此处统一为math.log(n, base)
                        break;
                    case 'ln': // 实际为 log(x)
                        code = 'math.log(' + arg + ')';
                        break;
                    case 'e ^':
                        code = 'math.exp(' + arg + ')';
                        break;
                    case 'exp': // exp 与 e ^ 等价
                        code = 'math.exp(' + arg + ')';
                        break;
                    case '10 ^':
                        code = 'math.pow(10, ' + arg + ')';
                        break;
                    case 'asin':
                        code = 'math.asin(' + arg + ')';
                        break;
                    case 'acos':
                        code = 'math.acos(' + arg + ')';
                        break;
                    case 'atan':
                        code = 'math.atan(' + arg + ')';
                        break;
                };
                return code
            },
            'BLOCK_1555405469500': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "novapi",
            "targets": {
                "device": true,
                "name": "novapi",
                "icon": window.MbApi.getExtResPath('novapi/imgs/ad91eb6d77a041e59e67b24eff3e0b8d.png', 'novapi'),
                "enableCode": true,
                "enableUpload": [
                    "serialport"
                ],
                "enableOnline": [
                    "serialport"
                ],
                "shouldConnect": [
                    "serialport"
                ],
                "defaultOnline": false,
                "options": {
                    "connect": {
                        "ble": {
                            "channel": "1"
                        },
                        "serialport": {
                            "baudRate": "115200",
                            "vendorId": "0x7523"
                        }
                    },
                    "upload": {
                        "middlewares": [{
                            "name": "novapi",
                            "func": novapiUploadMiddlewareNovapi
                        }],
                        "driver": {
                            "name": "novapi_uploader",
                            "func": novapiUploadDriverNovapiUploader
                        }
                    },
                    "firmware": {
                        "driver": {
                            "name": "novapi_driver",
                            "func": novapiFirmwareDriverNovapiDriver
                        }
                    }
                },
                "firmware": [{
                    "id": "64e1ab3a",
                    "name": "novapi.firmwares_version_64e1ab3a",
                    "version": "41.02.039",
                    "isDefault": true,
                    "url": {
                        "name": "novapi_app_v41.02.039.bin",
                        "url": window.MbApi.getExtResPath('novapi/res/78fff3662104406383ae7c17e4bb90c9.bin', 'novapi')
                    },
                    "modules": [{
                            "id": "f9b13783",
                            "name": "power_expand_board",
                            "type": "6207",
                            "version": "27.01.004",
                            "url": {
                                "name": "power_expand_board_firmware_27_01_004_6207_ht1.bin",
                                "url": window.MbApi.getExtResPath('novapi/res/2576088cebf742c19a411019039129fc.bin', 'novapi')
                            }
                        },
                        {
                            "id": "0a36cefc",
                            "name": "power_management_module",
                            "type": "6409",
                            "version": "27.01.005",
                            "url": {
                                "name": "updata_27_01_005_001_6409.bin",
                                "url": window.MbApi.getExtResPath('novapi/res/379cd00b57c141789a8a6b67426eeffd.bin', 'novapi')
                            }
                        },
                        {
                            "id": "c9c31d78",
                            "name": "dual_rgb_sensor",
                            "type": "6311",
                            "version": "27.01.004",
                            "url": {
                                "name": "updata_27_01_004_001_6311.bin",
                                "url": window.MbApi.getExtResPath('novapi/res/357ce3cf79c44525bf827fbe64a641d5.bin', 'novapi')
                            }
                        },
                        {
                            "id": "221f87f5",
                            "name": "encoder_motor180",
                            "type": "016206",
                            "version": "27.01.004",
                            "url": {
                                "name": "encoder_motor_180_27_01_004_001_6206.bin",
                                "url": window.MbApi.getExtResPath('novapi/res/70b5b63b8f1b45b6be0cfb0fe606ea6c.bin', 'novapi')
                            }
                        },
                        {
                            "id": "05d3860a",
                            "name": "encoder_motor36",
                            "type": "026206",
                            "version": "27.01.004",
                            "url": {
                                "name": "updata_motor36_27_01_004_001_6206.bin",
                                "url": window.MbApi.getExtResPath('novapi/res/f095515a7fdc4bab99ddf98a9a4c45e1.bin', 'novapi')
                            }
                        }
                    ]
                }],
                "settings": [{
                        "text": "novapi.UPDATE_FIRMWARE",
                        "handle": this.funcs.firmwareSettingHandle
                    },
                    {
                        "id": "cbe1cff9",
                        "text": "novapi.settings_cbe1cff9",
                        "handle": this.funcs.settingsCbe1Cff9Handle
                    }
                ],
                "categoriesOrder": [
                    "cate_0c16e042",
                    "cate_0c16e043",
                    "cate_0c16e044",
                    "cate_0c16e045",
                    "cate_0c16e046",
                    "cate_0c16e047",
                    "cate_0c16e048",
                    "events",
                    "control",
                    "operators",
                    "data",
                    "myBlocks"
                ]
            },
            "codeTypes": [
                "python"
            ],
            "version": "1.1.13",
            "platform": [
                "mblockpc",
                "mblockweb"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "excludeBlocks": [
                "event_whenthisspriteclicked",
                "control_create_clone_of",
                "event_whenbroadcastreceived",
                "event_whenkeypressed",
                "event_whenbackdropswitchesto",
                "control_delete_this_clone",
                "event_broadcast",
                "event_broadcastandwait",
                "control_stop",
                "control_start_as_clone",
                "event_whengreaterthan"
            ],
            "generatorStartBlocks": [
                "timer_reset",
                "NovaPi main program setup"
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

export default ExtNovapi;