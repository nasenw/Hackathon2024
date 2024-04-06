var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup')
})

router.get('/index', (req, res, next) => {
  res.render('index')
})

router.post('/user-signedup', async function(req, res, next) {

  const existing = await User.findUser(req.body.email);
  console.log(existing + "Yooo");
  if (existing == null)
  {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
  })
  }
  else {
    console.log("User already in database");
  }
  
  // const user = await User.findUser(req.body.username, req.body.password)
  // if(user!== null){
  //   req.session.user = user
  //   res.redirect("/courses")
  // }else{
  //   res.redirect("/?msg=fail")
  // }
  
  res.redirect('/homepage');
})

module.exports = router;
