const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function() {
    const user = username.value;
    const pass = password.value;
   if(user && pass){
    if(user.length < 3 || pass.length < 3){
        alert('Username and password must be at least 3 characters long.');
        return;
    }
    window.location.href = 'dashboard.html';
   }
   else {
    alert('Please enter both username and password.');
   }
    
});