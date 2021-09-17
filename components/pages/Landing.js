import React from 'react'
import Head from 'next/head'
import { Box } from 'rebass'
import { signIn } from 'next-auth/react'

function Landing() {
  return (
    <div>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Box>
        testingss
        <div onClick={() => signIn()}>Sign In</div>
      </Box>
    </div>
  )
}

export default Landing
