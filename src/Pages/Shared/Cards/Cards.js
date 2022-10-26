import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cards = ({ course }) => {
    return (
        <div className='container mt-5'>
            <div>
                <h2 className='text-center fs-3 m-3'>Courses</h2>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src={course.thumbnail_url} />
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>
                                        {course.details}

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Cards;