import React from 'react'
import Link from 'next/link'

export default function FavouriteProjects() {
  return (
    <div className="-mt-40 md:mt-[5.5rem]">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 md:pt-20 md:mx-10 md:mb-20 lg:my-0">
          <h1 className="text-5xl md:text-9xl max-w-lg font-base text-zinc-900 mt-20 mb-10 md:my-0 md:text-zinc-200 dark:text-gray-400 text-center">
            Favourite Projects
          </h1>
          <Link href="/projects">
            <a className="mb-20 md:mb-0 px-8 py-4 rounded-md shadow-lg text-xl font-base flex flex-row space-x-4 items-center dark:text-white
               transform transition ease-out duration-500 hover:dark:bg-gray-200 hover:bg-zinc-800 hover:text-white dark:hover:text-black dark:border dark:border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* light mode projects */}
        <div className="dark:hidden grid md:grid-cols-3 gap-8 pb-40">
          {/* Single card */}
          <a
            href="#"
            target="_blank"
            className="w-full block col-span-3"
            data-aos="fade-up"
          >
            <div className="relative overflow-hidden md:rounded-md shadow-lg dark:shadow-zinc-400 h-[200px] md:h-fit">
              <img
                src="/placeholder.png"
                alt="Alt Text"
                className="transform hover:scale-105 transition duration-1000 ease-out md:rounded-md object-cover h-full w-full"
              />
            </div>
          </a>
          {/* Single card */}
          <a
            href="#"
            target="_blank"
            className="w-full block col-span-3 sm:col-span-2"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden md:rounded-md dark:shadow-zinc-400 shadow-lg h-[200px] md:h-fit">
              <img
                src="/placeholder.png"
                alt="Alt Text"
                className="transform hover:scale-105 transition duration-1000 ease-out md:rounded-md object-cover h-full w-full"
              />
            </div>
          </a>
          {/* Single card */}
          <a
            href="#"
            target="_blank"
            className="w-full block col-span-3 sm:col-span-1 object-cover"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden md:rounded-md dark:shadow-zinc-400 shadow-lg h-[200px] md:h-fit">
              <img
                src="/placeholder.png"
                alt="Alt Text"
                className="transform hover:scale-105 transition duration-1000 ease-out object-cover md:rounded-md h-full w-full"
              />
            </div>
          </a>
        </div>

        {/* dark mode projects */}
        <div className="dark:grid hidden md:grid-cols-3 gap-8 pb-40">
          {/* Single card */}
          <a
            href="#"
            target="_blank"
            className="w-full block col-span-3"
            data-aos="fade-up"
          >
            <div className="relative overflow-hidden md:rounded-md dark:border h-[200px] md:h-fit">
              <img
                src="/placeholder.png"
                alt="Alt Text"
                className="transform hover:scale-105 transition duration-1000 ease-out md:rounded-md object-cover h-full w-full"
              />
            </div>
          </a>
          {/* Single card */}
          <a
            href="#"
            target="_blank"
            className="w-full block col-span-3 sm:col-span-2"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden md:rounded-md dark:border h-[200px] md:h-fit">
              <img
                src="/placeholder.png"
                alt="Alt Text"
                className="transform hover:scale-105 transition duration-1000 ease-out md:rounded-md object-cover h-full w-full"
              />
            </div>
          </a>
          {/* Single card */}
          <a
            href="#"
            target="_blank"
            className="w-full block col-span-3 sm:col-span-1 object-cover"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden md:rounded-md dark:border h-[200px] md:h-fit">
              <img
                src="/placeholder.png"
                alt="Alt Text"
                className="transform hover:scale-105 transition duration-1000 ease-out object-cover md:rounded-md h-full w-full"
              />
            </div>
          </a>
        </div>
    
      </div>
    </div>
  );
}
