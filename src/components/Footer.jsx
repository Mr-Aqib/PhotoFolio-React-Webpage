import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { RiReactjsLine } from 'react-icons/ri'

const Footer = () => {
  return (
      <>
          <footer className=" footerholder p-4 align-items-center justify-content-center gap-2 d-flex flex-column"
                  style={{
                  height:"30VH"
              }}>
             
                  <div>
                      <p className='text-white m-0 p-0'>© Copyright PhotoFolio All Rights Reserved</p>
                      </div>
                  <div className="d-flex flex-row align-items-center justify-content-end gap-2 footer-icons">
                      <div className='border border-secondary rounded-circle p-1'>
                          <BiLogoTwitter size={30} color='#969696' />
                      </div>
                      <div className='border border-secondary rounded-circle p-1'>
                          <BiLogoFacebook size={30} color='#969696' />
                      </div>
                      <div className='border border-secondary rounded-circle p-1'>
                      <BiLogoInstagram size={30} color='#969696' />
                      </div>
                      <div className='border border-secondary rounded-circle p-1'>
                          <BiLogoLinkedin size={25} color='#969696' />
                          </div>
                  </div>
                  <div>
                  <p className='text-white m-0 p-0'>Developed in REACT JS <RiReactjsLine color='gray' size={30} /> by <a className='fs-5 m-0 p-0' style={{
                      textDecoration: "none",
                      color:"#1F9266"
                      }} href="https://aqib-portfolio-eta.vercel.app">Muhammad Aqib</a></p>
                      </div>
            
          </footer>
      </>
  )
}

export default Footer