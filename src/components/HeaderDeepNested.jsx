import React from 'react'

const HeaderDeepNested = () => {
  return (
      <>
      <ul className='d-flex pe-5 py-2 ps-3  flex-column gap-2  rounded-2 position-absolute header-deep-nested-ul list-unstyled' >
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             Nature
                          </li>
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             People
                          </li>
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             Archecture
                          </li>
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             Animal
                          </li>
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             Sports
                          </li>
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             Travel
                          </li>
                          <li className='header-deep-nested-ul-items' style={{width:"max-content"}} >
                             Deep DropDown
                          </li>
      </ul>
      </>
  )
}

export default HeaderDeepNested