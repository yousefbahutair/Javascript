const colors = [
    'red',
    'blue',
    'yellow'
]
function changingColor(){
   const h1 = document.querySelector('h1');
   h1.style.color = this.style.backgroundColor;
   document.body.appendChild(h1)
}

for( color of colors){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color;
    colorDiv.style.width = '100px';
    colorDiv.style.height = '100px';
    colorDiv.style.margin = '10px';
    colorDiv.style.display = 'inline-block';
    colorDiv.style.cursor = 'pointer';
    document.body.prepend(colorDiv);
    colorDiv.addEventListener('click', changingColor)
    
}