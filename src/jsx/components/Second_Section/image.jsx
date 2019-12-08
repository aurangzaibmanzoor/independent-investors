import React from 'react';
import Content from './content';
import Circle from './circle';
import Form from './form';
const image = () => {
    return (
        <div>
            <div className="background-img">
                <Content />
                <Circle />
                <Form />
            </div>
        </div>
    );
};

export default image;