const userName = document.querySelector('#name')
const married = document.querySelector('#checked')
const gender = document.querySelector('#gender')

const formData = {};

for(let input of [userName, married, gender]){
    input.addEventListener('input', (e) => {
    formData[e.target.name] = (input.type !== 'checkbox') ? input.value : input.checked;

}
 )
}
