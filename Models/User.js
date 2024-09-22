const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    personalInfo: {
        profileImage: { type: String },
        name: { type: String, required: true },
        nearArea: { type: String },
        city: { type: String },
        email: { type: String, required: true },
        mobileNo: { type: String, required: true }
    },
    education: {
        tenthGrade: {
            schoolName: { type: String },
            marks: { type: Number },
            passingYear: { type: Number }
        },
        twelfthGrade: {
            schoolName: { type: String },
            marks: { type: Number },
            passingYear: { type: Number }
        },
        college: {
            collegeName: { type: String },
            marks: { type: Number },
            passingYear: { type: Number }
        }
    },
    experience: {
        organizationName: { type: String },
        programName: { type: String },
        roleAchievement: { type: String },
        projectsInInternship: { type: String }
    },
    projects: [{
        projectTitle: { type: String },
        projectDescription: { type: String },
        technologiesUsed: { type: String },
        roleInProject: { type: String }
    }]
});

module.exports = mongoose.model('Resume', ResumeSchema);
