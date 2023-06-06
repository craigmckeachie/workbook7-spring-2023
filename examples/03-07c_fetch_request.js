fetch("http://jsonplaceholder.typicode.com/users/1")
  .then(function parseJSONToObject(response) {
    return response.json();
  })
  .then(function logBody(body) {
    console.log(body);
  });
