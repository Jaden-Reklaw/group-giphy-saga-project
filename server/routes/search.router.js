const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    let search = req.query;
    
    axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}q=${search}`).then(response => {
        res.send(response.data);
    }).catch(error => {
        console.log('Error on GET', error);
        res.sendStatus(500);
    });
})

module.exports = router;