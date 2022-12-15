require('dotenv').config();
// import express from "express";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
const methodOverride = require('method-override');
// const fruits = ['apple', 'banana', 'pear'];move to fruits file

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
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
        res.redirect('/fruits')
    //   res.send(createdFruit);  
    })
    // add fruit to the end of array
    // fruits.push(req.body);
    // console.log(fruits);
   res.redirect('/fruits')
});


// show routes
app.get('/fruits/:id', (req, res)=>{
    // res.send(fruits[req.params.id])
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('fruits/Show', {
            fruit : foundFruit
    })
   
    });

    // res.render('Show', {
    //     fruit: fruits[req.params.id]
    // })
});
//Edit
app.get('/fruits/:id/edit', (req, res)=>{
    //find my fruit by id
    //render an edit form
    //pass in the fruit data / payload
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('fruits/Edit', {
            fruit: foundFruit
        })
    })
})
//Put 

app.put('/fruits/:id', (req, res) =>{
    //check if the fruit is ready to eat
    //find fruit by id and update it
    //redirect to the fruit show page
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false
    }
    Fruit.findByIdAndUpdate(rea.params.id, req.body, (err, updatedFruit)=>{
        console.log(updatedFruit);
        res.redirect(`/fruits/${req.params.id}`);
    })
})
// Delete (to put and delete request ,)
app.delete('/fruits/:id', (req, res)=>{
   Fruit.findByIdAndRemove(req.params.id,(err, deleteFruit)=>{
    res.redirect('/fruits')
   })
})
app.get('/fruits/seed', (req, res)=>{
    const seededFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
      ];
  
Fruit.deleteMany({}).then((data)=>{
    fruit.create(seededFruits).then((data)=>{
        res.redirect("/fruits");
    });
});
});







app.listen(3000, () =>{
    console.log('listening');
})