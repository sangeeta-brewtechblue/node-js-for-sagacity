const fs = require('fs');
const path =require('path');

fs.mkdir('pkg110',(err)=>{
    if(err)
        throw err;
    console.log('directory created');   
})

fs.mkdir(path.join('pkg110','pkg22'),(err)=>{
    if(err)
        throw err;
    console.log('directory created');
})

fs.writeFile(path.join('pkg110','pkg22','hello.txt'),'Helloworld..local file system',(err)=>{
    if(err)
        throw err;
    console.log("file created and data written");

    // Create a CSV file
    const csvData = 'name,age\nAlice,30\nBob,25';
    fs.writeFile(path.join('pkg110', 'pkg22', 'data.csv'), csvData, (err) => {
        if (err)
            throw err;
        console.log('CSV file created and data written');
    });
});

fs.writeFile(path.join('pkg110','hello110.txt'),'writing in hello110 inside pkg110',(err)=>{
    if(err)
        throw err;
    console.log("file created and data written");       
})


fs.readdir(__dirname,(err,files)=>{
    if(err)
        throw err;
    console.log("files in directory",files);
})

/*
fs.rmdir('pkg11/pkg22',(err)=>{
    if(err)
        throw err;
    console.log('directory deleted');

fs.rm('pkg110', { recursive: true, force: true }, (err) => {
    if (err)
        throw err;
    console.log('directory deleted recursively');
});
*/