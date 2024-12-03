const form = {
}
const Name = document.querySelector('#name')
const gender = document.querySelector('select')
const married = document.querySelector('#checked')

Name.addEventListener('input', function(e){
    form['Name'] = Name.value;
})
gender.addEventListener('input', e => {
    form['gender'] = gender.value
})
married.addEventListener('input', (e) =>  {
    form['married'] = married.checked
})

