import React from 'react'
import Header from '../components/Header'
import { TypeAnimation } from 'react-type-animation'
import Homefront from '../components/Homefront'
import HomePictures from '../components/HomePictures'
const Home = () => {
  return (
      <>
      <Header />
      <Homefront />
      <main className='typing-animation text-center container d-flex  text-white justify-content-center'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Photography captures fleeting moments, ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'It’s the art of seeing the extraordinary in the ordinary',
        1000,
        'Through the lens, the world transforms into a canvas of light and shadow.',
        1000,
        'Photography tells stories that words often fail to express',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </main>
      <HomePictures/>
      </>
  )
}

export default Home