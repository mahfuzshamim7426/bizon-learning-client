import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSectiuon from '../Shared/CourseSection/CourseSectiuon';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import './Courses.css'



const Courses = () => {
    const allCourse = useLoaderData()
    return (
        <Row>
            <Col xs={4} className='left-side'>
                <LeftSideNav allCourse={allCourse} />

            </Col>

            <Col xs={8}>
                <CourseSectiuon allCourse={allCourse} />
            </Col>
        </Row>
    );
};

export default Courses;