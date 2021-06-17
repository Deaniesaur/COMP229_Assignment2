import express, {Request , Response, NextFunction} from 'express';

import User from '../models/user';

export function DisplayAllUser(req: Request, res: Response, next: NextFunction): void{
    User.find(function(err, users){
        if(err){
            return console.error(err);
        }
        
        console.log('Hello Dean');
        console.log(users);
    })
}