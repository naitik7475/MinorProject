//To be done by Khushu
import { Carousel } from "flowbite-react";
import { Link } from 'react-router-dom';

const Eligibility = () => {
  return (
    <div className="p-8">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
      <div className="mt-8 text-center">
        <Link 
          to="/how-to-apply" 
          className="rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
        >
          Proceed to Application
        </Link>
      </div>
    </div>
  );
};

export default Eligibility;