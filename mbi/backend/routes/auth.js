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
        res.status(400).json({ message: "Failed to save user" });
    }
});
//login
router.post("/login", async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(200).json({ message: "Sign up to access mobilis" });
      }

      const reqNumber = req.body.number.trim(); // Trim whitespace from request number
      const userNumber = String(user.number).trim(); // Convert user number to string and trim whitespace

      console.log('Request number:', reqNumber);
      console.log('User number:', userNumber);

      // Compare trimmed numbers
      const isNumberCorrect = reqNumber === userNumber;

      console.log('Is number correct?', isNumberCorrect);

      if (!isNumberCorrect) {
          return res.status(200).json({ message: "Wrong password" });
      }

      const { number, ...others } = user._doc; // Destructure the user object
      return res.status(200).json({ others }); // Send the user data without the password
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;