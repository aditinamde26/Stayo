const User = require("../models/user.js");


module.exports.renderSignupForm =  (req, res) => {
    res.render("./users/signup.ejs");
};

module.exports.renderLoginForm = (req, res)=>{
    res.render("users/login.ejs");
};

module.exports.signup = async (req, res, next) => {
    try{
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) =>{
            if(err){
                return next(err);
            }else{
                req.flash("success", "Welcome to Stayo!");
                res.redirect(res.locals.redirectUrl || "/listings");
            }
        })


    }catch(error){
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

module.exports.login = async(req, res)=>{
        req.flash("success","Welcome Back to Stayo!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
};

module.exports.logout = (req, res)=>{
    req.logout((err)=>{
        if(err){
            if (err) return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
};
