import React, { useEffect } from "react";
import userData from "@constants/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      once: true
    });
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 md:mt-20">
        <h1 className="text-5xl md:text-8xl font-base py-20 text-center md:text-left dark:text-white"
          data-aos="fade-right"
        >
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 lg:gap-20 pb-32 lg:px-0">
          {/* Personal Projects */}
          {userData.personalProjects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, description }) => {
  return (
    <div>
      <a href={link} target="_blank" className="w-full block md:rounded-md dark:border border">
        <div className="relative overflow-hidden md:rounded-md">
          <div className="h-[200px] md:h-72 object-cover">
            <img
              src={imgUrl}
              alt="portfolio"
              className="md:rounded-md transform hover:scale-105 transition duration-1000 ease-out object-cover h-full w-full"
            />
          </div>
        </div>
      </a>
      <h3
        className="
         bg-transparent dark:text-zinc-100
         w-max font-base rounded-md mt-8
         lg:px-0 text-xl
        "
      >
        {title}
      </h3>
      <p className="mt-5 text-base lg:px-0 dark:text-white leading-loose">
        {description}
      </p>
    </div>
  );
};
