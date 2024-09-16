import testimonialsData from './partials/data';
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useState } from 'react';

const Testimonials = () => {

  const [visible, setVisible] = useState(2);
  const [showAll, setShowAll] = useState(false);

  const showTestimonials = () => {
    setVisible((prev) => prev + 4);
    if (visible >= testimonialsData.length - 4) {
      setShowAll(true);
    }
  }

  const hideTestimonials = () => {
    setVisible(2);
    setShowAll(false);
  }

  return (
    <div className="lg:mx-52 mx-4">
    <div className="mt-16 mb-10">
      <h1 className="text-center font-extrabold text-3xl">Depoimentos</h1>
    </div>
    <div className="grid lg:grid-cols-2 gap-x-20">
      {testimonialsData.slice(0, visible).map((testimonial, index) => (
        <div key={index} className="border-2 border-secondary p-4 font-nunito rounded-3xl mb-8">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-full object-cover object-top" src={testimonial.img} alt="user" />
          <div className="flex flex-col ml-4">
            <p className="font-bold text-2xl">{testimonial.name}</p>
            <p className="text-sm mt-[2px]">{testimonial.profession}</p>
          </div>
        </div>
        <p className="ml-1 font-light text-lg mt-5">{testimonial.feedback}</p>
      </div>
      ))}
    </div>

    <div className="flex justify-center mt-8">
        {!showAll ? (
          <button
            onClick={showTestimonials}
            className="py-2 px-4 bg-primaryOp font-bold text-lg rounded-full text-white text-center transform hover:scale-105 duration-300 ease-in-out hover:bg-primary"
          >
            <FaArrowDown />
          </button>
        ) : (
          <button
            onClick={hideTestimonials}
            className="py-2 px-4 bg-primaryOp font-bold text-lg rounded-full text-white text-center transform hover:scale-105 duration-300 ease-in-out hover:bg-primary"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  );
}

export default Testimonials;