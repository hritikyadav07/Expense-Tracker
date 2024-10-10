import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around bg-gray-50 p-4 rounded-lg shadow-md w-full max-w-sm mx-auto"> {/* Adjusted max-w-lg to max-w-sm */}
      <div className="text-left sm:max-w-xs">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2> {/* Adjusted text-xl to text-lg */}
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer"> {/* Added link */}
          <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded transition duration-300">
            View project
          </button>
        </a>
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
