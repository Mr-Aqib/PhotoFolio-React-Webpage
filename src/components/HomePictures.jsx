// import React, { useState } from 'react'
import { useState } from 'react'
import { homepDV } from '../Database/HomePicturesDB'
import HomeSingleimage from './HomeSingleimage'
import Homeviewimage from './Homeviewimage'

const HomePictures = () => {
const [showimage,setShowImage] =useState(false)
  return (
      <>
          {
              showimage &&<Homeviewimage setShowImage={setShowImage}   />
          }
               
          <div className="mainhomeimg mx-auto container-fluid  row">
              {
                  homepDV?.map((items, index) =>
                  {
                      return <HomeSingleimage
                          setShowImage={setShowImage}
                     
                          key={index} {...items} />
                     
  
                 })
             } 
          </div>
      </>
  )
}

export default HomePictures