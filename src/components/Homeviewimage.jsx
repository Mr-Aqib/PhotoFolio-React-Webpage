import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Homeviewimage = ({setShowImage}) => {
  return (
      <>
          <div className="container-fluid h-vewimg position-fixed d-flex flex-column  align-items-center justify-content-center z-1 top-0" style={{
              width: '100vw',
              height: '100vh',
          }}>
              <IoIosCloseCircleOutline size={40}
                  cursor={"pointer"}
                  onClick={() => setShowImage(false)}
    
                className='position-absolute '
                  style={{
                      top: '20', 
                      right: '40'
                      
             }}     color='white' />

              <h1 className='bg-white'>Hlo</h1>
      </div>
      </>
  )
}

export default Homeviewimage