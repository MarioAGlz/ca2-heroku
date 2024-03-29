(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"bbad\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/episodes\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title> Episode </ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"dislikedEpisode()\" *ngIf=\"isLikedE\">\n\t\t\t\t<ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\n\t\t\t<ion-button (click)=\"likedEpisode()\" *ngIf=\"!isLikedE\">\n\t\t\t\t<ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-header>\n\t\t\t<ion-card-title>\n\t\t\t\t<h2>{{ episode.title }}</h2>\n\t\t\t</ion-card-title>\n\t\t</ion-card-header>\n<!-- \n    code reference:\n    https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/\n-->\n\t\t<ion-card-content>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"folder\" color=\"medium\"></ion-icon>\n\t\t\t\t<ion-label text-wrap>\n                    <p>Season: {{ episode.season }}</p>\n\t\t\t\t\tEpisode: {{ episode.episode }}\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n\t\t\t\t<ion-label><p>Release Date:</p> {{ episode.air_date }}</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon name=\"film-outline\" slot=\"start\" color=\"micon\"></ion-icon>\n\t\t\t\t<ion-label><p>Serie:</p> {{ episode.series }}</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-icon name=\"people-circle\" slot=\"start\" color=\"secondary\"></ion-icon>\n\t\t\t\t<ion-label>Characters</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-label *ngFor=\"let char of episode.characters\" class=\"ion-padding-start\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"person-circle-outline\" class=\"ion-padding-start\"></ion-icon>\n\t\t\t\t{{ char }} <br>\n\t\t\t</ion-label>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EpisodeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function() { return EpisodeDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");




const routes = [
    {
        path: '',
        component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }
];
let EpisodeDetailsPageRoutingModule = class EpisodeDetailsPageRoutingModule {
};
EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodeDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: EpisodeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function() { return EpisodeDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episode-details-routing.module */ "./src/app/pages/episode-details/episode-details-routing.module.ts");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");







let EpisodeDetailsPageModule = class EpisodeDetailsPageModule {
};
EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]
        ],
        declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })
], EpisodeDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
  \***************************************************************/
/*! exports provided: EpisodeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function() { return EpisodeDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_like_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/like.service */ "./src/app/services/like.service.ts");





let EpisodeDetailsPage = class EpisodeDetailsPage {
    constructor(activatedRoute, api, likeService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.likeService = likeService;
        this.isLikedE = false;
        this.episodeId = null;
    }
    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });
        this.likeService.isLikedEp(this.episodeId).then(isFav => {
            this.isLikedE = isFav;
        });
    }
    likedEpisode() {
        this.likeService.likedEpisode(this.episodeId).then(() => {
            this.isLikedE = true;
        });
    }
    dislikedEpisode() {
        this.likeService.dislikedEpisode(this.episodeId).then(() => {
            this.isLikedE = false;
        });
    }
};
EpisodeDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_like_service__WEBPACK_IMPORTED_MODULE_4__["LikeService"] }
];
EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episode-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episode-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episode-details.page.scss */ "./src/app/pages/episode-details/episode-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_services_like_service__WEBPACK_IMPORTED_MODULE_4__["LikeService"]])
], EpisodeDetailsPage);



/***/ })

}]);
//# sourceMappingURL=episode-details-episode-details-module-es2015.js.map