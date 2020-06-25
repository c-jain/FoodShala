const d = document;
const loginForm = d.getElementById('login');
const addItemForm = d.getElementById('addItem');
const orderItem = d.querySelectorAll('.payment');
const signupForm = d.getElementById('signup');
const logoutForm = d.getElementById('logout');



async function addItemHelper(name, price, type) {
    const response = await axios.post('/api/user/additem', { name, price, type });

    if (response.data.status === 'Your Item Has Been Added!') {
        alert(response.data.status);
        location.assign('/');
    } else {
        alert(response.data.status);
        location.reload();
    }
}

if(addItemForm) {
    addItemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const type = e.target.type.value;
        addItemHelper(name, price, type);
    });
}

async function loginHelper(email, password, role) {
    const response = await axios.post('/api/user/login', { email, password, role });

    if (response.data.status === 'LoggedIn Successfully!') {
        alert(response.data.status);
        location.assign('/');
    } else {
        alert(response.data.status);
        location.reload();
    }
}

if(loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;
        loginHelper(email, password, role);
    });
}

async function logoutHelper() {
    const response = await axios.get('/logout');
    
    if (response.data.status === 'LoggedOut Successfully!') {
        alert(response.data.status);
        location.reload();
    } else {
        alert('LoggedOut Failed');
    }
}

if(logoutForm) {
    logoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        logoutHelper();
    });
}

async function orderItemHelper(itemId) {
    const response = await axios.post(`/api/user/order/${itemId}`);

    if (response.data.status === undefined) {
        alert('Please Login!');
        location.assign('/login');
    } else if (response.data.status === 'Thank You For Shoping With Us. Your Order Has Been Received!') {
        alert(response.data.status);
        location.assign('/');
    } else {
        alert(response.data.status);
    }
}

if(orderItem) {
    for (let i = 0; i < orderItem.length; i++) {
        orderItem[i].addEventListener('click', function (e) {
            e.preventDefault();
            const itemID = orderItem[i].getAttribute('order-id');
            orderItemHelper(itemID);
        });
    }
}

async function signupHelper(name, email, password, preference, role) {
    const response = await axios.post('/api/user/signup', { name, email, password, preference, role });

    if (response.data.status === 'SignedUp Successfully!') {
        alert(response.data.status);
        location.assign('/login');
    } else {
        alert(response.data.status);
        location.reload();
    }
}
 
if(signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const preference = e.target.preference.value;
        const role = e.target.role.value;
        signupHelper(name, email, password, preference, role);
    });
}