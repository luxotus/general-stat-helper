!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function o(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var i=n(2),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,a="foo"===function(){}.name;function f(t){return Object.prototype.toString.call(t)}function s(t){return!o(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var l=t.exports=b,p=/\s*function\s+([^\(\s]*)\s*/;function y(t){if(i.isFunction(t)){if(a)return t.name;var e=t.toString().match(p);return e&&e[1]}}function g(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function d(t){if(a||!i.isFunction(t))return i.inspect(t);var e=y(t);return"[Function"+(e?": "+e:"")+"]"}function h(t,e,n,r,o){throw new l.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function b(t,e){t||h(t,!0,e,"==",l.ok)}function m(t,e,n,u){if(t===e)return!0;if(o(t)&&o(e))return 0===r(t,e);if(i.isDate(t)&&i.isDate(e))return t.getTime()===e.getTime();if(i.isRegExp(t)&&i.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(s(t)&&s(e)&&f(t)===f(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;var a=(u=u||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===u.expected.indexOf(e)||(u.actual.push(t),u.expected.push(e),function(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;if(i.isPrimitive(t)||i.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=v(t),u=v(e);if(o&&!u||!o&&u)return!1;if(o)return t=c.call(t),e=c.call(e),m(t,e,n);var a,f,s=x(t),l=x(e);if(s.length!==l.length)return!1;for(s.sort(),l.sort(),f=s.length-1;f>=0;f--)if(s[f]!==l[f])return!1;for(f=s.length-1;f>=0;f--)if(a=s[f],!m(t[a],e[a],n,r))return!1;return!0}(t,e,n,u))}return n?t===e:t==e}function v(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function E(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&h(o,n,"Missing expected exception"+r);var u="string"==typeof r,c=!t&&i.isError(o),a=!t&&o&&!n;if((c&&u&&w(o,n)||a)&&h(o,n,"Got unwanted exception"+r),t&&o&&n&&!w(o,n)||!t&&o)throw o}l.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return g(d(t.actual),128)+" "+t.operator+" "+g(d(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||h;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=y(e),i=r.indexOf("\n"+o);if(i>=0){var u=r.indexOf("\n",i+1);r=r.substring(u+1)}this.stack=r}}},i.inherits(l.AssertionError,Error),l.fail=h,l.ok=b,l.equal=function(t,e,n){t!=e&&h(t,e,n,"==",l.equal)},l.notEqual=function(t,e,n){t==e&&h(t,e,n,"!=",l.notEqual)},l.deepEqual=function(t,e,n){m(t,e,!1)||h(t,e,n,"deepEqual",l.deepEqual)},l.deepStrictEqual=function(t,e,n){m(t,e,!0)||h(t,e,n,"deepStrictEqual",l.deepStrictEqual)},l.notDeepEqual=function(t,e,n){m(t,e,!1)&&h(t,e,n,"notDeepEqual",l.notDeepEqual)},l.notDeepStrictEqual=function t(e,n,r){m(e,n,!0)&&h(e,n,r,"notDeepStrictEqual",t)},l.strictEqual=function(t,e,n){t!==e&&h(t,e,n,"===",l.strictEqual)},l.notStrictEqual=function(t,e,n){t===e&&h(t,e,n,"!==",l.notStrictEqual)},l.throws=function(t,e,n){E(!0,t,e,n)},l.doesNotThrow=function(t,e,n){E(!1,t,e,n)},l.ifError=function(t){if(t)throw t};var x=Object.keys||function(t){var e=[];for(var n in t)u.call(t,n)&&e.push(n);return e}}).call(this,n(0))},function(t,e,n){(function(t,r){var o=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),a=r[n];n<i;a=r[++n])d(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},e.deprecate=function(n,o){if(m(t.process))return function(){return e.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}};var i,u={};function c(t,n){var r={seen:[],stylize:f};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),s(r,t,r.depth)}function a(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function f(t,e){return t}function s(t,n,r){if(t.customInspect&&n&&O(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return b(o)||(o=s(t,o,r)),o}var i=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(h(e))return t.stylize(""+e,"number");if(g(e))return t.stylize(""+e,"boolean");if(d(e))return t.stylize("null","null")}(t,n);if(i)return i;var u=Object.keys(n),c=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),x(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(O(n)){var a=n.name?": "+n.name:"";return t.stylize("[Function"+a+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return l(n)}var f,w="",j=!1,S=["{","}"];(y(n)&&(j=!0,S=["[","]"]),O(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),E(n)&&(w=" "+Date.prototype.toUTCString.call(n)),x(n)&&(w=" "+l(n)),0!==u.length||j&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),f=j?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)q(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))}),i}(t,n,r,c,u):u.map(function(e){return p(t,n,r,c,e,j)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(f,w,S)):S[0]+w+S[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,a;if((a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),q(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(a.value)<0?(c=d(n)?s(t,a.value,null):s(t,a.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n")):c=t.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function d(t){return null===t}function h(t){return"number"==typeof t}function b(t){return"string"==typeof t}function m(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===j(t)}function w(t){return"object"==typeof t&&null!==t}function E(t){return w(t)&&"[object Date]"===j(t)}function x(t){return w(t)&&("[object Error]"===j(t)||t instanceof Error)}function O(t){return"function"==typeof t}function j(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(m(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!u[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;u[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else u[t]=function(){};return u[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=g,e.isNull=d,e.isNullOrUndefined=function(t){return null==t},e.isNumber=h,e.isString=b,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=v,e.isObject=w,e.isDate=E,e.isError=x,e.isFunction=O,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(4);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function q(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return[t.getDate(),T[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=n(5),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(this,n(0),n(3))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&y())}function y(){if(!s){var t=c(p);s=!0;for(var e=f.length;e;){for(a=f,f=[];++l<e;)a&&a[l].run();l=-1,e=f.length}a=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new g(t,e)),1!==f.length||s||c(y)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);const i={factorial:t=>t<0?-1:0===t?1:t*i.factorial(t-1),permutations:t=>{const e=[];for(let n=0;n<t.length;n+=1){const r=i.permutations(t.slice(0,n).concat(t.slice(n+1)));if(0===r.length)e.push([t[n]]);else for(let o=0;o<r.length;o+=1)e.push([t[n]].concat(r[o]))}return e},combination:()=>{},binomialCoefficient:()=>{}};var u=i;function c(t){let e=!1;return t.forEach(n=>{let r=0;t.forEach(t=>{n.join("")===t.join("")&&(r+=1)}),r>1&&(e=!0)}),e}console.log(u.permutations(["a","b","c"])),describe("Test helper functions",function(){describe("checkForNestedDuplicates",function(){it("Has duplicates",function(){o.a.equal(c([["a","b"],["c","g"],["a","b"]]),!0)}),it("No duplicates",function(){o.a.equal(c([["a","b"],["c","g"],["a","z"]]),!1)})})}),describe("generalStatHelper",function(){describe("factorial",function(){it("4! = 24",function(){o.a.equal(u.factorial(4),24)})}),describe("permutations",function(){const t=["a","b","c"],e=u.factorial(t.length);it(`[${t.join(", ")}]! = ${e}`,function(){o.a.equal(u.permutations(t).length,e)}),it("Contains no duplicates",function(){o.a.equal(c(u.permutations(t)),!1)})})})}]);