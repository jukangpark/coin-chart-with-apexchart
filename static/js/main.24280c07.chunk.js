(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(26),o=t.n(i),a=t(7),s=t(8),l=t(18),d=t(6),j=t(1);var b=function(){return Object(j.jsx)("h1",{children:"Price"})},h=t(15),u=t(29),p=t.n(u),x=t(42),f="https://api.coinpaprika.com/v1";function O(){return m.apply(this,arguments)}function m(){return(m=Object(x.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(f,"/coins")).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var g=t(43),v=t.n(g);var y,k,w,C,L,q,I,S,P,Q=function(n){var e=n.coinId,t=Object(h.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(f,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data;return Object(j.jsx)("div",{children:c?"Loading chart...":Object(j.jsx)(v.a,{type:"line",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:500,width:300,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$ ".concat(n.toFixed(2))}}}}})})},z=t(27),M=a.c.div(y||(y=Object(s.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),T=a.c.header(k||(k=Object(s.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=a.c.h1(w||(w=Object(s.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),A=a.c.span(C||(C=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),D=a.c.div(L||(L=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),$=a.c.div(q||(q=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),_=a.c.p(I||(I=Object(s.a)(["\n  margin: 20px 0px;\n"]))),B=a.c.div(S||(S=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),H=a.c.span(P||(P=Object(s.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var J,R,E,U,G,K,N,V=function(){var n=Object(d.g)().coinId,e=Object(d.f)().state,t=Object(d.h)("/:coinId/price"),c=Object(d.h)("/:coinId/chart"),r=Object(h.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(f,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),i=r.isLoading,o=r.data,a=Object(h.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(f,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),s=a.isLoading,u=a.data,p=i||s;return Object(j.jsxs)(M,{children:[Object(j.jsx)(z.a,{children:Object(j.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(j.jsx)(T,{children:Object(j.jsx)(F,{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),p?Object(j.jsx)(A,{children:"Loading..."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(D,{children:[Object(j.jsxs)($,{children:[Object(j.jsx)("span",{children:"Rank:"}),Object(j.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(j.jsxs)($,{children:[Object(j.jsx)("span",{children:"Symbol:"}),Object(j.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(j.jsxs)($,{children:[Object(j.jsx)("span",{children:"Price"}),Object(j.jsxs)("span",{children:["$",null===u||void 0===u?void 0:u.quotes.USD.price.toFixed(3)]})]})]}),Object(j.jsx)(_,{children:null===o||void 0===o?void 0:o.description}),Object(j.jsxs)(D,{children:[Object(j.jsxs)($,{children:[Object(j.jsx)("span",{children:"Total Suply:"}),Object(j.jsx)("span",{children:null===u||void 0===u?void 0:u.total_supply})]}),Object(j.jsxs)($,{children:[Object(j.jsx)("span",{children:"Max Supply:"}),Object(j.jsx)("span",{children:null===u||void 0===u?void 0:u.max_supply})]})]}),Object(j.jsxs)(B,{children:[Object(j.jsx)(H,{isActive:null!==c,children:Object(j.jsx)(l.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(j.jsx)(H,{isActive:null!==t,children:Object(j.jsx)(l.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/".concat(n,"/price"),children:Object(j.jsx)(b,{})}),Object(j.jsx)(d.a,{path:"/".concat(n,"/chart"),children:Object(j.jsx)(Q,{coinId:n})})]})]})]})},W=a.c.div(J||(J=Object(s.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),X=a.c.header(R||(R=Object(s.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Y=a.c.ul(E||(E=Object(s.a)([""]))),Z=a.c.li(U||(U=Object(s.a)(["\n  background-color: white;\n  color: ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n  a {\n    padding: 20px;\n    transition: color 0.2s ease-in;\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),nn=a.c.h1(G||(G=Object(s.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),en=a.c.span(K||(K=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),tn=a.c.img(N||(N=Object(s.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var cn=function(){var n=Object(h.useQuery)("allCoins",O),e=n.isLoading,t=n.data;return Object(j.jsxs)(W,{children:[Object(j.jsx)(z.a,{children:Object(j.jsx)("title",{children:"\ucf54\uc778"})}),Object(j.jsx)(X,{children:Object(j.jsx)(nn,{children:"\ucf54\uc778"})}),e?Object(j.jsx)(en,{children:"Loading..."}):Object(j.jsx)(Y,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(j.jsx)(Z,{children:Object(j.jsxs)(l.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(j.jsx)(tn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase()),alt:n.name}),n.name," \u2192"]})},n.id)}))})]})};var rn,on=function(){return Object(j.jsx)(l.a,{basename:"/CoinChart",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/:coinId",children:Object(j.jsx)(V,{})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(cn,{})})]})})},an=t(50),sn=Object(a.b)(rn||(rn=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: ",";\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var ln=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(sn,{}),Object(j.jsx)(on,{}),Object(j.jsx)(an.ReactQueryDevtools,{initialIsOpen:!0})]})},dn=new h.QueryClient;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h.QueryClientProvider,{client:dn,children:Object(j.jsx)(a.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#44bd32"},children:Object(j.jsx)(ln,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.24280c07.chunk.js.map