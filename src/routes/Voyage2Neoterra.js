import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../assets/styles/voyage-2-neoterra.scss';

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

const EVENTS_HEAD = ['PRONITES', "CREATOR'S CAMP", 'HUMOUR FEST', 'PROSHOWS'];
const EVENTS_DESRIPTION = Array(4).fill(
    'sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nuncsed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum.',
);
const IMGS_LEFT = [pronites_left, cc_left, humour_left, proshows_left];
const IMGS_RIGHT = [pronites_right, cc_right, humour_right, proshows_right];
const IMGS_EVENT = [pronites_event, cc_event, humour_event, proshows_event];
const IMGS_ASTRO = [pronites_astro, cc_astro, humour_astro, proshows_astro];

gsap.registerPlugin(ScrollTrigger);

const Voyage2Neoterra = () => {
    const imgsAstroRef = useRef([]);
    const eventsHeadRef = useRef([]);
    const eventsDescriptionRef = useRef([]);
    const imgsEventRef = useRef([]);
    const imgsLeftRef = useRef([]);
    const imgsRightRef = useRef([]);
    useEffect(() => {
        gsap.delayedCall(0.1, () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.v2n-container-main',
                    scrub: true,
                    start: 'top top',
                    end: '500%',
                    pin: true,
                },
            });

            for (let index = 0; index < EVENTS_HEAD.length; index++) {
                const refPrevImgAstro = imgsAstroRef.current[index - 1];
                const refPrsImgAstro = imgsAstroRef.current[index];
                const refPrevEventHead = eventsHeadRef.current[index - 1];
                const refPresEventHead = eventsHeadRef.current[index];
                const refPrevEventDescription = eventsDescriptionRef.current[index - 1];
                const refPresEventDescription = eventsDescriptionRef.current[index];
                const refPrevImgRight = imgsRightRef.current[index - 1];
                const refPresImgRight = imgsRightRef.current[index];
                const refPrevImgLeft = imgsLeftRef.current[index - 1];
                const refPresImgLeft = imgsLeftRef.current[index];

                tl.to('.v2n-wrapper-main', {
                    onStart: () => {
                        const tl = gsap.timeline();

                        // Animation astro
                        tl.to(refPrevImgAstro, {
                            translateX: '4vw',
                            duration: 0.3,
                        });
                        tl.to(refPrsImgAstro, {
                            opacity: 1,
                            duration: 0.1,
                        });
                        tl.to(refPrevImgAstro, {
                            opacity: 0,
                            duration: 0.1,
                        });
                        tl.to(refPrsImgAstro, {
                            translateX: '-15vw',
                            duration: 0.3,
                            delay: -0.2,
                        });

                        // Animation events_text
                        gsap.timeline()
                            .to(refPrevEventHead, {
                                opacity: 0,
                                duration: 0.3,
                            })
                            .to(refPresEventHead, {
                                opacity: 1,
                                duration: 0.3,
                            });
                        gsap.timeline()
                            .to(refPrevEventDescription, {
                                opacity: 0,
                                duration: 0.3,
                            })
                            .to(refPresEventDescription, {
                                opacity: 1,
                                duration: 0.3,
                            });

                        // Animation imgs
                        gsap.timeline()
                            .to(refPrevImgRight, {
                                opacity: 0,
                                duration: 0.3,
                            })
                            .to(refPresImgRight, {
                                opacity: 1,
                                duration: 0.3,
                                delay: -0.3,
                            });
                        gsap.timeline()
                            .to(refPrevImgLeft, {
                                opacity: 0,
                                duration: 0.3,
                            })
                            .to(refPresImgLeft, {
                                opacity: 1,
                                duration: 0.3,
                                delay: -0.3,
                            });
                    },
                    duration: 5,
                });
            }
        });
    }, []);
    return (
        <div className="v2n-container-main">
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
                            <p ref={(el) => (eventsDescriptionRef.current[i] = el)}>{EVENTS_DESRIPTION[i]}</p>
                        </div>
                        <div className="v2n-wrapper-right">
                            <div>
                                <img
                                    src={IMGS_ASTRO[i]}
                                    alt="img-1"
                                    className="img-1"
                                    ref={(el) => (imgsAstroRef.current[i] = el)}
                                />
                                <img src={IMGS_EVENT[i]} alt="img-2" className="img-2" />
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

export default Voyage2Neoterra;
