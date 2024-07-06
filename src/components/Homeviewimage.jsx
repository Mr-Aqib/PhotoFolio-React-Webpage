import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Homeviewimage = ({setShowImage,showurl,showid}) => {
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
        <div>
        <img style={{
          width: '90%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '20px',
          border: '3px solid white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
        }} src={showurl} alt="" className='d-block mx-auto' />
        </div>
        </div>

    </>
    
  )
}

export default Homeviewimage