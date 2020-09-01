!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(2);var i=r(10),o=r(9);var c=r(5);function u(t){return t}function s(t){return 0===t.length?u:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var a=r(4),f=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var c=this.operator,u=function(t,e,r){if(t){if(t instanceof n.a)return t;if(t[i.a])return t[i.a]()}return t||e||r?new n.a(t,e,r):new n.a(o.a)}(t,e,r);if(c?u.add(c.call(u,this.source)):u.add(this.source||a.a.useDeprecatedSynchronousErrorHandling&&!u.syncErrorThrowable?this._subscribe(u):this._trySubscribe(u)),a.a.useDeprecatedSynchronousErrorHandling&&u.syncErrorThrowable&&(u.syncErrorThrowable=!1,u.syncErrorThrown))throw u.syncErrorValue;return u},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){a.a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,r=e.closed,i=e.destination,o=e.isStopped;if(r||o)return!1;t=i&&i instanceof n.a?i:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=h(e))((function(e,n){var i;i=r.subscribe((function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[c.a]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:s(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=h(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function h(t){if(t||(t=a.a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return c}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function i(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function c(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}},function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(1),i=r(6),o=r(9),c=r(3),u=r(10),s=r(4),a=r(7),f=function(t){function e(r,n,i){var c=t.call(this)||this;switch(c.syncErrorValue=null,c.syncErrorThrown=!1,c.syncErrorThrowable=!1,c.isStopped=!1,arguments.length){case 0:c.destination=o.a;break;case 1:if(!r){c.destination=o.a;break}if("object"==typeof r){r instanceof e?(c.syncErrorThrowable=r.syncErrorThrowable,c.destination=r,r.add(c)):(c.syncErrorThrowable=!0,c.destination=new h(c,r));break}default:c.syncErrorThrowable=!0,c.destination=new h(c,r,n,i)}return c}return n.b(e,t),e.prototype[u.a]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(c.a),h=function(t){function e(e,r,n,c){var u,s=t.call(this)||this;s._parentSubscriber=e;var a=s;return Object(i.a)(r)?u=r:r&&(u=r.next,n=r.error,c=r.complete,r!==o.a&&(a=Object.create(r),Object(i.a)(a.unsubscribe)&&s.add(a.unsubscribe.bind(a)),a.unsubscribe=s.unsubscribe.bind(s))),s._context=a,s._next=u,s._error=n,s._complete=c,s}return n.b(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;s.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=s.a.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):Object(a.a)(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;Object(a.a)(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};s.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),s.a.useDeprecatedSynchronousErrorHandling)throw t;Object(a.a)(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!s.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return s.a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(Object(a.a)(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(f)},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(8),i=r(12),o=r(6),c=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),u=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r=this._parentOrParents,u=this._ctorUnsubscribe,a=this._unsubscribe,f=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var h=0;h<r.length;++h){r[h].remove(this)}if(Object(o.a)(a)){u&&(this._unsubscribe=void 0);try{a.call(this)}catch(t){e=t instanceof c?s(t.errors):[t]}}if(Object(n.a)(f)){h=-1;for(var l=f.length;++h<l;){var p=f[h];if(Object(i.a)(p))try{p.unsubscribe()}catch(t){e=e||[],t instanceof c?e=e.concat(s(t.errors)):e.push(t)}}}if(e)throw new c(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof t){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=((e=new t).closed=!0,e),t}();function s(t){return t.reduce((function(t,e){return t.concat(e instanceof c?e.errors:e)}),[])}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;n=t},get useDeprecatedSynchronousErrorHandling(){return n}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},function(t,e,r){"use strict";function n(t){return"function"==typeof t}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";function n(t){setTimeout((function(){throw t}),0)}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(4),i=r(7),o={closed:!0,next:function(t){},error:function(t){if(n.a.useDeprecatedSynchronousErrorHandling)throw t;Object(i.a)(t)},complete:function(){}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(1),i=r(2);function o(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new c(t,e))}}var c=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.project,this.thisArg))},t}(),u=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return n.b(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(i.a)},function(t,e,r){"use strict";function n(t){return null!==t&&"object"==typeof t}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";r.r(e),r.d(e,"AppClass",(function(){return i}));var n=r(14),i=function(){function t(){this._clock=new n.AppClock(13,58)}return Object.defineProperty(t.prototype,"clock",{get:function(){return this._clock},enumerable:!1,configurable:!0}),t.prototype.refreshClock=function(){document.querySelector("#clock-example").innerHTML=this._clock.getCurrentTime(!0)},t}()},function(t,e,r){"use strict";r.r(e),r.d(e,"Clock",(function(){return o})),r.d(e,"AppClock",(function(){return c}));var n,i=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=function(){function t(t,e){this._currentTime=new Date,this.localeDateOptionsFormat={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"},this._currentTime.setHours(t,e,0,0)}return t.prototype.setTime=function(t){this._currentTime=t},t.prototype.getTime=function(t){return void 0===t&&(t=!1),t?this._currentTime.toLocaleDateString("en-UK",this.localeDateOptionsFormat):this._currentTime},t}(),c=function(t){function e(e,r){return t.call(this,e,r)||this}return i(e,t),e.prototype.getCurrentTime=function(t){return void 0===t&&(t=!1),t?(new Date).toLocaleDateString("en-UK",this.localeDateOptionsFormat):new Date},e}(o)},function(t,e,r){"use strict";r.r(e),r.d(e,"navBarEvents",(function(){return i}));var n=r(21),i=function(){var t=document.querySelector("nav.navbar .navbar-burger"),e=document.querySelector("nav.navbar .navbar-menu");t&&e&&Object(n.a)(t,"click").subscribe((function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")}))}},,function(t,e,r){r(20),r(15),r(13),r(14),r(18),t.exports=r(19)},function(t,e){},function(t,e){},function(t,e,r){"use strict";r.r(e);var n=r(13),i=r(15),o=r(0),c=r(1),u=r(3),s=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return c.b(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,r){return t.call(this)||this}return c.b(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(u.a)),a=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),f=new(function(t){function e(r,n){void 0===n&&(n=a.now);var i=t.call(this,r,(function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return c.b(e,t),e.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,i):t.prototype.schedule.call(this,r,n,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(a))(s),h=r(8);function l(t){var e=t.subscriber,r=t.counter,n=t.period;e.next(r),this.schedule({subscriber:e,counter:r+1,period:n},n)}var p=r(21),d=r(2);var b=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new y(t,this.predicate,this.thisArg))},t}(),y=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.predicate=r,i.thisArg=n,i.count=0,i}return c.b(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(d.a);function v(){}var _=r(6);var m=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new w(t,this.nextOrObserver,this.error,this.complete))},t}(),w=function(t){function e(e,r,n,i){var o=t.call(this,e)||this;return o._tapNext=v,o._tapError=v,o._tapComplete=v,o._tapError=n||v,o._tapComplete=i||v,Object(_.a)(r)?(o._context=o,o._tapNext=r):r&&(o._context=r,o._tapNext=r.next||v,o._tapError=r.error||v,o._tapComplete=r.complete||v),o}return c.b(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(d.a);var g=new o.a((function(t){return t.complete()}));function x(t){return t?function(t){return new o.a((function(e){return t.schedule((function(){return e.complete()}))}))}(t):g}function O(t){return t&&"function"==typeof t.schedule}var E,S=function(t){return function(e){for(var r=0,n=t.length;r<n&&!e.closed;r++)e.next(t[r]);e.complete()}};function j(t,e){return new o.a((function(r){var n=new u.a,i=0;return n.add(e.schedule((function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()}))),n}))}function T(t,e){return e?j(t,e):new o.a(S(t))}function k(t){var e=t.error;t.subscriber.error(e)}E||(E={});var N=function(){function t(t,e,r){this.kind=t,this.value=e,this.error=r,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,r){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return r&&r()}},t.prototype.accept=function(t,e,r){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,r)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];return O(r)?(t.pop(),j(t,r)):T(t)}(this.value);case"E":return t=this.error,e?new o.a((function(r){return e.schedule(k,0,{error:t,subscriber:r})})):new o.a((function(e){return e.error(t)}));case"C":return x()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();var P=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new C(t,this.delay,this.scheduler))},t}(),C=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.delay=r,i.scheduler=n,i.queue=[],i.active=!1,i.errored=!1,i}return c.b(e,t),e.dispatch=function(t){for(var e=t.source,r=e.queue,n=t.scheduler,i=t.destination;r.length>0&&r[0].time-n.now()<=0;)r.shift().notification.observe(i);if(r.length>0){var o=Math.max(0,r[0].time-n.now());this.schedule(t,o)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.destination.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,r=new A(e.now()+this.delay,t);this.queue.push(r),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(N.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.scheduleNotification(N.createComplete()),this.unsubscribe()},e}(d.a),A=function(){return function(t,e){this.time=t,this.notification=e}}(),I=r(11),L=r(7);function D(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var H=D(),q=r(5),M=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function V(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var U=r(12),F=function(t){if(t&&"function"==typeof t[q.a])return n=t,function(t){var e=n[q.a]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(M(t))return S(t);if(V(t))return r=t,function(t){return r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,L.a),t};if(t&&"function"==typeof t[H])return e=t,function(t){for(var r=e[H]();;){var n=void 0;try{n=r.next()}catch(e){return t.error(e),t}if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof r.return&&t.add((function(){r.return&&r.return()})),t};var e,r,n,i=Object(U.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function Y(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[q.a]}(t))return function(t,e){return new o.a((function(r){var n=new u.a;return n.add(e.schedule((function(){var i=t[q.a]();n.add(i.subscribe({next:function(t){n.add(e.schedule((function(){return r.next(t)})))},error:function(t){n.add(e.schedule((function(){return r.error(t)})))},complete:function(){n.add(e.schedule((function(){return r.complete()})))}}))}))),n}))}(t,e);if(V(t))return function(t,e){return new o.a((function(r){var n=new u.a;return n.add(e.schedule((function(){return t.then((function(t){n.add(e.schedule((function(){r.next(t),n.add(e.schedule((function(){return r.complete()})))})))}),(function(t){n.add(e.schedule((function(){return r.error(t)})))}))}))),n}))}(t,e);if(M(t))return j(t,e);if(function(t){return t&&"function"==typeof t[H]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new o.a((function(r){var n,i=new u.a;return i.add((function(){n&&"function"==typeof n.return&&n.return()})),i.add(e.schedule((function(){n=t[H](),i.add(e.schedule((function(){if(!r.closed){var t,e;try{var i=n.next();t=i.value,e=i.done}catch(t){return void r.error(t)}e?r.complete():(r.next(t),this.schedule())}})))}))),i}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function z(t,e){return e?Y(t,e):t instanceof o.a?t:new o.a(F(t))}var B=function(t){function e(e){var r=t.call(this)||this;return r.parent=e,r}return c.b(e,t),e.prototype._next=function(t){this.parent.notifyNext(t)},e.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(d.a),K=(d.a,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c.b(e,t),e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(d.a));d.a;function R(t,e,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof e?function(n){return n.pipe(R((function(r,n){return z(t(r,n)).pipe(Object(I.a)((function(t,i){return e(r,t,n,i)})))}),r))}:("number"==typeof e&&(r=e),function(e){return e.lift(new J(t,r))})}var J=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new G(t,this.project,this.concurrent))},t}(),G=function(t){function e(e,r,n){void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=r,i.concurrent=n,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return c.b(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e)},e.prototype._innerSub=function(t){var e=new B(this),r=this.destination;r.add(e);var n=function(t,e){if(!e.closed)return t instanceof o.a?t.subscribe(e):F(t)(e)}(t,e);n!==e&&r.add(n)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(K);Object(i.navBarEvents)();var Q=new n.AppClass;console.log("%cTypeScript examples!","color: #00D1B2; font-size: 18pt;"),console.log("The current time is:",Q.clock.getCurrentTime().toLocaleString()),console.log("The current time (formatted) is: "+Q.clock.getCurrentTime(!0)),console.log("The time set is: "+Q.clock.getTime().toLocaleString()),console.log("The time set (formatted) is: "+Q.clock.getTime(!0));var W,X,Z,$,tt,et=!1;(Z=1e3,void 0===Z&&(Z=0),void 0===$&&($=f),tt=Z,(Object(h.a)(tt)||!(tt-parseFloat(tt)+1>=0)||Z<0)&&(Z=0),$&&"function"==typeof $.schedule||($=f),new o.a((function(t){return t.add($.schedule(l,Z,{subscriber:t,counter:0,period:Z})),t}))).pipe((W=function(){return!et},function(t){return t.lift(new b(W,X))})).subscribe((function(){return Q.refreshClock()}));var rt=document.querySelector("#clock-control");rt&&Object(p.a)(rt,"click").subscribe((function(){if(et)return et=!1,rt.classList.remove("is-success"),rt.classList.add("is-danger"),void(rt.innerHTML="Freeze clock");et=!0,rt.classList.remove("is-danger"),rt.classList.add("is-success"),rt.innerHTML="Resume clock"}));var nt,it,ot,ct,ut,st=[],at=document.querySelector("#user-trigger"),ft=document.querySelector("#users-container");at&&Object(p.a)(at,"click").pipe((ot=function(){st=[],ft.textContent="",at.classList.add("is-loading")},function(t){return t.lift(new m(ot,ct,ut))}),function(t,e){void 0===e&&(e=f);var r,n=(r=t)instanceof Date&&!isNaN(+r)?+t-e.now():Math.abs(t);return function(t){return t.lift(new P(n,e))}}(2e3),(nt=function(){return function(t,e){void 0===e&&(e={});var r=e.selector,n=c.c(e,["selector"]);return new o.a((function(e){var i,o=new AbortController,s=o.signal,a=!0,f=!1,h=new u.a;if(h.add((function(){f=!0,a&&o.abort()})),n){if(n.signal)if(n.signal.aborted)o.abort();else{var l=n.signal,p=function(){s.aborted||o.abort()};l.addEventListener("abort",p),h.add((function(){return l.removeEventListener("abort",p)}))}i=c.a({},n,{signal:s})}else i={signal:s};return fetch(t,i).then((function(t){r?h.add(z(r(t)).subscribe((function(t){return e.next(t)}),(function(t){a=!1,f||e.error(t)}),(function(){a=!1,e.complete()}))):(a=!1,e.next(t),e.complete())})).catch((function(t){a=!1,f||e.error(t)})),h}))}("https://jsonplaceholder.typicode.com/users",{selector:function(t){return t.json()}})},R(nt,it,1))).subscribe((function(t){at.classList.remove("is-loading"),st=t,ft.textContent=JSON.stringify(st,void 0,2)}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(0),i=r(8),o=r(6),c=r(11);function u(t,e,r,s){return Object(o.a)(r)&&(s=r,r=void 0),s?u(t,e,r).pipe(Object(c.a)((function(t){return Object(i.a)(t)?s.apply(void 0,t):s(t)}))):new n.a((function(n){!function t(e,r,n,i,o){var c;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var u=e;e.addEventListener(r,n,o),c=function(){return u.removeEventListener(r,n,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var s=e;e.on(r,n),c=function(){return s.off(r,n)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var a=e;e.addListener(r,n),c=function(){return a.removeListener(r,n)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var f=0,h=e.length;f<h;f++)t(e[f],r,n,i,o)}i.add(c)}(t,e,(function(t){arguments.length>1?n.next(Array.prototype.slice.call(arguments)):n.next(t)}),n,r)}))}}]);