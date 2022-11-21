require('dotenv').config() // load env variables
const express=require('express')
const app=express()
const PORT=3500
const morgan=require('morgan') // logger for our request
const pokemonsRoute=require('./controllers/pokedex')
const pokenmons=require('./models/pokemons')

app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true})) // parse html form data -> req.body
app.use(express.static('public')) //static allows us to send files to the front end
app.use('/pokemons', pokemonsRoute)

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(PORT, (req, res)=>{
    console.log(`Listening to ${PORT}`)
})