const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
/*
router.post('/add',auth.autheticateToken,checkRole.checkRole,(req, res,next)=>{
    let product = req.body;
    query= "insert into product (name,companyId,categoryId,description,price,status) values(?,?,?,?,?,'true')";
    connection.query(query,[product.name,product.companyId,product.categoryId,product.description,product.price],(err,results)=>{
        if(!err){ 
            return res.status(200).json({message:"Product Added Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})
*/

//working =>done
router.get('/getallcompany',auth.autheticateToken, checkRole.checkRole,(req,res,next)=>{
    var query="select * from company";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

// working =>done
router.get('/getalluser',auth.autheticateToken, checkRole.checkRole, (req,res,next)=>{
    var query="select * from user";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/getByCompany/:id',auth.autheticateToken, (req,res,next)=>{
    const id = req.params.id;
    var query = "select id, company_name,slogan,description,status,created_at,logo,owner_name,phone_number,email,company_type from company where id=? and status='true'";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/getUserBy/:id',auth.autheticateToken, (req,res,next)=>{
    const id = req.params.id;
    var query = "select id, name, email from user where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return res.status(200).json(results[0]);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//not working 
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

// working =>done
router.delete('/deleteCompany/:id',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
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

 //working =>done
 router.patch('/updateCompanyStatus',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    let user = req.body;
    var query = "update company set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({massage:"Company id does not found"});
            }
            return res.status(200).json({message:"Company Status Updated Successfully"});
        }
        else{
             return res.status(500).json(err);
        }
    })
} )

//working =>done
router.patch('/updateUserStatus',auth.autheticateToken,checkRole.checkRole,(req,res,next)=>{
    let user = req.body;
    var query = "update user set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({massage:"User id does not found"});
            }
            return res.status(200).json({message:"User Status Updated Successfully"});
        }
        else{
             return res.status(500).json(err);
        }
    })
} )
module.exports=router;