const express=require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hello world');        
})


app.listen(3000,()=>{console.log("server running on port 3000");

})
// This code creates a simple Express server that listens on port 3000 and responds with "hello world" when the root URL is accessed.;