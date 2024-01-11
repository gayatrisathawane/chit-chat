import User from './../model/User.model.js'
import md5 from 'md5'


//user SignUp Api

const signupPostApi = async(req,res)=>{

    const {email,name,password}= req.body

    const newUser = new User({
        name,email,password: md5(password),
    })

    const savedUser = await newUser.save()


    try{
        return res.status(201).json({
            status:true,
            message:"signup successfully",
            data:savedUser,
    
        })

    }
    catch(e){
        return res.status(400).json({
            message:e.message,
            status:false
        })
    }
    
}

//User Login Api

const loginPostApi =async(req,res)=>{
    const {email,password}=req.body;

    const loginUser = await User.findOne({email,password:md5(password)})
    
    if (loginUser == null) {
        return res.json({
            success: false ,
            message: "invalid  crendentials!"
        })
    }
    res.status(201).json({
        success: true,
        data: loginUser,
        message: "Login successfully !"
    })
}
export {signupPostApi,loginPostApi}

