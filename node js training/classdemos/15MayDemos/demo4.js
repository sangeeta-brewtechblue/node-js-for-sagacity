const fetchPromise1 = fetch('https://jsonplaceholder.typicode.com/users/1');
const fetchPromise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
const fetchPromise3 = fetch('https://jsonplaceholder.typicode.com/comments/3');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3]).then((response)=>{
   
        console.log(`received response: ${response.status} for ${response.url}`);
    
}).catch((error)=>{
    console.log(`error: ${error}`);
}).finally(()=>{
    console.log('finally');
});