import Head from 'next/head'
import Navbar from '../components/NavBar'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
   <>
     <Head>
       <title>Create Next App</title>
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <h1>about</h1>
   </>
  )
}

export default About;