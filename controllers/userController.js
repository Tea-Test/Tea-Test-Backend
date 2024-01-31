const User = require('../models/userModel')

//post a user (/users)
exports.createUser = async (req, res) => {    
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }    
};

//get all user (/users)
exports.getAllUsers = async function (req, res, next) {
    try {
        const result = await User.find();
        res.status(200).json(result);
    } 
    catch (error) {
        next(error)
    }

};

//get a user (/users/nimal@gmail.com)
exports.getUserByEmail = async (req, res) => {
    try {
      const email = req.params.email;
      const user = await User.findOne({ email });
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching user' });
    }
  };
  

  //update a user
  exports.updateUser = async (req, res) => {
    try {
      const email = req.params.email; // Access email from route parameter
      const updatedUser = req.body; // Get updated user data from request body
  
      const user = await User.findOneAndUpdate(
        { email },
        updatedUser,
        { new: true } // Return the updated user document
      );
      res.json({ message: user.name + ' Updated successfully'});
      
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating user' });
    }
  };

//delete a user
exports.deleteUser = async (req, res) => {
    try {
      const email = req.params.email; // Access email from route parameter
  
      const user = await User.findOneAndDelete({ email });
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: user.name + ' deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting user' });
    }
  };
  