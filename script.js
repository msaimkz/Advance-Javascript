let input=document.querySelector("#add")
document.querySelector(".add").addEventListener('click',function(){
  document.querySelector(".list").innerHTML+=`
  <div id="item">
  <p>${input.value}</p> <button onclick="del(this)">Delete</button> <button onclick="edit()">Edit</button>
</div>
  `
})
function del(a){
  a.parentElement.remove()
}
function edit(a){
  a.parentElement.remove()
}