"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const business_contact_1 = require("../controllers/business_contact");
router.get('/', business_contact_1.DisplayAllContacts);
router.get('/add', business_contact_1.DisplayAddContact);
router.post('/add', business_contact_1.ProcessAddContact);
router.get('/edit/:id', business_contact_1.DisplayEditContact);
router.post('/edit/:id', business_contact_1.ProcessEditContact);
router.get('/delete/:id', business_contact_1.DeleteContact);
//# sourceMappingURL=business_contact.js.map