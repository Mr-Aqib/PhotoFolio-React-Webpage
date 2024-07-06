import React from 'react'

const HomeSingleimage = ({url}) => {
  return (
      <>
          <div className=" my-2 col-lg-3">
              <img
                  className='rounded-3'
                  style={{
                  width:"100%"
              }}    src={url} alt="" />
         </div>
      </>
  )
}

export default HomeSingleimage