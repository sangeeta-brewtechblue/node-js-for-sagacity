const fetchPromise= fetch('https://jsonplaceholder.typicode.com/users/1')
console.log(fetchPromise)

fetchPromise.then((response) => {
    console.log(`received response: ${response.status}`)
    const jsonPromise= response.json();
   return jsonPromise;
}).then((data)=>{
    console.log(`received data: ${data.name}`)}).catch((error)=>{console.log(`error: ${error}`)}).finally(()=>{
    console.log('finally')     })


console.log('after fetch')