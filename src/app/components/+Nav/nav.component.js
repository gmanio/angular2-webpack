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
var queryService_1 = require('../../services/queryService');
var NavComponent = (function () {
    function NavComponent(queryService) {
        this.queryService = queryService;
        this.interval = 800;
        this.sendQuery = null;
    }
    NavComponent.prototype.onClickedSort = function (sSort) {
        this.queryService.searchSort = sSort;
    };
    NavComponent.prototype.onKeyUp = function (e) {
        var keyEvent = e;
        if (this.isBlur != null) {
            clearTimeout(this.isBlur);
        }
        this.isBlur = setTimeout(function () {
            keyEvent.target.blur();
        }, this.interval);
    };
    NavComponent.prototype.onInputChange = function (e) {
        var _this = this;
        if (this.sendQuery != null) {
            clearTimeout(this.sendQuery);
        }
        this.sendQuery = setTimeout(function () {
            _this.queryService.searchText = e.toString();
        }, this.interval);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'nav.component.html',
            styleUrls: ['nav.component.css']
        }), 
        __metadata('design:paramtypes', [queryService_1.QueryService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map