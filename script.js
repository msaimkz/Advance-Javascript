let input=document.querySelector("#add")
document.querySelector(".add").addEventListener('click',function(){
  document.querySelector(".list").innerHTML+=`
  <div id="item">
  <p>${input.value}</p> <div><button onclick="del(this)">Delete</button> <button onclick="edit(this)">Edit</button></div>
</div>
  `
  input.value=''
  

})
let para=document.querySelector(".item p")
function del(a){
  a.parentElement.parentElement.remove()
}
input.setAttribute
function edit(data){
  data.parentElement.parentElement.children[0].setAttribute("contenteditable","true")
}