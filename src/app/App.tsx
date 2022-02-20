import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import From_33sec from '../routes/From_33sec';
import Footer from '../routes/Footer';
import EventsPage from '../routes/EventsPage';
import Campaigns from '../routes/Campaigns';
import Teamspage from '../routes/Teamspage';
import Voyage2Neoterra from '../routes/Voyage2Neoterra';
import '@app/App.scss';
//import '../styles/locomotive-scroll.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLocoScroll from '../hooks/useLocoScroll';
import LandingPage from '@pages/LandingPage/LandingPage';
import TeamsPage2 from '../routes/TeamsPage2';

function App() {
    //useLocoScroll();
    return (
        <Router>
            <div>
                {/* <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}
                ></div> */}
            </div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/voyage2neoterra" element={<Voyage2Neoterra />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/from_33sec" element={<From_33sec />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/eventspage" element={<EventsPage />} />
                <Route path="/teams" element={<Teamspage />} />
                <Route path="/teams2" element={<TeamsPage2 />} />
            </Routes>
        </Router>
    );
}

export default App;
