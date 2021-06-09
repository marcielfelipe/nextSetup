import React from 'react'
import Head from 'next/head'

import logo from '../assets/logo.png'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () =>{
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <img src={logo} alt="" />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure.</p>
    </Container>
  )
}

export default Home
