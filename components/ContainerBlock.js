import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter()
  const lang = "en"

  const meta = {
    title: '',
    description: `Developer Portfolio`,
    image: '/default.png',
    type: 'website',
    ...customMeta,
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full dark:bg-black" lang={lang}>
        <Navbar />
        <div className="px-8 lg:px-2">{children}</div>
        <Footer />
      </main>
    </div>
  )
}
