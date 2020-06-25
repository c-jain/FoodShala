module.exports = (req, res, next) => {
    if (req.user.isLoggedIn && req.user.role !== 'restaurant') {
        res.redirect('/');
    } else {
        next();
    }
}