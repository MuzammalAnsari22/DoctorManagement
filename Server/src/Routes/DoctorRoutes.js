const express = require("express");
const router = express.Router();
const Doctor = require("../Model/DoctorModel");

// Add Doctor
router.post("/addDoctor", async (req, res) => {
  try {
    const { _id, name, specialization, contactInfo, schedule } = req.body;

    if (!name || !specialization) {
      return res.status(400).json({ message: "Name and Specialization are required" });
    }

    const newDoctor = new Doctor({
      _id,
      name,
      specialization,
      contactInfo,
      schedule,
    });

    const savedDoctor = await newDoctor.save();

    res.status(201).json({ message: "Doctor added successfully!", doctor: savedDoctor });
  } catch (error) {
    console.error("Something went wrong", error.message);
    res.status(400).json({ message: "Something went wrong while adding Doctor" });
  }
});

// Get all Doctors
router.get("/getDoctors", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ doctors });
  } catch (error) {
    console.error("Error fetching doctors:", error.message);
    res.status(500).json({ message: "Error fetching doctors. Please try again." });
  }
});

module.exports = router;