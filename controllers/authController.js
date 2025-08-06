const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const register=async(req,res)=>{
   try{
     const {name,email,password }=req.body ;

     //check if user exists 
     const existingUser=await User.findOne({email});
     if(existingUser) return res.status(400).json({ message: 'Email already registered' });

     const salt= await bcrypt.genSalt(10);
     const hashedpassword=await bcrypt.hash(password,salt);

     const newUser=await User.create({
        name,
        email,
        password: hashedpassword
     });

     //generating jwt 
     const token = jwt.sign(
        { userId: newUser._id, role: newUser.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      res.status(201).json({
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      });

   }
   catch(err){
    console.error('Register error:', err.message);
    res.status(500).json({ message: 'Server error' });
   }
}

const login=async(req,res)=>{
  try{
    const {name,email,password }=req.body ;

    //check if user exists 
    const existingUser=await User.findOne({email});
    if(existingUser) return res.status(400).json({ message: 'Email already registered' });

    const salt= await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(password,salt);

    const newUser=await User.create({
       name,
       email,
       password: hashedpassword
    });

    //generating jwt 
    const token = jwt.sign(
       { userId: newUser._id, role: newUser.role },
       process.env.JWT_SECRET,
       { expiresIn: '7d' }
     );
     res.status(201).json({
       token,
       user: {
         id: newUser._id,
         name: newUser.name,
         email: newUser.email,
         role: newUser.role,
       },
     });

  }
  catch(err){
   console.error('Register error:', err.message);
   res.status(500).json({ message: 'Server error' });
  }
}

module.exports={ register,login };