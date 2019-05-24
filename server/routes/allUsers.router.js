const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res)=> {
    if (req.isAuthenticated()){
        let query = `SELECT "username" from "user"`
        pool.query(query)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('error in GET /api/users', error)
            res.sendStatus(500);   
        })
    }
    else {
        console.log('GET /api/users not Auth');
        res.sendStatus(403);
        
    }
})

module.exports = router;