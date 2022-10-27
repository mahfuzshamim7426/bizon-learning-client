import React from 'react';
import Card from 'react-bootstrap/Card';
import './CourseCard.css'

const CourseCard = ({ course }) => {
    return (
        <Card className='card-container'>
            <Card.Img variant="top" src={course?.thumbnail_url} />
            <Card.Body>
                <Card.Title>{course?.title}</Card.Title>
                <Card.Text>
                    {course?.details}

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;