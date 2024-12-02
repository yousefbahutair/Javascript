const btn = document.querySelector('button');
btn.addEventListener('mouseover', function (){
     console.log("YOU CAN'T CATCH ME")
     const width = Math.floor(Math.random() * window.innerWidth)
     const height = Math.floor(Math.random() * window.innerHeightheight)
     btn.style.left = `${width}px`;
     btn.style.top = `${height}px` ;
})
btn.addEventListener( 'click', function (){
    console.log( ' YOU GOT ME!!! ')
    document.body.style.backgroundColor = "red";
})