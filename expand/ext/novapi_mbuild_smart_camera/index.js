(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.unknown = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  !function (global) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
    var runtime = global.regeneratorRuntime;

    if (runtime) {
      if (inModule) {
        module.exports = runtime;
      }

      return;
    }

    runtime = global.regeneratorRuntime = inModule ? module.exports || {} : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    runtime.wrap = wrap;

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
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

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    runtime.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    runtime.AsyncIterator = AsyncIterator;

    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
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
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        return info;
      }

      context.delegate = null;
      return ContinueSentinel;
    }

    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator";

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse();
      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    runtime.values = values;

    function doneResult() {
      return {
        value: undefined,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
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
              this[name] = undefined;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }(function () {
    return this || (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self;
  }() || Function("return this")());
  var OnlineProtocol = undefined;

  var delay = function delay(t) {
    return new Promise(function (res) {
      return setTimeout(function () {
        return res();
      }, t);
    });
  };

  function updateShareDatas() {
    OnlineProtocol = window.novapi_online_operation;
  }

  function syncShareDatasFromDevice() {
    var interval_handler = setInterval(function () {
      console.log(window.novapi_online_operation);

      if (window.novapi_online_operation != undefined) {
        clearInterval(interval_handler);
        updateShareDatas();
      }
    }, 500);
  }

  syncShareDatasFromDevice();
  var disableBlocks = {
    debug: [],
    upload: []
  };
  var mustLoginBlocks = [];

  var triggerBlocksStatus = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(mode, app) {
      var _app$workspace, _app$workspace2, _app$workspace3, _app$workspace4, _app$workspace5, _app$workspace6, service, isLogin, _app$workspace7;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(app && app.workspace)) {
                _context.next = 8;
                break;
              }

              if (mode === 'debug') {
                (_app$workspace = app.workspace).enableBlocks.apply(_app$workspace, _toConsumableArray(disableBlocks.upload));

                (_app$workspace2 = app.workspace).disableBlocks.apply(_app$workspace2, _toConsumableArray(disableBlocks.debug));
              } else if (mode === 'upload') {
                (_app$workspace3 = app.workspace).enableBlocks.apply(_app$workspace3, _toConsumableArray(disableBlocks.debug));

                (_app$workspace4 = app.workspace).disableBlocks.apply(_app$workspace4, _toConsumableArray(disableBlocks.upload));
              } else {
                (_app$workspace5 = app.workspace).enableBlocks.apply(_app$workspace5, _toConsumableArray(disableBlocks.upload));

                (_app$workspace6 = app.workspace).enableBlocks.apply(_app$workspace6, _toConsumableArray(disableBlocks.debug));
              }

              service = app.getService('account');
              _context.next = 6;
              return service.isLogin();

            case 6:
              isLogin = _context.sent;

              if (!isLogin) {
                (_app$workspace7 = app.workspace).disableBlocks.apply(_app$workspace7, mustLoginBlocks);
              }

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.warn(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function triggerBlocksStatus(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var ExtImpl = function ExtImpl() {
    _classCallCheck(this, ExtImpl);
  };

  var extTranslationMap = {
    "zh": {
      "novapi_mbuild_smart_camera": "视觉模块",
      "extensionName": "视觉模块",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "接口1",
      "SMART_CAMERA_INIT_1_PORT_1": "接口2",
      "SMART_CAMERA_INIT_1_PORT_2": "接口3",
      "SMART_CAMERA_INIT_1_PORT_3": "接口4",
      "SMART_CAMERA_INIT_1_PORT_4": "接口5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "初始化视觉模块 [NUM] ： 位于 [PORT] 第 [INDEX]  个",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "视觉模块 [NUM]  切换到色块识别模式 ",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "视觉模块 [NUM] 开始学习色块 [SIG] 直到按钮被按下",
      "SMART_CAMERA_DETECT_CCC": "视觉模块 [NUM]  识别到色块 [SIG] ？",
      "SMART_CAMERA_LOCATION_LOCATION_0": "中央",
      "SMART_CAMERA_LOCATION_LOCATION_1": "上方",
      "SMART_CAMERA_LOCATION_LOCATION_2": "下方",
      "SMART_CAMERA_LOCATION_LOCATION_3": "左边",
      "SMART_CAMERA_LOCATION_LOCATION_4": "右边",
      "SMART_CAMERA_LOCATION": "视觉模块 [NUM]   识别到色块 [SIG] 位于画面 [LOCATION] ？",
      "SMART_CAMERA_VALUE_TYPE_0": "x 坐标",
      "SMART_CAMERA_VALUE_TYPE_1": "y 坐标",
      "SMART_CAMERA_VALUE_TYPE_2": "宽度",
      "SMART_CAMERA_VALUE_TYPE_3": "高度",
      "SMART_CAMERA_VALUE": "视觉模块 [NUM]  识别到色块 [SIG] 的 [TYPE] ",
      "SMART_CAMERA_SET_LED_TYPE_0": "打开",
      "SMART_CAMERA_SET_LED_TYPE_1": "关闭",
      "SMART_CAMERA_SET_LED": "视觉模块 [NUM]   [TYPE] 补光灯",
      "SMART_CAMERA_RESET": "视觉模块 [NUM] 重置白平衡",
      "smart_camera_ccc_for_novapi": "视觉模块色块识别",
      "SMART_CAMERA_INIT_2": "初始化视觉模块 [NUM] ： 位于 [PORT] 第 [INDEX]  个",
      "SMART_CAMERA_CHANGE_LINE": "视觉模块 [NUM] 切换到 线/条码 追踪模式",
      "BLOCK_25650950268712_LABEL_0": "(1) 前进",
      "BLOCK_25650950268712_LABEL_1": "(2) 后退",
      "BLOCK_25650950268712_LABEL_2": "(3) 左转",
      "BLOCK_25650950268712_LABEL_3": "(4) 右转",
      "BLOCK_25650950268712_LABEL_4": "(5) 停止",
      "BLOCK_25650950268712_LABEL_5": "(6) 加号",
      "BLOCK_25650950268712_LABEL_6": "(7) 减号",
      "BLOCK_25650950268712_LABEL_7": "(8) 问号",
      "BLOCK_25650950268712_LABEL_8": "(9) 红心",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "视觉模块 [NUM]  检测到条码 [LABEL] ？",
      "BLOCK_25650950268713_LABEL_0": "(1) 前进",
      "BLOCK_25650950268713_LABEL_1": "(2) 后退",
      "BLOCK_25650950268713_LABEL_2": "(3) 左转",
      "BLOCK_25650950268713_LABEL_3": "(4) 右转",
      "BLOCK_25650950268713_LABEL_4": "(5) 停止",
      "BLOCK_25650950268713_LABEL_5": "(6) 加号",
      "BLOCK_25650950268713_LABEL_6": "(7) 减号",
      "BLOCK_25650950268713_LABEL_7": "(8) 问号",
      "BLOCK_25650950268713_LABEL_8": "(9) 红心",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "视觉模块 [NUM] 检测到条码 [LABEL] 的 [COORD] 坐标",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "起始 x 坐标",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "起始 y 坐标",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "终点 x 坐标",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "终点 y 坐标",
      "SMART_CAMERA_GET_LINE_VALUE": "视觉模块 [NUM] 当前所在线段的 [TYPE] ",
      "SMART_CAMERA_DETECT_CROSS": "视觉模块 [NUM] 检测到交叉点？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x坐标",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y坐标",
      "SMART_CAMERA_GET_CROSS_VALUE": "视觉模块 [NUM] 检测到交叉点的 [TYPE]",
      "BLOCK_25650950268718": "视觉模块 [NUM]  检测到岔路的数量",
      "BLOCK_25650950268719": "视觉模块 [NUM] 检测到第 [sn] 个岔路的角度",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "浅底深线",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "深底浅线",
      "SMART_CAMERA_SET_LINE_MODE": "视觉模块 [NUM] 设置线追踪模式为 [LINEMODE] ",
      "smart_camera_line_for_novapi": "视觉模块线/条码追踪",
      "SMART_CAMERA_INIT_3": "初始化视觉模块 [NUM] ： 位于 [PORT] 第 [INDEX]  个",
      "SMART_CAMERA_SET_KP": "视觉模块 [NUM] 设置电机差速计算系数 Kp 为 [KP] ",
      "SMART_CAMERA_DIFF_SPEED_CCC": "视觉模块 [NUM] 计算电机差速值 (自动跟随色块 [SIG]至 [AXIS] 轴 [TARGET] ）",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "视觉模块 [NUM] 计算电机差速值 (自动跟随条形码 [LABEL]至 [AXIS] 轴 [TARGET] ）",
      "SMART_CAMERA_DIFF_SPEED_LINE": "视觉模块 [NUM] 计算电机差速值 (对准巡线线段）",
      "SMART_CAMERA_IS_LOCK_CCC": "视觉模块 [NUM] 锁定色块 [SIG] 到 [AXIS] 轴 [TARGET]  附近?",
      "SMART_CAMERA_IS_LOCK_LABEL": "视觉模块 [NUM] 锁定条形码 [LABEL] 到 [AXIS] 轴 [TARGET] 附近?",
      "smart_camera_makex_for_novapi": "视觉模块赛事专用"
    },
    "en": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "de": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "es": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "fr": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "id": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "ja": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "ja-jph": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "ko": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "pl": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "uk": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "zh-hant": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "nl": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "it": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "hr": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "ru": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "pt": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "fi": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "tr": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "tk": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "ca": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "cs": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "fa": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    },
    "vi": {
      "novapi_mbuild_smart_camera": "Smart Camera",
      "extensionName": "Smart Camera",
      "extensionDescription": "",
      "SMART_CAMERA_INIT_1_NUM_0": "1",
      "SMART_CAMERA_INIT_1_NUM_1": "2",
      "SMART_CAMERA_INIT_1_NUM_2": "3",
      "SMART_CAMERA_INIT_1_NUM_3": "4",
      "SMART_CAMERA_INIT_1_NUM_4": "5",
      "SMART_CAMERA_INIT_1_NUM_5": "6",
      "SMART_CAMERA_INIT_1_NUM_6": "7",
      "SMART_CAMERA_INIT_1_NUM_7": "8",
      "SMART_CAMERA_INIT_1_PORT_0": "port1",
      "SMART_CAMERA_INIT_1_PORT_1": "port2",
      "SMART_CAMERA_INIT_1_PORT_2": "port3",
      "SMART_CAMERA_INIT_1_PORT_3": "port4",
      "SMART_CAMERA_INIT_1_PORT_4": "port5",
      "SMART_CAMERA_INIT_1_INDEX_0": "1",
      "SMART_CAMERA_INIT_1_INDEX_1": "2",
      "SMART_CAMERA_INIT_1_INDEX_2": "3",
      "SMART_CAMERA_INIT_1_INDEX_3": "4",
      "SMART_CAMERA_INIT_1_INDEX_4": "5",
      "SMART_CAMERA_INIT_1_INDEX_5": "6",
      "SMART_CAMERA_INIT_1": "initialize smart camera [NUM]: numbered[PORT]at [INDEX]",
      "SMART_CAMERA_CHANGE_CCC_NUM_0": "1",
      "SMART_CAMERA_CHANGE_CCC_NUM_1": "2",
      "SMART_CAMERA_CHANGE_CCC_NUM_2": "3",
      "SMART_CAMERA_CHANGE_CCC_NUM_3": "4",
      "SMART_CAMERA_CHANGE_CCC": "smart camera [NUM]switch to color block detection mode",
      "SMART_CAMERA_START_LEARN_CCC_SIG_0": "1",
      "SMART_CAMERA_START_LEARN_CCC_SIG_1": "2",
      "SMART_CAMERA_START_LEARN_CCC_SIG_2": "3",
      "SMART_CAMERA_START_LEARN_CCC_SIG_3": "4",
      "SMART_CAMERA_START_LEARN_CCC_SIG_4": "5",
      "SMART_CAMERA_START_LEARN_CCC_SIG_5": "6",
      "SMART_CAMERA_START_LEARN_CCC_SIG_6": "7",
      "SMART_CAMERA_START_LEARN_CCC": "smart camera [NUM] starts learning color block [SIG] until button pressed",
      "SMART_CAMERA_DETECT_CCC": "smart camera[NUM] detected color block[SIG]?",
      "SMART_CAMERA_LOCATION_LOCATION_0": "center",
      "SMART_CAMERA_LOCATION_LOCATION_1": "upper",
      "SMART_CAMERA_LOCATION_LOCATION_2": "bottom",
      "SMART_CAMERA_LOCATION_LOCATION_3": "left",
      "SMART_CAMERA_LOCATION_LOCATION_4": "right",
      "SMART_CAMERA_LOCATION": "smart camera [NUM] detected color block [SIG] at[LOCATION] of the image？",
      "SMART_CAMERA_VALUE_TYPE_0": "x-coordinate",
      "SMART_CAMERA_VALUE_TYPE_1": "y-coordinate",
      "SMART_CAMERA_VALUE_TYPE_2": "width",
      "SMART_CAMERA_VALUE_TYPE_3": "height",
      "SMART_CAMERA_VALUE": "smart camera[NUM] detected [TYPE]of color block [SIG]",
      "SMART_CAMERA_SET_LED_TYPE_0": "open",
      "SMART_CAMERA_SET_LED_TYPE_1": "close",
      "SMART_CAMERA_SET_LED": "smart camera [NUM][TYPE] fill light",
      "SMART_CAMERA_RESET": "smart camera [NUM] resets white balance",
      "smart_camera_ccc_for_novapi": "Color Block Detect",
      "SMART_CAMERA_INIT_2": "initialize smart camera [NUM]: numbered[INDEX] at [PORT]",
      "SMART_CAMERA_CHANGE_LINE": "smart camera [NUM] switch to line/label tracking mode",
      "BLOCK_25650950268712_LABEL_0": "(1) forward",
      "BLOCK_25650950268712_LABEL_1": "(2) backward",
      "BLOCK_25650950268712_LABEL_2": "(3) turn left",
      "BLOCK_25650950268712_LABEL_3": "(4) turn right",
      "BLOCK_25650950268712_LABEL_4": "(5) stop",
      "BLOCK_25650950268712_LABEL_5": "(6)plus sign",
      "BLOCK_25650950268712_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268712_LABEL_7": "(8) question mark",
      "BLOCK_25650950268712_LABEL_8": "(9) red heart",
      "BLOCK_25650950268712_LABEL_9": "(10) A",
      "BLOCK_25650950268712_LABEL_10": "(11) B",
      "BLOCK_25650950268712_LABEL_11": "(12) C",
      "BLOCK_25650950268712_LABEL_12": "(13) ①",
      "BLOCK_25650950268712_LABEL_13": "(14) ②",
      "BLOCK_25650950268712_LABEL_14": "(15) ③",
      "BLOCK_25650950268712": "smart camera [NUM]detectedlabel [LABEL]？",
      "BLOCK_25650950268713_LABEL_0": "(1) forward",
      "BLOCK_25650950268713_LABEL_1": "(2) backward",
      "BLOCK_25650950268713_LABEL_2": "(3) turn left",
      "BLOCK_25650950268713_LABEL_3": "(4) turn right",
      "BLOCK_25650950268713_LABEL_4": "(5) stop",
      "BLOCK_25650950268713_LABEL_5": "(6) plus sign",
      "BLOCK_25650950268713_LABEL_6": "(7) minus sign",
      "BLOCK_25650950268713_LABEL_7": "(8) question mark",
      "BLOCK_25650950268713_LABEL_8": "(9) red heart",
      "BLOCK_25650950268713_LABEL_9": "(10) A",
      "BLOCK_25650950268713_LABEL_10": "(11) B",
      "BLOCK_25650950268713_LABEL_11": "(12) C",
      "BLOCK_25650950268713_LABEL_12": " (13) ①",
      "BLOCK_25650950268713_LABEL_13": "(14) ②",
      "BLOCK_25650950268713_LABEL_14": "(15) ③",
      "BLOCK_25650950268713_COORD_0": "x",
      "BLOCK_25650950268713_COORD_1": "y",
      "BLOCK_25650950268713": "smart camera[NUM] detected label [LABEL]'s [COORD] coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_0": "start's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_1": "start's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_2": "end's x coordinate",
      "SMART_CAMERA_GET_LINE_VALUE_TYPE_3": "end's y coordinate",
      "SMART_CAMERA_GET_LINE_VALUE": "smart camera [NUM] current line's [TYPE]",
      "SMART_CAMERA_DETECT_CROSS": "smart camera[NUM] detected cross-point？",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0": "x coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1": "y coordinate",
      "SMART_CAMERA_GET_CROSS_VALUE": "smart camera[NUM]detected cross point's [TYPE]",
      "BLOCK_25650950268718": "smart camera [NUM] number of branch roads detected",
      "BLOCK_25650950268719": "smart camera  [NUM]  [sn]-numbered branch road's angle",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0": "dark line on light background",
      "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1": "light line on dark background",
      "SMART_CAMERA_SET_LINE_MODE": "smart camera[NUM]sets line tracking mode to [LINEMODE]",
      "smart_camera_line_for_novapi": "Line/label Tracking",
      "SMART_CAMERA_INIT_3": "initialize smart camera[NUM]: numbered [INDEX] at[PORT]",
      "SMART_CAMERA_SET_KP": "smart camera[NUM] sets Kp in motor differential speed calculation to[KP]",
      "SMART_CAMERA_DIFF_SPEED_CCC": "smart camera  [NUM] calculates motor differential speed (auto follows color block[SIG] to [AXIS]  axis[TARGET] )",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0": "1",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1": "2",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2": "3",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3": "4",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4": "5",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5": "6",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6": "7",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7": "8",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8": "9",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9": "10",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10": "11",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11": "12",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12": "13",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13": "14",
      "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14": "15",
      "SMART_CAMERA_DIIF_SPEED_LABEL": "smart camera[NUM] calculates motor differential speed (auto follows label [LABEL] to[AXIS]  axis [TARGET])",
      "SMART_CAMERA_DIFF_SPEED_LINE": "smart camera [NUM] calculates motor differential speed(targets the line-following section)",
      "SMART_CAMERA_IS_LOCK_CCC": "smart camera[NUM] targets area near color block [SIG] to [AXIS]axis[TARGET] ?",
      "SMART_CAMERA_IS_LOCK_LABEL": "smart camera [NUM]targets area near label[LABEL] to [AXIS]axis[TARGET] ?",
      "smart_camera_makex_for_novapi": "Event-specific Smart Camera"
    }
  };
  var codeSnippets = {
    python: {}
  };
  var extGenerators = [{
    lang: 'python',
    template: "# codes make you happy\nimport novapi\n### from #$$\n### import #$$\n\n###\n# initialize variables\n###{\n  (this.$ALL_VARIABLES.length == 0)?undefined:this.$ALL_VARIABLES.map(n => n + ' = 0').join('\\n')\n}#$$\n#$$\n\n# new class\n### new_class #$$\n\n### lib #$$\n\n### code #$$\n###\nwhile True:\n  # every tick\n  ### loop #$$\n#$$",
    splitor: {
      frame: {
        left: '###',
        right: '#$$'
      },
      expression: {
        left: '{',
        right: '}'
      }
    },
    reducers: [{
      name: 'import',
      reduce: function reduce(codes) {
        var codes1 = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = codes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var code = _step.value;
            var codeStr = '';

            if (typeof code === 'string') {
              codeStr = code;
            } else if (typeof code === 'function') {
              codeStr = code();
            }

            if (codes1.indexOf(codeStr) === -1) {
              codes1.push(codeStr);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (codes1.length == 0) {
          return undefined;
        }

        return 'import ' + codes1.join(', ');
      }
    }]
  }];
  var extSources = {
    arduino: []
  };
  var extFacePanels = {};
  var ExtHandler = {
    onLoad: function onLoad(app, target) {
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var account, isLogin, _app$workspace8;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                account = app.getService('account');

                if (!account) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return account.isLogin();

              case 4:
                isLogin = _context2.sent;

                if (!isLogin) {
                  (_app$workspace8 = app.workspace).disableBlocks.apply(_app$workspace8, mustLoginBlocks);
                }

                account.onLogin(function () {
                  var _app$workspace9;

                  (_app$workspace9 = app.workspace).enableBlocks.apply(_app$workspace9, mustLoginBlocks);
                });
                account.onLogout(function () {
                  var _app$workspace10;

                  (_app$workspace10 = app.workspace).disableBlocks.apply(_app$workspace10, mustLoginBlocks);
                });

              case 8:
                if (target && typeof target.isUploadMode === 'function') {
                  triggerBlocksStatus(target.isUploadMode() ? 'upload' : 'debug', app);
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onUnload: function onUnload(app, target) {},
    onConnect: function onConnect(app, device) {},
    onDisconnect: function onDisconnect(app, device) {},
    onStopAll: function onStopAll(app, device) {},
    beforeChangeUploadMode: function beforeChangeUploadMode(app, device) {
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", true);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    beforeChangeDebugMode: function beforeChangeDebugMode(app, device) {
      return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", true);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    afterChangeUploadMode: function afterChangeUploadMode(app, device) {
      triggerBlocksStatus('upload', app, device);
      return true;
    },
    afterChangeDebugMode: function afterChangeDebugMode(app, device) {
      triggerBlocksStatus('debug', app, device);
      return true;
    },
    onSelect: function onSelect(app, device) {
      setTimeout(function () {
        triggerBlocksStatus(device.isUploadMode() ? 'upload' : 'debug', app, device);
      }, 0);
    },
    onUnselect: function onUnselect(app, device) {
      triggerBlocksStatus('', app, device);
    },
    beforeCodeUpload: function beforeCodeUpload(app, device) {},
    afterCodeUpload: function afterCodeUpload(app, device) {},
    onRead: function onRead(app, device) {}
  };

  var ExtNovapiMbuildSmartCamera = function () {
    function ExtNovapiMbuildSmartCamera() {
      _classCallCheck(this, ExtNovapiMbuildSmartCamera);

      this.checkFirmwareInForce = typeof checkFirmwareInForce !== 'undefined' ? checkFirmwareInForce : false;
      this.funcs = {
        'SMART_CAMERA_INIT_1': {
          onRun: function () {
            var _onRun = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "from mbuild.smart_camera import smart_camera_class\nsmart_camera_".concat(args.NUM, " = smart_camera_class(\"").concat(args.PORT, "\", \"").concat(args.INDEX, "\")");
                      _context5.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function onRun(_x3, _x4, _x5, _x6) {
              return _onRun.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_CHANGE_CCC': {
          onRun: function () {
            var _onRun2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "smart_camera_".concat(args.NUM, ".set_mode(\"color\")");
                      _context6.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                      _context6.next = 6;
                      return delay(200);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            function onRun(_x7, _x8, _x9, _x10) {
              return _onRun2.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_START_LEARN_CCC': {
          onRun: function () {
            var _onRun3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(args, app, device, block) {
              var scriptString, state, count;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "smart_camera_".concat(args.NUM, ".learn(").concat(args.SIG, ", \"until_button\")");
                      _context7.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                      state = null;
                      count = 60;

                    case 6:
                      _context7.next = 8;
                      return delay(1000);

                    case 8:
                      scriptString = "value = smart_camera_".concat(args.NUM, ".detect_sign(").concat(args.SIG, ")\nonline_debug_respond(value)");
                      _context7.next = 11;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 11:
                      state = _context7.sent;
                      count--;

                    case 13:
                      if (state == 0 && count > 0) {
                        _context7.next = 6;
                        break;
                      }

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function onRun(_x11, _x12, _x13, _x14) {
              return _onRun3.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_DETECT_CCC': {
          onRun: function () {
            var _onRun4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".detect_sign(").concat(args.SIG, ")\nonline_debug_respond(value)");
                      _context8.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context8.sent;
                      return _context8.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));

            function onRun(_x15, _x16, _x17, _x18) {
              return _onRun4.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_LOCATION': {
          onRun: function () {
            var _onRun5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".detect_sign_location(").concat(args.SIG, ", \"").concat(args.LOCATION, "\")\nonline_debug_respond(value)");
                      _context9.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context9.sent;
                      return _context9.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            function onRun(_x19, _x20, _x21, _x22) {
              return _onRun5.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_VALUE': {
          onRun: function () {
            var _onRun6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_sign_").concat(args.TYPE, "(").concat(args.SIG, ")\nonline_debug_respond(value)");
                      _context10.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context10.sent;
                      return _context10.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function onRun(_x23, _x24, _x25, _x26) {
              return _onRun6.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_SET_LED': {
          onRun: function () {
            var _onRun7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".").concat(args.TYPE, "()\nonline_debug_respond(value)");
                      _context11.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                      _context11.next = 6;
                      return delay(200);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));

            function onRun(_x27, _x28, _x29, _x30) {
              return _onRun7.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_RESET': {
          onRun: function () {
            var _onRun8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "smart_camera_".concat(args.NUM, ".reset()");
                      _context12.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                      _context12.next = 6;
                      return delay(9000);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));

            function onRun(_x31, _x32, _x33, _x34) {
              return _onRun8.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_INIT_2': {
          onRun: function () {
            var _onRun9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "from mbuild.smart_camera import smart_camera_class\nsmart_camera_".concat(args.NUM, " = smart_camera_class(\"").concat(args.PORT, "\", \"").concat(args.INDEX, "\")");
                      _context13.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));

            function onRun(_x35, _x36, _x37, _x38) {
              return _onRun9.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_CHANGE_LINE': {
          onRun: function () {
            var _onRun10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "smart_camera_".concat(args.NUM, ".set_mode(\"line\")");
                      _context14.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                      _context14.next = 6;
                      return delay(200);

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));

            function onRun(_x39, _x40, _x41, _x42) {
              return _onRun10.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'BLOCK_25650950268712': {
          onRun: function () {
            var _onRun11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".detect_label(").concat(args.LABEL, ")\nonline_debug_respond(value)");
                      _context15.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context15.sent;
                      return _context15.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));

            function onRun(_x43, _x44, _x45, _x46) {
              return _onRun11.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'BLOCK_25650950268713': {
          onRun: function () {
            var _onRun12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_label_").concat(args.COORD, "(").concat(args.LABEL, ")\nonline_debug_respond(value)");
                      _context16.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context16.sent;
                      return _context16.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));

            function onRun(_x47, _x48, _x49, _x50) {
              return _onRun12.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_GET_LINE_VALUE': {
          onRun: function () {
            var _onRun13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_vector_").concat(args.TYPE, "()\nonline_debug_respond(value)");
                      _context17.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context17.sent;
                      return _context17.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));

            function onRun(_x51, _x52, _x53, _x54) {
              return _onRun13.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_DETECT_CROSS': {
          onRun: function () {
            var _onRun14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".detect_cross()\nonline_debug_respond(value)");
                      _context18.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context18.sent;
                      return _context18.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));

            function onRun(_x55, _x56, _x57, _x58) {
              return _onRun14.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_GET_CROSS_VALUE': {
          onRun: function () {
            var _onRun15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_cross_").concat(args.TYPE, "()\nonline_debug_respond(value)");
                      _context19.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context19.sent;
                      return _context19.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));

            function onRun(_x59, _x60, _x61, _x62) {
              return _onRun15.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'BLOCK_25650950268718': {
          onRun: function () {
            var _onRun16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_cross_road()\nonline_debug_respond(value)");
                      _context20.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context20.sent;
                      return _context20.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));

            function onRun(_x63, _x64, _x65, _x66) {
              return _onRun16.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'BLOCK_25650950268719': {
          onRun: function () {
            var _onRun17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_cross_angle(").concat(args.sn, ")\nonline_debug_respond(value)");
                      _context21.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context21.sent;
                      return _context21.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }));

            function onRun(_x67, _x68, _x69, _x70) {
              return _onRun17.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_SET_LINE_MODE': {
          onRun: function () {
            var _onRun18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "smart_camera_".concat(args.NUM, ".set_line(\"").concat(args.LINEMODE, "\")");
                      _context22.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }));

            function onRun(_x71, _x72, _x73, _x74) {
              return _onRun18.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_INIT_3': {
          onRun: function () {
            var _onRun19 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "from mbuild.smart_camera import smart_camera_class\nsmart_camera_".concat(args.NUM, " = smart_camera_class(\"").concat(args.PORT, "\", \"").concat(args.INDEX, "\")");
                      _context23.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            }));

            function onRun(_x75, _x76, _x77, _x78) {
              return _onRun19.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_SET_KP': {
          onRun: function () {
            var _onRun20 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(args, app, device, block) {
              var scriptString;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "smart_camera_".concat(args.NUM, ".set_kp(").concat(args.KP, ")");
                      _context24.next = 4;
                      return OnlineProtocol.writeScript(device, scriptString);

                    case 4:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }));

            function onRun(_x79, _x80, _x81, _x82) {
              return _onRun20.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_DIFF_SPEED_CCC': {
          onRun: function () {
            var _onRun21 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_sign_diff_speed(").concat(args.SIG, ",\"").concat(args.AXIS, "\",").concat(args.TARGET, ")\nonline_debug_respond(value)");
                      _context25.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context25.sent;
                      return _context25.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25);
            }));

            function onRun(_x83, _x84, _x85, _x86) {
              return _onRun21.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_DIIF_SPEED_LABEL': {
          onRun: function () {
            var _onRun22 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_label_diff_speed(").concat(args.LABEL, ",\"").concat(args.AXIS, "\",").concat(args.TARGET, ")\nonline_debug_respond(value)");
                      _context26.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context26.sent;
                      return _context26.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26);
            }));

            function onRun(_x87, _x88, _x89, _x90) {
              return _onRun22.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_DIFF_SPEED_LINE': {
          onRun: function () {
            var _onRun23 = _asyncToGenerator(regeneratorRuntime.mark(function _callee27(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".get_follow_vector_diff_speed()\nonline_debug_respond(value)");
                      _context27.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context27.sent;
                      return _context27.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            }));

            function onRun(_x91, _x92, _x93, _x94) {
              return _onRun23.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_IS_LOCK_CCC': {
          onRun: function () {
            var _onRun24 = _asyncToGenerator(regeneratorRuntime.mark(function _callee28(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".is_lock_sign(").concat(args.SIG, ",\"").concat(args.AXIS, "\",").concat(args.TARGET, ")\nonline_debug_respond(value)");
                      _context28.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context28.sent;
                      return _context28.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28);
            }));

            function onRun(_x95, _x96, _x97, _x98) {
              return _onRun24.apply(this, arguments);
            }

            return onRun;
          }()
        },
        'SMART_CAMERA_IS_LOCK_LABEL': {
          onRun: function () {
            var _onRun25 = _asyncToGenerator(regeneratorRuntime.mark(function _callee29(args, app, device, block) {
              var scriptString, value;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      scriptString = [];
                      scriptString = "value = smart_camera_".concat(args.NUM, ".is_lock_label(").concat(args.LABEL, ",\"").concat(args.AXIS, "\",").concat(args.TARGET, ")\nonline_debug_respond(value)");
                      _context29.next = 4;
                      return OnlineProtocol.readScript(device, scriptString);

                    case 4:
                      value = _context29.sent;
                      return _context29.abrupt("return", value);

                    case 6:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            }));

            function onRun(_x99, _x100, _x101, _x102) {
              return _onRun25.apply(this, arguments);
            }

            return onRun;
          }()
        }
      };
    }

    _createClass(ExtNovapiMbuildSmartCamera, [{
      key: "getInfo",
      value: function getInfo() {
        return {
          "id": "novapi_mbuild_smart_camera",
          "targets": ["novapi"],
          "codeTypes": ["python"],
          "version": "0.0.4",
          "platform": ["mblockpc", "mblockweb"],
          "categories": [{
            "name": "smart_camera_ccc_for_novapi",
            "colors": ["#0AAD80", "#099C73", "#088A66"],
            "menuIconURI": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/79b03b4283b342b3bba73eccca5d4e9b.svg', 'novapi_mbuild_smart_camera'),
            "blockIcon": {
              "type": "image",
              "width": 28,
              "height": 26,
              "src": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/0c5ae82eb00844d295b88624f7da1895.svg', 'novapi_mbuild_smart_camera')
            },
            "blocks": [{
              "opcode": "SMART_CAMERA_INIT_1",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_INIT_1_NUM"
                },
                "PORT": {
                  "type": "fieldMenu",
                  "defaultValue": "PORT1",
                  "menu": "SMART_CAMERA_INIT_1_PORT"
                },
                "INDEX": {
                  "type": "fieldMenu",
                  "defaultValue": "INDEX1",
                  "menu": "SMART_CAMERA_INIT_1_INDEX"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "sections": {
                    "from": "from mbuild.smart_camera import smart_camera_class",
                    "new_class": "smart_camera_{NUM} = smart_camera_class(\"{PORT}\", \"{INDEX}\")"
                  }
                }
              },
              "handler": this.funcs.SMART_CAMERA_INIT_1
            }, {
              "opcode": "SMART_CAMERA_CHANGE_CCC",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.set_mode(\"color\")"
                }
              },
              "handler": this.funcs.SMART_CAMERA_CHANGE_CCC
            }, {
              "opcode": "SMART_CAMERA_START_LEARN_CCC",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "SIG": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.learn({SIG}, \"until_button\")"
                }
              },
              "handler": this.funcs.SMART_CAMERA_START_LEARN_CCC
            }, {
              "opcode": "SMART_CAMERA_DETECT_CCC",
              "blockType": "boolean",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "SIG": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.detect_sign({SIG})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_DETECT_CCC
            }, {
              "opcode": "SMART_CAMERA_LOCATION",
              "blockType": "boolean",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "SIG": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
                },
                "LOCATION": {
                  "type": "fieldMenu",
                  "defaultValue": "middle",
                  "menu": "SMART_CAMERA_LOCATION_LOCATION"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.detect_sign_location({SIG}, \"{LOCATION}\")"
                }
              },
              "handler": this.funcs.SMART_CAMERA_LOCATION
            }, {
              "opcode": "SMART_CAMERA_VALUE",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "SIG": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
                },
                "TYPE": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "SMART_CAMERA_VALUE_TYPE"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_sign_{TYPE}({SIG})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_VALUE
            }, {
              "opcode": "SMART_CAMERA_SET_LED",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "TYPE": {
                  "type": "fieldMenu",
                  "defaultValue": "open_light",
                  "menu": "SMART_CAMERA_SET_LED_TYPE"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.{TYPE}()"
                }
              },
              "handler": this.funcs.SMART_CAMERA_SET_LED
            }, {
              "opcode": "SMART_CAMERA_RESET",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.reset()"
                }
              },
              "handler": this.funcs.SMART_CAMERA_RESET
            }],
            "menus": {
              "SMART_CAMERA_INIT_1_NUM": [{
                "text": "SMART_CAMERA_INIT_1_NUM_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_3",
                "value": "4"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_4",
                "value": "5"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_5",
                "value": "6"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_6",
                "value": "7"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_7",
                "value": "8"
              }],
              "SMART_CAMERA_INIT_1_PORT": [{
                "text": "SMART_CAMERA_INIT_1_PORT_0",
                "value": "PORT1"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_1",
                "value": "PORT2"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_2",
                "value": "PORT3"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_3",
                "value": "PORT4"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_4",
                "value": "PORT5"
              }],
              "SMART_CAMERA_INIT_1_INDEX": [{
                "text": "SMART_CAMERA_INIT_1_INDEX_0",
                "value": "INDEX1"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_1",
                "value": "INDEX2"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_2",
                "value": "INDEX3"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_3",
                "value": "INDEX4"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_4",
                "value": "INDEX5"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_5",
                "value": "INDEX6"
              }],
              "SMART_CAMERA_CHANGE_CCC_NUM": [{
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_3",
                "value": "4"
              }],
              "SMART_CAMERA_START_LEARN_CCC_SIG": [{
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_3",
                "value": "4"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_4",
                "value": "5"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_5",
                "value": "6"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_6",
                "value": "7"
              }],
              "SMART_CAMERA_LOCATION_LOCATION": [{
                "text": "SMART_CAMERA_LOCATION_LOCATION_0",
                "value": "middle"
              }, {
                "text": "SMART_CAMERA_LOCATION_LOCATION_1",
                "value": "up"
              }, {
                "text": "SMART_CAMERA_LOCATION_LOCATION_2",
                "value": "down"
              }, {
                "text": "SMART_CAMERA_LOCATION_LOCATION_3",
                "value": "left"
              }, {
                "text": "SMART_CAMERA_LOCATION_LOCATION_4",
                "value": "right"
              }],
              "SMART_CAMERA_VALUE_TYPE": [{
                "text": "SMART_CAMERA_VALUE_TYPE_0",
                "value": "x"
              }, {
                "text": "SMART_CAMERA_VALUE_TYPE_1",
                "value": "y"
              }, {
                "text": "SMART_CAMERA_VALUE_TYPE_2",
                "value": "wide"
              }, {
                "text": "SMART_CAMERA_VALUE_TYPE_3",
                "value": "hight"
              }],
              "SMART_CAMERA_SET_LED_TYPE": [{
                "text": "SMART_CAMERA_SET_LED_TYPE_0",
                "value": "open_light"
              }, {
                "text": "SMART_CAMERA_SET_LED_TYPE_1",
                "value": "close_light"
              }]
            }
          }, {
            "name": "smart_camera_line_for_novapi",
            "colors": ["#0AAD80", "#099C73", "#088A66"],
            "menuIconURI": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/31105a357dfc426083de3b104bb200df.svg', 'novapi_mbuild_smart_camera'),
            "blockIcon": {
              "type": "image",
              "width": 28,
              "height": 26,
              "src": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/a01b4b134407451cb75d22cfa1b61ec3.svg', 'novapi_mbuild_smart_camera')
            },
            "blocks": [{
              "opcode": "SMART_CAMERA_INIT_2",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_INIT_1_NUM"
                },
                "PORT": {
                  "type": "fieldMenu",
                  "defaultValue": "PORT1",
                  "menu": "SMART_CAMERA_INIT_1_PORT"
                },
                "INDEX": {
                  "type": "fieldMenu",
                  "defaultValue": "INDEX1",
                  "menu": "SMART_CAMERA_INIT_1_INDEX"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "sections": {
                    "from": "from mbuild.smart_camera import smart_camera_class",
                    "new_class": "smart_camera_{NUM} = smart_camera_class(\"{PORT}\", \"{INDEX}\")"
                  }
                }
              },
              "handler": this.funcs.SMART_CAMERA_INIT_2
            }, {
              "opcode": "SMART_CAMERA_CHANGE_LINE",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.set_mode(\"line\")"
                }
              },
              "handler": this.funcs.SMART_CAMERA_CHANGE_LINE
            }, {
              "opcode": "BLOCK_25650950268712",
              "blockType": "boolean",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "LABEL": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "BLOCK_25650950268712_LABEL"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb", "mblockapp"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.detect_label({LABEL})",
                  "sections": {
                    "import": ['mbuild']
                  }
                }
              },
              "handler": this.funcs.BLOCK_25650950268712
            }, {
              "opcode": "BLOCK_25650950268713",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "LABEL": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "BLOCK_25650950268713_LABEL"
                },
                "COORD": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "BLOCK_25650950268713_COORD"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb", "mblockapp"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_label_{COORD}({LABEL})",
                  "sections": {
                    "import": ['mbuild']
                  }
                }
              },
              "handler": this.funcs.BLOCK_25650950268713
            }, {
              "opcode": "SMART_CAMERA_GET_LINE_VALUE",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "TYPE": {
                  "type": "fieldMenu",
                  "defaultValue": "start_x",
                  "menu": "SMART_CAMERA_GET_LINE_VALUE_TYPE"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_vector_{TYPE}()"
                }
              },
              "handler": this.funcs.SMART_CAMERA_GET_LINE_VALUE
            }, {
              "opcode": "SMART_CAMERA_DETECT_CROSS",
              "blockType": "boolean",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.detect_cross()"
                }
              },
              "handler": this.funcs.SMART_CAMERA_DETECT_CROSS
            }, {
              "opcode": "SMART_CAMERA_GET_CROSS_VALUE",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "TYPE": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "SMART_CAMERA_GET_CROSS_VALUE_TYPE"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_cross_{TYPE}()"
                }
              },
              "handler": this.funcs.SMART_CAMERA_GET_CROSS_VALUE
            }, {
              "opcode": "BLOCK_25650950268718",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb", "mblockapp"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_cross_road()",
                  "sections": {
                    "import": ['mbuild']
                  }
                }
              },
              "handler": this.funcs.BLOCK_25650950268718
            }, {
              "opcode": "BLOCK_25650950268719",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "sn": {
                  "type": "number",
                  "defaultValue": 1
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb", "mblockapp"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_cross_angle({sn})",
                  "sections": {
                    "import": ['mbuild']
                  }
                }
              },
              "handler": this.funcs.BLOCK_25650950268719
            }, {
              "opcode": "SMART_CAMERA_SET_LINE_MODE",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "LINEMODE": {
                  "type": "fieldMenu",
                  "defaultValue": "black",
                  "menu": "SMART_CAMERA_SET_LINE_MODE_LINEMODE"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.set_line(\"{LINEMODE}\")"
                }
              },
              "handler": this.funcs.SMART_CAMERA_SET_LINE_MODE
            }],
            "menus": {
              "SMART_CAMERA_INIT_1_NUM": [{
                "text": "SMART_CAMERA_INIT_1_NUM_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_3",
                "value": "4"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_4",
                "value": "5"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_5",
                "value": "6"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_6",
                "value": "7"
              }, {
                "text": "SMART_CAMERA_INIT_1_NUM_7",
                "value": "8"
              }],
              "SMART_CAMERA_INIT_1_PORT": [{
                "text": "SMART_CAMERA_INIT_1_PORT_0",
                "value": "PORT1"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_1",
                "value": "PORT2"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_2",
                "value": "PORT3"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_3",
                "value": "PORT4"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_4",
                "value": "PORT5"
              }],
              "SMART_CAMERA_INIT_1_INDEX": [{
                "text": "SMART_CAMERA_INIT_1_INDEX_0",
                "value": "INDEX1"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_1",
                "value": "INDEX2"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_2",
                "value": "INDEX3"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_3",
                "value": "INDEX4"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_4",
                "value": "INDEX5"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_5",
                "value": "INDEX6"
              }],
              "SMART_CAMERA_CHANGE_CCC_NUM": [{
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_3",
                "value": "4"
              }],
              "BLOCK_25650950268712_LABEL": [{
                "text": "BLOCK_25650950268712_LABEL_0",
                "value": "1"
              }, {
                "text": "BLOCK_25650950268712_LABEL_1",
                "value": "2"
              }, {
                "text": "BLOCK_25650950268712_LABEL_2",
                "value": "3"
              }, {
                "text": "BLOCK_25650950268712_LABEL_3",
                "value": "4"
              }, {
                "text": "BLOCK_25650950268712_LABEL_4",
                "value": "5"
              }, {
                "text": "BLOCK_25650950268712_LABEL_5",
                "value": "6"
              }, {
                "text": "BLOCK_25650950268712_LABEL_6",
                "value": "7"
              }, {
                "text": "BLOCK_25650950268712_LABEL_7",
                "value": "8"
              }, {
                "text": "BLOCK_25650950268712_LABEL_8",
                "value": "9"
              }, {
                "text": "BLOCK_25650950268712_LABEL_9",
                "value": "10"
              }, {
                "text": "BLOCK_25650950268712_LABEL_10",
                "value": "11"
              }, {
                "text": "BLOCK_25650950268712_LABEL_11",
                "value": "12"
              }, {
                "text": "BLOCK_25650950268712_LABEL_12",
                "value": "13"
              }, {
                "text": "BLOCK_25650950268712_LABEL_13",
                "value": "14"
              }, {
                "text": "BLOCK_25650950268712_LABEL_14",
                "value": "15"
              }],
              "BLOCK_25650950268713_LABEL": [{
                "text": "BLOCK_25650950268713_LABEL_0",
                "value": "1"
              }, {
                "text": "BLOCK_25650950268713_LABEL_1",
                "value": "2"
              }, {
                "text": "BLOCK_25650950268713_LABEL_2",
                "value": "3"
              }, {
                "text": "BLOCK_25650950268713_LABEL_3",
                "value": "4"
              }, {
                "text": "BLOCK_25650950268713_LABEL_4",
                "value": "5"
              }, {
                "text": "BLOCK_25650950268713_LABEL_5",
                "value": "6"
              }, {
                "text": "BLOCK_25650950268713_LABEL_6",
                "value": "7"
              }, {
                "text": "BLOCK_25650950268713_LABEL_7",
                "value": "8"
              }, {
                "text": "BLOCK_25650950268713_LABEL_8",
                "value": "9"
              }, {
                "text": "BLOCK_25650950268713_LABEL_9",
                "value": "10"
              }, {
                "text": "BLOCK_25650950268713_LABEL_10",
                "value": "11"
              }, {
                "text": "BLOCK_25650950268713_LABEL_11",
                "value": "12"
              }, {
                "text": "BLOCK_25650950268713_LABEL_12",
                "value": "13"
              }, {
                "text": "BLOCK_25650950268713_LABEL_13",
                "value": "14"
              }, {
                "text": "BLOCK_25650950268713_LABEL_14",
                "value": "15"
              }],
              "BLOCK_25650950268713_COORD": [{
                "text": "BLOCK_25650950268713_COORD_0",
                "value": "x"
              }, {
                "text": "BLOCK_25650950268713_COORD_1",
                "value": "y"
              }],
              "SMART_CAMERA_GET_LINE_VALUE_TYPE": [{
                "text": "SMART_CAMERA_GET_LINE_VALUE_TYPE_0",
                "value": "start_x"
              }, {
                "text": "SMART_CAMERA_GET_LINE_VALUE_TYPE_1",
                "value": "start_y"
              }, {
                "text": "SMART_CAMERA_GET_LINE_VALUE_TYPE_2",
                "value": "end_x"
              }, {
                "text": "SMART_CAMERA_GET_LINE_VALUE_TYPE_3",
                "value": "end_y"
              }],
              "SMART_CAMERA_GET_CROSS_VALUE_TYPE": [{
                "text": "SMART_CAMERA_GET_CROSS_VALUE_TYPE_0",
                "value": "x"
              }, {
                "text": "SMART_CAMERA_GET_CROSS_VALUE_TYPE_1",
                "value": "y"
              }],
              "SMART_CAMERA_SET_LINE_MODE_LINEMODE": [{
                "text": "SMART_CAMERA_SET_LINE_MODE_LINEMODE_0",
                "value": "black"
              }, {
                "text": "SMART_CAMERA_SET_LINE_MODE_LINEMODE_1",
                "value": "white"
              }]
            }
          }, {
            "name": "smart_camera_makex_for_novapi",
            "colors": ["#0AAD80", "#099C73", "#088A66"],
            "menuIconURI": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/3139c6914e5a46cfaa9cdd0873068589.svg', 'novapi_mbuild_smart_camera'),
            "blockIcon": {
              "type": "image",
              "width": 28,
              "height": 26,
              "src": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/6c7be9eaac99461fb54467a706017646.svg', 'novapi_mbuild_smart_camera')
            },
            "blocks": [{
              "opcode": "SMART_CAMERA_INIT_3",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 36,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "PORT": {
                  "type": "fieldMenu",
                  "defaultValue": "PORT1",
                  "menu": "SMART_CAMERA_INIT_1_PORT"
                },
                "INDEX": {
                  "type": "fieldMenu",
                  "defaultValue": "INDEX1",
                  "menu": "SMART_CAMERA_INIT_1_INDEX"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "sections": {
                    "from": "from mbuild.smart_camera import smart_camera_class",
                    "new_class": "smart_camera_{NUM} = smart_camera_class(\"{PORT}\", \"{INDEX}\")"
                  }
                }
              },
              "handler": this.funcs.SMART_CAMERA_INIT_3
            }, {
              "opcode": "SMART_CAMERA_SET_KP",
              "blockType": "command",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "KP": {
                  "type": "number",
                  "defaultValue": 0.5
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.set_kp({KP})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_SET_KP
            }, {
              "opcode": "SMART_CAMERA_DIFF_SPEED_CCC",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "SIG": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
                },
                "AXIS": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "BLOCK_25650950268713_COORD"
                },
                "TARGET": {
                  "type": "number",
                  "defaultValue": 150
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_sign_diff_speed({SIG}, \"{AXIS}\", {TARGET})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_DIFF_SPEED_CCC
            }, {
              "opcode": "SMART_CAMERA_DIIF_SPEED_LABEL",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "LABEL": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL"
                },
                "AXIS": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "BLOCK_25650950268713_COORD"
                },
                "TARGET": {
                  "type": "number",
                  "defaultValue": 150
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_label_diff_speed({LABEL}, \"{AXIS}\", {TARGET})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_DIIF_SPEED_LABEL
            }, {
              "opcode": "SMART_CAMERA_DIFF_SPEED_LINE",
              "blockType": "number",
              "checkboxInFlyout": true,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.get_follow_vector_diff_speed()"
                }
              },
              "handler": this.funcs.SMART_CAMERA_DIFF_SPEED_LINE
            }, {
              "opcode": "SMART_CAMERA_IS_LOCK_CCC",
              "blockType": "boolean",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "SIG": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
                },
                "AXIS": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "BLOCK_25650950268713_COORD"
                },
                "TARGET": {
                  "type": "number",
                  "defaultValue": 150
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.is_lock_sign({SIG}, \"{AXIS}\", {TARGET})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_IS_LOCK_CCC
            }, {
              "opcode": "SMART_CAMERA_IS_LOCK_LABEL",
              "blockType": "boolean",
              "checkboxInFlyout": false,
              "hidden": false,
              "gap": 12,
              "arguments": {
                "NUM": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
                },
                "LABEL": {
                  "type": "fieldMenu",
                  "defaultValue": "1",
                  "menu": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL"
                },
                "AXIS": {
                  "type": "fieldMenu",
                  "defaultValue": "x",
                  "menu": "BLOCK_25650950268713_COORD"
                },
                "TARGET": {
                  "type": "number",
                  "defaultValue": 150
                }
              },
              "branchCount": 0,
              "platform": ["mblockpc", "mblockweb"],
              "codes": {
                "python": {
                  "code": "smart_camera_{NUM}.is_lock_label({LABEL}, \"{AXIS}\", {TARGET})"
                }
              },
              "handler": this.funcs.SMART_CAMERA_IS_LOCK_LABEL
            }],
            "menus": {
              "SMART_CAMERA_CHANGE_CCC_NUM": [{
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_3",
                "value": "4"
              }],
              "SMART_CAMERA_INIT_1_PORT": [{
                "text": "SMART_CAMERA_INIT_1_PORT_0",
                "value": "PORT1"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_1",
                "value": "PORT2"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_2",
                "value": "PORT3"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_3",
                "value": "PORT4"
              }, {
                "text": "SMART_CAMERA_INIT_1_PORT_4",
                "value": "PORT5"
              }],
              "SMART_CAMERA_INIT_1_INDEX": [{
                "text": "SMART_CAMERA_INIT_1_INDEX_0",
                "value": "INDEX1"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_1",
                "value": "INDEX2"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_2",
                "value": "INDEX3"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_3",
                "value": "INDEX4"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_4",
                "value": "INDEX5"
              }, {
                "text": "SMART_CAMERA_INIT_1_INDEX_5",
                "value": "INDEX6"
              }],
              "SMART_CAMERA_START_LEARN_CCC_SIG": [{
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_3",
                "value": "4"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_4",
                "value": "5"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_5",
                "value": "6"
              }, {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_6",
                "value": "7"
              }],
              "BLOCK_25650950268713_COORD": [{
                "text": "BLOCK_25650950268713_COORD_0",
                "value": "x"
              }, {
                "text": "BLOCK_25650950268713_COORD_1",
                "value": "y"
              }],
              "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL": [{
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_0",
                "value": "1"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_1",
                "value": "2"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_2",
                "value": "3"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_3",
                "value": "4"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_4",
                "value": "5"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_5",
                "value": "6"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_6",
                "value": "7"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_7",
                "value": "8"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_8",
                "value": "9"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_9",
                "value": "10"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_10",
                "value": "11"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_11",
                "value": "12"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_12",
                "value": "13"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_13",
                "value": "14"
              }, {
                "text": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL_14",
                "value": "15"
              }]
            }
          }],
          "generators": extGenerators,
          "translationMap": extTranslationMap,
          "snippets": codeSnippets,
          "generatorStartBlocks": [],
          "feature": []
        };
      }
    }, {
      key: "getHandler",
      value: function getHandler() {
        if (_typeof(ExtHandler) === 'object') {
          return ExtHandler;
        } else if (typeof ExtHandler === 'function') {
          return new ExtHandler();
        }
      }
    }]);

    return ExtNovapiMbuildSmartCamera;
  }();

  var _default = ExtNovapiMbuildSmartCamera;
  _exports.default = _default;
});