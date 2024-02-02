const mongoose = require('mongoose');
const dbconnect=  async ()=>{
    await mongoose.connect("mongodb://localhost:27017/User_data");
    console.log("Connection to Database is successfully")
}

module.exports=  dbconnect;