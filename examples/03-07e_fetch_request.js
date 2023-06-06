async function fetchUser() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users/1");
  const body = await response.json();
  console.log(body);
}

fetchUser();
