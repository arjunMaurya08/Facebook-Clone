const loginBtn = document.getElementById('login-btn')
const userName = document.getElementById('username')
const password = document.getElementById('password')
let array = []

loginBtn.addEventListener('click', function() {
  array.push(userName.value)
  array.push(password.value)
  alert(array)
  array = []
})