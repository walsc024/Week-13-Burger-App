var express = require('express');
var burger = require("../models/burger");
var router = express.Router();

router.get('/', (req, res) => {
burger.selectAll((burgerData) => {
    const hbdsObject = {
        burger: burgerData,
    };
    console.log(hbdsObject);
    res.render('index', hbdsObject);
})
})

// router.get('/', (req, res) => {
//     cat.all((data) => {
//       const hbsObject = {
//         cats: data,
//       };
//       console.log(hbsObject);
//       res.render('index', hbsObject);
//     });
//   });









module.exports = router


