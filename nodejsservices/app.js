var express = require('express') //llamamos a Express
var app = express()               

app.get('/',(req,res)=>res.send('500 error'))
app.get('/error',(req,res)=>res.send(error()))

app.use(function(err,req,res,text){
    console.error(err.stack)
    res.type('text/plain')
    res.status(500)
    res.send('intenal server 500')
})
app.listen(8080)