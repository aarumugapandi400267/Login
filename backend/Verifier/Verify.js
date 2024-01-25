import { collection } from "../Database/Collection.js";

const verifier=async (req, res) => {
  const { email, password } = req.body;
  const foundUser=await User.findOne({"Email":email})
  if(foundUser.password===password){ 
      console.log("Ok");
      // res.send("Logined Successful")
      res.redirect("https://www.google.com")
  }else{
      res.send("Login Failed")
      console.log("Not Ok");
  }
}
export {verifier}