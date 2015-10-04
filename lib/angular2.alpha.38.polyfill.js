/*
 * SystemJS v0.19.3
 */
!function(){function e(){!function(e){function t(e,t){var n;if(e instanceof Error){var n=new Error(e.message,e.fileName,e.lineNumber);j?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)}else n=e+"\n	"+t;return n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},M(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o){r=o;break}}else{var i=s[0].length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r]||t;return"string"==typeof n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),D.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e]||function(){})}function c(e){D=e(D||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=O.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(q){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&M(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,M(t,"__useDefault",{value:!0}),t}function p(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function h(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&"object"==typeof e[r]?e[r]=p(p({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function g(e){this.warnings&&"undefined"!=typeof console&&console.warn}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function y(){if(B[this.baseURL])return B[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new L(this.baseURL,z);return this.baseURL=e.href,B[this.baseURL]=e}function b(){return{name:null,deps:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function x(e){var t,n,r,r="~"==e[0],a=e.lastIndexOf("|");return-1!=a?(t=e.substr(a+1),n=e.substr(r,a-r)||"@system-env"):(t=null,n=e.substr(r)),{module:n,prop:t,negate:r}}function w(e){return(e.negate?"~":"")+e.module+(e.prop?"|"+e.prop:"")}function S(e,t,n){return this["import"](e.module,t).then(function(t){return e.prop?t=v(e.prop,t):"object"==typeof t&&t+""=="Module"&&(t=t["default"]),e.negate?!t:t})}function E(e,t){var n=e.match(X);if(!n)return Promise.resolve(e);var r=x(n[0].substr(2,n[0].length-3));return this.builder?this.normalize(r.module,t).then(function(t){return r.conditionModule=t,e.replace(X,"#{"+w(r)+"}")}):S.call(this,r,t,!1).then(function(t){if("string"!=typeof t)throw new TypeError("The condition value for "+e+" doesn't resolve to a string.");return e.replace(X,t)})}function k(e,t){var n=e.lastIndexOf("#?");if(-1==n)return Promise.resolve(e);var r=x(e.substr(n+2));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.substr(0,n)+"#?"+w(r)}):S.call(this,r,t,!0).then(function(t){return t?e.substr(0,n):"@empty"})}function _(e,t){for(var n in e.loadedBundles_)if(-1!=O.call(e.bundles[n],t))return Promise.resolve(n);for(var n in e.bundles)if(-1!=O.call(e.bundles[n],t))return e.normalize(n).then(function(t){return e.bundles[t]=e.bundles[n],e.loadedBundles_[t]=!0,t});return Promise.resolve()}var R="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,j="undefined"!=typeof window&&"undefined"!=typeof document,P="undefined"!=typeof process&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var M,O=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(M=Object.defineProperty)}catch(e){M=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var z;if("undefined"!=typeof document&&document.getElementsByTagName){if(z=document.baseURI,!z){var T=document.getElementsByTagName("base");z=T[0]&&T[0].href||window.location.href}z=z.split("#")[0].split("?")[0],z=z.substr(0,z.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)z="file://"+(P?"/":"")+process.cwd()+"/",P&&(z=z.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");z=e.location.href}var L=e.URLPolyfill||e.URL;M(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++k+">",r.isDeclarative=!0,E.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)g(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length))return i.linkSets[0].done.then(function(){t(i)});var p=i||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==s?l(r,p):"fetch"==s?u(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function p(e){var t=!1;try{x(e,function(n,r){g(e,n,r),t=!0})}catch(n){g(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:_({}),evaluated:!0}:{module:_({})},t.status="linked",v(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function g(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+' as "'+l.key+'" from '+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==O.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=O.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=O.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function v(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=O.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=O.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function b(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function x(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=y(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",v(n,o)}}function w(e,t){return t.module.module}function S(){}function E(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var k=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return b(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(S(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(S(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||b(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],w(t,n)}))})},load:function(e,t){var n=this._loader;return n.modules[e]?(S(n.modules[e],[],n),Promise.resolve(n.modules[e].module)):n.importPromises[e]||b(this,e,s(n,e,{}).then(function(t){return delete n.importPromises[e],w(n,t)}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return w(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t,n=new r;if(Object.getOwnPropertyNames&&null!=e)t=Object.getOwnPropertyNames(e);else{t=[];for(var a in e)t.push(a)}for(var o=0;o<t.length;o++)(function(t){M(n,t,{configurable:!1,enumerable:!0,get:function(){return e[t]}})})(t[o]);return Object.preventExtensions&&Object.preventExtensions(n),n},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var _=a.prototype.newModule}();var F;i.prototype=a.prototype,o.prototype=new i;var I;if("undefined"!=typeof XMLHttpRequest)I=function(e,t,n,r){function a(){n(s.responseText)}function o(){r(new Error("XHR error"+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e))}var s=new XMLHttpRequest,i=!0,l=!1;if(!("withCredentials"in s)){var u=/^(\w+:)?\/\/([^\/]+)/.exec(e);u&&(i=u[2]===window.location.host,u[1]&&(i&=u[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(s=new XDomainRequest,s.onload=a,s.onerror=o,s.ontimeout=o,s.onprogress=function(){},s.timeout=0,l=!0),s.onreadystatechange=function(){4===s.readyState&&(200===s.status||0==s.status&&s.responseText?a():o())},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),l?setTimeout(function(){s.send()},0):s.send(null)};else{if("undefined"==typeof require)throw new TypeError("No environment fetch API available.");var A;I=function(e,t,n,r){if("file:///"!=e.substr(0,8))throw new Error('Unable to fetch "'+e+'". Only file URLs of the form file:/// allowed running in Node.');return A=A||require("fs"),e=P?e.replace(/\//g,"\\").substr(8):e.substr(7),A.readFile(e,function(e,t){if(e)return r(e);var a=t+"";"\ufeff"===a[0]&&(a=a.substr(1)),n(a)})}}o.prototype.fetch=function(e){return new Promise(function(t,n){I(e.address,void 0,t,n)})};var C=function(){function t(t){var r=this;return Promise.resolve(e["typescript"==r.transpiler?"ts":r.transpiler]||(r.pluginLoader||r)["import"](r.transpiler)).then(function(e){e.__useDefault&&(e=e["default"]);var a;return a=e.Compiler?n:e.createLanguageService?s:o,"(function(__moduleName){"+a.call(r,t,e)+'\n})("'+t.name+'");\n//# sourceURL='+t.address+"!transpiled"})}function n(e,t){var n=this.traceurOptions||{};n.modules="instantiate",n.script=!1,void 0===n.sourceMaps&&(n.sourceMaps="inline"),n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1;var a=new t.Compiler(n);return r(e.source,a,n.filename)}function r(e,t,n){try{return t.compile(e,n)}catch(r){throw r[0]}}function o(e,t){var n=this.babelOptions||{};return n.modules="system",void 0===n.sourceMap&&(n.sourceMap="inline"),n.inputSourceMap=e.metadata.sourceMap,n.filename=e.address,n.code=!0,n.ast=!1,t.transform(e.source,n).code}function s(e,t){var n=this.typescriptOptions||{};return n.target=n.target||t.ScriptTarget.ES5,void 0===n.sourceMap&&(n.sourceMap=!0),n.sourceMap&&(n.inlineSourceMap=!0),n.module=t.ModuleKind.System,t.transpile(e.source,n,e.address)}return a.prototype.transpiler="traceur",t}();u.prototype=o.prototype,l.prototype=new u,l.prototype.constructor=l;var D,q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(N){q=!1}var U,J=["main","format","defaultExtension","meta","map","basePath","depCache"];!function(){function n(t,n){0==i++&&(o=e.System),e.System=t,s=n}function r(){0==--i&&(e.System=o),s=void 0}function a(e){var t=e.source.lastIndexOf("\n"),n="esm"==e.metadata.format||"register"==e.metadata.format||e.metadata.bundle;return(n?"(function(System) {":"")+e.source+(n?"\n})(System);":"")+("\n//# sourceURL="!=e.source.substr(t,15)?"\n//# sourceURL="+e.address+(e.metadata.sourceMap?"!transpiled":""):"")+(e.metadata.sourceMap&&l&&"\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(e.metadata.sourceMap)))||"")}var o,s,i=0;d("pushRegister_",function(){return function(e){return s?(this.reduceRegister_(s,e),!0):!1}});var l="undefined"!=typeof btoa;if(R||j&&window.chrome&&window.chrome.extension)U=function(o){if(o.metadata.integrity)throw new TypeError("Subresource integrity checking is not supported in Web Workers or Chrome Extensions.");try{n(this,o),new Function(a(o)).call(e),r()}catch(s){throw r(),t(s,"Evaluating "+o.address)}};else if("undefined"!=typeof document){var u,c=document.getElementsByTagName("script");$__curScript=c[c.length-1],U=function(e){u||(u=document.head||document.body||document.documentElement);var o=document.createElement("script");o.text=a(e);var s,i=window.onerror;if(window.onerror=function(n){s=t(n,"Evaluating "+e.address)},n(this,e),e.metadata.integrity&&o.setAttribute("integrity",e.metadata.integrity),e.metadata.nonce&&o.setAttribute("nonce",e.metadata.nonce),u.appendChild(o),u.removeChild(o),r(),window.onerror=i,s)throw s}}else{var f="vm",m=require(f);U=function(e){if(e.metadata.integrity)throw new TypeError("Subresource integrity checking is unavailable in Node.");try{n(this,e),m.runInThisContext(a(e)),r()}catch(o){throw r(),t(o.toString(),"Evaluating "+e.address)}}}}(),c(function(e){return function(){e.call(this),this.map={}}}),d("normalize",function(){return function(e,t){if("."!=e.substr(0,1)&&"/"!=e.substr(0,1)&&!e.match($)){var n,r=0;for(var a in this.map)if(e.substr(0,a.length)==a&&(e.length==a.length||"/"==e[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}n&&(e=this.map[n]+e.substr(n.length))}return e}});var $=/^[^\/]+:\/\//,B={},H=new L(z);c(function(e){return function(){e.call(this),this.baseURL=z.substr(0,z.lastIndexOf("/")+1),this.set("@empty",this.newModule({})),"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&(this._nodeRequire=require)}}),d("normalize",function(e){return function(t,n){if("@node/"==t.substr(0,6)){if(!this._nodeRequire)throw new TypeError("Can only load node core modules in Node.");this.set(t,this.newModule(m(this._nodeRequire(t.substr(6)))))}return t=e.apply(this,arguments),"."==t[0]||"/"==t[0]?n?new L(t,n.replace(/#/g,"%05")).href.replace(/%05/g,"#"):new L(t,H).href:t}});var Z="undefined"!=typeof XMLHttpRequest;d("locate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return Z?e.replace(/#/g,"%23"):e})}}),d("fetch",function(){return function(e){return new Promise(function(t,n){I(e.address,e.metadata.authorization,t,n)})}}),d("import",function(e){return function(t,n,r){return n&&n.name&&g.call(this,"System.import(name, { name: parentName }) is deprecated for System.import(name, parentName), while importing "+t+" from "+n.name),e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}}),l.prototype.warnings=!1,l.prototype.config=function(e){function t(e){for(var t in e)return!0}if("warnings"in e&&(this.warnings=e.warnings),e.baseURL){if(t(this.packages)||t(this.meta)||t(this.depCache)||t(this.bundles))throw new TypeError("baseURL should only be configured once and must be configured first.");this.baseURL=e.baseURL,y.call(this)}if(e.defaultJSExtensions&&(this.defaultJSExtensions=e.defaultJSExtensions,g.call(this,"The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),e.pluginFirst&&(this.pluginFirst=e.pluginFirst),e.paths)for(var n in e.paths)this.paths[n]=e.paths[n];if(e.map){var r="";for(var n in e.map){var a=e.map[n];if("string"!=typeof a){r+=(r.length?", ":"")+'"'+n+'"';var o=this.normalizeSync(n);this.defaultJSExtensions&&".js"!=n.substr(n.length-3,3)&&(o=o.substr(0,o.length-3));var s="";for(var i in this.packages)o.substr(0,i.length)==i&&(!o[i.length]||"/"==o[i.length])&&s.split("/").length<i.split("/").length&&(s=i);s&&this.packages[s].main&&(o=o.substr(0,o.length-this.packages[s].main.length-1));var i=this.packages[o]=this.packages[o]||{};i.map=a}else this.map[n]=a}r&&g.call(this,"The map configuration for "+r+' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like System.config({ packages: { "'+n+'": { map: {...} } } }).')}if(e.packageConfigPaths){for(var l=[],u=0;u<e.packageConfigPaths.length;u++){var d=e.packageConfigPaths[u],c=Math.max(d.lastIndexOf("*")+1,d.lastIndexOf("/")),o=this.normalizeSync(d.substr(0,c)+"/");this.defaultJSExtensions&&".js"!=d.substr(d.length-3,3)&&(o=o.substr(0,o.length-3)),l[u]=o.substr(0,o.length-1)+d.substr(c)}this.packageConfigPaths=l}if(e.packages)for(var n in e.packages){if(n.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"'+n+'" is not a valid package name.');var f=this.normalizeSync(n+("/"!=n[n.length-1]?"/":""));f=f.substr(0,f.length-1),!this.packages[f]&&this.defaultJSExtensions&&".js"!=n.substr(n.length-3,3)&&(f=f.substr(0,f.length-3)),this.packages[f]=this.packages[f]||{};for(var m in e.packages[n])-1==O.call(J,m)&&g.call(this,'"'+m+'" is not a valid package configuration option in package '+n);h(this.packages[f],e.packages[n])}if(e.bundles)for(var n in e.bundles){for(var p=[],u=0;u<e.bundles[n].length;u++)p.push(this.normalizeSync(e.bundles[n][u]));this.bundles[n]=p}for(var v in e){var a=e[v],b=!1;if("baseURL"!=v&&"map"!=v&&"packages"!=v&&"bundles"!=v&&"paths"!=v&&"warnings"!=v&&"packageConfigPaths"!=v)if("object"!=typeof a||a instanceof Array)this[v]=a;else{this[v]=this[v]||{},("meta"==v||"depCache"==v)&&(b=!0);for(var n in a)"meta"==v&&"*"==n[0]?this[v][n]=a[n]:b?this[v][this.normalizeSync(n)]=a[n]:this[v][n]=a[n]}}},d("normalize",function(e){return function(t,n){var r=e.apply(this,arguments);return this.has(r)?r:r.match($)?(this.defaultJSExtensions&&".js"!=r.substr(r.length-3,3)&&(r+=".js"),r):(r=s(this.paths,r)||r,this.defaultJSExtensions&&".js"!=r.substr(r.length-3,3)&&(r+=".js"),"."==r[0]||"/"==r[0]?new L(r,H).href:new L(r,y.call(this)).href)}}),function(){function e(e){var t,n,r=0;for(var a in this.packages)e.substr(0,a.length)!==a||e.length!==a.length&&"/"!==e[a.length]||(n=a.split("/").length,n>r&&(t=a,r=n));return t}function t(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function n(e){var t=e.basePath&&"."!=e.basePath?e.basePath:"";return t&&("./"==t.substr(0,2)&&(t=t.substr(2)),"/"!=t[t.length-1]&&(t+="/")),t}function r(e,t,n,r,o,s,i){var l=!(!i&&-1==o.indexOf("#?")&&!o.match(X));!l&&n.meta&&f(n.meta,t,o,function(e,t,n){(0==n||e.lastIndexOf("*")!=e.length-1)&&(l=!0)});var u=t+"/"+r+o+(l?"":a(n,o));return s?u:k.call(e,u,t+"/").then(function(n){return E.call(e,n,t+"/")})}function a(e,t){if("/"!=t[t.length-1]&&e.defaultExtension!==!1){var n="."+(e.defaultExtension||"js");if(t.substr(t.length-n.length)!=n)return n}return""}function o(e,o,s,i,l){function u(e){return"."==e?o:"./"==e.substr(0,2)?r(d,o,s,c,e.substr(2),i,l):(i?d.normalizeSync:d.normalize).call(d,e)}var d=this,c=n(s);if(o===e&&s.main&&(e+="/"+("./"==s.main.substr(0,2)?s.main.substr(2):s.main)),e.length==o.length+1&&"/"==e[o.length])return e;if(e.length==o.length)return e+(d.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)?".js":"");if(s.map)var f="."+e.substr(o.length),m=t(s.map,f)||!l&&t(s.map,f+=a(s,f.substr(2))),p=s.map[m];return"string"==typeof p?u(p+f.substr(m.length)):i||!p?r(d,o,s,c,e.substr(o.length+1),i,l):d.builder?o+"#:"+m.substr(2):d["import"](s.map["@env"]||"@system-env",o).then(function(e){for(var t in p){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return p[t]+f.substr(m.length)}}).then(function(t){return t?u(t):r(d,o,s,c,e.substr(o.length+1),i,l)})}function s(r,a){return function(s,l,d){function c(t,n,r){n=n||e.call(b,t);var r=r||n&&b.packages[n];return r?o.call(b,t,n,r,a,d):t+(v?".js":"")}if(d=d===!0,l)var f=e.call(this,l)||this.defaultJSExtensions&&".js"==l.substr(l.length-3,3)&&e.call(this,l.substr(0,l.length-3));if(f){var p=n(this.packages[f]);if(p&&l.substr(f.length+1,p.length)==p&&(l=f+l.substr(f.length+p.length)),"."!==s[0]){var h=this.packages[f].map;if(h){var g=t(h,s);g&&(s=h[g]+s.substr(g.length),"."===s[0]&&(l=f+"/"))}}}var v=this.defaultJSExtensions&&".js"!=s.substr(s.length-3,3),y=r.call(this,s,l);v&&".js"!=y.substr(y.length-3,3)&&(v=!1),v&&(y=y.substr(0,y.length-3)),f&&"."==s[0]&&y==f+"/"&&(y=f);var b=this;if(a)return c(y);var x=e.call(this,y),w=x&&this.packages[x];if(w&&w.configured)return c(y,x,w);var S=i(b,y);return S.pkgName?Promise.resolve(_(b,y)).then(function(e){if(e||m[S.pkgName]){var t=m[S.pkgName]=m[S.pkgName]||{bundles:[],promise:Promise.resolve()};return e&&-1==O.call(t.bundles,e)&&(t.bundles.push(e),t.promise=Promise.all([t.promise,b.load(e)])),t.promise}}).then(function(){return c(y,S.pkgName)}).then(function(e){return e in b.defined?e:u(b,S).then(function(){return c(y)})}):c(y,x,w)}}function i(e,t){for(var n,r=[],a=0;a<e.packageConfigPaths.length;a++){var o=e.packageConfigPaths[a],s=Math.max(o.lastIndexOf("*")+1,o.lastIndexOf("/")),i=t.match(p[o]||(p[o]=new RegExp("^("+o.substr(0,s).replace(/\*/g,"[^\\/]+")+")(/|$)")));!i||n&&n!=i[1]||(n=i[1],r.push(n+o.substr(s)))}return{pkgName:n,configPaths:r}}function u(e,t){var n=e.packages[t.pkgName];return n&&n.configured?Promise.resolve():g[t.pkgName]||(g[t.pkgName]=Promise.resolve().then(function(){for(var r=[],a=0;a<t.configPaths.length;a++)(function(a){r.push(e.fetch({name:a,address:a,metadata:{}}).then(function(e){try{return JSON.parse(e)}catch(t){throw new Error("Invalid JSON in package configuration file "+a)}}).then(function(r){r.systemjs&&(r=r.systemjs);for(var a in r)-1==O.call(J,a)&&delete r[a];if(r.main instanceof Array&&(r.main=r.main[0]),n&&h(r,n),r.depCache)for(var o in r.depCache)if("./"!=o.substr(0,2)){var s=e.normalizeSync(o);e.depCache[s]=(e.depCache[s]||[]).concat(r.depCache[o])}n=e.packages[t.pkgName]=r}))})(t.configPaths[a]);return Promise.all(r)}))}function f(e,t,n,r){var a;for(var o in e){var s="./"==o.substr(0,2)?"./":"";s&&(o=o.substr(2)),a=o.indexOf("*"),-1!==a&&o.substr(0,a)==n.substr(0,a)&&o.substr(a+1)==n.substr(n.length-o.length+a+1)&&r(o,e[s+o],o.split("/").length)}var i=e[n]||e["./"+n];i&&r(i,i,0)}c(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths={}}});var m={},p={},g={};l.prototype.normalizeSync=l.prototype.normalize,d("normalizeSync",function(e){return s(e,!0)}),d("normalize",function(e){return s(e,!1)}),d("locate",function(t){return function(r){var a=this;return Promise.resolve(t.call(this,r)).then(function(t){var o=e.call(a,r.name);if(o){var s=a.packages[o],i=n(s),l=r.name.substr(o.length+i.length+1);if(s.format&&(r.metadata.format=r.metadata.format||s.format),s.depCache)for(var u in s.depCache)if(u=="./"+l)for(var d=s.depCache[u],c=0;c<d.length;c++)a["import"](d[c],o+"/");var m={};if(s.meta){var p=0;f(s.meta,o,l,function(e,t,n){n>p&&(p=n),h(m,t,n&&p>n)}),m.alias&&"./"==m.alias.substr(0,2)&&(m.alias=o+m.alias.substr(1)),m.loader&&"./"==m.loader.substr(0,2)&&(m.loader=o+m.loader.substr(1)),h(r.metadata,m)}}return t})}})}(),function(){function t(){if(o&&"interactive"===o.script.readyState)return o.load;for(var e=0;e<l.length;e++)if("interactive"==l[e].script.readyState)return o=l[e],o.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),s=t;try{importScripts(t.address)}catch(r){s=null,n(r)}s=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s=null,i=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),l=[],u=0,c=[];d("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(s?this.reduceRegister_(s,n):i?this.reduceRegister_(t(),n):u?c.push(n):this.reduceRegister_(null,n),!0)}}),d("fetch",function(t){return function(s){var d=this;return s.metadata.scriptLoad&&(j||R)?R?n(d,s):new Promise(function(t,n){function f(e){if(!h.readyState||"loaded"==h.readyState||"complete"==h.readyState){if(u--,s.metadata.entry||c.length){if(!i){for(var r=0;r<c.length;r++)d.reduceRegister_(s,c[r]);c=[]}}else d.reduceRegister_(s);p(),s.metadata.entry||s.metadata.bundle||n(new Error(s.name+" did not call System.register or AMD define")),t("")}}function m(e){p(),n(new Error("Unable to load script "+s.address))}function p(){if(e.System=a,h.detachEvent){h.detachEvent("onreadystatechange",f);for(var t=0;t<l.length;t++)l[t].script==h&&(o.script==h&&(o=null),l.splice(t,1))}else h.removeEventListener("load",f,!1),h.removeEventListener("error",m,!1);r.removeChild(h)}var h=document.createElement("script");h.async=!0,s.metadata.integrity&&h.setAttribute("integrity",s.metadata.integrity),i?(h.attachEvent("onreadystatechange",f),l.push({script:h,load:s})):(h.addEventListener("load",f,!1),h.addEventListener("error",m,!1)),u++,a=e.System,h.src=s.address,r.appendChild(h)}):t.call(this,s)}})}(),function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==O.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<l){if(null!==i.groupIndex&&(r[i.groupIndex].splice(O.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=l}t(i,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var s=!!r.declarative==a.length%2,l=a.length-1;l>=0;l--){for(var u=a[l],d=0;d<u.length;d++){var c=u[d];s?o(c,n):i(c,n)}s=!s}}}function r(){}function a(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new r,importers:[]})}function o(t,n){if(!t.module){var r=n._loader.moduleRecords,s=t.module=a(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(s.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,a=s.importers.length;a>r;r++){var o=s.importers[r];if(!o.locked){var l=O.call(o.dependencies,s);o.setters[l](i)}}return s.locked=!1,t});if(s.setters=l.setters,s.execute=l.execute,!s.setters||!s.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(s),s.dependencies.push(p)):s.dependencies.push(null);for(var h=t.originalIndices[u],g=0,v=h.length;v>g;++g){var y=h[g];s.setters[y]&&s.setters[y](c)}}}}function s(e,t){var n,r=t.defined[e];if(r)r.declarative?u(e,[],t):r.evaluated||i(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function i(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,l=t.normalizedDeps.length;l>o;o++){var u=t.normalizedDeps[o],d=n.defined[u];d&&i(d,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r],n);throw new Error("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esmExports?t.esModule=m(r):t.esModule={"default":r}}}function u(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==O.call(n,i)&&(r.defined[i]?u(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}function p(e){var t=e.match(h);return t&&"System.register"==e.substr(t[0].length,15)}l.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=b();r.name=e&&(this.normalizeSync||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},l.prototype.registerDynamic=function(e,t,n,r){
"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=b();a.name=e&&(this.normalizeSync||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},d("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Unexpected anonymous System.register call.");if(r.entry)throw new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),M(r,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}});var h=/^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):("register"!=t.metadata.format||t.metadata.authorization||(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&p(t.source))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(e){var t,r=this;if(r.defined[e.name])t=r.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry,t.deps=t.deps.concat(e.metadata.deps);else if(!(r.builder&&e.metadata.bundle||"register"!=e.metadata.format&&"esm"!=e.metadata.format&&"es6"!=e.metadata.format)){if("undefined"!=typeof U&&U.call(r,e),!e.metadata.entry&&!e.metadata.bundle)throw new Error(e.name+" detected as "+e.metadata.format+" but didn't execute.");t=e.metadata.entry}t||(t=b(),t.deps=e.metadata.deps,t.execute=function(){}),r.defined[e.name]=t;var a=f(t.deps);t.deps=a.names,t.originalIndices=a.indices,t.name=e.name,t.esmExports=e.metadata.esmExports!==!1;for(var o=[],s=0,i=t.deps.length;i>s;s++)o.push(Promise.resolve(r.normalize(t.deps[s],e.name)));return Promise.all(o).then(function(a){return t.normalizedDeps=a,{deps:t.deps,execute:function(){return n(e.name,r),u(e.name,[],r),r.defined[e.name]=void 0,r.newModule(t.declarative?t.module.exports:t.esModule)}}})}})}(),function(){var t=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,n=/\$traceurRuntime\s*\./,r=/babelHelpers\s*\./;d("translate",function(a){return function(o){var s=this;return a.call(s,o).then(function(a){if("esm"==o.metadata.format||"es6"==o.metadata.format||!o.metadata.format&&a.match(t)){if("es6"==o.metadata.format&&g.call(s,"Module "+o.name+' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".'),o.metadata.format="esm",s.transpiler===!1)throw new TypeError("Unable to dynamically transpile ES module as System.transpiler set to false.");return s.loadedTranspiler_=s.loadedTranspiler_||!1,s.pluginLoader&&(s.pluginLoader.loadedTranspiler_=s.loadedTranspiler_||!1),s.builder&&(o.metadata.originalSource=o.source),C.call(s,o).then(function(e){return o.metadata.sourceMap=void 0,e})}if(s.loadedTranspiler_===!1&&o.name==s.normalizeSync(s.transpiler)&&(a.length>100&&(o.metadata.format=o.metadata.format||"global","traceur"===s.transpiler&&(o.metadata.exports="traceur"),"typescript"===s.transpiler&&(o.metadata.exports="ts")),s.loadedTranspiler_=!0),s.loadedTranspilerRuntime_===!1&&(o.name==s.normalizeSync("traceur-runtime")||o.name==s.normalizeSync("babel/external-helpers*"))&&(a.length>100&&(o.metadata.format=o.metadata.format||"global"),s.loadedTranspilerRuntime_=!0),("register"==o.metadata.format||o.metadata.bundle)&&s.loadedTranspilerRuntime_!==!0){if(!e.$traceurRuntime&&o.source.match(n))return s.loadedTranspilerRuntime_=s.loadedTranspilerRuntime_||!1,s["import"]("traceur-runtime").then(function(){return a});if(!e.babelHelpers&&o.source.match(r))return s.loadedTranspilerRuntime_=s.loadedTranspilerRuntime_||!1,s["import"]("babel/external-helpers").then(function(){return a})}return a})}})}();var W="undefined"!=typeof self?"self":"global";d("reduceRegister_",function(t){return function(n,r){if(r)return t.call(this,n,r);n.metadata.format="global";var a=n.metadata.entry=b(),o=v(n.metadata.exports,e);a.execute=function(){return o}}}),d("fetch",function(e){return function(t){return t.metadata.exports&&(t.metadata.format="global"),"global"!=t.metadata.format||t.metadata.authorization||!t.metadata.exports||t.metadata.globals||t.metadata.deps&&0!=t.metadata.deps.length||(t.metadata.scriptLoad=!0),e.call(this,t)}}),d("instantiate",function(e){return function(t){var n=this;if(t.metadata.format||(t.metadata.format="global"),t.metadata.globals&&t.metadata.globals instanceof Array){for(var r={},a=0;a<t.metadata.globals.length;a++)r[t.metadata.globals[a]]=t.metadata.globals[a];t.metadata.globals=r}if("global"==t.metadata.format&&!t.metadata.registered){var o=b();t.metadata.entry=o,o.deps=[];for(var s in t.metadata.globals)o.deps.push(t.metadata.globals[s]);o.execute=function(e,r,a){var o;if(t.metadata.globals){o={};for(var s in t.metadata.globals)o[s]=e(t.metadata.globals[s])}var i=t.metadata.exports;i&&(t.source+="\n"+W+'["'+i+'"] = '+i+";");var l=n.get("@@global-helpers").prepareGlobal(a.id,i,o);return U.call(n,t),l()}}return e.call(this,t)}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==O.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var i;if(a){i={};for(var l in a)i[l]=a[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=v(n,e);else{var a,l,u={};r(function(e,t){o[e]!==t&&"undefined"!=typeof t&&(u[e]=t,"undefined"!=typeof a?l||a===t||(l=!0):a=t)}),t=l?u:a}if(i)for(var d in i)e[d]=i[d];return e.define=s,t}}}))}}),function(){function t(e){r.lastIndex=a.lastIndex=0;var t,n=[],o=[];if(e.length/e.split("\n").length<200)for(;t=a.exec(e);)o.push([t.index,t.index+t[0].length]);for(;t=r.exec(e);){for(var s=!1,i=0;i<o.length;i++)o[i][0]<t.index&&o[i][1]>t.index+t[0].length&&(s=!0);s||n.push(t[1].substr(1,t[1].length-2))}return n}var n=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.]|module\.)exports\s*(\[['"]|\.)|(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])module\.exports\s*[=,]/,r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,a=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var o=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");d("instantiate",function(a){return function(s){var i=this;if(s.metadata.format||(n.lastIndex=0,r.lastIndex=0,(r.exec(s.source)||n.exec(s.source))&&(s.metadata.format="cjs")),"cjs"==s.metadata.format){var l=s.metadata.deps,u=t(s.source);for(var d in s.metadata.globals)u.push(s.metadata.globals[d]);var c=b();s.metadata.entry=c,c.deps=u,c.executingRequire=!0,c.execute=function(t,n,r){for(var a=0;a<l.length;a++)t(l[a]);var u=s.address||"",d=u.split("/");d.pop(),d=d.join("/"),"file:///"==u.substr(0,8)?(u=u.substr(7),d=d.substr(7),P&&(u=u.substr(1),d=d.substr(1))):o&&u.substr(0,o.length)===o&&(u=u.substr(o.length),d=d.substr(o.length));var c=e.define;e.define=void 0,e.__cjsWrapper={exports:n,args:[t,n,r,u,d,e,e]};var f="";if(s.metadata.globals)for(var m in s.metadata.globals)f+="var "+m+' = require("'+s.metadata.globals[m]+'");';s.source="(function(require, exports, module, __filename, __dirname, global, GLOBAL) {"+f+s.source+"\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);",U.call(i,s),e.__cjsWrapper=void 0,e.define=c}}return a.call(i,s)}})}(),c(function(t){return function(){function n(e,t){e=e.replace(i,"");var n=e.match(c),r=(n[1].split(",")[t]||"require").replace(f,""),a=m[r]||(m[r]=new RegExp(l+r+u,"g"));a.lastIndex=0;for(var o,s=[];o=a.exec(e);)s.push(o[2]||o[3]);return s}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=s.get(s.normalizeSync(e,a));if(!o)throw new Error('Module not already loaded loading "'+e+'" from "'+a+'".');return o.__useDefault?o["default"]:o}throw new TypeError("Invalid require")}for(var i=[],l=0;l<e.length;l++)i.push(s["import"](e[l],a));Promise.all(i).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,o){function i(t,n,i){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(s,e,n,a,i.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));i.uri=i.id,i.config=function(){},-1!=d&&f.splice(d,0,i),-1!=u&&f.splice(u,0,n),-1!=l&&(c.toUrl=function(e){var t=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=s.normalizeSync(e,i.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(l,0,c));var p=e.require;e.require=r;var h=o.apply(-1==u?e:n,f);return e.require=p,"undefined"==typeof h&&i&&(h=i.exports),"undefined"!=typeof h?h:void 0}"string"!=typeof t&&(o=a,a=t,t=null),a instanceof Array||(o=a,a=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===a[a.length-1]&&a.pop();var l,u,d;-1!=(l=O.call(a,"require"))&&(a.splice(l,1),t||(a=a.concat(n(o.toString(),l)))),-1!=(u=O.call(a,"exports"))&&a.splice(u,1),-1!=(d=O.call(a,"module"))&&a.splice(d,1);var c=b();c.name=t&&(s.normalizeSync||s.normalize).call(s,t),c.deps=a,c.execute=i,s.pushRegister_({amd:!0,entry:c})}function o(){var t=e.module,n=e.exports,r=e.define;return e.module=void 0,e.exports=void 0,e.define=a,function(){e.define=r,e.module=t,e.exports=n}}var s=this;t.call(this);var i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",u="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",c=/\(([^\)]*)\)/,f=/^\s+|\s+$/g,m={};a.amd={},d("reduceRegister_",function(e){return function(t,n){if(!n||!n.amd)return e.call(this,t,n);var r=t&&t.metadata,a=n.entry;if(r&&(r.format="amd"),a.name)r&&(r.entry||r.bundle?r.entry=void 0:r.entry=a,r.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!r)throw new TypeError("Unexpected anonymous AMD define.");if(r.entry)throw new TypeError("Multiple defines for anonymous module "+t.name);r.entry=a}}}),s.set("@@amd-helpers",s.newModule({createDefine:o,require:r,define:a})),s.amdDefine=a,s.amdRequire=r}}),function(){var e=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;d("fetch",function(e){return function(t){return"amd"!==t.metadata.format||t.metadata.authorization||(t.metadata.scriptLoad=!0),t.metadata.scriptLoad&&this.get("@@amd-helpers").createDefine(),e.call(this,t)}}),d("instantiate",function(t){return function(n){var r=this;if("amd"==n.metadata.format||!n.metadata.format&&n.source.match(e))if(n.metadata.format="amd",r.builder||r.execute===!1)n.metadata.execute=function(){return n.metadata.builderExecute.apply(this,arguments)};else{var a=this.get("@@amd-helpers").createDefine();if(U.call(r,n),a(),!n.metadata.entry&&!n.metadata.bundle)throw new TypeError("AMD module "+n.name+" did not define")}return t.call(r,n)}})}(),function(){function e(e,t,n,r,a){function o(e,t){return c&&".js"==e.substr(e.length-3,3)&&(e=e.substr(0,e.length-3)),s.pluginFirst?t+"!"+e:e+"!"+t}var s=this;if(n){var i;s.pluginFirst?-1!=(i=n.lastIndexOf("!"))&&(n=n.substr(i+1)):-1!=(i=n.indexOf("!"))&&(n=n.substr(0,i))}var l=t.lastIndexOf("!");if(-1!=l){var u,d;s.pluginFirst?(u=t.substr(l+1),d=t.substr(0,l)):(u=t.substr(0,l),d=t.substr(l+1)||u.substr(u.lastIndexOf(".")+1));var c=s.defaultJSExtensions&&".js"!=u.substr(u.length-3,3);return a?(u=s.normalizeSync(u,n),d=s.normalizeSync(d,n),o(u,d)):Promise.all([s.normalize(u,n,!0),s.normalize(d,n,!0)]).then(function(e){return o(e[0],e[1])})}return e.call(s,t,n,r)}d("normalize",function(t){return function(n,r,a){return e.call(this,t,n,r,a,!1)}}),d("normalizeSync",function(t){return function(n,r,a){return e.call(this,t,n,r,a,!0)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){var n=t.metadata.loader;if(!n)return e;if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate?Promise.resolve(t.metadata.loaderModule.translate.call(n,t)).then(function(r){return"string"==typeof r&&(t.source=r),e.call(n,t)}):e.call(n,t)}}),d("instantiate",function(e){return function(t){var n=this,r=t.metadata.sourceMap;if(r&&"object"==typeof r){var a=t.name.split("!")[0];r.file=a+"!transpiled",r.sources&&1!=r.sources.length||(r.sources=[a]),t.metadata.sourceMap=JSON.stringify(r)}return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t)).then(function(r){return t.metadata.entry=b(),t.metadata.entry.execute=function(){return r},t.metadata.entry.deps=t.metadata.deps,t.metadata.format="defined",e.call(n,t)}):e.call(n,t)}})}();var X=/#\{[^\}]+\}/;c(function(e){return function(){e.call(this),this.set("@system-env",this.newModule({browser:j,node:!!this._nodeRequire}))}}),d("normalize",function(e){return function(t,n,r){var a=this;return k.call(a,t,n).then(function(t){return e.call(a,t,n,r)}).then(function(e){return E.call(a,e,n)})}}),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];return n?(t.metadata.format="defined",this.defined[t.name]={declarative:!0,deps:r.concat([n]),declare:function(e){return{setters:[function(t){for(var n in t)e(n,t[n])}],execute:function(){}}}},""):e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(o=i),h(t.metadata,r[s],o!=i)}return r[a]&&h(t.metadata,r[a]),e.call(this,t)}});var t=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,n=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,'"'==d||"'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(g.call(this,"Module "+a.name+' contains deprecated "deps '+m+'" meta syntax.\nThis should be updated to "deps[] '+m+'" for pushing to array meta.'),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this.loadedBundles_={}}}),d("locate",function(e){return function(t){var n=this;return(t.name in n.loadedBundles_||t.name in n.bundles)&&(t.metadata.bundle=!0),t.name in n.defined?e.call(this,t):_(n,t.name).then(function(e){return e?n.load(e):void 0}).then(function(){return e.call(n,t)})}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a]);return e.call(n,t)}})}(),F=new l,F.version="0.19.3 Standard","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,F||(F=new o,F.constructor=o),"object"==typeof exports&&(module.exports=F),e.System=F}("undefined"!=typeof self?self:global)}try{var t="undefined"!=typeof URLPolyfill||"test:"==new URL("test:///").protocol}catch(n){}if("undefined"!=typeof Promise&&t)e();else if("undefined"!=typeof document){var r=document.getElementsByTagName("script");$__curScript=r[r.length-1];var a=$__curScript.src,o=a.substr(0,a.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write('<script type="text/javascript" src="'+o+'system-polyfills.js"></script>')}else if("undefined"!=typeof importScripts){var o="";try{throw new Error("_")}catch(n){n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){o=t.replace(/\/[^\/]*$/,"/")})}importScripts(o+"system-polyfills.js"),e()}else e()}();
//# sourceMappingURL=system.js.map
"format global";
(function(global) {

  var defined = {};

  // indexOf polyfill for IE8
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++)
      if (this[i] === item)
        return i;
    return -1;
  }

  var getOwnPropertyDescriptor = true;
  try {
    Object.getOwnPropertyDescriptor({ a: 0 }, 'a');
  }
  catch(e) {
    getOwnPropertyDescriptor = false;
  }

  var defineProperty;
  (function () {
    try {
      if (!!Object.defineProperty({}, 'a', {}))
        defineProperty = Object.defineProperty;
    }
    catch (e) {
      defineProperty = function(obj, prop, opt) {
        try {
          obj[prop] = opt.value || opt.get.call(obj);
        }
        catch(e) {}
      }
    }
  })();

  function register(name, deps, declare) {
    if (arguments.length === 4)
      return registerDynamic.apply(this, arguments);
    doRegister(name, {
      declarative: true,
      deps: deps,
      declare: declare
    });
  }

  function registerDynamic(name, deps, executingRequire, execute) {
    doRegister(name, {
      declarative: false,
      deps: deps,
      executingRequire: executingRequire,
      execute: execute
    });
  }

  function doRegister(name, entry) {
    entry.name = name;

    // we never overwrite an existing define
    if (!(name in defined))
      defined[name] = entry;

    // we have to normalize dependencies
    // (assume dependencies are normalized for now)
    // entry.normalizedDeps = entry.deps.map(normalize);
    entry.normalizedDeps = entry.deps;
  }


  function buildGroups(entry, groups) {
    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
      return;

    groups[entry.groupIndex].push(entry);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = defined[depName];

      // not in the registry means already linked / ES6
      if (!depEntry || depEntry.evaluated)
        continue;

      // now we know the entry is in our unlinked linkage group
      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

      // the group index of an entry is always the maximum
      if (depEntry.groupIndex === undefined || depEntry.groupIndex < depGroupIndex) {

        // if already in a group, remove from the old group
        if (depEntry.groupIndex !== undefined) {
          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

          // if the old group is empty, then we have a mixed depndency cycle
          if (groups[depEntry.groupIndex].length == 0)
            throw new TypeError("Mixed dependency cycle detected");
        }

        depEntry.groupIndex = depGroupIndex;
      }

      buildGroups(depEntry, groups);
    }
  }

  function link(name) {
    var startEntry = defined[name];

    startEntry.groupIndex = 0;

    var groups = [];

    buildGroups(startEntry, groups);

    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var entry = group[j];

        // link each group
        if (curGroupDeclarative)
          linkDeclarativeModule(entry);
        else
          linkDynamicModule(entry);
      }
      curGroupDeclarative = !curGroupDeclarative; 
    }
  }

  // module binding records
  var moduleRecords = {};
  function getOrCreateModuleRecord(name) {
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      exports: {}, // start from an empty module and extend
      importers: []
    })
  }

  function linkDeclarativeModule(entry) {
    // only link if already not already started linking (stops at circular)
    if (entry.module)
      return;

    var module = entry.module = getOrCreateModuleRecord(entry.name);
    var exports = entry.module.exports;

    var declaration = entry.declare.call(global, function(name, value) {
      module.locked = true;

      if (typeof name == 'object') {
        for (var p in name)
          exports[p] = name[p];
      }
      else {
        exports[name] = value;
      }

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          for (var j = 0; j < importerModule.dependencies.length; ++j) {
            if (importerModule.dependencies[j] === module) {
              importerModule.setters[j](exports);
            }
          }
        }
      }

      module.locked = false;
      return value;
    });

    module.setters = declaration.setters;
    module.execute = declaration.execute;

    // now link all the module dependencies
    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = defined[depName];
      var depModule = moduleRecords[depName];

      // work out how to set depExports based on scenarios...
      var depExports;

      if (depModule) {
        depExports = depModule.exports;
      }
      else if (depEntry && !depEntry.declarative) {
        depExports = depEntry.esModule;
      }
      // in the module registry
      else if (!depEntry) {
        depExports = load(depName);
      }
      // we have an entry -> link
      else {
        linkDeclarativeModule(depEntry);
        depModule = depEntry.module;
        depExports = depModule.exports;
      }

      // only declarative modules have dynamic bindings
      if (depModule && depModule.importers) {
        depModule.importers.push(module);
        module.dependencies.push(depModule);
      }
      else
        module.dependencies.push(null);

      // run the setter for this dependency
      if (module.setters[i])
        module.setters[i](depExports);
    }
  }

  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
  function getModule(name) {
    var exports;
    var entry = defined[name];

    if (!entry) {
      exports = load(name);
      if (!exports)
        throw new Error("Unable to load dependency " + name + ".");
    }

    else {
      if (entry.declarative)
        ensureEvaluated(name, []);

      else if (!entry.evaluated)
        linkDynamicModule(entry);

      exports = entry.module.exports;
    }

    if ((!entry || entry.declarative) && exports && exports.__useDefault)
      return exports['default'];

    return exports;
  }

  function linkDynamicModule(entry) {
    if (entry.module)
      return;

    var exports = {};

    var module = entry.module = { exports: exports, id: entry.name };

    // AMD requires execute the tree first
    if (!entry.executingRequire) {
      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        var depEntry = defined[depName];
        if (depEntry)
          linkDynamicModule(depEntry);
      }
    }

    // now execute
    entry.evaluated = true;
    var output = entry.execute.call(global, function(name) {
      for (var i = 0, l = entry.deps.length; i < l; i++) {
        if (entry.deps[i] != name)
          continue;
        return getModule(entry.normalizedDeps[i]);
      }
      throw new TypeError('Module ' + name + ' not declared as a dependency.');
    }, exports, module);

    if (output)
      module.exports = output;

    // create the esModule object, which allows ES6 named imports of dynamics
    exports = module.exports;
 
    if (exports && exports.__esModule) {
      entry.esModule = exports;
    }
    else {
      entry.esModule = {};
      
      // don't trigger getters/setters in environments that support them
      if (typeof exports == 'object' || typeof exports == 'function') {
        if (getOwnPropertyDescriptor) {
          var d;
          for (var p in exports)
            if (d = Object.getOwnPropertyDescriptor(exports, p))
              defineProperty(entry.esModule, p, d);
        }
        else {
          var hasOwnProperty = exports && exports.hasOwnProperty;
          for (var p in exports) {
            if (!hasOwnProperty || exports.hasOwnProperty(p))
              entry.esModule[p] = exports[p];
          }
         }
       }
      entry.esModule['default'] = exports;
      defineProperty(entry.esModule, '__useDefault', {
        value: true
      });
    }
  }

  /*
   * Given a module, and the list of modules for this current branch,
   *  ensure that each of the dependencies of this module is evaluated
   *  (unless one is a circular dependency already in the list of seen
   *  modules, in which case we execute it)
   *
   * Then we evaluate the module itself depth-first left to right 
   * execution to match ES6 modules
   */
  function ensureEvaluated(moduleName, seen) {
    var entry = defined[moduleName];

    // if already seen, that means it's an already-evaluated non circular dependency
    if (!entry || entry.evaluated || !entry.declarative)
      return;

    // this only applies to declarative modules which late-execute

    seen.push(moduleName);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      if (indexOf.call(seen, depName) == -1) {
        if (!defined[depName])
          load(depName);
        else
          ensureEvaluated(depName, seen);
      }
    }

    if (entry.evaluated)
      return;

    entry.evaluated = true;
    entry.module.execute.call(global);
  }

  // magical execution function
  var modules = {};
  function load(name) {
    if (modules[name])
      return modules[name];

    // node core modules
    if (name.substr(0, 6) == '@node/')
      return require(name.substr(6));

    var entry = defined[name];

    // first we check if this module has already been defined in the registry
    if (!entry)
      throw "Module " + name + " not present.";

    // recursively ensure that the module and all its 
    // dependencies are linked (with dependency group handling)
    link(name);

    // now handle dependency execution in correct order
    ensureEvaluated(name, []);

    // remove from the registry
    defined[name] = undefined;

    // exported modules get __esModule defined for interop
    if (entry.declarative)
      defineProperty(entry.module.exports, '__esModule', { value: true });

    // return the defined module object
    return modules[name] = entry.declarative ? entry.module.exports : entry.esModule;
  };

  return function(mains, depNames, declare) {
    return function(formatDetect) {
      formatDetect(function(deps) {
        var System = {
          _nodeRequire: typeof require != 'undefined' && require.resolve && typeof process != 'undefined' && require,
          register: register,
          registerDynamic: registerDynamic,
          get: load, 
          set: function(name, module) {
            modules[name] = module; 
          },
          newModule: function(module) {
            return module;
          }
        };
        System.set('@empty', {});

        // register external dependencies
        for (var i = 0; i < depNames.length; i++) (function(depName, dep) {
          if (dep && dep.__esModule)
            System.register(depName, [], function(_export) {
              return {
                setters: [],
                execute: function() {
                  for (var p in dep)
                    if (p != '__esModule' && !(typeof p == 'object' && p + '' == 'Module'))
                      _export(p, dep[p]);
                }
              };
            });
          else
            System.registerDynamic(depName, [], false, function() {
              return dep;
            });
        })(depNames[i], arguments[i]);

        // register modules in this bundle
        declare(System);

        // load mains
        var firstLoad = load(mains[0]);
        if (mains.length > 1)
          for (var i = 1; i < mains.length; i++)
            load(mains[i]);

        if (firstLoad.__useDefault)
          return firstLoad['default'];
        else
          return firstLoad;
      });
    };
  };

})(typeof self != 'undefined' ? self : global)
/* (['mainModule'], ['external-dep'], function($__System) {
  System.register(...);
})
(function(factory) {
  if (typeof define && define.amd)
    define(['external-dep'], factory);
  // etc UMD / module pattern
})*/

