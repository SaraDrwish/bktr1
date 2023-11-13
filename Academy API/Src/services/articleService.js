const Article = require('../Models/articleModel');

const articleService = {
    createArticle: async (title, category, publishDate, content, cover) => {
        try {
            const newArticle = new Article({ title, category, publishDate, content, cover });
            return await newArticle.save();
        } catch (err) {
            throw new Error('Could not create article');
        }
    },
    
    updateArticle: async (articleId, updatedFields) => {
        try {
            return await Article.findByIdAndUpdate(articleId, updatedFields, { new: true });
        } catch (err) {
            throw new Error('Could not update article');
        }
    },

    deleteArticle: async (articleId) => {
        try {
            return await Article.findByIdAndRemove(articleId);
        } catch (err) {
            throw new Error('Could not delete article');
        }
    },

    getAllArticles: async () => {
        try {
            return await Article.find();
        } catch (err) {
            throw new Error('Could not fetch articles');
        }
    },

    getArticleById: async (articleId) => {
        try {
            return await Article.findById(articleId);
        } catch (err) {
            throw new Error('Could not find article');
        }
    },
};

module.exports = articleService;