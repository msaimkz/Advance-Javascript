// ********************************************************************************
// ********************Application Programming Interface***************************
// ********************************************************************************


fetch('https://fakestoreapi.com/products')
.then(function(response){
  return response.json()
}).then(function(result){
  console.log(result)
  let container = document.querySelector(".container")
  for(let index=0;index < result.length; index++){
  container.innerHTML += `
  <div class="card" style="width: 18rem;">
  <img src="${result[index].image}" class="card-img-top" alt="..." width="250px" height="250px">
  <div class="card-body">
    <h5 class="card-title">${result[index].title}</h5>
    <p class="card-text">${result[index].description}</p>
    <a href="#" class="btn btn-primary">${result[index].price}</a>
  </div>
  </div>`
  }
})



fetch('https://dummyjson.com/products')
.then(function(response){
  return response.json()
}).then(function(result){
  let container = document.querySelector(".container")
for(let index=0;index < result.products.length; index++){
container.innerHTML += `
<div class="card" style="width: 18rem;">
<img src="${result.products[index].images[0]}" class="card-img-top" alt="..." width="250px" height="250px">
<div class="card-body">
  <h5 class="card-title">${result.products[index].title}</h5>
  <p class="card-text">${result.products[index].description}</p>
  <a href="#" class="btn btn-primary">${result.products[index].price}</a>
</div>
</div>`
}
console.log(result.products)

})



// ********************************************************************************
// ********************Application Programming Interface***************************
// ********************************************************************************