"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContact = exports.ProcessEditContact = exports.DisplayEditContact = exports.ProcessAddContact = exports.DisplayAddContact = exports.DisplayAllContacts = void 0;
const business_contact_1 = __importDefault(require("../models/business_contact"));
const util_1 = require("../util");
function DisplayAllContacts(req, res, next) {
    business_contact_1.default.find(function (err, businessContacts) {
        if (err) {
            return console.error(err);
        }
        console.log(businessContacts);
        res.render('index', { title: 'Business', page: 'business', contacts: businessContacts, display: util_1.GetDisplayName(req) });
    }).sort({ lastname: 1, firstname: 1 });
}
exports.DisplayAllContacts = DisplayAllContacts;
function DisplayAddContact(req, res, next) {
    let id = req.params.id;
    res.render('index', { title: 'Add', page: 'update', contact: '', display: util_1.GetDisplayName(req) });
}
exports.DisplayAddContact = DisplayAddContact;
function ProcessAddContact(req, res, next) {
    let id = req.params.id;
    let updatedContact = new business_contact_1.default({
        _id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contact: req.body.contact,
        email: req.body.email
    });
    business_contact_1.default.create(updatedContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contacts');
    });
}
exports.ProcessAddContact = ProcessAddContact;
function DisplayEditContact(req, res, next) {
    let id = req.params.id;
    business_contact_1.default.findById(id, {}, {}, function (err, businessContact) {
        if (err) {
            return console.error(err);
        }
        console.log(businessContact);
        res.render('index', { title: 'Edit', page: 'update', contact: businessContact, display: util_1.GetDisplayName(req) });
    });
}
exports.DisplayEditContact = DisplayEditContact;
function ProcessEditContact(req, res, next) {
    let id = req.params.id;
    let updatedContact = new business_contact_1.default({
        _id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contact: req.body.contact,
        email: req.body.email
    });
    business_contact_1.default.updateOne({ _id: id }, updatedContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contacts');
    });
}
exports.ProcessEditContact = ProcessEditContact;
function DeleteContact(req, res, next) {
    let id = req.params.id;
    business_contact_1.default.deleteOne({ _id: id }, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contacts');
    });
}
exports.DeleteContact = DeleteContact;
//# sourceMappingURL=business_contact.js.map