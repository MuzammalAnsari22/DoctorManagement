import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Doctor() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctor data from the server
    axios.get('http://localhost:5000/getDoctors')
      .then(response => setDoctors(response.data.doctors))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-4">Doctor Page</h1>
          <div>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <Link to='/doctorForm'>Add Doctor</Link>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map(doctor => (
            <div key={doctor._id} className="bg-white shadow-md p-6 rounded-md mb-4">
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p className="text-gray-700 mb-2">{doctor.specialization}</p>
              <p className="text-gray-700 mb-2">{doctor.contactInfo}</p>
              <div className="mb-2">
                <p className="text-gray-700 font-semibold">Schedule:</p>
                {doctor.schedule.map((scheduleItem, index) => (
                  <p key={index} className="text-gray-700">
                    {`Start Time: ${new Date(scheduleItem.startTime).toLocaleString()}`}
                    <br />
                    {`End Time: ${new Date(scheduleItem.endTime).toLocaleString()}`}
                    <br />
                    {`Available: ${scheduleItem.available ? 'Yes' : 'No'}`}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
