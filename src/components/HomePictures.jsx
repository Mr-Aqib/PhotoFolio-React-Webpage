import React from 'react'
import { homepDV } from '../Database/HomePicturesDB'
import HomeSingleimage from './HomeSingleimage'

const HomePictures = () => {
  return (
      <>
          <div className="mainhomeimg   container-fluid px-4 row">
              {
                  homepDV?.map((items, index) =>
                  {
                     return  <HomeSingleimage key={index} {...items} />
  
                 })
             } 
          </div>
      </>
  )
}

export default HomePictures