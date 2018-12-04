// email input verification
var validations ={
  email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']
};
  $(document).ready(function(){
    $("input[type=email]").change( function(){
      validation = new RegExp(validations['email'][0]);
      if (!validation.test(this.value)){
          this.setCustomValidity(validations['email'][1]);
          return false;
      }
      else {
          this.setCustomValidity('');
      }
    });
})

function validatePassword() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password');
  var confirm_password = document.getElementById('confirm_password');
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity('passwords must match');
  } else {
    confirm_password.setCustomValidity('');
    PostNewUser(username, email, password.value);
  }
}

function login() {
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;
  var userPostRequest = new XMLHttpRequest();
  userPostRequest.open("POST", "http://127.0.0.1:3000/api/login/authenticate");
  var login = JSON.stringify({
    username : username,
    password : password
  });
  userPostRequest.setRequestHeader("Content-type", "application/json");
  userPostRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.response);
      if(response.token == 'noMatch'){
        alert('invalid user credentials');
      }
      else{
        saveToken(response.token);
        document.getElementById("login-status").innerHTML = response.username;
        location.href='#';
      }
    }
  }
  userPostRequest.send(login);
}

function PostNewUser(username, email, password) {
  console.log('post new user called');
  var userPostRequest = new XMLHttpRequest();
  userPostRequest.open("POST", "http://localhost:3000/api/login/register");
  var user = JSON.stringify({
    username : username,
    email : email,
    password : password
  });
  userPostRequest.setRequestHeader("Content-type", "application/json");
  userPostRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   // TODO implement remaining error checking messages and switch from alerts to printing text
      var response = JSON.parse(this.response);
      if(response.name == 'ValidationError') {
        if('username' in response.errors){
           document.getElementById('username').setCustomValidity('username \'' + response.errors.username.value + '\' is already taken');
        }
        else {
          document.getElementById('username').setCustomValidity('');
        }
        if('email' in response.errors){
           document.getElementById('email').setCustomValidity('an account already exists with that email address');
        }
        else {
          document.getElementById('email').setCustomValidity('');
        }
        if('password' in response.errors){
           document.getElementById('password').setCustomValidity('password must be at least 12 characters');
        }
        else {
          document.getElementById('password').setCustomValidity('');
        }
      }
      else {
          alert('account created!')
          $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      }
    }
  }
  userPostRequest.send(user);
}
$(document).ready(function(){
  $('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });
  });``