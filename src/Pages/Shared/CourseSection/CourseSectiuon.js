import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';

const CourseSectiuon = ({ allCourse }) => {
    return (
        <div className='container mt-5'>
            <div>
                <h2 className='text-center fs-3 m-3'>Courses</h2>
                <Row xs={1} md={3} className="g-4">
                    {allCourse && allCourse.length > 0 &&
                        allCourse.map((course, index) => (
                            <Col key={index}>
                                <CourseCard course={course} />


                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
};

export default CourseSectiuon;