(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},20:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(16),l=t.n(r),i=(t(25),t(13)),o=t(5),m=t(6),s=(t(8),function(e){return n.a.createElement(m.b,{to:"/character/".concat(e.character.id),className:"card__link"},n.a.createElement("section",{className:"card__container"},n.a.createElement("img",{src:e.character.image,alt:"Imagen de ".concat(e.character.name),title:"Imagen de ".concat(e.character.name),className:"card__img"}),n.a.createElement("section",{className:"card__info"},n.a.createElement("h4",null,e.character.name),n.a.createElement("p",null,e.character.species))))}),u=function(e){var a=e.characters.map((function(e){return n.a.createElement("li",{key:e.id,className:"list__item"},n.a.createElement(s,{character:e}))}));return n.a.createElement("div",null,n.a.createElement("ul",{className:"list__container"},a))},d=function(e){return n.a.createElement("form",{className:"filter__container"},n.a.createElement("label",{className:"filter__label"},"Filter by name"),n.a.createElement("input",{type:"text",className:"filter__input",placeholder:"Character name",onChange:function(a){console.log("target value",a.target.value),a.preventDefault(),e.handleFilter({value:a.target.value,key:"name"})}}))},h=function(e){return console.log("recibo esto en Modal",e.character.id),n.a.createElement("div",{className:"modal__container"},n.a.createElement("div",{className:"modal__header"},n.a.createElement(m.b,{to:"/",className:"modal__link"},"Go Back")),n.a.createElement("section",{className:"modal__info"},n.a.createElement("img",{src:e.character.image,alt:"Imagen de ".concat(e.character.name),title:"Imagen de ".concat(e.character.name),className:"modal__img"}),n.a.createElement("ul",{className:"modal__list"},n.a.createElement("h2",{className:"modal__title"},e.character.name),n.a.createElement("li",{className:"modal__list-item"},"specie: ",e.character.species),n.a.createElement("li",{className:"modal__list-item"},"origin: ",e.character.origin),n.a.createElement("li",{className:"modal__list-item"},"status: ",e.character.status),n.a.createElement("li",{className:"modal__list-item"},"episodes: ",e.character.episodes))))},_=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,species:e.species,origin:e.origin.name,status:e.status,episodes:e.episode.length}}))}))},f=t(19),p=t.n(f),E=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(""),m=Object(i.a)(l,2),s=m[0],f=m[1];Object(c.useEffect)((function(){_().then((function(e){return r(e)}))}),[]);var E=t.filter((function(e){return e.name.toUpperCase().includes(s.toUpperCase())}));return n.a.createElement("div",null,n.a.createElement("div",{className:"App__container"},n.a.createElement("header",{className:"header__container",id:"header"},n.a.createElement("img",{src:p.a,title:"Rick y Morty",alt:"Rick y Morty",className:"header__logo"})),n.a.createElement("main",{className:"main__container"},n.a.createElement(d,{handleFilter:function(e){f(e.value)}}),n.a.createElement(u,{characters:E}),n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/character/:id",render:function(e){var a=e.match.params.id,c=t.find((function(e){return e.id===parseInt(a)}));if(void 0!==c)return n.a.createElement(h,{character:c})}}))),n.a.createElement("footer",{className:"footer__container"},n.a.createElement("a",{className:"footer__btn",href:"#header"},"go to top"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,null,n.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){}},[[20,1,2]]]);
//# sourceMappingURL=main.54dd0750.chunk.js.map