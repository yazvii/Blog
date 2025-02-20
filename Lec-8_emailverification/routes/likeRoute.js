const express = require("express");
const router= express.Router();
const { PrismaClient } = require('@prisma/client');
const isLoggedIn = require("../middleware/verifylogin");
const prisma = new PrismaClient();


router.post("/:blogId",isLoggedIn,async(req,res)=>{
    const {blogId} = req.params;
    const userId = req.user.id;
    const newLike= await prisma.like.create({
        data:{
          authorId:userId,
          blogId:parseInt(blogId) 
        }
    })
    let updatelikecount= await prisma.blog.update({
        where:{
            id:parseInt(blogId)
        },
        data:{
            likecount:{increment:1}
        }

    })
    res.send("Liked successfully")

})

module.exports = router;