import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../assets/styles/voyage-2-neoterra.css';

import pronites_left from '@assets/v2g-asserts/pronites_left.png';
import cc_left from '@assets/v2g-asserts/cc_left.png';
import humour_left from '@assets/v2g-asserts/humour_left.png';
import proshows_left from '@assets/v2g-asserts/proshows_left.png';

import pronites_right from '@assets/v2g-asserts/pronites_right.png';
import cc_right from '@assets/v2g-asserts/cc_right.png';
import humour_right from '@assets/v2g-asserts/humour_right.png';
import proshows_right from '@assets/v2g-asserts/proshows_right.png';

import pronites_event from '@assets/v2g-asserts/pronites_event.png';
import cc_event from '@assets/v2g-asserts/cc_event.png';
import humour_event from '@assets/v2g-asserts/humour_event.png';
import proshows_event from '@assets/v2g-asserts/proshows_event.png';

import pronites_astro from '@assets/v2g-asserts/pronites_astro.png';
import cc_astro from '@assets/v2g-asserts/cc_astro.png';
import humour_astro from '@assets/v2g-asserts/humour_astro.png';
import proshows_astro from '@assets/v2g-asserts/proshows_astro.png';

import footerStarsBg from '@assets/images/stars.png';

const EVENTS_HEAD = ['PRONITES', "CREATOR'S CAMP", 'HUMOUR FEST', 'PROSHOWS'];
const EVENTS_DESRIPTION = [
    'Star-studded performances that excite and awaken, Pronites is the ultimate party experience for every rave-craving soul at Alcheringa',
    "From wacky jugaads to amusing college incidents, renowned comedians narrate anecdotes dripping with hilarity at Alcheringa's Humor Fest",
    'Returning each year with the biggest talents in the industry, Proshows celebrates the essence of Alcheringa with international artists and stunning performances',
    'An eye-opener for creators and curators alike , Creators’ Camp at Alchering presents a truly inspired discourse among gifted pioneers of creativity.',
];
const IMGS_LEFT = [pronites_left, cc_left, humour_left, proshows_left];
const IMGS_RIGHT = [pronites_right, cc_right, humour_right, proshows_right];
const IMGS_EVENT = [pronites_event, cc_event, humour_event, proshows_event];
const IMGS_ASTRO = [pronites_astro, cc_astro, humour_astro, proshows_astro];

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
    const imgsAstroRef = useRef([]);
    const eventsHeadRef = useRef([]);
    const eventsDescriptionRef = useRef([]);
    const imgsEventRef = useRef([]);
    const imgsLeftRef = useRef([]);
    const imgsRightRef = useRef([]);
    useEffect(() => {
        gsap.delayedCall(0.1, () => {
            // gsap.to('.events-container', {
            //     scrollTrigger: {
            //         trigger: '#event-trigger-3',
            //         start: 'bottom top',
            //         markers: true,
            //         id: 'check',
            //         end: '+=100%',
            //     },
            //     css: {
            //         opacity: 0,
            //     },
            // });

            const rmain_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#events-container',
                    start: 'top top',
                    end: 'bottom 70%',
                    toggleActions: 'play none none reverse',
                    // markers: true,
                    id: 'events-container',
                },
            });
            rmain_tl.to('#banner-img', {
                y: '-=100%',
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#events-container',
                    start: 'top top',
                    end: 'bottom 80%',
                    toggleActions: 'play reverse play reverse',
                    // markers: true,
                    id: 'events-container',
                },
            });
            tl.to('.v2n-wrapper-main', {
                css: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                },
            });
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#events-container',
                    toggleActions: 'play reverse play reverse',
                    start: 'top bottom',
                    end: '+=150%',
                },
            });
            tl2.to(imgsAstroRef.current[0], {
                opacity: 1,
                translateX: window.innerWidth < 500 ? '10vw' : '-6vw',
            });
            tl2.to(eventsHeadRef.current[0], {
                opacity: 1,
            });
            tl2.to(eventsDescriptionRef.current[0], {
                opacity: 1,
            });
            tl2.to(imgsLeftRef.current[0], {
                opacity: 1,
            });
            tl2.to(imgsAstroRef.current[0], {
                opacity: 1,
            });
            for (let i = 0; i < EVENTS_HEAD.length; i++) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: `#event-trigger-${i}`,
                        id: 'event-trigger-1',
                        // markers: true,
                        start: 'top top',
                        toggleActions: 'play none none reverse',
                        end: '+=400%',
                    },
                });
                timeline.to(
                    imgsEventRef.current[i],
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    '<',
                );
                timeline.to(
                    imgsAstroRef.current[i],
                    {
                        translateX: window.innerWidth < 500 ? '50vw' : '4vw',
                        duration: 0.5,
                    },
                    '<',
                );
                timeline.to(
                    eventsHeadRef.current[i],
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    '<',
                );
                timeline.to(
                    imgsLeftRef.current[i],
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    '<',
                );
                timeline.to(imgsEventRef.current[i + 1], {
                    opacity: 1,
                    duration: 0.5,
                });

                timeline.to(
                    imgsAstroRef.current[i + 1],
                    {
                        opacity: 1,
                        translateX: window.innerWidth < 500 ? '7vw' : '-10vw',
                        duration: 0.5,
                    },
                    '<',
                );

                timeline.to(
                    eventsHeadRef.current[i + 1],
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    '<',
                );

                timeline.to(
                    imgsLeftRef.current[i + 1],
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    '<',
                );
                timeline.to(
                    eventsDescriptionRef.current[i],
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    '<',
                );
                timeline.to(
                    eventsDescriptionRef.current[i + 1],
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    '<',
                );
            }
        });
    }, []);
    return (
        <div className="v2n-container-main" style={{ backgroundImage: `url(${footerStarsBg})` }}>
            {EVENTS_HEAD.map((e, i) => {
                return (
                    <div className="v2n-wrapper-main" key={i}>
                        <div className="v2n-wrapper-left">
                            <img
                                src={IMGS_LEFT[i]}
                                alt="img-left"
                                className="img-l"
                                ref={(el) => (imgsLeftRef.current[i] = el)}
                            />
                            <h1 ref={(el) => (eventsHeadRef.current[i] = el)}>{e}</h1>
                            <p className="font-family-hk" ref={(el) => (eventsDescriptionRef.current[i] = el)}>
                                {EVENTS_DESRIPTION[i]}
                            </p>
                        </div>
                        <div className="v2n-wrapper-right">
                            <div>
                                <img
                                    src={IMGS_ASTRO[i]}
                                    alt="img-1"
                                    className="img-1"
                                    ref={(el) => (imgsAstroRef.current[i] = el)}
                                />
                                <img
                                    src={IMGS_EVENT[i]}
                                    alt="img-2"
                                    className="img-2"
                                    ref={(el) => (imgsEventRef.current[i] = el)}
                                />
                            </div>
                            <img
                                src={IMGS_RIGHT[i]}
                                alt="img-3"
                                className="img-3"
                                ref={(el) => (imgsRightRef.current[i] = el)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Events;
