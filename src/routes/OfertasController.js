const e = require('express');
const express=require('express');
const router=express.Router();
mysqlconnet=require('../db');



router.get('/ofertas',(req,res)=>
{
    const sql='SELECT * FROM vOfertas';
    mysqlconnet.query(sql,(err,rows,fields)=>
    {
        
        console.log(rows);
        if(err) console.log(err);
        else res.status(200).json(rows);
    })
  
});

module.exports=router