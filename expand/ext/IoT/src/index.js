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

const ioTCodeyUploadMiddlewareIot =
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
    async (app, device, code, params, logH, progessH) => {
        // check if iot code should be loaded
        let n = code.search(/import .*iot/);
        if (n === -1) {
            return code;
        }

        // process code here
        let iotService = app.getService('iot');
        let accountService = app.getService('account');
        if (iotService && accountService) {
            const cloudListDomain = await iotService.getDomain('cloudList');
            const weatherDomain = await iotService.getDomain('weather');
            const airDomain = await iotService.getDomain('air');
            const user = await accountService.getUserInfo();
            code = iotLibs() + code;
            const privateData = {
                uId: (user && user.uid) || '',
                deviceType: '1',
                deviceId: 'codey',
                iotCloudListDomain: cloudListDomain.replace('https', 'http') || '',
                iotWeatherDomain: weatherDomain.replace('https', 'http') || '',
                iotAirDomain: airDomain.replace('https', 'http') || ''
            };
            for (let key in privateData) {
                code = code.replace(new RegExp('\\[' + key + '\\]', 'g'), privateData[key]);
            }
        }
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

let isInternationalVersion;
if (window.navigator.userAgent.toLowerCase().includes('electron')) {
    isInternationalVersion = window.localStorage.InternationalVersion;
} else {
    isInternationalVersion = window.location.href.includes('mblock.cc');
}
let host = isInternationalVersion ? 'mblock.cc' : 'makeblock.com';
let url = {
    cityURL: (city) => `https://mweather.${host}/weatherSearch?city=${city}`,
    weatherURL: (woeid, type) => `https://mweather.${host}/getweather?woeid=${woeid}&type=${type}`,
    airCityURL: `https://msapi.${host}/air/search`,
    airURL: `https://msapi.${host}/air/getone`,
    airListURL: `https://msapi.${host}/air/arglist`
}
let _appContext = null;

function requestHttp(method, {
    url,
    header,
    data
}, callback) {
    let http = new XMLHttpRequest();
    http.open(method, url);
    if (method == 'GET') {
        http.send();
    } else if (method == 'POST') {
        header && header.forEach(item => {
            http.setRequestHeader(item[0], item[1]);
        });
        if (data) {
            http.setRequestHeader('Content-Type', 'application/json')
            http.send(JSON.stringify(data));
        } else {
            http.send();
        }
    } else {
        http.send();
    }

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            if (callback) {
                callback(http.responseText);
            }
        } else if (http.status != 200) {
            if (callback) {
                callback("");
            }
        }

    }
}

function getCity(city) {
    return new Promise(resolve => {
        requestHttp('GET', {
            url: url.cityURL(city)
        }, (result) => {
            resolve(JSON.parse(result));
        });

    })
}

function getWeather(woeid, type) {
    if (woeid === '' || woeid == null || isNaN(woeid)) {
        return "";
    }
    return new Promise(resolve => {
        requestHttp('GET', {
            url: url.weatherURL(woeid, type)
        }, result => {
            resolve(result);
        });
    });
}

function getCityAndWeather(city, type) {
    return getCity(city).then(data => {
        let woeid = JSON.parse(data)[0]['woeid'];
        return getWeather(woeid, type);
    })
}

function getAirCityData(city) {
    return new Promise(resolve => {
        requestHttp('POST', {
            url: url.airCityURL,
            data: {
                searchkey: city
            }
        }, result => {
            resolve(JSON.parse(result).data);
        });
    })
}

function getAirQuality(cityID, type) {
    if (cityID === '' || cityID == null || isNaN(cityID)) {
        return "";
    }
    return new Promise(resolve => {
        requestHttp('POST', {
            url: url.airURL,
            data: {
                cid: cityID,
                arg: type
            }
        }, result => {
            resolve(result);
        });
    });
}

