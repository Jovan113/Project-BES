const STORAGE_KEY = "userData";

let userName = [];
let pass = [];
let email = [];

function loadUsers() {
  try {
    const storedUsers = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storedUsers && Array.isArray(storedUsers.userName) && Array.isArray(storedUsers.pass) && Array.isArray(storedUsers.email)) {
      userName = storedUsers.userName;
      pass = storedUsers.pass;
      email = storedUsers.email;
    }
    
  } catch (error) {
    console.error("Failed To Recognize Users:", error);
  }
}

function saveUsers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ userName, pass, email }));
}

loadUsers();

function Register() {
  loadUsers();

  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;
  let Email = document.getElementById("Email").value;

  if (Username === "" || Password === "" || Email === "") {
    alert("Please Enter Input");
    return;
  }

  if (userName.indexOf(Username) !== -1) {
    alert("Username Already Exist");
    return;
  }
  
  if (email.indexOf(Email) !== -1) {
    alert("Email Already Exist");
    return;
  }

  userName.push(Username);
  email.push(Email);
  pass.push(Password);
  saveUsers();

  alert("Registered!");
}

function ForgotPassword() {
  loadUsers();

  let inputEmail = document.getElementById("Email").value;
  let index = email.indexOf(inputEmail);

  if (index !== -1) {
    alert("Password reset instructions have been sent to your email.");
  } else {
    alert("Email not found.");
  }
}

function LogIn() {  
  loadUsers();

  let inputUsername = document.getElementById("Username").value;
  let inputPassword = document.getElementById("Password").value;
  let inputEmail = document.getElementById("Email").value;
  let index = userName.indexOf(inputUsername);

  if (index !== -1 && pass[index] === inputPassword && email[index] === inputEmail) {
    window.location.href = "menu.html";
  } else {
    alert("Invalid username, password, or email.");
  }
}

function ClickRegister() {
  window.location.href = "Register.html";
}

function BackLogIn() {
  window.location.href = "pt.html";
}
