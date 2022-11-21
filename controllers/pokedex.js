const express=require('express')
const pokemons=require('../models/pokemons')
const router=express.Router()

router.get('/', (req, res)=>{
    res.render('index.ejs', {pokemons})
})

// add new pokemon
router.get('/new', (req, res)=>{
    res.render('new.ejs')
})

router.post('/', (req, res)=>{
    pokemons.unshift(req.body)
    res.redirect('/pokemon')
})

router.get('/:id',(req, res)=>{
        res.render('show.ejs', {pokemon:pokemons[req.params.id]})
    })

module.exports=router