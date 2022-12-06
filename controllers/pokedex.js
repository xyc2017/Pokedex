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
    res.redirect('/pokemons')
})

//edit pokemon
router.get('/:id/edit', (req, res)=>{
    res.render('/views/edit.ejs', {
        pokemon:pokemons[req.params.id]    
    })
})

// router.get('/:id', (req, res)=>{
//     // go and get animal from the database
//    Animals.findById(req.params.id)
//    //find the animal and send it to the edit.ejs to prepopulate the form
//    .then((animal)=>{
//     res.render('animals/show.ejs', {animal})
//     })
// })

// add show route
router.get('/:id',(req, res)=>{
    res.render('show.ejs', {pokemon:pokemons[req.params.id]} 
    )
   
})

router.delete('/:id', (req, res)=>{
   for (let i=0; i<=pokemons.length; i++){pokemons.splice(pokemons[i],1)}
    res.redirect('/pokemons')
})

module.exports=router