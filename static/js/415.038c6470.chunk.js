(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{8444:function(n,t,e){"use strict";e.d(t,{s:function(){return g}});var r,a,c,o,i=e(1087),s=e(168),u=e(6444),p=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  // grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n  padding-left: 0;\n  padding-bottom: 24px;\n"]))),f=u.ZP.li(a||(a=(0,s.Z)(["\n\n  border-radius: 4px;\n  list-style: none;\n  max-width: 240px;\n  background-color: #FA7800;\n    border-radius: 5px;\n  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,\n    inset rgba(255, 255, 255, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n  overflow: hidden;\n  padding-bottom: 8px; \n  \n\n  > a {\n    text-decoration: none;\n  }\n"]))),d=u.ZP.h3(c||(c=(0,s.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: #F6F5F5;\n  font-size: 16px;\n  text-align: center;\n\n\n"]))),l=u.ZP.img(o||(o=(0,s.Z)(["\nwidth: 100%;\nmin-height: 360px;\nobject-fit: cover;\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n:hover {\n\n  transform: scale(1.03);\n\n}\n"]))),x=e(184),g=function(n){var t=n.films,e=n.prevLocation;return(0,x.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.original_title,a=n.poster_path;return(0,x.jsx)(f,{children:(0,x.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,x.jsx)(l,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,x.jsx)(d,{children:r})]})},t)}))})}},3757:function(n,t,e){"use strict";e.d(t,{V:function(){return u}});var r,a=e(2007),c=e.n(a),o=e(168),i=e(6444).ZP.h1(r||(r=(0,o.Z)(["\ntext-align: center;\ncolor: #f5f5f5;\n\n"]))),s=e(184),u=function(n){var t=n.text;return(0,s.jsx)(i,{children:t})};u.propType={text:c().string.isRequired}},4267:function(n,t,e){"use strict";e.d(t,{N:function(){return h},XT:function(){return d},fU:function(){return g},fj:function(){return l},l2:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",s="/search/movie",u="/movie",p="/credits",f="/reviews",d=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o.Z.get("".concat(i,"?page=").concat(t,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return e=n.sent,console.log(e.data.results),n.abrupt("return",e.data.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.Z.get("".concat(s,"?page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/").concat(t,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t).concat(p,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.Z.get("/movie/".concat(t).concat(f,"?page=").concat(e,"&language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5415:function(n,t,e){"use strict";e.r(t);var r=e(9439),a=e(8444),c=e(3757),o=e(4267),i=e(2791),s=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1],p=(0,i.useState)(null),f=(0,r.Z)(p,2),d=f[0],l=f[1],x=(0,i.useState)(!1),g=(0,r.Z)(x,2),h=g[0],m=g[1];return(0,i.useEffect)((function(){m(!0),(0,o.XT)().then((function(n){u(n)})).catch((function(n){l("Sorry! Something went wrong. Try a little bit later")})).finally(m(!1))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(c.V,{text:"Trending movies"}),h&&(0,s.jsx)("p",{children:"Loading..."}),d&&(0,s.jsx)("div",{children:d}),e&&(0,s.jsx)(a.s,{films:e})]})}},888:function(n,t,e){"use strict";var r=e(9047);function a(){}function c(){}c.resetWarningCache=a,n.exports=function(){function n(n,t,e,a,c,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return e.PropTypes=e,e}},2007:function(n,t,e){n.exports=e(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=415.038c6470.chunk.js.map