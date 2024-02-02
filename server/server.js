const express = require('express');
const dbconnect=require('./config/db_connect');
const Users = require('./model/user');
const cors = require('cors');

const app = express();
dbconnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post ("/",async (req,res)=>{
//     let data = await new Users(req.body);
//     console.log(req.body);
//     let result =  data.save();
//     res.send("done");
// });

// app.get("/users",async(req,res)=>{
//     let data = await Users.find();
//     res.send(data);
// });
// app.delete("/:_id",async(req,res)=>{
//     console.log(req.params);
//     let data = await Users.findOneAndDelete(req.params);
    
//     res.send(data);

// })
// app.put("/:_id",async(req,res)=>{
//     let data = await Users.updateOne(
//         req.params,
//         {
//             $set: req.body
//     });
//     res.send(data);
// })
// app.get("/search/:key",async(req,res)=>{
//     console.log(req.params.key);
//     let data = await Users.find(
//         {
//             "$or":[
//                 {name:{$regex:req.params.key}},
//                 {brand:{$regex:req.params.key}}
//             ]
//         }
//     )
//     res.send(data);
// })

app.use("/", require("./routes"));

app.listen(8080,()=>{
    console.log("server is connected")
});