import React from 'react';
import aboutImage from '../../assets/About.png'; // Assuming this is the path to your image

const About = () => {
  return (
    <div id='about' className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* About Us Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About us</h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg md:text-xl w-full max-w-[600px] mx-auto text-center">
            ExpenseWise is dedicated to simplifying your financial management with innovative
            solutions tailored to your needs. Our team of experts is committed to delivering
            intuitive tools that help you track and optimize your expenses efficiently.
          </p>

        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-8">
          <img
            src={aboutImage}
            alt="About us team"
            className="rounded-lg shadow-lg w-full max-w-[100%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[75%] h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
