const mongoose = require("mongoose");

const issuerequestSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentSchema"
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TotalBooks"
    }
});

module.exports = mongoose.model("IssueRequestSchema",issuerequestSchema);