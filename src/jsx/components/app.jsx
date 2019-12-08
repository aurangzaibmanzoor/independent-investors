import React from 'react';
import Nav from './Navigation/nav';
import SecondSection from './Second_Section/second-section';
import About from './About/about';
import Offers from './Offers/offer';
import Acievements from './Achievements/achievements';
import Interest from './Interest/interest';
import HappyClients from './HappyClients/happyClients';
import Guidance from './Guidance/guidance';
import Map from './Map/map';
import Footer from './Footer/footer';
const app = () => {
    return (
        <div>
            <Nav />
            <SecondSection />
            <About />
            <Offers />
            <Acievements />
            <Interest />
            <HappyClients />
            <Guidance />
            <Map />
            <Footer />
        </div>
    );
};
export default app;