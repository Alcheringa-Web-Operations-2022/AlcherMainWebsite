import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import './EventsPage.scss';
import alcherPlanet from '@assets/images/alcher-planet.png';

import { EVENTS, EventImages } from './EventData';
import { ScrollToPlugin, TextPlugin } from 'gsap/all';
import Navigation from '@components/Navigation';
import useLocoScroll from '../hooks/useLocoScroll';
import useLoading from '../hooks/useLoading';
import Loading from '@components/Loading';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
const SlideItem = ({ imgSrc }) => {
    return (
        <div className="item">
            <img src={imgSrc} alt="" />
        </div>
    );
};

const SliderContainer = ({ images, index }) => {
    const [current, setCurrent] = useState(2);
    const slider_settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        initialSlide: 2,
        afterChange: (index) => setCurrent(index),
    };
    return (
        <>
            <div className={`slider slider-${index}`}>
                <div className="slider-wrapper">
                    <Slider {...slider_settings}>
                        {images.map((el, i) => {
                            return <SlideItem key={i} imgSrc={el.src} />;
                        })}
                    </Slider>
                </div>
                <h1 className="current__image">{images[current].title}</h1>
            </div>
            <div className="event__data">
                <p>{'day: ' + String(images[current].day && images[current].day - 1)}</p>
                <p>{'time: ' + images[current].time}</p>
            </div>
        </>
    );
};

function EventsPage() {
    //useLocoScroll();
    const eventsHeadRef = useRef([]);
    const alcherPlanetRef = useRef();
    const globalCenterRef = useRef();
    const eventSecRef = useRef();
    const eventsRef = useRef([]);
    const spacersRef = useRef([]);
    const { loading, windowLoading } = useLoading();

    const [current, setCurrent] = useState(null);

    useEffect(() => {
        if (!loading && !windowLoading) {
            const cx = window.innerWidth / 2,
                cy = window.innerHeight / 2;
            const PI = Math.PI;
            const radius = (alcherPlanetRef.current.width / 2) * 1.2;

            gsap.delayedCall(1, () => {
                gsap.to('.events-animation', { visibility: 'visible' });
                const rv_tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.events-container-main',
                        start: 'top top',
                        end: 'bottom top',
                        toggleActions: 'reverse reverse play reverse',
                    },
                });
                rv_tl.to('.car__wrapper', { autoAlpha: 0 });
                const car_tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: eventSecRef.current,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        toggleActions: 'play none none reverse',
                    },
                });
                car_tl.to('.events-container-banner', {
                    y: '-=100%',
                    duration: 0.5,
                });

                spacersRef.current.map((ref, i) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top bottom',
                            end: '+=100%',
                            id: `spacer-${i}`,
                            toggleActions: 'play none none reverse',
                        },
                    });
                    const prev = (i - 1 + EVENTS.length) % EVENTS.length;
                    tl.to(`.slider-${prev}`, {
                        y: `-=${window.innerHeight}`,
                        duration: 0.5,
                    });

                    tl.to(eventsRef.current[prev], {
                        autoAlpha: 0,
                        duration: 0.3,
                        delay: -0.3,
                    });

                    tl.to(eventsRef.current[i], {
                        autoAlpha: 1,
                        duration: 0.3,
                    });
                    tl.fromTo(
                        `.slider-${i}`,
                        {
                            y: `+=${window.innerHeight}`,
                            duration: 0.5,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                        },
                        '<',
                    );
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.events-container-main',
                        start: 'top top',
                        end: '+=100%',
                    },
                });

                eventsHeadRef.current.map((el, i) => {
                    const pos = el.getBoundingClientRect();
                    tl.to(
                        el,
                        {
                            xPercent: -50,
                            yPercent: -50,
                            motionPath: {
                                path: [
                                    {
                                        x: radius * Math.cos((2 * PI * -4) / 6),
                                        y: radius * Math.sin((2 * PI * -4) / 6),
                                    },
                                    {
                                        x: radius * Math.cos((2 * PI * -3) / 6),
                                        y: radius * Math.sin((2 * PI * -3) / 6),
                                    },
                                    {
                                        x: radius * Math.cos((2 * PI * -2) / 6),
                                        y: radius * Math.sin((2 * PI * -2) / 6),
                                    },
                                    {
                                        x: radius * Math.cos((2 * PI * -1) / 6),
                                        y: radius * Math.sin((2 * PI * -1) / 6),
                                    },
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
        }
        document.title = 'Alcheringa 2022 | Events';
    }, [loading, windowLoading]);

    return (
        <div>
            <Navigation />
            <Loading loading={loading} windowLoading={windowLoading} />
            <div className="events-animation" id="smooth-scroll">
                <div className="events-container-main">
                    <span className="global__center" ref={globalCenterRef}></span>
                    <div className="events-container-banner">
                        <img src={alcherPlanet} className="alcher__planet" ref={alcherPlanetRef} />
                        <h1 className="events__title">EVENTS</h1>
                    </div>
                    <div className="events__nav">
                        {EVENTS.map((el, i) => {
                            return (
                                <div
                                    key={i}
                                    className={'event__name' + (current == i ? ' active' : '')}
                                    ref={(el) => (eventsHeadRef.current[i] = el)}
                                    onClick={async () => {
                                        gsap.to('.car__wrapper', { autoAlpha: 0, duration: 0.2 });
                                        await gsap.to(window, { scrollTo: spacersRef.current[i] });
                                        setTimeout(() => {
                                            setCurrent(i);
                                            spacersRef.current.map((el, i) => {
                                                gsap.to(eventsRef.current[i], { autoAlpha: 0, duration: 0 });
                                            });
                                            gsap.to(eventsRef.current[i], { autoAlpha: 1 });
                                            gsap.to('.car__wrapper', { autoAlpha: 1 });
                                            gsap.to(`.slider-${i}`, { autoAlpha: 1, y: 0 });
                                        }, (i + 2) * 100);
                                    }}
                                >
                                    <div></div>
                                    <p>{el.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <section style={{ height: '100vh', backgroundColor: 'black' }} className="round__spacer"></section>
                <div className="events__section" ref={eventSecRef}>
                    <div className="car__wrapper">
                        {EVENTS.map((el, i) => {
                            return (
                                <section
                                    className="carousel__section"
                                    key={i}
                                    ref={(el) => (eventsRef.current[i] = el)}
                                    style={{
                                        zIndex: `${EVENTS.length - i}`,
                                    }}
                                >
                                    <div className="event__wrapper">
                                        <h1>{el.title}</h1>
                                        <SliderContainer images={EventImages[i]} index={i} />
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    {new Array(EVENTS.length).fill(0).map((el, i) => {
                        return <section className="event__spacer" key={i} ref={(el) => (spacersRef.current[i] = el)} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default EventsPage;
