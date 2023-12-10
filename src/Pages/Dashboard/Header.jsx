import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header className="bg-blue-800 text-white h-16 fixed top-0 w-full flex items-center justify-between px-[30px] ">
            <h1 className="text-2xl font-semibold transition-colors">MediAppoint Hub</h1>
            <nav className="flex space-x-4">
                <Link
                    to="/"
                    className={`text-gray-300 hover:text-white ${location.pathname === '/' ? 'text-white font-bold' : 'text-gray-300'
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/doctor"
                    className={`text-gray-300 hover:text-white ${location.pathname === '/doctor' ? 'text-white font-bold' : 'text-gray-300'
                        }`}
                >
                    Doctors
                </Link>
                <Link
                    to="/patient"
                    className={`text-gray-300 hover:text-white ${location.pathname === '/patient' ? 'text-white font-bold' : 'text-gray-300'
                        }`}
                >
                    Patients
                </Link>
                <Link
                    to="/appointment"
                    className={`text-gray-300 hover:text-white ${location.pathname === '/appointment' ? 'text-white font-bold' : 'text-gray-300'
                        }`}
                >
                    Appointments
                </Link>
            </nav>
        </header>
    );
}

export default Header;
