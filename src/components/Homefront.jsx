import React from 'react'
import HomeFrontBtn from './HomeFrontBtn'

const Homefront = () => {
  return (
      <>
          <div className="container header-front d-flex flex-column align-items-center justify-content-center">
              <h1 className=' text-white text-center w-50 mx-auto'>
                  I'm <span>Jenny Wilson</span> a Professional Photographer from New York City
              </h1>
              <p className='text-center w-50 mx-auto text-secondary'>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
             
                  <HomeFrontBtn content={"AVAILABLE FOR HIRE"} />
                  
      </div>
      </>
  )
}

export default Homefront