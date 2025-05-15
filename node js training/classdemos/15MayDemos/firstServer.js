const http = require('http');
let server=http.createServer((req,res)=>{{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello world");
}}  
);

server.listen(3005,()=>{console.log("server is running on port 3005")});