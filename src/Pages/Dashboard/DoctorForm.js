import React, { useState } from 'react';
import axios from 'axios';

const DoctorForm = () => {
    const [formData, setFormData] = useState({
        _id: 0,
        name: '',
        specialization: '',
        contactInfo: '',
        schedule: [{ startTime: '', endTime: '', available: true }],
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSchedule = [...formData.schedule];
        updatedSchedule[index][name] = value;

        setFormData({
            ...formData,
            schedule: updatedSchedule,
        });
    };

    const handleAddSchedule = () => {
        setFormData({
            ...formData,
            schedule: [...formData.schedule, { startTime: '', endTime: '', available: true }],
        });
    };

    const handleRemoveSchedule = (index) => {
        const updatedSchedule = [...formData.schedule];
        updatedSchedule.splice(index, 1);

        setFormData({
            ...formData,
            schedule: updatedSchedule,

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)
        // Send the doctor data to the server
        axios.post('http://localhost:5000/addDoctor', formData)
            .then(response => {
                console.log(response.data); // You can handle success as needed
                // setFormData()
                alert("Doctor Added")
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Add Doctor</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                        ID
                    </label>
                    <input
                        type="Number"
                        id="id"
                        name="_id"
                        value={formData._id}
                        onChange={(e) => setFormData({ ...formData, _id: e.target.value })}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                        Specialization
                    </label>
                    <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">
                        Contact Info
                    </label>
                    <input
                        type="text"
                        id="contactInfo"
                        name="contactInfo"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" >
                        Schedule
                    </label>
                    {formData.schedule.map((scheduleItem, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="date"
                                name="startTime"
                                value={scheduleItem.startTime}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Start Time"
                                className="p-2 border border-gray-300 rounded-md mr-2"
                            />
                            <input
                                type="date"
                                name="endTime"
                                value={scheduleItem.endTime}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="End Time"
                                className="p-2 border border-gray-300 rounded-md mr-2"
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveSchedule(index)}
                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddSchedule}
                        className="bg-green-500 text-white px-2 py-1 rounded-md"
                    >
                        Add Schedule
                    </button>
                    <p>Kindly click add Schedule Button two Time</p>
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Add Doctor
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DoctorForm;