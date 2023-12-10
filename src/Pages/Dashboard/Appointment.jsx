import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    patientId: '',
    dateTime: '',
    notes: '',
  });

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the server
    axios.get('http://localhost:5000/getAppointments') // Replace with your endpoint
      .then(response => setAppointments(response.data.appointments))
      .catch(error => console.error('Error fetching appointments:', error.message));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your logic to handle appointment submission
      console.log('Appointment data submitted:', formData);
      // You can send the data to the server for further processing
      const response = await axios.post('http://localhost:5000/addAppointment', formData); // Replace with your endpoint
      setAppointments([...appointments, response.data.appointment]);
      setFormData({
        doctorId: '',
        patientId: '',
        dateTime: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error adding appointment:', error.message);
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      // Add your logic to handle appointment deletion
      await axios.delete(`http://localhost:5000/deleteAppointment/${appointmentId}`); // Replace with your endpoint
      setAppointments(appointments.filter(appointment => appointment._id !== appointmentId));
    } catch (error) {
      console.error('Error deleting appointment:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Set Appointment</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg mb-8">
        <div className="mb-4">
          <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700">
            Doctor ID
          </label>
          <input
            type="number"
            id="doctorId"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">
            Patient ID
          </label>
          <input
            type="number"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">
            Date & Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Set Appointment
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map(appointment => (
          <div key={appointment._id} className="bg-white shadow-md p-6 rounded-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Appointment Details</h3>
            <p><strong>Doctor ID:</strong> {appointment.doctorId}</p>
            <p><strong>Patient ID:</strong> {appointment.patientId}</p>
            <p><strong>Date & Time:</strong> {new Date(appointment.dateTime).toLocaleString()}</p>
            <p><strong>Notes:</strong> {appointment.notes}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleDelete(appointment._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
