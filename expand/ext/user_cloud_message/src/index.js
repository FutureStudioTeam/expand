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

import mqtt, {
    MqttClient,
    Packet
} from './res/fe95b5b409c7450baddd3444bbcb384d.js';

const CLOUD_MQTT = 'MESSAGE';
const THROTTLING_TIME = 150;

let _topic = '';
let _client = null;
let _store = {};
let _publishTimer = undefined;
let _connectCallback = () => {};
let _receiveMessageCallback = () => {};
let _appContext = null;

class MqttService {

    constructor() {
        this.clientOptions = {
            protocol: 'wss',
            host: 'mq.makeblock.com',
            port: 8084,
            path: '/mqtt',
            // resubscribe: false
        };
    }

    async setTopic(message) {
        let uid = '';
        let userIntl = false;
        try {
            let user = await this.appContext.getService('account').getUserInfo();
            if (typeof user === 'string') {
                user = JSON.parse(user);
            }
            if (typeof user === 'object') {
                uid = user.uid;
                userIntl = user.intl;
            }
        } catch (err) {
            console.warn(err);
        }
        if (uid !== '') {
            _topic = `${userIntl ? '/EU' : ''}/USER/${uid}/${CLOUD_MQTT}`; // /${message}
        }
        console.log(`topic is -----> ${_topic}`);
        // return _topic;
    }

    get topic() {
        return _topic;
    }

    get client() {
        return _client;
    }

    set client(client) {
        _client = client;
    }

    get appContext() {
        return _appContext;
    }

    get connectCallback() {
        return _connectCallback;
    }

    set connectCallback(callback) {
        _connectCallback = callback;
    }

    get receiveMessageCallback() {
        return _receiveMessageCallback;
    }

    set receiveMessageCallback(callback) {
        _receiveMessageCallback = callback;
    }

    storeMessage(message, value) {
        _store[message] = value;
    }

    onMessage(topic, payload) {
        if (topic === this.topic) {
            try {
                payload = (payload instanceof Uint8Array) ? payload.toString() : payload;
                const {
                    message,
                    value
                } = JSON.parse(payload);
                if (message !== undefined && value !== undefined) {
                    this.storeMessage(message, value);
                    this.receiveMessageCallback(message, value);
                }
            } catch (error) {
                console.warn(error);
            }
        }
    }

    initClient() {
        return new Promise((resolve, reject) => {
            const client = mqtt.connect(this.clientOptions);
            this.client = client;
            client.on('connect', () => {
                this.connectCallback();
                resolve();
            });
            client.on('message', (topic, payload) => {
                this.onMessage(topic, payload);
            });
            client.on('error', (err) => {
                reject(err);
            });
        });
    }

    init() {
        const client = this.client;
        if (!client) {
            return this.initClient();
        } else if (client && client.connected === false) {
            client.reconnect();
        } else if (client && !client._events.message) {
            client.on('message', (topic, payload) => {
                this.onMessage(topic, payload);
            });
        }
        return Promise.resolve();
    }

    subscribe(message, isLogin = false) {
        const topic = this.topic; // (message);
        const client = this.client;
        console.log(`subscribe -----> ${topic}`);
        if (client && client.connected) {
            client.subscribe(topic);
            if (!client._events.message && isLogin) {
                client.on('message', (topic, payload) => {
                    this.onMessage(topic, payload);
                });
            }
        }
    }

    unsubscribe(message) {
        const topic = this.topic; // (message);
        const client = this.client;
        if (this.client) {
            if (this.client._events) {
                if (this.client._events.message) {
                    this.client.removeAllListeners('message');
                }
            }
        }
        console.log(`unsubscribe -----> ${topic}`);
        if (client && client.connected && topic) {
            client.unsubscribe(topic);
        }
    }

