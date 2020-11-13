import Head from 'next/head'
import React from 'react'

const SEO = ({ title, description, image = '/images/wide-logo.png' }) => {
  const siteURL = 'https://victorbona.dev'

  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:creator" content="@wunnle"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="og:type" content="website"></meta>

      <meta property="og:title" content={title}></meta>
      <meta name="twitter:title" content={title}></meta>

      <meta name="description" content={description}></meta>
      <meta name="twitter:description" content={description}></meta>

      <meta property="og:image" content={`${siteURL}${image}`}></meta>
      <meta name="twitter:image" content={`${siteURL}${image}`}></meta>
      <link href="/common.css" rel="stylesheet" />
    </Head>
  )
}

export default SEO
