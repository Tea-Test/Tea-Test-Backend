const User = require("../models/gradeModel");

//get all grades
exports.getGrades = async function (req, res, next) {
    try {
      const result = await Grade.find();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  // post a grade (/grades)
  exports.createGrade = async (req, res) => {
    try {
      const newGrade = new Grade(req.body);
      const savedGrade = await newGrade.save();
      res.status(201).json(savedGrade);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };