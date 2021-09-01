const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)

app.listen(process.env.PORT || 2121, ()=>{
    console.log(`App is running on ${process.env.PORT}, you better catch it!`)
})    