const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type:Number,
      ref: "Doctor", // Reference to the Doctor model
      required: true,
    },
    patientId: {
      type: Number,
      ref: "Patient", // Reference to the Patient model
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  {
    collection: "Appointment",
    versionKey: false,
  }
);

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);

module.exports = AppointmentModel;
