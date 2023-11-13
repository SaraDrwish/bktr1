const Joi = require('joi');

// Validation schema for Articles
const articleValidation = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    publishDate: Joi.date().iso().required(),
    content: Joi.string().required(),
    cover: Joi.string().uri().required(),
    isPublished: Joi.boolean().required()
});

// Validation schema for Exams
const examValidation = Joi.object({
    courseName: Joi.string().required(),
    date: Joi.date().iso().required(),
    duration: Joi.string().required(),
    link: Joi.string().uri().required()
});

module.exports = {
    articleValidation,
    examValidation
};