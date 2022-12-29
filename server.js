const express = require('express')
const ejs = require('ejs')


const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



//MIDDLEWARE FUNC
app.set("view engine", "ejs")





app.get('/', (req,res) => {
    res.render('index')})



app.listen(port, ()=>console.log("SERVER IS UP"))