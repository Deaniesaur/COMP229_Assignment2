import express, {Request, Response, NextFunction} from 'express';
import passport from 'passport';
import User from '../models/user';

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

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void{
    if(!req.user){
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage')});
    }
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void{
    passport.authenticate('local', (err, user, info) => {
        //server errors
        if(err){
            console.error(err);
            return next(err);
        }

        //login errors
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => {
            if(err){
                console.error(err);
                return next(err);
            }

            return res.redirect('/home');
        })
    })(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void{
    if(!req.user){
        res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage')});
    }
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void{
    //instantiate a new User object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        display: req.body.first + " " + req.body.last
    })

    User.register(newUser, req.body.password, (err) => {
        if(err){
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError"){
                console.error('Error: User already exists');
            }
            req.flash('registerMessage: Registration Error');

            return res.redirect('/register');
        }

        //after successful regitration - login the user
        return passport.authenticate('local')(req, req, () => {
            return res.redirect('home');
        })
    })
}

export function ProcessLogout(req: Request, res: Response, next: NextFunction): void{
    req.logout;
    res.redirect('/login');
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