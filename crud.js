
function additem(){
  let input =document.querySelector("#search")
let val= input.value
  document.querySelector(".list").innerHTML+=`
  <div class="item">
  <p>${val}</p>
  <div>
    <button onclick="del(this)">Delete</button>
    <button onclick="edit(this)">Edit</button>
  </div>
</div>
  `
input.value = ""
}
function del(a){
a.parentElement.parentElement.remove()
}
function edit(data){

  data.parentElement.parentElement.children[0].setAttribute("contenteditable","true")
}