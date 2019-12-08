import React from 'react';

const aboutOurCompany = () => {
    return (
        <div className="aboutOurCompany">
            <div className="aboutInfo aboutInfoMedia">
                <div style={{ marginLeft: "100px" }} className="about-content">
                    <h1>About Our Company</h1>
                    <p style={{ marginTop: "20px", lineHeight: "30px" }}>Independent Investors is a leading investment company based in the United Kingdom. Founded in the year 2008, we have been in the investment industry for more than a decade, serving our clients through the years. Our team of 40 trusted associates boasts of a cumulative 250 years of experience in investment trading, investment sales and portfolio management for clients from diverse backgrounds.</p>
                    <p style={{ marginTop: "20px", lineHeight: "30px" }}>As a finance team, we tend to our client’s financial goals, guiding them to make the best investments. We further help them align these investments according to changing market values and adjust their portfolios from time to time. Our services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
                </div>
            </div>
            <div className="aboutInfo aboutImgMedia">
                <img src="./img/about.jpg" height="86%" width="100%" alt="" />
            </div>
        </div>
    );
};

export default aboutOurCompany;