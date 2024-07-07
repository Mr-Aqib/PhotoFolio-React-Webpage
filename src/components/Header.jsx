import React, { useRef, useState } from 'react'
import { BiCamera, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoMeta, BiLogoTwitter, BiLogoXing } from "react-icons/bi";
import HeaderNedtedul from './HeaderNedtedul';
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDropdown,IoIosMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const menuref = useRef()
    const [btns,setBtns]=useState(false)
    const menuShow = () =>
    {
        menuref.current.classList.toggle('menu')
        setBtns(true)
    }
    const menuClose = () =>
    {
        menuref.current.classList.remove('menu')

        setBtns(false)
    }
    // Path Hook
    const path = useLocation()
    console.log(path)

  return (
      <>
          <div className="row col-lg-12 mx-auto px-3 py-2 header">
              <div className="col-lg-4  text-white logo gap-1 d-flex align-items-center 
               py-2
              ">
                  <BiCamera color='#27A776' size={30} />
                  <h2 className='display-6'>PhotoFolio</h2>
              </div>
              <div className="parent col-lg-4  align-items-center justify-content-around m-0 my-4">
                  <div className="parent-header-ul">
              <ul ref={menuref} className=" d-flex list-unstyled m-0 align-items-center gap-4 justify-content-around fw-medium flex-row header-ul">
                          <Link to='/home'
                              style={{
                                  textDecoration:"none"
                          }}    className={`${path.pathname == "/home" && 'text-danger'} `
                          }>Home</Link>
                  <Link style={{
                                  textDecoration:"none"
                          }}    to='/about' className={`${path.pathname=='/about' && 'text-danger'} `}>About</Link>
                  <li className=' position-relative'>
                      <div className="d-flex align-items-center gap-1">
                      Gallery
                          <IoIosArrowDropdown className='header-arrow-icon' size={15} />
                      </div>
                      
                      <HeaderNedtedul/>

                  </li>
                  <li className=''>Services</li>
                  <li className=''>Contact</li>
                  </ul>
              
                  </div>
                  </div>
              <div className="col-lg-4 d-flex flex-row align-items-center justify-content-end gap-1 icons">
                  <BiLogoTwitter size={20} color='#969696'/>
                  <BiLogoFacebook  size={20} color='#969696'/>
                  <BiLogoInstagram size={20} color='#969696'/>
                  <BiLogoLinkedin size={20} color='#969696' />
                  {
                       
                      btns ?
                          (<IoMdClose size={20} onClick={menuClose} color='#969696' className='menu-btn' cursor="pointer"/>) :
                          (<IoIosMenu size={20} onClick={menuShow} color='#969696' className='menu-btn' cursor="pointer" />)
                  }
                
                

              </div>
              
              </div>
              
      </>
  )
}

export default Header