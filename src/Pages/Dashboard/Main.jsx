import React from 'react';
import { Link } from 'react-router-dom';
import image from "Asset/Images/making-appointment-with-doctor-flat-concept-vector-illustration_151150-12192.avif"


const Main = () => {
  return (
    <div className="container mx-auto my-8">
      {/* First Row: Image and Text */}
      <div className="flex flex-col-reverse lg:flex-row items-center mb-8">
        {/* Image Section on the Left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={image}
            alt="Welcome to Doctor Appointment System"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Text Section on the Right */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to the Doctor Appointment System</h1>
          <p className="text-gray-700">
            Schedule and manage your appointments with ease using our Doctor Appointment App.
          </p>
          <p className="text-gray-700">
            Find the right doctor, book appointments, and keep track of your medical schedule, all in one place.
          </p>
          <p className="text-gray-700">
            Our user-friendly platform ensures a seamless experience, allowing you to focus on your health.
          </p>
        </div>
      </div>

      {/* Second Row: Cards */}
      <div className="flex flex-wrap -mx-4">
        {/* Card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="p-6 bg-blue-500 rounded-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Easy Scheduling</h2>
            <p className="text-white">
              Quickly schedule your appointments with a user-friendly interface. Choose your preferred time and date effortlessly.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="p-6 bg-green-500 rounded-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Specialized Doctors</h2>
            <p className="text-white">
              Connect with a diverse range of specialized doctors based on your needs. Our platform ensures access in various fields.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/3 px-4 mb-4">
          <div className="p-6 bg-purple-500 rounded-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">User-Friendly Interface</h2>
            <p className="text-white">
              Our platform provides an intuitive and user-friendly experience for all users. Manage your health journey with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Third Row: App Details */}
      <div className="text-left">
        <h2 className="text-3xl font-bold mb-2">About My website</h2>
        <p className="text-gray-700">
          The Doctor Appointment System is designed to revolutionize the way you manage your health. Our app offers a comprehensive set of features to enhance your healthcare experience:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Effortless appointment scheduling and management.</li>
          <li>Access to a diverse network of specialized doctors.</li>
          <li>Real-time notifications and reminders for upcoming appointments.</li>
          <li>Intuitive and user-friendly interface for a seamless experience.</li>
          <li>Secure and confidential storage of your medical history.</li>
          <li>Emergency contact integration for added safety.</li>
          <li>Track and organize your medical schedule efficiently.</li>
          <li>Access to personalized health recommendations and resources.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Experience the future of healthcare with the Doctor Appointment System. Your health is our priority!
        </p>
      </div>
    </div>
  );
};

export default Main;
