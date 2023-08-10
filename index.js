const express = require('express')
const http=require('http')
const fs = require('fs/promises');

 async function test() {
    try {
        const stats = await fs.stat("C:/Users/91934/Desktop/SURYA/TASK/nodejs-filesystem/10-08-2023:09:53");
        console.log(stats.isFile());  
    } catch (err) {
        console.error(err);
    }
    console.log(stats.ctime);
} 
const app = http.createServer((request, response) => {
    response.end(test());
})
const PORT = 3001;
app.listen(PORT);
console.log(`server running on port ${PORT}`);
