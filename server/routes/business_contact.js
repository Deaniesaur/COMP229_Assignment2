"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const business_contact_1 = require("../controllers/business_contact");
const util_1 = require("../util");
router.get('/', business_contact_1.DisplayAllContacts);
router.get('/add', util_1.AuthGuard, business_contact_1.DisplayAddContact);
router.post('/add', util_1.AuthGuard, business_contact_1.ProcessAddContact);
router.get('/edit/:id', util_1.AuthGuard, business_contact_1.DisplayEditContact);
router.post('/edit/:id', util_1.AuthGuard, business_contact_1.ProcessEditContact);
router.get('/delete/:id', util_1.AuthGuard, business_contact_1.DeleteContact);
//# sourceMappingURL=business_contact.js.map