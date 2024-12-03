const form = document.querySelector('#form')
form.addEventListener('submit',function(e){
    alert('SUBMITTED')
    e.preventDefault(form)
})