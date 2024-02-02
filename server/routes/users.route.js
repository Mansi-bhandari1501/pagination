const router = require("express").Router();
const { user_controller } = require("../controllers");
const Users = require('../model/user');
const mongoose = require('mongoose');

// router
//   .route("/")
//   .get(user_controller.get_users)
//   .post(user_controller.create_user);
// router.get("/",(req,res)=>{
//     res.json({ message: "Welcome to user page" });
// });
router.post("/",async (req,res)=>{
    // res.json({message:"hello"});
    const {name, email,age,location} = req.body;
    const user = new Users({name,email,age,location});
    await user.save()
    console.log(user)
    return
    // let response = await Users.save();
    // res.send(response);
    // res.send(response)
});
router.get("/",async (req,res)=>{
    let data = await Users.find();
    // console.log(data);
    res.send(data);
});
router.delete("/:_id",async(req,res)=>{
    console.log(req.params);
    let data = await Users.findOneAndDelete(req.params);
    res.send(data);
});
router.put("/:_id",async(req,res)=>{
    let data = await Users.updateOne(
        req.params,
        {
            $set: req.body
    });
    res.send(data);
})
router.get("/search/:key",async(req,res)=>{
    console.log(req.params.key);
    let data = await Users.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {brand:{$regex:req.params.key}}
            ]
        }
    )
    res.send(data);
});
router.get("/paginatedUsers", async (req, res) => {
    const allUser = await Users.find({});
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
  
    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit
  
    const results = {}
    results.totalUser=allUser.length;
    results.pageCount=Math.ceil(allUser.length/limit);
  
    if (lastIndex < allUser.length) {
      results.next = {
        page: page + 1,
      }
    }
    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      }
    }
    results.result = allUser.slice(startIndex, lastIndex);
    console.log(results)
    res.send(results)
  })

module.exports = router;
