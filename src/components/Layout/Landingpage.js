import React from 'react'
import NavbarContainer from './NavbarConatiner/Navbar'
import ImageSlider from './ImageSlider'
import HomePageProductContainer from '../HomaPageProduct/HomePageProductContainer'
 function Landingpage() {
  return (
    <React.Fragment>
    <NavbarContainer/>
    <div className='container-fluid px-0'>
    <ImageSlider/>
    <HomePageProductContainer/>
    </div>
    </React.Fragment>
  )
}
export default Landingpage;
