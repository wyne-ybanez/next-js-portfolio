import React , { useEffect } from "react";
import userData from "@constants/data";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black antialiased md:mt-20">
        <h1 className="text-5xl md:text-9xl font-base py-[5.5rem] text-center md:text-left dark:text-white"
          data-aos="fade-right"
        >
          Contact
        </h1>
      </div>
      <div
        className="
          contact-card
          md:border
          relative shadow-xl
          py-10 px-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-[2px]
        "
        data-aos="fade-in"
        data-aos-delay="600"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h3 className="font-medium text-4xl dark:text-white">
                Lorem Ipsum
              </h3>
              <p className="font-light text-base mt-2 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -{" "}
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-10">
              <div className="flex flex-row items-center space-x-6 rounded-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 dark:text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-base">{userData.phone}</p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 dark:text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-base">{userData.email}</p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 dark:text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-base">{userData.address}</p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-2">
            <a
                href={userData.socialLinks.instagram}
                className="h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="dark:hover:text-gray-400 hover:text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href={userData.socialLinks.linkedin}
                className="h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="dark:hover:text-gray-400 hover:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Developer Image */}
          <div>
            <img
              src="./placeholder.png"
              alt="Man working on his computer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
