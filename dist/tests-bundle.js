!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var o=n(3),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,a="foo"===function(){}.name;function s(t){return Object.prototype.toString.call(t)}function f(t){return!i(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var l=t.exports=m,p=/\s*function\s+([^\(\s]*)\s*/;function h(t){if(o.isFunction(t)){if(a)return t.name;var e=t.toString().match(p);return e&&e[1]}}function d(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function g(t){if(a||!o.isFunction(t))return o.inspect(t);var e=h(t);return"[Function"+(e?": "+e:"")+"]"}function y(t,e,n,r,i){throw new l.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:i})}function m(t,e){t||y(t,!0,e,"==",l.ok)}function b(t,e,n,u){if(t===e)return!0;if(i(t)&&i(e))return 0===r(t,e);if(o.isDate(t)&&o.isDate(e))return t.getTime()===e.getTime();if(o.isRegExp(t)&&o.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(f(t)&&f(e)&&s(t)===s(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;var a=(u=u||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===u.expected.indexOf(e)||(u.actual.push(t),u.expected.push(e),function(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;if(o.isPrimitive(t)||o.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=v(t),u=v(e);if(i&&!u||!i&&u)return!1;if(i)return t=c.call(t),e=c.call(e),b(t,e,n);var a,s,f=S(t),l=S(e);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),s=f.length-1;s>=0;s--)if(f[s]!==l[s])return!1;for(s=f.length-1;s>=0;s--)if(a=f[s],!b(t[a],e[a],n,r))return!1;return!0}(t,e,n,u))}return n?t===e:t==e}function v(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function E(t,e,n,r){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!i&&y(i,n,"Missing expected exception"+r);var u="string"==typeof r,c=!t&&o.isError(i),a=!t&&i&&!n;if((c&&u&&w(i,n)||a)&&y(i,n,"Got unwanted exception"+r),t&&i&&n&&!w(i,n)||!t&&i)throw i}l.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return d(g(t.actual),128)+" "+t.operator+" "+d(g(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,i=h(e),o=r.indexOf("\n"+i);if(o>=0){var u=r.indexOf("\n",o+1);r=r.substring(u+1)}this.stack=r}}},o.inherits(l.AssertionError,Error),l.fail=y,l.ok=m,l.equal=function(t,e,n){t!=e&&y(t,e,n,"==",l.equal)},l.notEqual=function(t,e,n){t==e&&y(t,e,n,"!=",l.notEqual)},l.deepEqual=function(t,e,n){b(t,e,!1)||y(t,e,n,"deepEqual",l.deepEqual)},l.deepStrictEqual=function(t,e,n){b(t,e,!0)||y(t,e,n,"deepStrictEqual",l.deepStrictEqual)},l.notDeepEqual=function(t,e,n){b(t,e,!1)&&y(t,e,n,"notDeepEqual",l.notDeepEqual)},l.notDeepStrictEqual=function t(e,n,r){b(e,n,!0)&&y(e,n,r,"notDeepStrictEqual",t)},l.strictEqual=function(t,e,n){t!==e&&y(t,e,n,"===",l.strictEqual)},l.notStrictEqual=function(t,e,n){t===e&&y(t,e,n,"!==",l.notStrictEqual)},l.throws=function(t,e,n){E(!0,t,e,n)},l.doesNotThrow=function(t,e,n){E(!1,t,e,n)},l.ifError=function(t){if(t)throw t};var S=Object.keys||function(t){var e=[];for(var n in t)u.call(t,n)&&e.push(n);return e}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){n(7),t.exports=n(8)},function(t,e,n){(function(t,r){var i=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,o=r.length,u=String(t).replace(i,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),a=r[n];n<o;a=r[++n])g(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},e.deprecate=function(n,i){if(b(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var o=!1;return function(){if(!o){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),o=!0}return n.apply(this,arguments)}};var o,u={};function c(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),f(r,t,r.depth)}function a(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function f(t,n,r){if(t.customInspect&&n&&x(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return m(i)||(i=f(t,i,r)),i}var o=function(t,e){if(b(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(y(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,n);if(o)return o;var u=Object.keys(n),c=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),S(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(x(n)){var a=n.name?": "+n.name:"";return t.stylize("[Function"+a+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return t.stylize(Date.prototype.toString.call(n),"date");if(S(n))return l(n)}var s,w="",j=!1,O=["{","}"];(h(n)&&(j=!0,O=["[","]"]),x(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),E(n)&&(w=" "+Date.prototype.toUTCString.call(n)),S(n)&&(w=" "+l(n)),0!==u.length||j&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=j?function(t,e,n,r,i){for(var o=[],u=0,c=e.length;u<c;++u)T(e,String(u))?o.push(p(t,e,n,r,String(u),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(p(t,e,n,r,i,!0))}),o}(t,n,r,c,u):u.map(function(e){return p(t,n,r,c,e,j)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,w,O)):O[0]+w+O[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,i,o){var u,c,a;if((a=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),T(r,i)||(u="["+i+"]"),c||(t.seen.indexOf(a.value)<0?(c=g(n)?f(t,a.value,null):f(t,a.value,n-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n")):c=t.stylize("[Circular]","special")),b(u)){if(o&&i.match(/^\d+$/))return c;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function h(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function g(t){return null===t}function y(t){return"number"==typeof t}function m(t){return"string"==typeof t}function b(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===j(t)}function w(t){return"object"==typeof t&&null!==t}function E(t){return w(t)&&"[object Date]"===j(t)}function S(t){return w(t)&&("[object Error]"===j(t)||t instanceof Error)}function x(t){return"function"==typeof t}function j(t){return Object.prototype.toString.call(t)}function O(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(b(o)&&(o=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!u[t])if(new RegExp("\\b"+t+"\\b","i").test(o)){var n=r.pid;u[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else u[t]=function(){};return u[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=h,e.isBoolean=d,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=y,e.isString=m,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=b,e.isRegExp=v,e.isObject=w,e.isDate=E,e.isError=S,e.isFunction=x,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(5);var q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[O(t.getHours()),O(t.getMinutes()),O(t.getSeconds())].join(":");return[t.getDate(),q[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=n(6),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(this,n(1),n(4))},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&h())}function h(){if(!f){var t=c(p);f=!0;for(var e=s.length;e;){for(a=s,s=[];++l<e;)a&&a[l].run();l=-1,e=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||f||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);const o={factorial:t=>t<0?-1:0===t?1:t*o.factorial(t-1),permutations:t=>{const e=[];for(let n=0;n<t.length;n+=1){const r=o.permutations(t.slice(0,n).concat(t.slice(n+1)));if(0===r.length)e.push([t[n]]);else for(let i=0;i<r.length;i+=1)e.push([t[n]].concat(r[i]))}return e},combination:(t,e)=>{return o.factorial(t)/(o.factorial(e)*o.factorial(t-e))},mean:t=>t.reduce((t,e)=>t+e)/t.length,variance:t=>{const e=o.mean(t),n=t.map(t=>(t-e)**2);return o.mean(n)},sigma:t=>{},intersection:t=>{},union:t=>{}};var u=o;function c(t){let e=!1;return t.forEach(n=>{let r=0;t.forEach(t=>{n.join("")===t.join("")&&(r+=1)}),r>1&&(e=!0)}),e}describe("Test helper functions",function(){describe("checkForNestedDuplicates",function(){it("Has duplicates",function(){i.a.equal(c([["a","b"],["c","g"],["a","b"]]),!0)}),it("No duplicates",function(){i.a.equal(c([["a","b"],["c","g"],["a","z"]]),!1)})})}),describe("generalStatHelper",function(){describe("factorial",function(){it("4! = 24",function(){i.a.equal(u.factorial(4),24)})}),describe("permutations",function(){const t=["a","b","c"],e=u.factorial(t.length);it(`[${t.join(", ")}]! = ${e}`,function(){i.a.equal(u.permutations(t).length,e)}),it("Contains no duplicates",function(){i.a.equal(c(u.permutations(t)),!1)})}),describe("combination",function(){it("4 chosen from group of 15 has 1365 possible combinations",function(){i.a.equal(u.combination(15,4),1365)})}),describe("mean",function(){const t=[600,470,170,430,300];it(`[${t.join(", ")}] has a mean of 394`,function(){i.a.equal(u.mean(t),394)})}),describe("variance",function(){const t=[600,470,170,430,300];it(`[${t.join(", ")}] has a variance of 21704`,function(){i.a.equal(u.variance(t),21704)})})})},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);class o{constructor(t,e){this.currentIndex=0,this.seq=t,this.discreteEvents=e;const n=Math.floor(e/t.length);let r=Math.abs(e-n*t.length),i=0;this.possibleSets=this.seq.map(t=>(r>0?(r-=1,i=1):i=0,Array(n+i).fill(t))),this.unShuffledSet=[].concat(...this.possibleSets),this.shuffledSet=this.unShuffledSet.map(t=>[Math.random(),t]).sort((t,e)=>t[0]-e[0]).map(t=>t[1])}get rand(){const t=this.shuffledSet[this.currentIndex];return this.currentIndex=this.currentIndex>=this.discreteEvents?0:this.currentIndex+1,t}}describe("Random Generator",function(){const t=[Math.floor(100*Math.random())+1,Math.floor(100*Math.random())+1,Math.floor(100*Math.random())+1],e=[1,2,3,4,5,6],n=[new o(e,t[0]),new o(e,t[1]),new o(e,t[2])];describe("Shuffled Array has the same specified size",function(){it(`Rolling dice ${t[0]} times`,function(){i.a.equal(n[0].shuffledSet.length,t[0])}),it(`Rolling dice ${t[1]} times`,function(){i.a.equal(n[1].shuffledSet.length,t[1])}),it(`Rolling dice ${t[2]} times`,function(){i.a.equal(n[2].shuffledSet.length,t[2])})})})}]);