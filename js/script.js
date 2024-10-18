// Notification System
const notificationBtn = document.getElementById('notification-btn');
const notificationDropdown = document.getElementById('notification-dropdown');

notificationBtn.addEventListener('click', () => {
    notificationDropdown.style.display = 
        notificationDropdown.style.display === 'block' ? 'none' : 'block';
});

// Placeholder functions for buttons
function bookCounseling() {
    alert('Redirecting to Counseling Booking Page...');
}

function joinGroupTherapy() {
    alert('Redirecting to Group Therapy Session...');
}

// Login/Signup Button
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    alert('Redirecting to Login/Signup Page...');
});
