"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,c=t(5861),u=t(9439),s=t(7757),i=t.n(s),o=t(6375),p=t(4267),f=t(2791),l=t(7689),d=t(168),v=t(6444),h=v.ZP.ul(r||(r=(0,d.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\npadding-left: 0;\ngap: 60px;\nlist-style: none;\n"]))),g=(v.ZP.p(a||(a=(0,d.Z)(["\ncolor: #f5f5f5;\n"]))),t(184)),m=function(){var n=(0,l.UO)().id,e=(0,f.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],s=(0,f.useState)(null),d=(0,u.Z)(s,2),v=d[0],m=d[1],x=(0,f.useState)(!1),Z=(0,u.Z)(x,2),w=Z[0],k=Z[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,p.fU)(n);case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m("Something went wrong. Please, try a little bit later");case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,g.jsxs)(g.Fragment,{children:[w&&(0,g.jsx)("p",{children:"Loading..."}),v&&(0,g.jsx)("div",{children:v}),(0,g.jsx)(h,{children:r.map((function(n){return(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.profile_path),alt:n.name}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(o.xv,{children:["Name: ",n.name]}),(0,g.jsxs)(o.xv,{children:["Character:   ",n.character]})]})]},n.id)}))})]})}},6375:function(n,e,t){t.d(e,{U2:function(){return l},aV:function(){return f},ck:function(){return p},xv:function(){return o}});var r,a,c,u,s=t(168),i=t(6444),o=i.ZP.p(r||(r=(0,s.Z)(["\ncolor: #f5f5f5;\n"]))),p=i.ZP.li(a||(a=(0,s.Z)(["\nlist-style: none;\nmargin-bottom: 32px;\n"]))),f=i.ZP.ul(c||(c=(0,s.Z)(["\npadding-left: 0px;\n\n"]))),l=i.ZP.span(u||(u=(0,s.Z)(["\nfont-size: 24px;\n"])))},4267:function(n,e,t){t.d(e,{N:function(){return g},XT:function(){return l},fU:function(){return h},fj:function(){return d},l2:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",i="/search/movie",o="/movie",p="/credits",f="/reviews",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(s,"?page=").concat(e,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return t=n.sent,console.log(t.data.results),n.abrupt("return",t.data.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(i,"?page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/").concat(e,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e).concat(p,"?language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("/movie/".concat(e).concat(f,"?page=").concat(t,"&language=en-US"),{params:{api_key:"8234db11c162011590d14a3080848ed6"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.b51346f3.chunk.js.map