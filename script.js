const loginBtn = document.getElementById('login-btn')
const userName = document.getElementById('username')
const password = document.getElementById('password')
const darkModeBtn = document.getElementById('dark-mode-btn')
const forgetPasswordBtn = document.querySelector('.forget-password-btn')


let array = []

loginBtn.addEventListener('click', function () {
  if (userName.value.length === 0 && password.value.length === 0) {
    alert("Please Enter valid username and passoword!!")
  } else {
    array.push(userName.value)
    array.push(password.value)
    alert(array)
    array = []
  }
})


darkModeBtn.addEventListener('click', setBgColor)

function setBgColor() {
  if (document.body.style.backgroundColor === 'white') {
    document.body.style.backgroundColor = 'black';
    // document.darkModeBtn.style.backgroundColor = 'white';
    // document.darkModeBtn.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
  }
}

forgetPasswordBtn.addEventListener('click', function () {
  alert("You Have Clicked Forget Password!!")
})
