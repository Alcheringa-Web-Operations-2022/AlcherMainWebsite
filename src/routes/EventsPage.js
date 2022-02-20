import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import './EventsPage.scss';
import alcherPlanet from '@assets/images/alcher-planet.png';

gsap.registerPlugin(MotionPathPlugin);
ScrollTrigger.defaults({
    markers: true,
});
gsap.registerPlugin(ScrollTrigger);

const EVENTS = ['PRONITES', 'PROSHOWS', 'HUMOUR FEST', 'COMPETITIONS', 'EXHIBITION', 'FLICKERINGA'];

function EventsPage() {
    const eventsHeadRef = useRef([]);
    const alcherPlanetRef = useRef();
    const globalCenterRef = useRef();

    useEffect(() => {
        const cx = window.innerWidth / 2,
            cy = window.innerHeight / 2;
        const PI = Math.PI;
        const radius = (alcherPlanetRef.current.width / 2) * 1.2;

        const rotate = (angle) => {
            return {
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle),
            };
        };
        gsap.delayedCall(1, () => {
            gsap.to('.events-animation', { visibility: 'visible' });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.event-container-main',
                    start: 'top top',
                    end: '+=100%',
                },
            });
            const bz_data = [
                rotate(Math.PI / 4),
                rotate((3 * Math.PI) / 4),
                rotate((-3 * Math.PI) / 4),
                rotate(Math.PI / 4),
                /*p1*/
            ];
            eventsHeadRef.current.map((el, i) => {
                const pos = el.getBoundingClientRect();
                tl.to(
                    el,
                    {
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
                                { x: pos.x - cx + el.offsetWidth / 2, y: pos.y - cy + el.offsetHeight / 2 },
                            ],
                            start: 0.2 + i / 10,
                            align: globalCenterRef.current,
                            curviness: 1,
                        },
                        duration: 1.5 + i / 4,
                    },
                    '<',
                );
            });
        });
    }, []);

    return (
        <div className="events-container-main">
            <span className="global__center" ref={globalCenterRef}></span>
            <div className="events-container-banner">
                <img src={alcherPlanet} className="alcher__planet" ref={alcherPlanetRef} />
                <h1 className="events__title">EVENTS</h1>
            </div>
            <div className="events__nav">
                {EVENTS.map((el, i) => {
                    return (
                        <p key={i} className="event__name" ref={(el) => (eventsHeadRef.current[i] = el)}>
                            {el}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default EventsPage;
