import React from 'react';
import Cards from '../Shared/Cards/Cards';
import Slider from '../Shared/Slider/Slider';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const allCourse = useLoaderData()
    return (
        <div>
            <Slider></Slider>
            {
                allCourse.map(course => <Cards
                    key={course._id}
                    course={course}
                ></Cards>
                )
            }

        </div>
    );
};

export default Home;