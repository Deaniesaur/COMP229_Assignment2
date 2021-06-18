import express from 'express';
const router = express.Router();
export default router;


//Create user controller instance
import { DeleteContact, DisplayAddContact, DisplayAllContacts, DisplayEditContact, ProcessAddContact, ProcessEditContact } from '../controllers/business_contact';

//GET Contact List
router.get('/', DisplayAllContacts);

//GET Add Page for Contact using ID
router.get('/add', DisplayAddContact);

//POST - Add Contact to list
router.post('/add', ProcessAddContact);

//GET Edit Page for Contact using ID
router.get('/edit/:id', DisplayEditContact);

//POST - Update Contact using ID
router.post('/edit/:id', ProcessEditContact);

//POST - Delete Contact using ID
router.get('/delete/:id', DeleteContact);