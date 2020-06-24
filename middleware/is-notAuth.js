module.exports = (req, res, next) => {
    if (req.user.isLoggedIn) {
        res.redirect('/');
    } else {
        //console.log(req.user);
        next();
    }
}