const express = require("express");
const router = express.Router();
const Patient = require("../Model/PatientModel");

// Add Patient
router.post("/addPatient", async (req, res) => {
  try {
    const { _id, name, contactDetails, medicalHistory } = req.body;

    if (!_id || !name) {
      return res.status(400).json({ message: "ID and Name are required" });
    }

    const newPatient = new Patient({
      _id,
      name,
      contactDetails,
      medicalHistory,
    });

    const savedPatient = await newPatient.save();

    res.status(201).json({ message: "Patient added successfully!", patient: savedPatient });
  } catch (error) {
    console.error("Something went wrong", error.message);
    res.status(400).json({ message: "Something went wrong while adding Patient" });
  }
});

// Get all Patients
router.get("/getPatients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ patients });
  } catch (error) {
    console.error("Error fetching patients:", error.message);
    res.status(500).json({ message: "Error fetching patients. Please try again." });
  }
});

module.exports = router;
