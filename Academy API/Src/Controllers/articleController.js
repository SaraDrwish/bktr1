const articleService = require('../services/articleService');

const articleController = {
      createArticle: async (req, res) => {
        try {
            const { title, category, publishDate, content, cover } = req.body;
            const newArticle = await articleService.createArticle(title, category, publishDate, content, cover);
            res.status(201).json(newArticle);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateArticle: async (req, res) => {
        try {
            const { articleId } = req.params;
            const updatedFields = req.body;
            const updatedArticle = await articleService.updateArticle(articleId, updatedFields);
            res.status(200).json(updatedArticle);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteArticle: async (req, res) => {
        try {
            const { articleId } = req.params;
            const deletedArticle = await articleService.deleteArticle(articleId);
            res.status(200).json(deletedArticle);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllArticles: async (req, res) => {
        try {
            const articles = await articleService.getAllArticles();
            res.status(200).json(articles);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getArticleById: async (req, res) => {
        try {
            const { articleId } = req.params;
            const article = await articleService.getArticleById(articleId);
            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).json({ message: 'Article not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = articleController;