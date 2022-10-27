fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(response => console.log(response));
