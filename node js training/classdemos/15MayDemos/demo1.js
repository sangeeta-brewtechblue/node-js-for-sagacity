const fetchPromise= fetch('https://jsonplaceholder.typicode.com/users/1')
console.log(fetchPromise)

fetchPromise.then((response) => {
    console.log(`received response: ${response.status}`)
   // return response.json()
})

console.log('after fetch')