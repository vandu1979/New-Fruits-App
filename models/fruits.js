const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    color : {
        type: String,
        require: true
    },
    readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema);
module.exports = Fruit;












// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// module.exports = fruits;