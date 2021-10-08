const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req,res)=>{

    let file;
    let url = new URL(`localhost:${req.url.toString()}`);

    if(url.pathname==="/"){
        file = __dirname+"/index.html";
    }
    else {
    file = __dirname+url.pathname;
    }
    
    
    res.setHeader('Content-Type','text/html');


    fs.readFile(file,(err,data)=>{

        if(err) {
            fs.readFile(__dirname+'404.html',(data)=>{
                res.end(data)
            })
        };
        
        res.end(data)
        
    });

   
});

server.listen(8080,()=>{
    console.log("Server listening on port 8080");
});