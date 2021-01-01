// const fs = require ("fs")

// fs.readFile("./笔记.md", (err, file)=>{
//     console.log(file)
// })
// console.log("我不管异步， 我先来")


const http = require("http")
const querystring = require("querystring")

http.createServer((req,res)=>{
    console.log(111)
    let postData = ""
    req.setEncoding("utf-8")

    req.on("data", (trunk)=>{
        postData += trunk
    })

    req.on("end", ()=>{
        res.end(postData)
    })
}).listen(3000)

console.log("服务器启动")
