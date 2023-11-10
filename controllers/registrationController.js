const User = require("../model/userSchema")
const bcrypt = require('bcrypt');

let registrationController =async (req,res)=>{

    let {name,email,password} = req.body


    let existingUser = await User.find({email:email})

    if(existingUser.length == 0){
        if(!name){
            res.send("Name Required")
        }else if(!email){
            
            res.send("Email Required")
            
        }else if(!password){
            res.send("Password Required")
        }else{

    
                bcrypt.hash(password, 10, function(err, hash) {
                    
                    let user = new User({
                        name: name,
                        email: email,
                        password: hash
                    })
            
                    user.save()
            
            
                    res.send(user)
                });

    
            
        }
    }else{
        res.send("Email Already Exits")
    }




    
}

module.exports = registrationController