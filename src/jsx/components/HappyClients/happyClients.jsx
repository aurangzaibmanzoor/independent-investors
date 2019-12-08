import React from 'react';

const happyClients = () => {
    return (
        <section>
            <div className="happyClients">
                <div className="d-flex flex-column justify-content-around align-items-center" style={{ height: "130px" }}>
                    <h1 className="text-center mt-3 head_hc">Happy Clients</h1>
                    <p className="text-center para_hc">See what our happy clients got to say about us</p>
                </div>
                <div className="clients">
                    <div className="client">
                        <div className="client-img">
                            <img src="./img/client1.jpg" alt="" />
                        </div>
                        <p className="para_c">" Independent investors have been managing my portfolios for more than 5 years now. Apart from helping me make sound financial decisions, the further ensure that every penny you invest is accounted for. I am truly happy with their work. “</p>
                        <h6 className="client_name">TERRY PARKER</h6>
                    </div>
                    <div className="client client-2">
                        <div className="client-img">
                            <img src="./img/client2.jpg" alt="" />
                        </div>
                        <p className="para_c">" I have invested with various other investment firms in the UK, but none has exceeded my expectations like Independent Investors. Their personalized services ensured stable and consistent returns. The team is professional yet very approachable and has helped me gain the best returns from the investments. I would definitely recommend them to my acquaintances. “</p>
                        <h6 className="client_name">MATHEW JENSON</h6>
                    </div>
                    <div className="client">
                        <div className="client-img">
                            <img src="./img/client3.jpg" alt="" />
                        </div>
                        <p className="para_c">“The personalized services from Independent investors has always helped me with my financial goals. The team is highly proactive and available to answer queries at all times. I would highly recommend their services."</p>
                        <h6 className="client_name">MARIAM SALAM</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default happyClients;