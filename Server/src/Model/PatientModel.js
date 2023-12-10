const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contactDetails: {
      type: String,
    },
    medicalHistory: {
      type: String,
    },
  },
  {
    collection: "Patient",
    versionKey: false,
  }
);

const PatientModel = mongoose.model("Patient", PatientSchema);

module.exports = PatientModel;
