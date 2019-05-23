const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
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