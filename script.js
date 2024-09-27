const loginBtn = document.getElementById('login-btn')
const userName = document.getElementById('username')
const password = document.getElementById('password')
const darkModeBtn = document.getElementById('dark-mode-btn')
const forgetPasswordBtn = document.querySelector('.forget-password-btn')
const createNewAccountBtn = document.getElementById('create-new-account')
// const box1 = document.querySelector('.box1')


let array = []

loginBtn.addEventListener('click', function () {
  if (userName.value.length === 0 || password.value.length === 0) {
    alert("Please Enter valid username and passoword!!")
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
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  } else {
    document.body.style.backgroundColor = "#F0F2F5"
    document.body.style.color = "black"
  }
})

forgetPasswordBtn.addEventListener('click', function () {
  alert("You Have Clicked Forget Password!!")
})


createNewAccountBtn.addEventListener('click', function(){
  alert("You are redirecting for creating your account...")
})