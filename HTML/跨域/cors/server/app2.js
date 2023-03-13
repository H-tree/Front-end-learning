const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/home',(req,res)=>{
    console.log(req.headers);
res.end('hello world')
})
app.put('/getData',(req,res)=>{//复杂请求
    //复杂请求为option所以跨域的情况下接收不到
    console.log(req.headers, 're');
    res.end('hello world复杂请求')
})
app.listen(3000,()=>{
    console.log('3000端口已启动');
})