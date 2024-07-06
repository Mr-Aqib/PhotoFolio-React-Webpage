import React from 'react'
import { homepDV } from '../Database/HomePicturesDB'
import HomeSingleimage from './HomeSingleimage'

const HomePictures = () => {
  return (
      <>
          <div className="mainhomeimg mx-auto container-fluid  row">
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