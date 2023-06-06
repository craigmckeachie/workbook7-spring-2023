fetch("http://jsonplaceholder.typicode.com/users/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (body) {
    console.log(body);
  });
