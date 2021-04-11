import React from 'react'
import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Submit = () => (
  <>
    <Head>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
    </Head>
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main style={{ marginBottom: '-2px' }} className="flex-auto">
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrMz97lAzgWSJsSR"
          frameBorder="0"
          onmousewheel=""
          width="100%"
          height="1747"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        ></iframe>
      </main>
      <Footer />
    </div>
  </>
)

export default Submit
