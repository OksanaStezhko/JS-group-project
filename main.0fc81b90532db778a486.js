(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},MJe1:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <li class="film item" data-movieId='+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:a,loc:{start:{line:2,column:43},end:{line:2,column:49}}}):i)+'>\r\n          <div href="" class="film__link link">\r\n'+(null!=(o=d(n,"if").call(l,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:4,column:12},end:{line:8,column:20}}}))?o:"")+'\r\n            <div class="film__content"} data-movieId='+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:a,loc:{start:{line:10,column:53},end:{line:10,column:59}}}):i)+'>\r\n              <h3 class="film__title">'+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:c)===s?i.call(l,{name:"title",hash:{},data:a,loc:{start:{line:11,column:38},end:{line:11,column:47}}}):i)+'</h3>\r\n              <div class="film__info" data-movieId='+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:a,loc:{start:{line:12,column:51},end:{line:12,column:57}}}):i)+'>\r\n                <ul class="film__genres" >\r\n'+(null!=(o=d(n,"each").call(l,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(6,a,0),inverse:e.noop,data:a,loc:{start:{line:14,column:18},end:{line:19,column:26}}}))?o:"")+"|&#32;"+u(typeof(i=null!=(i=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?i:c)===s?i.call(l,{name:"release_date",hash:{},data:a,loc:{start:{line:19,column:32},end:{line:19,column:48}}}):i)+'&#32;</ul>\r\n                  <span class="film__average">'+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:c)===s?i.call(l,{name:"vote_average",hash:{},data:a,loc:{start:{line:20,column:46},end:{line:20,column:62}}}):i)+"</span></div>\r\n            </div>\r\n          </div>\r\n        </li>\r\n"},2:function(e,t,n,r,a){var o,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"             <img src="+c("function"==typeof(o=null!=(o=s(n,"poster_path")||(null!=t?s(t,"poster_path"):t))?o:l)?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:5,column:22},end:{line:5,column:37}}}):o)+' class="film__img" alt="" data-movieId='+c("function"==typeof(o=null!=(o=s(n,"id")||(null!=t?s(t,"id"):t))?o:l)?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:5,column:76},end:{line:5,column:82}}}):o)+">\r\n"},4:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'             <img src="./images/default-opt.jpg" class="film__img" alt="" data-movieId='+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"id")||(null!=t?i(t,"id"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"id",hash:{},data:a,loc:{start:{line:7,column:87},end:{line:7,column:93}}}):o)+">\r\n"},6:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                  "+(null!=(o=i(n,"if").call(null!=t?t:e.nullContext||{},a&&i(a,"last"),{name:"if",hash:{},fn:e.program(7,a,0),inverse:e.program(9,a,0),data:a,loc:{start:{line:15,column:18},end:{line:18,column:25}}}))?o:"")+"                 "},7:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return' <li class="film__list__genre">'+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"name")||(null!=t?i(t,"name"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:15,column:62},end:{line:15,column:70}}}):o)+"&#32;</li>\r\n"},9:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                                <li class="film__list__genre">'+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"name")||(null!=t?i(t,"name"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:17,column:62},end:{line:17,column:70}}}):o)+",&#32;</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:8},end:{line:24,column:17}}}))?o:""},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("0HMw");var r={headerNavContainer:document.querySelector(".header-nav-container"),paginationBox:document.querySelector(".pagination"),paginationList:document.querySelector(".pagination__list"),filmListRef:document.querySelector(".films__list"),checkboxEl:document.querySelector("#theme-switch-toggle"),bodyEl:document.querySelector("body"),modalRef:document.querySelector(".modal"),backdropModalRef:document.querySelector(".backdrop"),closeBtn:document.querySelector("[data-action=close]"),modalImg:document.querySelector(".modal__image"),modalTitle:document.querySelector(".modal__title"),votes:document.querySelector('[data-attribute="votes"]'),rate:document.querySelector(".film-info__rate"),popularity:document.querySelector('[data-attribute="popularity"]'),title:document.querySelector('[data-attribute="title"]'),genre:document.querySelector('[data-attribute="genre"]'),descr:document.querySelector(".description-text"),votesTitle:document.querySelector('[data-attribute="votesTitle"]'),popularityTitle:document.querySelector('[data-attribute="popularityTitle"]'),originalTitle:document.querySelector('[data-attribute="originalTitle"]'),genresTitle:document.querySelector('[data-attribute="genresTitle"]'),addToWatchedBtn:document.querySelector(".modal__btn--watched"),addToQueueBtn:document.querySelector(".modal__btn--queue"),pageLibraryRef:function(){return document.querySelector('[data-request="library"]')},divLightbox:document.querySelector(".lightbox"),btnClose:document.querySelector(".lightbox__button"),modalOpen:document.querySelector(".lightbox__body"),openModal:document.querySelector(".js-footer__text"),siteNavButtons:document.querySelector(".site-nav__list"),logoNav:document.querySelector(".logo-container"),libraryList:document.querySelector(".library__list"),searchForm:document.querySelector(".search-form"),homeHeaderBtn:document.querySelector(".js-home"),libraryHeaderBtn:document.querySelector(".js-library"),watchedBtn:document.querySelector('[data-request="watched"]'),queueBtn:document.querySelector('[data-request="queue"]'),headerContainer:document.querySelector(".header-container"),spinner:document.querySelector("#spinner"),errorNoteRef:document.querySelector(".header__error"),messageLibRef:document.querySelector(".films__message"),clearBtn:document.querySelector('[data-request="clear"]'),clearBtnContainer:document.querySelector(".library__delete")},a=(n("xGbK"),n("VgGM"),function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e)}}),o=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e)}},i="light-theme",l="dark-theme";function c(){r.modalOpen.classList.add("slideUpOut"),r.modalOpen.classList.remove("slideUpIn"),r.divLightbox.classList.remove("is-open"),r.bodyEl.classList.remove("is-open")}document.addEventListener("DOMContentLoaded",(function(){var e,t={checkboxEl:document.querySelector("#theme-switch-toggle"),bodyEl:document.querySelector("body")};function n(){t.bodyEl.classList.add(l),t.bodyEl.classList.remove(i),o("Theme",l),t.checkboxEl.checked=!0}function r(){t.bodyEl.classList.add(i),t.bodyEl.classList.remove(l),o("Theme",i),t.checkboxEl.checked=!1}(e=a("Theme"))!==i?e!==l||n():r(),t.checkboxEl.addEventListener("change",(function(){event.currentTarget.checked?n():r()}))})),r.openModal.addEventListener("click",(function(e){e.preventDefault(),r.modalOpen.classList.remove("slideUpOut"),r.divLightbox.classList.add("is-open"),r.bodyEl.classList.add("is-open"),r.modalOpen.classList.add("slideUpIn")})),r.btnClose.addEventListener("click",c),r.divLightbox.addEventListener("click",(function(e){if(e.target!=this)return;c()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&c()}));n("lmye"),n("D/wG"),n("iPZ8"),n("kypl"),n("pCzD"),n("hi3g"),n("4owi"),n("/YXa"),n("WB5j"),n("fp7Y"),n("JBxO"),n("FdtR"),n("9UJh"),n("WoWj"),n("U00V"),n("wcNg"),n("IlJM"),n("wCa+");var s=n("MJe1"),u=n.n(s);function d(e){e.style.display="block",setTimeout((function(){e.style.display="none"}),2e3)}var m,p,f=function(){r.messageLibRef.classList.contains("is-hidden")||r.messageLibRef.classList.add("is-hidden")},h=function(){r.messageLibRef.classList.remove("is-hidden")},g=function(){var e=a("currentRequest");r.messageLibRef.classList.remove("is-hidden"),r.messageLibRef.textContent='Oops! Your "'+e+'" library is empty!'},v="https://image.tmdb.org/t/p/w342/",y=function(e,t){if(!e||!e.length)return d(r.errorNoteRef),r.filmListRef.innerHTML="",void(r.paginationList.innerHTML="");f();var n=e.map((function(e){var n=t.find((function(t){return t.id===e.id})).genres,r=n.length>2?[].concat(n.slice(0,2),[{id:999,name:"Other"}]):n.length?n:[].concat(n.slice(0,2),[{id:998,name:"N/A"}]);return Object.assign({},e,{poster_path:!!e.poster_path&&v+e.poster_path,release_date:e.release_date?e.release_date.slice(0,4):"N/A",genres:r})}));r.filmListRef.innerHTML="",r.filmListRef.insertAdjacentHTML("beforeend",u()(n))},b=function(e){if(!e||!e.length)return r.filmListRef.innerHTML="",r.paginationList.innerHTML="",g(),void h();f();var t=e.map((function(e){var t=e.genres.length>2?[].concat(e.genres.slice(0,2),[{id:999,name:"Other"}]):e.genres.length?e.genres:[].concat(e.genres.slice(0,2),[{id:998,name:"N/A"}]);return Object.assign({},e,{poster_path:e.poster_path?v+e.poster_path:"./images/default-opt.jpg",release_date:e.release_date?e.release_date.slice(0,4):"N/A",genres:t})}));r.filmListRef.innerHTML="",r.filmListRef.insertAdjacentHTML("beforeend",u()(t))},L="home",_="search",k="watched",q="queue",x={ulrApi:"",query:"",page:1,keyApi:"0e6eebd27dfd68a7c4ec96f04756cc6c",language:"en-US",currentRequest:"",fetchReturn:function(e,t){return fetch(e,t).then((function(e){return e.json()})).then((function(e){return e})).catch(console.error)},fetchData:function(e){var t=e.page,n=void 0===t?1:t;switch(this.page=n,this.currentRequest=a("currentRequest"),this.currentRequest){case L:this.urlApi="https://api.themoviedb.org/3/trending/movie/week?api_key="+this.keyApi+"&page="+this.page+"&language="+this.language;break;case _:this.urlApi="https://api.themoviedb.org/3/search/movie?api_key="+this.keyApi+"&page="+this.page+"&query="+this.query+"&language="+this.language;break;default:console.log(Error("Не найден тип текущего запроса"))}return this.fetchReturn(this.urlApi,{headers:{Accept:"application/json"}})},fetchDetalsFilm:function(e){var t="https://api.themoviedb.org/3/movie/"+e+"?api_key="+this.keyApi+"&language="+this.language;return this.fetchReturn(t,{headers:{Accept:"application/json"}})},set searchQuery(e){this.query=e},get searchQuery(){return this.query},get perPage(){return document.body.clientWidth<768?4:document.body.clientWidth<1024?8:9},get languageReq(){return this.language},set languageReq(e){this.language=e}},E=n("yD95"),w=n.n(E);var S=function(e,t){var n;!e||e<=x.perPage?r.paginationBox.classList.add("is-hidden"):(p=e/x.perPage<=20?Math.ceil(e/x.perPage):20,e&&(m=p<=5?p:document.body.clientWidth<580?5:9,n=document.body.clientWidth<580?function(e,t,n){var r=Math.ceil(e/2);return(e>=n||t<=r?Array.from({length:e},(function(e,t){return t+1})):t>=18?Array.from({length:e},(function(t,n){return 20-e+n+1})):Array.from({length:e},(function(e,n){return t-r+n+1}))).map((function(e){return e===t?{elem:e,isActive:!0}:{elem:e,isActive:!1}}))}(p<=5?p:m,t,p):function(e,t,n){var r=Math.ceil(e/2);return(e>=n?Array.from({length:e},(function(e,t){return t+1})):t<=r?[].concat(Array.from({length:7},(function(e,t){return t+1})),["...",n]):t===n?[1,"..."].concat(Array.from({length:7},(function(n,r){return t-e+3+r}))):t>=n-4?[1,"..."].concat(Array.from({length:7},(function(t,n){return 20-e+3+n}))):[1,"..."].concat(Array.from({length:5},(function(e,n){return t-r+n+3})),["...",n])).map((function(e){return e===t?{elem:e,isActive:!0}:{elem:e,isActive:!1}}))}(p<=9?p:m,t,p),r.paginationBox.classList.remove("is-hidden"),r.paginationList.innerHTML="",r.paginationList.insertAdjacentHTML("beforeend",w()(n))))},T=function(e){var t=+r.paginationBox.querySelector(".active").textContent;return e.classList.contains("prev")?t>1?t-1:1:e.classList.contains("next")?t<p?t+1:p:+e.textContent},O=function(e){var t=[],n=x.perPage,r=e*n-n+1,a=Math.floor(r/20)+1,o=r%20?r%20-1:19,i=o+n;if(i<20)return t=[{page:a,numStart:o,numEnd:i}];if(t=[{page:a,numStart:o,numEnd:void 0}],20-o===n)return t;return t=[].concat(t,[{page:a+1,numStart:0,numEnd:n-(20-o)}])},R=function(){return+r.paginationBox.querySelector(".active").textContent},M=function(){r.spinner.classList.remove("is-hidden__spinner")},B=function(){r.spinner.classList.add("is-hidden__spinner")};function C(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){H(o,r,a,i,l,"next",e)}function l(e){H(o,r,a,i,l,"throw",e)}i(void 0)}))}}var P=function(e,t){return N(regeneratorRuntime.mark((function n(){var r,a,o,i,l,c,s,u,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:void 0===e&&(e=[{page:1,numStart:0,numEnd:x.perPage}]),void 0===t&&(t=1),n.prev=2,a=[],(r=console).log.apply(r,["Settings:","pagePagination",t].concat(e)),M(),i=C(e);case 7:if((l=i()).done){n.next=16;break}return c=l.value,n.next=11,x.fetchData(c);case 11:s=n.sent,o=s.total_results,a=[].concat(a,s.results.slice(c.numStart,c.numEnd));case 14:n.next=7;break;case 16:return u=a.map((function(e){return x.fetchDetalsFilm(e.id)})),n.next=19,Promise.all(u);case 19:d=n.sent,y(a,d),S(o,t),B(),n.next=28;break;case 25:throw n.prev=25,n.t0=n.catch(2),n.t0;case 28:case"end":return n.stop()}}),n,null,[[2,25]])})))()},j=function(e,t){return N(regeneratorRuntime.mark((function n(){var r,a,o,i,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===e&&(e=1),M(),r=x.perPage,t&&t.length){n.next=7;break}return b(t),B(),n.abrupt("return");case 7:return a=t.map((function(e){return Number(e)})),o=a.map((function(t){return x.fetchDetalsFilm(t,e)})),n.next=11,Promise.all(o);case 11:i=n.sent,l=e*r-r,c=e*r,b(i.slice(l,c)),S(i.length,e),B();case 17:case"end":return n.stop()}}),n)})))()},D=function(e){return N(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.fetchDetalsFilm(e);case 3:n=t.sent,W(n),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()};function I(e){e.genres.map((function(e){var t=e.name;return r.genre.textContent+=t+" "}))}var W=function(e){var t,n;r.modalTitle.textContent=e.title,r.modalImg.src=e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:"./images/default-opt.jpg",r.rate.textContent=e.vote_average,r.votes.textContent=e.vote_count,r.popularity.textContent=e.popularity,r.title.textContent=e.original_title,r.genre.textContent=I(e),r.descr.textContent=e.overview,r.addToWatchedBtn.dataset.id=e.id,r.addToQueueBtn.dataset.id=e.id,I(e),t=r.originalTitle,n=r.title.offsetHeight,t.offsetHeight!==n&&(t.style="margin-bottom: "+(n-15)+"px")};n("IvQZ"),n("4NM0");function Q(e){var t;"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName||(t=e.target.dataset.movieid),JSON.parse(localStorage.getItem("watched")||"[]").includes(t)&&(r.addToWatchedBtn.innerHTML="REMOVE FROM WATCHED"),JSON.parse(localStorage.getItem("queue")||"[]").includes(t)&&(r.addToQueueBtn.innerHTML="REMOVE FROM QUEUE"),r.backdropModalRef.classList.add("visually-shown"),r.backdropModalRef.classList.remove("visually-hidden"),r.bodyEl.classList.add("modal-is-open"),window.addEventListener("keydown",F)}function U(){r.backdropModalRef.classList.remove("visually-shown"),window.removeEventListener("keydown",F),r.bodyEl.classList.remove("modal-is-open"),setTimeout(J,250)}function J(){r.modalImg.src="",r.modalTitle.textContent="",r.rate.textContent="",r.votes.textContent="",r.popularity.textContent="",r.title.textContent="",r.genre.textContent="",r.descr.textContent="",r.addToWatchedBtn.innerHTML="ADD TO WATCHED",r.addToQueueBtn.innerHTML="ADD TO QUEUE"}function F(e){"Escape"===e.code&&U()}r.closeBtn.addEventListener("click",U),r.backdropModalRef.addEventListener("click",(function(e){"modal"===e.target.dataset.attribute&&U()})),r.filmListRef.addEventListener("click",Q);n("uQK7"),n("Xlt+");r.addToWatchedBtn.addEventListener("click",(function(e){e.preventDefault(),r.addToWatchedBtn.innerHTML="REMOVE FROM WATCHED";var t=e.target.dataset.id,n=JSON.parse(localStorage.getItem("watched")||"[]");n.includes(t)?(n.splice(n.indexOf(t),1),r.addToWatchedBtn.innerHTML="ADD TO WATCHED"):n.push(t);localStorage.setItem("watched",JSON.stringify(n))})),r.addToQueueBtn.addEventListener("click",(function(e){e.preventDefault(),r.addToQueueBtn.innerHTML="REMOVE FROM QUEUE";var t=e.target.dataset.id,n=JSON.parse(localStorage.getItem("queue")||"[]");n.includes(t)?(n.splice(n.indexOf(t),1),r.addToQueueBtn.innerHTML="ADD TO QUEUE"):n.push(t);localStorage.setItem("queue",JSON.stringify(n))}));n("YJw3"),n("SgDD");var V,G=function(e){e.preventDefault();var t=e.target.elements.query.value.trim();if(console.log("search",t),!t)return d(r.errorNoteRef),r.filmListRef.innerHTML="",void(r.paginationList.innerHTML="");x.searchQuery=t,o("currentRequest",_),P()},Y=function(e){if("LI"===e.target.nodeName&&"..."!==e.target.textContent){var t=R();if(!(t>=20&&"pagination__item next"===e.target.className||1===t&&"pagination__item prev"===e.target.className)){var n=T(e.target),r=O(n);switch(a("currentRequest")){case L:case _:P(r,n);break;case k:j(n,a("watched"));break;case q:j(n,a("queue"));break;default:console.log(Error("Не найден тип текущего запроса"))}}}},K=function(e){var t;"IMG"!==e.target.nodeName&&"DIV"!==e.target.nodeName||(t=e.target.dataset.movieid),e.preventDefault(),D(t)},X=function(){var e=r.libraryList.querySelector(".is-active").dataset.request;o("currentRequest",e),j(1,a(e))},Z=function(){o("currentRequest",k),j(1,a("watched"))},z=function(){o("currentRequest",q),j(1,a("queue"))},$=function(){o("currentRequest",L),P()};function ee(){V=a("currentRequest"),0===a(V).length?r.clearBtnContainer.style.display="none":0!==a(V).length&&(r.clearBtn.textContent="clear "+V+" list",r.clearBtnContainer.style.display="block")}function te(e){var t=e.target;t===r.libraryHeaderBtn?(r.headerContainer.classList.remove("header-container--home"),r.headerContainer.classList.add("header-container--library"),r.headerNavContainer.classList.add("header-nav-container--library"),r.libraryList.style.display="flex",r.searchForm.style.display="none",r.libraryHeaderBtn.classList.add("is-active"),r.homeHeaderBtn.classList.remove("is-active"),ee()):t!==r.homeHeaderBtn&&t.parentElement!==r.logoNav||(r.headerContainer.classList.remove("header-container--library"),r.headerContainer.classList.add("header-container--home"),r.headerNavContainer.classList.remove("header-nav-container--library"),r.libraryList.style.display="none",r.searchForm.style.display="block",r.homeHeaderBtn.classList.add("is-active"),r.libraryHeaderBtn.classList.remove("is-active"),r.clearBtnContainer.style.display="none",r.searchForm.reset())}r.clearBtn.addEventListener("click",(function(){o(V,[]),r.filmListRef.innerHTML="",r.clearBtnContainer.style.display="none",r.paginationList.innerHTML="",g()})),r.siteNavButtons.addEventListener("click",te),r.logoNav.addEventListener("click",te),r.libraryList.addEventListener("click",(function(e){var t=e.target;"BUTTON"===t.nodeName&&t.classList.contains("is-active")||"BUTTON"===t.nodeName&&(r.watchedBtn.classList.toggle("is-active"),r.queueBtn.classList.toggle("is-active"),ee())})),o("currentRequest",L),P(),r.searchForm.addEventListener("submit",G),r.paginationBox.addEventListener("click",Y),r.filmListRef.addEventListener("click",K),r.libraryHeaderBtn.addEventListener("click",X),r.watchedBtn.addEventListener("click",Z),r.queueBtn.addEventListener("click",z),r.logoNav.addEventListener("click",$),r.homeHeaderBtn.addEventListener("click",$)},VgGM:function(e,t){var n=document.querySelector(".header"),r=0;window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>r&&e>60?n.style.top="-230px":(n.style.top=0,n.classList.add("js-modify-header")),0===window.pageYOffset&&n.classList.remove("js-modify-header"),r=e}),{passive:!0})},xGbK:function(e,t){var n=document.querySelector(".back_to_top");window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&n.classList.add("back_to_top-show"),e<t&&n.classList.remove("back_to_top-show")})),n.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,0))}))},yD95:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=i(n,"if").call(null!=t?t:e.nullContext||{},null!=t?i(t,"isActive"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:3,column:21},end:{line:7,column:28}}}))?o:""},2:function(e,t,n,r,a){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                         <li class="pagination__item active">'+e.escapeExpression(e.lambda(null!=t?o(t,"elem"):t,t))+"</li>\r\n"},4:function(e,t,n,r,a){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                         <li class="pagination__item ">'+e.escapeExpression(e.lambda(null!=t?o(t,"elem"):t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return'               <li class="pagination__item prev"></li>\r\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:15},end:{line:8,column:24}}}))?o:"")+'               <li class="pagination__item next"></li>\r\n\r\n\r\n'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0fc81b90532db778a486.js.map