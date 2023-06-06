function parseJSONToObject(response) {
  return response.json();
}

function logBody(body) {
  console.log(body);
}

fetch("http://jsonplaceholder.typicode.com/users/1")
  .then(parseJSONToObject)
  .then(logBody);
