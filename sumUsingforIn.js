const Grades = {
    Ahmed : 56,
    Omer : 96,
    hamad : 76,
    Khaled : 78,
}
let totalGrade =0
for( let sum in Grades){
 totalGrade += Grades[sum]
}
console.log(totalGrade / Object.keys(Grades).length)
