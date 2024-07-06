import React, { useState } from 'react'
import { FiLink, FiMaximize } from 'react-icons/fi'

const HomeSingleimage = ({ url,id,setShowImage }) => {
  return (
      <>
          
          <div className='rounded-3  col-lg-3 my-2 position-relative   hp-parent '>
              <div className="d-flex rounded-3 align-items-center gap-3 justify-content-center position-absolute hp-child">
                  <FiLink   size={20} className='hp-child-icons' color='white ' cursor="pointer" />
                  <FiMaximize onClick={()=>setShowImage(true)} size={20} className='hp-child-icons' color='white' cursor="pointer"/>
              </div>
              
              <img
                  className='rounded-3 hp-img '
                  style={{
                  width:"100%"
                  }} src={url} alt="" />
              </div>
           
      </>
  )
}

export default HomeSingleimage