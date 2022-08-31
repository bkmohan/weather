(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function n(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(r){if(t(1,arguments),!e(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(e,r){t(2,arguments);var o=n(e).getTime(),i=a(r);return new Date(o+i)}function i(e,n){t(2,arguments);var r=a(n);return o(e,-r)}var u=864e5;function d(e){t(1,arguments);var r=1,a=n(e),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function c(e){t(1,arguments);var r=n(e),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=d(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=d(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function l(e){t(1,arguments);var n=c(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=d(r);return a}var s=6048e5,h={};function f(){return h}function m(e,r){var o,i,u,d,c,l,s,h;t(1,arguments);var m=f(),g=a(null!==(o=null!==(i=null!==(u=null!==(d=null==r?void 0:r.weekStartsOn)&&void 0!==d?d:null==r||null===(c=r.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:m.weekStartsOn)&&void 0!==i?i:null===(s=m.locale)||void 0===s||null===(h=s.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=n(e),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function g(e,r){var o,i,u,d,c,l,s,h;t(1,arguments);var g=n(e),v=g.getUTCFullYear(),w=f(),y=a(null!==(o=null!==(i=null!==(u=null!==(d=null==r?void 0:r.firstWeekContainsDate)&&void 0!==d?d:null==r||null===(c=r.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==i?i:null===(s=w.locale)||void 0===s||null===(h=s.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,y),b.setUTCHours(0,0,0,0);var p=m(b,r),T=new Date(0);T.setUTCFullYear(v,0,y),T.setUTCHours(0,0,0,0);var C=m(T,r);return g.getTime()>=p.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}function v(e,n){var r,o,i,u,d,c,l,s;t(1,arguments);var h=f(),v=a(null!==(r=null!==(o=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==i?i:h.firstWeekContainsDate)&&void 0!==o?o:null===(l=h.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==r?r:1),w=g(e,n),y=new Date(0);y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0);var b=m(y,n);return b}var w=6048e5;function y(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const b=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===e?r%100:r,e.length)},p=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):y(n+1,2)},T=function(t,e){return y(t.getUTCDate(),e.length)},C=function(t,e){return y(t.getUTCHours()%12||12,e.length)},M=function(t,e){return y(t.getUTCHours(),e.length)},S=function(t,e){return y(t.getUTCMinutes(),e.length)},k=function(t,e){return y(t.getUTCSeconds(),e.length)},D=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return y(Math.floor(r*Math.pow(10,n-3)),e.length)};function x(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+y(o,2)}function _(t,e){return t%60==0?(t>0?"-":"+")+y(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+y(Math.floor(a/60),2)+n+y(a%60,2)}const P={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b(t,e)},Y:function(t,e,n,r){var a=g(t,r),o=a>0?a:1-a;return"YY"===e?y(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):y(o,e.length)},R:function(t,e){return y(c(t),e.length)},u:function(t,e){return y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return p(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,r,a,o){var i=function(e,r){t(1,arguments);var a=n(e),o=m(a,r).getTime()-v(a,r).getTime();return Math.round(o/w)+1}(e,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):y(i,r.length)},I:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=d(r).getTime()-l(r).getTime();return Math.round(a/s)+1}(e);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):y(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):T(t,e)},D:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/u)+1}(e);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):y(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return y(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return y(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return y(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return C(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):M(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):S(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k(t,e)},S:function(t,e){return D(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return _(a);case"XXXX":case"XX":return q(a);default:return q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return _(a);case"xxxx":case"xx":return q(a);default:return q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return y(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return y((r._originalDate||t).getTime(),e.length)}};var U=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},E=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},W={p:E,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return U(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(a,e)).replace("{{time}}",E(o,e))}};const L=W;function Y(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var O=["D","DD"],N=["YY","YYYY"];function H(t){return-1!==O.indexOf(t)}function j(t){return-1!==N.indexOf(t)}function F(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function z(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var Q,B={date:z({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:z({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:z({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},G={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function R(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?I(d,(function(t){return t.test(u)})):$(d,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(u.length);return{value:i,rest:l}}}function $(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function I(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const J={code:"en-US",formatDistance:function(t,e,n){var r,a=A[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:B,formatRelative:function(t,e,n,r){return G[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Q.matchPattern);if(!n)return null;var r=n[0],a=t.match(Q.parsePattern);if(!a)return null;var o=Q.valueCallback?Q.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:R({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:R({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:R({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:R({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:R({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,tt=/''/g,et=/[a-zA-Z]/;function nt(e,o,u){var d,c,l,s,h,m,g,v,w,y,b,p,T,C,M,S,k,D;t(2,arguments);var x=String(o),_=f(),q=null!==(d=null!==(c=null==u?void 0:u.locale)&&void 0!==c?c:_.locale)&&void 0!==d?d:J,U=a(null!==(l=null!==(s=null!==(h=null!==(m=null==u?void 0:u.firstWeekContainsDate)&&void 0!==m?m:null==u||null===(g=u.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==h?h:_.firstWeekContainsDate)&&void 0!==s?s:null===(w=_.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==l?l:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=a(null!==(b=null!==(p=null!==(T=null!==(C=null==u?void 0:u.weekStartsOn)&&void 0!==C?C:null==u||null===(M=u.locale)||void 0===M||null===(S=M.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==T?T:_.weekStartsOn)&&void 0!==p?p:null===(k=_.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==b?b:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var W=n(e);if(!r(W))throw new RangeError("Invalid time value");var O=Y(W),N=i(W,O),A={firstWeekContainsDate:U,weekStartsOn:E,locale:q,_originalDate:W},z=x.match(K).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,L[e])(t,q.formatLong):t})).join("").match(V).map((function(t){if("''"===t)return"'";var n=t[0];if("'"===n)return rt(t);var r=P[n];if(r)return null!=u&&u.useAdditionalWeekYearTokens||!j(t)||F(t,o,String(e)),null!=u&&u.useAdditionalDayOfYearTokens||!H(t)||F(t,o,String(e)),r(N,t,q.localize,A);if(n.match(et))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return t})).join("");return z}function rt(t){var e=t.match(Z);return e?e[1].replace(tt,"'"):t}const at=document.querySelector(".forecast-header__daily"),ot=document.querySelector(".forecast-header__hourly"),it=document.querySelector(".forecast__daily"),ut=document.querySelector(".forecast__hourly"),dt=document.querySelector(".forecast-scroll"),ct=document.querySelector("#arrow-left"),lt=document.querySelector("#arrow-right"),st=document.querySelector("#search-icon"),ht=document.querySelector("#unit-toogle"),ft=(document.querySelectorAll(".forecast__daily_day"),document.querySelector("#location-and-date__location")),mt=document.querySelector("#location-and-date__current-date"),gt=document.querySelector("#location-and-date__current-time"),vt=document.querySelector("#weather__temperature__value"),wt=document.querySelector("#weather__temperature__summary"),yt=document.querySelector("#feels-like"),bt=document.querySelector("#precipitate"),pt=document.querySelector("#humidity"),Tt=document.querySelector("#wind-speed");let Ct={},Mt="C";function St(){at.classList.toggle("header-selected"),ot.classList.toggle("header-selected"),it.classList.toggle("inactive"),ut.classList.toggle("inactive")}function kt(t){let e=document.querySelector(".dot-active"),n=e.getAttribute("data-id"),r=t.target.closest(".scroll-arrow").id;"arrow-left"==r&&"0"!=n?(document.querySelectorAll(".forecast__hourly_day:not(.inactive)").forEach((t=>{t.classList.toggle("inactive");let e=parseInt(t.getAttribute("data-id"));document.querySelector(`.forecast__hourly_day[data-id="${e-8}"`).classList.toggle("inactive")})),e.classList.toggle("dot-active"),document.querySelector(`.dot[data-id="${parseInt(n)-1}"`).classList.toggle("dot-active")):"arrow-right"==r&&"2"!=n&&(document.querySelectorAll(".forecast__hourly_day:not(.inactive)").forEach((t=>{t.classList.toggle("inactive");let e=parseInt(t.getAttribute("data-id"));document.querySelector(`.forecast__hourly_day[data-id="${e+8}"`).classList.toggle("inactive")})),e.classList.toggle("dot-active"),document.querySelector(`.dot[data-id="${parseInt(n)+1}"]`).classList.toggle("dot-active"))}function Dt(t){return"C"==Mt?Math.round(t)+" &deg C":Math.round(1.8*t+32)+" &deg F"}function xt(t){if(t){ft.textContent=t.location;let n=new Date(1e3*t.current.dt);mt.textContent=nt(n,"EEEE, do MMM 'yy"),gt.textContent=nt(n,"h:mm aaa"),vt.innerHTML=Dt(t.current.temp),wt.textContent=t.current.weather[0].description.split(" ").map((t=>t.charAt(0).toUpperCase()+t.substring(1))).join(" "),yt.innerHTML=Dt(t.current.feels_like),bt.textContent=100*t.hourly[0].pop+" %",pt.textContent=t.current.humidity+" %",Tt.textContent=(e=t.current.wind_speed,"C"==Mt?e+" km/h":Math.round(160.9344*e)/100+" mph");for(let e=0;e<7;e++){let n=new Date(1e3*t.daily[e+1].dt),r=document.querySelector(`.forecast__daily_day[data-id="${e}"]`);r.querySelector(".day").textContent=nt(n,"EEEE"),r.querySelector(".forecast__daily_high").innerHTML=Dt(t.daily[e+1].temp.max),r.querySelector(".forecast__daily_low").innerHTML=Dt(t.daily[e+1].temp.min)}for(let e=0;e<24;e++){let n=new Date(1e3*t.hourly[e+1].dt),r=document.querySelector(`.forecast__hourly_day[data-id="${e}"]`);r.querySelector(".hour").textContent=nt(n,"h:mm aaa"),r.querySelector(".forecast__hourly_temperature").innerHTML=Dt(t.hourly[e+1].temp)}}else document.querySelector(".location-error").style.display="block";var e}ut.insertBefore(function(){let t=document.createElement("div");t.classList.add("forecast__hourly_container");for(let e=0;e<24;e++){let n=document.createElement("div");n.classList.add("forecast__hourly_day"),e>7&&n.classList.add("inactive"),n.setAttribute("data-id",e);let r=document.createElement("div");r.classList.add("hour"),r.textContent=`${e+1} am`;let a=document.createElement("div");a.classList.add("forecast__hourly_temperature"),a.innerHTML="21 &degC";let o=document.createElement("div");o.classList.add("forecast_hourly_icon"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">\n                                        <title>cloudy</title>\n                                        <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"></path>\n                                    </svg>',n.appendChild(r),n.appendChild(a),n.appendChild(o),t.appendChild(n)}return t}(),dt),at.addEventListener("click",St),ot.addEventListener("click",St),ct.addEventListener("click",kt),lt.addEventListener("click",kt),st.addEventListener("click",(async function(t){let e=document.querySelector("#search-bar").value;Ct=await async function(t){const e=`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=20f7632ffc2c022654e4093c6947b4f4`;try{let t=await fetch(e),n=await t.json();const r=`https://api.openweathermap.org/data/2.5/onecall?lat=${n.coord.lat}&lon=${n.coord.lon}&exclude=minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4`;t=await fetch(r);let a=await t.json(),o={};return o.location=n.name,o.lat=n.coord.lat,o.lon=n.coord.lon,o.current=a.current,o.hourly=a.hourly,o.daily=a.daily,console.log(o),o}catch{return console.log("its in cateh"),""}}(e),xt(Ct)})),ht.addEventListener("change",(t=>{Mt=t.target.checked?"F":"C",0!=Object.keys(Ct).length&&xt(Ct)}))})();