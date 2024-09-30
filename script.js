const loginBtn = document.getElementById('login-btn')
const userName = document.getElementById('username')
const password = document.getElementById('password')
const darkModeBtn = document.getElementById('dark-mode-btn')
const forgetPasswordBtn = document.querySelector('.forget-password-btn')
const createNewAccountBtn = document.getElementById('create-new-account')
const errorMessageEl = document.getElementById('error-message')


let array = []

loginBtn.addEventListener('click', function (event) {
  event.preventDefault()
  if (userName.value.length === 0 || password.value.length === 0) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Please Enter valid username and password!!";
    errorMessage.style.color = "red";
    forgetPasswordBtn.insertAdjacentElement('afterend', errorMessage);
    userName.value = ""
    password.value = ""
  } else {
    array.push(userName.value)
    array.push(password.value)
    alert(array)
    userName.value = ""
    password.value = ""
    array = []
  }
})


darkModeBtn.addEventListener('click', function setBgColor() {
  if (document.body.style.backgroundColor === "" || document.body.style.backgroundColor === "rgb(240, 242, 245)") {
    document.body.style.backgroundColor = "#252525"
    document.body.style.color = "white"
    darkModeBtn.style.backgroundImage = "url('./assets/lightMode.png')"
  } else {
    document.body.style.backgroundColor = "#F0F2F5"
    document.body.style.color = "black"
    darkModeBtn.style.backgroundImage = "url('./assets/darkMode.png')"
  }
})

forgetPasswordBtn.addEventListener('click', function () {
  alert("You Have Clicked Forget Password!!")
})


createNewAccountBtn.addEventListener('click', function(){
  alert("You are redirecting for creating your account...")
})