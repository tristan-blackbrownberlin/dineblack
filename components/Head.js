import React from 'react'
import Head from 'next/head'

const HeadComponent = ({ children }) => {
  const title = 'The Diaspora Eats'
  const site_url = 'https://thediasporaeats.com'
  const fb_app_id = '638503730343380'
  const author = 'The Diaspora Eats'
  const description =
    'Food brings people together, connecting and transcending individuals, languages and cultures! Explore the diversity of African Diasporic food.'
  return (
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#ff8ba7" />

      <link
        rel="icon"
        href="https://thediasporaeats.com/public/assets/africa-continent-hero-2x.png"
      />
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="fb:app_id" content={fb_app_id} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={site_url} />
      <meta
        name="image"
        property="og:image"
        content="https://thediasporaeats.com/public/assets/africa-continent-hero-2x.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://thediasporaeats.com/public/assets/africa-continent-hero-2x.png"
      />
      {children}
    </Head>
  )
}

export default HeadComponent
