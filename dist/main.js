(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function n(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(r){if(e(1,arguments),!t(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function o(t,r){e(2,arguments);var o=n(t).getTime(),i=a(r);return new Date(o+i)}function i(t,n){e(2,arguments);var r=a(n);return o(t,-r)}var u=864e5;function c(t){e(1,arguments);var r=1,a=n(t),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function s(t){e(1,arguments);var r=n(t),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=c(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=c(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function d(t){e(1,arguments);var n=s(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=c(r);return a}var l=6048e5,h={};function m(){return h}function f(t,r){var o,i,u,c,s,d,l,h;e(1,arguments);var f=m(),g=a(null!==(o=null!==(i=null!==(u=null!==(c=null==r?void 0:r.weekStartsOn)&&void 0!==c?c:null==r||null===(s=r.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==i?i:null===(l=f.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=n(t),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function g(t,r){var o,i,u,c,s,d,l,h;e(1,arguments);var g=n(t),v=g.getUTCFullYear(),w=m(),y=a(null!==(o=null!==(i=null!==(u=null!==(c=null==r?void 0:r.firstWeekContainsDate)&&void 0!==c?c:null==r||null===(s=r.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==i?i:null===(l=w.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,y),b.setUTCHours(0,0,0,0);var p=f(b,r),T=new Date(0);T.setUTCFullYear(v,0,y),T.setUTCHours(0,0,0,0);var C=f(T,r);return g.getTime()>=p.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}function v(t,n){var r,o,i,u,c,s,d,l;e(1,arguments);var h=m(),v=a(null!==(r=null!==(o=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:h.firstWeekContainsDate)&&void 0!==o?o:null===(d=h.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),w=g(t,n),y=new Date(0);y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0);var b=f(y,n);return b}var w=6048e5;function y(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const b=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===t?r%100:r,t.length)},p=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):y(n+1,2)},T=function(e,t){return y(e.getUTCDate(),t.length)},C=function(e,t){return y(e.getUTCHours()%12||12,t.length)},S=function(e,t){return y(e.getUTCHours(),t.length)},M=function(e,t){return y(e.getUTCMinutes(),t.length)},_=function(e,t){return y(e.getUTCSeconds(),t.length)},k=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return y(Math.floor(r*Math.pow(10,n-3)),t.length)};function D(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+y(o,2)}function x(e,t){return e%60==0?(e>0?"-":"+")+y(Math.abs(e)/60,2):q(e,t)}function q(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+y(Math.floor(a/60),2)+n+y(a%60,2)}const E={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b(e,t)},Y:function(e,t,n,r){var a=g(e,r),o=a>0?a:1-a;return"YY"===t?y(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):y(o,t.length)},R:function(e,t){return y(s(e),t.length)},u:function(e,t){return y(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return p(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,r,a,o){var i=function(t,r){e(1,arguments);var a=n(t),o=f(a,r).getTime()-v(a,r).getTime();return Math.round(o/w)+1}(t,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):y(i,r.length)},I:function(t,r,a){var o=function(t){e(1,arguments);var r=n(t),a=c(r).getTime()-d(r).getTime();return Math.round(a/l)+1}(t);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):y(o,r.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):T(e,t)},D:function(t,r,a){var o=function(t){e(1,arguments);var r=n(t),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/u)+1}(t);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):y(o,r.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return y(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return y(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return y(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return C(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):S(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):M(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):_(e,t)},S:function(e,t){return k(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return x(a);case"XXXX":case"XX":return q(a);default:return q(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return x(a);case"xxxx":case"xx":return q(a);default:return q(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+D(a,":");default:return"GMT"+q(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+D(a,":");default:return"GMT"+q(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return y((r._originalDate||e).getTime(),t.length)}};var U=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},P=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},W={p:P,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return U(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",U(a,t)).replace("{{time}}",P(o,t))}};const L=W;function Y(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var O=["D","DD"],N=["YY","YYYY"];function H(e){return-1!==O.indexOf(e)}function F(e){return-1!==N.indexOf(e)}function j(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function z(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Q,I={date:z({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:z({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:z({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function G(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function B(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?$(c,(function(e){return e.test(u)})):X(c,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(u.length);return{value:i,rest:d}}}function X(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function $(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const J={code:"en-US",formatDistance:function(e,t,n){var r,a=A[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:I,formatRelative:function(e,t,n,r){return R[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:G({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:G({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:G({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:G({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:G({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Q.matchPattern);if(!n)return null;var r=n[0],a=e.match(Q.parsePattern);if(!a)return null;var o=Q.valueCallback?Q.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:B({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:B({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:B({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:B({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:B({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(t,o,u){var c,s,d,l,h,f,g,v,w,y,b,p,T,C,S,M,_,k;e(2,arguments);var D=String(o),x=m(),q=null!==(c=null!==(s=null==u?void 0:u.locale)&&void 0!==s?s:x.locale)&&void 0!==c?c:J,U=a(null!==(d=null!==(l=null!==(h=null!==(f=null==u?void 0:u.firstWeekContainsDate)&&void 0!==f?f:null==u||null===(g=u.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==h?h:x.firstWeekContainsDate)&&void 0!==l?l:null===(w=x.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==d?d:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=a(null!==(b=null!==(p=null!==(T=null!==(C=null==u?void 0:u.weekStartsOn)&&void 0!==C?C:null==u||null===(S=u.locale)||void 0===S||null===(M=S.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==T?T:x.weekStartsOn)&&void 0!==p?p:null===(_=x.locale)||void 0===_||null===(k=_.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==b?b:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var W=n(t);if(!r(W))throw new RangeError("Invalid time value");var O=Y(W),N=i(W,O),A={firstWeekContainsDate:U,weekStartsOn:P,locale:q,_originalDate:W},z=D.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,L[t])(e,q.formatLong):e})).join("").match(V).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return re(e);var r=E[n];if(r)return null!=u&&u.useAdditionalWeekYearTokens||!F(e)||j(e,o,String(t)),null!=u&&u.useAdditionalDayOfYearTokens||!H(e)||j(e,o,String(t)),r(N,e,q.localize,A);if(n.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return z}function re(e){var t=e.match(Z);return t?t[1].replace(ee,"'"):e}function ae(e){let t;try{t=window[e];const n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}async function oe(e){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=20f7632ffc2c022654e4093c6947b4f4`;try{let e=await fetch(t),n=await e.json();const r=`https://api.openweathermap.org/data/2.5/onecall?lat=${n.coord.lat}&lon=${n.coord.lon}&exclude=minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4`;e=await fetch(r);let a=await e.json(),o={};return o.location=n.name,o.lat=n.coord.lat,o.lon=n.coord.lon,o.current=a.current,o.hourly=a.hourly,o.daily=a.daily,console.log(o),o}catch{return console.log("its in cateh"),""}}const ie=document.querySelector(".forecast-header__daily"),ue=document.querySelector(".forecast-header__hourly"),ce=document.querySelector(".forecast__daily"),se=document.querySelector(".forecast__hourly"),de=document.querySelector(".forecast-scroll"),le=document.querySelector("#arrow-left"),he=document.querySelector("#arrow-right"),me=document.querySelector("#search-icon"),fe=document.querySelector("#unit-toogle"),ge=document.querySelector("#location-and-date__location"),ve=document.querySelector("#location-and-date__current-date"),we=document.querySelector("#location-and-date__current-time"),ye=document.querySelector("#weather__temperature__icon"),be=document.querySelector("#weather__temperature__value"),pe=document.querySelector("#weather__temperature__summary"),Te=document.querySelector("#feels-like"),Ce=document.querySelector("#precipitate"),Se=document.querySelector("#humidity"),Me=document.querySelector("#wind-speed");let _e={},ke="C";function De(){ie.classList.toggle("header-selected"),ue.classList.toggle("header-selected"),ce.classList.toggle("inactive"),se.classList.toggle("inactive")}function xe(e){let t=document.querySelector(".dot-active"),n=t.getAttribute("data-id"),r=e.target.closest(".scroll-arrow").id;"arrow-left"==r&&"0"!=n?(document.querySelectorAll(".forecast__hourly_day:not(.inactive)").forEach((e=>{e.classList.toggle("inactive");let t=parseInt(e.getAttribute("data-id"));document.querySelector(`.forecast__hourly_day[data-id="${t-8}"`).classList.toggle("inactive")})),t.classList.toggle("dot-active"),document.querySelector(`.dot[data-id="${parseInt(n)-1}"`).classList.toggle("dot-active")):"arrow-right"==r&&"2"!=n&&(document.querySelectorAll(".forecast__hourly_day:not(.inactive)").forEach((e=>{e.classList.toggle("inactive");let t=parseInt(e.getAttribute("data-id"));document.querySelector(`.forecast__hourly_day[data-id="${t+8}"`).classList.toggle("inactive")})),t.classList.toggle("dot-active"),document.querySelector(`.dot[data-id="${parseInt(n)+1}"]`).classList.toggle("dot-active"))}function qe(e){return"C"==ke?Math.round(e)+" &deg C":Math.round(1.8*e+32)+" &deg F"}function Ee(e){switch(e){case"01d":return"./images/weather/sun.svg";case"01n":return"./images/weather/moon.svg";case"02d":return"./images/weather/cloudy-day.svg";case"02n":return"./images/weather/cloudy-night.svg";case"03d":case"03n":return"./images/weather/cloud.svg";case"04d":case"04n":default:return"./images/weather/cloudy.svg";case"9d":case"9n":case"10d":case"10n":return"./images/weather/rainy.svg";case"011d":case"0112":return"./images/weather/lightning.svg";case"13d":case"13n":return"./images/weather/snow.svg";case"50d":case"50n":return"./images/weather/mist.svg"}}function Ue(e){if(e){document.querySelector(".location-error").style.display="none",ge.textContent=e.location;let a=new Date(1e3*e.current.dt);ve.textContent=ne(a,"EEEE, do MMM 'yy"),we.textContent=ne(a,"h:mm aaa"),be.innerHTML=qe(e.current.temp),pe.textContent=e.current.weather[0].description.split(" ").map((e=>e.charAt(0).toUpperCase()+e.substring(1))).join(" "),ye.src=Ee(e.current.weather[0].icon),Te.innerHTML=qe(e.current.feels_like),Ce.textContent=100*e.hourly[0].pop+" %",Se.textContent=e.current.humidity+" %",Me.textContent=(r=e.current.wind_speed,"C"==ke?r+" km/h":Math.round(160.9344*r)/100+" mph");for(let t=0;t<7;t++){let n=new Date(1e3*e.daily[t+1].dt),r=document.querySelector(`.forecast__daily_day[data-id="${t}"]`);r.querySelector(".day").textContent=ne(n,"EEEE"),r.querySelector(".forecast__daily_high").innerHTML=qe(e.daily[t+1].temp.max),r.querySelector(".forecast__daily_low").innerHTML=qe(e.daily[t+1].temp.min),r.querySelector(".forecast__icon").src=Ee(e.daily[t+1].weather[0].icon)}for(let t=0;t<24;t++){let n=new Date(1e3*e.hourly[t+1].dt),r=document.querySelector(`.forecast__hourly_day[data-id="${t}"]`);r.querySelector(".hour").textContent=ne(n,"h:mm aaa"),r.querySelector(".forecast__hourly_temperature").innerHTML=qe(e.hourly[t+1].temp),r.querySelector(".forecast__icon").src=Ee(e.hourly[t+1].weather[0].icon)}t=e.location,n=ke,ae("localStorage")&&(localStorage.setItem("weather_location",t),localStorage.setItem("weather_unit",n))}else document.querySelector(".location-error").style.display="block";var t,n,r}se.insertBefore(function(){let e=document.createElement("div");e.classList.add("forecast__hourly_container");for(let t=0;t<24;t++){let n=document.createElement("div");n.classList.add("forecast__hourly_day"),t>7&&n.classList.add("inactive"),n.setAttribute("data-id",t);let r=document.createElement("div");r.classList.add("hour"),r.textContent=`${t+1} am`;let a=document.createElement("div");a.classList.add("forecast__hourly_temperature"),a.innerHTML="21 &degC";let o=document.createElement("div");o.classList.add("forecast_hourly_icon");let i=document.createElement("img");i.classList.add("forecast__icon"),i.src="./images/weather/cloudy.svg",o.appendChild(i),n.appendChild(r),n.appendChild(a),n.appendChild(o),e.appendChild(n)}return e}(),de),ie.addEventListener("click",De),ue.addEventListener("click",De),le.addEventListener("click",xe),he.addEventListener("click",xe),me.addEventListener("click",(async function(e){let t=document.querySelector("#search-bar").value;_e=await oe(t),Ue(_e)})),fe.addEventListener("change",(e=>{ke=e.target.checked?"F":"C",0!=Object.keys(_e).length&&Ue(_e)})),async function(){let e=function(){if(ae("localStorage")){let e={location:"",unit:""};return localStorage.getItem("weather_location")&&(e.location=localStorage.getItem("weather_location")),localStorage.getItem("weather_unit")&&(e.unit=localStorage.getItem("weather_unit")),e}return""}();e.location&&(_e=await oe(e.location),e.unit&&(fe.checked="F"==e.unit),Ue(_e))}()})();