const News = require("../models/newsModel");

//post a new article
exports.createNews = async (req, res, next) => {
  try {
    const newNews = new News(req.body);
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);

  } catch (error) {
    res.status(400).json({ message: "Couldnt post" + error.message });
  }
};

//get all news articles
exports.getAllNews = async (req, res, next) => {
  try {
    const result = await News.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

//get a news (/news/0001)
exports.getNewsByNo = async (req, res, next) => {
  try {
    const no = req.params.no;
    const news = await News.findOne({ no });

    if (!news) {
      res.status(404).json({ message: "News not found." });
    } else {
      res.json(news);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching news." });
  }
};

//update a news
exports.updateNews = async (req, res) => {
  try {
    const no = req.params.no;
    const updatedNews = req.body;

    const news = await News.findOneAndUpdate({ no }, updatedNews, {
      new: true,
    });
    res.json({ message: "News updated." });

    if (!news) {
      res.status(404).json({ message: "News not found" });
    } else {
      res.json(news);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating News" });
  }
};

//delete a news
// exports.deleteNews = async (req, res) => {
//   try {
//     const no = req.params.no;
//     const news = await News.findOneAndUpdate({ no });

//     if (!news) {
//       req.status(404).json({ message: "News not found" });
//     } else {
//       res.json({ message: "Deleted successfully" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error deleting news" });
//   }
// };

// There is a  error in delete news. that's why i commented out.***