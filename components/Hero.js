import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // return null;

  return (
    <div className="mx-auto md:mx-24 lg:mx-auto max-w-6xl">
      <div className="mt-[2.5rem] md:mt-24 flex items-start justify-center md:justify-start mx-auto lg:mx-[13rem] max-w-6xl">
        <h1 className="text-[2rem] md:text-[1.7rem] uppercase tracking-[0.2em] font-bold md:font-semibold text-zinc-500 dark:text-gray-300 my-2 md:pb-8 whitespace-nowrap transition duration-500"
          data-aos="fade-in"
        >
          Lorem Ipsum
        </h1>
      </div>

      <div className="hidden md:block overflow-hidden mx-auto lg:mx-[13rem]">
        <div className="flex flex-col w-full justify-center md:justify-start items-center md:items-start">
          <h2 className="flex flex-row md:justify-start text-5xl md:text-7xl lg:text-8xl font-base text-zinc-700 dark:text-gray-200 my-5 lg:my-8 overflow-hidden"
            data-aos="fade" data-aos-delay="300">
            <div className="text-black dark:text-gray-400 transform transition duration-500 flex md:flex-row items-center">
              <div>Lorem</div>
              <span className="line hidden md:inline-block md:w-[30vw]"></span>
            </div>
          </h2>
          <h2 className="flex flex-row md:justify-start text-5xl md:text-7xl lg:text-8xl font-base text-zinc-700 dark:text-gray-200 my-5 lg:my-8"
            data-aos="fade" data-aos-delay="600">
            <div className="text-black dark:text-gray-300 transform transition duration-500 flex md:flex-row items-center">
              <span className="inline-block"></span>
              <div>Voluptate</div>
            </div>
          </h2>
          <h2 className="flex flex-row md:justify-start text-5xl md:text-7xl lg:text-8xl font-base text-zinc-700 dark:text-gray-200 my-5 lg:my-8"
            data-aos="fade" data-aos-delay="900">
            <div className="text-black dark:text-gray-200 transform transition duration-500 flex md:flex-row items-center">
              <span className="inline-block"></span>
              <span className="inline-block"></span>
              <div>Consectetur</div>
            </div>
          </h2>
        </div>
      </div>
      
    </div>
  );
}
