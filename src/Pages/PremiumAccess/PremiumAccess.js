import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './PremiumAccess.css'

const PremiumAccess = () => {
    const singleCourse = useLoaderData();
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-center my-5 p-5 premium-course-container'>
                    <Card className='premium-course-container'>
                        <h3 className='text-center me-2'>{singleCourse?.title}</h3>
                        <Card.Body>
                            <Card.Text>
                                <h4>Price ${singleCourse?.price}</h4>
                                <button className='mt-3'>Purchase Now</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
};

export default PremiumAccess;