"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var QueryService = (function () {
    function QueryService() {
        this.searchTextObservable = new rxjs_1.BehaviorSubject("");
        this.searchSortObservable = new rxjs_1.BehaviorSubject("");
    }
    Object.defineProperty(QueryService.prototype, "searchText", {
        set: function (value) {
            this.searchTextObservable.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryService.prototype, "searchSort", {
        set: function (value) {
            this.searchSortObservable.next(value);
        },
        enumerable: true,
        configurable: true
    });
    QueryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QueryService);
    return QueryService;
}());
exports.QueryService = QueryService;
//# sourceMappingURL=queryService.js.map