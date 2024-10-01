function choice(arr) 
{
  return arr[Math.floor(Math.random() * arr.length)]
}
function randomchoices(){
char = [
    "1",
    "@",
    "3",
    "t",
    "yu",
]    
charRand = choice(char)
Name = [
    "AHMED",
    "a;i",
    "khalid",
    "tehsome",
    "nader",
]   
nameRand = choice(Name)

return  {
    Name : nameRand
    ,char : charRand
}

}