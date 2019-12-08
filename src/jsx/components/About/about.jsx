import React from 'react';
import Services from './services';
import AboutOurCompany from './aboutOurCompany';
const about = () => {
    return (
        <section>
            <div className="about">
                <Services />
                <AboutOurCompany />
            </div>
        </section>
    );
};

export default about;