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

const raspberrypiCameraUploadDriverSocketUpload =
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
        // 通过socket 上传代码到主板
        let msg = {
            id: 'pythoncode',
            cmd: 'upload',
            params: {
                code: code
            }
        }
        let a = send(msg);
        if (!a) {
            errHandler();
        }
        console.log(a);
        a.then((err) => {
            if (err) {
                errHandler();
                return;
            }
            finishHandler();
        });
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

//------ 全局变量 ------//appContext
let appContext;
let raspberryPiNeedUpdate = false;
let novaPiNeedUpdate = false;

//------ UI 相关 ------//appContext

// 主动断开连接
const breakConnect = () => {
    if (appContext) {
        let connectService = appContext.getService('connect');
        connectService.disconnect();
        deviceIsConnected = false;
    }
};

// 设置连接按钮的状态, state: true 表示激活状态，false 表示置灰
const setConnectBtnState = (state) => {
    if (appContext) {
        let connectService = appContext.getService('connect');
        connectService.setConnectBtnState(state);
    }
};

// this variable should be set true, or firmware uodate indicator will not show 
let checkFirmwareInForce = true;

let styleEle = null;
// 摄像头容器
let camWrapper = null;
// 摄像头本身
let cam = null;

// 字母识别信息
let letterRecognizeInfo = {
    'M': '220, 110'
};

function openCameraWindow(camSrc) {
    initCameraWindow(camSrc);
}

function closeCameraWindow() {
    camWrapper && camWrapper.remove();
}

const createDom = function(tagName, attributes) {
    let ele = document.createElement(tagName);
    for (let i in attributes) {
        if (i) {
            ele.setAttribute(i, attributes[i]);
        }
    }
    return ele;
}

const changeCamSrc = function(src) {
    cam.src = src;
};

const initCameraWindow = function(camSrc) {
    let scratchStageEle = document.querySelector('.stage_stage-box');
    let ele = document.getElementById('camWrapper');
    if (!ele) {
        camWrapper = createDom('div', {
            'id': 'camWrapper',
        });
        cam = createDom('img', {
            'id': 'cam'
        });
        cam.src = camSrc; // USB 网线连接地址
        camWrapper.appendChild(cam);
        scratchStageEle.appendChild(camWrapper);
    }
}

// 设置透明度
const setCamOpacity = function(opacity) {
    camWrapper.style.opacity = opacity * 0.01;
}

// 获取字母识别信息
// info = {'M': '22,34'}
const writeLeterRecognizeInfo = function(info) {
    for (let i in info) {
        letterRecognizeInfo[i] = info[i];
    }
}

function appendStyle() {
    styleEle && styleEle.remove();
    let content = `
    #camWrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index:999;
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid #BCDAFB;
    }
    #cam {
        width: 100%;
        height: 100%;
    }
`;
    styleEle = document.createElement('style');
    styleEle.innerHTML = content;
    document.querySelector('head').appendChild(styleEle);
}

function renderImg(src) {
    var canvas = document.querySelector(".stage_stage");
    let ctx = canvas.getContext("2d");

    canvas.width = '100%';
    canvas.height = '100%';

    var background = new Image();
    background.src = src;

    setInterval(() => {
        ctx.drawImage(background, 0, 0);
    }, 100);
}

window.renderImg = renderImg;

function initUI() {
    appendStyle();
}

initUI();

//------ socket 相关 ---------//
let ws = null;
let wssend = null; // 向下位机发送指令

