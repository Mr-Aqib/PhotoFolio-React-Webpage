// import React, { useState } from 'react'
import { useState } from 'react'
import { homepDV } from '../Database/HomePicturesDB'
import HomeSingleimage from './HomeSingleimage'
import Homeviewimage from './Homeviewimage'

const HomePictures = () => {
    const [showimage, setShowImage] = useState(false)
    const [showurl,setshowurl]=useState("")
    const [showid,setshowid]=useState()
    const idfet = (urlimg,id) =>
    {
        setShowImage(true)
setshowid (id)
        setshowurl(urlimg)
    }
  return (
      <>
          {
              showimage &&<Homeviewimage showid={showid} showurl={showurl} setShowImage={setShowImage}   />
          }
               
          <div className="mainhomeimg mx-auto container-fluid  row">
              {
                  homepDV?.map((items, index) =>
                  {
                      return <HomeSingleimage
                         idfet={idfet}
                     
                          key={index} {...items} />
                     
  
                 })
             } 
          </div>
      </>
  )
}

export default HomePictures