function getAirList(cityID) {
    if (cityID === '' || cityID == null || isNaN(cityID)) {
        return "";
    }
    return new Promise(resolve => {
        requestHttp('POST', {
            url: url.airListURL,
            data: {
                cid: cityID
            }
        }, result => {
            resolve(result);
        });
    });
}
let optionsMap = {};
const DialogWidget = async (widget, name, title, getOptions) => {
    let requestTimer = undefined;
    let valueMap = widget.valueMap_;
    if (!(valueMap instanceof Array)) {
        valueMap = ['', ''];
    }

    const service = _appContext.getService('system.ui');
    return await service.dialog(name, {
        title,
        width: '340px',
        fields: [{
            id: name,
            label: null,
            type: 'select',
            options: optionsMap[name],
            value: valueMap[0] || '',
            props: {
                // mode: 'combobox',
                showSearch: true,
                autoFocus: true,
                placeholder: 'search wifi',
                filterOption: false,
                // defaultActiveFirstOption: false,
                // notFoundContent: null,
                onBlur: (value) => {
                    if (!value) {
                        return;
                    }
                },
                onSelect: (value, resetValue) => {
                    if (!value) {
                        return;
                    }
                    if (typeof resetValue === 'function') {
                        resetValue(value);
                    }
                },
                onFocus: () => {},
                onSearch: (value, resetOptions) => {
                    if (!value) {
                        return;
                    }
                    if (requestTimer) {
                        clearTimeout(requestTimer);
                        requestTimer = null;
                    }
                    requestTimer = setTimeout(async () => {
                        try {
                            const soptions = await getOptions(value);
                            if (soptions.length > 0) {
                                resetOptions(soptions);
                                optionsMap[name] = soptions;
                            }
                        } catch (error) {
                            console.warn(error)
                        }
                    }, 300);
                }
            }
        }],
        buttons: [{
                id: 'cancel',
                type: 'default',
                text: 'BUTTON.CANCEL.TEXT',
                style: {
                    flex: 'auto'
                },
                handle: (ctx) => {
                    ctx.close();
                }
            },
            {
                id: 'ok',
                text: 'BUTTON.OK.TEXT',
                style: {
                    flex: 'auto'
                },
                handle: (ctx) => {
                    const value = ctx.values[name];
                    const options = optionsMap[name];
                    if (value && options && options.length > 0) {
                        for (const key in options) {
                            const option = options[key];
                            if (option.value === value) {
                                widget.setValue([option.text, option.value]);
                                break;
                            }
                        }
                    }
                    ctx.close();
                }
            }
        ]
    });
};


const iotLibs = function() {
    return `
#common functions
def mb_safe(func):
    def _wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            print('===== mb_safe: ' + str(e))
            return ''
    return _wrapper

#create iot module
import uos
uos.chdir('/flash/flash')
with open("iot.py", "w") as f:
    f.write("")

import ujson
import iot
import time
import codey
import urequests
# from codey_wlan_board import codey_wlan

# 云列表请求 域名
iot_list_request_domain = '[iotCloudListDomain]'
iot_weather_request_domin = '[iotWeatherDomain]';
iot_air_request_domain = '[iotAirDomain]';

def __iot_get_request_header():
    return {
        'content-type': 'application/json; charset=utf-8',
        'uid': '[uId]',
        'devicetype': '[deviceType]',
        'deviceid': '[deviceId]'
    }

def __iot_get(request_url):
    if not codey.wifi.is_connected():
        return ''
    res = urequests.request('GET', request_url, headers = __iot_get_request_header()).json()
    return res['data']

def __iot_post(request_url, post_data):
    if not codey.wifi.is_connected():
        return ''
    res = urequests.request('POST', request_url, headers = __iot_get_request_header(), data = post_data).json()
    return res['data']

# 添加数据项
@mb_safe
def iot_list_add(name, data):
    post_data = ujson.dumps({ "listName": name, "data": data})
    return __iot_post(iot_list_request_domain + 'meos/postcloudlist', post_data)

iot.list_add = iot_list_add

# 得到 index 指向数据项
@mb_safe
def iot_list_index(name, index):
    req_type = 'index'
    req_index = 0
    if index == 'random':
        req_type = 'random'
    elif index == 'last':
        req_type = 'last'
    else:
        index = int(index)
        if index > 0:
            req_index = index - 1
        else:
            return ''
    res = __iot_get(iot_list_request_domain + 'meos/getCloudListItemByIndex?listName=' + name + '&type=' + req_type + '&index=' + str(req_index))
    return res['itemData']['data']

iot.list_index = iot_list_index

# 获取云列表长度
@mb_safe
def iot_list_length(name):
    res = __iot_get(iot_list_request_domain + 'meos/getcloudlistlen?listName=' + name)
    return int(res['listLen'])

iot.list_length = iot_list_length

# 获取天气信息想
#   city_code: 城市编码
#   data_type: 获取数据类型
@mb_safe
def iot_weather(city_code, data_type):
    if not codey.wifi.is_connected():
        return ''
    request_url = iot_weather_request_domin + 'getweather?woeid=' + str(city_code) + '&type=' + str(data_type)
    res = urequests.request('GET', request_url)
    text = res.text
    if int(data_type) <= 3:
        return int(text)
    return text
iot.weather = iot_weather

# 获取空气信息
#   cid: 检查站id
#   arg: 需要查询的信息（pm25, so2等）
@mb_safe
def iot_air(cid, arg):
    if not codey.wifi.is_connected():
        return ''
    post_data = ujson.dumps({ "cid": cid, "arg": arg})
    res = urequests.request('POST', iot_air_request_domain + 'air/getone', headers = __iot_get_request_header(), data = post_data)
    text = res.text
    return float(text)
iot.air = iot_air
`;
}