const initWebSocket = (address) => {
    if (ws) {
        return ws;
    }
    ws = new WebSocket(address); // 网线直接连接

    ws.onerror = function() {
        console.log('Connection Error');
    };

    ws.onopen = function() {
        console.log('socket Client Connected');

        wssend = function(data) {
            let msg = `${JSON.stringify(data)}`;
            return new Promise((resolve, reject) => {
                if (ws.readyState === ws.OPEN) {
                    ws.send(msg);
                    setTimeout(() => {
                        resolve(null); // 模拟发送成功
                    }, 100);
                } else {
                    console.log('socket not open');
                    reject('socket not open');
                }
            });

        };
    };

    ws.onclose = () => {
        console.log('scoket closed');
        // breakConnect();
    };

    let listeners = [];
    ws.onmessage = function(e) {
        if (typeof e.data === 'string') {

            for (let i in listeners) {
                listeners[i] && listeners[i](e.data);
            }
        }
    };


    ws.addMessageListener = (handler) => {
        if (handler) {
            listeners.push(handler)
        }
    };

    ws.removeMessageListener = () => {
        listeners.length && listeners.pop();
    }
};

const disposeWebSocket = function() {
    ws.close();
    ws = null;
    wssend = null;
};

const send = function(data) {
    if (!wssend) {
        console.log('socket not open');
        return;
    }
    return wssend(data);
}


/**
 * ----------------
 * 判断版本号
 * ----------------
 */
const checkFirmwereVersion = function(targetVersion, checkedVersion) {
    var targetVerArray = targetVersion.split(".")
    var checkedVerArray = checkedVersion.split(".")
    if ((Number(checkedVerArray[0]) === Number(targetVerArray[0])) && (Number(checkedVerArray[1]) === Number(targetVerArray[1])) && (Number(checkedVerArray[2]) < Number(targetVerArray[2]))) {
        return true;
    }
    return false;
};


/**
 * ----------------
 * 处理心跳包相关
 * ----------------
 */

// 用于心跳包的计数
let heatCount = 0;
// 预设的心跳包次数
const presetCount = 4;
// 每两次心跳包发送的时间间隔
const timeGap = 500; // ms 单位

/* 监听心跳包 */
const listenHeartBeat = (data) => {
    data = JSON.parse(data);
    if (data.id === 'heartbeat') {
        heatCount++;
        setConnectBtnState(true);
    }
};

/* 执行心跳包 */
let heartBeatInterval = null;
const startHeartBeat = () => {
    if (heartBeatInterval) return;
    heartBeatInterval = setInterval(() => {
        sendHeartBeat();
    }, timeGap);
};

const sendHeartBeat = () => {
    // Todo: socket 方法
    send({
        id: 'heartbeat',
        cmd: 'check',
        params: {}
    })
};

/* watch dog: 用于判定设定时间内，心跳包数是否符合预期
  符合：就认为正常
  不符合：异常 
*/
let watchDogInterval = null;
let deviceIsConnected = false;
const watchDog = () => {
    if (watchDogInterval) return;
    startHeartBeat();
    ws.addMessageListener(listenHeartBeat);
    watchDogInterval = setInterval(() => {
        if (heatCount >= 1) {
            // 心跳包接收正常
            deviceIsConnected = true;
            setConnectBtnState(true);
        } else {
            // 心跳包回复不足
            console.log('Heart beat count less then 3');
            setConnectBtnState(false);
            if (ws.readyState !== 0 && ws.readyState !== 1) {
                disposeWebSocket();
                initWebSocket('ws://169.254.5.1:8081');
                ws.addMessageListener(listenHeartBeat);
            }
            if (deviceIsConnected) {
                breakConnect();
            }
        }
        heatCount = 0;
    }, presetCount * timeGap)
};

const clearAllInterval = () => {
    clearInterval(watchDogInterval);
    clearInterval(heartBeatInterval);
    watchDogInterval = null;
    heartBeatInterval = null;
}

