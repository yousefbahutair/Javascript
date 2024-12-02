const input = document.querySelector('input')
function action (e) {
    if( e.key === 'Enter'){
        if(input.value){
        const li = document.createElement('li');
        li.innerText  = input.value;
        document.body.appendChild(li)
        input.value = '';
    }
    }

}
input.addEventListener('keypress', action)
