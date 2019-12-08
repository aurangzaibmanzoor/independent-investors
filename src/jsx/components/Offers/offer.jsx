import React from 'react';

const offer = () => {
    return (
        <section>
            <div className="offers">
                <div className="heading">
                    <h3>What We Offer</h3>
                </div>
                <div className="offer">
                    <div className="offer-info">
                        <div className="desc">
                            <h5>CONSISTENT RETURNS</h5>
                            <p>We assure you that for all your investments with us, you get your returns on time, paid annually or termwise throughout the investment period.</p>
                        </div>
                        <div className="desc">
                            <h5>FSCS COVERED FUNDS</h5>
                            <p>We have investment funds that are covered by the Financial Services Compensation Scheme (FSCS), which provides an additional shield of protection to all investments up to £80,000</p>
                        </div>
                        <div className="desc">
                            <h5>FLEXIBILITY & PERSONALISATION</h5>
                            <p>With us, you can personalise your portfolios with investments that are risk-free, ensure consistent returns and meet all your financial goals with the principal investment as low as £5,000.</p>
                        </div>
                    </div>
                    <div className="offer-info offer-info-2">
                        <img src="./img/offer-info.png" height="60%" alt="" />
                    </div>
                    <div className="offer-info offer-info-3">
                        <div className="desc desc_3">
                            <h5>ACCESSIBLE CUSTOMER SERVICE</h5>
                            <p>Throughout your investment period, we provide you with 24×7 customer service, ensuring a continuous conversation with our team as and when needed.</p>
                        </div>
                        <div className="desc desc_3">
                            <h5>CAPITAL PROTECTION</h5>
                            <p>We ensure 100% capital protection at the end of the term with zero hidden charges applied. After a brief investment period, you can tune or withdraw your investment as necessary.</p>
                        </div>
                        <div className="desc desc_3">
                            <h5>INVESTMENT GUIDANCE</h5>
                            <p>We provide comprehensive guidance and advisory services for our clients on their investments for better returns on investments and portfolio management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default offer;