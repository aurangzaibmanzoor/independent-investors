import React from 'react';

const footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="left">
                    <div>
                        <h5 className="font-weight-bold text-light">CONTACT US</h5>
                        <pre className="text-light">
                            1 St Giles High St <br />
                            London WC2H <br />
                            8AG UK
                        </pre>
                        <h6 className="font-weight-bold text-light">Phone: +44 203 695 1157</h6>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h5 className="text-light">About</h5>
                        <p className="text-light">
                            Founded in 2008, Independent Investors is one of the UK’s trusted investment firms. Their  
                            financial team consists of 40 trusted associates, with a cumulative 250 years experience trading  
                            investments and managing portfolios for their vibrant clientele. Their services include FSCS 
                            protected funds and savings options like term savings deposit accounts, fixed-term bonds, global 
                            bond index funds, ETFs and index-linked funds.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="mt-3 text-light">© 2019 Independent Investors. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default footer;