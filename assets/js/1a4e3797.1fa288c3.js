(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{112:function(e,t,a){"use strict";a.r(t);var n=a(138),c=a(139),r=a.n(c),u=a(0),l=a.n(u),s=a(16),o=a(124),i=a(24),m=a(120),f=a(22),h=a(8);var d=function(){var e=Object(f.useHistory)(),t=Object(f.useLocation)(),a=Object(s.default)().siteConfig.baseUrl;return{searchValue:h.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return a+"search?q="+encodeURIComponent(e)}}},p=a(153),b=a(168),j=a(140),E=a(169),O=a(155),g=a(156),v=a(76),S=a.n(v);function w(e){var t=e.searchResult,a=t.document,n=t.type,c=t.page,r=t.tokens,u=t.metadata,s=0===n,o=2===n,i=(s?a.b:c.b).slice(),f=o?a.s:a.t;return s||i.push(c.t),l.a.createElement("article",{className:S.a.searchResultItem},l.a.createElement("h2",null,l.a.createElement(m.a,{to:a.u+(a.h||""),dangerouslySetInnerHTML:{__html:o?Object(j.a)(f,r):Object(E.a)(f,Object(O.a)(u,"t"),r,100)}})),i.length>0&&l.a.createElement("p",{className:S.a.searchResultItemPath},i.join(" \u203a ")),o&&l.a.createElement("p",{className:S.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(E.a)(a.t,Object(O.a)(u,"t"),r,100)}}))}t.default=function(){var e=Object(s.default)().siteConfig.baseUrl,t=d(),a=t.searchValue,c=t.updateSearchPath,m=Object(u.useState)(a),f=m[0],h=m[1],j=Object(u.useState)(),E=j[0],O=j[1],v=Object(u.useState)(),y=v[0],I=v[1],R=Object(u.useMemo)((function(){return f?'Search results for "'+f+'"':"Search the documentation"}),[f]);Object(u.useEffect)((function(){c(f),E&&(f?E(f,(function(e){I(e)})):I(void 0))}),[f,E]);var k=Object(u.useCallback)((function(e){h(e.target.value)}),[]);return Object(u.useEffect)((function(){a&&a!==f&&h(a)}),[a]),Object(u.useEffect)((function(){function t(){return(t=Object(n.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)(e);case 2:a=t.sent,n=a.wrappedIndexes,c=a.zhDictionary,O((function(){return Object(b.a)(n,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),l.a.createElement(o.a,{title:R},l.a.createElement(i.a,null,l.a.createElement("meta",{property:"robots",content:"noindex, follow"})),l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("h1",null,R),l.a.createElement("form",null,l.a.createElement("input",{type:"search",name:"q",className:S.a.searchQueryInput,"aria-label":"Search",onChange:k,value:f,autoComplete:"off",autoFocus:!0})),!E&&f&&l.a.createElement("div",null,l.a.createElement(g.a,null)),y&&(y.length>0?l.a.createElement("p",null,y.length," document",1===y.length?"":"s"," found"):l.a.createElement("p",null,"No documents were found")),l.a.createElement("section",null,y&&y.map((function(e){return l.a.createElement(w,{key:e.document.i,searchResult:e})})))))}},122:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return i}));var n=a(121),c=a.n(n);a(126)(c.a),a(128).lunrLanguageZh(c.a),a(127)(c.a);var r=["en","zh"],u=!1,l=null,s="cc31b5a7",o=8,i=50}}]);