function makeBetween(min,max){
 return function (userInput){
   let userInputLower = userInput.toLowerCase()
   if(min > max)
   {
    [min,max] = [max,min];
   }

   if(userInputLower > min && userInputLower < max)
      console.log(`Yes because ${userInput} is between ${max} and ${min}`)
   else
   console.log(`${userInput} isn't betweem ${max} and ${min}`)
 }
}
const realNumber = makeBetween(-99999999999,99999999999)
const isDigit = makeBetween(0,9)
const isChar = makeBetween("a","z")