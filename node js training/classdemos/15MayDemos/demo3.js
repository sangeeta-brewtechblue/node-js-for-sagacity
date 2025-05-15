const fetchPromise1 = fetch('https://jsonplaceholder.typicode.com/users/1');
const fetchPromise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
const fetchPromise3 = fetch('https://jsonplaceholder.typicode.com/comments/3');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]).then((responses)=>{
    for (const response of responses) {
        console.log(`received response: ${response.status} for ${response.url}`);
    }
}).catch((error)=>{
    console.log(`error: ${error}`);
}).finally(()=>{
    console.log('finally');
});

