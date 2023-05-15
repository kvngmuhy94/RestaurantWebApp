const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

//done 
router.post('/add',auth.autheticateToken,checkRole.checkRole,(req, res,next)=>{
    let product = req.body;
    query= "insert into product (name,companyId,categoryId,description,price,qty,status) values(?,?,?,?,?,?,'true')";
    connection.query(query,[product.name,product.companyId,product.categoryId,product.description,product.price,product.qty],(err,results)=>{
        if(!err){ 
            return res.status(200).json({message:"Product Added Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// working done
router.get('/get', (req,res,next)=>{
    var query="select p.id, p.name,p.description,p.image1,p.price,p.status,c.id as categoryId,c.name as categoryName,comp.id AS companyId,comp.company_name AS company_name  from product as p JOIN category as c  on p.categoryId = c.id JOIN company comp ON p.companyId = comp.id";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//get all product per company /done
router.get('/getProductByCompany/:companyId',auth.autheticateToken, (req,res,next)=>{
    const companyId = req.params.companyId;
    var query="select * from product where companyId =?";
    connection.query(query,[companyId],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})



//get by category product
router.get('/getByCategory/:id',auth.autheticateToken, (req,res,next)=>{
    const id = req.params.id;
    var query = "select id, name, price, description, image1 from product where categoryId=? and status='true'";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//get single product
router.get('/getById/:id',(req,res,next)=>{
    const id = req.params.id;
    var query = "select id, name, image1, description, price from product where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results[0]);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//get products by company id done
router.get('/getByCompany/:companyId', auth.autheticateToken, (req,res,next)=>{
    const id = req.params.companyId;
    var query="select p.id, p.name,p.description,p.qty,p.image1,p.price,p.status,c.id as categoryId,c.name as categoryName,comp.id AS companyId,comp.company_name AS company_name  from product as p JOIN category as c  on p.categoryId = c.id JOIN company comp ON p.companyId = comp.id";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//working done
router.patch('/update',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
   
    let product = req.body;
    var query = "update product set name=?,categoryId =?,qty =?,description=?,price=? where id=?";
    connection.query(query,[product.name,product.categoryId,product.qty,product.description,product.price,product.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({massage:"Product id does not found"});
            }
            return res.status(200).json({message:"Product Updated Successfully"});
        }
        else{
             return res.status(500).json(err);
        }
    })
} )

//done
router.delete('/delete/:id',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    const id = req.params.id;
     var query = "delete from product where id=?";
     connection.query(query,[id],(err,results)=>{
         if(!err){
             if(results.affectedRows == 0){
                 return res.status(404).json({massage:" Product id does not found"});
             }
             return res.status(200).json({message:"Product Deleted Successfully"});
         }
         else{
              return res.status(500).json(err);
         }
     })
 } )

 //working done
 router.patch('/updateStatus',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    let user = req.body;
    var query = "update product set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({massage:"Product id does not found"});
            }
            return res.status(200).json({message:"Product StatusUpdated Successfully"});
        }
        else{
             return res.status(500).json(err);
        }
    })
} )
module.exports=router;