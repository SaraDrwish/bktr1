const Exam = require('../Models/examModel');

const examService = {
    createExam: async (courseName, date, duration, link) => {
        try {
            const newExam = new Exam({ courseName, date, duration, link });
            return await newExam.save();
        } catch (err) {
            throw new Error('Could not create exam');
        }
    },
    // Add additional functionalities as needed
};

module.exports = examService;