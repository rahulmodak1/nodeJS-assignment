const express = require('express')
const router = express.Router()
const fs = require('fs')


// Problem 2 //

router.get('/vegetables', (req, res) => {
    fs.readFile('vegetables.json', 'utf-8', (err, data) => {
        console.log(err);
        res.send(data)
    })
})

// Problem 3 //

router.get('/metrics', (req, res) => {
    const { object, metric, radius } = req.query
  
    if (object == "circle" && metric == 'area' && radius) {
        res.send(`area of circle is ${(Math.PI * (radius * radius)).toFixed(2)}`)
   
    }
    else if (object == "sphere" && metric == 'volume' && radius) {
        res.send(`volume of sphere is ${((4 / 3) * Math.PI * (radius ** 3)).toFixed(2)}`)
       
    }
    else {
        res.send('Input wrong')
    }

})

module.exports = router;