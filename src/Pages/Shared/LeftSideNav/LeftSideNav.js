import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = ({ allCourse }) => {

    return (
        <div className='nav-course'>
            <h4 className='text-center'>All Courses</h4>
            {
                allCourse.map(course => <p key={course.course_id}>

                    <ListGroup variant="flush">
                        <Link className='nav-course-title' to={`/course/${course._id}`}><ListGroup.Item >{course.title}</ListGroup.Item> </Link>

                    </ListGroup>

                </p>)
            }

        </div>
    );
};

export default LeftSideNav;