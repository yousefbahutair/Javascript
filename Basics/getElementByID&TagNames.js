document.getElementById('photo');// html format
const photo = document.getElementById('photo');
if (photo) {
    console.log(photo.id); // Access its id directly
} else {
    console.log('Element with id "photo" not found.');
}
document.getElementsByTagName('input'); // html format
const inputs = document.getElementsByTagName('input');
console.log(inputs)// array of objects
for(let input of inputs){
    console.log(input.value)// outputting the value entered by each input
}