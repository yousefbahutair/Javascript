function loggedIn(){
    alert('YOU ARE LOGGED IN' )
}
const btn = document.querySelector('button')
setTimeout(btn.addEventListener('click', loggedIn ), 5000)