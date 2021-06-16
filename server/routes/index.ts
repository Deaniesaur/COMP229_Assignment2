import express from 'express';
import moment from 'moment';
const router = express.Router();
export default router;

//Get age of Dean Pinlac using BirthDate and Current Date
let age = yearsDiff(new Date('1995-06-28'), new Date());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', age: age });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

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

// module.exports = router;