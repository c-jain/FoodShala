module.exports = (req, res, next) => {
    if (req.user.isLoggedIn && req.user.role !== 'customer') {
        res.redirect('/');
    } else {
        next();
    }
}