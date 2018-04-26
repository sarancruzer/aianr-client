webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_class/global-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSettings; });
var GlobalSettings = (function () {
    function GlobalSettings() {
    }
    return GlobalSettings;
}());



/***/ }),

/***/ "./src/app/_model/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/_pipe/custom-json.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomJsonPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomJsonPipe = (function () {
    function CustomJsonPipe() {
    }
    CustomJsonPipe.prototype.transform = function (value, args) {
        var str = '';
        console.log('CustomJsonPipe');
        var arrList = JSON.parse(value);
        console.log(arrList);
        // tslint:disable-next-line:forin
        for (var key in arrList) {
            console.log(key);
            str += arrList[key].value + ', ';
        }
        return str;
    };
    CustomJsonPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'customJson'
        })
    ], CustomJsonPipe);
    return CustomJsonPipe;
}());



/***/ }),

/***/ "./src/app/_pipe/truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/_service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonService = (function () {
    function CommonService() {
    }
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/_service/favourite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavouriteService = (function () {
    function FavouriteService(_http) {
        this._http = _http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    FavouriteService.prototype.getFavourites = function () {
        this.list = { "sessions": localStorage.getItem("sessions") };
        return this._http.post(this.apiUrl + 'getFavourites', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    FavouriteService.prototype.updateFavourites = function (params, flag) {
        this.list = { "question": params, "sessions": localStorage.getItem("sessions"), "flag": flag };
        return this._http.post(this.apiUrl + 'updateFavourites', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    FavouriteService.prototype.getReactions = function () {
        this.list = { "sessions": localStorage.getItem("sessions") };
        return this._http.post(this.apiUrl + 'getReactions', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    FavouriteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], FavouriteService);
    return FavouriteService;
}());



/***/ }),

/***/ "./src/app/_service/landing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingService = (function () {
    function LandingService(_http) {
        this._http = _http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    // getsearchResponse(value): Observable<ISearch[]> {
    //       return this._http.get(this.apiUrl+value)
    //       .map((response: Response) => <ISearch[]> response.json())
    //       .do(data => console.log(JSON.stringify(data)));
    //    }
    LandingService.prototype.getsearchResponse = function (searchText) {
        this.list = {
            'sentences': searchText,
            'sessions': localStorage.getItem('sessions'),
            'conversation_id': localStorage.getItem('conversation_id'),
            'conversation_status': localStorage.getItem('conversation_status'),
            'qa_flag': localStorage.getItem('qa_flag'),
            'qa_nerformat': localStorage.getItem('qa_nerformat'),
            'qa_id': localStorage.getItem('qa_id'),
            'ask_list': localStorage.getItem('ask_list'),
            'qa_count': localStorage.getItem('qa_count')
        };
        return this._http.post(this.apiUrl + 'searchBotsNew', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    LandingService.prototype.sendReactions = function (flag, question, question_id) {
        this.list = { 'question': question, 'question_id': question_id, 'reaction': flag, 'sessions': localStorage.getItem('sessions') };
        return this._http.post(this.apiUrl + 'sendReactions', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    LandingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LandingService);
    return LandingService;
}());



/***/ }),

/***/ "./src/app/_service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    // getsearchResponse(value): Observable<ISearch[]> {
    //       return this._http.get(this.apiUrl+value)
    //       .map((response: Response) => <ISearch[]> response.json())
    //       .do(data => console.log(JSON.stringify(data)));
    //    }
    LoginService.prototype.getAuthenticate = function (email, password) {
        this.list = { "email": email, "password": password };
        console.log(this.list);
        return this._http.post(this.apiUrl + 'authenticate', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    LoginService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.message || error);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/_service/task-logs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskLogsService = (function () {
    function TaskLogsService(_http) {
        this._http = _http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    TaskLogsService.prototype.get = function () {
        this.list = { "sessions": localStorage.getItem("sessions") };
        return this._http.post(this.apiUrl + 'getAllTaskLogs', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskLogsService.prototype.delete = function (id) {
        return this._http.post(this.apiUrl + 'deleteTask/' + id, '', this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskLogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TaskLogsService);
    return TaskLogsService;
}());



/***/ }),

/***/ "./src/app/_service/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = (function () {
    function TaskService(_http) {
        this._http = _http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    TaskService.prototype.get = function () {
        this.list = { 'sessions': localStorage.getItem('sessions') };
        return this._http.post(this.apiUrl + 'getAllTasks', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskService.prototype.add = function (params) {
        this.list = { 'info': params, 'sessions': localStorage.getItem('sessions') };
        return this._http.post(this.apiUrl + 'createTask', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskService.prototype.update = function (params, id) {
        this.list = { 'info': params, 'sessions': localStorage.getItem('sessions') };
        return this._http.post(this.apiUrl + 'updateTask/' + id, this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskService.prototype.delete = function (id) {
        return this._http.post(this.apiUrl + 'deleteTask/' + id, '', this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskService.prototype.getAllReports = function () {
        this.list = { 'sessions': localStorage.getItem('sessions') };
        return this._http.post(this.apiUrl + 'getAllReports', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskService.prototype.getAllEmailAddress = function () {
        this.list = { 'sessions': localStorage.getItem('sessions') };
        return this._http.post(this.apiUrl + 'getAllEmailAddress', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
        // return this.http.get(url)
        // .pipe(map(data => data.json().items.map(item => item.full_name)));
    };
    TaskService.prototype.executeTaskNow = function (selectedIndex) {
        this.list = { 'sessions': localStorage.getItem('sessions'), 'selectedIndex': selectedIndex };
        return this._http.post(this.apiUrl + 'executeTaskNow', this.list, this.headers)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/_shared/menuList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _menuList; });
var _menuList = [
    {
        name: 'Leave - Queries',
        link: 'firstLink',
        categoryList: [
            { questions: 'What are the Norms for Casual Leave ?', view: 0 },
            { questions: 'How many casual leaves can be taken in a year?', view: 0 },
            { questions: 'How many kinds of leave does our organization provide', view: 0 },
            { questions: 'How many leaves are remaining for me in this financial year ?', view: 0 },
            { questions: 'Norms for Maternity Leave', view: 0 },
            { questions: 'Norms for paternity leave', view: 0 },
            { questions: 'How many sick leave remaining for me?', view: 0 },
            { questions: 'Norms for Sick Leave', view: 0 },
            { questions: 'What is the leave code for sick leave', view: 0 },
            { questions: 'What is the leave code for casual leave', view: 0 },
            { questions: 'What is the code XX?', view: 0 },
            { questions: 'Norms for Permission', view: 0 },
            { questions: 'How many days privilege leave available?', view: 0 },
            { questions: 'Norms for Privilege Leave', view: 0 },
            { questions: 'What are the Norms for Trainee Leave?', view: 0 },
            { questions: 'Norms for Condolence Leave', view: 0 },
            { questions: 'Whom should I contact to inform my leave of absence ?', view: 0 },
            { questions: 'Who is my reporting manager ?', view: 0 },
            { questions: 'Should I produce medical certificate for sick leaves', view: 0 },
            { questions: 'Norms for Compensatory off', view: 0 },
            { questions: 'My Disapproved Leaves', view: 0 },
            { questions: 'Will I be paid fully when I am under injury leave?', view: 0 },
            { questions: 'My Approved Leaves', view: 0 },
            { questions: 'How to correct wrongly marked leave ?', view: 0 },
            { questions: 'I want to apply for leave', view: 0 },
            { questions: 'How can i avail restricted holidays ?', view: 0 },
            { questions: 'What if my approving manager is not available to approve my leaves', view: 0 }
        ]
    },
    {
        name: 'Office Time Schedule - Queries',
        link: 'secondLink',
        categoryList: [
            { questions: 'What is my working hours?', view: 0 },
            { questions: 'How many late comings are allowed in a month?', view: 0 },
            { questions: 'What is my shift details?', view: 0 },
            { questions: 'What are the available shift in our company?', view: 0 },
            { questions: 'How do I request for shift change ?', view: 0 },
            { questions: 'What is the commencement time of lunch break ?', view: 0 },
            { questions: 'How do I escalate my disapproved request ?', view: 0 },
            { questions: 'Should I take prior approval for overtime', view: 0 },
            { questions: 'How do I correct my attendance data error ?', view: 0 },
            { questions: 'Buffer time for punching', view: 0 },
            { questions: 'How do I correct mispunch ?', view: 0 }
        ]
    },
    {
        name: 'Employee Benefits - Queries',
        link: 'thirdLink',
        categoryList: [
            { questions: 'How I can solve tax related issues ?', view: 0 }
            // , { questions: 'What are the insurance benefits available for employees ?', view: 0 }
            ,
            { questions: 'How to encash my available privilege leaves PL ?', view: 0 },
            { questions: 'What is the ESI policy of the company ?', view: 0 },
            { questions: 'What is my eligibility for mediclaim ?', view: 0 }
            //  , { questions: 'What are the norms for accidental insurance?', view: 0 }
            ,
            { questions: 'What is my eligibility for travel and accommodation benefits on official tour ?', view: 0 },
            { questions: 'How I can apply for loan ?', view: 0 },
            { questions: 'How do we apply for house rent allowance ?', view: 0 },
            { questions: 'How do we apply for claims and reimbursement ?', view: 0 },
            { questions: 'What is the policy to hire employees and selection process ?', view: 0 },
            { questions: 'Whom should I contact for availing training in specific skills?', view: 0 },
            { questions: 'How do I resolve conflicts with my immediate boss ?', view: 0 },
            { questions: 'How do I escalate my grievances?', view: 0 }
        ]
    },
    {
        name: 'Management - Queries',
        link: 'fourthLink',
        categoryList: [
            { questions: 'Who is the Deputy Manager ?', view: 1 },
            { questions: 'Who is the Assistant Engineer ?', view: 1 },
            { questions: 'What is the designation of Yeswanth ?', view: 1 },
            { questions: 'Who is on leave today ?', view: 1 },
            { questions: 'How many employees are on leave today ?', view: 1 },
            { questions: 'How many days was Yeswanth on leave this month ?', view: 1 },
            { questions: 'Was Yeswanth present yesterday ?', view: 1 }
        ]
    },
    {
        name: 'Report',
        link: 'fivethLink',
        categoryList: [
            { questions: 'Holiday List', view: 0 }
            // , { questions: 'Leave Types', view: 0 }
            ,
            { questions: 'My Remaining leave Chart', view: 0 }
            // , { questions: 'Leave Approval Status Report', view: 1 }
            ,
            { questions: 'Today Leave List', view: 1 }
            // , { questions: 'My attendance report', view: 1 }
            // , { questions: 'Comp Off Status Chart', view: 1 }
            ,
            { questions: 'Employees Official Details', view: 1 }
            // , { questions: 'Employees Personal Details', view: 1 }
            // , { questions: 'Comp off Application Status List', view: 1 }
        ]
    }
];


/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgba(217, 236, 253, 1);\n    font: 14px/20px \"Lato\", Arial, sans-serif;\n    padding: 40px 0;\n    color: black;\n  }\n.breadcrumb {\n    padding: 8px 15px !important;\n    margin: 25px 0 0 20px !important;\n    background-color: #ffffff !important;\n    border-radius: 0 !important;\n}\n.breadcrumb > li {\n    color: #666 !important;\n    font-size: 16px !important;\n    vertical-align: middle !important;\n}\n.breadcrumb > .breadcrumb-item > a {\n    color: #ffe001;\n}\nli.breadcrumb-item i.fa.fa-angle-right {\n    font-size: 25px;\n    padding: 0 8px;\n    color: #000;\n    vertical-align: middle;\n}\n.grid-about {\n    background: #fff;\n    margin-bottom: 1em;\n    padding: 1em;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);\n            box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    margin: 25px 0 0 20px !important;\n}\n.grid-about p{color: #999;}\n.grid-about .section-title {\n    font-family: ralewaybold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 35px;\n    font-style: normal;\n    text-transform: uppercase;\n    color: #252525;\n}\n.grid-about .section-title-btm {\n    \n        background-color: #ffe001;\n        height: 3px;\n        width: 100px;\n        margin-bottom: 20px;\n    \n    }\n/*==================================================\n * Effect\n * ===============================================*/\n.effect1\n {\n     position:relative;\n     -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n             box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n }\n.effect1:before, .effect1:after\n {\n     content:\"\";\n     position:absolute;\n     z-index:-1;\n     -webkit-box-shadow:0 0 20px rgba(111,111,111,0.8);\n     box-shadow:0 0 20px rgba(111,111,111,0.8);\n     top:0;\n     bottom:0;\n     border-radius:100px;\n }\n.txt_boby{\n    float:left;\n    background: #ffffff;\n    border-radius: 4px;  \n    color: #434651;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .section.content-1 {\n        margin: 69px 0px 0 0px !important;\n    }}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-sidebar></app-sidebar>\n<section class=\"content-1 zoomIn\">\n    <div class=\"container-fluid\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a><i class=\"fa fa-angle-right\"></i>About US</li>\n        </ol>\n        <div class=\"grid-about effect1 txt_boby\">\n            <h2 class=\"section-title\"><span>About AIANR</span></h2>\n            <div class=\"section-title-btm\"></div>\n\n\n<p>I am AIANR Chatbot, an AI-driven Virtual Assistant. I can help you with queries related to Human Resource Management You can ask your queries or you can select the questions from the left side categorized question Menu Bar. From categorized Menu bar you can get the queries in which I am trained to deal with </p>\n\n<p>I am here to ease the communication between HR team and employees.You may spend many hours each month searching for basic company-related information. AIANR Chatbot would quickly get you the answers you are looking for, my aim is to make you more productive and ultimately more satisfied. </p>\n\n<p>I am available with 24×7 real-time interaction with one on one personalized communication facility.You just need to type and send your queries and I will use my intelligent language processing technology to fetch the needed solution.I would like to bring an innovative change in the organization with NLP, Artificial Intelligence (AI) and Machine Learning technology-enabled service to you. </p>\n\n        </div>\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_global_settings__ = __webpack_require__("./src/app/_class/global-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router, _globalSettings) {
        this._router = _router;
        this._globalSettings = _globalSettings;
        //  this._router.navigate(['/login']);
        this._globalSettings.authenticated = JSON.parse(localStorage.getItem('authentication'));
        this._globalSettings.username = localStorage.getItem("firstname");
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("this._globalSettings.authenticated");
        console.log(this._globalSettings.authenticated);
        if (!this._globalSettings.authenticated) {
            this._router.navigate(['/login']);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__class_global_settings__["a" /* GlobalSettings */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__class_global_settings__["a" /* GlobalSettings */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_full_layout_full_layout_component__ = __webpack_require__("./src/app/containers/full-layout/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__containers_simple_layout_simple_layout_component__ = __webpack_require__("./src/app/containers/simple-layout/simple-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__report_report_component__ = __webpack_require__("./src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__favourite_favourite_component__ = __webpack_require__("./src/app/favourite/favourite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipe_truncate_pipe__ = __webpack_require__("./src/app/_pipe/truncate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__task_task_component__ = __webpack_require__("./src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__task_logs_task_logs_component__ = __webpack_require__("./src/app/task-logs/task-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipe_custom_json_pipe__ = __webpack_require__("./src/app/_pipe/custom-json.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 // <-- import the module




















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_12__logout_logout_component__["a" /* LogoutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__containers_full_layout_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__containers_simple_layout_simple_layout_component__["a" /* SimpleLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_20__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__favourite_favourite_component__["a" /* FavouriteComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipe_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_25__task_logs_task_logs_component__["a" /* TaskLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pipe_custom_json_pipe__["a" /* CustomJsonPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_27_ngx_chips__["a" /* TagInputModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_26__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_26__angular_common__["d" /* HashLocationStrategy */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_logs_task_logs_component__ = __webpack_require__("./src/app/task-logs/task-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_full_layout_full_layout_component__ = __webpack_require__("./src/app/containers/full-layout/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_report_component__ = __webpack_require__("./src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favourite_favourite_component__ = __webpack_require__("./src/app/favourite/favourite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_task_component__ = __webpack_require__("./src/app/task/task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__containers_full_layout_full_layout_component__["a" /* FullLayoutComponent */], data: { title: 'DASHBOARD' },
        children: [
            { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */], data: { title: 'Langinding Page' } },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */], data: { title: 'Langinding Page' } },
            { path: 'report', component: __WEBPACK_IMPORTED_MODULE_8__report_report_component__["a" /* ReportComponent */], data: { title: 'Langinding Page' } },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */], data: { title: 'Langinding Page' } },
            { path: 'favourite', component: __WEBPACK_IMPORTED_MODULE_10__favourite_favourite_component__["a" /* FavouriteComponent */], data: { title: 'Langinding Page' } },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */], data: { title: 'Profile Page' } },
            { path: 'task', component: __WEBPACK_IMPORTED_MODULE_12__task_task_component__["a" /* TaskComponent */], data: { title: 'Task Page' } },
            { path: 'taskLogs', component: __WEBPACK_IMPORTED_MODULE_0__task_logs_task_logs_component__["a" /* TaskLogsComponent */], data: { title: 'Task Logs Page' } }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], data: { title: 'Login Page' } },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */], data: { title: 'Log out' } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/full-layout/full-layout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/full-layout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <app-sidebar ></app-sidebar> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/containers/full-layout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
    };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-full-layout',
            template: __webpack_require__("./src/app/containers/full-layout/full-layout.component.html"),
            styles: [__webpack_require__("./src/app/containers/full-layout/full-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/simple-layout/simple-layout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/simple-layout/simple-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/containers/simple-layout/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () {
    };
    SimpleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-layout',
            template: __webpack_require__("./src/app/containers/simple-layout/simple-layout.component.html"),
            styles: [__webpack_require__("./src/app/containers/simple-layout/simple-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\n.dash-box {\n    position: relative;\n    background: rgb(255, 86, 65);\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 86, 65, 1)), to(rgba(253, 50, 97, 1)));\n    background: linear-gradient(to bottom, rgba(255, 86, 65, 1) 0%, rgba(253, 50, 97, 1) 100%);\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ff5641', endColorstr='#fd3261', GradientType=0);\n    border-radius: 4px;\n    text-align: center;\n    margin: 60px 0 50px;\n}\n.dash-box-icon {\n    position: absolute;\n    -webkit-transform: translateY(-50%) translateX(-50%);\n            transform: translateY(-50%) translateX(-50%);\n    left: 50%;\n}\n.dash-box-action {\n    -webkit-transform: translateY(-50%) translateX(-50%);\n            transform: translateY(-50%) translateX(-50%);\n    position: absolute;\n    left: 50%;\n}\n.dash-box-body {\n    padding: 50px 20px;\n}\n.dash-box-icon:after {\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    background: rgba(247, 148, 137, 0.91);\n    content: '';\n    border-radius: 50%;\n    left: -10px;\n    top: -10px;\n    z-index: -1;\n}\n.dash-box-icon > i {\n    background: #ff5444;\n    border-radius: 50%;\n    line-height: 40px;\n    color: #FFF;\n    width: 40px;\n    height: 40px;\n\tfont-size:22px;\n}\n.dash-box-icon:before {\n    width: 75px;\n    height: 75px;\n    position: absolute;\n    background: rgba(253, 162, 153, 0.34);\n    content: '';\n    border-radius: 50%;\n    left: -17px;\n    top: -17px;\n    z-index: -2;\n}\n.dash-box-action > button {\n    border: none;\n    background: #FFF;\n    border-radius: 19px;\n    padding: 7px 16px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    letter-spacing: .5px;\n    color: #003e85;\n    -webkit-box-shadow: 0 3px 5px #d4d4d4;\n            box-shadow: 0 3px 5px #d4d4d4;\n}\n.dash-box-body > .dash-box-count {\n    display: block;\n    font-size: 30px;\n    color: #FFF;\n    font-weight: 300;\n}\n.dash-box-body > .dash-box-title {\n    font-size: 13px;\n    color: rgba(255, 255, 255, 0.81);\n}\n.dash-box.dash-box-color-2 {\n    background: rgb(252, 190, 27);\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(1%, rgba(252, 190, 27, 1)), color-stop(99%, rgba(248, 86, 72, 1)));\n    background: linear-gradient(to bottom, rgba(252, 190, 27, 1) 1%, rgba(248, 86, 72, 1) 99%);\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fcbe1b', endColorstr='#f85648', GradientType=0);\n}\n.dash-box-color-2 .dash-box-icon:after {\n    background: rgba(254, 224, 54, 0.81);\n}\n.dash-box-color-2 .dash-box-icon:before {\n    background: rgba(254, 224, 54, 0.64);\n}\n.dash-box-color-2 .dash-box-icon > i {\n    background: #fb9f28;\n}\n.dash-box.dash-box-color-3 {\n    background: rgb(183,71,247);\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(183,71,247,1)),to(rgba(108,83,220,1)));\n    background: linear-gradient(to bottom, rgba(183,71,247,1) 0%,rgba(108,83,220,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b747f7', endColorstr='#6c53dc',GradientType=0 );\n}\n.dash-box-color-3 .dash-box-icon:after {\n    background: rgba(180, 70, 245, 0.76);\n}\n.dash-box-color-3 .dash-box-icon:before {\n    background: rgba(226, 132, 255, 0.66);\n}\n.dash-box-color-3 .dash-box-icon > i {\n    background: #8150e4;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar ></app-sidebar>\n<section class=\"content zoomIn\">\n\n<div class=\"container clearfix\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"dash-box dash-box-color-1\">\n\t\t\t\t<div class=\"dash-box-icon\">\n\t\t\t\t\t<i class=\"glyphicon glyphicon-heart\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dash-box-body\">\n\t\t\t\t\t<span class=\"dash-box-count\">{{favouriteCount}}</span>\n\t\t\t\t\t<span class=\"dash-box-title\">Favourites</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"dash-box-action\">\n\t\t\t\t\t<button (click)=\"navigate('/favourite')\">More Info</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"dash-box dash-box-color-2\">\n\t\t\t\t<div class=\"dash-box-icon\">\n\t\t\t\t\t<i class=\"glyphicon glyphicon-download\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dash-box-body\">\n\t\t\t\t\t<span class=\"dash-box-count\">{{reactionCount}}</span>\n\t\t\t\t\t<span class=\"dash-box-title\">Reactions</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"dash-box-action\">\n\t\t\t\t\t<button (click)=\"navigate('/favourite')\">More Info</button>\n\t\t\t\t</div>\n\t\t\t</div>\n    </div>\n\n    <div class=\"col-md-4\">\n\t\t\t<div class=\"dash-box dash-box-color-3\">\n\t\t\t\t<div class=\"dash-box-icon\">\n\t\t\t\t\t<i class=\"glyphicon glyphicon-download\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dash-box-body\">\n\t\t\t\t\t<span class=\"dash-box-count\">{{reactionCount}}</span>\n\t\t\t\t\t<span class=\"dash-box-title\">Reactions</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"dash-box-action\">\n\t\t\t\t\t<button (click)=\"navigate('/favourite')\">More Info</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_router) {
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.reactionCount = localStorage.getItem('reactions').length;
        this.favouriteCount = localStorage.getItem('favourites').length;
        // this.taskCount = localStorage.getItem('tasks').length;
        console.log('this.reactionCount.length');
        console.log(this.reactionCount);
        console.log('this.favouriteCount.length');
        console.log(this.favouriteCount);
    };
    DashboardComponent.prototype.navigate = function (url) {
        this._router.navigate([url]);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5) !important;\n    z-index: 999;\n  }\n  \n  .dialog {\n    z-index: 1000;\n    position: fixed;\n    right: 0;\n    left: 0;\n    top: 20px;\n    margin-right: auto;\n    margin-left: auto;\n    min-height: 200px;\n    width: 100%;\n    max-width: 520px;\n    background-color: #fff;\n    padding: 0px;\n    -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n  \n  @media (min-width: 768px) {\n    .dialog {\n      top: 100px;\n    }\n  }\n  \n  .dialog__close-btn {\n    border: 0;\n    background: #fff;\n    color: #1e356a;\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    font-size: 1.2em;\n    border-radius: 50%;\n    padding: 0px 7px;\n    -webkit-box-shadow: 0px 5px 15px rgba(217, 236, 253,0.2);\n            box-shadow: 0px 5px 15px rgba(217, 236, 253,0.2);\n  }\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n    <ng-content></ng-content>\n   \n  </div>\n  <div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/favourite/favourite.component.css":
/***/ (function(module, exports) {

module.exports = "\n.chat\n{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.chat li\n{\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n    margin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n    margin-right: 60px;\n}\n\n.chat li .chat-body p\n{\n    margin: 0;\n    color: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n    margin-right: 5px;\n}\n\n.panel-body\n{\n    overflow-y: scroll;\n    height: 250px;\n}\n\n::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n    width: 12px;\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n    background-color: #555;\n}\n\n.dialog-title h4{font-size: 16px !important;}\n\n.dialog-title  p{font-size: 16px;}\n\n.faourites{\n    cursor: pointer;\n}\n\nul li{\n    padding: 10px;\n    list-style: none;\n\n}\n\nul li i {\n    color: red;\n    padding-right: 5px;\n}\n\n.panel-body {\n    min-height: 400px;\n    overflow-y: scroll\n}\n\n.ai_back button{color: #4f4f4f;}\n\n/*==================================================\n * Effect 7\n * ===============================================*/\n\n.effect1\n {\n     position:relative;\n     -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n             box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n }\n\n.effect1:before, .effect1:after\n {\n     content:\"\";\n     position:absolute;\n     z-index:-1;\n     -webkit-box-shadow:0 0 20px rgba(111,111,111,0.8);\n     box-shadow:0 0 20px rgba(111,111,111,0.8);\n     top:0;\n     bottom:0;\n     border-radius:100px;\n }\n\n.txt_boby{\n    float:left;\n    background: #ffffff;\n    border-radius: 4px;  \n    color: #434651;\n}\n\n.panel-heading h3{margin-top:5px !important;font-size: 18px;color: #1b3065;}\n\n.btn-sky {\n    color: #fff !important;\n    background-color: #0bacd3;\n    border-bottom:2px solid #098aa9 !important;\n    margin-bottom: 10px;\n    border-radius: 25px !important;\n    margin-right: 10px;\n    }\n\n.btn-sky:hover,.btn-sky.active:focus, .btn-sky:focus, .open>.dropdown-toggle.btn-sky {\n    color: #fff !important;\n    background-color: #29b6d8;\n    border-bottom:2px solid #2192ad !important;\n    outline: none;\n    margin-bottom: 10px;\n    }\n\n.btn-sky:active, .btn-sky.active {\n    color: #fff !important;\n    background-color: #0a97b9;\n    border-top:4px solid #087994;\n    outline-offset: none;\n    margin-top: 2px;\n    margin-bottom: 10px;\n    }\n    \n   "

/***/ }),

/***/ "./src/app/favourite/favourite.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar (messageEvent)=\"receivedMessage($event)\"></app-sidebar>\n\n<section class=\"content zoomIn txt_boby effect1\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"pull-right ai_back\">\n            <button type=\"button\" class=\"btn btn-sky text-uppercase btn-sm\" (click)=\"goBackCall()\">\n                    <span class=\"btn-label\"><i class=\"glyphicon glyphicon-chevron-left\"></i></span>\n                Back</button>\n          </div>\n\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n              <h3><span class=\"material_assignment\"><i class=\"fa fa-heart favt_icons\"></i></span> Favourites\n              </h3>\n\n          </div>\n\n          <div class=\"panel-body\">\n\n            <table class=\"table table-sm table-striped\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Fav Question</th>\n                  <th>Created date</th>\n                  <th>Updated date</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of favouriteLists; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td>{{item.question}}</td>\n                  <td>{{item.created_at}}</td>\n                  <td>{{item.updated_at}}</td>\n                  <td>\n                    <span class=\"label label-success\">Active</span>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-outline-danger button2\" data-toggle=\"modal\" (click)=\"deleteModalFunc(item._id)\">\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </button>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</section>\n\n\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Are you sure want to delete!</h4>\n          <button type=\"button\" class=\"close\" (click)=\"deleteModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are you sure want to delete this record! &hellip;</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Close</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n<!--\n<app-sidebar (messageEvent)=\"receivedMessage($event)\"></app-sidebar>\n\n-->\n\n<!-- <section class=\"content zoomIn effect1 txt_boby\">\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"pull-right ai_back\">\n            <button type=\"button\" class=\"btn btn-sky text-uppercase btn-sm\" (click)=\"goBackCall()\">\n                    <span class=\"btn-label\"><i class=\"glyphicon glyphicon-chevron-left\"></i></span>\n                Back</button>\n          </div>\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                            <h3><span class=\"material_assignment\"><i class=\"fa fa-heart favt_icon\" aria-hidden=\"true\"></i></span> Favourites\n                              </h3>\n\n                    </div>\n                    <div class=\"panel-body\" >\n\n                            <ul class=\"chat\">\n                             <li *ngFor=\"let item of favouriteLists\" class=\"left clearfix\"  ><i class=\"fa fa-heart favt_icon\" aria-hidden=\"true\"></i> {{item.question}}\n                                    </li>\n\n                                  </ul>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n  </section> -->\n\n"

/***/ }),

/***/ "./src/app/favourite/favourite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_favourite_service__ = __webpack_require__("./src/app/_service/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouriteComponent = (function () {
    function FavouriteComponent(_service, _location) {
        this._service = _service;
        this._location = _location;
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        // this.favouriteLists = JSON.parse(localStorage.getItem("favourites"));
        this.getFavourites();
    };
    FavouriteComponent.prototype.getFavourites = function () {
        var _this = this;
        this._service.getFavourites().subscribe(function (response) {
            var res = response.result;
            if (res.statusCode === 200) {
                _this.favouriteLists = res.data.info;
                // localStorage.setItem('favourites', JSON.stringify(res));
            }
            if (res.statusCode === 204) {
                _this.favouriteLists = [];
                // localStorage.setItem('favourites', JSON.stringify(res));
            }
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    FavouriteComponent.prototype.goBackCall = function () {
        this._location.back();
    };
    FavouriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-favourite',
            template: __webpack_require__("./src/app/favourite/favourite.component.html"),
            styles: [__webpack_require__("./src/app/favourite/favourite.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__service_favourite_service__["a" /* FavouriteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_favourite_service__["a" /* FavouriteService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], FavouriteComponent);
    return FavouriteComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar (messageEvent)=\"receivedMessage($event)\"></app-sidebar>\n\n<section class=\"content zoomIn\">\n    <div class=\"container clearfix\">\n      <div class=\"chat effect1\">\n        <div class=\"chat-header clearfix\">\n          <!-- <img src=\"../../assets/images/user.png\" alt=\"avatar\" /> -->\n\n          <div class=\"chat-about\">\n            <!-- <div class=\"chat-with\">{{_globalSettings.username}}</div> -->\n            <div class=\"chat-num-messages\">\n                    <button (click)=\"showDialog = !showDialog\" class=\"sim-button button27\"><i class=\"fa fa-heart favt_icon pulse shadow\" aria-hidden=\"true\"></i>Favorite</button>\n            </div>\n          </div>\n        </div>\n        <!-- end chat-header -->\n\n        <!-- <div class=\"slimScrollDiv chat-history\" style=\"overflow: scroll; height: xyz;\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\"> -->\n            <div class=\"chat-history\" #scrollMe style=\"overflow: scroll; height: xyz;\" [scrollTop]=\"scrollMe.scrollHeight\">\n                <div class=\"scrollbar\" id=\"style-6\">\n\n            <ul class=\"force-overflow\">\n            <li class=\"clearfix\" *ngFor=\"let row of chatLists; let i = index\" [attr.data-index]=\"i\">\n              <div *ngIf=\"row.user\">\n              <div class=\"message-data align-right\">\n                <span class=\"message-data-time\" >{{row.created_at}}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name\" >{{_globalSettings.username}}</span> <i class=\"fa fa-circle me\"></i>\n\n              </div>\n              <div class=\"message my-message fadeInLeft\">\n                <p id=\"valueId\" [innerHTML]=\"row.value\"></p>\n                <span (click)=\"updateFavourites(row.value,i)\" class=\"faourites\" [ngClass]=\"(row.favourite)?'fav_clr':''\">\n                    <i [ngClass]=\"(row.favourite)?'fav_clr':''\" class=\"fa fa-heart favt_icon pulse shadow_1\" aria-hidden=\"true\"></i></span>\n\n              </div>\n            </div>\n            <div *ngIf=\"row.machine\">\n                <div class=\"message-data align-right\">\n                  <span class=\"message-data-time\" >{{row.created_at}}</span> &nbsp; &nbsp;\n                  <span class=\"message-data-name\" >HR</span> <i class=\"fa fa-circle me\"></i>\n                  <div class=\"align-right pull-right\">\n                        <button class=\"btn-secondary like-review\" (click)=\"reaction('like',row);\">\n                            <i [ngClass]=\"(row.reaction == 'like')?'animate-like':''\" class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n                        </button>\n\n                        <button class=\"btn-primary like-review\" (click)=\"reaction('unlike',row);\">\n                            <i [ngClass]=\"(row.reaction == 'unlike')?'animate-like':''\" class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"message other-message float-right\">\n                    <p id=\"valueId\" [innerHTML]=\"row.value\" class=\"pull-left\"></p>\n                    <!-- <a class=\"btn like_btn\" (click)=\"reaction('like',row.question);\"><i [ngClass]=\"(row.reaction == 'like')?'animate-like':''\" class=\"fa fa-thumbs-up\"></i> </a> &nbsp;&nbsp;&nbsp;&nbsp;\n                    <a class=\"btn btn-danger like_btn\" (click)=\"reaction('unlike',row.question);\"><i [ngClass]=\"(row.reaction == 'unlike')?'animate-unlike':''\" class=\"fa fa-thumbs-down\"></i> </a> -->\n\n\n                </div>\n              </div>\n            </li>\n           <!-- <h1 (messageEvent)=\"receivedMessage($event)\">Hi</h1> -->\n\n          </ul>\n        </div>\n\n        </div> <!-- end chat-history -->\n\n        <form class=\"ai_margin_10\">\n        <div class=\"col-lg-10\">\n          <div class=\"form-group\">\n              {{message}}\n            <input type=\"text\" class=\"form-control ai_textbox\" name=\"searchreq\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Text\" [(ngModel)]=\"searchreq\" (keyup.enter)=\"searchBot()\" autofocus>\n          </div>\n          </div>\n          <div class=\"col-lg-1\">\n          <div class=\"form-group\">\n          <button type=\"button\" class=\"btn ai_send\" (click)=\"searchBot()\"><i class=\"material-icons\"  >&#xE163;</i></button>\n          </div>\n          </div>\n          <div class=\"col-lg-1\">\n                <div class=\"form-group\">\n                <button type=\"button\" class=\"btn ai_mike\"><i class=\"material-icons\"  >&#xE8C8;</i></button>\n                </div>\n                </div>\n        </form>\n         <!-- end chat-message -->\n\n      </div> <!-- end chat -->\n\n    </div> <!-- end container -->\n\n  </section>\n\n\n  <app-dialog [(visible)]=\"showDialog\">\n        <header class=\"dialog-title\">\n            <h4>Favorite Messages</h4>\n        </header>\n       <div class=\"favt_p\">\n\n        <p *ngFor=\"let item of favouriteLists\" (click)=\"favtoAsk(item.question)\"><i class=\"fa fa-heart favt_icon\" aria-hidden=\"true\"></i> {{item.question}}</p>\n       </div>\n\n</app-dialog>\n\n<!--\n\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-7 col-lg-offset-6\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <span class=\"glyphicon glyphicon-comment\"></span> Chats\n\n                    </div>\n                    <div class=\"panel-body\" style=\"overflow: scroll; height: xyz;\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n                        <ul class=\"chat\" >\n\n                <li class=\"right clearfix\" *ngFor=\"let row of chatLists\">\n                        <div *ngIf=\"row.user\"><span class=\"chat-img pull-right\">\n                        <img src=\"http://placehold.it/50/FA6F57/fff&text={{userImg}}\" alt=\"User Avatar\" class=\"img-circle\" />\n                    </span>\n                        <div class=\"chat-body clearfix\">\n                            <div class=\"header\">\n                                <small class=\" text-muted\">\n                                <span class=\"glyphicon glyphicon-time\"></span>{{row.created_at | timeAgo}}</small>\n\n                                <strong class=\"pull-right primary-font\">{{_globalSettings.username}}</strong>\n                            </div>\n                            <p id=\"valueId\" [innerHTML]=\"row.value\"></p>\n                        </div>\n                        </div>\n\n                    <div *ngIf=\"row.machine\"><span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff&text={{machineImg}}\" alt=\"User Avatar\" class=\"img-circle\" />\n                    </span>\n                    <div class=\"chat-body clearfix\">\n                        <div class=\"header\">\n                            <strong class=\"primary-font\">Machine</strong>\n                            <small class=\" text-muted\">\n                                    <span class=\"glyphicon glyphicon-time\"></span>{{row.created_at | timeAgo}}</small>\n                        </div>\n                        <p id=\"valueId\" [innerHTML]=\"row.value\"></p>\n                    </div>\n                    </div>\n                </li>\n\n\n\n                        </ul>\n                    </div>\n                    <div class=\"panel-footer\">\n                        <div class=\"input-group\">\n                            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" [(ngModel)]=\"searchreq\"  />\n                            <span class=\"input-group-btn\">\n                                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" (click)=\"searchBot()\">\n                                    Send</button>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n     -->\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_landing_service__ = __webpack_require__("./src/app/_service/landing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_global_settings__ = __webpack_require__("./src/app/_class/global-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_favourite_service__ = __webpack_require__("./src/app/_service/favourite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingComponent = (function () {
    function LandingComponent(_router, _http, _service, _globalSettings, _favouriteService, el, renderer) {
        this._router = _router;
        this._http = _http;
        this._service = _service;
        this._globalSettings = _globalSettings;
        this._favouriteService = _favouriteService;
        this.el = el;
        this.renderer = renderer;
        this.chatLists = [];
        this.showDialog = false;
        this.favouriteLists = [];
        this.reactionLists = [];
        // this.chatLists.push(JSON.parse(localStorage.getItem('chats')));
        var chts = JSON.parse(localStorage.getItem('chats'));
        console.log(chts);
        if (chts === null) {
            this.chatLists.push({
                machine: true,
                value: 'Hi ' + localStorage.getItem('employeeName') + ' I can help you with HR related queries.',
                created_at: Date.now()
            });
        }
        else {
            this.chatLists = chts;
        }
        localStorage.setItem('chats', JSON.stringify(this.chatLists));
        // this.getReactions();
    }
    LandingComponent.prototype.ngOnInit = function () {
        this._globalSettings.username = localStorage.getItem('employeeName');
        this.chatLists = JSON.parse(localStorage.getItem('chats'));
        this.userImg = 'U';
        this.machineImg = 'M';
        this.getFavourites();
        this.getReactions();
    };
    LandingComponent.prototype.scrollToBottom = function () {
        this.myscoll.nativeElement.scrollTop = this.myscoll.nativeElement.scrollHeight;
    };
    LandingComponent.prototype.receivedMessage = function ($event) {
        console.log($event);
        this.searchreq = $event;
        // this.searchBot();
    };
    LandingComponent.prototype.getRandomNumber = function () {
        return Math.floor(Math.random() * (999999 - 100000)) + 100000;
    };
    LandingComponent.prototype.searchBot = function () {
        var _this = this;
        if (this.searchreq.trim() != null) {
            this.chatLists.push({ user: true, value: this.searchreq, created_at: Date.now(), favourite: false });
            this._service.getsearchResponse(this.searchreq).subscribe(function (response) {
                var res = response.result.data;
                var session = response.result.data.session;
                _this.chatLists.push({ machine: true, value: res.response, created_at: Date.now(), question: _this.searchreq, reaction: '', rand_number: _this.getRandomNumber(), question_id: res.question_id });
                _this.searchreq = '';
                console.log('-------------------------------');
                console.log(session);
                console.log(response);
                localStorage.setItem('chats', JSON.stringify(_this.chatLists));
                localStorage.setItem('sessions', JSON.stringify(session));
                localStorage.setItem('conversation_id', res.conversation_id);
                localStorage.setItem('conversation_status', res.conversation_status);
                localStorage.setItem('qa_flag', res.qa_flag);
                localStorage.setItem('qa_nerformat', res.qa_nerformat);
                localStorage.setItem('qa_id', res.qa_id);
                localStorage.setItem('ask_list', res.ask_list);
                localStorage.setItem('qa_count', res.qa_count);
                _this.scrollToBottom();
                // this.updateFavouritesByChats(this.searchreq, i);
            }, function (err) {
                console.log('error msg');
                // this.donationlistprovider.showErrorToast(err);
            });
        }
        else {
            // this.chatLists.push({'user':true,'value':this.searchreq,'created_at':Date.now()});
            this.chatLists.push({ machine: true, value: 'Please enter your question', created_at: Date.now(), question_id: '' });
            localStorage.setItem('chats', JSON.stringify(this.chatLists));
        }
    };
    LandingComponent.prototype.favtoAsk = function (question) {
        this.searchreq = question;
        this.searchBot();
        this.showDialog = false;
    };
    LandingComponent.prototype.reaction = function (flag, data) {
        var _this = this;
        var oldItem = this.chatLists.find(function (x) { return x.rand_number === data.rand_number; });
        var index = this.chatLists.indexOf(oldItem);
        oldItem.reaction = flag;
        this.chatLists[index] = oldItem;
        console.log('this.reactionLists');
        console.log(data);
        console.log(this.chatLists);
        localStorage.setItem('chats', JSON.stringify(this.chatLists));
        console.log(data.question);
        this._service.sendReactions(flag, data.question, data.question_id).subscribe(function (response) {
            var res = response.result.data;
            console.log('currentUser');
            _this.getReactions();
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    LandingComponent.prototype.updateFavourites = function (question, index) {
        var _this = this;
        console.log(index);
        console.log(question);
        console.log(this.chatLists[index].favourite);
        var flag;
        if (this.chatLists[index].favourite === true) {
            console.log('TRUE FAV TRUE');
            flag = false;
            this.chatLists.forEach(function (element) {
                if (element.value.toLowerCase() === question.toLowerCase()) {
                    console.log('COND TRUE');
                    element.favourite = false;
                }
            });
            this.favouriteLists.forEach(function (item, ind) {
                console.log(item);
                if (item.question.toLowerCase() === question.toLowerCase()) {
                    console.log('FAV TRUE');
                    _this.favouriteLists.splice(ind, 1);
                }
            });
        }
        else if (this.chatLists[index].favourite === false) {
            console.log('FALSE FAV FALSE');
            flag = true;
            this.chatLists.forEach(function (element) {
                if (element.value.toLowerCase() === question.toLowerCase()) {
                    console.log('COND FALSE');
                    element.favourite = true;
                }
            });
            this.favouriteLists.forEach(function (item, ind) {
                console.log(item);
                if (item.question.toLowerCase() === question.toLowerCase()) {
                    console.log('FAV TRUE');
                    _this.favouriteLists.splice(ind, 1);
                }
            });
            console.log(this.favouriteLists);
            this.favouriteLists.push({ question: question });
        }
        console.log(this.chatLists);
        console.log('FAV LISTS');
        console.log(this.favouriteLists);
        localStorage.setItem('chats', JSON.stringify(this.chatLists));
        localStorage.setItem('favourites', JSON.stringify(this.favouriteLists));
        this._favouriteService.updateFavourites(question, flag).subscribe(function (response) {
            var res = response.result.data;
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    LandingComponent.prototype.updateFavouritesByChats = function (question, i) {
        console.log('chat index ' + i);
        if (i > -1) {
            if (this.chatLists[i].favourite === true) {
                this.chatLists.forEach(function (element) {
                    if (element.value.toLowerCase() === question.toLowerCase()) {
                        console.log('FAV COND TRUE');
                        element.favourite = true;
                    }
                });
            }
        }
    };
    LandingComponent.prototype.getFavourites = function () {
        var _this = this;
        this._favouriteService.getFavourites().subscribe(function (response) {
            var res = response.result;
            var fav = res.data.info;
            if (res.statusCode === 200) {
                fav.forEach(function (element) {
                    _this.favouriteLists.push({ 'question': element.question });
                });
                // this.favouriteLists = res.data.info;
                localStorage.setItem('favourites', JSON.stringify(_this.favouriteLists));
            }
            if (res.statusCode === 204) {
                _this.favouriteLists = [];
                localStorage.setItem('favourites', JSON.stringify(res));
            }
            console.log('currentUser');
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    LandingComponent.prototype.getReactions = function () {
        var _this = this;
        this._favouriteService.getReactions().subscribe(function (response) {
            var res = response.result.data.info;
            _this.reactionLists = res;
            localStorage.setItem('reactions', JSON.stringify(res));
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('scrollMe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LandingComponent.prototype, "myscoll", void 0);
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/landing/landing.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_landing_service__["a" /* LandingService */], __WEBPACK_IMPORTED_MODULE_5__service_favourite_service__["a" /* FavouriteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__service_landing_service__["a" /* LandingService */],
            __WEBPACK_IMPORTED_MODULE_4__class_global_settings__["a" /* GlobalSettings */],
            __WEBPACK_IMPORTED_MODULE_5__service_favourite_service__["a" /* FavouriteService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.scss":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);\n*, *:before, *:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nbody {\n  background: #C5DDEB;\n  font: 14px/20px \"Lato\", Arial, sans-serif;\n  padding: 40px 0;\n  color: black; }\n.container {\n  margin: 0 auto;\n  width: 100%;\n  background: #444753;\n  border-radius: 5px;\n  padding: 0; }\n.ai_margin {\n  margin-top: 20px; }\n.ai_margin_10 {\n  margin-top: 10px; }\n.ai_textbox {\n  padding: 10px;\n  border-radius: 50px;\n  color: #000;\n  height: 60px;\n  -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n          box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15); }\n.ai_send {\n  border-radius: 50% !important;\n  padding: 15px 20px;\n  font-size: 22px !important;\n  background: -webkit-gradient(linear, left bottom, left top, from(#1b3065), to(#3456ae));\n  background: linear-gradient(to top, #1b3065 0%, #3456ae 100%);\n  background-color: transparent;\n  -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.35);\n          box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.35); }\n.ai_send:hover {\n  -webkit-box-shadow: 0px 0px 10px 3px #ccc;\n          box-shadow: 0px 0px 10px 3px #ccc; }\n.ai_mike {\n  border-radius: 50% !important;\n  padding: 15px 20px;\n  font-size: 22px !important;\n  background: -webkit-gradient(linear, left bottom, left top, from(#868686), to(#d4d4d4)) !important;\n  background: linear-gradient(to top, #868686 0%, #d4d4d4 100%) !important;\n  background-color: transparent;\n  background-color: transparent;\n  -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.35);\n          box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.35); }\n.chat {\n  width: 100%;\n  float: left;\n  background: #ffffff;\n  border-radius: 4px;\n  color: #434651; }\n.chat .chat-header {\n    padding: 10px 15px 0px;\n    border-bottom: 2px solid white; }\n.chat .chat-header img {\n      float: left;\n      border-radius: 50%;\n      height: 60px; }\n.chat .chat-header .chat-about {\n      float: left;\n      padding-left: 10px;\n      margin-top: 6px; }\n.chat .chat-header .chat-with {\n      font-weight: bold;\n      font-size: 14px; }\n.chat .chat-header .chat-num-messages {\n      color: #92959E; }\n.chat .chat-header .chat-num-messages i {\n      color: #cf1628;\n      padding-right: 10px;\n      font-size: 25px; }\n.chat .chat-header .fa-star {\n      float: right;\n      color: #D8DADF;\n      font-size: 20px;\n      margin-top: 12px; }\n.chat .chat-history {\n    padding: 15px 30px 15px;\n    border-bottom: 2px solid white;\n    height: 500px;\n    overflow-y: scroll;\n    background: #d9ecfd;\n    border-radius: 5px;\n    margin: 10px; }\n.chat .chat-history .message-data {\n      margin-bottom: 10px;\n      padding-bottom: 10px; }\n.chat .chat-history li {\n      list-style: none; }\n.chat .chat-history .message-data-time {\n      color: #a8aab1;\n      padding-left: 6px; }\n.chat .chat-history .message {\n      color: white;\n      padding: 15px 15px;\n      line-height: 10px;\n      font-size: 14px;\n      border-radius: 7px;\n      margin-bottom: 5px;\n      width: 50%;\n      position: relative; }\n.chat .chat-history .message:after {\n        bottom: 100%;\n        left: 7%;\n        border: solid transparent;\n        content: \" \";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #4caf50;\n        border-width: 10px;\n        margin-left: -10px; }\n.chat .chat-history .message i {\n      color: #ffffff;\n      font-size: 25px; }\n.chat .chat-history .my-message {\n      background: #4caf50;\n      -webkit-box-shadow: 1.5px 2.6px 24px 0 #4caf50;\n              box-shadow: 1.5px 2.6px 24px 0 #4caf50; }\n.chat .chat-history .message i.fa-thumbs-up {\n      color: #fff; }\n.chat .chat-history .message i.fa-thumbs-down {\n      color: #fff; }\n.chat .chat-history .other-message {\n      background: #4a81b3;\n      -webkit-box-shadow: 1.5px 2.6px 24px 0 #4a81b3;\n              box-shadow: 1.5px 2.6px 24px 0 #4a81b3; }\n.chat .chat-history .other-message:after {\n        border-bottom-color: #4a81b3;\n        left: 93%; }\n.chat .chat-message {\n    padding: 30px; }\n.chat .chat-message textarea {\n      width: 100%;\n      border: none;\n      padding: 10px 20px;\n      font: 14px/22px \"Lato\", Arial, sans-serif;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      resize: none; }\n.chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {\n      font-size: 16px;\n      color: gray;\n      cursor: pointer; }\n.chat .chat-message button {\n      float: right;\n      color: #4a81b3;\n      font-size: 16px;\n      text-transform: uppercase;\n      border: none;\n      cursor: pointer;\n      font-weight: bold;\n      background: #F2F5F8; }\n.chat .chat-message button:hover {\n        color: #406f9a; }\n.online, .offline, .me {\n  margin-right: 3px;\n  font-size: 10px; }\n.online {\n  color: #4caf50; }\n.offline {\n  color: #E38968; }\n.me {\n  color: #4a81b3; }\n.align-left {\n  text-align: left; }\n.align-right {\n  text-align: right; }\n.float-right {\n  float: right; }\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0; }\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto; }\n#valueId {\n  line-height: 20px; }\n.faourites {\n  cursor: pointer; }\n/*========pulse========*/\n.pulse {\n  -webkit-animation-name: pulse_animation;\n          animation-name: pulse_animation;\n  -webkit-animation-duration: 5000ms;\n          animation-duration: 5000ms;\n  -webkit-transform-origin: 70% 70%;\n          transform-origin: 70% 70%;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n@-webkit-keyframes pulse_animation {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  30% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  40% {\n    -webkit-transform: scale(1.08);\n            transform: scale(1.08); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  60% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes pulse_animation {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  30% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  40% {\n    -webkit-transform: scale(1.08);\n            transform: scale(1.08); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  60% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.shadow {\n  text-shadow: 0 1px 0 #c9cfce, 0 2px 0 #bcc2c2, 0 3px 0 #afb6b6, 0 4px 0 #a4adac, 0 5px 0 #9fa8a7, 0 6px 0 #99a3a2, 0 7px 0 #97a1a0, 0 8px 0 #949e9d, 0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3); }\n.shadow_1 {\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); }\n/*==============\nButton animation\n==============*/\n.sim-button {\n  line-height: 30px;\n  height: 38px;\n  text-align: center;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 1px;\n  width: 100%;\n  cursor: pointer;\n  padding: 0px 20px; }\n.button27 {\n  color: #1b3065;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  position: relative;\n  border: 1px solid #1b3065;\n  overflow: hidden;\n  border-radius: 30px;\n  background-color: #ffffff; }\n.button27:hover {\n  border: 1px solid rgba(255, 255, 255, 0);\n  background: #f1f1f1;\n  -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.35);\n          box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.35); }\n.button27 a {\n  color: #333333;\n  text-decoration: none;\n  display: block; }\n.button27::before {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  z-index: 1;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  -webkit-transform: translate(-100%, -600%) rotate(30deg);\n  transform: translate(-100%, -600%) rotate(30deg);\n  background-color: #1b3065;\n  -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);\n  transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1); }\n.button27:hover::before {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n/*===============\nchatbox amination\n===============*/\n@-webkit-keyframes fadeDistortion {\n  0% {\n    opacity: 0;\n    -webkit-transform: skewX(-8deg) skewY(-8deg);\n    transform: skewX(-8deg) skewY(-8deg); }\n  25% {\n    -webkit-transform: skewX(6deg) skewY(6deg);\n    transform: skewX(6deg) skewY(6deg); }\n  50% {\n    -webkit-transform: skewX(-4deg) skewY(-4deg);\n    transform: skewX(-4deg) skewY(-4deg); }\n  75% {\n    -webkit-transform: skewX(2deg) skewY(2deg);\n    transform: skewX(2deg) skewY(2deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeDistortion {\n  0% {\n    opacity: 0;\n    -webkit-transform: skewX(-8deg) skewY(-8deg);\n    transform: skewX(-8deg) skewY(-8deg); }\n  25% {\n    -webkit-transform: skewX(6deg) skewY(6deg);\n    transform: skewX(6deg) skewY(6deg); }\n  50% {\n    -webkit-transform: skewX(-4deg) skewY(-4deg);\n    transform: skewX(-4deg) skewY(-4deg); }\n  75% {\n    -webkit-transform: skewX(2deg) skewY(2deg);\n    transform: skewX(2deg) skewY(2deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n.fadeDistortion {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation-name: fadeDistortion;\n  animation-name: fadeDistortion; }\n/*============\n  Zoom animation\n  ============*/\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.8, 0.8, 0.8);\n    transform: scale3d(0.8, 0.8, 0.8); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.8, 0.8, 0.8);\n    transform: scale3d(0.8, 0.8, 0.8); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n.zoomIn {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn; }\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.8, 0.8, 0.8);\n    transform: scale3d(0.8, 0.8, 0.8); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/*=============\nFade left\n=============*/\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n.fadeInLeft {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft; }\n/*==================================================\n * Effect 7\n * ===============================================*/\n.effect1 {\n  position: relative;\n  -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n  box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15); }\n.effect1:before, .effect1:after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  -webkit-box-shadow: 0 0 20px rgba(111, 111, 111, 0.8);\n  box-shadow: 0 0 20px rgba(111, 111, 111, 0.8);\n  top: 0;\n  bottom: 0;\n  border-radius: 100px; }\n.report_link {\n  color: #fff !important; }\n.fav_clr {\n  color: #cf1628 !important;\n  font-size: 25px !important; }\n.react_clr {\n  color: #cf1616 !important;\n  font-size: 25px !important; }\n.like_btn_color {\n  background-color: #4caf50; }\n.like_btn {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  background-color: transparent !important;\n  padding: 0px; }\n.animate-heart {\n  -webkit-animation-name: likeAnimation;\n          animation-name: likeAnimation;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.65s;\n          animation-duration: 0.65s;\n  color: #cf1628 !important;\n  z-index: 999; }\n.animate-like {\n  -webkit-animation-name: likeAnimation;\n          animation-name: likeAnimation;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  color: #333 !important;\n  z-index: 999; }\n.animate-unlike {\n  -webkit-animation-name: likeAnimation;\n          animation-name: likeAnimation;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  color: #333 !important;\n  z-index: 999; }\n@-webkit-keyframes likeAnimation {\n  0% {\n    -webkit-transform: scale(15);\n            transform: scale(15); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes likeAnimation {\n  0% {\n    -webkit-transform: scale(15);\n            transform: scale(15); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.btn-secondary:hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px); }\n.btn-secondary {\n  display: block;\n  background: #4caf50 !important;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 10px 20px -8px #4caf50;\n          box-shadow: 0 10px 20px -8px #4caf50;\n  padding: 5px 6px;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: #fff;\n  text-decoration: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  float: left;\n  line-height: 0px;\n  margin-right: 5px; }\n.btn-primary:hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px); }\n.btn-primary {\n  display: block;\n  background: #ed2553 !important;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 10px 20px -8px #f04b71;\n          box-shadow: 0 10px 20px -8px #f04b71;\n  padding: 5px 6px;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: #fff;\n  text-decoration: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  line-height: 0px; }\n.btn:not(.btn-link):not(.btn-circle) i {\n  color: #fff; }\n.list-group-item {\n  background: #33628e !important; }\n"

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/*body{background:url(../../assets/images/background.jpg)}*/\n.inner_content {\n  padding: 4em 4em;\n}\n.inner_content_w3_agile_info {\n  margin-top:4.5em;\n}\n.inner_content_w3_agile_info.two_in {\n  margin-top: 4em;\n}\n/*-- registration --*/\n.signin-form {\n/*background: #fafdfd;\n  padding: 3em 2em;\n  text-align: center;*/\n   width: 31%;\n  margin: 0 auto;\n}\n.signin-form h3 {\n  font-size: 2em;\n  color: #212121;\n  font-weight: 700;\n  margin: 1em 0;\n  text-transform: uppercase;\n}\n.signin-form h3 span {\n  color: #67e1ff;\n}\n.signin-form img {\n  border-radius: 50%;\n}\n.login-form {\n  margin: 1em 0 2.5em;\n}\n.signin-form input[type=\"email\"],.signin-form input[type=\"text\"], .signin-form input[type=\"password\"] {\n width: 100%;\n     padding: 0.8em 0.8em;\n  font-size: 1em;\n  margin: 1em 0;\n  outline: none;\n  color: #888;\n  border: none;\n  border: 1px solid #b9c0c3;\n  letter-spacing: 1px;\n  text-align: center;\n}\n.signin-form input[type=\"email\"] {\n  background: none;\n  display: block;\n}\n.signin-form input[type=\"text\"] {\n  background: none;\n  display: block;\n}\n.signin-form input[type=\"password\"] {\n   background: none;\n  display: block;\n}\n::-webkit-input-placeholder{\ncolor:#212121 !important;\n}\n.signin-form input[type=\"button\"] {\n  outline: none;\n     padding: 0.8em 0;\n  width: 100%;\n  text-align: center;\n  font-size: 1.2em;\n  margin-top: 1em;\n  border: none;\n  color: #FFFFFF;\n  cursor: pointer;\n  background: #e53238;\n  -webkit-box-shadow: 0px 2px 1px rgba(28, 28, 29, 0.42);\n          box-shadow: 0px 2px 1px rgba(28, 28, 29, 0.42);\n  font-weight: 600;\n\n}\n.signin-form input[type=\"button\"]:hover {\n\n    background: #007ee5;\n  transition: .5s all;\n-webkit-transition: .5s all;\n  -moz-transition: .5s all;\n  -o-transition: .5s all;\n  -ms-transition: .5s all;\n}\n.signin-form p a {\n  font-size: 0.9em;\n  color: #10364a;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n.login-social-grids{\n  margin: 1em 0;\n}\n.login-social-grids ul {\n  padding: 0;\n  margin: 0;\n}\n.login-social-grids ul li {\n  display: inline-block;\n  margin: 0 .5em 0 0;\n}\n.login-social-grids ul li a {\n  color: #FFFFFF;\n  text-align: center;\n}\n.login-social-grids ul li a i.fa.fa-facebook, .login-social-grids ul li a i.fa.fa-twitter, .login-social-grids ul li a i.fa.fa-rss{\n  height: 30px;\n  width: 30px;\n  border: solid 2px #212121;\n  line-height: 29px;\n  background: none;\n  color: #212121;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n    border-radius: 50%;\n  -webkit-border-radius: 50%;\n    -o-border-radius: 50%;\n  -moz-border-radius: 50%;\n}\n.login-social-grids ul li a i.fa.fa-facebook {\nborder: solid 2px #3b5998;\nbackground:#3b5998;\n  color: #FFFFFF;\n}\n.login-social-grids ul li a i.fa.fa-twitter{\nborder: solid 2px #55acee;\nbackground:#55acee;\ncolor: #FFFFFF;\n}\n.login-social-grids ul li a i.fa.fa-rss{\nborder: solid 2px #f26522;\nbackground:#f26522;\ncolor: #FFFFFF;\n}\n.login-social-grids ul li a:hover{\nopacity:0.6;\n}\n.registration h2 {\n  text-transform: uppercase;\n  color: #000;\nmargin: 0.5em 0 1.5em 0;\n  font-weight:700;\n  font-size: 1.4em;\n  letter-spacing: 1px;\ntext-align: center;\n}\n.pages_agile_info_w3l{\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  -ms-background-size: cover;\n  min-height:800px\n}\n.over_lay_agile_pages_w3ls {\n    padding: 8em 3em 5.5em 3em;\n}\n.registration h6 a {\n  text-transform: uppercase;\n  color: #e53238;\n  font-weight: 700;\n  font-size: 1.1em;\n  letter-spacing: 2px;\n\n}\n.registration h6 {\nmargin-top:1em;\n}\n.registration.error h6 a{\ncolor:#fff;\n}\n.signin-form.profile.admin {\n  background: #f9fbfd;\n  padding: 2em 2em;\n  box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n  -webkit-box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n  -moz-box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n  -o-box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n  border: 1px solid #ddd;\n}\n/* body { background-image: url(../../assets/images/background.jpg);} */\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"inner_content\">\n  <!-- /inner_content_w3_agile_info-->\n<div class=\"inner_content_w3_agile_info\">\n\n\n    <div class=\"registration admin_agile\">\n      \n              <div class=\"signin-form profile admin\">\n                <h2>AIANR Login</h2>\n                <div class=\"login-form\">\n                  <form action=\"main-page.html\" method=\"post\">\n                    <input type=\"text\" name=\"email\" id=\"email\" tabindex=\"1\"  placeholder=\"Email\" value=\"\" [(ngModel)]=\"email\" >\n                    <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\"   placeholder=\"Password\" [(ngModel)]=\"password\">\n                    <div class=\"tp\">\n                      <input type=\"button\" (click)=\"authenticate()\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" value=\"LOGIN\">\n                    </div>\n                    \n                  </form>\n                </div>\n                <!-- <div class=\"login-social-grids admin_w3\">\n                  <ul>\n                    <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-rss\"></i></a></li>\n                  </ul>\n                </div> -->\n\n                 \n              </div>\n\n\n\n  </div>\n<!-- //inner_content_w3_agile_info-->\n</div>\n<!-- //inner_content-->\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_login_service__ = __webpack_require__("./src/app/_service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_global_settings__ = __webpack_require__("./src/app/_class/global-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_router, _http, _loginService, _globalSettings) {
        this._router = _router;
        this._http = _http;
        this._loginService = _loginService;
        this._globalSettings = _globalSettings;
        this.user_details = [];
        document.body.style.backgroundImage = 'url("../../assets/images/background.jpg")';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.clearLocalStorage();
        this.email = 'ManikandanC@quadrupleindia.com';
        this.password = '123456';
    };
    LoginComponent.prototype.clearLocalStorage = function () {
        localStorage.removeItem('employeeName');
        localStorage.removeItem('email');
        localStorage.removeItem('employeeNumber');
        localStorage.removeItem('sessions');
        localStorage.removeItem('chats');
    };
    LoginComponent.prototype.authenticate = function () {
        var _this = this;
        this._loginService.getAuthenticate(this.email, this.password).subscribe(function (response) {
            var res = response.result.data;
            var session = response.result.data.session;
            var currentUser = response.result.data.currentUser;
            var statusCode = response.result.statusCode;
            var successText = response.result.successText;
            var favourites = response.result.data.favourites;
            console.log('currentUser');
            console.log(currentUser);
            console.log(session);
            if (statusCode === 200) {
                _this.lSuccess = successText;
                localStorage.setItem('employeeName', currentUser.employeename);
                localStorage.setItem('email', currentUser.officemailid);
                localStorage.setItem('employeeNumber', currentUser.employeenumber);
                localStorage.setItem('authentication', JSON.stringify(true));
                localStorage.setItem('sessions', JSON.stringify(session));
                localStorage.setItem('conversation_id', '');
                localStorage.setItem('conversation_status', '');
                localStorage.setItem('qa_flag', '1');
                localStorage.setItem('qa_nerformat', '');
                localStorage.setItem('qa_id', '');
                localStorage.setItem('qa_count', '0');
                // setTimeout(() => {
                //   this._router.navigate(['/landing']);
                // },  2000);
                _this._globalSettings.username = localStorage.getItem('employeeName');
                _this._globalSettings.authenticated = JSON.parse(localStorage.getItem('authentication'));
                _this._router.navigate(['/landing']);
            }
            else {
                console.log(successText);
                _this.lError = successText;
            }
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__class_global_settings__["a" /* GlobalSettings */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(_router) {
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem("employeeName");
        localStorage.removeItem("email");
        localStorage.removeItem("employeeNumber");
        localStorage.removeItem("authentication");
        localStorage.removeItem("sessions");
        this._router.navigate(["/login"]);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-logout",
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-default {\n    border: none;\n}\nli{list-style:none;}\na{font-size: 30px;}\n.menu {\n    min-height: 370px;\n    overflow-y: scroll;\n    height: 350px;\n}\n.bg-light-red {\n    background-color: rgb(201, 69, 69) !important;\n    color: #fff;\n}\na{font-size: 26px;}\n.navbar{background: -webkit-gradient(linear, left bottom, left top, from(#ffffff), to(#ffffff));background: linear-gradient(to top, #ffffff 0%, #ffffff 100%);}\n.ai_logo{background: #1b3065; width: 300px;}\n.ai_logo a{width: 100%; left: 0;\n        top: 0;\n        text-align: center;\n        margin: auto;}\n.task{\n    width: 350px;\n}\n.form-control{\n    border: 1px solid #ccc;\n    padding: 10px 10px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 14px;\n}\n.navbar-nav > li > .dropdown-menu {\n    /* margin: 21px -84px 0px 0px !important; */\n}\n.dropdown-menu .header {\n    font-size: 16px;\n    font-weight:bold;\n    min-width: 270px;\n    border-bottom: 1px solid #eee;\n    text-align: center;\n    padding: 12px 0 12px 0;\n    color: #1b3065;\n}\n[type=\"checkbox\"]{\n    width: 15px;\n    height: 15px;\n}\n[type=\"checkbox\"]:not(:checked), [type=\"checkbox\"]:checked {\n    position: absolute;\n    left: 14px !important;\n    opacity: 1 !important;\n}\n/*new*/\n.txt-padding-btm{\n    padding-bottom: 10px;\n}\n.form-group{\n    margin-bottom: 10px !important;\n}\n.icon {\n\twidth:40px;\n\theight:40px;\n\tmargin:10px auto;\n\ttext-align:center;\n\tdisplay:block;\n\tbackground:-webkit-gradient(linear,left top, left bottom,from(#1a58c1),to(#2769da));\n\tbackground:linear-gradient(#1a58c1,#2769da);\t\n\tfont-size:25px;\n\ttransition:all 0.5s ease-in-out;\n\t-webkit-transition:all 0.5s ease-in-out;\n\tcursor:pointer;\t\n    border-radius:50%;\t\n    margin-right: 10px;\n}\n.icon > a > i{color:#fff !important; position: fixed; margin-left: -14px; margin-top:-15px;}\n.icon:hover{transform:translate(0, -10px);-webkit-transform:translate(0, -10px);-webkit-box-shadow:3px 10px 3px #ccc;box-shadow:3px 10px 3px #ccc;}\n.icon:active{-webkit-box-shadow:3px 10px 3px #1a58c1;box-shadow:3px 10px 3px #1a58c1;}\n.icon1 {\n\twidth:40px;\n\theight:40px;\n\tmargin:10px auto;\n\ttext-align:center;\n\tdisplay:block;\n\tbackground:-webkit-gradient(linear,left top, left bottom,from(#b80101),to(#b10000));\n\tbackground:linear-gradient(#b80101,#b10000);\t\n\tfont-size:25px;\n\ttransition:all 0.5s ease-in-out;\n\t-webkit-transition:all 0.5s ease-in-out;\n\tcursor:pointer;\t\n    border-radius:50%;\t\n    margin-right: 10px;\n}\n.icon1 > a > i{color:#fff !important; position: fixed; margin-left: -14px; margin-top:-15px;}\n.icon1:hover{transform:translate(0, -10px);-webkit-transform:translate(0, -10px);-webkit-box-shadow:3px 10px 3px #ccc;box-shadow:3px 10px 3px #ccc;}\n.icon1:active{-webkit-box-shadow:3px 10px 3px #b10000;box-shadow:3px 10px 3px #b10000;}\n/*========pulse========*/\n.pulse {\n\t-webkit-animation-name: pulse_animation;\n\t        animation-name: pulse_animation;\n\t-webkit-animation-duration: 500ms;\n\t        animation-duration: 500ms;\n\t-webkit-transform-origin:70% 70%;\n\t        transform-origin:70% 70%;\n\t-webkit-animation-iteration-count: infinite;\n\t        animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n@-webkit-keyframes pulse_animation {\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\n\t40% { -webkit-transform: scale(1.08); transform: scale(1.08); }\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\n\t70% { -webkit-transform: scale(1.05); transform: scale(1.05); }\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\n}\n@keyframes pulse_animation {\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\n\t40% { -webkit-transform: scale(1.08); transform: scale(1.08); }\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\n\t70% { -webkit-transform: scale(1.05); transform: scale(1.05); }\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\n}\n.shadow_1\n{ text-shadow: 1px 1px 3px rgba(0,0,0,0.5);}\n/* \n\n.custom-checkbox {\n    min-height: 1rem;\n    padding-left: 0;\n    margin-right: 0;\n    cursor: pointer; \n  }\n    .custom-checkbox .custom-control-indicator {\n      content: \"\";\n      display: inline-block;\n      position: relative;\n      width: 30px;\n      height: 10px;\n      background-color: #818181;\n      border-radius: 15px;\n      margin-right: 10px;\n      -webkit-transition: background .3s ease;\n      transition: background .3s ease;\n      vertical-align: middle;\n      margin: 0 16px;\n      box-shadow: none; \n    }\n      .custom-checkbox .custom-control-indicator:after {\n        content: \"\";\n        position: absolute;\n        display: inline-block;\n        width: 18px;\n        height: 18px;\n        background-color: #f1f1f1;\n        border-radius: 21px;\n        box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n        left: -2px;\n        top: -4px;\n        -webkit-transition: left .3s ease, background .3s ease, box-shadow .1s ease;\n        transition: left .3s ease, background .3s ease, box-shadow .1s ease; \n      }\n    .custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n      background-color: #84c7c1;\n      background-image: none;\n      box-shadow: none !important; \n    }\n      .custom-checkbox .custom-control-input:checked ~ .custom-control-indicator:after {\n        background-color: #84c7c1;\n        left: 15px; \n      }\n    .custom-checkbox .custom-control-input:focus ~ .custom-control-indicator {\n      box-shadow: none !important; \n    } */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"\">\n    <div class=\"navbar-header ai_logo\">\n      <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n      <a href=\"javascript:void(0);\" class=\"bars\"></a>\n      <a class=\"navbar-brand\">AIANR </a>\n      <!-- <img src=\"../../assets/images/AIANR_Logo.jpg\" alt=\"User\" /> -->\n\n    </div>\n    <!--dummy-->\n\n    <!--dummy-->\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!-- Call Search -->\n        <li class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"chatbox\">\n          <a class=\"js-search\" data-close=\"true\" routerLink=\"/landing\">\n            <i class=\"material-icons\">chat_bubble</i>\n          </a>\n        </li>\n        <li class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\">\n          <a class=\"js-search\" data-close=\"true\" routerLink=\"/favourite\">\n            <i class=\"material-icons pulse shadow_1\">favorite</i>\n          </a>\n        </li>\n        <li class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Task\">\n            <a class=\"js-search\" data-close=\"true\" routerLink=\"/task\">\n              <i class=\"material-icons\">assignment</i>\n            </a>\n          </li>\n\n          <!-- <li class=\"icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"History\">\n            <a class=\"js-search\" data-close=\"true\" routerLink=\"/taskLogs\">\n              <i class=\"material-icons\">history</i>\n            </a>\n          </li> -->\n\n\n        <li class=\"dropdown icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Notifications\" (click)=\"getReactions()\">\n          <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"material-icons\">notifications</i>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">REACTIONS</li>\n            <li class=\"body\">\n              <ul class=\"menu\">\n                <li *ngFor=\"let item of reactionLists\">\n                  <a href=\"javascript:void(0);\">\n                    <div *ngIf=\"item.reaction == 'like'\" class=\"icon-circle bg-light-green\">\n                      <i class=\"material-icons\">thumb_up</i>\n                    </div>\n                    <div *ngIf=\"item.reaction == 'unlike'\" class=\"icon-circle bg-light-red\">\n                      <i class=\"material-icons\">thumb_down</i>\n                    </div>\n\n                    <div class=\"menu-info\">\n                      <h4>{{ item.question | truncate:[25, '...'] }}\n                      </h4>\n                      <p>\n                        <i class=\"material-icons\">access_time</i> {{item.reacted_at}}</p>\n                    </div>\n                  </a>\n                </li>\n\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"javascript:void(0);\">View All Notifications</a>\n            </li>\n          </ul>\n        </li>\n        <!-- #END# Notifications -->\n        <!-- Tasks -->\n        <!-- <li class=\"dropdown\">\n                    <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                        <i class=\"material-icons\">flag</i>\n                        <span class=\"label-count\">9</span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"header\">TASKS</li>\n                        <li class=\"body\">\n                            <ul class=\"menu tasks\">\n                                <li>\n                                    <a href=\"javascript:void(0);\">\n                                        <h4>\n                                            Footer display issue\n                                            <small>32%</small>\n                                        </h4>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-pink\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 32%\">\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0);\">\n                                        <h4>\n                                            Make new buttons\n                                            <small>45%</small>\n                                        </h4>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-cyan\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0);\">\n                                        <h4>\n                                            Create new dashboard\n                                            <small>54%</small>\n                                        </h4>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-teal\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 54%\">\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0);\">\n                                        <h4>\n                                            Solve transition issue\n                                            <small>65%</small>\n                                        </h4>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-orange\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 65%\">\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0);\">\n                                        <h4>\n                                            Answer GitHub questions\n                                            <small>92%</small>\n                                        </h4>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar bg-purple\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 92%\">\n                                            </div>\n                                        </div>\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"footer\">\n                            <a href=\"javascript:void(0);\">View All Tasks</a>\n                        </li>\n                    </ul>\n                </li> -->\n        <!-- #END# Tasks -->\n        <li class=\"pull-right icon1\">\n          <a href=\"javascript:void(0);\" (click)=\"logout()\" class=\"js-right-sidebar\" data-close=\"true\">\n            <i class=\"material-icons\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">input</i>\n            <!--<ul class=\"dropdown-menu pull-right\">\n              <li>\n                <a href=\"/profile\">\n                  <i class=\"material-icons\">person</i>Profile</a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" (click)=\"logout()\">\n                  <i class=\"material-icons\">input</i>Sign Out</a>\n              </li>\n            </ul>-->\n          </a>\n        </li>\n\n\n\n\n\n\n\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_task_service__ = __webpack_require__("./src/app/_service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_favourite_service__ = __webpack_require__("./src/app/_service/favourite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_task__ = __webpack_require__("./src/app/_model/task.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(_router, _favouriteService, _service) {
        this._router = _router;
        this._favouriteService = _favouriteService;
        this._service = _service;
        this.reactionLists = [];
        this.reportLists = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_4__model_task__["a" /* Task */]();
        this.getReactions();
        this.model.report_id = null;
        this.model.report_name = '';
        this.model.email = false;
        this.model.report = false;
        this.model.daily = false;
        this.model.delay = '';
        this.model.monthly = false;
        this.model.days = '';
        this.model.weekly = false;
        this.model.weekdays = '';
        this.model.receipients = '';
        this.reportLists = [
            { 'id': 1, 'name': 'reportOne' },
            { 'id': 2, 'name': 'reportTwo' },
            { 'id': 3, 'name': 'reportThree' },
            { 'id': 4, 'name': 'reportFour' },
            { 'id': 5, 'name': 'reportFive' },
        ];
        this.model.report_id = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.changeReport = function (event) {
        var index = event.target['options'].selectedIndex;
        var selectElementText = event.target['options'][index].text;
        console.log(selectElementText);
        this.model.report_name = selectElementText;
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('employeeName');
        localStorage.removeItem('email');
        localStorage.removeItem('employeeNumber');
        localStorage.removeItem('authentication');
        localStorage.removeItem('sessions');
        this._router.navigate(['/login']);
    };
    NavbarComponent.prototype.getReactions = function () {
        this.reactionLists = JSON.parse(localStorage.getItem('reactions'));
        console.log(this.reactionLists);
        // this._favouriteService.getReactions().subscribe(response => {
        //   const res = response.result.data.info;
        //   this.reactionLists = res;
        //   localStorage.setItem('reactions', JSON.stringify(res));
        //   console.log('currentUser');
        //   },
        // err => {
        // console.log('error msg');
        // // this.donationlistprovider.showErrorToast(err);
        // });
    };
    NavbarComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    NavbarComponent.prototype.submitTask = function (form, event) {
        console.log(event);
        console.log(this.model);
        if (form.valid) {
            this._service.add(this.model).subscribe(function (res) {
                var response = res['result']['info'];
                console.log(response);
            }, function (err) {
                console.log(err);
                console.log('error msg' + err);
            });
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_favourite_service__["a" /* FavouriteService */], __WEBPACK_IMPORTED_MODULE_0__service_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_favourite_service__["a" /* FavouriteService */], __WEBPACK_IMPORTED_MODULE_0__service_task_service__["a" /* TaskService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".twPc-div {\n    background: #fff none repeat scroll 0 0;\n    border: 1px solid #e1e8ed;\n    border-radius: 6px;\n    height: 300px;\n    max-width: 500px;\n}\n.twPc-bg {\n    background-image: url(\"https://images.readwrite.com/wp-content/uploads/2018/03/High-tech-background-blue-styles-vector-03-e1500621090654.jpg\");\n    background-position: 0 50%;\n    background-size: 100% auto;\n    border-bottom: 1px solid #e1e8ed;\n    border-radius: 4px 4px 0 0;\n    height: 95px;\n    width: 100%;\n}\n.twPc-block {\n    display: block !important;\n}\n.twPc-button {\n    margin: -35px -10px 0;\n    text-align: right;\n    width: 100%;\n}\n.twPc-avatarLink {\n    background-color: #fff;\n    border-radius: 6px;\n    display: inline-block !important;\n    float: left;\n    margin: -30px 5px 0 8px;\n    max-width: 100%;\n    padding: 1px;\n    vertical-align: bottom;\n}\n.twPc-avatarImg {\n    border: 2px solid #fff;\n    border-radius: 7px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    color: #fff;\n    /* height: 72px;\n    width: 72px; */\n    height: 150px;\n    width: 150px;\n}\n.twPc-divUser {\n    margin: 5px 0 0;\n}\n.twPc-divName {\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 21px;\n}\n.twPc-divName a {\n    color: inherit !important;\n}\n.twPc-divStats {\n    margin-left: 11px;\n    padding: 10px 0;\n}\n.twPc-Arrange {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: table;\n    margin: 0;\n    min-width: 100%;\n    padding: 0;\n    table-layout: auto;\n}\nul.twPc-Arrange {\n    list-style: outside none none;\n    margin: 0;\n    padding: 0;\n}\n.twPc-ArrangeSizeFit {\n    display: table-cell;\n    padding: 0;\n    vertical-align: top;\n}\n.twPc-ArrangeSizeFit a:hover {\n    text-decoration: none;\n}\n.twPc-StatValue {\n    display: block;\n    font-size: 18px;\n    font-weight: 500;\n    -webkit-transition: color 0.15s ease-in-out 0s;\n    transition: color 0.15s ease-in-out 0s;\n}\n.twPc-StatLabel {\n    color: #8899a6;\n    font-size: 10px;\n    letter-spacing: 0.02em;\n    overflow: hidden;\n    text-transform: uppercase;\n    -webkit-transition: color 0.15s ease-in-out 0s;\n    transition: color 0.15s ease-in-out 0s;\n}\n/*new*/\nbody {\n    background-color: rgba(217, 236, 253, 1);\n    font: 14px/20px \"Lato\", Arial, sans-serif;\n    padding: 40px 0;\n    color: black;\n  }\n.breadcrumb {\n    padding: 8px 15px !important;\n    margin: 25px 0 0 20px !important;\n    background-color: #ffffff !important;\n    border-radius: 0 !important;\n}\n.breadcrumb > li {\n    color: #666 !important;\n    font-size: 16px !important;\n    vertical-align: middle !important;\n}\n.breadcrumb > .breadcrumb-item > a {\n    color: #ffe001;\n}\nli.breadcrumb-item i.fa.fa-angle-right {\n    font-size: 25px;\n    padding: 0 8px;\n    color: #000;\n    vertical-align: middle;\n}\n.grid-about {\n    /* background: #fff; */\n    margin-bottom: 1em;\n    padding: 1em;\n    /* border-radius: 4px; */\n    /* box-shadow: 0 1px 1px rgba(0,0,0,.05); */\n    margin: 25px 0 0 20px !important;\n}\n.grid-about p{color: #999;}\n.grid-about .section-title {\n    font-family: ralewaybold, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 35px;\n    font-style: normal;\n    text-transform: uppercase;\n    color: #252525;\n}\n.grid-about .section-title-btm {\n    \n        background-color: #ffe001;\n        height: 3px;\n        width: 100px;\n        margin-bottom: 20px;\n    \n    }\n/* pro*/\n.user-details {position: relative; padding: 0;     margin-top: 20px;}\n.user-details .user-image {position: relative;  z-index: 1; width: 100%; text-align: center;}\n.user-image img { clear: both; margin: auto; position: relative;}\n.user-details .user-info-block {width: 100%; position: absolute; top: 55px; background: rgb(255, 255, 255); z-index: 0; padding-top: 35px;}\n.user-info-block .user-heading {width: 100%; text-align: center; margin: 10px 0 0;}\n.user-info-block .navigation {float: left; width: 100%; margin: 0; padding: 0; list-style: none; border-bottom: 1px solid #428BCA; border-top: 1px solid #428BCA;}\n.navigation li {float: left; margin: 0; padding: 0;}\n.navigation li a {padding: 20px 30px; float: left;}\n.navigation li.active a {background: #428BCA; color: #fff;}\n.user-info-block .user-body {float: left; padding: 5%; width: 90%;}\n.user-body .tab-content > div {float: left; width: 100%;}\n.user-body .tab-content h4 {width: 100%; margin: 10px 0; color: #333;}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar ></app-sidebar>\n<section class=\"content-1 zoomIn\">\n  <div class=\"container-fluid\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a><i class=\"fa fa-angle-right\"></i>Profile</li>\n    </ol>\n       <!--<h2 class=\"section-title\"><span>Profile</span></h2>\n      <div class=\"section-title-btm\"></div>\n      <p>I am AIANR Chatbot, an AI-driven Virtual Assistant. I can help you with queries related to Human Resource Management \n        You can type in your queries or you can select the questions from the left side categorized question Menu Bar. From categorized Menu bar you can get the queries in which I am trained to deal with</p>\n      <div class=\"twPc-div\"> <a class=\"twPc-bg twPc-block\"></a>\n        <div> <a title=\"Mert Salih Kaplan\" href=\"https://twitter.com/mertskaplan\" class=\"twPc-avatarLink\"> <img alt=\"Mert Salih Kaplan\" src=\"../../assets/images/user.png\" class=\"twPc-avatarImg\"> </a>\n          <div class=\"twPc-divUser\">\n            <div class=\"twPc-divName\"> <a href=\"https://twitter.com/mertskaplan\">{{_globalSettings.username}}</a> </div>\n            <span> <a href=\"https://twitter.com/mertskaplan\">{{_globalSettings.employeeNumber}}</a> </span> </div>\n          <div class=\"twPc-divStats\">\n            <ul class=\"twPc-Arrange\">\n              <li class=\"twPc-ArrangeSizeFit\"> <a href=\"https://twitter.com/mertskaplan\" title=\"9.840 Tweet\"> <span class=\"twPc-StatLabel twPc-block\">Favourites</span> <span class=\"twPc-StatValue\">{{reactionCount}}</span> </a> </li>\n              <li class=\"twPc-ArrangeSizeFit\"> <a href=\"https://twitter.com/mertskaplan/following\" title=\"885 Following\"> <span class=\"twPc-StatLabel twPc-block\">Reactions</span> <span class=\"twPc-StatValue\">{{favouriteCount}}</span> </a> </li>\n            \n            </ul>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-sm-4 col-md-4 user-details grid-about\">\n          <div class=\"user-image\">\n              <img src=\"http://www.gravatar.com/avatar/2ab7b2009d27ec37bffee791819a090c?s=100&d=mm&r=g\" alt=\"Karan Singh Sisodia\" title=\"Karan Singh Sisodia\" class=\"img-circle\">\n          </div>\n          <div class=\"user-info-block\">\n              <div class=\"user-heading\">\n                  <h3><a href=\"https://twitter.com/mertskaplan\">{{_globalSettings.username}}</a></h3>\n                  <span class=\"help-block\"><a href=\"https://twitter.com/mertskaplan\">{{_globalSettings.employeeNumber}}</a></span>\n              </div>\n              <ul class=\"navigation\">\n                  <li class=\"active\">\n                      <a data-toggle=\"tab\" href=\"#information\">\n                          <span class=\"glyphicon glyphicon-user\"></span>\n                      </a>\n                  </li>\n                  <li>\n                      <a data-toggle=\"tab\" href=\"#settings\">\n                          <span class=\"glyphicon glyphicon-cog\"></span>\n                      </a>\n                  </li>\n                  <li>\n                      <a data-toggle=\"tab\" href=\"#email\">\n                          <span class=\"glyphicon glyphicon-bell\"></span>\n                      </a>\n                  </li>\n                  <li>\n                      <a data-toggle=\"tab\" href=\"#events\">\n                          <span class=\"glyphicon glyphicon-heart\"></span>\n                      </a>\n                  </li>\n              </ul>\n              <div class=\"user-body\">\n                  <div class=\"tab-content\">\n                      <div id=\"information\" class=\"tab-pane active\">\n                          <h4>Account Information</h4>\n                      </div>\n                      <div id=\"settings\" class=\"tab-pane\">\n                          <h4>Settings</h4>\n                      </div>\n                      <div id=\"email\" class=\"tab-pane\">\n                          <h4>{{reactionCount}}</h4>\n                      </div>\n                      <div id=\"events\" class=\"tab-pane\">\n                          <h4>{{favouriteCount}}</h4>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_global_settings__ = __webpack_require__("./src/app/_class/global-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(_globalSettings) {
        this._globalSettings = _globalSettings;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.reactionCount = localStorage.getItem("reactions").length;
        this.favouriteCount = localStorage.getItem("favourites").length;
        this._globalSettings.username = localStorage.getItem("employeeName");
        this._globalSettings.employeeNumber = localStorage.getItem("employeeNumber");
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__class_global_settings__["a" /* GlobalSettings */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  report works!\n</p>\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__("./src/app/report/report.component.html"),
            styles: [__webpack_require__("./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  font-family: \"Roboto\", sans-serif;\n  background: #1c5391;\n  width: 300px;\n  overflow: hidden;\n  display: inline-block;\n  height: calc(100vh - 70px);\n  position: fixed;\n  top: 70px;\n  left: 0;\n  -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 11 !important;\n }\n.sidebar .menu {\n    position: relative;\n    overflow-y: auto;\n    height: 90vh;\n    background: #2d323e;\n    color: #fff;\n}\n.sidebar .menu .list a {\n    color: #fff;\n    position: relative;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    vertical-align: middle;\n    width: 100%;\n    padding: 10px 13px;\n}\n.sidebar .menu .list a span {\n    margin: 7px 0 7px 12px;\n    color: #fff;\n    font-weight: bold;\n    font-size: 14px;\n    overflow: hidden;\n}\n.nav-side-menu {\n  overflow-y: scroll;\n  overflow-x: hidden;\n    font-family: verdana;\n    font-size: 12px;\n    font-weight: 200;\n    position: fixed;\n    top: 200px;\n    width: 300px;\n    min-height: 540px;\n    max-height: 540px;\n    background-size: 100%;\n    background: -webkit-gradient(linear, left top, right top, from(rgba(27, 48, 101,0.8)), to(rgba(43, 76, 130,0.85))),url('side_img.37b58422d48f93833026.jpg') no-repeat;\n    background: linear-gradient(to right, rgba(27, 48, 101,0.8) 0%, rgba(43, 76, 130,0.85) 100%),url('side_img.37b58422d48f93833026.jpg') no-repeat;\n    /* background: rgba(27, 48, 101, 1), url(\"side_img.jpg\"); */\n    /* background-image:url(\"assets/images/side_img.jpg\"); */\n    \n    \n  }\n/* Let's get this party started */\n::-webkit-scrollbar {\n  width: 12px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  border-radius: 10px;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(255,255,255,0.8); \n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n}\n::-webkit-scrollbar-thumb:window-inactive {\nbackground: rgba(255,0,0,0.4); \n}\n/* .layer {\n    background-color: rgba(27, 48, 101, 0.7);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n} */\n.nav-side-menu .brand {\n    background-color: #23282e;\n    line-height: 50px;\n    display: block;\n    text-align: center;\n    font-size: 14px;\n  }\n.nav-side-menu .toggle-btn {\n    display: none;\n  }\n.nav-side-menu ul,\n  .nav-side-menu li {\n    list-style: none;\n    padding: 0px;\n    margin: 0px;\n    line-height: 45px;\n    cursor: pointer;\n    color: #d9ecfd;\n    /*    \n      .collapsed{\n         .arrow:before{\n                   font-family: FontAwesome;\n                   content: \"\\f053\";\n                   display: inline-block;\n                   padding-left:10px;\n                   padding-right: 10px;\n                   vertical-align: middle;\n                   float:right;\n              }\n       }\n  */\n  }\n.nav-side-menu ul :not(collapsed) .arrow:before,\n  .nav-side-menu li :not(collapsed) .arrow:before {\n    font-family: FontAwesome;\n    content: \"\\f078\";\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 10px;\n    vertical-align: middle;\n    float: right;\n   \n  }\n.nav-side-menu ul .active,\n  .nav-side-menu li .active {\n    border-left: 3px solid #ffffff;\n    font-size: 12px;\n    font-weight: 600;\n    color: #333\n    /* padding: 8px 16px; */\n   \n  }\n.nav-side-menu ul .sub-menu li.active,\n  .nav-side-menu li .sub-menu li.active {\n    color: #d19b3d;\n  }\n.nav-side-menu ul .sub-menu li.active a,\n  .nav-side-menu li .sub-menu li.active a {\n    color: #d19b3d;\n  }\n.nav-side-menu ul .sub-menu li,\n  .nav-side-menu li .sub-menu li {\n    background-color: #183168;\n    border: none;\n    line-height: 18px;\n    border-bottom: 1px solid #727272; \n    margin-left: 0px;\n    padding: 10px;\n  }\n.nav-side-menu ul .sub-menu li:hover,\n  .nav-side-menu li .sub-menu li:hover {\n    background-color: #2f4d91;\n  }\n.nav-side-menu ul .sub-menu li:before,\n  .nav-side-menu li .sub-menu li:before {\n    font-family: FontAwesome;\n    content: \"\\f105\";\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 10px;\n    vertical-align: middle;\n  }\n.nav-side-menu li {\n    padding-left: 0px;\n    border-left: 3px solid #2e353d;\n   /* border-bottom: 1px solid #23282e;*/\n  }\n.nav-side-menu li a {\n    text-decoration: none;\n    color: #ffffff;\n    font-size: 14px;\n  }\n.nav-side-menu li a i {\n    padding-left: 10px;\n    width: 20px;\n    padding-right: 20px;\n    margin: 7px 0 7px 12px;\n    color: #fff;\n  }\n.nav-side-menu li:hover {\n    border-left: 3px solid #fff;\n    background-color: #183168;\n    -webkit-transition: all 1s ease;\n    transition: all 1s ease;\n    color: #23282e;\n  }\n/*-------------\n  MENU\n  -------------*/\n.sidebar .menu .list .header {\n    background: #eee;\n    font-size: 12px;\n    font-weight: 600;\n    padding: 8px 16px;\n}\n/*----------*/\n@media (max-width: 767px) {\n    .nav-side-menu {\n      position: relative;\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .nav-side-menu .toggle-btn {\n      display: block;\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      z-index: 10 !important;\n      padding: 3px;\n      background-color: #ffffff;\n      color: #000;\n      width: 40px;\n      text-align: center;\n    }\n    .brand {\n      text-align: left !important;\n      font-size: 22px;\n      padding-left: 20px;\n      line-height: 50px !important;\n    }\n  }\n@media (min-width: 767px) {\n    .nav-side-menu .menu-list .menu-content {\n      display: block;\n    }\n  }\n* {\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n  }\nhtml, body {\n    background: #222;\n    font-family: 'Lato', sans-serif;\n  }\n.menu {\n    width: 330px;\n    height: 550px;\n    -webkit-box-shadow: 0px 10px 50px rgba(0,0,0,.6);\n            box-shadow: 0px 10px 50px rgba(0,0,0,.6);\n    overflow: hidden;\n    color: rgba(255, 255, 255, .9);\n    font-weight: 200;\n    position: relative;\n    /* margin: 60px auto; */\n    z-index: 1;\n  }\n.menu:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: url('side_img.37b58422d48f93833026.jpg');\n    background-size: cover;\n    position: absolute;\n    left: 0;\n    right: 0;\n    z-index: -1;\n    -webkit-filter: blur(4px);\n            filter: blur(4px);\n  }\n.search {\n    height: 50px;\n    background: rgba(255,255,255,.06);\n    padding: 18px;\n    font-size: 14px;\n  }\n.search:focus {\n    outline: none;\n  }\n.search:empty:not(:focus):before{\n    content:attr(data-ph);\n    font-size: 12px;\n    font-weight: 300;\n    margin: 10px;\n  }\n.info {\n    height: 100px;\n    background: rgba(255,255,255,.06);\n    border-top: 3px solid rgba(0, 0, 0, .1);\n  }\n.stats {\n    float: left;\n    height: 100%;\n    width: 33.33%;\n    font-size: 22px;\n    font-weight: 300;\n    text-align: center;\n    padding: 25px;\n  }\n.stats span {\n    display: block;\n    padding: 2px;\n    font-size: 12px;\n    font-weight: 200;\n  }\n.menu ul {\n    height: 400px;\n    margin: 0;\n    padding: 0;\n  }\n.menu ul:hover {\n    cursor: pointer;\n  }\n.menu ul li {\n    display: block;\n    height: 50px;\n    background: #fff;\n    background: rgba(0,0,0,.2);\n    border-top: 3px solid rgba(0, 0, 0, .2);\n    line-height: 50px;\n    padding-left: 20px;\n    position: relative;\n    overflow: hidden;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n.menu ul li:hover {\n    background: rgba(255,255,255,.05);\n  }\n.menu ul li i {\n    margin-right: 16px;\n  }\n.menu ul li .notification {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin: 20px;\n    line-height: 17px;\n    text-align: center;\n    background: #FF4136;\n    border-radius: 50%;\n    font-size: 8px;\n    font-weight: 700;\n    position: absolute;\n    top: -6px; left: 76px;\n  }\n.menu ul li a{color: #ffffff;\n    text-decoration: none; }\n.menu ul li a:hover{color: #ffe001;\n  text-decoration: none; }\n.menu ul li a ul li{color: #ffffff;\n    text-decoration: none;  background-color: transparent;}\n/*  Ripple */\n.ripple {\n    width: 0;\n    height: 0;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.4);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    position: absolute;\n    opacity: 1;\n  }\n.rippleEffect {\n    -webkit-animation: rippleDrop .6s linear;\n            animation: rippleDrop .6s linear;\n  }\n@-webkit-keyframes rippleDrop {\n    100% {\n      -webkit-transform: scale(2);\n              transform: scale(2);\n      opacity: 0;\n    }\n  }\n@keyframes rippleDrop {\n    100% {\n      -webkit-transform: scale(2);\n              transform: scale(2);\n      opacity: 0;\n    }\n  }\n/* new menu */\nul, ol {\n  list-style: none;\n}\n#accordion1 li.panel{\n    margin-bottom: 0px;\n}\n.back_sidebar{\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 87, 153,0.95)),to(rgba(30, 87, 153,0.95))), url('side_img.37b58422d48f93833026.jpg');\n  background: linear-gradient(to bottom, rgba(30, 87, 153,0.95) 0%,rgba(30, 87, 153,0.95) 100%), url('side_img.37b58422d48f93833026.jpg');\n}\n.back_sidebar li a {\n  color:#fff;\n}\n.back_sidebar li a i{\n  margin-right: 10px;  \n}\n.back_sidebar li ul li  {\n  color:#fff;\n  padding: 10px 0px;\n  border-top: 3px solid rgba(0, 0, 0, .2);\n}\n.panel{\n  background: transparent;\n}\n.nav > li > a {\n  border-top: 3px solid rgba(0, 0, 0, .2);\n}\n.collapse.in {\n  padding-left: 15px !important;\n}\n.scroll_container {\n  height:500px;\n  overflow:hidden;\n  text-align:justify;\n}\n.scroll_link {\n  position:relative;\n  height:500px;\n  top:-17px;\n  padding:20px 10px 20px 10px;\n  overflow-y:auto;\n}\n.top_bottom_mask {\n\tposition:absolute;\n\toverflow:hidden;\n\twidth:17px;\n\theight:10px;\n}\n.left_right_mask {\n\tposition:absolute;\n\twidth:0px;\n\tborder:1px solid #000000;\n}\n.corner_top_mask, .corner_bottom_mask {\n\tposition:relative;\n\tleft:-2px;\n\tborder:6px solid #000000;\n\theight:20px;\n\twidth:13px;\n\tborder-radius:16px;\n}\n.corner_top_mask {\n\ttop:-3px;\n    left:-4px;\n}\n.corner_bottom_mask {\n\ttop:-18px;\n    left:-4px;\n}\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"leftsidebar\" class=\"sidebar\">\n    <!-- User Info -->\n    <div class=\"user-info\" (click)=\"gotoProfile()\">\n      <div class=\"image\" >\n        <img src=\"../../assets/images/user.png\" width=\"48\" height=\"48\" alt=\"User\"   />\n      </div>\n      <div class=\"info-container\">\n        <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{_globalSettings.username}}</div>\n        <div class=\"email\">{{_globalSettings.email}}</div>\n\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"scroll_container\">\n          <ul class=\"nav nav-stacked back_sidebar scroll_link\" id=\"accordion1\">\n\n            <li>\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                <i class=\"fa fa-home\"></i>Dashboard</a>\n            </li>\n\n            <li class=\"panel\" *ngFor=\"let item of menu let i=index\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#{{item.link}}\">\n                <i class=\"fa fa-briefcase\"></i>{{item.name}}</a>\n              <ul id=\"{{item.link}}\" class=\"collapse\" >\n                <li *ngFor=\"let data of item.categoryList\" (click)=\"sendMessage(data.questions)\">\n                  <a href=\"javascript:void(0);\">{{data.questions}}</a>\n                </li>\n              </ul>\n\n            </li>\n            <li>\n              <a routerLinkActive=\"about\" [routerLink]=\"['/about']\">\n                <i class=\"fa fa-file-text\"></i>About</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"top_bottom_mask\" style=\"left:413px; top:10px;\">\n          <div class=\"corner_top_mask\"></div>\n        </div>\n        <div class=\"left_right_mask\" style=\"left:413px; top:11px; height:418px;\"></div>\n        <div class=\"left_right_mask\" style=\"left:428px; top:10px; height:418px;\"></div>\n        <div class=\"top_bottom_mask\" style=\"left:413px; top:420px;\">\n          <div class=\"corner_bottom_mask\"></div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_common_service__ = __webpack_require__("./src/app/_service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_global_settings__ = __webpack_require__("./src/app/_class/global-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menuList__ = __webpack_require__("./src/app/_shared/menuList.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = (function () {
    function SidebarComponent(_router, _globalSettings, el, renderer, _commonService) {
        this._router = _router;
        this._globalSettings = _globalSettings;
        this.el = el;
        this.renderer = renderer;
        this._commonService = _commonService;
        this.message = 'Hello angular';
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        this.leaves = [];
        this.otSchedules = [];
        this.empBenefits = [];
        this.reports = [];
        this.innerHeight = (window.screen.height) + 'px';
        this.innerWidth = (window.screen.width) + 'px';
        this.menu = __WEBPACK_IMPORTED_MODULE_4__shared_menuList__["a" /* _menuList */];
        console.log(this.menu);
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this._globalSettings.username = localStorage.getItem('employeeName');
        this._globalSettings.email = localStorage.getItem('email');
        // this.loadQuestions();
    };
    SidebarComponent.prototype.sendMessage = function (msg) {
        console.log(msg);
        this.messageEvent.emit(msg);
    };
    SidebarComponent.prototype.logout = function () {
        localStorage.removeItem('employeeName');
        localStorage.removeItem('email');
        localStorage.removeItem('employeeNumber');
        localStorage.removeItem('authentication');
        localStorage.removeItem('sessions');
        this._router.navigate(['/login']);
    };
    SidebarComponent.prototype.menuToggle = function (event) {
        // console.log(event);
        var input = this.el.nativeElement.querySelector('.menu-li');
        console.log(input);
        console.log(input.children[0].classList);
        console.log(input.children[0].classList.contains('toggled'));
        if (input.children[0].classList.contains('toggled')) {
            console.log('TRUE');
            // input.children[0].classList.contains('toggled')
            this.renderer.setElementClass(input.children[0], 'toggled', false);
        }
        else {
            console.log('FALSE');
            this.renderer.setElementClass(input.children[0], 'toggled', true);
        }
    };
    SidebarComponent.prototype.gotoProfile = function () {
        this._router.navigate(['/profile']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "messageEvent", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__service_common_service__["a" /* CommonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__class_global_settings__["a" /* GlobalSettings */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["X" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__service_common_service__["a" /* CommonService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/task-logs/task-logs.component.css":
/***/ (function(module, exports) {

module.exports = "li{list-style:none;}\na{font-size: 30px;}\n.menu {\n    min-height: 370px;\n    overflow-y: scroll;\n    height: 350px;\n}\n.bg-light-red {\n    background-color: rgb(201, 69, 69) !important;\n    color: #fff;\n}\na{font-size: 26px;}\n.navbar{background: -webkit-gradient(linear, left bottom, left top, from(#ffffff), to(#ffffff));background: linear-gradient(to top, #ffffff 0%, #ffffff 100%);}\n.ai_logo{background: #1b3065; width: 300px;}\n.ai_logo a{width: 100%; left: 0;\n        top: 0;\n        text-align: center;\n        margin: auto;}\n.task{\n    width: 650px;\n}\n.form-control{\n    border: 1px solid #ccc;\n    padding: 10px 10px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 14px;\n}\n.navbar-nav > li > .dropdown-menu {\n    margin: 21px -84px 0px 0px !important;\n}\n.dropdown-menu .header {\n    font-size: 16px;\n    font-weight:bold;\n    min-width: 270px;\n    border-bottom: 1px solid #eee;\n    text-align: center;\n    padding: 12px 0 12px 0;\n}\n[type=\"checkbox\"]{\n    width: 15px;\n    height: 15px;\n}\n[type=\"checkbox\"]:not(:checked), [type=\"checkbox\"]:checked {\n    position: absolute;\n    left: 14px !important;\n    opacity: 1 !important;\n}\n.btn-outline-success, .btn-outline-danger , .btn-outline-warning{\n    border-radius: 0px;\n}\n.btn-outline-success {\n    color: #4dbd74;\n    background-color: transparent;\n    background-image: none;\n    border-color: #4dbd74;\n}\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #4dbd74;\n    border-color: #4dbd74;\n}\n.btn-outline-danger {\n    color: #f86c6b;\n    background-color: transparent;\n    background-image: none;\n    border-color: #f86c6b;\n}\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #f86c6b;\n    border-color: #f86c6b;\n}\n.btn-outline-warning {\n    color: #f18f00;\n    background-color: transparent;\n    background-image: none;\n    border-color: #f18f00;\n}\n.btn-outline-warning:hover {\n    color: #fff;\n    background-color: #f18f00;\n    border-color: #f18f00;\n}\n.btn-outline-success, .btn-outline-danger{\n  border-radius: 4px;\n}\n.btn-outline-success {\n  color: #4dbd74;\n  background-color: transparent;\n  background-image: none;\n  border-color: #4dbd74;\n}\n.btn-outline-danger {\n  color: #f86c6b;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f86c6b;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #4dbd74;\n  border-color: #4dbd74;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #f86c6b;\n  border-color: #f86c6b;\n}\n.btn-sky {\n  color: #fff !important;\n  background-color: #0bacd3;\n  border-bottom:2px solid #098aa9 !important;\n  margin-bottom: 10px;\n  border-radius: 25px !important;\n  margin-right: 10px;\n  }\n.btn-sky:hover,.btn-sky.active:focus, .btn-sky:focus, .open>.dropdown-toggle.btn-sky {\n  color: #fff !important;\n  background-color: #29b6d8;\n  border-bottom:2px solid #2192ad !important;\n  outline: none;\n  margin-bottom: 10px;\n  }\n.btn-sky:active, .btn-sky.active {\n  color: #fff !important;\n  background-color: #0a97b9;\n  border-top:4px solid #087994;\n  outline-offset: none;\n  margin-top: 2px;\n  margin-bottom: 10px;\n  }\n/*April-18*/\n.form-group {\nmargin-top: 10px !important;\n}\n"

/***/ }),

/***/ "./src/app/task-logs/task-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar (messageEvent)=\"receivedMessage($event)\"></app-sidebar>\n\n<section class=\"content zoomIn\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n\n\n      <div class=\"col-md-11\">\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-heading\">\n\n              <div class=\"pull-right ai_back\">\n                  <button type=\"button\" class=\"btn btn-sky text-uppercase btn-sm\" (click)=\"goBackCall()\">\n                          <span class=\"btn-label\"><i class=\"glyphicon glyphicon-chevron-left\"></i></span>\n                      Back</button>\n                </div>\n\n            <i class=\"material-icons\">history</i>\n            <span>Task Logs List</span>\n          </div>\n          <div class=\"panel-body\">\n\n            <table class=\"table table-sm table-striped\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Task Name</th>\n                  <th>Report Name</th>\n                  <th>Employee Name</th>\n                  <th>Employee No</th>\n                  <th>Receipients</th>\n                  <th>Mailed date</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td>{{item._source.taskname}}</td>\n                  <td>{{item._source.report_name}}</td>\n                  <td>{{item._source.employeename}}</td>\n                  <td>{{item._source.employeenumber}}</td>\n                  <td>{{item._source.mail_cc}}</td>\n                  <td>{{item._source.mailed_date | date: 'dd-MM-yyyy hh:mm'}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-outline-warning\" data-toggle=\"modal\" (click)=\"deleteModalFunc(item._id)\">\n                        <i class=\"material-icons\">archive</i>\n\n                    </button>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n              <pagination-controls (pageChange)=\"pageChanged($event)\" ></pagination-controls>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/task-logs/task-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_task_logs_service__ = __webpack_require__("./src/app/_service/task-logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskLogsComponent = (function () {
    function TaskLogsComponent(_service, _location) {
        this._service = _service;
        this._location = _location;
        this.items = [];
        this.p = 1;
    }
    TaskLogsComponent.prototype.ngOnInit = function () {
        this.init();
    };
    TaskLogsComponent.prototype.init = function () {
        var _this = this;
        this._service.get().subscribe(function (response) {
            var res = response.result;
            if (res.statusCode === 200) {
                _this.items = res.info.hits.hits;
                _this.collection = _this.items;
            }
            if (res.statusCode === 204) {
                console.log(res.successText);
            }
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    TaskLogsComponent.prototype.pageChanged = function ($event) {
        console.log($event);
        this.p = $event;
    };
    TaskLogsComponent.prototype.goBackCall = function () {
        this._location.back();
    };
    TaskLogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-task-logs',
            template: __webpack_require__("./src/app/task-logs/task-logs.component.html"),
            styles: [__webpack_require__("./src/app/task-logs/task-logs.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_task_logs_service__["a" /* TaskLogsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_task_logs_service__["a" /* TaskLogsService */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */]])
    ], TaskLogsComponent);
    return TaskLogsComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/***/ (function(module, exports) {

module.exports = "/* new*/\nbody{\n    font-family: 'Muli', sans-serif;\n}\n.txt_boby{\n    float:left;\n    background: #ffffff;\n    border-radius: 4px;\n    color: #434651;\n}\n.txt-padding-btm{\n    padding-bottom: 10px;\n    margin-top: 20px;\n}\n.panel-heading h3{margin-top:5px !important;font-size: 18px;color: #1b3065;}\n.button2 {cursor: pointer;\n-webkit-transition-duration: 0.4s; /* Safari */\ntransition-duration: 0.4s;}\n.button2:hover {\n    -webkit-box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n/*==================================================\n * Effect\n * ===============================================*/\n.effect1\n {\n     position:relative;\n     -webkit-box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n             box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.15);\n }\n.effect1:before, .effect1:after\n {\n     content:\"\";\n     position:absolute;\n     z-index:-1;\n     -webkit-box-shadow:0 0 20px rgba(111,111,111,0.8);\n     box-shadow:0 0 20px rgba(111,111,111,0.8);\n     top:0;\n     bottom:0;\n     border-radius:100px;\n }\n.material_assignment i\n{position: relative;\n    top: 4px;\n    display: inline;}\nli{list-style:none;}\na{font-size: 30px;}\n.menu {\n    min-height: 370px;\n    overflow-y: scroll;\n    height: 350px;\n}\n.bg-light-red {\n    background-color: rgb(201, 69, 69) !important;\n    color: #fff;\n}\na{font-size: 26px;}\n.navbar{background: -webkit-gradient(linear, left bottom, left top, from(#ffffff), to(#ffffff));background: linear-gradient(to top, #ffffff 0%, #ffffff 100%);}\n.ai_logo{background: #1b3065; width: 300px;}\n.ai_logo a{width: 100%; left: 0;\n        top: 0;\n        text-align: center;\n        margin: auto;}\n.task{\n    width: 650px;\n}\n.form-control{\n    border: 1px solid #ccc;\n    padding: 10px 10px;\n    height: 40px;\n    font-weight: 500;\n    font-size: 14px;\n}\n.navbar-nav > li > .dropdown-menu {\n    margin: 21px -84px 0px 0px !important;\n}\n.dropdown-menu .header {\n    font-size: 16px;\n    font-weight:bold;\n    min-width: 270px;\n    border-bottom: 1px solid #eee;\n    text-align: center;\n    padding: 12px 0 12px 0;\n}\n[type=\"checkbox\"]{\n    width: 15px;\n    height: 15px;\n}\n[type=\"checkbox\"]:not(:checked), [type=\"checkbox\"]:checked {\n    position: absolute;\n    left: 14px !important;\n    opacity: 1 !important;\n}\n.btn-outline-success, .btn-outline-danger{\n    border-radius: 4px;\n}\n.btn-outline-success {\n    color: #4dbd74;\n    background-color: transparent;\n    background-image: none;\n    border-color: #4dbd74;\n}\n.btn-outline-danger {\n    color: #f86c6b;\n    background-color: transparent;\n    background-image: none;\n    border-color: #f86c6b;\n}\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #4dbd74;\n    border-color: #4dbd74;\n}\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #f86c6b;\n    border-color: #f86c6b;\n}\n.btn-sky {\n    color: #fff !important;\n    background-color: #0bacd3;\n    border-bottom:2px solid #098aa9 !important;\n    margin-bottom: 10px;\n    border-radius: 25px !important;\n    margin-right: 10px;\n    }\n.btn-sky:hover,.btn-sky.active:focus, .btn-sky:focus, .open>.dropdown-toggle.btn-sky {\n    color: #fff !important;\n    background-color: #29b6d8;\n    border-bottom:2px solid #2192ad !important;\n    outline: none;\n    margin-bottom: 10px;\n    }\n.btn-sky:active, .btn-sky.active {\n    color: #fff !important;\n    background-color: #0a97b9;\n    border-top:4px solid #087994;\n    outline-offset: none;\n    margin-top: 2px;\n    margin-bottom: 10px;\n    }\n/*April-18*/\n.form-group {\n  margin-top: 10px !important;\n}\n"

/***/ }),

/***/ "./src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar (messageEvent)=\"receivedMessage($event)\"></app-sidebar>\n\n\n<section class=\"content zoomIn txt_boby effect1\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n              <h3><span class=\"material_assignment\"><i class=\"material-icons\">assignment</i></span> Task List\n                <div class=\"pull-right\">\n                  <!-- <button type=\"button\" class=\"btn btn-sm btn-primary button2\" (click)=\"createModalFunc(createForm)\">\n                    <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Create\n                  </button> -->\n                  <button type=\"button\" class=\"btn btn-sky text-uppercase btn-sm\" (click)=\"createModalFunc(createForm)\">\n                      <span class=\"btn-label\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>\n                      Create</button>\n                      <button type=\"button\" class=\"btn btn-sky text-uppercase btn-sm\" (click)=\"gotoHistory()\">\n                          <span class=\"btn-label\"><i class=\"fa fa-history\" aria-hidden=\"true\" style=\"color:rgb(255, 255, 255)\"></i></span>\n                          History</button>\n                          <button type=\"button\" class=\"btn btn-sky text-uppercase btn-sm\" (click)=\"executeNow()\">\n                            <span class=\"btn-label\"><i class=\"fa fa-history\" aria-hidden=\"true\" style=\"color:rgb(255, 255, 255)\"></i></span>\n                            Execute Now</button>\n                </div>\n              </h3>\n            <!-- <i class=\"material-icons\">assignment</i>\n            <span>Task List</span> -->\n\n\n          </div>\n          <div class=\"panel-body\">\n\n            <table class=\"table table-sm table-striped\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Report Name</th>\n                  <th>Report Url</th>\n                  <th>Receipients</th>\n                  <th>Created date</th>\n                  <th>Modified date</th>\n                  <th>Status</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <th> <label>\n                    <input type=\"checkbox\" name=\"options\" value=\"{{item._source.checked}}\" [(ngModel)] =\"item._source.checked\" /> {{item._id}}</label></th>\n                  <td>{{item._source.report_name}}</td>\n                  <td>{{item._source.employeenumber}}</td>\n                  <td><span class=\"label label-primary\" data-placement=\"top\" data-toggle=\"tooltip\" title=\"{{item._source.receipients | customJson}}\">{{item._source.receipients | customJson | truncate:[50, '...']}}</span></td>\n                  <td>{{item._source.created_at | date: 'dd-MM-yyyy hh:mm'}}</td>\n                  <td>{{item._source.updated_at | date: 'dd-MM-yyyy hh:mm'}}</td>\n                  <td>\n                    <span class=\"label label-success\">Active</span>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-outline-success button2\" data-toggle=\"modal\" (click)=\"edit(item._source,item._id)\">\n                      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-outline-danger button2\" data-toggle=\"modal\" (click)=\"deleteModalFunc(item._id)\">\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </button>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Child modal</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            I am a child modal, opened from parent component!\n          </div>\n        </div>\n      </div>\n    </div> -->\n</section>\n\n\n\n\n<div bsModal #createModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog  modal-md\" role=\"document\">\n    <div class=\"modal-content\">\n\n\n\n\n      <form (ngSubmit)=\"create(createForm)\" #createForm=\"ngForm\" novalidate>\n          <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"createModal.hide()\" aria-label=\"Close\">&times;</button>\n              <h4 class=\"modal-title\">Create</h4>\n            </div>\n        <!--<div class=\"modal-header\">\n          <h4 class=\"modal-title\">Create </h4>\n          <button type=\"button\" class=\"close\" (click)=\"createModal.hide()\" aria-label=\"Close\">\n\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>-->\n        <div class=\"modal-body\">\n\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n\n\n\n\n              <select name=\"report_id\" class=\"form-control input-sm\" [(ngModel)]=\"model.report_id\" #report_id=\"ngModel\" (change)=\"changeReport($event)\"\n                required>\n                <option value=\"\"> Select Option </option>\n                <option *ngFor=\"let row of reportLists\" [ngValue]=\"row._source.report_id\">\n                  {{row._source.report_name}}\n                </option>\n\n              </select>\n              <input type=\"hidden\" name=\"report_name\" [(ngModel)]=\"model.report_name\" />\n\n              <div style=\"color:red\" *ngIf=\"report_id.errors && (report_id.dirty || report_id.touched || createForm.submitted)\">\n                <span class=\"help-block\" *ngIf=\"report_id.errors.required\" style=\"color:red\">\n                  This field is required.\n                </span>\n              </div>\n\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 txt-padding-btm\">\n                <div class=\"checkbox-inline\">\n                <label>\n                  <input checked=\"\" type=\"checkbox\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" [checked]=\"model.email\"> Email\n                </label>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 txt-padding-btm\">\n                <div class=\"checkbox-inline\">\n                  <label>\n                    <input checked=\"\" type=\"checkbox\" name=\"report\" id=\"report\" [(ngModel)]=\"model.report\" [checked]=\"model.report\"> Report\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-lg-12\">\n\n                     <tag-input [(ngModel)]=\"model.receipients\" [ngModel]=\"['@item']\" name=\"receipients\" [theme]=\"'dark'\"  [editable]=\"true\"\n                       [onlyFromAutocomplete]=\"false\">\n                <tag-input-dropdown [showDropdownIfEmpty]=\"false\"\n                                    [dynamicUpdate]=\"false\"\n                                    [focusFirstElement]=\"true\"\n                                    [zIndex]=\"10000\"\n                                    [displayBy]=\"'value'\"\n                                    [identifyBy]=\"'id'\"\n                                    [autocompleteItems]=\"autocompleteItemsAsObjects\">\n                    <ng-template let-item=\"item\" let-index=\"index\">\n                        ({{ index }}) {{ item.id }}: {{ item.value }}\n                    </ng-template>\n                </tag-input-dropdown>\n            </tag-input>\n\n\n                  <!-- <input type=\"email\" name=\"receipients\" id=\"receipients\" class=\"form-control input-sm\" placeholder=\"Email Address\" [(ngModel)]=\"model.receipients\"> -->\n              </div>\n                  <div class=\"col-xs-4 col-sm-4 col-md-4 txt-padding-btm\">\n                    <div class=\"checkbox-inline\">\n                      <label>\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"daily\" name=\"daily\" [(ngModel)]=\"model.daily\" >Daily\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"model.daily\" >\n                      <select name=\"delay\" class=\"form-control input-sm\" [(ngModel)]=\"model.delay\">\n                        <option value=\"0\"> Select </option>\n                        <option value=\"1\"> Now</option>\n                        <option value=\"2\"> Later</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-4 col-sm-4 col-md-4 txt-padding-btm\">\n                    <div class=\"checkbox-inline\">\n                      <label>\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"weekly\" name=\"weekly\" [(ngModel)]=\"model.weekly\">Weekly\n                      </label>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"model.weekly\">\n                      <select name=\"weekdays\" class=\"form-control input-sm\" [(ngModel)]=\"model.weekdays\">\n                        <option value=\"1\"> Sunday</option>\n                        <option value=\"2\"> Monday</option>\n                        <option value=\"3\"> Tuesday</option>\n                        <option value=\"4\"> Wednesday</option>\n                        <option value=\"5\"> Thursday</option>\n                        <option value=\"6\"> Friday</option>\n                        <option value=\"7\"> Saturday</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-4 col-sm-4 col-md-4 txt-padding-btm\">\n                    <div class=\"checkbox-inline\">\n                      <label>\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"monthly\" name=\"monthly\" [(ngModel)]=\"model.monthly\">Monthly\n                      </label>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"model.monthly\">\n                      <select name=\"days\" class=\"form-control input-sm\" [(ngModel)]=\"model.days\">\n                        <option value=\"1\" *ngFor='let in of counter(31) ;let i = index'> {{i+1}}</option>\n                      </select>\n                    </div>\n\n                  </div>\n\n            <!-- <div class=\"row\">\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\"> Email\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" [checked]=\"model.email\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n              </div>\n\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\"> Report\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"report\" id=\"report\" [(ngModel)]=\"model.report\" [checked]=\"model.report\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n              </div>\n\n\n            </div>\n\n\n\n            <div class=\"form-group\">\n              <input type=\"email\" name=\"receipients\" id=\"receipients\" class=\"form-control input-sm\" placeholder=\"Email Address\" [(ngModel)]=\"model.receipients\">\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\"> daily\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"daily\" name=\"daily\" [(ngModel)]=\"model.daily\" >\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n                <div class=\"form-group\" *ngIf=\"model.daily\" >\n                  <select name=\"delay\" class=\"form-control input-sm\" [(ngModel)]=\"model.delay\">\n                    <option value=\"0\"> Select </option>\n                    <option value=\"1\"> Now</option>\n                    <option value=\"2\"> Later</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\"> weekly\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"weekly\" name=\"weekly\" [(ngModel)]=\"model.weekly\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n                <div class=\"form-group\" *ngIf=\"model.weekly\">\n                  <select name=\"weekdays\" class=\"form-control input-sm\" [(ngModel)]=\"model.weekdays\">\n                    <option value=\"1\"> Sunday</option>\n                    <option value=\"2\"> Monday</option>\n                    <option value=\"3\"> Tuesday</option>\n                    <option value=\"4\"> Wednesday</option>\n                    <option value=\"5\"> Thursday</option>\n                    <option value=\"6\"> Friday</option>\n                    <option value=\"7\"> Saturday</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                <div class=\"form-group\">\n                  <label class=\"custom-control custom-checkbox\"> monthly\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"monthly\" name=\"monthly\" [(ngModel)]=\"model.monthly\">\n                    <span class=\"custom-control-indicator\"></span>\n                  </label>\n                </div>\n\n                <div class=\"form-group\" *ngIf=\"model.monthly\">\n                  <select name=\"days\" class=\"form-control input-sm\" [(ngModel)]=\"model.days\">\n                    <option value=\"1\" *ngFor='let in of counter(31) ;let i = index'> {{i+1}}</option>\n                  </select>\n                </div>\n\n              </div>\n\n            </div>-->\n\n          </div>\n          <!--/.row-->\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createModal.hide()\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Save </button>\n        </div>\n      </form>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n\n\n<div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog  modal-md\" role=\"document\">\n    <div class=\"modal-content\">\n\n\n          <form (ngSubmit)=\"update(updateForm)\" #updateForm=\"ngForm\" novalidate>\n              <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"createModal.hide()\" aria-label=\"Close\">&times;</button>\n                  <h4 class=\"modal-title\">Create</h4>\n                </div>\n            <!--<div class=\"modal-header\">\n              <h4 class=\"modal-title\">Create </h4>\n              <button type=\"button\" class=\"close\" (click)=\"createModal.hide()\" aria-label=\"Close\">\n\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>-->\n            <div class=\"modal-body\">\n\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n\n\n\n\n                  <select name=\"report_id\" class=\"form-control input-sm\" [(ngModel)]=\"model.report_id\" #report_id=\"ngModel\" (change)=\"changeReport($event)\"\n                    required>\n                    <option value=\"\"> Select Option </option>\n                    <option *ngFor=\"let row of reportLists\" [ngValue]=\"row._source.report_id\">\n                      {{row._source.report_name}}\n                    </option>\n\n                  </select>\n                  <input type=\"hidden\" name=\"report_name\" [(ngModel)]=\"model.report_name\" />\n\n                  <div style=\"color:red\" *ngIf=\"report_id.errors && (report_id.dirty || report_id.touched || updateForm.submitted)\">\n                    <span class=\"help-block\" *ngIf=\"report_id.errors.required\" style=\"color:red\">\n                      This field is required.\n                    </span>\n                  </div>\n\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 txt-padding-btm\">\n                    <div class=\"checkbox-inline\">\n                    <label>\n                      <input checked=\"\" type=\"checkbox\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" [checked]=\"model.email\"> Email\n                    </label>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 txt-padding-btm\">\n                    <div class=\"checkbox-inline\">\n                      <label>\n                        <input checked=\"\" type=\"checkbox\" name=\"report\" id=\"report\" [(ngModel)]=\"model.report\" [checked]=\"model.report\"> Report\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n\n                         <tag-input [(ngModel)]=\"model.receipients\" [ngModel]=\"['@item']\" name=\"receipients\" [theme]=\"'dark'\"  [editable]=\"true\"\n                           [onlyFromAutocomplete]=\"false\">\n                    <tag-input-dropdown [showDropdownIfEmpty]=\"false\"\n                                        [dynamicUpdate]=\"false\"\n                                        [focusFirstElement]=\"true\"\n                                        [zIndex]=\"10000\"\n                                        [displayBy]=\"'value'\"\n                                        [identifyBy]=\"'id'\"\n                                        [autocompleteItems]=\"autocompleteItemsAsObjects\">\n                        <ng-template let-item=\"item\" let-index=\"index\">\n                            ({{ index }}) {{ item.id }}: {{ item.value }}\n                        </ng-template>\n                    </tag-input-dropdown>\n                </tag-input>\n\n\n                      <!-- <input type=\"email\" name=\"receipients\" id=\"receipients\" class=\"form-control input-sm\" placeholder=\"Email Address\" [(ngModel)]=\"model.receipients\"> -->\n                  </div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 txt-padding-btm\">\n                        <div class=\"checkbox-inline\">\n                          <label>\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"daily\" name=\"daily\" [(ngModel)]=\"model.daily\" >Daily\n                            <span class=\"custom-control-indicator\"></span>\n                          </label>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"model.daily\" >\n                          <select name=\"delay\" class=\"form-control input-sm\" [(ngModel)]=\"model.delay\">\n                            <option value=\"0\"> Select </option>\n                            <option value=\"1\"> Now</option>\n                            <option value=\"2\"> Later</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 txt-padding-btm\">\n                        <div class=\"checkbox-inline\">\n                          <label>\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"weekly\" name=\"weekly\" [(ngModel)]=\"model.weekly\">Weekly\n                          </label>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"model.weekly\">\n                          <select name=\"weekdays\" class=\"form-control input-sm\" [(ngModel)]=\"model.weekdays\">\n                            <option value=\"1\"> Sunday</option>\n                            <option value=\"2\"> Monday</option>\n                            <option value=\"3\"> Tuesday</option>\n                            <option value=\"4\"> Wednesday</option>\n                            <option value=\"5\"> Thursday</option>\n                            <option value=\"6\"> Friday</option>\n                            <option value=\"7\"> Saturday</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 txt-padding-btm\">\n                        <div class=\"checkbox-inline\">\n                          <label>\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"monthly\" name=\"monthly\" [(ngModel)]=\"model.monthly\">Monthly\n                          </label>\n                        </div>\n\n                        <div class=\"form-group\" *ngIf=\"model.monthly\">\n                          <select name=\"days\" class=\"form-control input-sm\" [(ngModel)]=\"model.days\">\n                            <option value=\"1\" *ngFor='let in of counter(31) ;let i = index'> {{i+1}}</option>\n                          </select>\n                        </div>\n\n                      </div>\n\n                <!-- <div class=\"row\">\n                  <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"custom-control custom-checkbox\"> Email\n                        <input type=\"checkbox\" class=\"custom-control-input\" name=\"email\" id=\"email\" [(ngModel)]=\"model.email\" [checked]=\"model.email\">\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"custom-control custom-checkbox\"> Report\n                        <input type=\"checkbox\" class=\"custom-control-input\" name=\"report\" id=\"report\" [(ngModel)]=\"model.report\" [checked]=\"model.report\">\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                  </div>\n\n\n                </div>\n\n\n\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"receipients\" id=\"receipients\" class=\"form-control input-sm\" placeholder=\"Email Address\" [(ngModel)]=\"model.receipients\">\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"custom-control custom-checkbox\"> daily\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"daily\" name=\"daily\" [(ngModel)]=\"model.daily\" >\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"model.daily\" >\n                      <select name=\"delay\" class=\"form-control input-sm\" [(ngModel)]=\"model.delay\">\n                        <option value=\"0\"> Select </option>\n                        <option value=\"1\"> Now</option>\n                        <option value=\"2\"> Later</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"custom-control custom-checkbox\"> weekly\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"weekly\" name=\"weekly\" [(ngModel)]=\"model.weekly\">\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"model.weekly\">\n                      <select name=\"weekdays\" class=\"form-control input-sm\" [(ngModel)]=\"model.weekdays\">\n                        <option value=\"1\"> Sunday</option>\n                        <option value=\"2\"> Monday</option>\n                        <option value=\"3\"> Tuesday</option>\n                        <option value=\"4\"> Wednesday</option>\n                        <option value=\"5\"> Thursday</option>\n                        <option value=\"6\"> Friday</option>\n                        <option value=\"7\"> Saturday</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                    <div class=\"form-group\">\n                      <label class=\"custom-control custom-checkbox\"> monthly\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"monthly\" name=\"monthly\" [(ngModel)]=\"model.monthly\">\n                        <span class=\"custom-control-indicator\"></span>\n                      </label>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"model.monthly\">\n                      <select name=\"days\" class=\"form-control input-sm\" [(ngModel)]=\"model.days\">\n                        <option value=\"1\" *ngFor='let in of counter(31) ;let i = index'> {{i+1}}</option>\n                      </select>\n                    </div>\n\n                  </div>\n\n                </div>-->\n\n              </div>\n              <!--/.row-->\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createModal.hide()\">Close</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Save </button>\n            </div>\n          </form>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Are you sure want to delete!</h4>\n          <button type=\"button\" class=\"close\" (click)=\"deleteModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are you sure want to delete this record! &hellip;</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Close</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_task_service__ = __webpack_require__("./src/app/_service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_task__ = __webpack_require__("./src/app/_model/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskComponent = (function () {
    function TaskComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.items = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__model_task__["a" /* Task */]();
        this.reportLists = [];
        this.autocompleteItemsAsObjects = [
            { value: 'Item1', id: 0, extra: 0 },
            { value: 'item2', id: 2, extra: 1 },
            { value: 'item3', id: 3, extra: 1 },
            { value: 'item4', id: 4, extra: 1 },
            { value: 'Item5', id: 5, extra: 0 },
            { value: 'item6', id: 6, extra: 1 },
            { value: 'item7', id: 7, extra: 1 },
            { value: 'item8', id: 8, extra: 1 },
            'item3'
        ];
        this.checkedList = [];
        this.checkboxFlag = false;
        this.setModelValues();
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.init();
        this.getMasterData();
        if (localStorage.getItem('emailAddress') === null) {
            this.getAllEmailAddress();
        }
        else {
            this.autocompleteItemsAsObjects = JSON.parse(localStorage.getItem('emailAddress'));
        }
    };
    TaskComponent.prototype.setModelValues = function () {
        this.model.report_id = null;
        this.model.report_name = '';
        this.model.email = false;
        this.model.report = false;
        this.model.daily = false;
        this.model.delay = '';
        this.model.monthly = false;
        this.model.days = '';
        this.model.weekly = false;
        this.model.weekdays = '';
        this.model.receipients = [];
        this.model.report_id = '';
    };
    TaskComponent.prototype.getMasterData = function () {
        var _this = this;
        this._service.getAllReports().subscribe(function (response) {
            var res = response.result;
            if (res.statusCode === 200) {
                _this.reportLists = res.info.hits.hits;
            }
            if (res.statusCode === 204) {
                console.log(res.successText);
            }
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    // public requestAutocompleteItems = (text: string): Observable<Response> => {
    //   const url = `https://api.github.com/search/repositories?q=${text}`;
    //   return this.http
    //       .get(url)
    //       .pipe(map(data => data.json().items.map(item => item.full_name)));
    // };
    TaskComponent.prototype.getAllEmailAddress = function () {
        var _this = this;
        this._service.getAllEmailAddress().subscribe(function (res) {
            var response = res;
            console.log('response');
            console.log(response);
            _this.autocompleteItemsAsObjects = response.result.info;
            console.log(JSON.stringify(_this.autocompleteItemsAsObjects));
            localStorage.setItem('emailAddress', JSON.stringify(_this.autocompleteItemsAsObjects));
        });
    };
    TaskComponent.prototype.gotoHistory = function () {
        this._router.navigate(['/taskLogs']);
    };
    TaskComponent.prototype.init = function () {
        var _this = this;
        this._service.get().subscribe(function (response) {
            var res = response.result;
            if (res.statusCode === 200) {
                _this.items = res.info.hits.hits;
            }
            if (res.statusCode === 204) {
                console.log(res.successText);
            }
        }, function (err) {
            console.log('error msg');
            // this.donationlistprovider.showErrorToast(err);
        });
    };
    TaskComponent.prototype.createModalFunc = function (form) {
        form.resetForm();
        this.createModal.show();
    };
    TaskComponent.prototype.create = function (form) {
        var _this = this;
        if (form.valid) {
            this._service.add(this.model).subscribe(function (res) {
                _this.init();
                _this.createModal.hide();
                form.resetForm();
            }, function (err) {
                console.log('err msg');
            });
        }
    };
    TaskComponent.prototype.edit = function (data, id) {
        this.editModal.show();
        console.log(data);
        console.log(this.model);
        this.model = Object.assign({}, data);
        console.log(this.model);
        console.log(IsJsonString(this.model.receipients));
        if (IsJsonString(this.model.receipients)) {
            this.model.receipients = JSON.parse(data.receipients);
        }
        else {
            this.model = data;
        }
        this.id = id;
        console.log(this.model);
        console.log(this.id);
    };
    TaskComponent.prototype.update = function (form) {
        var _this = this;
        console.log(this.id);
        if (form.valid) {
            this._service.update(this.model, this.id).subscribe(function (res) {
                var response = res['result']['info']['msg'];
                _this.init();
                _this.editModal.hide();
            }, function (err) {
                console.log('err msg');
            });
        }
    };
    TaskComponent.prototype.deleteModalFunc = function (id) {
        this.deleteModal.show();
        this.id = id;
    };
    TaskComponent.prototype.delete = function () {
        var _this = this;
        this._service.delete(this.id).subscribe(function (res) {
            console.log(res);
            var reponse = res['result']['info']['msg'];
            _this.init();
            _this.deleteModal.hide();
        }, function (err) {
            console.log('err msg');
        });
    };
    TaskComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    TaskComponent.prototype.changeReport = function (event) {
        var index = event.target['options'].selectedIndex;
        var selectElementText = event.target['options'][index].text;
        console.log(selectElementText);
        this.model.report_name = selectElementText;
    };
    TaskComponent.prototype.executeNow = function () {
        console.log(this.selectedOptions());
        var selectedIndex = this.selectedOptions();
        this._service.executeTaskNow(selectedIndex).subscribe(function (res) {
            console.log('res');
            console.log(res);
        }, function (err) {
            console.log('err');
            console.log(err);
        });
    };
    TaskComponent.prototype.selectedOptions = function () {
        return this.items.filter(function (opt) { return opt._source.checked; }).map(function (opt) { return opt._id; });
    };
    TaskComponent.prototype.onCheckboxChange = function (option, event) {
        var cc = option;
        console.log(option);
        if (event.target.checked) {
            console.log('TRUE');
            this.checkedList.push(option._id);
        }
        else {
            console.log('FALSE');
            for (var i = 0; i < this.items.length; i++) {
                if (this.checkedList[i] === option._id) {
                    this.checkedList.splice(i, 1);
                }
            }
        }
        console.log(this.checkedList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('createModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalDirective */])
    ], TaskComponent.prototype, "createModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('editModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalDirective */])
    ], TaskComponent.prototype, "editModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('deleteModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalDirective */])
    ], TaskComponent.prototype, "deleteModal", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("./src/app/task/task.component.html"),
            styles: [__webpack_require__("./src/app/task/task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], TaskComponent);
    return TaskComponent;
}());

function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    // apiUrl : 'http://192.168.1.121:5001/',
    apiUrl: 'http://183.82.33.232:5001/',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map