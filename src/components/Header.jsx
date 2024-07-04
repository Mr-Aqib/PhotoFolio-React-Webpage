import React from 'react'
import { BiCamera, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoMeta, BiLogoTwitter, BiLogoXing } from "react-icons/bi";
import HeaderNedtedul from './HeaderNedtedul';
import { IoIosArrowDropdown,IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
      <>
          <div className="row px-3 py-2">
              <div className="col-lg-4 text-white logo gap-1 d-flex align-items-center 
               py-2
              ">
                  <BiCamera color='#27A776' size={30} />
                  <h2 className='display-6'>PhotoFolio</h2>
              </div>
              <ul className="col-lg-4 d-flex list-unstyled align-items-center gap-4 justify-content-around m-0 fw-medium flex-row header-ul">
                  <li className='head-ul-li'>Home</li>
                  <li className='head-ul-li'>About</li>
                  <li className='head-ul-li position-relative'>
                      <div className="d-flex align-items-center gap-1">
                      Gallery
                          <IoIosArrowDropdown size={15} />
                      </div>
                      
                      <HeaderNedtedul/>

                  </li>
                  <li className='head-ul-li'>Services</li>
                  <li className='head-ul-li'>Contact</li>
              </ul>
              <div className="col-lg-4 d-flex flex-row align-items-center justify-content-end gap-1 icons">
                  <BiLogoTwitter size={20} color='#969696'/>
                  <BiLogoFacebook  size={20} color='#969696'/>
                  <BiLogoInstagram size={20} color='#969696'/>
                  <BiLogoLinkedin size={20} color='#969696' />
                  <IoIosMenu size={20} color='#969696' cursor="pointer" />

              </div>
              
      </div>
      </>
  )
}

export default Header