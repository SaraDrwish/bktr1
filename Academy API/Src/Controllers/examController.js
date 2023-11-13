const examService = require('../Services/examService');

const examController = {
    createExam: async (req, res) => {
        try {
            const { courseName, date, duration, link } = req.body;
            const newExam = await examService.createExam(courseName, date, duration, link);
            res.status(201).json(newExam);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add additional functionalities as needed
};

module.exports = examController;