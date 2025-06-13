import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import userData from '@constants/data'
import { useScrollPosition } from '@hooks/useScrollPosition'

export default function Navbar() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function navClasses(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition();

  return (
    <div>

      {/* Desktop - unscroll */}
      <div className={navClasses(
        scrollPosition > 50 ? 'max-w-6xl mx-auto md:px-5 md:py-4 lg:px-40 py-10 px-[2rem] md:block hidden' : 'hidden'
      )}>
        <div className="flex md:flex-row justify-between items-center transition ease-in-out duration-300">

          <div className="flex flex-col">
            <Link href="/">
              <a>
                <h1 className="font-semibold uppercase text-xl dark:text-zinc-100">
                  {userData.name}
                </h1>
                <p className="text-base font-light text-zinc-500 dark:text-zinc-300">
                  {userData.designation}
                </p>
              </a>
            </Link>
          </div>

          <div className="space-x-8 hidden md:block">
            <Link href="/">
              <a
                className={`text-base ${
                  router.asPath === "/"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal"
                }`}
              >
                Home {router.asPath === "/"}
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`text-base  ${
                  router.asPath === "/about"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal "
                }`}
              >
                About {router.asPath === "/about"}
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={`text-base  ${
                  router.asPath === "/projects"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal "
                }`}
              >
                Projects {router.asPath === "/projects"}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`text-base  ${
                  router.asPath === "/contact"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal "
                }`}
              >
                Contact {router.asPath === "/contact"}
              </a>
            </Link>
          </div>

          <div className="space-x-4 flex flex-row items-center">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-11 h-9 p-3 rounded-full focus:outline-none border shadow-md"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-500 dark:text-yellow-5004 text-center transform -translate-y-1"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      fill="white"
                      stroke="white"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      fill="whitesmoke"
                      stroke="black"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop - scroll */}
      <div className={navClasses(
        scrollPosition > 50 ?
          'md:fixed md:mx-auto md:px-5 lg:px-40 md:py-4 md:w-full md:bg-white dark:md:bg-black md:z-10 transition ease-in-out duration-300 md:shadow-md dark:md:shadow-none dark:md:border-b-[0.8px] dark:md:border-white top-0 py-10 px-[2rem] '
          :
          ' md:w-full md:px-5 lg:px-40 md:pt-10 md:pb-0 py-10 px-[2rem] transition ease-in-out duration-300'
      )}>
        <div className="flex md:flex-row justify-between items-center">

          <div className="flex flex-col">
            <Link href="/">
              <a>
                <h1 className="font-semibold uppercase text-xl dark:text-zinc-100">
                  {userData.name}
                </h1>
                <p className="text-sm md:text-center md:relative md:right-[2px] font-light text-zinc-500 dark:text-zinc-300">
                  {userData.designation}
                </p>
              </a>
            </Link>
          </div>

          <div className="space-x-8 hidden md:block">
            <Link href="/">
              <a
                className={`text-base ${
                  router.asPath === "/"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal"
                }`}
              >
                Home {router.asPath === "/"}
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`text-base  ${
                  router.asPath === "/about"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal "
                }`}
              >
                About {router.asPath === "/about"}
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={`text-base  ${
                  router.asPath === "/projects"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal "
                }`}
              >
                Projects {router.asPath === "/projects"}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`text-base  ${
                  router.asPath === "/contact"
                    ? "text-zinc-800 font-bold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300 font-normal "
                }`}
              >
                Contact {router.asPath === "/contact"}
              </a>
            </Link>
          </div>

          <div className="space-x-4 flex flex-row items-center">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-11 h-9 p-3 rounded-full focus:outline-none shadow-md border-zinc-300 border"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-500 dark:text-yellow-5004 text-center transform -translate-y-1"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      fill="white"
                      stroke="white"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      fill="whitesmoke"
                      stroke="black"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="space-x-8 block md:hidden mt-4">
          <Link href="/">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              Contact
            </a>
          </Link>
        </div>

        {/* Mobile Menu - Scrolled */}
        <div className={navClasses(
          scrollPosition > 50 ?
            'flex flex-row justify-between items-center block md:hidden fixed mx-auto px-5 py-4 w-[100vw] bg-[#F1F1F1] dark:bg-black z-10 transition ease-in-out duration-300 shadow-md dark:shadow-none dark:border-b-[1px] dark:border-zinc-300 top-0 py-10 px-[2rem] left-0'
            :
            'hidden'
        )}>
          <Link href="/">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-base font-normal text-zinc-600 dark:text-zinc-300">
              Contact
            </a>
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-11 h-9 p-3 rounded-full focus:outline-none shadow-md border-zinc-300 border"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-yellow-500 dark:text-yellow-5004 text-center transform -translate-y-1"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="white"
                    stroke="white"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="whitesmoke"
                    stroke="black"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
