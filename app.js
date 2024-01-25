const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const nodemailer = require('nodemailer');
const randomize = require('randomatic'); 

const app=express()

mongoose.connect('mongodb://0.0.0.0/Registrer')

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    dob:Date,
    gender:String, 
});
const User = mongoose.model('userregistrations', userSchema); 

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html') 
})


app.post('/register',async(req,res)=>{
    const {username,email,password,dob,gender}=req.body
    try {
        const newUser =  User({username, email, password, dob,gender});
        await newUser.save();

        console.log('User registered successfully:');
        res.send('User registered successfully!');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
    // function generateOTP() {
    //     return randomize('A0', 6);
    // }
      
    // // async function sendOTPEmail(email, otp) {
    // //     try {
    //     //     const transporter = nodemailer.createTransport({
    //     //       service:'gmail',
    //     //         auth:{
    //     //             user:'aarumugapandi762004@gmail.com',
    //     //             pass:'dpyi etht twox uuer'
    //     //         },
    //     //     }); 
        
    //     //     const mailOptions = {
    //     //       from: 'aarumugapandi762004@gmail.com',
    //     //       to: email,
    //     //       subject: 'Your OTP for Email Verification',
    //     //       text: `Your OTP is: ${otp}. Please use this to verify your email.`,
    //     //     };
        
    //     //     const info = await transporter.sendMail(mailOptions);
    //     //     console.log('Email sent: ' + info.response);
    //     // } catch (error) {
    //     //     console.error('Error sending email: ', error);
    //     // }finally{
    //     //     res.redirect('/otp.html')
    //     // }
    // }
    // const otp = generateOTP();
    // sendOTPEmail(email, otp);
    // OTP=otp
})
app.post('/login', async (req, res) => { 
    const { email, password } = req.body;
    const foundUser=await User.findOne({"email":email})
    if(foundUser.password===password){ 
        console.log("Ok");
        // res.send("Logined Successful")
        res.redirect("https://www.google.com")
    }else{
        res.send("Login Failed")
        console.log("Not Ok");
    }
});
app.post('/validationusingotp',(req,res)=>{
    const {a,b,c,d,e,f}=req.body
    console.log(OTP,a,b,c,d,e,f);
    res.send("Ok")
});

app.listen(3001,()=>{
    console.log("http://localhost:3001");
})