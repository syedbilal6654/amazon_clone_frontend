import React from 'react'

function ImageSlider() {
    return (
        <React.Fragment>
            {   /* // <!-- image slider starts --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="#">

                            <img className="d-block w-100" src="asserts/img/home_page_images/coverimage02.jpg"
                                alt="First slide" />
                        </a>

                    </div>
                    <div className="carousel-item">
                        <a href="#">

                            <img className="d-block w-100" src="asserts/img/home_page_images/coverimage01.jpg"
                                alt="Second slide" />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="#">

                            <img className="d-block w-100" src="asserts/img/home_page_images/coverimage03.jpg"
                                alt="Third slide" />
                        </a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {     /*  // <!-- image slider ends --> */}
        </React.Fragment>
    )
}
export default ImageSlider;