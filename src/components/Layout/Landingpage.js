import React from 'react'
import NavbarContainer from './NavbarConatiner/Navbar'
import ImageSlider from './ImageSlider'
import HomePageProductContainer from '../HomaPageProduct/HomePageProductContainer'
import Footer from './Footer'
 function Landingpage(props) {
  return (
    <React.Fragment>
    <NavbarContainer {...props}/>
    <div className='container-fluid px-0'>
    <ImageSlider  />
    <HomePageProductContainer />
    <Footer {...props} />
    </div>
    </React.Fragment>
  )
}
export default Landingpage;
