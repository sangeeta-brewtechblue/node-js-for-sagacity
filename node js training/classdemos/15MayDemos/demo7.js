//await can be used only inside async functions

try{
let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
let data =     await  response.json();
        console.log(`received data: ${data.name}`);

}catch(error){
    console.log(`error: ${error}`);     
}

     


