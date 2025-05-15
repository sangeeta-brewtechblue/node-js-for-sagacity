async function fetchUsers(){
      let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

     let data = await  response.json();
        console.log(`received data: ${data.name}`);



}
fetchUsers();
console.log('after fetch');
