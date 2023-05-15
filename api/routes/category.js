const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');


//done
router.post('/add',auth.autheticateToken,checkRole.checkRole,(req, res,next)=>{
    let category = req.body;
    query= "insert into category (name,companyId) values(?,?)";
    connection.query(query,[category.name,category.companyId],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Category Added Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//get all category per company done
router.get('/getCategoryByCompany/:companyId',auth.autheticateToken,(req,res,next)=>{
    const companyId = req.params.companyId;
    var query="select * from category where companyId =?";
    connection.query(query,[companyId],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


// ***

router.get('/get',auth.autheticateToken, (req,res,next)=>{
    var query="select * from category order by name";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//done
router.patch('/update',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    let product = req.body;
    var query = "update category set name=? where id=?";
    connection.query(query,[product.name,product.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({massage:"Category id does not found"});
            }
            return res.status(200).json({message:"Category Updated Successfully"});
        }
        else{
             return res.status(500).json(err);
        }
    })
} )

//done
router.delete('/delete/:id',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    const id = req.params.id;
     var query = "delete from category where id=?";
     connection.query(query,[id],(err,results)=>{
         if(!err){
             if(results.affectedRows == 0){
                 return res.status(404).json({massage:"Category id does not found"});
             }
             return res.status(200).json({message:"Category Deleted Successfully"});
         }
         else{
              return res.status(500).json(err);
         }
     })
 } )

module.exports=router;