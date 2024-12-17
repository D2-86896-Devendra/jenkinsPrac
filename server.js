const express=require('express')
const app=express()

app.get('/',(request,response)=>
{
    response.send('Devendra comple its all dreams')
})

app.listen(7878,'0.0.0.0',()=>
{
    console.log('server listen on port 7878')
})
