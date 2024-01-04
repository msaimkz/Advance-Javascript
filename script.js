fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=6c8daf0357046c83abd77d5729679271"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
  });