(['1'], [], function($__System) {

$__System.registerDynamic("2", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("2");
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__System._nodeRequire ? process : require("3");
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("4");
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("6", ["@empty", "5"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var Reflect;
    (function(Reflect) {
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var __Metadata__ = new _WeakMap();
      function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetDescriptor)) {
          if (!IsArray(decorators)) {
            throw new TypeError();
          } else if (!IsObject(target)) {
            throw new TypeError();
          } else if (IsUndefined(targetKey)) {
            throw new TypeError();
          } else if (!IsObject(targetDescriptor)) {
            throw new TypeError();
          }
          targetKey = ToPropertyKey(targetKey);
          return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
        } else if (!IsUndefined(targetKey)) {
          if (!IsArray(decorators)) {
            throw new TypeError();
          } else if (!IsObject(target)) {
            throw new TypeError();
          }
          targetKey = ToPropertyKey(targetKey);
          return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
        } else {
          if (!IsArray(decorators)) {
            throw new TypeError();
          } else if (!IsConstructor(target)) {
            throw new TypeError();
          }
          return DecorateConstructor(decorators, target);
        }
      }
      Reflect.decorate = decorate;
      function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
          if (!IsUndefined(targetKey)) {
            if (!IsObject(target)) {
              throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
          } else {
            if (!IsConstructor(target)) {
              throw new TypeError();
            }
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
          }
        }
        return decorator;
      }
      Reflect.metadata = metadata;
      function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
      }
      Reflect.defineMetadata = defineMetadata;
      function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
      }
      Reflect.hasMetadata = hasMetadata;
      function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
      }
      Reflect.hasOwnMetadata = hasOwnMetadata;
      function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
      }
      Reflect.getMetadata = getMetadata;
      function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
      }
      Reflect.getOwnMetadata = getOwnMetadata;
      function getMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryMetadataKeys(target, targetKey);
      }
      Reflect.getMetadataKeys = getMetadataKeys;
      function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryOwnMetadataKeys(target, targetKey);
      }
      Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
      function deleteMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
          throw new TypeError();
        } else if (!IsUndefined(targetKey)) {
          targetKey = ToPropertyKey(targetKey);
        }
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
        if (IsUndefined(metadataMap)) {
          return false;
        }
        if (!metadataMap.delete(metadataKey)) {
          return false;
        }
        if (metadataMap.size > 0) {
          return true;
        }
        var targetMetadata = __Metadata__.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0) {
          return true;
        }
        __Metadata__.delete(target);
        return true;
      }
      Reflect.deleteMetadata = deleteMetadata;
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated)) {
            if (!IsConstructor(decorated)) {
              throw new TypeError();
            }
            target = decorated;
          }
        }
        return target;
      }
      function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated)) {
            if (!IsObject(decorated)) {
              throw new TypeError();
            }
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          decorator(target, propertyKey);
        }
      }
      function GetOrCreateMetadataMap(target, targetKey, create) {
        var targetMetadata = __Metadata__.get(target);
        if (!targetMetadata) {
          if (!create) {
            return undefined;
          }
          targetMetadata = new _Map();
          __Metadata__.set(target, targetMetadata);
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
          if (!create) {
            return undefined;
          }
          keyMetadata = new _Map();
          targetMetadata.set(targetKey, keyMetadata);
        }
        return keyMetadata;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
          return true;
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        }
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (metadataMap === undefined) {
          return false;
        }
        return Boolean(metadataMap.has(MetadataKey));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        }
        return undefined;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (metadataMap === undefined) {
          return undefined;
        }
        return metadataMap.get(MetadataKey);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, true);
        metadataMap.set(MetadataKey, MetadataValue);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = GetPrototypeOf(O);
        if (parent === null) {
          return ownKeys;
        }
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) {
          return ownKeys;
        }
        if (ownKeys.length <= 0) {
          return parentKeys;
        }
        var set = new _Set();
        var keys = [];
        for (var _i = 0; _i < ownKeys.length; _i++) {
          var key = ownKeys[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0; _a < parentKeys.length; _a++) {
          var key = parentKeys[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(target, targetKey) {
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
        var keys = [];
        if (metadataMap) {
          metadataMap.forEach(function(_, key) {
            return keys.push(key);
          });
        }
        return keys;
      }
      function IsUndefined(x) {
        return x === undefined;
      }
      function IsArray(x) {
        return Array.isArray(x);
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function IsConstructor(x) {
        return typeof x === "function";
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function ToPropertyKey(value) {
        if (IsSymbol(value)) {
          return value;
        }
        return String(value);
      }
      function GetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) {
          return proto;
        }
        if (proto !== functionPrototype) {
          return proto;
        }
        var prototype = O.prototype;
        var prototypeProto = Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) {
          return proto;
        }
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") {
          return proto;
        }
        if (constructor === O) {
          return proto;
        }
        return constructor;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        function Map() {
          this._keys = [];
          this._values = [];
          this._cache = cacheSentinel;
        }
        Map.prototype = {
          get size() {
            return this._keys.length;
          },
          has: function(key) {
            if (key === this._cache) {
              return true;
            }
            if (this._find(key) >= 0) {
              this._cache = key;
              return true;
            }
            return false;
          },
          get: function(key) {
            var index = this._find(key);
            if (index >= 0) {
              this._cache = key;
              return this._values[index];
            }
            return undefined;
          },
          set: function(key, value) {
            this.delete(key);
            this._keys.push(key);
            this._values.push(value);
            this._cache = key;
            return this;
          },
          delete: function(key) {
            var index = this._find(key);
            if (index >= 0) {
              this._keys.splice(index, 1);
              this._values.splice(index, 1);
              this._cache = cacheSentinel;
              return true;
            }
            return false;
          },
          clear: function() {
            this._keys.length = 0;
            this._values.length = 0;
            this._cache = cacheSentinel;
          },
          forEach: function(callback, thisArg) {
            var size = this.size;
            for (var i = 0; i < size; ++i) {
              var key = this._keys[i];
              var value = this._values[i];
              this._cache = key;
              callback.call(this, value, key, this);
            }
          },
          _find: function(key) {
            var keys = this._keys;
            var size = keys.length;
            for (var i = 0; i < size; ++i) {
              if (keys[i] === key) {
                return i;
              }
            }
            return -1;
          }
        };
        return Map;
      }
      function CreateSetPolyfill() {
        var cacheSentinel = {};
        function Set() {
          this._map = new _Map();
        }
        Set.prototype = {
          get size() {
            return this._map.length;
          },
          has: function(value) {
            return this._map.has(value);
          },
          add: function(value) {
            this._map.set(value, value);
            return this;
          },
          delete: function(value) {
            return this._map.delete(value);
          },
          clear: function() {
            this._map.clear();
          },
          forEach: function(callback, thisArg) {
            this._map.forEach(callback, thisArg);
          }
        };
        return Set;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
        var nodeCrypto = isNode && require("@empty");
        var hasOwn = Object.prototype.hasOwnProperty;
        var keys = {};
        var rootKey = CreateUniqueKey();
        function WeakMap() {
          this._key = CreateUniqueKey();
        }
        WeakMap.prototype = {
          has: function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            if (table) {
              return this._key in table;
            }
            return false;
          },
          get: function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            if (table) {
              return table[this._key];
            }
            return undefined;
          },
          set: function(target, value) {
            var table = GetOrCreateWeakMapTable(target, true);
            table[this._key] = value;
            return this;
          },
          delete: function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            if (table && this._key in table) {
              return delete table[this._key];
            }
            return false;
          },
          clear: function() {
            this._key = CreateUniqueKey();
          }
        };
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) {
            buffer[i] = Math.random() * 255 | 0;
          }
        }
        function GenRandomBytes(size) {
          if (nodeCrypto) {
            var data = nodeCrypto.randomBytes(size);
            return data;
          } else if (typeof Uint8Array === "function") {
            var data = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(data);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(data);
            } else {
              FillRandomBytes(data, size);
            }
            return data;
          } else {
            var data = new Array(size);
            FillRandomBytes(data, size);
            return data;
          }
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 0x4f | 0x40;
          data[8] = data[8] & 0xbf | 0x80;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) {
              result += "-";
            }
            if (byte < 16) {
              result += "0";
            }
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
        function CreateUniqueKey() {
          var key;
          do {
            key = "@@WeakMap@@" + CreateUUID();
          } while (hasOwn.call(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) {
              return undefined;
            }
            Object.defineProperty(target, rootKey, {value: Object.create(null)});
          }
          return target[rootKey];
        }
        return WeakMap;
      }
      (function(__global) {
        if (typeof __global.Reflect !== "undefined") {
          if (__global.Reflect !== Reflect) {
            for (var p in Reflect) {
              __global.Reflect[p] = Reflect[p];
            }
          }
        } else {
          __global.Reflect = Reflect;
        }
      })(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : typeof global !== "undefined" ? global : Function("return this;")());
    })(Reflect || (Reflect = {}));
  })(require("5"));
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1", ["6"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("6");
  global.define = __define;
  return module.exports;
});

})
(function(factory) {
  factory();
});
//# sourceMappingURL=reflect-metadata.js.map/* */ 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var core = require('../core');
var browserPatch = require('../patch/browser');

