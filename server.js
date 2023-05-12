// Load express
const express = require('express');
const pokemon = require('./pokemon.js');

    // view Engine********************
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


// Welcome rout********************
app.get('/',(req,res)=>{
    
    res.send('Welcome to the Pokemon App!!!!')
})
// Index Page *****************************
app.get('/pokemon', (req,res)=>{
    res.render('Index', { sample : pokemon })
    
})
// Show page **********************
app.get('/pokemon/:id',(req, res)=>{
    res.render('Show', 
    { pokemon: pokemon[req.params.id] }
    );
    //Listener **********************
})
app.listen(3000, function () {
  console.log('Listening on port 3000');
});