function maxNumber(num1, num2){
if(num1 > num2){
 return function(){
    console.log(num1)
 }
}
else if (num2 == num1){
 return function(){
    console.log("THEY ARE EQUAL!")
 }
}
else if(typeof(num1)!= typeof(num3)){
   return function(){ console.log("DIFFRENT DATA TYPE, PLEASE ENTER 2 NUMBERS!!")
   }
}
else {
    return function(){
        console.log(num2)
   
    }
}
}
const max = maxNumber("e",3);