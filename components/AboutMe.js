import React, { useEffect } from "react";
import userData from "@constants/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black md:mt-20">
        <h1 className="text-5xl md:text-8xl font-base py-20 text-center md:text-left dark:text-white"
        data-aos="fade-right">
          About Me
        </h1>
      </div>
      <div className="-mt-4">
        <div className="text-container max-w-6xl mx-auto md:pt-20 pt-10">
          <p
            className="text-xl lg:px-0 md:text-4xl font-base dark:text-gray-200 leading-[2rem] md:leading-[4rem] lg:leading-[4rem]"
            data-aos="fade-in"
            data-aos-delay="600"
          >
            {userData.about.title} Currently building with{" "}
            <a
              className="hover:shadow-zinc-900 rounded-md px-2 py-0 mx-1 text-black dark:text-white
              hover:shadow-lg transform transition duration-200
              dark:hover:shadow-zinc-400 underline hover:no-underline"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject[0]}
            </a>.
          </p>
        </div>
      </div>
      <div>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h4 className="text-xl font-base dark:text-white">
                Contact
              </h4>
              <p className="text-base font-base text-zinc-700 mt-4 dark:text-white">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-base text-zinc-700 mt-4 dark:text-white">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </div>
            {/* Social Links */}
          <div className="mt-5">
            <h4 className="text-xl font-base mt-8 dark:text-white">
              Social Links
            </h4>

            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-md text-zinc-900 font-mono relative overflow-hidden dark:text-white">
                    <div className="absolute h-0.5 w-full bg-zinc-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-md text-zinc-900 font-mono relative overflow-hidden dark:text-white">
                    <div className="absolute h-0.5 w-full bg-zinc-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-md text-zinc-900 font-mono relative overflow-hidden dark:text-white">
                    <div className="absolute h-0.5 w-full bg-zinc-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
                </div>
              </div>
            </div>

          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 text-lg dark:text-white">
            <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mb-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
