// const {email}=req.body
    
//     function generateOTP() {
//         return randomize('A0', 6);
//     }
      
//     async function sendOTPEmail(email, otp) {
//         try {
//             const transporter = nodemailer.createTransport({
//               service:'gmail',
//                 auth:{
//                     user:'aarumugapandi762004@gmail.com',
//                     pass:'dpyi etht twox uuer'
//                 },
//             }); 
        
//             const mailOptions = {
//               from: 'aarumugapandi762004@gmail.com',
//               to: email,
//               subject: 'Your OTP for Email Verification',
//               text: `Your OTP is: ${otp}. Please use this to verify your email.`,
//             };
        
//             const info = await transporter.sendMail(mailOptions);
//             console.log('Email sent: ' + info.response);
//         } catch (error) {
//             console.error('Error sending email: ', error);
//         }finally{
//             res.redirect('/otp.html')
//         }
//     }
//     const otp = generateOTP();
//     sendOTPEmail(email, otp);
