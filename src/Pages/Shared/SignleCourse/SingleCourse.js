import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './SingleCourse.css'
import Pdf from "react-to-pdf";

const SingleCourse = () => {
    const singleCourse = useLoaderData()
    const ref = React.createRef();

    return (
        <>
            <div className='course-details'>
                <div className='py-2 page-title d-flex justify-content-center'>
                    <h3 className='text-center me-2'>{singleCourse?.title}</h3>

                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>PDF Download</button>}
                    </Pdf>
                </div>
                <div className='container'>
                    <div className='container d-flex justify-content-center my-5'>
                        <Card className='single-course-container'>
                            <Card.Img className='course-image' variant="top" src={singleCourse?.thumbnail_url} />
                            <Card.Body>
                                {/* <Card.Text>
                                    {singleCourse?.details}

                                </Card.Text> */}
                                <div className='print-box'>
                                    <div className='print-area' ref={ref}>
                                        <h3>Course: {singleCourse?.title}</h3>
                                        <h6>Mentor: {singleCourse?.mentor}</h6>
                                        <h5>Price: {singleCourse?.price}</h5>
                                        <p>Skills: {singleCourse?.skills}</p>
                                        <p>Details: {singleCourse?.details}</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='premium-btn-body'>
                    <Link to={`/premium/${singleCourse._id}`}><button>Get Premium Access</button></Link>
                </div>
            </div>

            {/* <div className='print-box'>
                <div className='print-area' ref={ref}>
                    <h3>Course: {singleCourse?.title}</h3>
                    <h6>Mentor: {singleCourse?.mentor}</h6>
                    <h5>Price: {singleCourse?.price}</h5>
                    <p>Skills: {singleCourse?.skills}</p>
                    <p>Details: {singleCourse?.details}</p>
                </div>
            </div> */}
        </>
    );
};

export default SingleCourse;

// {
//     "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
//     "course_id": "01",
//     "total_purchase": 488,
//     "mentor": "Alex Crumuger",
//     "title": "HTML, CSS Fundamental for Developers",
//     "price": "120",
//     "skills": "HTML and CSS, Web Development",
//     "thumbnail_url": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
//     "details": "Do you realize that the only functionality of a web application that the user directly interacts with is through."
// },