const disableBlocks = {
    debug: ["iot.iot_connect_network_new", "iot.iot_if_connect_network", "iot.iot_weather", "iot.iot_air", "iot.iot_sun", "iot.data_addtolist_cloudlist", "iot.data_itemoflist_cloudlist", "iot.data_lengthoflist_cloudlist", "iot.codey_wifi_user_broadcast", "iot.codey_wifi_user_broadcast_with_value", "iot.codey_wifi_when_user_broadcast", "iot.codey_wifi_user_broadcast_value"],
    upload: []
};

const mustLoginBlocks = [".codey_wifi_user_broadcast", ".codey_wifi_user_broadcast_with_value", ".codey_wifi_when_user_broadcast", ".codey_wifi_user_broadcast_value"];

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



class ExtIoT {

    constructor() {
        this.funcs = {
            'iotConnectNetworkNewCodesCode': (args) => {
                let ssid = args.SSID;
                return `codey.wifi.start(${ssid}, ${args.PASSWORD}, codey.wifi.STA)`
            },
            'iot_connect_network_new': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'iot_if_connect_network': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'customWidget41F1F086': (widget) => {
                const getOptions = async (value) => {
                    const data = await getCity(value);
                    if (data instanceof Array) {
                        const options = data.map((item) => {
                            return {
                                text: item.name.toString(),
                                value: item.woeid.toString()
                            };
                        });
                        return options;
                    }
                    return [];
                };

                widget.showEditor_ = () => {
                    DialogWidget(widget, 'weatherDialog', 'iot.CHOOSE_CITY', getOptions);
                }
            },
            'iotWeatherCodesCode': (args) => {
                let LOCATION = JSON.parse(args.LOCATION)[1]
                return `iot.weather('${LOCATION}', '${args.WEATHER_TYPE}')`
            },
            'iot_weather': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'customWidget32649Bd3': (widget) => {
                const getOptions = async (value) => {
                    const data = await getAirCityData(value);
                    if (data instanceof Array) {
                        const options = data.map((item) => {
                            return {
                                text: item.name.toString(),
                                value: item.cid.toString()
                            };
                        });
                        return options;
                    }
                    return [];
                };

                widget.showEditor_ = () => {
                    DialogWidget(widget, 'airDialog', 'iot.METEOROLOGICAL', getOptions);
                }
            },
            'iotAirCodesCode': (args) => {
                let LOCATION = JSON.parse(args.LOCATION)[1]
                return `iot.air('${LOCATION}', '${args.WEATHER_TYPE}')`
            },
            'iot_air': {
                onRun: async (args, app, device, block) => {

                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'iotSunCodesCode': (args) => {
                let options = {
                    'sunrise_time': 6,
                    'sunrise_h': 7,
                    'sunrise_i': 8,
                    'sunset_time': 9,
                    'sunset_h': 10,
                    'sunset_i': 11
                };
                let city_code = `'${JSON.parse(args.LOCATION)[1]}'`;
                let data_type = options[`${args.WEATHER_TYPE}_${args.TIME}`];
                let code = `iot.weather(${city_code}, ${data_type})`;
                return code;
            },
            'iot_sun': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'customWidgetD674D79B': (widget) => {
                const getOptions = async (value) => {

                    return [{
                        text: value,
                        value: value
                    }]
                };

                widget.showEditor_ = () => {
                    DialogWidget(widget, 'airlistDialog', 'iot.CLOUDLIST', getOptions, true);
                }
            },
            'dataAddtolistCloudlistCodesCode': (args) => {
                let arg1 = args.VALUE;
                let arg2;
                try {
                    arg2 = JSON.parse(args.CLOUD_VARIABLE)[1];
                } catch (e) {
                    arg2 = args.CLOUD_VARIABLE;
                }

                let isNumberString = function(str) {
                    const numberReg = /^\'(-?\d*)(\.\d+)?\'$/;
                    const spaceReg = /^\'\s*\'$/;
                    return numberReg.test(str) || spaceReg.test(str);
                };
                if (isNumberString(arg1)) {
                    arg1 = arg1.substr(1, arg1.length - 2);
                    if (arg1 === '') {
                        arg1 = "''";
                    }
                }
                return `iot.list_add('${arg2}', ${arg1})`;
            },
            'data_addtolist_cloudlist': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'dataItemoflistCloudlistCodesCode': (args) => {
                let arg1 = args.VALUE;
                let arg2;
                try {
                    arg2 = JSON.parse(args.CLOUD_VARIABLE)[1];
                } catch (e) {
                    arg2 = args.CLOUD_VARIABLE;
                }
                if (arg1 === 'last' || arg1 === 'random') {
                    arg1 = `'${arg1}'`;
                }
                return `iot.list_index('${arg2}', ${arg1})`;
            },
            'data_itemoflist_cloudlist': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'dataLengthoflistCloudlistCodesCode': (args) => {
                let arg;
                try {
                    arg = JSON.parse(args.CLOUD_VARIABLE)[1];
                } catch (e) {
                    arg = args.CLOUD_VARIABLE;
                }
                return `iot.list_length('${arg}')`
            },
            'data_lengthoflist_cloudlist': {
                onRun: (args, app, device, block) => {
                    // TODO
                },
                onMonitor: (app, device, block) => {
                    // TODO
                }
            },
            'customWidget8Dbf8Cd4': (widget) => {
                const getOptions = async (value) => {

                    /* const data = await mbapi.IotService.get_wifi_list();
                    if (data instanceof Array && data.length > 0) {
                        return data;
                    } 
                    else return [];*/
                    /* let data;
                    try {
                        const mbapi = window.MbApi;
                        data = await mbapi.IotService.get_wifi_list();
                    } catch (error) {
                        console.warn(error);
                    }
                    if (data) {
                        return data.map((item, index) => {
                            return { text: item.ssid, value: item.ssid }
                        })
                    } else {
                        return [{ text: value, value: value }]
                    } */
                    return [{
                        text: value,
                        value: value
                    }]

                };
                widget.showEditor_ = () => {
                    DialogWidget(widget, 'SSIDDialog', 'iot.WIRELESS', getOptions, true);
                }
            },
            'iotConnectNetworkCodesCode': (args) => {
                let ssid = JSON.parse(args.SSID)[1]
                return `codey.wifi.start('${ssid}', ${args.PASSWORD}, codey.wifi.STA)`
            },
            'iot_connect_network': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'codeyWifiUserBroadcastCodesLib': (args) => {
                return `codey.cloud_message.start('{TOPIC}')`;
            },
            'codey_wifi_user_broadcast': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'codeyWifiUserBroadcastWithValueCodesLib': (args) => {
                return `codey.cloud_message.start('{TOPIC}')`;
            },
            'codey_wifi_user_broadcast_with_value': {
                onRun: (args, app, device, block) => {
                    // TODO
                }
            },
            'codeyWifiWhenUserBroadcastCodesLib': (args) => {
                return `codey.cloud_message.start('{TOPIC}')`;
            },
            'codey_wifi_when_user_broadcast': {
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
            'codeyWifiUserBroadcastValueCodesLib': (args) => {
                return `codey.cloud_message.start('{TOPIC}')`;
            },
            'codey_wifi_user_broadcast_value': {
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
            "id": "IoT",
            "targets": [{
                "name": "codey",
                "options": {
                    "upload": {
                        "middlewares": [{
                            "name": "iot",
                            "func": ioTCodeyUploadMiddlewareIot
                        }]
                    }
                }
            }],
            "codeTypes": [
                "python"
            ],
            "version": "0.4.5",
            "platform": [
                "mblockpc",
                "mblockweb",
                "mblockapp"
            ],
            "categories": cates(facepanels),
            "generators": extGenerators,
            "translationMap": extTranslationMap,
            "snippets": codeSnippets,
            "generatorStartBlocks": [
                "codey_wifi_when_user_broadcast"
            ],
            "feature": [],
            "mustLoginBlocks": [
                ".codey_wifi_user_broadcast",
                ".codey_wifi_user_broadcast_with_value",
                ".codey_wifi_when_user_broadcast",
                ".codey_wifi_user_broadcast_value"
            ],
            "disabledOffline": [],
            "disabledOnline": [
                "iot.iot_connect_network_new",
                "iot.iot_if_connect_network",
                "iot.iot_weather",
                "iot.iot_air",
                "iot.iot_sun",
                "iot.data_addtolist_cloudlist",
                "iot.data_itemoflist_cloudlist",
                "iot.data_lengthoflist_cloudlist",
                "iot.codey_wifi_user_broadcast",
                "iot.codey_wifi_user_broadcast_with_value",
                "iot.codey_wifi_when_user_broadcast",
                "iot.codey_wifi_user_broadcast_value"
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

export default ExtIoT;