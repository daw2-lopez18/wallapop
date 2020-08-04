(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");



class AppComponent {
    constructor() {
        this.title = 'wallapop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title of the document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/paginate.pipe */ "./src/app/pipes/paginate.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pipes_wishlist_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/wishlist.pipe */ "./src/app/pipes/wishlist.pipe.ts");






/*Modulo Formulario*/

/*Paginación*/






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"],
        _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"],
        _pipes_wishlist_pipe__WEBPACK_IMPORTED_MODULE_11__["WishlistPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"],
                    _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"],
                    _pipes_wishlist_pipe__WEBPACK_IMPORTED_MODULE_11__["WishlistPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/paginate.pipe */ "./src/app/pipes/paginate.pipe.ts");
/* harmony import */ var _pipes_wishlist_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/wishlist.pipe */ "./src/app/pipes/wishlist.pipe.ts");








function ListComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_tr_28_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.wishList(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.whitelist ? "./assets/images/sinFavorito.png" : "./assets/images/favorito.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ListComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_tr_60_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.remove(item_r6.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
} }
class ListComponent {
    constructor() {
        this.filterItems = '';
        this.wishItems = '';
        this.items = [
            {
                "title": "iPhone 6S Oro",
                "description": "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
                "price": "740",
                "email": "iphonemail@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png",
                "whitelist": "false"
            },
            {
                "title": "Polaroid 635",
                "description": "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
                "price": "50",
                "email": "cameramail@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png",
                "whitelist": "false"
            },
            {
                "title": "Bolso piel marca Hoss",
                "description": "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
                "price": "250",
                "email": "bagmail@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png",
                "whitelist": "false"
            },
            {
                "title": "Reloj de Daniel Wellington",
                "description": "Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ",
                "price": "100",
                "email": "watchmail@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png",
                "whitelist": "false"
            },
            {
                "title": "Coche antiguo americano",
                "description": "Coche antiguo americano de color marrón. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas",
                "price": "210000",
                "email": "carmail@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/car.png",
                "whitelist": "false"
            },
            {
                "title": "Barbacoa",
                "description": "Barbacoa en buen estado. La he usado pocas veces y está casi nueva. Ideal para fiestas y celebraciones",
                "price": "120",
                "email": "barbecue@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png",
                "whitelist": "false"
            },
            {
                "title": "Sofa de piel auténtica",
                "description": "Vendo sofá de piel negro. Tiene signos evidentes de uso, de ahí el precio. Es muy cómodo y bonito",
                "price": "75",
                "email": "sofa@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/sofa.png",
                "whitelist": "false"
            },
            {
                "title": "Vespa restaurada",
                "description": "Está restaurada y muy cuidada, con piezas originales y repintada una vez de color rojo carmín. Solo acepto ofertas serias",
                "price": "1990",
                "email": "vespa@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/vespa.png",
                "whitelist": "false"
            },
            {
                "title": "Batidora",
                "description": "Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero",
                "price": "90",
                "email": "mixer@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mixer.png",
                "whitelist": "false"
            },
            {
                "title": "Mudanzas",
                "description": "Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero",
                "price": "90",
                "email": "moves@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/moves.png",
                "whitelist": "false"
            },
            {
                "title": "Lavadora",
                "description": "Vendo lavadora comprada hace 1 año. Me cambio de piso y me urge venderla",
                "price": "250",
                "email": "washer@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/washer.png",
                "whitelist": "false"
            },
            {
                "title": "TV de 43 pulgadas",
                "description": "Televisor de 43 pulgadas. Funciona perfectamente. No tengo la base. Precio negociable",
                "price": "400",
                "email": "tv@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/tv.png",
                "whitelist": "false"
            },
            {
                "title": "Piso en Clot",
                "description": "60m2, en pleno mercado del Clot. Piso muy acogedor, reformado. Ideal para parejas",
                "price": "288000",
                "email": "flat@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/flat.png",
                "whitelist": "false"
            },
            {
                "title": "Tocadiscos vintage",
                "description": "Muy bien cuidado! Regalo los discos de LP que se ve en las fotos",
                "price": "325",
                "email": "turntable@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/turntable.png",
                "whitelist": "false"
            },
            {
                "title": "Nevera verde",
                "description": "Pequeñita, con un verde Chevrolet, muy de los 60!",
                "price": "125",
                "email": "fridge@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/fridge.png",
                "whitelist": "false"
            },
            {
                "title": "Cámara réflex",
                "description": "La vendo porque no la uso. No tengo ningún accesorio como la bolsa ni objetivos.",
                "price": "240",
                "email": "analogue@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/analogue.jpg",
                "whitelist": "false"
            },
            {
                "title": "Clases de piano",
                "description": "Doy clases de piano a particulares. Todas las edades. Llevo más de 20 años tocando el piano.",
                "price": "5",
                "email": "piano@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/piano.jpg",
                "whitelist": "false"
            },
            {
                "title": "Material de oficina",
                "description": "Vendo mucho material de oficina, como bolígrafos, lápices, post-its, etc. Preguntad para más info",
                "price": "12",
                "email": "pen@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/pen.jpg",
                "whitelist": "false"
            },
            {
                "title": "Macbook 13 pulgadas",
                "description": "Vendo Macbook porque me han regalado el nuevo. Este está usado pero en buen estado",
                "price": "600",
                "email": "mac@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mac.jpg",
                "whitelist": "false"
            },
            {
                "title": "Cascos",
                "description": "Cascos usados. No son muy buenos, pero son bastante bonitos. Precio negociable",
                "price": "20",
                "email": "headphones@wallapop.com",
                "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/headphones.jpg",
                "whitelist": "false"
            }
        ];
        this.page_size = 5;
        this.page_number = 1;
        this.pageSizeOptions = [5];
    }
    wishList(item) {
        if (this.items[item].whitelist == "false") {
            var test = this.items[item].whitelist = "true";
            var img = document.getElementsByClassName("imgWhitelist")[item];
            var img2 = img.setAttribute("src", "./assets/images/favorito.png");
            //console.log(this.items[item]);
        }
        else {
            var test = this.items[item].whitelist = "false";
            var img = document.getElementsByClassName("imgWhitelist")[item];
            var img2 = img.setAttribute("src", "./assets/images/sinFavorito.png");
            //console.log(this.items[item]);
        }
    } //End Add Wish List
    remove(i) {
        var check = this.items.find(producto => producto.title === i);
        if (check.whitelist == "true") {
            check.whitelist = "false";
            var img = document.getElementsByClassName("imgWhitelist")[i];
            var img2 = img.setAttribute("src", "./assets/images/sinFavorito.png");
        }
        else {
            check.whitelist = "true";
            var img = document.getElementsByClassName("imgWhitelist")[i];
            var img2 = img.setAttribute("src", "./assets/images/favorito.png");
        }
    } //End Remove Wish List
    ngOnInit() {
    }
    get favourites() {
        return this.items.filter(x => x.whitelist == "true");
    }
    getFavourite(i) {
        console.log(i);
        var favorito = this.items[i].whitelist;
        if (favorito == "true") {
            var img = document.getElementsByClassName("imgWhitelist")[i];
            var img2 = img.setAttribute("src", "./assets/images/favorito.png");
        }
    }
    handlePage(e) {
        this.page_size = e.pageSize;
        this.page_number = e.pageIndex + 1;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 65, vars: 17, consts: [[1, "container"], [1, "row"], [1, "col", "text-right"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-info"], ["src", "./assets/images/corazonBlanco.png"], [1, "col"], [1, "form-group"], ["type", "text", "name", "filterItems", "placeholder", "Search products...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["id", "divMsj", "role", "alert", 1, "msj"], ["id", "msjWishList"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", "placeholder", "Search products...", "name", "wishItems", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "wishlist", 3, "click"], [1, "imgWhitelist", 3, "src"], [1, "wishImg", 3, "src"], [1, "align-middle", "text-center"], ["src", "./assets/images/favorito.png", 1, "imgWhitelist"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My Wish List\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List of Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_11_listener($event) { return ctx.filterItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Wish List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListComponent_tr_28_Template, 11, 5, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListComponent_Template_mat_paginator_page_31_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A\u00F1adido a Wish List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "My Wish List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_49_listener($event) { return ctx.wishItems = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Wish List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ListComponent_tr_60_Template, 7, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](30, 10, ctx.items, ctx.page_size, ctx.page_number), ctx.filterItems));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 20)("pageSize", 5)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wishItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](61, 14, ctx.favourites, ctx.wishItems));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _pipes_wishlist_pipe__WEBPACK_IMPORTED_MODULE_6__["WishlistPipe"]], styles: [".wishlist[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.msj[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.show[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.wishImg[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXNobGlzdCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1zantcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ud2lzaEltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(value, arg) {
        if (arg == '' || arg.length < 2)
            return value;
        const resultItems = [];
        for (const item of value) {
            if ((item.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (item.description.toLowerCase().indexOf(arg.toLowerCase()) > -1)
                || (item.price.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (item.email.toLowerCase().indexOf(arg.toLowerCase()) > -1)) {
                resultItems.push(item);
            }
            ;
        }
        ;
        return resultItems;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/paginate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/paginate.pipe.ts ***!
  \****************************************/
/*! exports provided: PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


//import { SlicePipe } from '@angular/common';
class PaginatePipe {
    transform(array, page_size, page_number) {
        if (!array.length)
            return [];
        if (page_size === 'all') {
            return array;
        }
        page_size = page_size || 5;
        page_number = page_number || 1;
        --page_number;
        return array.slice(page_number * (+page_size), (page_number + 1) * (+page_size));
    }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(); };
PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginate", type: PaginatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginate'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/wishlist.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/wishlist.pipe.ts ***!
  \****************************************/
/*! exports provided: WishlistPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPipe", function() { return WishlistPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WishlistPipe {
    transform(value, arg) {
        if (arg == '' || arg.length < 2)
            return value;
        const resultItems = [];
        for (const item of value) {
            if (item.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultItems.push(item);
            }
            ;
        }
        ;
        return resultItems;
    }
}
WishlistPipe.ɵfac = function WishlistPipe_Factory(t) { return new (t || WishlistPipe)(); };
WishlistPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "wishlist", type: WishlistPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishlistPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'wishlist'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angular\wallapop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map