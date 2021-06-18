"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogout = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../models/user"));
let age = yearsDiff(new Date('1995-06-28'), new Date());
const util_1 = require("../util");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', display: util_1.GetDisplayName(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', age: age, display: util_1.GetDisplayName(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', display: util_1.GetDisplayName(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', display: util_1.GetDisplayName(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', display: util_1.GetDisplayName(req) });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), display: util_1.GetDisplayName(req) });
    }
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect('/business-contacts');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), display: util_1.GetDisplayName(req) });
    }
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        email: req.body.email,
        display: req.body.first + " " + req.body.last
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User already exists');
            }
            req.flash('registerMessage: Registration Error');
            return res.redirect('/register');
        }
        return passport_1.default.authenticate('local')(req, req, () => {
            return res.redirect('/business-contacts');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogout(req, res, next) {
    req.logout();
    res.redirect('/login');
}
exports.ProcessLogout = ProcessLogout;
function yearsDiff(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    if (date2.getMonth() == date1.getMonth()) {
        if (date2.getDate() >= date1.getDate())
            return yearsDiff;
        else
            return yearsDiff - 1;
    }
    else if (date2.getMonth() > date1.getMonth()) {
        return yearsDiff;
    }
    return yearsDiff - 1;
}
//# sourceMappingURL=index.js.map