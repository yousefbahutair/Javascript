function multiply(x,y){
    return x * y
}
function subtract(x,y){
    return x-y
}
function addtion(x,y){
    return x + y
}
arr = [multiply, subtract , addtion]
for (opreation of arr){
    let result = opreation(5,10)
    console.log(result)
}
