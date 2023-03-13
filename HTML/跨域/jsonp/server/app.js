const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
    let {callback} = req.query
    res.end(`${callback}('hello world')`)//show()
})
app.listen(3000,()=>{
    console.log('3000端口已启动');
})