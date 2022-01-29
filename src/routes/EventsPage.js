import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import '../assets/styles/events-page.css';
import alcherPlanet from '@assets/images/alcher-planet.png';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const EVENTS = ['PRONITES', 'PROSHOWS', 'HUMOUR FEST', 'COMPETITIONS', 'EXHIBITION', 'FLICKERINGA'];

function EventsPage() {
    const eventsHeadRef = useRef([]);
    const alcherPlanetRef = useRef();
    const globalCenterRef = useRef();
    useEffect(() => {
        gsap.delayedCall(1, () => {
            const PI = Math.PI;
            const radius = alcherPlanetRef.current.width / 2 + 70;

            gsap.to('.events-animation', { visibility: 'visible' });
            eventsHeadRef.current.forEach((ref, i) => {
                gsap.to(ref, {
                    duration: 2,
                    xPercent: -50,
                    yPercent: -50,
                    motionPath: {
                        path: [
                            { x: radius * Math.cos((2 * PI * -4) / 6), y: radius * Math.sin((2 * PI * -4) / 6) },
                            { x: radius * Math.cos((2 * PI * -3) / 6), y: radius * Math.sin((2 * PI * -3) / 6) },
                            { x: radius * Math.cos((2 * PI * -2) / 6), y: radius * Math.sin((2 * PI * -2) / 6) },
                            { x: radius * Math.cos((2 * PI * -1) / 6), y: radius * Math.sin((2 * PI * -1) / 6) },
                            { x: radius * Math.cos((2 * PI * 0) / 6), y: radius * Math.sin((2 * PI * 0) / 6) },
                            { x: radius * Math.cos((2 * PI * 1) / 6), y: radius * Math.sin((2 * PI * 1) / 6) },
                            { x: ref.offsetLeft - 300, y: 300 },
                        ],
                        start: 0.2 + i / 10,
                        align: globalCenterRef.current,
                        curviness: 0.5,
                    },
                });
            });
        });
    }, []);

    return (
        <div className="events-container-main">
            <span className="global-center" ref={globalCenterRef}></span>
            <div className="events-animation">
                {EVENTS.map((event, i) => {
                    return (
                        <div key={i} className="event-animation-head" ref={(el) => (eventsHeadRef.current[i] = el)}>
                            {event}
                        </div>
                    );
                })}
                {/* <div className="event-animation-head">hello</div> */}
            </div>
            <div className="events-container-top">
                <div className="events-img-wrapper">
                    <img
                        width="250px"
                        height="250px"
                        src="https://sportshub.cbsistatic.com/i/2022/01/21/6c422820-0c68-41e2-8496-ccc76599f26a/spider-man-no-way-home-multiverse-poster.jpg"
                        alt="img-1"
                    />
                    <img
                        width="300px"
                        height="250px"
                        src="https://assets-prd.ignimgs.com/2021/12/03/sm-nwh-doc-ock-1638544600230.jpg"
                        alt="img-2"
                    />
                </div>
                <div className="events-planet-wrapper">
                    <img
                        width="450px"
                        src={alcherPlanet}
                        alt="alcher-planet"
                        ref={(el) => (alcherPlanetRef.current = el)}
                        id="alcher-planet"
                    />
                    <h1>EVENTS</h1>
                </div>
                <div className="events-img-wrapper">
                    <img
                        width="250px"
                        height="250px"
                        src="https://sportshub.cbsistatic.com/i/2022/01/21/6c422820-0c68-41e2-8496-ccc76599f26a/spider-man-no-way-home-multiverse-poster.jpg"
                        alt="img-1"
                    />
                    <img
                        width="300px"
                        height="250px"
                        src="https://assets-prd.ignimgs.com/2021/12/03/sm-nwh-doc-ock-1638544600230.jpg"
                        alt="img-2"
                    />
                </div>
            </div>
            <div className="events-container-bottom">
                <div className="event-wrapper"></div>
            </div>
        </div>
    );
}

export default EventsPage;
