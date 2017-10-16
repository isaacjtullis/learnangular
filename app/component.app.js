System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Lance Armstrong';
                    this.artists = [
                        {
                            name: 'Adam Anderson',
                            school: 'East High'
                        },
                        {
                            name: 'Bob Knight',
                            school: 'Southlake'
                        },
                        {
                            name: 'Chris Smith',
                            school: 'Harvard'
                        }
                    ];
                }
                AppComponent.prototype.onClick = function (myItem, myElement) {
                    this.name = myItem.name;
                    myElement.style.backgroundColor = "#FECE4E";
                };
                AppComponent.prototype.addArtist = function (artist) {
                    if (artist !== '') {
                        this.artists.push({ name: artist, school: "School of hard knocks" });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './partials/app.html',
                        styleUrls: ["./css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=component.app.js.map