"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
let age = yearsDiff(new Date('1995-06-28'), new Date());
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', age: age });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact' });
}
exports.DisplayContactPage = DisplayContactPage;
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