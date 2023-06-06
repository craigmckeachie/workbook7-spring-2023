fetch("http://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((body) => console.log(body));
