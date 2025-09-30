
// Initialize AOS
AOS.init({
duration: 1000,
once: true,
offset: 100
});

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
document.body.classList.toggle('nav-open');
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Auth Modal Functionality
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const modalTitle = document.getElementById('modalTitle');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToSignin = document.querySelector('.switch-to-signin');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');

// Open modal functions
function openSignInModal() {
authModal.classList.add('active');
document.body.classList.add('modal-open');
switchToTab('signin');
}

function openSignUpModal() {
authModal.classList.add('active');
document.body.classList.add('modal-open');
switchToTab('signup');
}

// Close modal function
function closeAuthModal() {
authModal.classList.remove('active');
document.body.classList.remove('modal-open');
}

// Switch between tabs
function switchToTab(tabName) {
// Update tabs
authTabs.forEach(tab => {
if (tab.dataset.tab === tabName) {
tab.classList.add('active');
} else {
tab.classList.remove('active');
}
});

// Update forms
authForms.forEach(form => {
if (form.id === `${tabName}Form`) {
form.classList.add('active');
} else {
form.classList.remove('active');
}
});

// Update modal title
modalTitle.textContent = tabName === 'signin' ? 'Sign In' : 'Create Account';
}

// Event listeners
signinBtn.addEventListener('click', function(e) {
e.preventDefault();
openSignInModal();
});

signupBtn.addEventListener('click', function(e) {
e.preventDefault();
openSignUpModal();
});

closeModal.addEventListener('click', closeAuthModal);

// Close modal when clicking outside
authModal.addEventListener('click', function(e) {
if (e.target === authModal) {
closeAuthModal();
}
});

// Tab switching
authTabs.forEach(tab => {
tab.addEventListener('click', function() {
switchToTab(this.dataset.tab);
});
});

// Switch between forms
switchToSignup.addEventListener('click', function(e) {
e.preventDefault();
switchToTab('signup');
});

switchToSignin.addEventListener('click', function(e) {
e.preventDefault();
switchToTab('signin');
});

// Toggle password visibility
togglePasswordBtns.forEach(btn => {
btn.addEventListener('click', function() {
const targetId = this.dataset.target;
const passwordInput = document.getElementById(targetId);
const icon = this.querySelector('i');
    
if (passwordInput.type === 'password') {
passwordInput.type = 'text';
icon.classList.remove('fa-eye');
icon.classList.add('fa-eye-slash');
} else {
passwordInput.type = 'password';
icon.classList.remove('fa-eye-slash');
icon.classList.add('fa-eye');
}
});
});

// Form submission
document.getElementById('signinForm').addEventListener('submit', function(e) {
e.preventDefault();
// In a real app, you would handle authentication here
alert('Sign In functionality would be implemented here!');
// closeAuthModal();
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
e.preventDefault();
// In a real app, you would handle registration here
alert('Sign Up functionality would be implemented here!');
// closeAuthModal();
});

// Social login buttons
document.querySelectorAll('.social-btn').forEach(btn => {
btn.addEventListener('click', function() {
const provider = this.querySelector('span').textContent;
alert(`${provider} authentication would be implemented here!`);
});
});