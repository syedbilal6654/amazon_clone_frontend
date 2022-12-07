import React from 'react'
import {Link} from 'react-router-dom'

function ImageSlider() {
    return (
        <React.Fragment>
            {   /* // <!-- image slider starts --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/">

                            <img className="d-block w-100" src="asserts/img/home_page_images/coverimage02.jpg"
                                alt="First slide" />
                        </Link>

                    </div>
                    <div className="carousel-item">
                        <Link to="/">

                            <img className="d-block w-100" src="asserts/img/home_page_images/coverimage01.jpg"
                                alt="Second slide" />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/">

                            <img className="d-block w-100" src="asserts/img/home_page_images/coverimage03.jpg"
                                alt="Third slide" />
                        </Link>
                    </div>
                </div>
                <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
            {     /*  // <!-- image slider ends --> */}
        </React.Fragment>
    )
}
export default ImageSlider;