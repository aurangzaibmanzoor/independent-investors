import React from 'react';
import InterestContent from './interestContent';
import InterestForm from './interestForm';
const interest = () => {
    return (
        <section>
            <div className="container container2">
                <div className="row interest">
                    <InterestContent />
                    <InterestForm />
                </div>
            </div>
        </section>
    );
};

export default interest;