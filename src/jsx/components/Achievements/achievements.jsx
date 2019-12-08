import React from 'react';

const Achievements = () => {
    return (
        <section>
            <div className="achievements">
                <div className="container-fluid">
                    <h5 className="text-center pt-5 pb-5 ach_Head"><span className="font-weight-normal ach_Head">We help our clients achieve their financial goals with</span> 100% capital protection.</h5>
                </div>
                <div className="achievementInfos">
                    <div className="achievementInfo">
                        <p>As a leading investment firm with access to some of the high performing investment funds in the UK, we handle investments from as low £5,000 to £1,000,000+ and deliver consistent returns to all our clients.</p>
                        <p>We bring the best possible financial gains to each and every one of our client and ensure 100% capital protection all the while. Our ongoing conversations with them help in maintaining better client relationships and understand their financial goals better. With this information, we further help perfect the portfolios through continuous assessments. We also provide a clear stress-free exit strategy to our clients, making business with us completely hassle-free.</p>
                        <p>For more information, feel free to contact us by email or phone. We are happy to help always.</p>
                    </div>
                    <div className="achievementInfo">
                        <img src="./img/about.jpg" height="85%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;