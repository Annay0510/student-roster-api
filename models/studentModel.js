const mongoose =require ("mongoose");

const studentSchema = new mongoose.Schema ({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    Email: {
        type: String,
    },
    studentId: {
        type: Number,
    },
    headShot: {
        type: String,
    },
}) 
const studentProfile = mongoose.model("studentProfile",studentSchema)
module.exports = studentProfile;