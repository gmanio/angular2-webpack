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
// Native Module
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
// User Module
var app_component_1 = require('./app.component');
var nav_component_1 = require('./components/+Nav/nav.component');
var youtube_component_1 = require('./components/+Youtube/youtube.component');
var player_component_1 = require('./components/+Youtube/player.component');
var forms_1 = require("@angular/forms");
// User Service
var queryService_1 = require('./services/queryService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                youtube_component_1.YoutubeComponent,
                player_component_1.PlayerComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [queryService_1.QueryService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map