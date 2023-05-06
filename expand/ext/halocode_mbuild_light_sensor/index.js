(function(a,b){if("function"==typeof define&&define.amd)define(["exports"],b);else if("undefined"!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.unknown=c.exports}})(this,function(a){"use strict";function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function c(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a}function d(a,b){if(!k(a,b))throw new TypeError("Cannot call a class as a function")}function e(a){return h(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function h(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function i(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function j(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){i(h,d,e,f,g,"next",a)}function g(a){i(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function k(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}function m(){o=window.haloSharedObject.sysOperation,p=window.haloSharedObject.commonFunction,q=window.haloSharedObject.onlineCommunication,r=window.haloSharedObject.onlineProtocolPackage,s=window.haloSharedObject.onlineManager,t=window.haloSharedObject.onlineDataStructure;var a=[new t("BLOCK_1559813805438","mbuild.light_sensor.get_value",[1],{default:"int"})];s.updateOnlineTable("add",a)}function n(){setTimeout(function(){m()},500)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,!function(a){function b(a,b,c,e){var f=b&&k(b.prototype,d)?b:d,g=Object.create(f.prototype),h=new o(e||[]);return g._invoke=i(a,c,h),g}function c(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function d(){}function e(){}function f(){}function g(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function h(a){function b(d,e,f,g){var h=c(a[d],a,e);if("throw"===h.type)g(h.arg);else{var i=h.arg,j=i.value;return j&&"object"===l(j)&&s.call(j,"__await")?Promise.resolve(j.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(j).then(function(a){i.value=a,f(i)},function(a){return b("throw",a,f,g)})}}function d(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}var e;this._invoke=d}function i(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return q()}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=j(h,d);if(i){if(i===z)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var k=c(a,b,d);if("normal"===k.type){if(e=d.done?"completed":"suspendedYield",k.arg===z)continue;return{value:k.arg,done:d.done}}"throw"===k.type&&(e="completed",d.method="throw",d.arg=k.arg)}}}function j(a,b){var d=a.iterator[b.method];if(void 0===d){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,j(a,b),"throw"===b.method))return z;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return z}var e=c(d,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,z;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,z;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0);else return f;return b.delegate=null,z}function m(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function n(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function o(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(m,this),this.reset(!0)}function p(a){if(a){var b=a[u];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(s.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:q}}function q(){return{value:void 0,done:!0}}var r=Object.prototype,s=r.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},u=t.iterator||"@@iterator",v=t.asyncIterator||"@@asyncIterator",w=t.toStringTag||"@@toStringTag",x="object"===("undefined"==typeof module?"undefined":l(module)),y=a.regeneratorRuntime;if(y)return void(x&&(module.exports=y));y=a.regeneratorRuntime=x?module.exports||{}:{},y.wrap=b;var z={},A={};A[u]=function(){return this};var B=Object.getPrototypeOf,C=B&&B(B(p([])));C&&C!==r&&s.call(C,u)&&(A=C);var D=f.prototype=d.prototype=Object.create(A);e.prototype=D.constructor=f,f.constructor=e,f[w]=e.displayName="GeneratorFunction",y.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===e||"GeneratorFunction"===(b.displayName||b.name))},y.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,f):(a.__proto__=f,!(w in a)&&(a[w]="GeneratorFunction")),a.prototype=Object.create(D),a},y.awrap=function(a){return{__await:a}},g(h.prototype),h.prototype[v]=function(){return this},y.AsyncIterator=h,y.async=function(a,c,d,e){var f=new h(b(a,c,d,e));return y.isGeneratorFunction(c)?f:f.next().then(function(a){return a.done?a.value:f.next()})},g(D),D[w]="Generator",D[u]=function(){return this},D.toString=function(){return"[object Generator]"},y.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},y.values=p,o.prototype={constructor:o,reset:function reset(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(n),!a)for(var b in this)"t"===b.charAt(0)&&s.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function stop(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function dispatchException(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)return b("end");if(e.tryLoc<=this.prev){var g=s.call(e,"catchLoc"),h=s.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function abrupt(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&s.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,z):this.complete(f)},complete:function complete(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),z},finish:function finish(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),n(b),z},catch:function _catch(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;n(b)}return e}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(a,b,c){return this.delegate={iterator:p(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),z}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":l(self))&&self}()||Function("return this")());var o=void 0,p=void 0,q=void 0,r=void 0,s=void 0,t=void 0;n();var u={debug:[],upload:[]},v=[],w=function(){var a=j(regeneratorRuntime.mark(function a(b,c){var d,f,g,h,i,j,k,l,m;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(c&&c.workspace)){a.next=8;break}return"debug"===b?((d=c.workspace).enableBlocks.apply(d,e(u.upload)),(f=c.workspace).disableBlocks.apply(f,e(u.debug))):"upload"===b?((g=c.workspace).enableBlocks.apply(g,e(u.debug)),(h=c.workspace).disableBlocks.apply(h,e(u.upload))):((i=c.workspace).enableBlocks.apply(i,e(u.upload)),(j=c.workspace).enableBlocks.apply(j,e(u.debug))),k=c.getService("account"),a.next=6,k.isLogin();case 6:l=a.sent,l||(m=c.workspace).disableBlocks.apply(m,v);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0);case 13:case"end":return a.stop();}},a,null,[[0,10]])}));return function(){return a.apply(this,arguments)}}(),x={zh:{halocode_mbuild_light_sensor:"\u5149\u7EBF\u4F20\u611F\u5668",extensionName:"\u5149\u7EBF\u4F20\u611F\u5668",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"\u5149\u7EBF\u4F20\u611F\u5668 [index] \u68C0\u6D4B\u5230\u7684\u73AF\u5883\u5149\u5F3A\u5EA6",cate_05c0666e:"\u5149\u7EBF\u4F20\u611F\u5668"},en:{halocode_mbuild_light_sensor:"Light Sensor",extensionName:"Light Sensor",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Light Sensor"},de:{halocode_mbuild_light_sensor:"Lichtsensor",extensionName:"Lichtsensor",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Lichtsensor"},es:{halocode_mbuild_light_sensor:"Sensor de luz",extensionName:"Sensor de luz",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Sensor de luz"},fr:{halocode_mbuild_light_sensor:"Capteur de lumi\xE8re",extensionName:"Capteur de lumi\xE8re",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"capteur de lumi\xE8re [index] intensit\xE9 de lumi\xE8re d\xE9tect\xE9e",cate_05c0666e:"Capteur de lumi\xE8re"},id:{halocode_mbuild_light_sensor:"Sensor cahaya",extensionName:"Sensor cahaya",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Sensor cahaya"},ja:{halocode_mbuild_light_sensor:"\u5149\u30BB\u30F3\u30B5\u30FC",extensionName:"\u5149\u30BB\u30F3\u30B5\u30FC",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"\u5149\u30BB\u30F3\u30B5\u30FC [index] \u306E\u660E\u308B\u3055",cate_05c0666e:"\u5149\u30BB\u30F3\u30B5\u30FC"},"ja-jph":{halocode_mbuild_light_sensor:"\u3072\u304B\u308A\u30BB\u30F3\u30B5\u30FC",extensionName:"\u3072\u304B\u308A\u30BB\u30F3\u30B5\u30FC",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"\u3072\u304B\u308A\u30BB\u30F3\u30B5\u30FC [index] \u306E\u3042\u304B\u308B\u3055",cate_05c0666e:"\u3072\u304B\u308A\u30BB\u30F3\u30B5\u30FC"},ko:{halocode_mbuild_light_sensor:"\uAD11 \uC13C\uC11C",extensionName:"\uAD11 \uC13C\uC11C",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"\uAD11 \uC13C\uC11C"},pl:{halocode_mbuild_light_sensor:"Czujnik \u015Bwiat\u0142a",extensionName:"Czujnik \u015Bwiat\u0142a",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Czujnik \u015Bwiat\u0142a"},uk:{halocode_mbuild_light_sensor:"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0456\u0442\u043B\u0430",extensionName:"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0456\u0442\u043B\u0430",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"\u0434\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0456\u0442\u043B\u0430 [index] \u0441\u0438\u043B\u0430 \u0441\u0432\u0456\u0442\u043B\u0430",cate_05c0666e:"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0456\u0442\u043B\u0430"},"zh-hant":{halocode_mbuild_light_sensor:"\u5149\u7DDA\u611F\u6E2C\u5668",extensionName:"\u5149\u6E90\u611F\u61C9\u5668",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"\u5149\u7DDA\u611F\u6E2C\u5668 [index] \u5149\u7DDA\u5F37\u5EA6\u503C",cate_05c0666e:"\u5149\u6E90\u611F\u61C9\u5668"},nl:{halocode_mbuild_light_sensor:"Licht sensor",extensionName:"Licht sensor",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"lichtsensor [index] lichtintensiteit gedetecteerd",cate_05c0666e:"Licht sensor"},it:{halocode_mbuild_light_sensor:"Sensore di luca",extensionName:"Sensore di luce",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"sensore di luce [index] ha rilevato l'intensit\xE0 della luce",cate_05c0666e:"Sensore di luce"},hr:{halocode_mbuild_light_sensor:"Senzor osvjetljenja",extensionName:"Senzor osvjetljenja",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"senzor svjetla [index] intenzitet detektiranog svjetla",cate_05c0666e:"Senzor osvjetljenja"},ru:{halocode_mbuild_light_sensor:"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0435\u0442\u0430",extensionName:"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0435\u0442\u0430",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u0432\u0435\u0442\u0430"},pt:{halocode_mbuild_light_sensor:"Sensor de luz",extensionName:"Sensor de luz",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Sensor de luz"},fi:{halocode_mbuild_light_sensor:"Valo anturi",extensionName:"Valo anturi",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"Valo anturi"},tr:{halocode_mbuild_light_sensor:"I\u015F\u0131k Sens\xF6r\xFC",extensionName:"I\u015F\u0131k Sens\xF6r\xFC",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"I\u015F\u0131k Sens\xF6r\xFC"},tk:{halocode_mbuild_light_sensor:"Y\u015Fygy du\xFDujy enjam",extensionName:"Y\u015Fygy du\xFDujy enjam",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"y\u015Fygy du\xFDujy enjamy\u0148 [index] portunda anyklanan y\u015Fyk kuwwatlylygy",cate_05c0666e:"Y\u015Fygy du\xFDujy enjam"},ar:{halocode_mbuild_light_sensor:"\u0645\u0633\u062A\u0634\u0639\u0631 \u0627\u0644\u0636\u0648\u0621",extensionName:"\u0645\u0633\u062A\u0634\u0639\u0631 \u0627\u0644\u0636\u0648\u0621",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"\u0645\u0633\u062A\u0634\u0639\u0631 \u0627\u0644\u0636\u0648\u0621 [index] \u062A\u0645 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0634\u062F\u0629 \u0627\u0644\u0636\u0648\u0621",cate_05c0666e:"\u0645\u0633\u062A\u0634\u0639\u0631 \u0627\u0644\u0636\u0648\u0621"},ca:{halocode_mbuild_light_sensor:"Sensor de llum",extensionName:"Sensor de llum",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"intensitat lum\xEDnica detectada pel sensor de llum [index]",cate_05c0666e:"Sensor de llum"},cs:{halocode_mbuild_light_sensor:"Sn\xEDma\u010D osv\u011Btlen\xED",extensionName:"Sn\xEDma\u010D osv\u011Btlen\xED",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"sv\u011Bteln\xFD senzor [index] intenzita sv\u011Btla",cate_05c0666e:"Sn\xEDma\u010D osv\u011Btlen\xED"},fa:{halocode_mbuild_light_sensor:"\u062D\u0633\u06AF\u0631 \u0646\u0648\u0631",extensionName:"\u062D\u0633\u06AF\u0631 \u0646\u0648\u0631",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"light sensor [index] light intensity detected",cate_05c0666e:"\u062D\u0633\u06AF\u0631 \u0646\u0648\u0631"},km:{halocode_mbuild_light_sensor:"\u17A7\u1794\u1780\u179A\u178E\u17CD\u179C\u17B6\u179F\u17CB\u1796\u1793\u17D2\u179B\u17BA",extensionName:"\u17A7\u1794\u1780\u179A\u178E\u17CD\u179C\u17B6\u179F\u17CB\u1796\u1793\u17D2\u179B\u17BA",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"\u17E1",BLOCK_1559813805438_INDEX_1:"\u17E2",BLOCK_1559813805438_INDEX_2:"\u17E3",BLOCK_1559813805438_INDEX_3:"\u17E4",BLOCK_1559813805438_INDEX_4:"\u17E5",BLOCK_1559813805438_INDEX_5:"\u17E6",BLOCK_1559813805438_INDEX_6:"\u17E7",BLOCK_1559813805438_INDEX_7:"\u17E8",BLOCK_1559813805438:"\u17A7\u1794\u1780\u179A\u178E\u17CD\u179C\u17B6\u179F\u17CB\u1796\u1793\u17D2\u179B\u17BA [index] \u1794\u17B6\u1793\u179C\u17B6\u179F\u17CB\u17A2\u17B6\u17C6\u1784\u178A\u1784\u17CB\u179F\u17CA\u17B8\u178F\u17C1\u1796\u1793\u17D2\u179B\u17BA",cate_05c0666e:"\u17A7\u1794\u1780\u179A\u178E\u17CD\u179C\u17B6\u179F\u17CB\u1796\u1793\u17D2\u179B\u17BA"},vi:{halocode_mbuild_light_sensor:"C\u1EA3m bi\u1EBFn \xE1nh s\xE1ng",extensionName:"C\u1EA3m bi\u1EBFn \xE1nh s\xE1ng",extensionDescription:"",BLOCK_1559813805438_INDEX_0:"1",BLOCK_1559813805438_INDEX_1:"2",BLOCK_1559813805438_INDEX_2:"3",BLOCK_1559813805438_INDEX_3:"4",BLOCK_1559813805438_INDEX_4:"5",BLOCK_1559813805438_INDEX_5:"6",BLOCK_1559813805438_INDEX_6:"7",BLOCK_1559813805438_INDEX_7:"8",BLOCK_1559813805438:"c\u01B0\u1EDDng \u0111\u1ED9 \xE1nh s\xE1ng \u0111o xung quanh c\u1EE7a c\u1EA3m bi\u1EBFn \xE1nh s\xE1ng [index]",cate_05c0666e:"C\u1EA3m bi\u1EBFn \xE1nh s\xE1ng"}},y=function(a,b,c){return c},z={python:{}},A=[{lang:"python",template:"# generated by mBlock5 for <product>\n# codes make you happy\n\n### import #$$\n### lib #$$\n###\n# initialize variables\n###{\n  if (this.$VARIABLES.length !== 0) {\n    this.$VARIABLES.map(n => n + '= 0').join('\n')\n  }\n}#$$\n#$$\n\n### code #$$\n###\nwhile True:\n  # every tick\n  ### loop #$$\n#$$",splitor:{frame:{left:"###",right:"#$$"},expression:{left:"{",right:"}"}},reducers:[{name:"import",reduce:function reduce(a){var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i="";"string"==typeof h?i=h:"function"==typeof h&&(i=h()),-1===b.indexOf(i)&&b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g.return||g.return()}finally{if(d)throw e}}return 0==b.length?void 0:"import "+b.join(", ")}}]}],B={onLoad:function onLoad(a,b){return j(regeneratorRuntime.mark(function c(){var d,e,f;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(d=a.getService("account"),!d){c.next=8;break}return c.next=4,d.isLogin();case 4:e=c.sent,e||(f=a.workspace).disableBlocks.apply(f,v),d.onLogin(function(){var b;(b=a.workspace).enableBlocks.apply(b,v)}),d.onLogout(function(){var b;(b=a.workspace).disableBlocks.apply(b,v)});case 8:b&&"function"==typeof b.isUploadMode&&w(b.isUploadMode()?"upload":"debug",a);case 9:case"end":return c.stop();}},c)}))()},onUnload:function onUnload(){},onConnect:function onConnect(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n();case 1:case"end":return a.stop();}},a)}))()},onDisconnect:function onDisconnect(){},onStopAll:function onStopAll(){},beforeChangeUploadMode:function beforeChangeUploadMode(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a)}))()},beforeChangeDebugMode:function beforeChangeDebugMode(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a)}))()},afterChangeUploadMode:function afterChangeUploadMode(a,b){return w("upload",a,b),!0},afterChangeDebugMode:function afterChangeDebugMode(a,b){return w("debug",a,b),!0},onSelect:function onSelect(a,b){setTimeout(function(){w(b.isUploadMode()?"upload":"debug",a,b)},0)},onUnselect:function onUnselect(a,b){w("",a,b)},beforeCodeUpload:function beforeCodeUpload(){},afterCodeUpload:function afterCodeUpload(){},onRead:function onRead(a,b){var c=b.readText(!1),d=c.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g,"");d=d.replace("^P",""),""!=d&&" "!=d&&a.log(d)}},C=function(){function a(){d(this,a),this.checkFirmwareInForce="undefined"!=typeof checkFirmwareInForce&&checkFirmwareInForce,this.funcs={BLOCK_1559813805438:{onRun:function onRun(a,b,c){if(!c.isConnected()||c.isUploadMode())return 0;var d=[+a.index],e="BLOCK_1559813805438";s.parasUpdate(e,d,a.index);var f=s.getValue(e,a.index);return f},onMonitor:function onMonitor(){}}}}return c(a,[{key:"getInfo",value:function getInfo(){return{id:"halocode_mbuild_light_sensor",targets:[{name:"haloboard",options:{upload:{middlewares:[{name:"temp",func:y}]}}},{name:"cyberpi",options:{upload:{middlewares:[],driver:{}}}}],codeTypes:["python"],version:"0.0.2",platform:["mblockpc","mblockweb","mblockapp"],categories:[{name:"cate_05c0666e",colors:["#0AAD80","#099C73","#088A66"],menuIconURI:window.MbApi.getExtResPath("halocode_mbuild_light_sensor/imgs/6ca249bd77ff4d63b4606e28f5d3ba69.svg","halocode_mbuild_light_sensor"),blockIcon:{type:"image",width:28,height:26,src:window.MbApi.getExtResPath("halocode_mbuild_light_sensor/imgs/b60fe546322c4b28ad7bedc12047cc5e.svg","halocode_mbuild_light_sensor")},blocks:[{opcode:"BLOCK_1559813805438",blockType:"number",checkboxInFlyout:!0,hidden:!1,gap:12,arguments:{index:{type:"fieldMenu",defaultValue:"1",menu:"BLOCK_1559813805438_INDEX"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"mbuild.light_sensor.get_value({index})",sections:{import:["mbuild"]}}},handler:this.funcs.BLOCK_1559813805438}],menus:{BLOCK_1559813805438_INDEX:[{text:"BLOCK_1559813805438_INDEX_0",value:"1"},{text:"BLOCK_1559813805438_INDEX_1",value:"2"},{text:"BLOCK_1559813805438_INDEX_2",value:"3"},{text:"BLOCK_1559813805438_INDEX_3",value:"4"},{text:"BLOCK_1559813805438_INDEX_4",value:"5"},{text:"BLOCK_1559813805438_INDEX_5",value:"6"},{text:"BLOCK_1559813805438_INDEX_6",value:"7"},{text:"BLOCK_1559813805438_INDEX_7",value:"8"}]}}],generators:A,translationMap:x,snippets:z,generatorStartBlocks:[],feature:[],mustLoginBlocks:[],disabledOffline:[],disabledOnline:[]}}},{key:"getHandler",value:function getHandler(){return"object"===l(B)?B:"function"==typeof B?new B:void 0}}]),a}();a.default=C});