const express = require("express");
const router = express.Router();
const Appointment = require("../Model/AppointmentModel");

// Add Appointment
router.post("/addAppointment", async (req, res) => {
  try {
    const { doctorId, patientId, dateTime, notes } = req.body;

    if (!doctorId || !patientId || !dateTime) {
      return res.status(400).json({ message: "Doctor ID, Patient ID, and DateTime are required" });
    }

    const newAppointment = new Appointment({
      doctorId,
      patientId,
      dateTime,
      notes,
    });

    const savedAppointment = await newAppointment.save();

    res.status(201).json({ message: "Appointment added successfully!", appointment: savedAppointment });
  } catch (error) {
    console.error("Something went wrong", error.message);
    res.status(400).json({ message: "Something went wrong while adding Appointment" });
  }
});

// Get all Appointments
router.get("/getAppointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error.message);
    res.status(500).json({ message: "Error fetching appointments. Please try again." });
  }
});

// Get Appointment by ID
router.get("/getAppointment/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ appointment });
  } catch (error) {
    console.error("Error fetching appointment:", error.message);
    res.status(500).json({ message: "Error fetching appointment. Please try again." });
  }
});

// Update Appointment by ID
router.put("/updateAppointment/:id", async (req, res) => {
  try {
    const { doctorId, patientId, dateTime, notes } = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { doctorId, patientId, dateTime, notes },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment updated successfully!", appointment: updatedAppointment });
  } catch (error) {
    console.error("Error updating appointment:", error.message);
    res.status(500).json({ message: "Error updating appointment. Please try again." });
  }
});

// Delete Appointment by ID
router.delete("/deleteAppointment/:id", async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully!", appointment: deletedAppointment });
  } catch (error) {
    console.error("Error deleting appointment:", error.message);
    res.status(500).json({ message: "Error deleting appointment. Please try again." });
  }
});

module.exports = router;
