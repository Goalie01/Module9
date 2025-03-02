//Slide 32 example

// const express = require('express')
// const router = express.Router()

// router.get('/add', (req, res) => {
//     res.send('Add')
// })

// module.exports = router

//Slide 33 example

// const express = require('express')
// const router = express.Router()

// router.get('/add', (req, res) => {
//     console.log(req.query)
//     res.send(req.query)
// })

// module.exports = router

//slide 34 example

const express = require('express')
const router = express.Router()

//Route for adding numbers

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    
})

//Slide 36 - Excercise 2

//Route for subtrating numbers

router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})
})

//Route for dividing numbers

router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let fraction = number1 / number2
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})
})

//Route for multiplying numbers

router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})
})


router.get('/')
module.exports = router