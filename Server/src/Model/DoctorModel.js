const mongoose = require("mongoose");

// Schedule subdocument schema
const ScheduleSchema = new mongoose.Schema(
  {
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const DoctorSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: String,
      // Add any specific validation for contact information if needed
    },
    schedule: [ScheduleSchema], // Array of schedule subdocuments
  },
  {
    collection: "Doctor",
    versionKey: false,
  }
);

const DoctorModel = mongoose.model("Doctor", DoctorSchema);

module.exports = DoctorModel;
