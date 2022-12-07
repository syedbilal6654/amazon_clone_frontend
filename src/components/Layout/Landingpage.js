import React from 'react'
import ImageSlider from './ImageSlider'
import HomePageProductContainer from '../HomaPageProduct/HomePageProductContainer'

 function Landingpage(props) {
  return (
    <React.Fragment>
    <div className='container-fluid px-0'>
    <ImageSlider  />
    <HomePageProductContainer />
    </div>
    </React.Fragment>
  )
}
export default Landingpage;
