//PASSWORD MATCHING
function validatePassword(form) {
  if(form.passphrase.value != form.confirm_passphrase.value) {
    confirm_passphrase.setCustomValidity('passwords must match');
  } else {
    confirm_passphrase.setCustomValidity('');
    PostNewUser(form.username.value, form.email.value, form.passphrase.value);
  }
}

//LOGIN
function login(form) {
  let userPostRequest = new XMLHttpRequest();
  userPostRequest.open("POST", "http://localhost:3000/api/login/authenticate");
  let login = JSON.stringify({
    username : form.username.value,
    password : form.login_passphrase.value
  });
  userPostRequest.setRequestHeader("Content-type", "application/json");
  userPostRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      if(response.message === "noMatch") {
        alert('Password is incorrect');
      }
      if(response.message === "match") {
        window.location.replace("/public/home.html")
      }
      
      
    }
  }
  userPostRequest.send(login);
}

//REGISTER
function PostNewUser(username, email, password) {
  let userPostRequest = new XMLHttpRequest();
  userPostRequest.open("POST", "http://localhost:3000/api/login/register");
  let user = JSON.stringify({
    username : username,
    email : email,
    password : password
  });
  userPostRequest.setRequestHeader("Content-type", "application/json");
  userPostRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      console.log(response)
      alert(response)
    }
  }
  userPostRequest.send(user);
}


//COOKIES
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
      alert("Welcome again " + user);

  } else {
  //     user = prompt("Please enter your name:", "");
  //     if (user != "" && user != null) {
  //         setCookie("username", user, 365);
      }
  }