(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[991],{8444:function(n,e,t){"use strict";t.d(e,{s:function(){return h}});var r,a,o,c,i=t(1087),u=t(168),s=t(6444),p=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  // grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n  padding-left: 0;\n  padding-bottom: 24px;\n"]))),f=s.ZP.li(a||(a=(0,u.Z)(["\n\n  border-radius: 4px;\n  list-style: none;\n  max-width: 240px;\n  background-color: #FA7800;\n    border-radius: 5px;\n  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,\n    inset rgba(255, 255, 255, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n  overflow: hidden;\n  padding-bottom: 8px; \n  \n\n  > a {\n    text-decoration: none;\n  }\n"]))),l=s.ZP.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: #F6F5F5;\n  font-size: 16px;\n  text-align: center;\n\n\n"]))),d=s.ZP.img(c||(c=(0,u.Z)(["\nwidth: 100%;\nmin-height: 360px;\nobject-fit: cover;\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n:hover {\n\n  transform: scale(1.03);\n\n}\n"]))),x=t(184),h=function(n){var e=n.films,t=n.prevLocation;return(0,x.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.original_title,a=n.poster_path;return(0,x.jsx)(f,{children:(0,x.jsxs)(i.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,x.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,x.jsx)(l,{children:r})]})},e)}))})}},3757:function(n,e,t){"use strict";t.d(e,{V:function(){return s}});var r,a=t(2007),o=t.n(a),c=t(168),i=t(6444).ZP.h1(r||(r=(0,c.Z)(["\ntext-align: center;\ncolor: #f5f5f5;\n\n"]))),u=t(184),s=function(n){var e=n.text;return(0,u.jsx)(i,{children:e})};s.propType={text:o().string.isRequired}},4267:function(n,e,t){"use strict";t.d(e,{N:function(){return g},XT:function(){return l},fU:function(){return h},fj:function(){return d},l2:function(){return x}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",u="/search/movie",s="/movie",p="/credits",f="/reviews",l=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,c.Z.get("".concat(i,"?page=").concat(e,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return t=n.sent,console.log(t.data.results),n.abrupt("return",t.data.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.Z.get("".concat(u,"?page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/").concat(e,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e).concat(p,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.Z.get("/movie/".concat(e).concat(f,"?page=").concat(t,"&language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2991:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var r,a,o,c,i=t(9439),u=t(8444),s=t(3757),p=t(2791),f=t(168),l=t(6444),d=l.ZP.form(r||(r=(0,f.Z)(["\ndisplay: flex;\ngap: 24px;\njustify-content: center;\n"]))),x=l.ZP.input(a||(a=(0,f.Z)(["\nwidth: 320px;\nheight: 28px;\nborder-radius: 12px;\npadding-left: 12px;\nfont-size: 16px;\n\n::placeholder {\n  color: #202020;\n  font-size: 1.2em;\n}\n\n"]))),h=l.ZP.button(o||(o=(0,f.Z)(["\nwidth: 120px;\nbackground-color: #FA7800;\nborder: none;\nborder-radius: 8px;\n"]))),g=l.ZP.span(c||(c=(0,f.Z)(["\nfont-size: 16px;\ncolor: #f5f5f5;\n"]))),m=t(184),v=function(n){var e=n.onSearch,t=(0,p.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d,{onSubmit:function(n){n.preventDefault(),a.trim(),e(a),o("")},children:[(0,m.jsx)(x,{type:"text",name:"querry",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Search...",onChange:function(n){o(n.target.value.toLowerCase())}}),(0,m.jsx)(h,{type:"submit",children:(0,m.jsx)(g,{children:"Search"})})]})})},b=t(4267),y=t(1087),Z=t(7689),w=function(){var n=(0,y.lr)(),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)([]),o=(0,i.Z)(a,2),c=o[0],f=o[1],l=(0,p.useState)(null),d=(0,i.Z)(l,2),x=d[0],h=d[1],g=(0,p.useState)(!1),w=(0,i.Z)(g,2),j=w[0],k=w[1],_=(0,Z.TH)(),S=t.get("query");(0,p.useEffect)((function(){if(S){k(!0),(0,b.fj)(S).then((function(n){n.length||alert("No movies found"),f(n)})).catch((function(n){h("Something went wrong. Please try a little bit later")})).finally(k(!1))}}),[S]);return(0,m.jsxs)("main",{children:[(0,m.jsx)(s.V,{text:"Movie search"}),j&&(0,m.jsx)("p",{children:"Loading..."}),x&&(0,m.jsx)("div",{children:x}),(0,m.jsx)(v,{onSearch:function(n){r({query:"".concat(n)})}}),c&&(0,m.jsx)(u.s,{films:c,prevLocation:_})]})}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function o(){}o.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,o,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=991.679bc3e7.chunk.js.map