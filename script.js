
//Spread Operator
let num = [1,2,3,4,5,6]
let Students = ['Talha','Ali','Anwar','Usman']

let MergedArray = [...num,...Students]
console.log(MergedArray)
//Spread Operator

// Arrow Function
var p = document.querySelector("p")
const add = () => {
  console.log(p.innerHTML)
} 
add();
// Arrow Function 

// Rest Operator 
const data = (firstname,lastname,...education) =>{
console.log(firstname,lastname,...education)
}
data("Abdullah","Faris","Matric",2022);
// Rest Operator 

// Task 
let number = [12,5,15,20,8]
const sum = ()=>{
}
sum(12,5,15,20,8);
 
// Task 
