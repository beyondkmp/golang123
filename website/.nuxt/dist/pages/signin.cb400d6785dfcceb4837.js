webpackJsonp([26],{"1nuA":function(t,e,n){"use strict";e.decode=e.parse=n("kMPS"),e.encode=e.stringify=n("xaZU")},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"9oAv":function(t,e,n){"use strict";var r=n("FhoZ"),s=n.n(r);if(s.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+s.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},IgDG:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s});var r=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},s=function(t,e){var n=t.split("."),s=e,o=n.length-1,a=n[o];n.map(function(t,e){e!==o&&(s=s[t])}),s[a]=r(s[a])}},MsCo:function(t,e,n){(function(t,r){var s;!function(o){function a(t){throw new RangeError(_[t])}function i(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function h(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),t=t.replace(R,"."),r+i(t.split("."),e).join(".")}function c(t){for(var e,n,r=[],s=0,o=t.length;s<o;)e=t.charCodeAt(s++),e>=55296&&e<=56319&&s<o?(n=t.charCodeAt(s++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),s--)):r.push(e);return r}function u(t){return i(t,function(t){var e="";return t>65535&&(t-=65536,e+=P(t>>>10&1023|55296),t=56320|1023&t),e+=P(t)}).join("")}function l(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:C}function f(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function p(t,e,n){var r=0;for(t=n?N(t/A):t>>1,t+=N(t/e);t>F*w>>1;r+=C)t=N(t/F);return N(r+(F+1)*t/(t+O))}function m(t){var e,n,r,s,o,i,h,c,f,m,d=[],g=t.length,v=0,y=U,b=I;for(n=t.lastIndexOf(q),n<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&a("not-basic"),d.push(t.charCodeAt(r));for(s=n>0?n+1:0;s<g;){for(o=v,i=1,h=C;s>=g&&a("invalid-input"),c=l(t.charCodeAt(s++)),(c>=C||c>N((x-v)/i))&&a("overflow"),v+=c*i,f=h<=b?j:h>=b+w?w:h-b,!(c<f);h+=C)m=C-f,i>N(x/m)&&a("overflow"),i*=m;e=d.length+1,b=p(v-o,e,0==o),N(v/e)>x-y&&a("overflow"),y+=N(v/e),v%=e,d.splice(v++,0,y)}return u(d)}function d(t){var e,n,r,s,o,i,h,u,l,m,d,g,v,y,b,O=[];for(t=c(t),g=t.length,e=U,n=0,o=I,i=0;i<g;++i)(d=t[i])<128&&O.push(P(d));for(r=s=O.length,s&&O.push(q);r<g;){for(h=x,i=0;i<g;++i)(d=t[i])>=e&&d<h&&(h=d);for(v=r+1,h-e>N((x-n)/v)&&a("overflow"),n+=(h-e)*v,e=h,i=0;i<g;++i)if(d=t[i],d<e&&++n>x&&a("overflow"),d==e){for(u=n,l=C;m=l<=o?j:l>=o+w?w:l-o,!(u<m);l+=C)b=u-m,y=C-m,O.push(P(f(m+b%y,0))),u=N(b/y);O.push(P(f(u,0))),o=p(n,v,r==s),n=0,++r}++n,++e}return O.join("")}function g(t){return h(t,function(t){return S.test(t)?m(t.slice(4).toLowerCase()):t})}function v(t){return h(t,function(t){return k.test(t)?"xn--"+d(t):t})}var y=("object"==typeof e&&e&&e.nodeType,"object"==typeof t&&t&&t.nodeType,"object"==typeof r&&r);var b,x=2147483647,C=36,j=1,w=26,O=38,A=700,I=72,U=128,q="-",S=/^xn--/,k=/[^\x20-\x7E]/,R=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},F=C-j,N=Math.floor,P=String.fromCharCode;b={version:"1.4.1",ucs2:{decode:c,encode:u},decode:m,encode:d,toASCII:v,toUnicode:g},void 0!==(s=function(){return b}.call(e,n,e,t))&&(t.exports=s)}()}).call(e,n("3IRH")(t),n("DuR2"))},UZ5h:function(t,e,n){"use strict";function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function s(t,e,n){if(t&&c.isObject(t)&&t instanceof r)return t;var s=new r;return s.parse(t,e,n),s}function o(t){return c.isString(t)&&(t=s(t)),t instanceof r?t.format():r.prototype.format.call(t)}function a(t,e){return s(t,!1,!0).resolve(e)}function i(t,e){return t?s(t,!1,!0).resolveObject(e):e}var h=n("MsCo"),c=n("qOJP");e.parse=s,e.resolve=a,e.resolveObject=i,e.format=o,e.Url=r;var u=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","\t"],m=["{","}","|","\\","^","`"].concat(p),d=["'"].concat(m),g=["%","/","?",";","#"].concat(d),v=["/","?","#"],y=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},C={javascript:!0,"javascript:":!0},j={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},w=n("1nuA");r.prototype.parse=function(t,e,n){if(!c.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t.indexOf("?"),s=-1!==r&&r<t.indexOf("#")?"?":"#",o=t.split(s),a=/\\/g;o[0]=o[0].replace(a,"/"),t=o.join(s);var i=t;if(i=i.trim(),!n&&1===t.split("#").length){var l=f.exec(i);if(l)return this.path=i,this.href=i,this.pathname=l[1],l[2]?(this.search=l[2],this.query=e?w.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var p=u.exec(i);if(p){p=p[0];var m=p.toLowerCase();this.protocol=m,i=i.substr(p.length)}if(n||p||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===i.substr(0,2);!O||p&&C[p]||(i=i.substr(2),this.slashes=!0)}if(!C[p]&&(O||p&&!j[p])){for(var A=-1,I=0;I<v.length;I++){var U=i.indexOf(v[I]);-1!==U&&(-1===A||U<A)&&(A=U)}var q,S;S=-1===A?i.lastIndexOf("@"):i.lastIndexOf("@",A),-1!==S&&(q=i.slice(0,S),i=i.slice(S+1),this.auth=decodeURIComponent(q)),A=-1;for(var I=0;I<g.length;I++){var U=i.indexOf(g[I]);-1!==U&&(-1===A||U<A)&&(A=U)}-1===A&&(A=i.length),this.host=i.slice(0,A),i=i.slice(A),this.parseHost(),this.hostname=this.hostname||"";var k="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!k)for(var R=this.hostname.split(/\./),I=0,_=R.length;I<_;I++){var F=R[I];if(F&&!F.match(y)){for(var N="",P=0,E=F.length;P<E;P++)F.charCodeAt(P)>127?N+="x":N+=F[P];if(!N.match(y)){var z=R.slice(0,I),L=R.slice(I+1),M=F.match(b);M&&(z.push(M[1]),L.unshift(M[2])),L.length&&(i="/"+L.join(".")+i),this.hostname=z.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=h.toASCII(this.hostname));var Z=this.port?":"+this.port:"",$=this.hostname||"";this.host=$+Z,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!x[m])for(var I=0,_=d.length;I<_;I++){var K=d[I];if(-1!==i.indexOf(K)){var D=encodeURIComponent(K);D===K&&(D=escape(K)),i=i.split(K).join(D)}}var T=i.indexOf("#");-1!==T&&(this.hash=i.substr(T),i=i.slice(0,T));var H=i.indexOf("?");if(-1!==H?(this.search=i.substr(H),this.query=i.substr(H+1),e&&(this.query=w.parse(this.query)),i=i.slice(0,H)):e&&(this.search="",this.query={}),i&&(this.pathname=i),j[m]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var Z=this.pathname||"",J=this.search||"";this.path=Z+J}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",s=!1,o="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&c.isObject(this.query)&&Object.keys(this.query).length&&(o=w.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||j[e])&&!1!==s?(s="//"+(s||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):s||(s=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),e+s+n+a+r},r.prototype.resolve=function(t){return this.resolveObject(s(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(c.isString(t)){var e=new r;e.parse(t,!1,!0),t=e}for(var n=new r,s=Object.keys(this),o=0;o<s.length;o++){var a=s[o];n[a]=this[a]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),h=0;h<i.length;h++){var u=i[h];"protocol"!==u&&(n[u]=t[u])}return j[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!j[t.protocol]){for(var l=Object.keys(t),f=0;f<l.length;f++){var p=l[f];n[p]=t[p]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||C[t.protocol])n.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),n.pathname=m.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var d=n.pathname||"",g=n.search||"";n.path=d+g}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var v=n.pathname&&"/"===n.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),b=y||v||n.host&&t.pathname,x=b,w=n.pathname&&n.pathname.split("/")||[],m=t.pathname&&t.pathname.split("/")||[],O=n.protocol&&!j[n.protocol];if(O&&(n.hostname="",n.port=null,n.host&&(""===w[0]?w[0]=n.host:w.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),b=b&&(""===m[0]||""===w[0])),y)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,w=m;else if(m.length)w||(w=[]),w.pop(),w=w.concat(m),n.search=t.search,n.query=t.query;else if(!c.isNullOrUndefined(t.search)){if(O){n.hostname=n.host=w.shift();var A=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");A&&(n.auth=A.shift(),n.host=n.hostname=A.shift())}return n.search=t.search,n.query=t.query,c.isNull(n.pathname)&&c.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!w.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var I=w.slice(-1)[0],U=(n.host||t.host||w.length>1)&&("."===I||".."===I)||""===I,q=0,S=w.length;S>=0;S--)I=w[S],"."===I?w.splice(S,1):".."===I?(w.splice(S,1),q++):q&&(w.splice(S,1),q--);if(!b&&!x)for(;q--;q)w.unshift("..");!b||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),U&&"/"!==w.join("/").substr(-1)&&w.push("");var k=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(O){n.hostname=n.host=k?"":w.length?w.shift():"";var A=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");A&&(n.auth=A.shift(),n.host=n.hostname=A.shift())}return b=b||n.host&&w.length,b&&!k&&w.unshift(""),w.length?n.pathname=w.join("/"):(n.pathname=null,n.path=null),c.isNull(n.pathname)&&c.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var t=this.host,e=l.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},a5ps:function(t,e,n){"use strict";function r(t){n("nJoW")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("wUt5"),o=n("jOt2"),a=n("VU/8"),i=r,h=a(s.a,o.a,!1,i,null,null);e.default=h.exports},fLkm:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"body,html{background-color:#f7fafc}#__nuxt{position:relative;z-index:2}#__nuxt,.golang-signin-container{height:100%}.golang-signin-title{display:block;color:#2d8cf0;font-size:36px;font-style:italic;letter-spacing:3px;text-align:center}.golang-signin-title:hover{color:#2d8cf0;text-decoration:none}.golang-signin-desc{color:#959595;margin:10px 0 20px;text-align:center;letter-spacing:3px;font-size:14px}a:hover{text-decoration:underline}",""])},jOt2:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticClass:"golang-signin-container",attrs:{type:"flex",align:"middle",justify:"center"}},[n("Col",{attrs:{xs:24,lg:6,md:14}},[n("a",{staticClass:"golang-signin-title",attrs:{href:"/"}},[t._v("GOLANG123")]),n("p",{staticClass:"golang-signin-desc"},[t._v("和地鼠们分享你的知识、经验和见解")]),n("Form",{ref:"formCustom",staticClass:"signup-form",attrs:{model:t.formCustom,rules:t.ruleCustom}},[n("Form-item",{attrs:{prop:"username"}},[n("i-input",{attrs:{size:"large",placeholder:"用户名 / 邮箱"},on:{"on-blur":function(e){t.blur("formCustom.username")}},model:{value:t.formCustom.username,callback:function(e){t.formCustom.username=e},expression:"formCustom.username"}})],1),n("Form-item",{attrs:{prop:"passwd"}},[n("i-input",{attrs:{size:"large",type:"password",placeholder:"密码"},nativeOn:{keydown:function(e){t.handleKeyUp(e)}},model:{value:t.formCustom.passwd,callback:function(e){t.formCustom.passwd=e},expression:"formCustom.passwd"}})],1),n("div",{staticStyle:{"min-height":"44px"}},[n("div",{staticClass:"l-captcha",attrs:{"data-width":"319","data-site-key":t.luosimaoSiteKey,"data-callback":"luosimaoCallback"}})]),n("p",{staticStyle:{"text-align":"right","padding-right":"2px","margin-top":"10px"}},[n("a",{staticClass:"golang-common-link",staticStyle:{"margin-right":"12px"},attrs:{href:"/signup"}},[t._v("立即注册")]),n("a",{staticClass:"golang-common-link",attrs:{href:"/ac/pwdReset"}},[t._v("忘记密码")])]),n("Form-item",{staticStyle:{"margin-top":"10px"}},[n("i-button",{staticStyle:{width:"100%"},attrs:{size:"large",type:"primary"},on:{click:function(e){t.handleSubmit("formCustom")}}},[t._v("登  录")])],1)],1)],1),n("script",{attrs:{type:"text/javascript",color:"51,133,255",opacity:"0.7",zIndex:"1",count:"80",src:"/javascripts/canvasnest/canvas-nest.min.js"}})],1)},s=[],o={render:r,staticRenderFns:s};e.a=o},kMPS:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,o){e=e||"&",n=n||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(e);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var c=t.length;h>0&&c>h&&(c=h);for(var u=0;u<c;++u){var l,f,p,m,d=t[u].replace(i,"%20"),g=d.indexOf(n);g>=0?(l=d.substr(0,g),f=d.substr(g+1)):(l=d,f=""),p=decodeURIComponent(l),m=decodeURIComponent(f),r(a,p)?s(a[p])?a[p].push(m):a[p]=[a[p],m]:a[p]=m}return a};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},nJoW:function(t,e,n){var r=n("fLkm");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("0181f8ec",r,!0)},qOJP:function(t,e,n){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},wUt5:function(t,e,n){"use strict";var r=n("y8ae"),s=n("V8bM"),o=n("FhoZ"),a=n.n(o),i=n("UZ5h"),h=n.n(i),c=n("IgDG");n("9oAv");e.a={data:function(){return{luosimaoRes:"",luosimaoSiteKey:a.a.luosimaoSiteKey,loading:!1,formCustom:{passwd:"",username:""},success:!1,ruleCustom:{passwd:[{required:!0,message:"请输入密码",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},asyncData:function(t){var e=t.user,n=void 0,r=h.a.parse(t.req.url,!0);if(r.query&&r.query.ref){n=decodeURIComponent(r.query.ref);var s=h.a.parse(n,!0),o=s.pathname;(o.match(/\/reset\/.+/)||o.match(/\/active\/.+/))&&(n="/")}else n="/";return e?void t.redirect(n):{user:e,ref:r.query.ref,redirectURL:n}},layout:"signin",middleware:"userInfo",head:function(){return{title:"登录",script:[{src:"//captcha.luosimao.com/static/js/api.js"}]}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){if(e.loading)return;e.loading=!0,s.a.signin({body:{signinInput:Object(c.a)(e.formCustom.username),password:Object(c.a)(e.formCustom.passwd),luosimaoRes:e.luosimaoRes}}).then(function(t){e.loading=!1,t.errNo===r.a.SUCCESS?window.location.href=e.redirectURL:t.errNo===r.a.IN_ACTIVE?window.location.href="/verify/mail?e="+encodeURIComponent(t.data.email):(window.LUOCAPTCHA.reset(),e.$Message.error({duration:a.a.messageDuration,closable:!0,content:t.msg}))}).catch(function(t){e.loading=!1,e.$Message.error({duration:a.a.messageDuration,closable:!0,content:t.message||t.msg})})}})},handleKeyUp:function(t){if(13===t.keyCode)return this.handleSubmit("formCustom")},blur:function(t){Object(c.b)(t,this)}},mounted:function(){var t=this;window.luosimaoCallback=function(e){t.luosimaoRes=e}}}},xaZU:function(t,e,n){"use strict";function r(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,i){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?r(a(t),function(a){var i=encodeURIComponent(s(a))+n;return o(t[a])?r(t[a],function(t){return i+encodeURIComponent(s(t))}).join(e):i+encodeURIComponent(s(t[a]))}).join(e):i?encodeURIComponent(s(i))+n+encodeURIComponent(s(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},a=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}}});
//# sourceMappingURL=signin.cb400d6785dfcceb4837.js.map