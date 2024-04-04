const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//sign-up
//sign-up
router.post("/signup", async (req, res) => {
    try {
        const { email, name, lastname, number, numberu } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashpass = bcrypt.hashSync(numberu, salt);
        const hashpass1 = bcrypt.hashSync(number, salt);
         const user = new User({ email, name, lastname, number, numberu:hashpass });
        const savedUser = await user.save();
        res.status(200).json({ user: savedUser });
    } catch (error) {
        console.error("Error saving user:", error.message); // Log the error message
        res.status(400).json({ message: "user exist" });
    }
});
//login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(200).json({ message: "Wrong email or email doesn't exist" });
      }
  
      const reqNumber = req.body.number.trim(); // Trim whitespace from request number
      const userNumber = String(user.number).trim(); // Convert user number to string and trim whitespace
  
      console.log('Request number:', reqNumber);
      console.log('User number:', userNumber);
  
      // Compare trimmed numbers
      const isNumberCorrect = reqNumber === userNumber;
  
      console.log('Is number correct?', isNumberCorrect);
  
      if (!isNumberCorrect) {
        return res.status(200).json({ message: "Wrong number or number doesn't exist" });
      }
  
      // Send the user data without the password
      const { number, ...others } = user._doc; // Destructure the user object
      return res.status(200).json({ others, message: "Welcome to Mobilis" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });
  

module.exports = router;