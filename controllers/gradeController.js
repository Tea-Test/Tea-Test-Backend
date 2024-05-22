const Grade = require("../models/gradeModel");

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

  //get details of a grade(/grades/bop)
  exports.getDetailsByGrade = async (req, res) => {
    try {
      const grade = req.params.grade;
      const gd = await Grade.findOne({ grade });
  
      if (!gd) {
        res.status(404).json({ message: "Grade not found" });
      } else {
        res.json(gd);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching Grade details" });
    }
  };