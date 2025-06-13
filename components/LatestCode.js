import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import getLatestRepos from '@lib/getLatestRepos'
import userData from '@constants/data'

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([])

  useEffect(async () => {
    setRepos(repositories)
  }, [])

  return (
    <section className="-mt-40 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 md:mx-10">
          <h2 className="text-5xl md:text-9xl max-w-lg font-base text-zinc-900 mt-20 mb-10 md:my-0 md:text-zinc-200 dark:text-gray-400 text-center lg:text-left">
            Latest Code
          </h2>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-transparent shadow-lg text-xl font-base flex flex-row space-x-4 items-center dark:text-white
            transform transition ease-out duration-500 hover:dark:bg-gray-200 dark:border dark:border-white hover:bg-zinc-800 hover:text-white dark:hover:text-black"
          >
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
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto lg:-mt-16 gap-y-10">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  )
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <a
      href={latestRepo.clone_url}
      target="_blank"
      className="github-repo p-6 hover:border">
      <div className="group flex flex-col w-full">
        <h4 className="text-2xl font-base">
          {latestRepo.name}
        </h4>
        <p className="text-base font-base my-4">
          {latestRepo.description}
        </p>
        <div className="font-semibold group flex flex-row space-x-2 w-full items-center">
          <p>View Repository </p>
          <div className="transform group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </div>
      </div>
    </a>
  )
}
