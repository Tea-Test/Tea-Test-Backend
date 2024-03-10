const express = require('express');

const router = express.Router();

const newsController = require('../controllers/newsController');

router.post('/', newsController.createNews);
router.get('/', newsController.getAllNews);
router.get('/:no', newsController.getNewsByNo);
router.put('/:no', newsController.updateNews);
router.delete('/:no', newsController.deleteNews);

module.exports = router;