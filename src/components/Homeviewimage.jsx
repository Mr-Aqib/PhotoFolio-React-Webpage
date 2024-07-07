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
       
        <img style={{
          width: '80%',
          height:"80%",
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
          borderRadius: '20px',
          border: '3px solid white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
        }} src={showurl} alt="" className='d-block mx-auto' />
        
          <h1 className='fs-2 fw-normal py-2  bg-dark mx-auto text-white rounded-5 w-75 text-center rounded-3'>Gallery: {showid}</h1>
        
        </div>
      

    </>
    
  )
}

export default Homeviewimage