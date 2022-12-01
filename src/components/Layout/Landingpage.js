import React from 'react'
import NavbarContainer from './NavbarConatiner/Navbar'
import ImageSlider from './ImageSlider'

 function Landingpage() {
  return (
    <React.Fragment>
    <NavbarContainer/>
    <div className='container-fluid px-0'>
    <ImageSlider/>
    </div>
    </React.Fragment>
  )
}
export default Landingpage;
