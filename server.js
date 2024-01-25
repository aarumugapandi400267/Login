import express from 'express';
import bodyParser from 'body-parser';
import { RegisterFun } from './backend/Register/Register.js';
import { verifier } from './backend/Verifier/Verify.js';

const app = express();
const PORT = 3002;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html') 
})

app.post('/register',RegisterFun);

app.get('/login', verifier);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
