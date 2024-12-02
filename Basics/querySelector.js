const a = document.querySelector('#photo') // Selecting First Element
console.dir(a);
const b = document.querySelector('section li#photo') // Spicification
console.dir(b)
const c = document.querySelector('.usa') // without selecting spicific one 
console.dir(c)
const d = document.querySelector('section li.usa')
console.dir(b);// after selecting
const e = document.querySelectorAll(input);
for(input of e){
    console.log(e.value)
}
// Another way of selecting spocific element:
const g = document.querySelector('section')
const h = g.querySelector('#photo')
console.dir(h);