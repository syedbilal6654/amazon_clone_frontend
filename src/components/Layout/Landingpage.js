import React from 'react'
import NavbarContainer from './NavbarConatiner/Navbar'
import ImageSlider from './ImageSlider'
import HomePageProductContainer from '../HomaPageProduct/HomePageProductContainer'
import Footer from './Footer'
 function Landingpage() {
  return (
    <React.Fragment>
    <NavbarContainer/>
    <div className='container-fluid px-0'>
    <ImageSlider/>
    <HomePageProductContainer/>
    <Footer/>
    </div>
    </React.Fragment>
  )
}
export default Landingpage;
