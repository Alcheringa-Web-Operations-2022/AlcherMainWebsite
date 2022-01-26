import gsap from 'gsap';
import '../assets/styles/footer.css';
import editions from '../assets/footer/editions.svg';
import footfall from '../assets/footer/footfall.svg';
import events from '../assets/footer/events.svg';
import colleges from '../assets/footer/colleges.svg';
import phoneLeft from '../assets/footer/phoneLeft.png';
import phoneRight from '../assets/footer/phoneRight.png';
import alcherLadyImg from '../assets/alcher-lady.png';

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const iconsContainerRef = useRef();
    useEffect(() => {
        gsap.delayedCall(1, () => {
            gsap.fromTo(
                '.phones-container',
                { y: 200 },
                {
                    scrollTrigger: {
                        trigger: '.phones-container',
                        start: 'top bottom',
                        end: 'center center',
                        toggleActions: 'play none none reverse',
                        id: 'phones',
                    },
                    opacity: 1,
                    y: 0,
                },
            );

            gsap.fromTo(
                '.alcher-lady-container-2 img',
                { y: 0 },
                {
                    scrollTrigger: {
                        trigger: '.alcher-lady-container-1',
                        start: 'top bottom',
                        id: 'alcher_lady',
                        toggleActions: 'play none none reverse',
                    },
                    y: -250,
                    scale: 1.2,
                },
            );

            gsap.fromTo(
                '.alcher-lady-container-2 img',
                { y: -250, scale: 1.2 },
                {
                    scrollTrigger: {
                        trigger: '.alcher-lady-container-2',
                        start: 'top bottom',
                        end: 'top center',
                        id: 'alcher_lady_back',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    },
                    duration: 1,
                    y: 0,
                    scale: 1,
                },
            );
        });
    }, []);
    return (
        <div className="footer-container">
            <div className="icons-container" ref={iconsContainerRef}>
                <div className="icon-wrapper">
                    <img width="150" src={editions} alt="editions" />
                    26 <br /> EDITIONS
                </div>
                <div className="icon-wrapper">
                    <img width="150" src={footfall} alt="footfall" />
                    140k <br /> FOOTBALL
                </div>
                <div className="icon-wrapper">
                    <img width="150" src={events} alt="events" />
                    100+ <br /> EVENTS
                </div>
                <div className="icon-wrapper">
                    <img width="150" src={colleges} alt="colleges" />
                    500+ <br /> COLLEGES
                </div>
            </div>
            <div className="phones-container">
                <div className="phones-wrapper">
                    <img src={phoneLeft} alt="phone-left" />
                    <img src={phoneRight} alt="phone-right" />
                </div>
                <div className="phones-text-wrapper">
                    Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam
                    at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt
                </div>
            </div>
            <div className="alcher-lady-container-1"></div>
            <div className="alcher-lady-container-2">
                <p>
                    EVENTS <br /> CAMPAIGNS <br /> MUN <br /> TEAM <br /> CONTACT <br /> SPONSORS
                </p>
                <img src={alcherLadyImg} alt="alcher-lady" />
                <p>
                    EVENTS <br /> CAMPAIGNS <br /> MUN <br /> TEAM <br /> CONTACT <br /> SPONSORS
                </p>
            </div>
        </div>
    );
};

export default Footer;
