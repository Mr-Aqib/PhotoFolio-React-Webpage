import React from 'react'

const HeaderNedtedul = () => {
  return (
      <>
          <ul className='d-flex pe-5 py-2 ps-3  flex-column gap-4  rounded-2 position-absolute header-nested-ul list-unstyled' >
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             Nature
                          </li>
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             People
                          </li>
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             Archecture
                          </li>
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             Animal
                          </li>
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             Sports
                          </li>
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             Travel
                          </li>
                          <li className='header-nested-ul-items' style={{width:"max-content"}} >
                             Deep DropDown
                          </li>
      </ul>
      </>
  )
}

export default HeaderNedtedul