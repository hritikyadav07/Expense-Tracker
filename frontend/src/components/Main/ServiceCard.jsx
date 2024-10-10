import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around bg-gray-50 p-4 rounded-lg shadow-md w-full max-w-sm mx-auto"> {/* Adjusted max-w-lg to max-w-sm */}
      <div className="text-left sm:max-w-xs">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2> {/* Adjusted text-xl to text-lg */}
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      </div>
      <div className="mt-5 sm:mt-0">
        <img
          src={image}
          alt="Expense Manager App"
          className="w-32 h-auto rounded-lg" 
        />
      </div>
    </div>
  );
};

export default ProjectCard;
