module.exports = (req, res, next) => {
    if (!req.user.isLoggedIn) {
        res.redirect('/login');
    } else {
        //console.log(req.user);
        next();
    }
}