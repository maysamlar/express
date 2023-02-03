const express=require("express")
const UserRouter=express.Router();




UserRouter.get("/boutique",(req,res)=>{
const date=new Date();
const hours=date.getHours();
if(hours>9&& hours<17) {
res.render("opened") ;}
else{
    res.render("closed");
}
}) ;



module.exports = UserRouter ;