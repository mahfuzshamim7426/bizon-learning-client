import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='home-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider-1.jpg"
                        alt="First slide"
                    />
                    <div className='carousel-caption'>
                        <h3>Learn HTML & CSS</h3>
                        <p>HTML is the standard markup language for Web pages.</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Work With Own Server</h3>
                        <p>Deploy a React App on your own Server created by you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Apply JavaScript Features</h3>
                        <p>
                            Learn basic object-oriented concepts using the latest JavaScript syntax.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;