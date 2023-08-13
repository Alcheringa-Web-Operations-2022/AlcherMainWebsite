import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import From_33sec from '../routes/From_33sec';
import Footer from '../routes/Footer';
import EventsPage from '../routes/EventsPage';
import Campaigns from '../routes/Campaigns';
// import Campaigns2 from '../pages/LandingPage/Campaigns';
import Teamspage from '../routes/Teamspage';
import Voyage2Neoterra from '../routes/Voyage2Neoterra';
import '@app/App.scss';
//import '../styles/locomotive-scroll.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLocoScroll from '../hooks/useLocoScroll';
import LandingPage from '@pages/LandingPage/LandingPage';
import TeamsPage2 from '../routes/TeamsPage2';
import ComingSoon from '@components/ComingSoon';
import Sponsor from '../routes/Sponsors';
import Demo from '@pages/demo/Banner';

function App() {
    //useLocoScroll();
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="/voyage2neoterra" element={<Voyage2Neoterra />} /> */}
                <Route path="/campaigns" element={<Campaigns />} />
                {/* <Route path="/campaigns2" element={<Campaigns2 />} /> */}
                {/* <Route path="/eventsPage" element={<EventsPage />} /> */}
                {/* <Route path="/campaignsdemo" element={<Campaigns />} /> */}
                {/* <Route path="/from_33sec" element={<From_33sec />} /> */}
                <Route path="/footer" element={<Footer />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/team" element={<TeamsPage2 />} />
                <Route path="/sponsors" element={<Sponsor />} />
                <Route path="/demo" element={<Demo />} />
            </Routes>
        </Router>
    );
}

export default App;
