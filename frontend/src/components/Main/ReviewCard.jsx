import React from 'react';

const Testimonial = ({name, image, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src={image} // Replace with actual image URL or use an import for local images
        alt="profile"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <div className="flex items-center mt-2">
        {/* 5-star rating */}
        {[rating].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5 text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431L24 9.587l-6 5.845 1.417 8.243L12 18.987l-7.417 4.688L6 15.432l-6-5.845 8.332-1.569z" />
          </svg>
        ))}
      </div>
      <p className="mt-4 w-52 text-center text-gray-600">
        {feedback}
      </p>
    </div>
  );
};

export default Testimonial;