const disableBlocks = {
    debug: ["raspberrypi_camera.open_camera", "raspberrypi_camera.close_camera", "raspberrypi_camera.recognize_symbol", "raspberrypi_camera.raspberrypi_main", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"],
    upload: ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait", "event_whenflagclicked", "event_whenkeypressed", "data_showvariable", "data_hidevariable", "data_listcontents", "data_addtolist", "data_deleteoflist", "data_deletealloflist", "data_insertatlist", "data_replaceitemoflist", "data_itemoflist", "data_itemnumoflist", "data_lengthoflist", "data_listcontainsitem", "data_showlist", "data_hidelist"]
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



class ExtRaspberrypiCamera {

    constructor() {
        this.funcs = {
            'settingsE0Af8B3DHandle': ({
                handle: async (app, device, info) => {
                    const service = app.getService('system.ui');
                    const fields = [];
                    //const isNormal = false;
                    fields.push({
                        id: 'step1',
                        info: {
                            text: 'raspberrypi_camera.raspberryPi',
                            style: {
                                fontSize: 14,
                                textAlign: 'left',
                                paddingRight: 4,
                                fontWeight: "bold",
                                marginBottom: 48
                            }
                        },
                        layout: {
                            span: 6
                        }
                    });

                    let deviceNormalContent = {
                        text: 'raspberrypi_camera.firmware_is_latest',
                        style: {
                            fontSize: 12,
                            textAlign: 'left',
                            color: '#000',
                            marginBottom: 48
                        }
                    };
                    let deviceUnNormalContent = {
                        text: 'raspberrypi_camera.firmware_is_old',
                        style: {
                            fontSize: 12,
                            textAlign: 'left',
                            color: '#f00',
                            marginBottom: 48
                        }
                    };

                    fields.push({
                        id: 'step2',
                        info: !raspberryPiNeedUpdate ? deviceNormalContent : deviceUnNormalContent,
                        layout: {
                            span: 8
                        }
                    });
                    fields.push({
                        id: 'step3',
                        info: {
                            text: `raspberrypi_camera.raspberrypi_firmware_link`,
                            style: {
                                color: '#f00'
                            }
                        },
                        layout: {
                            span: 8
                        }
                    });

                    fields.push({
                        id: 'step4',
                        info: {
                            text: 'raspberrypi_camera.novaPi',
                            style: {
                                fontSize: 14,
                                textAlign: 'left',
                                paddingRight: 4,
                                fontWeight: "bold"
                            }
                        },
                        layout: {
                            span: 6
                        }
                    });
                    fields.push({
                        id: 'step5',
                        info: !novaPiNeedUpdate ? deviceNormalContent : deviceUnNormalContent,
                        layout: {
                            span: 8
                        }
                    });
                    fields.push({
                        id: 'step6',
                        info: {
                            text: `raspberrypi_camera.novapi_firmware_link`,
                            style: {
                                color: '#f00'
                            }
                        },
                        layout: {
                            span: 8
                        }
                    });
                    const dialog = await service.dialog('color', {
                        title: 'raspberrypi_camera.firmware_update',
                        width: '480px',
                        maxWidth: '600px',
                        fields: fields,
                        buttons: [{
                            id: 'colorCalibrate',
                            text: 'raspberrypi_camera.ok',
                            loadingText: '',
                            handle: '',
                        }]
                    });
                },
                check: (app, device, info) => {
                    return new Promise(async (resolve) => {
                        const service = app.getService('system.ui');
                        // --------- 读取版本  --------- //
                        let currentRaspberryVersion = null,
                            currentDeviceVersion = null;
                        let interval = null,
                            deviceInterval = null,
                            resultInterval = null;
                        let maxCount = 5,
                            raspCount = 0,
                            novapiCount = 0;

                        const LATEST_NOVAPI_VERSION = '41.02.038';
                        const LATEST_RASPBERRY_PI_VERSION = '43.01.001';

                        const checkRaspberryPiInfo = function() {
                            interval = setInterval(() => {
                                if (raspCount >= maxCount) {
                                    // 没有检测到版本号
                                    clearInterval(interval);
                                    // TODO:
                                    currentRaspberryVersion = 'not read';
                                    return;
                                }
                                if (currentRaspberryVersion) {
                                    // 检测到了
                                    clearInterval(interval);
                                    return;
                                }
                                raspCount++;
                                console.log(raspCount);
                                send({
                                    id: 'raspberryPiInfo',
                                    cmd: 'check',
                                    params: {}
                                })
                            }, 500);
                        }

                        checkRaspberryPiInfo();

                        const checkDeviceInfo = function() {
                            deviceInterval = setInterval(() => {
                                if (currentRaspberryVersion === null) {
                                    // 树莓派的版本号没有获取到
                                    return;
                                }

                                if (novapiCount >= maxCount) {
                                    // 没有检测到版本号
                                    clearInterval(deviceInterval);
                                    // TODO:
                                    currentDeviceVersion = 'not read';
                                    return;
                                }
                                if (currentDeviceVersion) {
                                    // 检测到了
                                    clearInterval(deviceInterval);
                                    return;
                                }
                                novapiCount++;
                                console.log(novapiCount);
                                send({
                                    id: 'deviceInfo',
                                    cmd: 'check',
                                    params: {}
                                })
                            }, 500);
                        }

                        checkDeviceInfo();

                        // {
                        //   id: 'deviceInfo',
                        //   cmd: 'check',
                        //   params: {
                        //     version: '1.1.0'，  // 当为 '' 时，表示没有插上外设
                        //     name: 'novapi'
                        //   }
                        // }
                        const onRaspberrypiVersionGet = function(info) {
                            info = JSON.parse(info);
                            console.log("Received:", info);
                            if (info.id === 'raspberryPiInfo' && info.cmd === 'check') {
                                let version = info.params.version;
                                currentRaspberryVersion = version;
                                // console.log('Get current raspberryPi version:', currentRaspberryVersion);
                                if (!version) {
                                    currentRaspberryVersion = 'not read';
                                    return;
                                }
                            }
                        }

                        const onNovapiVersionGet = function(info) {
                            info = JSON.parse(info);
                            console.log("Received: ", info);
                            if (info.id === 'deviceInfo' && info.cmd === 'check') {
                                let version = info.params.version;
                                currentDeviceVersion = version;
                                // console.log('Get current device version:', currentDeviceVersion);
                                if (!version) {
                                    currentDeviceVersion = 'not read';
                                    return;
                                }
                            }
                        }

                        ws.addMessageListener(onRaspberrypiVersionGet);
                        ws.addMessageListener(onNovapiVersionGet);

                        const resultResolve = function() {
                            resultInterval = setInterval(() => {
                                if (currentRaspberryVersion === null || currentDeviceVersion === null) {
                                    return;
                                }
                                if (currentRaspberryVersion == 'not read') {
                                    if (currentDeviceVersion == 'not read') {
                                        // alert('raspberrypi_camera.insert_novapi', 'warning', 3);
                                        service.message('raspberrypi_camera.insert_novapi', 'warning', 3);
                                    } else {
                                        if (LATEST_NOVAPI_VERSION != currentDeviceVersion) {
                                            if (checkFirmwereVersion(LATEST_NOVAPI_VERSION, currentDeviceVersion)) {
                                                novaPiNeedUpdate = true;
                                                // alert('NovaPi需要升级版本', 'warning', 2);
                                                clearInterval(resultInterval);
                                                resolve(true);
                                            }
                                        }
                                    }
                                } else {
                                    if (LATEST_RASPBERRY_PI_VERSION != currentRaspberryVersion) {
                                        if (checkFirmwereVersion(LATEST_RASPBERRY_PI_VERSION, currentRaspberryVersion)) {
                                            raspberryPiNeedUpdate = true;
                                            // alert('树莓派需要升级版本', 'warning', 2);
                                        }
                                        if (currentDeviceVersion == 'not read') {
                                            // alert('raspberrypi_camera.insert_novapi', 'warning', 3);
                                            service.message('raspberrypi_camera.insert_novapi', 'warning', 3);
                                        } else if (LATEST_NOVAPI_VERSION != currentDeviceVersion) {
                                            if (checkFirmwereVersion(LATEST_NOVAPI_VERSION, currentDeviceVersion)) {
                                                novaPiNeedUpdate = true;
                                                // alert('NovaPi需要升级版本', 'warning', 2);
                                            }
                                        }
                                        clearInterval(resultInterval);
                                        if (raspberryPiNeedUpdate == true || novaPiNeedUpdate == true) {
                                            resolve(true);
                                        }
                                    } else {
                                        if (currentDeviceVersion == 'not read') {
                                            // alert('raspberrypi_camera.insert_novapi', 'warning', 3);
                                            service.message('raspberrypi_camera.insert_novapi', 'warning', 3);
                                        } else if (LATEST_NOVAPI_VERSION != currentDeviceVersion) {
                                            if (checkFirmwereVersion(LATEST_NOVAPI_VERSION, currentDeviceVersion)) {
                                                novaPiNeedUpdate = true;
                                                // alert('NovaPi需要升级版本', 'warning', 2);
                                                clearInterval(resultInterval);
                                                resolve(true);
                                            }
                                        }
                                    }
                                }
                                clearInterval(resultInterval);
                                resolve(false);
                            }, 100);
                        }
                        resultResolve();
                    });
                }
            }),
            'open_camera': {
                onRun: (args, app, device, block) => {
                    openCameraWindow('http://192.168.55.1:8329/');

                    send({
                        id: 'camera',
                        cmd: 'send_picture',
                        params: {}
                    })
                }
            },
            'close_camera': {
                onRun: (args, app, device, block) => {
                    send({
                        id: 'camera',
                        cmd: 'stop_picture',
                        params: {}
                    })
                }
            },
            'recognize_symbol': {
                onRun: (args, app, device, block) => {
                    return letterRecognizeInfo[args.letter];
                }
            },
            'raspberrypi_main': {
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
            }
        };
    }

    getInfo() {
        return {
            "id": "raspberrypi_camera",
            "targets": {
                "device": true,
                "name": "raspberrypi_camera",
                "icon": window.MbApi.getExtResPath('raspberrypi_camera/imgs/a242f02a642a41d68c26a0934ac8f598.png', 'raspberrypi_camera'),
                "enableCode": true,
                "enableUpload": [
                    "wifi"
                ],
                "enableOnline": false,
                "shouldConnect": [
                    "wifi"
                ],
                "defaultOnline": false,
                "options": {
                    "connect": {
                        "serialport": {
                            "helpLink": "",
                            "tips": {
                                "success": [],
                                "fail": []
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
                            "channel": "1"
                        },
                        "hid": {
                            "helpLink": "",
                            "tips": {
                                "success": [],
                                "fail": []
                            }
                        },
                        "wifi": {
                            "helpLink": "",
                            "tips": {
                                "fail": [
                                    "raspberrypi_camera.connect_fail_1ea235f7",
                                    "raspberrypi_camera.connect_fail_e6ac27c2",
                                    "raspberrypi_camera.connect_fail_f9935fe4"
                                ]
                            },
                            "mode": "sta",
                            "defaultConnectBtnState": "false"
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
                            "fail": [
                                "raspberrypi_camera.upload_fail_25394bfc",
                                "raspberrypi_camera.upload_fail_02f5b518"
                            ]
                        },
                        "middlewares": [],
                        "driver": {
                            "name": "socket_upload",
                            "func": raspberrypiCameraUploadDriverSocketUpload
                        }
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
                "settings": [{
                    "id": "e0af8b3d",
                    "text": "raspberrypi_camera.settings_e0af8b3d",
                    "handle": this.funcs.settingsE0Af8B3DHandle
                }],
                "categoriesOrder": [
                    "cate_58ed155e",
                    "events",
                    "control",
                    "operators",
                    "data",
                    "myBlocks"
                ],
                "ota": {
                    "param": {
                        "host": "",
                        "text": ""
                    },
                    "desc": []
                }
            },
            "codeTypes": [
                "python"
            ],
            "version": "1.0.2",
            "platform": [
                "mblockweb",
                "mblockpc"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "excludeBlocks": [
                "event_whengreaterthan",
                "event_whenthisspriteclicked",
                "event_whenbackdropswitchesto",
                "control_start_as_clone",
                "control_create_clone_of",
                "control_delete_this_clone"
            ],
            "generatorStartBlocks": [
                "raspberrypi_main"
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

export default ExtRaspberrypiCamera;