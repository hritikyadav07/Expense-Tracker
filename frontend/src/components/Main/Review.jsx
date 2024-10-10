import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    rating: 5,
    feedback: "ExpenseWise has streamlined our budgeting process."
  },
  {
    id: 2,
    name: "Michael Smith",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    rating: 5,
    feedback: "A must-have tool for any business owner."
  },
  {
    id: 3,
    name: "Sophia Lee",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    rating: 5,
    feedback: "Incredible features and easy to use interface."
  },
  {
    id: 4,
    name: "John Doe",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    rating: 5,
    feedback: "Fantastic service and easy to use!"
  },
  {
    id: 5,
    name: "Emily Davis",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    rating: 5,
    feedback: "A game changer for personal finance."
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    if(currentIndex == testimonials.length-1){
        setCurrentIndex(0);
    } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) );
    }
};

const prevTestimonials = () => {
      if(currentIndex == 0){
          setCurrentIndex(testimonials.length-1);
      } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 ));
      }
  };

  function circularSlice(arr, start, end) {
    const len = arr.length;
    // Normalize start and end to be within array bounds
    start = ((start % len) + len) % len;
    end = ((end % len) + len) % len;
  
    if (start < end) {
        return arr.slice(start, end);
    } else {
        return arr.slice(start).concat(arr.slice(0, end));
    }
  }
  // Calculate the index for slicing
  const start = currentIndex;
  const len = testimonials.length; 
  const displayedTestimonials = circularSlice(testimonials, start, ((start+3)%len));


  return (
    <div className="bg-gray-50 p-8 mx-32">
      <h2 className="text-3xl font-bold text-center mb-6">Hear from our awesome users!</h2>
      <div className="flex justify-evenly items-center ">
        {displayedTestimonials.map(testimonial => (
          <ReviewCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      <div className='flex justify-center items-center mt-4'>
        <button 
          onClick={prevTestimonials} 
          className="bg-gray-300 rounded-full px-4 py-3 mx-3 hover:bg-gray-400 transition duration-300"
        >
          &lt;
        </button>
        <button 
          onClick={nextTestimonials} 
          className="bg-gray-300 rounded-full mx-3 px-4 py-3 hover:bg-gray-400 transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Review;



// // Example usage:
// const arr = [1, 2, 3, 4, 5];
// console.log(circularSlice(arr, 3, 1)); // Output: [4, 5, 1]
