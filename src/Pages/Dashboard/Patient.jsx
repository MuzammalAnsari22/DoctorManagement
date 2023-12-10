import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Patient() {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    _id: '',
    name: '',
    contactDetails: '',
    medicalHistory: '',
  });

  useEffect(() => {
    // Fetch patient data from the server
    axios.get('http://localhost:5000/getPatients')
      .then(response => setPatients(response.data.patients))
      .catch(error => console.error(error));
  }, []);

  const addPatient = () => {
    axios.post('http://localhost:5000/addPatient', newPatient)
      .then(response => {
        setPatients([...patients, response.data.patient]);
        setNewPatient({
          _id: '',
          name: '',
          contactDetails: '',
          medicalHistory: '',
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-6">Add New Patient</h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientID">
            ID:
            <input
              // placeholder='Enter ID (e.g., 2, 6)'
              className="border rounded w-full py-2 px-3"
              type="number"
              id="patientID"
              value={newPatient._id}
              onChange={(e) => setNewPatient({ ...newPatient, _id: e.target.value })}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
            Name:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="patientName"
              value={newPatient.name}
              onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactDetails">
            Contact Details:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="contactDetails"
              value={newPatient.contactDetails}
              onChange={(e) => setNewPatient({ ...newPatient, contactDetails: e.target.value })}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicalHistory">
            Medical History:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="medicalHistory"
              value={newPatient.medicalHistory}
              onChange={(e) => setNewPatient({ ...newPatient, medicalHistory: e.target.value })}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={addPatient}
        >
          Add Patient
        </button>
      </form>

      <h2 className="text-3xl font-bold mt-8 mb-6">Patient Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map(patient => (
          <div key={patient._id} className="bg-white shadow-md p-6 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">{patient.name}</h3>
            <p className="text-gray-700 mb-2"><strong>Contact Details:</strong> {patient.contactDetails}</p>
            <p className="text-gray-700 mb-2"><strong>Medical History:</strong> {patient.medicalHistory}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
