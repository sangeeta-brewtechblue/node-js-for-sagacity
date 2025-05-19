const http = require('http')

const server = http.createServer((req,res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if(req.url==='/'){
        res.write("This is home page")
    }      
    else if(req.url==='/about'){
        res.write("This is about page")
    }
    else if(req.url==='/contact'){
        res.write("This is contact page")
    }
    else{
        res.write("404 Not Found")
    }   
   // res.end('Hello World\n')    
})
server.listen(3000, () => {
        console.log('Server running at http://  localhost:3000/')
 })    
    
