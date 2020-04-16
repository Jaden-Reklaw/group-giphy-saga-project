const express = require('express');
const router = express.Router();
const axios = require('axios');

//Need in case you are adding api_key through .env
const dotenv = require('dotenv');
dotenv.config();

router.get('/', (req, res) => {
    let search = req.query;
    console.log('search',search);
    
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search.q}`).then(response => {
        res.send(response.data);
    }).catch(error => {
        console.log('Error on GET', error);
        res.sendStatus(500);
    });
})

module.exports = router;