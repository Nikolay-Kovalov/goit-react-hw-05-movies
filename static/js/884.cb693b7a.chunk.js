(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{3757:function(e,t,n){"use strict";n.d(t,{V:function(){return u}});var r,a=n(2007),c=n.n(a),s=n(168),o=n(6444).ZP.h1(r||(r=(0,s.Z)(["\ntext-align: center;\ncolor: #f5f5f5;\n\n"]))),i=n(184),u=function(e){var t=e.text;return(0,i.jsx)(o,{children:t})};u.propType={text:c().string.isRequired}},4267:function(e,t,n){"use strict";n.d(t,{N:function(){return x},XT:function(){return p},fU:function(){return v},fj:function(){return d},l2:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),s=n(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/week",i="/search/movie",u="/movie",l="/credits",f="/reviews",p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,s.Z.get("".concat(o,"?page=").concat(t,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s.Z.get("".concat(i,"?page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/").concat(t,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t).concat(l,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s.Z.get("/movie/".concat(t).concat(f,"?page=").concat(n,"&language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2884:function(e,t,n){"use strict";n.r(t);var r=n(9439),a=n(3757),c=n(4267),s=n(2791),o=n(7689),i=n(1087),u=n(184);t.default=function(){var e=(0,s.useState)(null),t=(0,r.Z)(e,2),n=t[0],l=t[1],f=(0,s.useState)(null),p=(0,r.Z)(f,2),d=p[0],h=p[1],v=(0,s.useState)(!1),x=(0,r.Z)(v,2),g=x[0],y=x[1],m=(0,o.UO)().id,b=(0,o.TH)(),j=(0,o.s0)();return(0,s.useEffect)((function(){y(!0),(0,c.l2)(m).then((function(e){l(e)})).catch((function(e){h("Something went wrong. Please, try a little bit later")})).finally((function(){return y(!1)}))}),[m]),(0,u.jsxs)("main",{children:[(0,u.jsx)("button",{onClick:function(){var e,t;j(null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},style:{width:80,height:30,borderRadius:8,backgroundColor:"#FA7800",color:"#f5f5f5",border:"none"},children:(0,u.jsx)("span",{style:{fontSize:14},children:"Go back"})}),n&&(0,u.jsx)(a.V,{text:n.title}),g&&(0,u.jsx)("p",{children:"Loading..."}),d&&(0,u.jsx)("div",{children:d}),n&&(0,u.jsxs)("div",{style:{display:"flex",gap:48},children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.poster_path),alt:n.title})}),(0,u.jsxs)("div",{children:["                    ",(0,u.jsx)("h3",{style:{color:"#f5f5f5"},children:n.title}),(0,u.jsxs)("p",{style:{color:"#f5f5f5"},children:["User score: ",n.popularity]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{style:{color:"#f5f5f5"},children:"Overview"}),(0,u.jsx)("p",{style:{color:"#f5f5f5"},children:n.overview})]})]})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{children:[" ",(0,u.jsx)("h2",{style:{color:"#f5f5f5"},children:"Additional information"}),(0,u.jsx)(i.OL,{to:"/movies/".concat(m,"/reviews"),state:b.state,children:(0,u.jsx)("p",{style:{color:"#f5f5f5"},children:"Reviews"})}),(0,u.jsx)(i.OL,{to:"/movies/".concat(m,"/cast"),state:b.state,children:(0,u.jsx)("p",{style:{color:"#f5f5f5"},children:"Cast"})}),(0,u.jsx)("hr",{}),(0,u.jsx)(o.j3,{})]})]})}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=884.cb693b7a.chunk.js.map