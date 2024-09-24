const loginBtn = document.getElementById('login-btn')
const userName = document.getElementById('username')
const password = document.getElementById('password')
const darkModeBtn = document.getElementById('dark-mode-btn')
let array = []

loginBtn.addEventListener('click', function() {
  array.push(userName.value)
  array.push(password.value)
  alert(array)
  array = []
})


darkModeBtn.addEventListener('click', setBgColor)

function setBgColor(){
  if (document.body.style.backgroundColor === 'white'){
    document.body.style.backgroundColor = 'black'; 
    // document.darkModeBtn.style.backgroundColor = 'white';
    // document.darkModeBtn.style.color = 'white';
  }else{
    document.body.style.backgroundColor = 'white'; 
  }
}