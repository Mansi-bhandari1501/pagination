const Users = require('../model/user');

const create_user = async (req,res, next)=>{
    const user = req.body;
    console.log(user)
    let response = await Users.create(user);
    res.send(response);
}