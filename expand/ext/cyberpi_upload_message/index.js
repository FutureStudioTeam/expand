(function(a,b){if("function"==typeof define&&define.amd)define(["exports"],b);else if("undefined"!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.unknown=c.exports}})(this,function(a){"use strict";function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function c(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),a}function d(a,b){if(!k(a,b))throw new TypeError("Cannot call a class as a function")}function e(a){return h(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function h(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function i(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function j(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){i(h,d,e,f,g,"next",a)}function g(a){i(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function k(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}function m(a){var b=D(a,!0);return b}function n(a){var b=/^\d+(\.\d+)?$/,c=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!!(b.test(a)||c.test(a))}function o(a,b){var c=[],d=[],e={};b||(b=""),e.message=a,e.value=b;var f=JSON.stringify(e);return d=m(f),c=[3],c=c.concat(d),c=c.concat(0),c}function p(){return q.apply(this,arguments)}function q(){return q=j(regeneratorRuntime.mark(function a(b,c){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!y){a.next=5;break}return n(c)&&(c=+c),a.next=4,y.asyncWriteProtocol("f3f4",o(b,c));case 4:setTimeout(function(){z.sendMessage("robot2spriteBroadcast",{type:"cmd",msg:"threadFinish"})},5);case 5:case"end":return a.stop();}},a)})),q.apply(this,arguments)}function r(a,b){y=a,z=b}function s(){t(),A||(A=z.subscribeMessage("sprite2robotBroadcast",function(a){p(a.msg,a.value)}))}function t(){A&&A(),A=null}function u(){return v.apply(this,arguments)}function v(){return v=j(regeneratorRuntime.mark(function a(){var b,c,d=arguments;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b=!!(0<d.length&&void 0!==d[0])&&d[0],c=!1,b?(c=!0,C&&(C(),C=null)):null===C&&(c=!0),!0!==c){a.next=7;break}return a.next=6,y.subscribeReadProtocol("f3f4",[3,"string0"],function(a){if(null===a)return null;try{var b=a[0],c=JSON.parse(b);B[c.message]=c.value;var d={msg:c.message,value:c.value||""};z.sendMessage("robot2spriteBroadcast",d)}catch(a){}});case 6:C=a.sent;case 7:case"end":return a.stop();}},a)})),v.apply(this,arguments)}function w(){C&&C()}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,!function(a){function b(a,b,c,e){var f=b&&k(b.prototype,d)?b:d,g=Object.create(f.prototype),h=new o(e||[]);return g._invoke=i(a,c,h),g}function c(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function d(){}function e(){}function f(){}function g(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}function h(a){function b(d,e,f,g){var h=c(a[d],a,e);if("throw"===h.type)g(h.arg);else{var i=h.arg,j=i.value;return j&&"object"===l(j)&&s.call(j,"__await")?Promise.resolve(j.__await).then(function(a){b("next",a,f,g)},function(a){b("throw",a,f,g)}):Promise.resolve(j).then(function(a){i.value=a,f(i)},function(a){return b("throw",a,f,g)})}}function d(a,c){function d(){return new Promise(function(d,e){b(a,c,d,e)})}return e=e?e.then(d,d):d()}var e;this._invoke=d}function i(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return q()}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=j(h,d);if(i){if(i===z)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var k=c(a,b,d);if("normal"===k.type){if(e=d.done?"completed":"suspendedYield",k.arg===z)continue;return{value:k.arg,done:d.done}}"throw"===k.type&&(e="completed",d.method="throw",d.arg=k.arg)}}}function j(a,b){var d=a.iterator[b.method];if(void 0===d){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,j(a,b),"throw"===b.method))return z;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return z}var e=c(d,a.iterator,b.arg);if("throw"===e.type)return b.method="throw",b.arg=e.arg,b.delegate=null,z;var f=e.arg;if(!f)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,z;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0);else return f;return b.delegate=null,z}function m(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function n(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function o(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(m,this),this.reset(!0)}function p(a){if(a){var b=a[u];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(s.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:q}}function q(){return{value:void 0,done:!0}}var r=Object.prototype,s=r.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},u=t.iterator||"@@iterator",v=t.asyncIterator||"@@asyncIterator",w=t.toStringTag||"@@toStringTag",x="object"===("undefined"==typeof module?"undefined":l(module)),y=a.regeneratorRuntime;if(y)return void(x&&(module.exports=y));y=a.regeneratorRuntime=x?module.exports||{}:{},y.wrap=b;var z={},A={};A[u]=function(){return this};var B=Object.getPrototypeOf,C=B&&B(B(p([])));C&&C!==r&&s.call(C,u)&&(A=C);var D=f.prototype=d.prototype=Object.create(A);e.prototype=D.constructor=f,f.constructor=e,f[w]=e.displayName="GeneratorFunction",y.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===e||"GeneratorFunction"===(b.displayName||b.name))},y.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,f):(a.__proto__=f,!(w in a)&&(a[w]="GeneratorFunction")),a.prototype=Object.create(D),a},y.awrap=function(a){return{__await:a}},g(h.prototype),h.prototype[v]=function(){return this},y.AsyncIterator=h,y.async=function(a,c,d,e){var f=new h(b(a,c,d,e));return y.isGeneratorFunction(c)?f:f.next().then(function(a){return a.done?a.value:f.next()})},g(D),D[w]="Generator",D[u]=function(){return this},D.toString=function(){return"[object Generator]"},y.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},y.values=p,o.prototype={constructor:o,reset:function reset(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(n),!a)for(var b in this)"t"===b.charAt(0)&&s.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function stop(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if("throw"===b.type)throw b.arg;return this.rval},dispatchException:function dispatchException(a){function b(b,d){return f.type="throw",f.arg=a,c.next=b,d&&(c.method="next",c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if("root"===e.tryLoc)return b("end");if(e.tryLoc<=this.prev){var g=s.call(e,"catchLoc"),h=s.call(e,"finallyLoc");if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error("try statement without catch or finally");else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function abrupt(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&s.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var e=c;break}e&&("break"===a||"continue"===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method="next",this.next=e.finallyLoc,z):this.complete(f)},complete:function complete(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),z},finish:function finish(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),n(b),z},catch:function _catch(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var e=d.arg;n(b)}return e}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(a,b,c){return this.delegate={iterator:p(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),z}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":l(self))&&self}()||Function("return this")());var x,y,z,A,B={},C=null,D=function(a,b){for(var c,d=[],e=0,f=0;f<a.length;f++)c=a.charCodeAt(f),0<=c&&127>=c?(e+=1,d.push(c)):128<=c&&2047>=c?(e+=2,d.push(192|31&c>>6),d.push(128|63&c)):(2048<=c&&55295>=c||57344<=c&&65535>=c)&&(e+=3,d.push(224|15&c>>12),d.push(128|63&c>>6),d.push(128|63&c));for(f=0;f<d.length;f++)d[f]&=255;return b?d:255>=e?[0,e].concat(d):[e>>8,255&e].concat(d)},E={debug:["cyberpi_upload_message.BLOCK_1551748322055","cyberpi_upload_message.BLOCK_1551748500023","cyberpi_upload_message.BLOCK_1551748632732","cyberpi_upload_message.BLOCK_1551748721826"],upload:[]},F=[],G=function(){var a=j(regeneratorRuntime.mark(function a(b,c){var d,f,g,h,i,j,k,l,m;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(c&&c.workspace)){a.next=8;break}return"debug"===b?((d=c.workspace).enableBlocks.apply(d,e(E.upload)),(f=c.workspace).disableBlocks.apply(f,e(E.debug))):"upload"===b?((g=c.workspace).enableBlocks.apply(g,e(E.debug)),(h=c.workspace).disableBlocks.apply(h,e(E.upload))):((i=c.workspace).enableBlocks.apply(i,e(E.upload)),(j=c.workspace).enableBlocks.apply(j,e(E.debug))),k=c.getService("account"),a.next=6,k.isLogin();case 6:l=a.sent,l||(m=c.workspace).disableBlocks.apply(m,F);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0);case 13:case"end":return a.stop();}},a,null,[[0,10]])}));return function(){return a.apply(this,arguments)}}(),H={zh:{cyberpi_upload_message:"\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD",extensionName:"\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"\u53D1\u9001\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD [message] ",BLOCK_1551748500023:"\u53D1\u9001\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD [message] \u5E76\u9644\u52A0\u503C [value] ",BLOCK_1551748632732:"\u5F53\u63A5\u6536\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD [message] ",BLOCK_1551748721826:"\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD [message] \u7684\u9644\u52A0\u503C",cate_70548abe:"\u4E0A\u4F20\u6A21\u5F0F\u5E7F\u64AD"},en:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast",halocode_upload_message:"Upload Mode Broadcast"},de:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},es:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},fr:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},id:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},ja:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},"ja-jph":{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},ko:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},pl:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},uk:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},"zh-hant":{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},nl:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},it:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},hr:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},ru:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},pt:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},fi:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},tr:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},tk:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},ar:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},ca:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},cs:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},fa:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"},vi:{cyberpi_upload_message:"Upload Mode Broadcast",extensionName:"Upload Mode Broadcast",extensionDescription:"https://www.mblock.cc/api-docs/_preview/mblock-5/zh/use-extensions/use-extensions.html",BLOCK_1551748322055:"send upload mode message[message]",BLOCK_1551748500023:"send upload mode message[message] with value[value]",BLOCK_1551748632732:"when receiving upload mode message [message]",BLOCK_1551748721826:"upload mode message [message] value",cate_70548abe:"Upload Mode Broadcast"}},I={python:{}},J=[{lang:"python",template:"# generated by mBlock5 for <product>\n# codes make you happy\n\n### import #$$\n### lib #$$\n###\n# initialize variables\n###{\n  if (this.$VARIABLES.length !== 0) {\n    this.$VARIABLES.map(n => n + '= 0').join('\n')\n  }\n}#$$\n#$$\n\n### code #$$\n###\nwhile True:\n  # every tick\n  ### loop #$$\n#$$",splitor:{frame:{left:"###",right:"#$$"},expression:{left:"{",right:"}"}},reducers:[{name:"import",reduce:function reduce(a){var b=[],c=!0,d=!1,e=void 0;try{for(var f,g=a[Symbol.iterator]();!(c=(f=g.next()).done);c=!0){var h=f.value,i="";"string"==typeof h?i=h:"function"==typeof h&&(i=h()),-1===b.indexOf(i)&&b.push(i)}}catch(a){d=!0,e=a}finally{try{c||null==g.return||g.return()}finally{if(d)throw e}}return 0==b.length?void 0:"import "+b.join(", ")}}]}],K={onLoad:function onLoad(a,b){return j(regeneratorRuntime.mark(function c(){var d,e,f;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(d=a.getService("account"),!d){c.next=8;break}return c.next=4,d.isLogin();case 4:e=c.sent,e||(f=a.workspace).disableBlocks.apply(f,F),d.onLogin(function(){var b;(b=a.workspace).enableBlocks.apply(b,F)}),d.onLogout(function(){var b;(b=a.workspace).disableBlocks.apply(b,F)});case 8:return b&&"function"==typeof b.isUploadMode&&G(b.isUploadMode()?"upload":"debug",a),r(b,a),s(a),c.next=13,u(!0);case 13:b.tar.name?x=b.tar.name:b.tar.sprite&&(x=b.tar.sprite.name);case 15:case"end":return c.stop();}},c)}))()},onUnload:function onUnload(){w()},onConnect:function onConnect(a,b){return j(regeneratorRuntime.mark(function c(){return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return r(b,a),s(),w(),c.next=5,u(!0);case 5:case 6:case"end":return c.stop();}},c)}))()},onDisconnect:function onDisconnect(){w()},onStopAll:function onStopAll(){},beforeChangeUploadMode:function beforeChangeUploadMode(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a)}))()},beforeChangeDebugMode:function beforeChangeDebugMode(){return j(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a)}))()},afterChangeUploadMode:function afterChangeUploadMode(a,b){return G("upload",a,b),!0},afterChangeDebugMode:function afterChangeDebugMode(a,b){return G("debug",a,b),!0},onSelect:function onSelect(a,b){y=b,setTimeout(function(){G(b.isUploadMode()?"upload":"debug",a,b)},0),b.tar.sprite&&(x=b.tar.sprite.name)},onUnselect:function onUnselect(a,b){G("",a,b)},beforeCodeUpload:function beforeCodeUpload(){},afterCodeUpload:function afterCodeUpload(){},onRead:function onRead(){}},L=function(){function a(){d(this,a),this.checkFirmwareInForce="undefined"!=typeof checkFirmwareInForce&&checkFirmwareInForce,this.funcs={BLOCK_1551748322055:{onRun:function onRun(){}},BLOCK_1551748500023:{onRun:function onRun(){}},BLOCK_1551748632732:{onRun:function onRun(){},onAdd:function onAdd(){},onRemove:function onRemove(){}},BLOCK_1551748721826:{onRun:function onRun(){}}}}return c(a,[{key:"getInfo",value:function getInfo(){return{id:"cyberpi_upload_message",targets:["cyberpi"],codeTypes:["python"],version:"0.0.1",platform:["mblockpc","mblockweb","mblockapp"],categories:[{name:"cate_70548abe",colors:["#0AAD80","#099C73","#088A66"],menuIconURI:window.MbApi.getExtResPath("cyberpi_upload_message/imgs/999a26847edf4fc4be649b0500b2fbbb.svg","cyberpi_upload_message"),blockIcon:{type:"image",width:28,height:26,src:window.MbApi.getExtResPath("cyberpi_upload_message/imgs/7de87a48aa54406e8a54413f5cdeb454.svg","cyberpi_upload_message")},blocks:[{opcode:"BLOCK_1551748322055",blockType:"command",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{message:{type:"string",defaultValue:"message"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"cyberpi.upload_broadcast.set({message}, 0)",sections:{import:["cyberpi"]}}},handler:this.funcs.BLOCK_1551748322055},{opcode:"BLOCK_1551748500023",blockType:"command",checkboxInFlyout:!1,hidden:!1,gap:36,arguments:{message:{type:"string",defaultValue:"message"},value:{type:"string",defaultValue:"1",checkNumber:!0}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"cyberpi.upload_broadcast.set({message}, {value})",sections:{import:["cyberpi"]}}},handler:this.funcs.BLOCK_1551748500023},{opcode:"BLOCK_1551748632732",blockType:"hat",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{message:{type:"string",defaultValue:"message"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"@cyberpi.event.upload_broadcast({message})\r\ndef on_upload_mode_message{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r",sections:{import:["event","cyberpi"]}}},handler:this.funcs.BLOCK_1551748632732},{opcode:"BLOCK_1551748721826",blockType:"number",checkboxInFlyout:!1,hidden:!1,gap:12,arguments:{message:{type:"string",defaultValue:"message"}},branchCount:0,platform:["mblockpc","mblockweb","mblockapp"],codes:{python:{code:"cyberpi.upload_broadcast.get({message})",sections:{import:["cyberpi"]}}},handler:this.funcs.BLOCK_1551748721826}],menus:{}}],generators:J,translationMap:H,snippets:I,generatorStartBlocks:["BLOCK_1551748632732"],feature:[],mustLoginBlocks:[],disabledOffline:[],disabledOnline:["cyberpi_upload_message.BLOCK_1551748322055","cyberpi_upload_message.BLOCK_1551748500023","cyberpi_upload_message.BLOCK_1551748632732","cyberpi_upload_message.BLOCK_1551748721826"]}}},{key:"getHandler",value:function getHandler(){return"object"===l(K)?K:"function"==typeof K?new K:void 0}}]),a}();a.default=L});