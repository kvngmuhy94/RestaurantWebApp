const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
//
router.post('/add',auth.autheticateToken,(req, res,next)=>{
    let company = req.body;
    query= "insert into Company (company_name,slogan,description,logo,owner_name,phone_number,email,company_type,created_at,status) values(?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP,'true')";
    connection.query(query,[company.company_name,company.slogan,company.description,company.logo,company.owner_name,company.phone_number,company.email,company.company_type,company.created_at],(err,results)=>{
        if(!err){ 
            return res.status(200).json({message:"Company Created Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.get('/get', (req,res,next)=>{
    var query="select company.id,company.company_name,company.slogan,company.description,company.logo,company.owner_name,company.phone_number,company.email,company.company_type,company.created_at,company.status from company";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


router.patch('/update',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    let product = req.body;
    var query = "update company set company_name=?,slogan=?,description=?,logo=?,owner_name=?,phone_number=?,email= ?,company_type=? where id=?";
    connection.query(query,[company.company_name,company.slogan,company.description,company.logo,company.owner_name,company.phone_number,company.email,company.company_type],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({massage:"Company id does not found"});
            }
            return res.status(200).json({message:"Company Updated Successfully"});
        }
        else{
             return res.status(500).json(err);
        }
    })
} )

router.delete('/delete/:id',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    const id = req.params.id;
     var query = "delete from company where id=?";
     connection.query(query,[id],(err,results)=>{
         if(!err){
             if(results.affectedRows == 0){
                 return res.status(404).json({massage:" Company id does not found"});
             }
             return res.status(200).json({message:"Company Deleted Successfully"});
         }
         else{
              return res.status(500).json(err);
         }
     })
 } )

module.exports = router;