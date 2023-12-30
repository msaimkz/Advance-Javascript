


fetch('https://fakestoreapi.com/products')
.then(function(response){
  return response.json()
}).then(function(result){
  console.log(result)
})



fetch('https://dummyjson.com/products')
.then(function(response){
  return response.json()
}).then(function(result){
  console.log(result)
})