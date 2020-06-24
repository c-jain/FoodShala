// const d = document;
// const addItem = d.querySelector('.addItem');

// async function addHelper(name, price, type) {
//     const response = await axios.post('/api/user/additem', { name, price, type });

//     if (response.data.status === 'success') {
//         alert('Food Item Added');
//     }
//     else {
//         alert('Failed');
//     }
// }

// if(addItem) {
//     addItem.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const price = e.target.price.value;
//         const type = e.target.type.value;
//         addHelper(name, price, type);
//     })
// }