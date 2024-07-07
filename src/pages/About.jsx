import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
      <>
          <div className="container">
        <main className='typing-animation text-center container d-flex align-items-center  text-white justify-content-center'
          style={{
          height:"80vh"
        }}>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'This Page is In process, ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'This Page is In process',
        1000,
        'Comming Soon.....',
        1000,
        'This Page is In process',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </main>
      </div>
      </>
  )
}

export default About