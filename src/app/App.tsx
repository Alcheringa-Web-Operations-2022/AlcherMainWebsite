import React, { useEffect } from 'react';
import '@app/App.scss';
//import '../styles/locomotive-scroll.css';
import Banner from '@pages/demo/Banner';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useLocoScroll from '../hooks/useLocoScroll';
import LandingPage from '@pages/LandingPage/LandingPage';

function App() {
    //useLocoScroll();
    return (
        <div>
            <LandingPage />
        </div>
    );
}

export default App;
