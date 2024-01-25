import { collection } from '../Database/Collection.js';
import { transporter } from '../Transporter/Transporter.js';
import { randomBytes } from 'crypto';
import  Moment  from 'moment-timezone';
const PORT=3000

Moment.tz.setDefault('Asia/Kolkata')
const RegisterFun= async (req, res) => {


    try {
      const { username,email,password,dob,gender
      } = req.body;
  
      const verificationToken = randomBytes(20).toString('hex');
      let isAlreadyVerified= await collection.findOne({Email:email})
  
      if(!isAlreadyVerified){
        await collection.insertOne({ 
        Username:username,
        Email:email,
        Password:password,
        DoB:dob,
        Gender:gender,
        RegisteredAt:Moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
      })
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: `Click the following link to verify your email: http://localhost:${PORT}/verify/${email}/${verificationToken}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json('Registration successful. Check your email for verification');
      }else{
        res.send("<h1>All ready verified Mail</h1>"
        +"<p>Use Other Email</p>")
        return
      } 
      
    } catch (error) {
      console.error(error);
      res.status(500).json('Internal Server Error');
    }
  }

  export {RegisterFun}