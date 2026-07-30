const STORAGE_KEY = "userData";

let userName = [];
let pass = [];

function loadUsers() {
  try {
    const storedUsers = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storedUsers && Array.isArray(storedUsers.userName) && Array.isArray(storedUsers.pass)) {
      userName = storedUsers.userName;
      pass = storedUsers.pass;
    }
  } catch (error) {
    console.error("Failed to load users:", error);
  }
}

function saveUsers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ userName, pass }));
}

loadUsers();

function Register() {
  loadUsers();

  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;

  if (Username === "" || Password === "") {
    alert("Please Enter Input");
    return;
  }

  if (userName.indexOf(Username) !== -1) {
    alert("Username Already Exist");
    return;
  }

  userName.push(Username);
  pass.push(Password);
  saveUsers();

  alert("Registered!");
}

function LogIn() {
  loadUsers();

  let inputUsername = document.getElementById("Username").value;
  let inputPassword = document.getElementById("Password").value;

  let index = userName.indexOf(inputUsername);

  if (index !== -1 && pass[index] === inputPassword) {
    window.location.href = "menu.html";
  } else {
    alert("Invalid username or password.");
  }
}

function ClickRegister() {
  window.location.href = "Register.html";
}

function BackLogIn() {
  window.location.href = "pt.html";
}