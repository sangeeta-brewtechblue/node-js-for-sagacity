const fs = require('fs');

fs.writeFile('hello.txt','Helloworld..local file system',(err)=>{
    if(err)
        throw err;
    console.log("file created and data written");
})

fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err)
        throw err;
    console.log("data from file",data);
})

fs.appendFile('hello.txt','\n appending some data to already existing ',(err)=>{
    if(err)
        throw err;
    console.log("data appended");
})
fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err)
        throw err;
    console.log('data from file',data);
})
fs.rename('hello.txt','welcome.txt',(err)=>{
    if(err)
        throw err;
    console.log('file renamed')
})

fs.unlink('welcome.txt',(err)=>{
    if(err)
        throw err;
    console.log('file deleted')
})
