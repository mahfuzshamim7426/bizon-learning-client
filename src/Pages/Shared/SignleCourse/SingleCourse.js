import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = () => {
    const singleCourse = useLoaderData()
    console.log('singleCourse', singleCourse)

    return (
        <div className='course-details'>
            <div className='py-2 page-title d-flex justify-content-center'>
                <h3 className='text-center me-2'>{singleCourse?.title}</h3>
                <button>PDF Download</button>
            </div>
            <div className='container'>
                <div className='container d-flex justify-content-center my-5'>
                    <Card className='single-course-container'>
                        {/* <Card.Title>{singleCourse?.title}</Card.Title> */}
                        <Card.Img className='course-image' variant="top" src={singleCourse?.thumbnail_url} />
                        <Card.Body>
                            <Card.Text>
                                {singleCourse?.details}

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;

// course_id
// :
// "01"
// details
// :
// "Do you realize that the only functionality of a web application that the user directly interacts with is through."
// mentor
// :
// "Alex Crumuger"
// skills
// :
// "HTML and CSS, Web Development"
// thumbnail_url
// :
// "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25"
// title
// :
// "HTML, CSS Fundamental for Developers"
// total_purchase
// :
// 488
// _id
// :
// "0282e0e58a5c404fbd15261f11c2ab6a"