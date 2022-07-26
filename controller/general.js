const Comment = require('../models/comment.js')
const User = require("../models/user.js")
const bcrypt = require("bcryptjs");

exports.createTitle = async (req,res,next) => {
  const {title} = req.body
  
  try{
    let userInput = await Comment.find()
    
    userInput = new Comment({
      title
    })
    
    await userInput.save()
    res.status(200).json(userInput)
  }catch(err){
    res.status(500).send("Server Error");
    console.log(err.message)
  }
}

exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //See if the user exists

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ message: "Email address has already been used" }] });
    }

    user = new User({
      email,
      password,
    });

    //Encrypt password

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};