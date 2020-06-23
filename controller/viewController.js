exports.addItem = (req, res) => {
    res.render('addItem', { pageTitle: 'Add Items', Role: 'restaurant', Name: 'Pizza Hut' });
}

exports.login = (req, res) => {
    res.render('login', { pageTitle: 'Login', Role: null, Name: null });
}

exports.register = (req, res) => {
    res.render('register', { pageTitle: 'Register', Role: null, Name: null });
}

exports.order = (req, res) => {
    res.render('order', { pageTitle: 'Orders', Role: 'restaurant', Name: 'Pizza Hut' });
}

exports.menu = (req, res) => {
    res.render('menu', { pageTitle: 'Menu', Role: null, Name: null });
}