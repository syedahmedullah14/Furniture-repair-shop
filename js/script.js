const header = document.querySelector("header")


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);

})

let menu = document.querySelector('#menu-icons');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin:'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal ('.home-text', {delay:400});
sr.reveal ('.home-img', {delay:400});
sr.reveal ('.container', {delay:400});

sr.reveal ('.about-img', {});
sr.reveal ('.about-text', {delay:300});

sr.reveal ('.middle-text', {});
sr.reveal ('.row-btn, .shop-content', {delay:300});

sr.reveal ('.review-content, .contact', {delay:300});

// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.getElementById('menu-icon');
//     const navlist = document.querySelector('.navlist');

//     menuIcon.addEventListener('click', function() {
//         navlist.classList.toggle('active');
//     });
// });








// document.getElementById('orderForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Gather form data
//     const formData = {
//         name: document.getElementById('name').value,
//         mobile: document.getElementById('mobile').value,
//         tableNumber: document.getElementById('tableNumber').value,
//         order: Array.from(document.getElementById('order').selectedOptions).map(option => option.value)
//     };

//     // Send data to backend (assuming you have a backend API endpoint)
//     fetch('/api/place-order', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Order placed successfully!');
//             // You can redirect the user to a confirmation page or do any other necessary action
//         } else {
//             throw new Error('Failed to place order');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Failed to place order. Please try again later.');
//     });
// });
