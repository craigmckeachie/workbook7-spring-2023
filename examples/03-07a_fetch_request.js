let promiseToReturnResponseFromAPI = fetch(
  "http://jsonplaceholder.typicode.com/users/1"
);

function parseJSONToObject(response) {
  return response.json();
}

function logBody(body) {
  console.log(body);
}

promiseToReturnResponseBodyAsJSObject =
  promiseToReturnResponseFromAPI.then(parseJSON);

promiseToReturnResponseBodyAsJSObject.then(logUser);
