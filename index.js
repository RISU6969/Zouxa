const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('./config/auth') 
//login page
//register page
router.get('/test69', (req,res)=>{
    res.sendFile('./welcome.html', {root: ''})
})
router.get('/register', (req,res)=>{
    res.render('register');
})
app.use(express.staticProvider(__dirname + '/views'));

app.get('/commands/slashcommands', function(req, res) {
    res.render('slashcommands.html');
});
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render(('dashboard'), {
        user: req.user
    });
})
router.get('/login', (req,res)=>{
    res.render('login');
})
router.get('/test', (req,res)=>{
    res.render('test');
})
router.get('/test2', (req,res)=>{
    res.render('test2');
})
router.get('/commands/slashcommands', (req,res)=>{
    res.render('slashcommands');
})
module.exports = router; 