const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    category: String,
    status: String,
    date: Date,
    time: String,
    content: String,
    cover: String,
     isPublished: {
        type: Boolean,
        default: false  
    },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;