    publish(message, value = '', time = THROTTLING_TIME) {
        const publish = () => {
            return new Promise((resolve, reject) => {
                _publishTimer = setTimeout(() => {
                    const topic = this.topic; // (message);
                    const client = this.client;
                    // && client.connected
                    console.log('publish', [message, value]);
                    if (topic && client) {
                        client.publish(topic, JSON.stringify({
                            message,
                            value
                        }), (error, packet) => {
                            _publishTimer = undefined;
                            if (error) {
                                reject(error);
                            } else {
                                resolve(packet);
                            }
                        });
                    }
                }, time);
            });
        };
        const client = this.client;
        if (!client || (client && !client.connected) || (client && !client._events.message)) {
            return this.init().then(() => {
                return publish();
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        return publish();
    }

    receive(callback) {
        return new Promise((resolve, reject) => {
            const client = this.client;
            if (client) {
                this.receiveMessageCallback = (message, value) => {
                    typeof callback === 'function' && callback({
                        message,
                        value
                    })
                    // resolve({
                    //     message,
                    //     value
                    // });
                };
            }
        });
    }

    getValue(message) {
        if (_store) {
            const value = _store[message];
            return typeof value === 'undefined' || value === null ? 0 : value;
        } else {
            return 0;
        }
    }

    close() {
        const client = this.client;
        if (client) {
            this.unsubscribe();
            client.end(false, () => {
                console.info('mqtt connect is closed!');
            });
            this.client = null;
        }
    }
}

class CloudMessage {

    constructor() {
        this._running = false;
        this._messages = [];
        this._runQueue = [];
        this._mqttService = new MqttService();
        this._mqttService.connectCallback = async () => {
            // 设置 topic
            await this._mqttService.setTopic('');
            // 订阅消息
            this._mqttService.subscribe('');
        };
    }

    _collect(message) {
        message = message.toString();
        if (this._messageArr.indexOf(message) === -1) {
            this._messageArr.push(message);
        }
    }

    onRunReceiveMessaage(message) {
        message = message.toString();
        const idx = this._messages.indexOf(message);
        const isRun = idx !== -1;
        return isRun;
    }

    onAddReceiveMessage(app, device, block) {
        this._mqttService.init();
        this._mqttService.receive(async (res) => {
            const {
                message,
                value
            } = res;
            app.workspace.runBlocksInQueue(block.opcode, 10, () => {
                this._messages.push(message);
            }, () => {
                const idx = this._messages.indexOf(message);
                this._messages.splice(idx, 1);
            });
        });
    }

    onRemoveReceiveMessage() {
        this._messages = [];
        // this._mqttService.close();
    }

    onRunSendMessage(message) {
        message = message.toString();
        if (message) {
            return this._mqttService.publish(message);
        }
        return Promise.resolve();
    }

    onRunSendMessageValue(message, value) {
        message = message.toString();
        value = value === Infinity ? 'Infinity' : value;
        if (message) {
            return this._mqttService.publish(message, value);
        }
        return Promise.resolve();
    }

    onRunGetMessage(message) {
        const client = this._mqttService.client;
        if (!client || (client && !client.connected)) {
            this._mqttService.init();
        }
        message = message.toString();
        return this._mqttService.getValue(message);
    }

    getTopic() {
        return this._mqttService.topic;
    }

    async onLogin() {
        await this._mqttService.setTopic('');
        this._mqttService.subscribe('', true);
    }

    onLogout() {
        this._mqttService.unsubscribe();
    }

    destory() {
        // console.log('cloud destory');
        this._messages = [];
        this._mqttService.close();
    }
}

const cloudMessage = new CloudMessage();

const disableBlocks = {
    debug: [],
    upload: []
};

const mustLoginBlocks = [".SEND_USER_CLOUD_MSG", ".SEND_USER_CLOUD_MSG_VALUE", ".SEND_USER_CLOUD_MSG_WAIT", ".SEND_USER_CLOUD_MSG_VALUE_WAIT", ".WHEN_RECEIVE_USER_CLOUD_MSG", ".GET_USER_CLOUD_MSG_VALUE"];

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



class ExtUserCloudMessage {

    constructor() {
        this.funcs = {
            'SEND_USER_CLOUD_MSG': {
                onRun: async (args, app, device, block) => {
                    await cloudMessage.onRunSendMessage(args.message);
                }
            },
            'SEND_USER_CLOUD_MSG_VALUE': {
                onRun: async (args, app, device, block) => {
                    await cloudMessage.onRunSendMessageValue(args.message, args.value);
                }
            },
            'SEND_USER_CLOUD_MSG_WAIT': {
                onRun: async (args, app, device, block) => {
                    await cloudMessage.onRunSendMessage(args.message);
                }
            },
            'SEND_USER_CLOUD_MSG_VALUE_WAIT': {
                onRun: async (args, app, device, block) => {
                    await cloudMessage.onRunSendMessageValue(args.message, args.value);
                }
            },
            'WHEN_RECEIVE_USER_CLOUD_MSG': {
                onRun: (args, app, device, block) => {
                    return cloudMessage.onRunReceiveMessaage(args.message);
                },
                onAdd: (app, device, block) => {
                    cloudMessage.onAddReceiveMessage(app, device, block);
                },
                onRemove: (app, device, block) => {
                    cloudMessage.onRemoveReceiveMessage();
                }
            },
            'GET_USER_CLOUD_MSG_VALUE': {
                onRun: async (args, app, device, block) => {
                    return await cloudMessage.onRunGetMessage(args.message);
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            }
        };
    }

    getInfo() {
        return {
            "id": "user_cloud_message",
            "targets": [{
                "name": "sprites",
                "options": {
                    "upload": {}
                }
            }],
            "codeTypes": [
                "python"
            ],
            "version": "1.2.4",
            "platform": [
                "mblockpc",
                "mblockweb",
                "mblockapp"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "excludeBlocks": [],
            "generatorStartBlocks": [
                "WHEN_RECEIVE_USER_CLOUD_MSG"
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

export default ExtUserCloudMessage;