if (global.Zone) {
  console.warn('Zone already exported on window the object!');
}

global.Zone = core.Zone;
global.zone = new global.Zone();

browserPatch.apply();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../core":2,"../patch/browser":4}],2:[function(require,module,exports){
(function (global){
'use strict';

var keys = require('./keys');

function Zone(parentZone, data) {
  var zone = (arguments.length) ? Object.create(parentZone) : this;

  zone.parent = parentZone || null;

  Object.keys(data || {}).forEach(function(property) {

    var _property = property.substr(1);

    // augment the new zone with a hook decorates the parent's hook
    if (property[0] === '$') {
      zone[_property] = data[property](parentZone[_property] || function () {});

    // augment the new zone with a hook that runs after the parent's hook
    } else if (property[0] === '+') {
      if (parentZone[_property]) {
        zone[_property] = function () {
          var result = parentZone[_property].apply(this, arguments);
          data[property].apply(this, arguments);
          return result;
        };
      } else {
        zone[_property] = data[property];
      }

    // augment the new zone with a hook that runs before the parent's hook
    } else if (property[0] === '-') {
      if (parentZone[_property]) {
        zone[_property] = function () {
          data[property].apply(this, arguments);
          return parentZone[_property].apply(this, arguments);
        };
      } else {
        zone[_property] = data[property];
      }

    // set the new zone's hook (replacing the parent zone's)
    } else {
      zone[property] = (typeof data[property] === 'object') ?
                        JSON.parse(JSON.stringify(data[property])) :
                        data[property];
    }
  });

  zone.$id = Zone.nextId++;

  return zone;
}

Zone.prototype = {
  constructor: Zone,

  fork: function (locals) {
    this.onZoneCreated();
    return new Zone(this, locals);
  },

  bind: function (fn, skipEnqueue) {
    if (typeof fn !== 'function') {
      throw new Error('Expecting function got: ' + fn);
    }
    skipEnqueue || this.enqueueTask(fn);
    var zone = this.isRootZone() ? this : this.fork();
    return function zoneBoundFn() {
      return zone.run(fn, this, arguments);
    };
  },

  bindOnce: function (fn) {
    var boundZone = this;
    return this.bind(function () {
      var result = fn.apply(this, arguments);
      boundZone.dequeueTask(fn);
      return result;
    });
  },

  isRootZone: function() {
    return this.parent === null;
  },

  run: function run (fn, applyTo, applyWith) {
    applyWith = applyWith || [];

    var oldZone = global.zone;

    // MAKE THIS ZONE THE CURRENT ZONE
    global.zone = this;

    try {
      this.beforeTask();
      return fn.apply(applyTo, applyWith);
    } catch (e) {
      if (this.onError) {
        this.onError(e);
      } else {
        throw e;
      }
    } finally {
      this.afterTask();
      // REVERT THE CURRENT ZONE BACK TO THE ORIGINAL ZONE
      global.zone = oldZone;
    }
  },

  // onError is used to override error handling.
  // When a custom error handler is provided, it should most probably rethrow the exception
  // not to break the expected control flow:
  //
  // `promise.then(fnThatThrows).catch(fn);`
  //
  // When this code is executed in a zone with a custom onError handler that doesn't rethrow, the
  // `.catch()` branch will not be taken as the `fnThatThrows` exception will be swallowed by the
  // handler.
  onError: null,
  beforeTask: function () {},
  onZoneCreated: function () {},
  afterTask: function () {},
  enqueueTask: function () {},
  dequeueTask: function () {},
  addEventListener: function () {
    return this[keys.common.addEventListener].apply(this, arguments);
  },
  removeEventListener: function () {
    return this[keys.common.removeEventListener].apply(this, arguments);
  }
};

// Root zone ID === 1
Zone.nextId = 1;

Zone.bindPromiseFn = require('./patch/promise').bindPromiseFn;

module.exports = {
  Zone: Zone
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":3,"./patch/promise":11}],3:[function(require,module,exports){
/**
 * Creates keys for `private` properties on exposed objects to minimize interactions with other codebases.
 * The key will be a Symbol if the host supports it; otherwise a prefixed string.
 */
if (typeof Symbol !== 'undefined') {
  function create(name) {
    return Symbol(name);
  } 
} else {
  function create(name) {
    return '_zone$' + name;
  }
}

var commonKeys = {
  addEventListener: create('addEventListener'),
  removeEventListener: create('removeEventListener')
};

module.exports = {
  create: create,
  common: commonKeys
};
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var fnPatch = require('./functions');
var promisePatch = require('./promise');
var mutationObserverPatch = require('./mutation-observer');
var definePropertyPatch = require('./define-property');
var registerElementPatch = require('./register-element');
var webSocketPatch = require('./websocket');
var eventTargetPatch = require('./event-target');
var propertyDescriptorPatch = require('./property-descriptor');
var geolocationPatch = require('./geolocation');
var fileReaderPatch = require('./file-reader');

function apply() {
  fnPatch.patchSetClearFunction(global, [
    'timeout',
    'interval',
    'immediate'
  ]);

  fnPatch.patchRequestAnimationFrame(global, [
    'requestAnimationFrame',
    'mozRequestAnimationFrame',
    'webkitRequestAnimationFrame'
  ]);

  fnPatch.patchFunction(global, [
    'alert',
    'prompt'
  ]);

  eventTargetPatch.apply();

  propertyDescriptorPatch.apply();

  promisePatch.apply();

  mutationObserverPatch.patchClass('MutationObserver');
  mutationObserverPatch.patchClass('WebKitMutationObserver');

  definePropertyPatch.apply();

  registerElementPatch.apply();

  geolocationPatch.apply();

  fileReaderPatch.apply();
}

module.exports = {
  apply: apply
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./define-property":5,"./event-target":6,"./file-reader":7,"./functions":8,"./geolocation":9,"./mutation-observer":10,"./promise":11,"./property-descriptor":12,"./register-element":13,"./websocket":14}],5:[function(require,module,exports){
'use strict';

var keys = require('../keys');

// might need similar for object.freeze
// i regret nothing

var _defineProperty = Object.defineProperty;
var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = keys.create('unconfigurables');

function apply() {
  Object.defineProperty = function (obj, prop, desc) {
    if (isUnconfigurable(obj, prop)) {
      throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
    }
    if (prop !== 'prototype') {
      desc = rewriteDescriptor(obj, prop, desc);
    }
    return _defineProperty(obj, prop, desc);
  };

  Object.defineProperties = function (obj, props) {
    Object.keys(props).forEach(function (prop) {
      Object.defineProperty(obj, prop, props[prop]);
    });
    return obj;
  };

  Object.create = function (obj, proto) {
    if (typeof proto === 'object') {
      Object.keys(proto).forEach(function (prop) {
        proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
      });
    }
    return _create(obj, proto);
  };

  Object.getOwnPropertyDescriptor = function (obj, prop) {
    var desc = _getOwnPropertyDescriptor(obj, prop);
    if (isUnconfigurable(obj, prop)) {
      desc.configurable = false;
    }
    return desc;
  };
};

function _redefineProperty(obj, prop, desc) {
  desc = rewriteDescriptor(obj, prop, desc);
  return _defineProperty(obj, prop, desc);
};

function isUnconfigurable (obj, prop) {
  return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}

function rewriteDescriptor (obj, prop, desc) {
  desc.configurable = true;
  if (!desc.configurable) {
    if (!obj[unconfigurablesKey]) {
      _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
    }
    obj[unconfigurablesKey][prop] = true;
  }
  return desc;
}

module.exports = {
  apply: apply,
  _redefineProperty: _redefineProperty
};



},{"../keys":3}],6:[function(require,module,exports){
(function (global){
'use strict';

var utils = require('../utils');

function apply() {
  // patched properties depend on addEventListener, so this needs to come first
  if (global.EventTarget) {
    utils.patchEventTargetMethods(global.EventTarget.prototype);

  // Note: EventTarget is not available in all browsers,
  // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
  } else {
    var apis = [ 
      'ApplicationCache',
      'EventSource',
      'FileReader',
      'InputMethodContext',
      'MediaController',
      'MessagePort',
      'Node',
      'Performance',
      'SVGElementInstance',
      'SharedWorker',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebKitNamedFlow',
      'Window',
      'Worker',
      'WorkerGlobalScope',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload'
    ];

    apis.forEach(function(thing) {
      var obj = global[thing] && global[thing].prototype;

      // Some browsers e.g. Android 4.3's don't actually implement
      // the EventTarget methods for all of these e.g. FileReader.
      // In this case, there is nothing to patch. 
      if (obj && obj.addEventListener) {
        utils.patchEventTargetMethods(obj);
      }
    });
  }
}

module.exports = {
  apply: apply
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils":15}],7:[function(require,module,exports){
'use strict';

var utils = require('../utils');

function apply() {
  utils.patchClass('FileReader');
}

module.exports = {
  apply: apply
};
},{"../utils":15}],8:[function(require,module,exports){
(function (global){
'use strict';

var utils = require('../utils');

function patchSetClearFunction(obj, fnNames) {
  fnNames.map(function (name) {
    return name[0].toUpperCase() + name.substr(1);
  }).forEach(function (name) {
    var setName = 'set' + name;
    var delegate = obj[setName];

    if (delegate) {
      var clearName = 'clear' + name;
      var ids = {};

      var bindArgs = setName === 'setInterval' ? utils.bindArguments : utils.bindArgumentsOnce;

      global.zone[setName] = function (fn) {
        var id, fnRef = fn;
        arguments[0] = function () {
          delete ids[id];
          return fnRef.apply(this, arguments);
        };
        var args = bindArgs(arguments);
        id = delegate.apply(obj, args);
        ids[id] = true;
        return id;
      };

      obj[setName] = function () {
        return global.zone[setName].apply(this, arguments);
      };

      var clearDelegate = obj[clearName];

      global.zone[clearName] = function (id) {
        if (ids[id]) {
          delete ids[id];
          global.zone.dequeueTask();
        }
        return clearDelegate.apply(this, arguments);
      };

      obj[clearName] = function () {
        return global.zone[clearName].apply(this, arguments);
      };
    }
  });
};


/**
 * requestAnimationFrame is typically recursively called from within the callback function
 * that it executes.  To handle this case, only fork a zone if this is executed
 * within the root zone.
 */
function patchRequestAnimationFrame(obj, fnNames) {
  fnNames.forEach(function (name) {
    var delegate = obj[name];
    if (delegate) {
      global.zone[name] = function (fn) {
        var callZone = global.zone.isRootZone() ? global.zone.fork() : global.zone;
        if (fn) {
          arguments[0] = function () {
            return callZone.run(fn, this, arguments);
          };
        }
        return delegate.apply(obj, arguments);
      };

      obj[name] = function () {
        return global.zone[name].apply(this, arguments);
      };
    }
  });
};

function patchSetFunction(obj, fnNames) {
  fnNames.forEach(function (name) {
    var delegate = obj[name];

    if (delegate) {
      global.zone[name] = function (fn) {
        arguments[0] = function () {
          return fn.apply(this, arguments);
        };
        var args = utils.bindArgumentsOnce(arguments);
        return delegate.apply(obj, args);
      };

      obj[name] = function () {
        return zone[name].apply(this, arguments);
      };
    }
  });
};

function patchFunction(obj, fnNames) {
  fnNames.forEach(function (name) {
    var delegate = obj[name];
    global.zone[name] = function () {
      return delegate.apply(obj, arguments);
    };

    obj[name] = function () {
      return global.zone[name].apply(this, arguments);
    };
  });
};


module.exports = {
  patchSetClearFunction: patchSetClearFunction,
  patchSetFunction: patchSetFunction,
  patchRequestAnimationFrame: patchRequestAnimationFrame,
  patchFunction: patchFunction
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils":15}],9:[function(require,module,exports){
(function (global){
'use strict';

var utils = require('../utils');

function apply() {
  if (global.navigator && global.navigator.geolocation) {
    utils.patchPrototype(global.navigator.geolocation, [
      'getCurrentPosition',
      'watchPosition'
    ]);
  }
}

module.exports = {
  apply: apply
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils":15}],10:[function(require,module,exports){
(function (global){
'use strict';

var keys = require('../keys');

var originalInstanceKey = keys.create('originalInstance');
var creationZoneKey = keys.create('creationZone');
var isActiveKey = keys.create('isActive');

// wrap some native API on `window`
function patchClass(className) {
  var OriginalClass = global[className];
  if (!OriginalClass) return;

  global[className] = function (fn) {
    this[originalInstanceKey] = new OriginalClass(global.zone.bind(fn, true));
    // Remember where the class was instantiate to execute the enqueueTask and dequeueTask hooks
    this[creationZoneKey] = global.zone;
  };

  var instance = new OriginalClass(function () {});

  global[className].prototype.disconnect = function () {
    var result = this[originalInstanceKey].disconnect.apply(this[originalInstanceKey], arguments);
    if (this[isActiveKey]) {
      this[creationZoneKey].dequeueTask();
      this[isActiveKey] = false;
    }
    return result;
  };

  global[className].prototype.observe = function () {
    if (!this[isActiveKey]) {
      this[creationZoneKey].enqueueTask();
      this[isActiveKey] = true;
    }
    return this[originalInstanceKey].observe.apply(this[originalInstanceKey], arguments);
  };

  var prop;
  for (prop in instance) {
    (function (prop) {
      if (typeof global[className].prototype !== undefined) {
        return;
      }
      if (typeof instance[prop] === 'function') {
        global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        Object.defineProperty(global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = global.zone.bind(fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    }(prop));
  }
};

module.exports = {
  patchClass: patchClass
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../keys":3}],11:[function(require,module,exports){
(function (global){
'use strict';

var utils = require('../utils');

/*
 * Patches a function that returns a Promise-like instance.
 *
 * This function must be used when either:
 * - Native Promises are not available,
 * - The function returns a Promise-like object.
 *
 * This is required because zones rely on a Promise monkey patch that could not be applied when
 * Promise is not natively available or when the returned object is not an instance of Promise.
 *
 * Note that calling `bindPromiseFn` on a function that returns a native Promise will also work
 * with minimal overhead.
 *
 * ```
 * var boundFunction = bindPromiseFn(FunctionReturningAPromise);
 *
 * boundFunction.then(successHandler, errorHandler);
 * ```
 */
var bindPromiseFn;

if (global.Promise) {
  bindPromiseFn = function (delegate) {
    return function() {
      var delegatePromise = delegate.apply(this, arguments);

      // if the delegate returned an instance of Promise, forward it.
      if (delegatePromise instanceof Promise) {
        return delegatePromise;
      }

      // Otherwise wrap the Promise-like in a global Promise
      return new Promise(function(resolve, reject) {
        delegatePromise.then(resolve, reject);
      });
    };
  };
} else {
  bindPromiseFn = function (delegate) {
    return function () {
      return _patchThenable(delegate.apply(this, arguments));
    };
  };
}


function _patchPromiseFnsOnObject(objectPath, fnNames) {
  var obj = global;

  var exists = objectPath.every(function (segment) {
    obj = obj[segment];
    return obj;
  });

  if (!exists) {
    return;
  }

  fnNames.forEach(function (name) {
    var fn = obj[name];
    if (fn) {
      obj[name] = bindPromiseFn(fn);
    }
  });
}

function _patchThenable(thenable) {
  var then = thenable.then;
  thenable.then = function () {
    var args = utils.bindArguments(arguments);
    var nextThenable = then.apply(thenable, args);
    return _patchThenable(nextThenable);
  };

  var ocatch = thenable.catch;
  thenable.catch = function () {
    var args = utils.bindArguments(arguments);
    var nextThenable = ocatch.apply(thenable, args);
    return _patchThenable(nextThenable);
  };

  return thenable;
}


function apply() {
  // Patch .then() and .catch() on native Promises to execute callbacks in the zone where
  // those functions are called.
  if (global.Promise) {
    utils.patchPrototype(Promise.prototype, [
      'then',
      'catch'
    ]);

    // Patch browser APIs that return a Promise
    var patchFns = [
      // fetch
      [[], ['fetch']],
      [['Response', 'prototype'], ['arrayBuffer', 'blob', 'json', 'text']]
    ];

    patchFns.forEach(function(objPathAndFns) {
      _patchPromiseFnsOnObject(objPathAndFns[0], objPathAndFns[1]);
    });
  }
}

module.exports = {
  apply: apply,
  bindPromiseFn: bindPromiseFn
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils":15}],12:[function(require,module,exports){
(function (global){
'use strict';

var webSocketPatch = require('./websocket');
var utils = require('../utils');
var keys = require('../keys');

var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');

function apply() {
  if (utils.isWebWorker()){
    // on WebWorker so don't apply patch
    return;
  }

  var supportsWebSocket = typeof WebSocket !== 'undefined';
  if (canPatchViaPropertyDescriptor()) {
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    var onEventNames = eventNames.map(function (property) {
      return 'on' + property;
    });
    utils.patchProperties(HTMLElement.prototype, onEventNames);
    utils.patchProperties(XMLHttpRequest.prototype);
    if (supportsWebSocket) {
      utils.patchProperties(WebSocket.prototype);
    }
  } else {
    // Safari, Android browsers (Jelly Bean)
    patchViaCapturingAllTheEvents();
    utils.patchClass('XMLHttpRequest');
    if (supportsWebSocket) {
      webSocketPatch.apply();
    }
  }
}

function canPatchViaPropertyDescriptor() {
  if (!Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
    // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
    // IDL interface attributes are not configurable
    var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
    if (desc && !desc.configurable) return false;
  }

  Object.defineProperty(HTMLElement.prototype, 'onclick', {
    get: function () {
      return true;
    }
  });
  var elt = document.createElement('div');
  var result = !!elt.onclick;
  Object.defineProperty(HTMLElement.prototype, 'onclick', {});
  return result;
};

var unboundKey = keys.create('unbound');

// Whenever any event fires, we check the event target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
  eventNames.forEach(function (property) {
    var onproperty = 'on' + property;
    document.addEventListener(property, function (event) {
      var elt = event.target, bound;
      while (elt) {
        if (elt[onproperty] && !elt[onproperty][unboundKey]) {
          bound = global.zone.bind(elt[onproperty]);
          bound[unboundKey] = elt[onproperty];
          elt[onproperty] = bound;
        }
        elt = elt.parentElement;
      }
    }, true);
  });
};

module.exports = {
  apply: apply
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../keys":3,"../utils":15,"./websocket":14}],13:[function(require,module,exports){
(function (global){
'use strict';

var _redefineProperty = require('./define-property')._redefineProperty;
var utils = require("../utils");

function apply() {
  if (utils.isWebWorker() || !('registerElement' in global.document)) {
    return;
  }

  var _registerElement = document.registerElement;
  var callbacks = [
    'createdCallback',
    'attachedCallback',
    'detachedCallback',
    'attributeChangedCallback'
  ];

  document.registerElement = function (name, opts) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        if (opts.prototype.hasOwnProperty(callback)) {
          var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
          if (descriptor && descriptor.value) {
            descriptor.value = global.zone.bind(descriptor.value);
            _redefineProperty(opts.prototype, callback, descriptor);
          } else {
            opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
          }
        } else if (opts.prototype[callback]) {
          opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
        }
      });
    }

    return _registerElement.apply(document, [name, opts]);
  };
}

module.exports = {
  apply: apply
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils":15,"./define-property":5}],14:[function(require,module,exports){
(function (global){
'use strict';

var utils = require('../utils');

// we have to patch the instance since the proto is non-configurable
function apply() {
  var WS = global.WebSocket;
  utils.patchEventTargetMethods(WS.prototype);
  global.WebSocket = function(a, b) {
    var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
    var proxySocket;

    // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
    var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
    if (onmessageDesc && onmessageDesc.configurable === false) {
      proxySocket = Object.create(socket);
      ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function(propName) {
        proxySocket[propName] = function() {
          return socket[propName].apply(socket, arguments);
        };
      });
    } else {
      // we can patch the real socket
      proxySocket = socket;
    }

    utils.patchProperties(proxySocket, ['onclose', 'onerror', 'onmessage', 'onopen']);

    return proxySocket;
  };
}

module.exports = {
  apply: apply
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils":15}],15:[function(require,module,exports){
(function (global){
'use strict';

var keys = require('./keys');

function bindArguments(args) {
  for (var i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = global.zone.bind(args[i]);
    }
  }
  return args;
};

function bindArgumentsOnce(args) {
  for (var i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = global.zone.bindOnce(args[i]);
    }
  }
  return args;
};

function patchPrototype(obj, fnNames) {
  fnNames.forEach(function (name) {
    var delegate = obj[name];
    if (delegate) {
      obj[name] = function () {
        return delegate.apply(this, bindArguments(arguments));
      };
    }
  });
};

function isWebWorker() {
  return (typeof document === "undefined");
}

function patchProperty(obj, prop) {
  var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
    enumerable: true,
    configurable: true
  };

  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;

  // substr(2) cuz 'onclick' -> 'click', etc
  var eventName = prop.substr(2);
  var _prop = '_' + prop;

  desc.set = function (fn) {
    if (this[_prop]) {
      this.removeEventListener(eventName, this[_prop]);
    }

    if (typeof fn === 'function') {
      this[_prop] = fn;
      this.addEventListener(eventName, fn, false);
    } else {
      this[_prop] = null;
    }
  };

  desc.get = function () {
    return this[_prop];
  };

  Object.defineProperty(obj, prop, desc);
};

function patchProperties(obj, properties) {
  (properties || (function () {
      var props = [];
      for (var prop in obj) {
        props.push(prop);
      }
      return props;
    }()).
    filter(function (propertyName) {
      return propertyName.substr(0,2) === 'on';
    })).
    forEach(function (eventName) {
      patchProperty(obj, eventName);
    });
};

var originalFnKey = keys.create('originalFn');
var boundFnsKey = keys.create('boundFns');

function patchEventTargetMethods(obj) {
  // This is required for the addEventListener hook on the root zone.
  obj[keys.common.addEventListener] = obj.addEventListener;
  obj.addEventListener = function (eventName, handler, useCapturing) {
    var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
    var fn;
    //Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
    if (handler.toString() !== "[object FunctionWrapper]") {
      if (handler.handleEvent) {
        // Have to pass in 'handler' reference as an argument here, otherwise it gets clobbered in
        // IE9 by the arguments[1] assignment at end of this function.
        fn = (function(handler) {
          return function() {
            handler.handleEvent.apply(handler, arguments);
          };
        })(handler);
      } else {
        fn = handler;
      } 

      handler[originalFnKey] = fn;
      handler[boundFnsKey] = handler[boundFnsKey] || {};
      handler[boundFnsKey][eventType] = handler[boundFnsKey][eventType] || zone.bind(fn);
      arguments[1] = handler[boundFnsKey][eventType];
    }

    var target = isWebWorker() && !this ? self : this;

    return global.zone.addEventListener.apply(target, arguments);
  };

  // This is required for the removeEventListener hook on the root zone.
  obj[keys.common.removeEventListener] = obj.removeEventListener;
  obj.removeEventListener = function (eventName, handler, useCapturing) {
    var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
    if (handler[boundFnsKey] && handler[boundFnsKey][eventType]) {
      var _bound = handler[boundFnsKey];
      
      arguments[1] = _bound[eventType];
      delete _bound[eventType];
    }
    var target = isWebWorker() && !this ? self : this;
    var result = global.zone.removeEventListener.apply(target, arguments);
    global.zone.dequeueTask(handler[originalFnKey]);
    return result;
  };
};

var originalInstanceKey = keys.create('originalInstance');

// wrap some native API on `window`
function patchClass(className) {
  var OriginalClass = global[className];
  if (!OriginalClass) return;

  global[className] = function () {
    var a = bindArguments(arguments);
    switch (a.length) {
      case 0: this[originalInstanceKey] = new OriginalClass(); break;
      case 1: this[originalInstanceKey] = new OriginalClass(a[0]); break;
      case 2: this[originalInstanceKey] = new OriginalClass(a[0], a[1]); break;
      case 3: this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]); break;
      case 4: this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]); break;
      default: throw new Error('what are you even doing?');
    }
  };

  var instance = new OriginalClass();

  var prop;
  for (prop in instance) {
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        Object.defineProperty(global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = global.zone.bind(fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    }(prop));
  }

  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      global[className][prop] = OriginalClass[prop];
    }
  }
};

module.exports = {
  bindArguments: bindArguments,
  bindArgumentsOnce: bindArgumentsOnce,
  patchPrototype: patchPrototype,
  patchProperty: patchProperty,
  patchProperties: patchProperties,
  patchEventTargetMethods: patchEventTargetMethods,
  patchClass: patchClass,
  isWebWorker: isWebWorker
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":3}]},{},[1]);
