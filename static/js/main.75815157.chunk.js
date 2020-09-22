(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[1],{21:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var a=n(4),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:a.g,payload:{query:e}}},o=function(e){return{type:a.i,payload:{sortBy:e}}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc";return{type:a.k,payload:{sortOrder:e}}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"title";return{type:a.h,payload:{searchBy:e}}},u=function(){return{type:a.b}},s=function(e){return{type:a.c,payload:{result:e}}},l=function(e){return{type:a.f,payload:{result:e}}},d=function(e){return{type:a.a,payload:{error:e}}},f=function(e){return{type:a.d,payload:{error:e}}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t,n){t(u());var a=n().searchInfo,r=a.query,o=a.sortBy,c=a.searchBy,i=a.sortOrder,l="&offset=".concat(9*(e-1),"&limit=",9),f=r?"https://reactjs-cdp.herokuapp.com/movies?search=".concat(r,"&sortOrder=").concat(i,"&searchBy=").concat(c,"&sortBy=").concat(o).concat(l):"https://reactjs-cdp.herokuapp.com/movies?searchBy=".concat(c,"&sortOrder=").concat(i,"&sortBy=").concat(o).concat(l);return fetch(f).then((function(e){return e.ok?e.json():"Error: ".concat(e.status," ").concat(e.statusText)}),(function(e){t(d(e))})).then((function(e){if("string"===typeof e)return t(d(e));t(s(e))}))}},m=function(e){return function(t,n){if(!e)return t(f("ID not specified!"));if(n().movieDetail.data.id===e)return!1;t({type:a.e});var r=n().movies.data.find((function(t){return e===t.id}));if(r)return t(l(r));var o="https://reactjs-cdp.herokuapp.com/movies/".concat(e);return fetch(o).then((function(e){return e.ok?e.json():"Error: ".concat(e.status," ").concat(e.statusText)}),(function(e){t(f(e))})).then((function(e){if("string"===typeof e)return t(f(e));t(l(e))}))}}},4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return h}));var a="FETCH_MOVIES_START",r="FETCH_MOVIE_START",o="FETCH_MOVIES_SUCCESS",c="FETCH_MOVIE_SUCCESS",i="FETCH_MOVIES_FAILURE",u="FETCH_MOVIE_FAILURE",s="QUERY_UPDATE",l="SORT_BY_UPDATE",d="SEARCH_BY_UPDATE",f="SORT_OPTIONS_UPDATE",h="SORT_ORDER_UPDATE"},59:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(23),u=n(5),s=n(19),l=n(49),d=n(16),f=n(92),h=n(94),m=n(90),p=Object(m.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:300}}),O=function(e){var t=p().root;return r.a.createElement(f.a,{maxWidth:"lg",className:t},r.a.createElement(h.a,{variant:"h5",component:"h1",color:"textSecondary"},e.message,e.children))},b=n(98),v=n(95),g=Object(m.a)({root:{flexDirection:"column",zIndex:10,backgroundColor:"rgba(0,0,0,0.1)"}}),y=function(e){var t=e.open,n=g().root;return r.a.createElement(b.a,{className:n,open:t},r.a.createElement(h.a,{gutterBottom:!0,variant:"body1",component:"h3",color:"textSecondary"},"Loading..."),r.a.createElement(v.a,{color:"primary"}))},E=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,157))})),j=function(){var e=Object(d.c)((function(e){return e}));return e.movies.error?r.a.createElement(O,{message:e.movies.error}):!e.movies.data[0]&&e.movies.isFetching?r.a.createElement(y,{open:!0}):r.a.createElement(a.Suspense,{fallback:r.a.createElement(y,{open:!0})},r.a.createElement(E,{movies:e.movies.data,total:e.movies.total}))},_=n(21),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,154))})),T=function(){var e=Object(u.f)().id,t=Object(d.b)(),n=Object(d.c)((function(e){return e.movieDetail}));return Object(a.useEffect)((function(){t(Object(_.a)(+e))}),[t,e]),Object(a.useEffect)((function(){n.data.title&&!n.isFetching&&(document.title=n.data.title)}),[n.data.title,n.isFetching]),n.error?r.a.createElement(O,{message:n.error}):n.isFetching||!n.data.id?r.a.createElement(y,{open:!0}):r.a.createElement(a.Suspense,{fallback:r.a.createElement(y,{open:!0})},r.a.createElement(S,{movie:n.data,handleQuery:function(e){return t(Object(_.d)("genres")),t(Object(_.c)(e))}}))},F=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.searchInfo}));return Object(a.useEffect)((function(){e(Object(_.b)())}),[e,t]),r.a.createElement(r.a.Fragment,null)},B=n(96),I=n(97),D=Object(m.a)({link:{textDecoration:"none",color:"inherit"}}),k=function(){var e=D().link;return r.a.createElement(B.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(i.b,{to:"/",className:e},r.a.createElement(h.a,{variant:"h6"},"Movie searcher"))))},w=n(3),R=n(4),C={isFetching:!1,total:0,page:0,totalPages:0,data:[],error:!1},M={isFetching:!1,error:!1,data:{}},x={query:"",sortBy:"release_date",sortOptions:{id:"ID",title:"Title",vote_count:"Total votes",vote_average:"Rating",release_date:"Release date",budget:"Budget",revenue:"Revenue"},sortOrder:"desc",searchBy:"title"};function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";t=Math.abs(t),t=isNaN(t)?2:t;var r=e<0?"-":"",o=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),c=o.length>3?o.length%3:0;return r+(c?o.substr(0,c)+a:"")+o.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?n+Math.abs(+e-+o).toFixed(t).slice(2):"")}var U=Object(s.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.b:return Object(w.a)(Object(w.a)({},e),{},{isFetching:!0});case R.c:var n=t.payload.result.data;return t.payload.result.offset>1&&(n=e.data.concat(t.payload.result.data)),Object(w.a)(Object(w.a)({},e),{},{isFetching:!1,total:t.payload.result.total,page:Math.ceil(n.length/9),totalPages:Math.ceil(t.payload.result.total/9),data:n});case R.a:return Object(w.a)(Object(w.a)({},e),{},{isFetching:!1,error:t.payload.error});default:return e}},searchInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.g:return Object(w.a)(Object(w.a)({},e),{},{query:t.payload.query});case R.h:return Object(w.a)(Object(w.a)({},e),{},{searchBy:t.payload.searchBy});case R.i:return Object(w.a)(Object(w.a)({},e),{},{sortBy:t.payload.sortBy});case R.j:return Object(w.a)(Object(w.a)({},e),{},{sortOptions:t.payload.sortOptions});case R.k:return Object(w.a)(Object(w.a)({},e),{},{sortOrder:t.payload.sortOrder});default:return e}},movieDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.e:return Object(w.a)(Object(w.a)({},e),{},{isFetching:!0,error:!1});case R.f:var n=Object(w.a)({},t.payload.result);return n.id?(n.release_date=new Date(n.release_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),n.budgetString=P(n.budget),n.revenueString=P(n.revenue),Object(w.a)(Object(w.a)({},e),{},{isFetching:!1,data:Object(w.a)({},n)})):Object(w.a)(Object(w.a)({},e),{},{isFetching:!1,error:"Movie with specified ID not found!"});case R.d:return Object(w.a)(Object(w.a)({},e),{},{isFetching:!1,error:t.payload.error});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,N=Object(s.e)(U,A(Object(s.a)(l.a)));c.a.render(r.a.createElement(d.a,{store:N},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(k,null),r.a.createElement(F,null)),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(u.a,{path:"/detail/:id?"},r.a.createElement(T,null)),r.a.createElement(u.a,{path:"*"},r.a.createElement(O,{message:"Page not found!"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,2,3]]]);
//# sourceMappingURL=main.75815157.chunk.js.map