import React from 'react'
import { BiCamera, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoMeta, BiLogoTwitter, BiLogoXing } from "react-icons/bi";
import HeaderNedtedul from './HeaderNedtedul';
const Header = () => {
  return (
      <>
          <div className="row px-3 py-2">
              <div className="col-lg-4 logo gap-1 d-flex align-items-center 
               py-2
              ">
                  <BiCamera color='#27A776' size={30} />
                  <h2 className='display-6'>PhotoFolio</h2>
              </div>
              <ul className="col-lg-4 d-flex list-unstyled align-items-center gap-4 justify-content-around m-0 fw-medium flex-row nav-ul">
                  <li className='nav-ul-items'>Home</li>
                  <li className='nav-ul-items'>About</li>
                  <li className='nav-ul-items position-relative'>Gallery
                      
                      <HeaderNedtedul/>

                  </li>
                  <li className='nav-ul-items'>Services</li>
                  <li className='nav-ul-items'>Contact</li>
              </ul>
              <div className="col-lg-4 d-flex flex-row align-items-center justify-content-end gap-1 icons">
                  <BiLogoTwitter size={20} color='#969696'/>
                  <BiLogoFacebook  size={20} color='#969696'/>
                  <BiLogoInstagram size={20} color='#969696'/>
                  <BiLogoLinkedin size={20} color='#969696'/>
              </div>
              
      </div>
      </>
  )
}

export default Header