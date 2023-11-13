const express = require('express');
const router = express.Router();
const articleController = require('../Controllers/articleController');

router.post('/articles', articleController.createArticle);
router.get('/articles', articleController.getAllArticles);
router.get('/articles/:articleId', articleController.getArticleById);
router.put('/articles/:articleId', articleController.updateArticle);
router.delete('/articles/:articleId', articleController.deleteArticle);

module.exports = router;