import React from 'react';

const responsiveForm = () => {
    return (
        <div>
            <div className="form d-md-none form-res">
                <h5 className="text-center">Achieve Your Financial Goals By Investing With Us Today!</h5>
                <p className="text-center">Fill in the form to reach out to us and we will call you back in 24 hours.</p>
                <div style={{ marginLeft: "7%" }}>
                    <form action="#" className="formGroup">
                        <div className="fullName" style={{ display: "flex", justifyContent: "space-around" }}>
                            <input type="text" name="FName" className="input-color name d-inline" placeholder="Name" />
                            <input type="tel" name="FName" className="input-color phone d-inline" placeholder="Phone" />
                        </div>
                        <div>
                            <input type="email" name="EMail" className="form-control input-color mt-3 input-width2" placeholder="Email Address" />
                        </div>
                        <div>
                            <select className="form-control input-color mt-3 input-width2" name="Investment Option" style={{ width: "94%" }}>
                                <option>Which investment option are you interested in?</option>
                                <option>Deposit & Savings</option>
                                <option>Bond Funds</option>
                                <option>Equity Funds</option>
                                <option>Fixed Rate Bonds</option>
                            </select>
                        </div>
                        <div>
                            <select name="Investment Sum" className="form-control input-color mt-3 input-width2" style={{ width: "94%" }}>
                                <option>Investment Sum</option>
                                <option>&#163;5000 - &#163;25,000</option>
                                <option>&#163;25,000 - &#163;50,000</option>
                                <option>&#163;50,000+</option>
                            </select>
                        </div>
                        <div className="d-flex align-items-center" style={{ height: "100px" }}>
                            <button className="btn input-width2 btn-info ">CONTACT US</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default responsiveForm;