(this["webpackJsonpmove-app"]=this["webpackJsonpmove-app"]||[]).push([[0],{13:function(e,t,a){},21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),o=(a(26),a(3)),c=a.n(o),m=a(15),l=a(16),u=a(17),v=a(20),d=a(19),p=a(18),g=a.n(p),E=a(2),f=a.n(E),h=(a(13),function(e){e.id;var t=e.year,a=e.title,n=e.summary,i=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:i})),r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,a),r.a.createElement("h5",null,t),r.a.createElement("ul",{className:"genres"},s&&s.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("p",null,"".concat(n.slice(0,180),"..."))))});h.prototype={id:f.a.number,year:f.a.number,title:f.a.string,summary:f.a.string,poster:f.a.string,genres:f.a.arrayOf(f.a.string)};var y=h,w=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMovieData=Object(m.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),n.state={isLoading:!0,movies:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loading"},r.a.createElement("span",{className:"loading__text"},"\ub85c\ub529\uc911...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.49c41585.chunk.js.map