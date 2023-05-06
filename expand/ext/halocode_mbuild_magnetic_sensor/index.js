(function(a,b){if("function"==typeof define&&define.amd)define(["exports"],b);else if("undefined"!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.unknown=c.exports}})(this,function(a){"use strict";function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function c(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a}function d(a,b){if(!k(a,b))throw new TypeError("Cannot call a class as a function")}function e(a){return h(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function h(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function i(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function j(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){i(h,d,e,f,g,"next",a)}function g(a){i(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function k(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}function m(){o=window.haloSharedObject.sysOperation,p=window.haloSharedObject.commonFunction,q=window.haloSharedObject.onlineCommunication,r=window.haloSharedObject.onlineProtocolPackage,s=window.haloSharedObject.onlineManager,t=window.haloSharedObject.onlineDataStructure;var a=[new t("BLOCK_1565579151187","mbuild.magnetic_sensor.is_active",[1],{default:"bool"}),new t("BLOCK_1565579556728","mbuild.magnetic_sensor.get_count",[1],{default:"int"}),new t("BLOCK_1565579668227","mbuild.magnetic_sensor.reset_count",[1])];s.updateOnlineTable("add",a)}function n(){setTimeout(function(){m()},500)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,!function(a){function b(a,b,c,e){var f=b&&k(b.prototype,d)?b:d,g=Object.create(f.prototype),h=new o(e||[]);return g._invoke=i(a,c,h),g}function c(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function d(){}function e(){}function f(){}function g(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function h(a){function b(d,e,f,g){var h=c(a[d],a,e);if("throw"===h.type)g(h.arg);else{var i=h.arg,j=i.value;return j&&"object"===l(j)&&s.call(j,"__await")?Promise.resolve(j.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(j).then(function(a){i.value=a,f(i)},function(a){return b("throw",a,f,g)})}}function d(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}var e;this._invoke=d}function i(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return q()}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=j(h,d);if(i){if(i===z)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var k=c(a,b,d);if("normal"===k.type){if(e=d.done?"completed":"suspendedYield",k.arg===z)continue;return{value:k.arg,done:d.done}}"throw"===k.type&&(e="completed",d.method="throw",d.arg=k.arg)}}}function j(a,b){var d=a.iterator[b.method];if(void 0===d){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,j(a,b),"throw"===b.method))return z;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return z}var e=c(d,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,z;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,z;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0);else return f;return b.delegate=null,z}function m(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function n(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function o(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(m,this),this.reset(!0)}function p(a){if(a){var b=a[u];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(s.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:q}}function q(){return{value:void 0,done:!0}}var r=Object.prototype,s=r.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},u=t.iterator||"@@iterator",v=t.asyncIterator||"@@asyncIterator",w=t.toStringTag||"@@toStringTag",x="object"===("undefined"==typeof module?"undefined":l(module)),y=a.regeneratorRuntime;if(y)return void(x&&(module.exports=y));y=a.regeneratorRuntime=x?module.exports||{}:{},y.wrap=b;var z={},A={};A[u]=function(){return this};var B=Object.getPrototypeOf,C=B&&B(B(p([])));C&&C!==r&&s.call(C,u)&&(A=C);var D=f.prototype=d.prototype=Object.create(A);e.prototype=D.constructor=f,f.constructor=e,f[w]=e.displayName="GeneratorFunction",y.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===e||"GeneratorFunction"===(b.displayName||b.name))},y.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,f):(a.__proto__=f,!(w in a)&&(a[w]="GeneratorFunction")),a.prototype=Object.create(D),a},y.awrap=function(a){return{__await:a}},g(h.prototype),h.prototype[v]=function(){return this},y.AsyncIterator=h,y.async=function(a,c,d,e){var f=new h(b(a,c,d,e));return y.isGeneratorFunction(c)?f:f.next().then(function(a){return a.done?a.value:f.next()})},g(D),D[w]="Generator",D[u]=function(){return this},D.toString=function(){return"[object Generator]"},y.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},y.values=p,o.prototype={constructor:o,reset:function reset(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(n),!a)for(var b in this)"t"===b.charAt(0)&&s.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function stop(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function dispatchException(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)return b("end");if(e.tryLoc<=this.prev){var g=s.call(e,"catchLoc"),h=s.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function abrupt(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&s.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,z):this.complete(f)},complete:function complete(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),z},finish:function finish(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),n(b),z},catch:function _catch(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;n(b)}return e}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(a,b,c){return this.delegate={iterator:p(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),z}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":l(self))&&self}()||Function("return this")());var o=void 0,p=void 0,q=void 0,r=void 0,s=void 0,t=void 0;n();var u={debug:[],upload:[]},v=[],w=function(){var a=j(regeneratorRuntime.mark(function a(b,c){var d,f,g,h,i,j,k,l,m;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(c&&c.workspace)){a.next=8;break}return"debug"===b?((d=c.workspace).enableBlocks.apply(d,e(u.upload)),(f=c.workspace).disableBlocks.apply(f,e(u.debug))):"upload"===b?((g=c.workspace).enableBlocks.apply(g,e(u.debug)),(h=c.workspace).disableBlocks.apply(h,e(u.upload))):((i=c.workspace).enableBlocks.apply(i,e(u.upload)),(j=c.workspace).enableBlocks.apply(j,e(u.debug))),k=c.getService("account"),a.next=6,k.isLogin();case 6:l=a.sent,l||(m=c.workspace).disableBlocks.apply(m,v);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0);case 13:case"end":return a.stop();}},a,null,[[0,10]])}));return function(){return a.apply(this,arguments)}}(),x={zh:{halocode_mbuild_magnetic_sensor:"\u78C1\u654F\u4F20\u611F\u5668",extensionName:"\u78C1\u654F\u4F20\u611F\u5668",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"\u78C1\u654F\u4F20\u611F\u5668 [index] \u68C0\u6D4B\u5230\u78C1\u4F53\uFF1F",BLOCK_1565579556728:"\u78C1\u654F\u4F20\u611F\u5668 [index] \u68C0\u6D4B\u5230\u78C1\u4F53\u7684\u6B21\u6570",BLOCK_1565579668227:"\u78C1\u654F\u4F20\u611F\u5668 [index] \u91CD\u7F6E\u68C0\u6D4B\u5230\u78C1\u4F53\u7684\u6B21\u6570",cate_a1cdc596:"\u78C1\u654F\u4F20\u611F\u5668"},en:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor",halo_mbuild_magnetic_sensor:"Magnetic Sensor"},de:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},es:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},fr:{halocode_mbuild_magnetic_sensor:"Capteur magn\xE9tique",extensionName:"Capteur magn\xE9tique",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"d\xE9tection d'un corps magn\xE9tique par le capteur magn\xE9tique[index]",BLOCK_1565579556728:"nombre de d\xE9tection r\xE9alis\xE9e par le capteur magn\xE9tique [index]",BLOCK_1565579668227:"r. a. z. du compteur de d\xE9tection magn\xE9tique pour le capteur magn\xE9tique [index]",cate_a1cdc596:"Capteur magn\xE9tique"},id:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},ja:{halocode_mbuild_magnetic_sensor:"\u78C1\u6C17\u30BB\u30F3\u30B5\u30FC",extensionName:"\u78C1\u6C17\u30BB\u30F3\u30B5\u30FC",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"\u78C1\u6C17\u30BB\u30F3\u30B5\u30FC[index] \u304C\u78C1\u6027\u4F53\u3092\u691C\u51FA\u3057\u305F",BLOCK_1565579556728:"\u78C1\u6C17\u30BB\u30F3\u30B5\u30FC[index] \u304C\u4EBA\u4F53\u3092\u691C\u51FA\u3057\u305F\u56DE\u6570",BLOCK_1565579668227:"\u78C1\u6C17\u30BB\u30F3\u30B5\u30FC [index] \u306E\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B",cate_a1cdc596:"\u78C1\u6C17\u30BB\u30F3\u30B5\u30FC"},"ja-jph":{halocode_mbuild_magnetic_sensor:"\u3058\u304D\u30BB\u30F3\u30B5\u30FC",extensionName:"\u3058\u304D\u30BB\u30F3\u30B5\u30FC",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"\u3058\u304D\u30BB\u30F3\u30B5\u30FC[index] \u304C\u3058\u305B\u3044\u305F\u3044\u3092\u3051\u3093\u3057\u3085\u3064\u3057\u305F",BLOCK_1565579556728:"\u3058\u304D\u30BB\u30F3\u30B5\u30FC[index] \u304C\u3058\u3093\u305F\u3044\u3092\u3051\u3093\u3057\u3085\u3064\u3057\u305F\u304B\u3044\u3059\u3046",BLOCK_1565579668227:"\u3058\u304D\u30BB\u30F3\u30B5\u30FC [index] \u306E\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B",cate_a1cdc596:"\u3058\u304D\u30BB\u30F3\u30B5\u30FC"},ko:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},pl:{halocode_mbuild_magnetic_sensor:"Czujnik Magnetyczny",extensionName:"Czujnik Magnetyczny",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"czujnik magnetyczny[index] wykry\u0142 cia\u0142o magnetyczne\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Czujnik Magnetyczny"},uk:{halocode_mbuild_magnetic_sensor:"\u041C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A",extensionName:"\u041C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"\u043C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A [index] \u0432\u0438\u044F\u0432\u0438\u0432 \u043C\u0430\u0433\u043D\u0456\u0442\u043D\u0435 \u0442\u0456\u043B\u043E",BLOCK_1565579556728:"\u043C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A [index] \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u0438\u0445 \u043C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0445 \u0442\u0456\u043B",BLOCK_1565579668227:"\u043C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A [index] \u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A",cate_a1cdc596:"\u041C\u0430\u0433\u043D\u0456\u0442\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A"},"zh-hant":{halocode_mbuild_magnetic_sensor:"\u78C1\u6027\u611F\u6E2C\u5668",extensionName:"\u78C1\u6027\u611F\u6E2C\u5668",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"\u78C1\u6027\u611F\u6E2C\u5668[index] \u5075\u6E2C\u5230\u7684\u78C1\u9AD4\uFF1F",BLOCK_1565579556728:"\u78C1\u6027\u611F\u6E2C\u5668[index] \u5075\u6E2C\u5230\u78C1\u9AD4\u7684\u6B21\u6578",BLOCK_1565579668227:"\u78C1\u6027\u611F\u6E2C\u5668 [index] \u91CD\u7F6E\u8A08\u6578",cate_a1cdc596:"\u78C1\u6027\u611F\u6E2C\u5668"},nl:{halocode_mbuild_magnetic_sensor:"Magnetische Sensor",extensionName:"Magnetische Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetische sensor[index] ontdekt magnetisch lichaam?",BLOCK_1565579556728:"magnetische sensor[index] aantal keren dat magnetisch lichaam is gedetecteerd",BLOCK_1565579668227:"magnetische sensor [index] reset aantal",cate_a1cdc596:"Magnetische Sensor"},it:{halocode_mbuild_magnetic_sensor:"Sensore Magnetico",extensionName:"Sensore Magnetico",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"sensore magnetico [index] ha rilevato un corpo magnetico?",BLOCK_1565579556728:"sensore magnetico[index] numero di volte in cui un corpo umano \xE8 stato rilevato",BLOCK_1565579668227:"il sensore magnetico [index] reimposta il conteggio",cate_a1cdc596:"Sensore Magnetico"},hr:{halocode_mbuild_magnetic_sensor:"Magnetski senzor",extensionName:"Magnetski senzor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetski senzor[index] detektirano magnetsko tijelo\uFF1F",BLOCK_1565579556728:"magnetski senzor[index] broj puta kada je otkriveno magnetsko tijelo",BLOCK_1565579668227:"magnetski senzor [index] resetiraj broj\u010Danik",cate_a1cdc596:"Magnetski senzor"},ru:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},pt:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},fi:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},tr:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},tk:{halocode_mbuild_magnetic_sensor:"Magnitli Du\xFDujy Enjam",extensionName:"Magnitli Du\xFDujy Enjam",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"[index] magnitli du\xFDujy enjam magnitli bir jisim du\xFDdymy\uFF1F",BLOCK_1565579556728:"[index] magnitli du\xFDujy enjamyny\u0148 magnitli jisimleri du\xFDan sany",BLOCK_1565579668227:"[index] magnitli du\xFDujy enjamy\u0148 sanyny\u0148 ba\u015Fa ga\xFDtarylmagy",cate_a1cdc596:"Magnitli Du\xFDujy Enjam"},ca:{halocode_mbuild_magnetic_sensor:"Sensor magn\xE8tic",extensionName:"Sensor magn\xE8tic",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"ha detectat el sensor magn\xE8tic [index] cap cos magn\xE8tic?",BLOCK_1565579556728:"nombre de vegades que el sensor magn\xE8tic [index] ha detectat un cos magn\xE8tic",BLOCK_1565579668227:"restableix el comptatge del sensor magn\xE8tic [index]",cate_a1cdc596:"Sensor magn\xE8tic"},cs:{halocode_mbuild_magnetic_sensor:"Magnetick\xFD senzor",extensionName:"Magnetick\xFD senzor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetick\xFD senzor[index] detekoval magnetick\xFD objekt",BLOCK_1565579556728:"magnetick\xFD senzor [index] kolikr\xE1t byl zji\u0161t\u011Bn magnetick\xFD objekt",BLOCK_1565579668227:"magnetick\xFD senzor [index] vynulovat po\u010D\xEDtadlo",cate_a1cdc596:"Magnetick\xFD senzor"},fa:{halocode_mbuild_magnetic_sensor:"Magnetic Sensor",extensionName:"Magnetic Sensor",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"magnetic sensor[index] detected magnetic body\uFF1F",BLOCK_1565579556728:"magnetic sensor[index] number of times magnetic body detected",BLOCK_1565579668227:"magnetic sensor [index] resets counts",cate_a1cdc596:"Magnetic Sensor"},vi:{halocode_mbuild_magnetic_sensor:"C\u1EA3m bi\u1EBFn t\u1EEB tr\u01B0\u1EDDng",extensionName:"C\u1EA3m bi\u1EBFn t\u1EEB tr\u01B0\u1EDDng",extensionDescription:"",BLOCK_1565579151187_INDEX_0:"1",BLOCK_1565579151187_INDEX_1:"2",BLOCK_1565579151187_INDEX_2:"3",BLOCK_1565579151187_INDEX_3:"4",BLOCK_1565579151187_INDEX_4:"5",BLOCK_1565579151187_INDEX_5:"6",BLOCK_1565579151187_INDEX_6:"7",BLOCK_1565579151187_INDEX_7:"8",BLOCK_1565579151187:"c\u1EA3m bi\u1EBFn t\u1EEB [index] ph\xE1t hi\u1EC7n t\u1EEB t\xEDnh?",BLOCK_1565579556728:"c\u1EA3m bi\u1EBFn t\u1EEB tr\u01B0\u1EDDng [index] S\u1ED1 l\u1EA7n ph\xE1t hi\u1EC7n t\u1EEB tr\u01B0\u1EDDng",BLOCK_1565579668227:"c\u1EA3m bi\u1EBFn t\u1EEB [index] Reset \u0111\u1EBFm",cate_a1cdc596:"C\u1EA3m bi\u1EBFn t\u1EEB tr\u01B0\u1EDDng"}},y={python:{}},z=[{lang:"python",template:"# generated by mBlock5 for <product>\n# codes make you happy\n\n### import #$$\n### lib #$$\n###\n# initialize variables\n###{\n  (this.$ALL_VARIABLES.length === 0) ? undefined : this.$ALL_VARIABLES.map(n => n + ' = 0').join('\\n')\n}#$$\n#$$\n\n### code #$$\n###\nwhile True:\n  # every tick\n  ### loop #$$\n#$$",splitor:{frame:{left:"###",right:"#$$"},expression:{left:"{",right:"}"}},reducers:[{name:"import",reduce:function reduce(a){var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i="";"string"==typeof h?i=h:"function"==typeof h&&(i=h()),-1===b.indexOf(i)&&b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g.return||g.return()}finally{if(d)throw e}}return 0==b.length?void 0:"import "+b.join(", ")}}]}],A={onLoad:function onLoad(a,b){return j(regeneratorRuntime.mark(function c(){var d,e,f;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(d=a.getService("account"),!d){c.next=8;break}return c.next=4,d.isLogin();case 4:e=c.sent,e||(f=a.workspace).disableBlocks.apply(f,v),d.onLogin(function(){var b;(b=a.workspace).enableBlocks.apply(b,v)}),d.onLogout(function(){var b;(b=a.workspace).disableBlocks.apply(b,v)});case 8:b&&"function"==typeof b.isUploadMode&&w(b.isUploadMode()?"upload":"debug",a);case 9:case"end":return c.stop();}},c)}))()},onUnload:function onUnload(){},onConnect:function onConnect(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n();case 1:case"end":return a.stop();}},a)}))()},onDisconnect:function onDisconnect(){},onStopAll:function onStopAll(){},beforeChangeUploadMode:function beforeChangeUploadMode(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a)}))()},beforeChangeDebugMode:function beforeChangeDebugMode(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a)}))()},afterChangeUploadMode:function afterChangeUploadMode(a,b){return w("upload",a,b),!0},afterChangeDebugMode:function afterChangeDebugMode(a,b){return w("debug",a,b),!0},onSelect:function onSelect(a,b){setTimeout(function(){w(b.isUploadMode()?"upload":"debug",a,b)},0)},onUnselect:function onUnselect(a,b){w("",a,b)},beforeCodeUpload:function beforeCodeUpload(){},afterCodeUpload:function afterCodeUpload(){},onRead:function onRead(a,b){var c=b.readText(!1),d=c.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g,"");d=d.replace("^P",""),""!=d&&" "!=d&&a.log(d)}},B=function(){function a(){d(this,a),this.checkFirmwareInForce="undefined"!=typeof checkFirmwareInForce&&checkFirmwareInForce,this.funcs={BLOCK_1565579151187:{onRun:function onRun(a,b,c){if(!c.isConnected()||c.isUploadMode())return!1;var d=[+a.index];s.parasUpdate("BLOCK_1565579151187",d,a.index);var e=s.getValue("BLOCK_1565579151187",a.index);return e},onMonitor:function onMonitor(){}},BLOCK_1565579556728:{onRun:function onRun(a,b,c){if(!c.isConnected()||c.isUploadMode())return 0;var d=[+a.index];s.parasUpdate("BLOCK_1565579556728",d,a.index);var e=s.getValue("BLOCK_1565579556728",a.index);return e},onMonitor:function onMonitor(){}},BLOCK_1565579668227:{onRun:function(){var a=j(regeneratorRuntime.mark(function a(b,c,d){var e,f,g;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d.isConnected()&&!d.isUploadMode()){a.next=2;break}return a.abrupt("return",0);case 2:return e="BLOCK_1565579668227",f=[+b.index],s.parasUpdate(e,f),a.next=7,s.request(e);case 7:if(g=s.__getKeyViaTag("BLOCK_1565579556728"),void 0===s.blockTable[g].value[b.index]){a.next=12;break}return a.next=11,p.delay(150);case 11:s.valueUpdate(g,0);case 12:case"end":return a.stop();}},a)}));return function onRun(){return a.apply(this,arguments)}}()}}}return c(a,[{key:"getInfo",value:function getInfo(){return{id:"halocode_mbuild_magnetic_sensor",targets:["haloboard","cyberpi"],codeTypes:["python"],version:"0.0.3",platform:["mblockpc","mblockweb","mblockapp"],categories:[{name:"cate_a1cdc596",colors:["#0AAD80","#099C73","#088A66"],menuIconURI:window.MbApi.getExtResPath("halocode_mbuild_magnetic_sensor/imgs/b4d75bf5aa564f42add9797aebff2894.svg","halocode_mbuild_magnetic_sensor"),blockIcon:{type:"image",width:28,height:26,src:window.MbApi.getExtResPath("halocode_mbuild_magnetic_sensor/imgs/ee2df31630ac4eaca65ec4b6da092b76.svg","halocode_mbuild_magnetic_sensor")},blocks:[{opcode:"BLOCK_1565579151187",blockType:"boolean",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{index:{type:"fieldMenu",defaultValue:"1",menu:"BLOCK_1565579151187_INDEX"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"mbuild.magnetic_sensor.is_active({index})",sections:{import:["mbuild"]}}},handler:this.funcs.BLOCK_1565579151187},{opcode:"BLOCK_1565579556728",blockType:"number",checkboxInFlyout:!0,hidden:!1,gap:12,arguments:{index:{type:"fieldMenu",defaultValue:"1",menu:"BLOCK_1565579151187_INDEX"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"mbuild.magnetic_sensor.get_count({index})",sections:{import:["mbuild"]}}},handler:this.funcs.BLOCK_1565579556728},{opcode:"BLOCK_1565579668227",blockType:"command",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{index:{type:"fieldMenu",defaultValue:"1",menu:"BLOCK_1565579151187_INDEX"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"mbuild.magnetic_sensor.reset_count({index})",sections:{import:["mbuild"]}}},handler:this.funcs.BLOCK_1565579668227}],menus:{BLOCK_1565579151187_INDEX:[{text:"BLOCK_1565579151187_INDEX_0",value:"1"},{text:"BLOCK_1565579151187_INDEX_1",value:"2"},{text:"BLOCK_1565579151187_INDEX_2",value:"3"},{text:"BLOCK_1565579151187_INDEX_3",value:"4"},{text:"BLOCK_1565579151187_INDEX_4",value:"5"},{text:"BLOCK_1565579151187_INDEX_5",value:"6"},{text:"BLOCK_1565579151187_INDEX_6",value:"7"},{text:"BLOCK_1565579151187_INDEX_7",value:"8"}]}}],generators:z,translationMap:x,snippets:y,generatorStartBlocks:[],feature:[],mustLoginBlocks:[],disabledOffline:[],disabledOnline:[]}}},{key:"getHandler",value:function getHandler(){return"object"===l(A)?A:"function"==typeof A?new A:void 0}}]),a}();a.default=B});