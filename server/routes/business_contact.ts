import express from 'express';
const router = express.Router();
export default router;


//Create user controller instance
import { DeleteContact, DisplayAddContact, DisplayAllContacts, DisplayEditContact, ProcessAddContact, ProcessEditContact } from '../controllers/business_contact';

//import Util Function
import { AuthGuard } from '../util';

//GET Contact List
router.get('/', DisplayAllContacts);

//GET Add Page for Contact using ID
router.get('/add', AuthGuard, DisplayAddContact);

//POST - Add Contact to list
router.post('/add', AuthGuard, ProcessAddContact);

//GET Edit Page for Contact using ID
router.get('/edit/:id', AuthGuard, DisplayEditContact);

//POST - Update Contact using ID
router.post('/edit/:id', AuthGuard, ProcessEditContact);

//POST - Delete Contact using ID
router.get('/delete/:id', AuthGuard, DeleteContact);