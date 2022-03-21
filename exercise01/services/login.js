const { user } = require("../models/user");

const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
  
      console.log(user);
  
      let msg = "";
  
      if (user == null)
        msg = { success: false, error: "The user's information is incorrect~" };
      else msg = user;
  
      res.status(200).json(msg);
    } catch (error) {
      console.log(error);
  
      res.status(400).json(error);
    }
}
module.exports = {
    login,
}