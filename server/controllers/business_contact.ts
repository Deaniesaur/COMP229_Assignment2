import express, {Request , Response, NextFunction} from 'express';

import BusinessContacts from '../models/business_contact';

export function DisplayAllContacts(req: Request, res: Response, next: NextFunction): void{
    BusinessContacts.find(function(err, businessContacts){
        if(err){
            return console.error(err);
        }
        
        console.log(businessContacts);
        res.render('index', { title: 'Business', page: 'business', contacts: businessContacts});
    })
}

export function DisplayAddContact(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;

    res.render('index', { title: 'Add', page: 'update', contact: ''});
}


export function ProcessAddContact(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;

    //instantiate a new contact
    let updatedContact = new BusinessContacts({
        _id: id,
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email
    });

    //update contact by id
    BusinessContacts.create(updatedContact, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-contacts');
    })
}

export function DisplayEditContact(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;

    BusinessContacts.findById(id, {}, {}, function(err, businessContact){
        if(err){
            return console.error(err);
        }
        
        console.log(businessContact);
        res.render('index', { title: 'Edit', page: 'update', contact: businessContact});
    })
}

export function ProcessEditContact(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;

    //instantiate a new contact
    let updatedContact = new BusinessContacts({
        _id: id,
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email
    });

    //update contact by id
    BusinessContacts.updateOne({_id: id}, updatedContact, {}, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-contacts');
    })
}

export function DeleteContact(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;

    //update contact by id
    BusinessContacts.deleteOne({_id: id}, {}, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-contacts');
    })
}