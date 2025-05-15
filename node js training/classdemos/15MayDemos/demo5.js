 async function myasyncFunction(){

   console.log("async fun started");
   console.log("async fun executing");
   console.log("async fun executing");
   console.log("async fun executing");
   return("async returned")

}

myasyncFunction().then((result)=>{
    console.log("String recd"+result)
})