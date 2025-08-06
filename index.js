const express =require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');




dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Shop Api running sir ');

})

const startServer= async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB Connected");
    app.listen(PORT, () => {
        console.log("port no 3000 running sir");
      });
   }
   catch(err){
    console.error("failed")
    process.exit(1);//exit with failure 
   }

};
startServer();
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
  
    res.status(500).json({
      message: err.message || 'Something went wrong!',
    });
  });
  