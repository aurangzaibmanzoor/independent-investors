import React from 'react';

const form = () => {
    return (
        <div className="form form-media">
            <h5 className="text-center w-75 ml-5">Achieve Your Financial Goals By Investing With Us Today!</h5>
            <p className="text-center">Fill in the form to reach out to us and we will call you back in 24 hours.</p>
            <form action="#">
                <div className="d-flex">
                    <input type="text" name="FName" className="form-control input-color mr-3 ml-4" placeholder="Name" />
                    <input type="tel" name="FName" className="form-control input-color mr-4" placeholder="Phone" />
                </div>
                <div>
                    <input type="email" name="EMail" className="form-control input-color input-width ml-4 mt-3 " placeholder="Email Address" />
                </div>
                <div>
                    <select className="form-control input-color mt-3 ml-4 input-width" name="Investment Option">
                        <option>Which investment option are you interested in?</option>
                        <option>Deposit & Savings</option>
                        <option>Bond Funds</option>
                        <option>Equity Funds</option>
                        <option>Fixed Rate Bonds</option>
                    </select>
                </div>
                <div>
                    <select name="Investment Sum" className="form-control input-width input-color ml-4 mt-3" style={{ width: "88%" }}>
                        <option>Investment Sum</option>
                        <option>&#163;5000 - &#163;25,000</option>
                        <option>&#163;25,000 - &#163;50,000</option>
                        <option>&#163;50,000+</option>
                    </select>
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                    <button className="btn input-width btn-info ">CONTACT US</button>
                </div>
            </form>
        </div>
    );
};

export default form;