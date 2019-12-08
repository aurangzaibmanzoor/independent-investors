import React from 'react';

const interestForm = () => {
    return (
        <div className="col-md-6 inter col-xs-12">
            <div className="form">
                <form action="#">
                    <div className="form-group d-inline ml-3">
                        <label className="mt-2" htmlFor="no1">Principal Amount</label>
                        <input type="number" id="no1" className="form-control ml-3" style={{ width: "90%" }} />
                    </div>
                    <div className="form-group d-inline ml-3">
                        <label htmlFor="no2" className="mt-2">Interest Rate:</label>
                        <input type="number" id="no2" className="form-control ml-3" style={{ width: "90%" }} />
                    </div>
                    <div className="form-group d-inline ml-3">
                        <label htmlFor="mon" className="mt-2">Compounded:</label>
                        <select id="mon" className="form-control ml-3" style={{ width: "90%" }}>
                            <option>Quaterly</option>
                            <option>Monthly</option>
                            <option>Half Yearly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className="form-group d-inline ml-3">
                        <label htmlFor="no3" className="mt-2">Period (months):</label>
                        <input type="number" id="no3" className="form-control ml-3" style={{ width: "90%" }} />
                    </div>
                    <button type="submit" className="btn btn-outline-dark ml-3 mt-2">Submit</button>
                </form>
                <div className="bottom text-light d-flex flex-column">
                    <h6>Interest Amount:</h6>
                    <h1>£ 0.0</h1>
                </div>
            </div>
        </div>
    );
};

export default interestForm;