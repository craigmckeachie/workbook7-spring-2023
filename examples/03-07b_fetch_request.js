function parseJSONToObject(response) {
  return response.json();
}

function logBody(body) {
  console.log(body);
}

fetch("http://jsonplaceholder.typicode.com/users/1")
  .then(parseJSONToObject)
  .then(logBody);

// happending inside promise
//  let returnValue = response.json();
// logBody(returnValue);

// call fetch
// register two functions to run eventually
// function 1 will change JSON string to object(s)
// function 2 will do something with that object(s)

// you call a function (fetch)
//instead of it returning what you want immediately (syncronously)
// it eventually returns what you want later (asyncronously)
// you register functions (callback functions) to run later (eventually)
