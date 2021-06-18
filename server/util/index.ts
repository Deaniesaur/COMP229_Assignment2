import express, {Request, Response, NextFunction} from 'express';

import * as DBConfig from '../config/db';

export function GetDisplayName(req: Request): string{
    if(req.user){
        let user = req.user as UserDocument;
        return user.display.toString();
    }
    return '';
}

export function AuthGuard(req: Request, res: Response, next: NextFunction): void{
    console.log("Check Authentication");
    if(!req.isAuthenticated()){
        console.log("Not Authenticated");
        return res.redirect('/login');
    }
    next();
}