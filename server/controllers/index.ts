import express, {Request, Response, NextFunction} from 'express';

//Get age of Dean Pinlac using BirthDate and Current Date
let age = yearsDiff(new Date('1995-06-28'), new Date());

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void{
    res.render('index', {title: 'Home', page: 'home'});
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void{
    res.render('index', { title: 'About', page: 'about', age: age });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void{
    res.render('index', { title: 'Projects', page: 'projects' });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void{
    res.render('index', { title: 'Services', page: 'services' });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void{
    res.render('index', { title: 'Contact', page: 'contact' });
}

// Function for computing Difference in Years
function yearsDiff(d1: Date, d2: Date) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();

    if(date2.getMonth() == date1.getMonth() ){
        if(date2.getDate() >= date1.getDate())
            return yearsDiff;
        else
            return yearsDiff-1;
    }
    else if(date2.getMonth() > date1.getMonth()){
        return yearsDiff;
    }

    return yearsDiff-1;
}