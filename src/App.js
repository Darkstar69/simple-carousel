import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";

const App = () => {
  const slides = [
    {
      url: "https://cdn.wallpapersafari.com/62/90/owk8QH.jpg",
    },
    {
      url: "https://smowl.net/wp-content/uploads/2024/02/learning-agility.jpg",
    },
    {
      url: "https://www.onatlas.com/wp-content/uploads/2019/03/education-students-people-knowledge-concept-P6MBQ5W.jpg",
    },
    {
      url: "https://careerswithstem.com.au/wp-content/uploads/2019/02/Technology-education-classroom-Careers-with-STEM-shutterstock_407031889.jpg",
    },
    {
      url: "https://i.itworldcanada.com/wp-content/uploads/2017/01/GettyImages-487457284.jpg",
    },
  ];
  const [currentIndex, setCurrentInex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentInex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentInex(newIndex);
  };

  const goToslide = (index) => {
    setCurrentInex(index);
  };
  return (
    <div className='w-[100vw] h-[80vh] max-h-[80vh] relative'>
      <div className='h-[80vh] w-full bg-center bg-cover max-h-[80vh] max-w-[100vw] brightness-50 transition-all delay-100' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
      </div>
      <div className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='font-bold text-6xl'>Your Site Name</h1>
        <p className='font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit perferendis natus nesciunt quisquam? Veniam!</p>
      </div>
      <MdArrowBackIos onClick={prevSlide} size={45} className='absolute top-1/2 left-8 text-white
       cursor-pointer ' />
      <MdArrowBackIos onClick={nextSlide} size={45} className='absolute top-1/2 right-4 text-white 
       cursor-pointer rotate-180' />
      <div className='flex items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2'>
        {slides.map((val, index) => (
          <div key={index} className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-600"}`}></div>
        ))}
      </div>
    </div>
  )
}

export default App;