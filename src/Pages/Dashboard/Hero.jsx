import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Patient from './Patient';
import Header from './Header'; // Import the updated Header component
import Doctor from './Doctor';
import Appointment from './Appointment';
import Main from "./Main";
import DoctorForm from './DoctorForm';

const Hero = () => {
    return (
        <div className="flex">
            <Header />
            <main className="flex-grow p-4  mt-[40px]">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/patient" element={<Patient />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/doctorForm" element={<DoctorForm />} />
                    <Route path="/appointment" element={<Appointment />} />
                </Routes>
            </main>
        </div>
    );
};

export default Hero;
