require('dotenv').config();
// import express from "express";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
// const fruits = ['apple', 'banana', 'pear'];move to fruits file

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

// Connect to Mongodb  / remove deprication
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})

// Index
app.get('/fruits', (req, res)=>{
    // res.send(fruits)
    // find all fruits
    Fruit.find({}, (error, allFruits)=>{

   
    res.render("fruits/Index", {
        fruits: allFruits
    })
    })   
});
// NEW
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
})

// POST (to create a form)
app.post('/fruits', (req, res) => {
    // console.log(req.body)
    // res.send('data received');
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false
    }
    Fruit.create(req.body, (error, createdFruit)=>{
      res.send(createdFruit);  
    })
    // add fruit to the end of array
    fruits.push(req.body);
    console.log(fruits);
   res.redirect('/fruits')
});


// show routes
app.get('/fruits/:id', (req,res)=>{
    // res.send(fruits[req.params.id])
    Fruit.findById(req.params.id)
    res.render('fruits/Show', {
    fruit : foundFruits
    })
    // res.render('Show', {
    //     fruit: fruits[req.params.id]
    // })
});








app.listen(3000, () =>{
    console.log('listening');
})