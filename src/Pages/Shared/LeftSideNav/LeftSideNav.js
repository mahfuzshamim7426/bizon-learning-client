import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({ allCourse }) => {

    return (
        <div>
            <h4>All Courses</h4>
            {
                allCourse.map(course => <p key={course.course_id}>
                    <Link to={`/course/${course._id}`}>{course.title}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftSideNav;