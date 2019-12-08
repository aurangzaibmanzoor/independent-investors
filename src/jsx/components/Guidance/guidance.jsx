import React from 'react';
const guidance = () => {
    return (
        <section>
            <div className="guidance">
                <div className="form">
                    <form action="#">
                        <div className="form-group">
                            <input type="text" className="form-control guide-form" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control guide-form" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control guide-form" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <select className="form-control guide-form" name="Investment Option">
                                <option>Which investment option are you interested in?</option>
                                <option>Deposit & Savings</option>
                                <option>Bond Funds</option>
                                <option>Equity Funds</option>
                                <option>Fixed Rate Bonds</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select name="Investment Sum" className="form-control guide-form">
                                <option>Investment Sum</option>
                                <option>&#163;5000 - &#163;25,000</option>
                                <option>&#163;25,000 - &#163;50,000</option>
                                <option>&#163;50,000+</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-0" style={{ height: "100px" }}>
                            <button className="btn btn-width btn-info ">CONTACT US</button>
                        </div>
                    </form>
                </div>
                <div className="guide">
                    <h5>REACH OUT TO US FOR CUSTOM FINANCIAL COUNSEL AND GUIDANCE.</h5>
                    <div>
                        <h5>HAVE ANY QUESTIONS? REACH US BY PHONE.</h5>
                        <h5 className="phone">+44 203 695 1157</h5>
                        <h5>GET MORE INFO QUICKLY.</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default guidance;