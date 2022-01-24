import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import bg_green from '../assets/backgrounds/bg-green.png';
import '../assets/styles/from_33sec.css';

const From_33sec = () => {
    const pronitesHeadRef = useRef();
    const proshowsHeadRef = useRef();
    const humourfestHeadRef = useRef();
    const competitionsHeadRef = useRef();
    const exhibitionHeadRef = useRef();
    const flickeringaHeadRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animatePronitesHead = gsap.to(pronitesHeadRef.current, {
            scrollTrigger: {
                trigger: pronitesHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                markers: true,
                toggleActions: 'play reverse play reverse',
            },
            duration: 0.45,
            opacity: 1,
            fontSize: '6.2rem',
            ease: 'Power4.easeOut',
        });
        const animatePronitesDescription = gsap.to(pronitesHeadRef.current.nextSibling, {
            scrollTrigger: {
                trigger: pronitesHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
            },
            display: 'block',
        });
        const animateProshowsHead = gsap.to(proshowsHeadRef.current, {
            scrollTrigger: {
                trigger: proshowsHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                markers: true,
                toggleActions: 'play reverse play reverse',
            },
            duration: 0.45,
            opacity: 1,
            fontSize: '6.2rem',
            ease: 'Power4.easeOut',
        });
        const animateProshowsDescription = gsap.to(proshowsHeadRef.current.nextSibling, {
            scrollTrigger: {
                trigger: proshowsHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
            },
            display: 'block',
        });
        const animateHumourfestHead = gsap.to(humourfestHeadRef.current, {
            scrollTrigger: {
                trigger: humourfestHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                markers: true,
                toggleActions: 'play reverse play reverse',
            },
            duration: 0.45,
            opacity: 1,
            fontSize: '6.2rem',
            ease: 'Power4.easeOut',
        });
        const animateHumourfestDescription = gsap.to(humourfestHeadRef.current.nextSibling, {
            scrollTrigger: {
                trigger: humourfestHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
            },
            display: 'block',
        });
        const animateCompetitionsHead = gsap.to(competitionsHeadRef.current, {
            scrollTrigger: {
                trigger: competitionsHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                markers: true,
                toggleActions: 'play reverse play reverse',
            },
            duration: 0.45,
            opacity: 1,
            fontSize: '6.2rem',
            ease: 'Power4.easeOut',
        });
        const animateCompetitionsDescription = gsap.to(competitionsHeadRef.current.nextSibling, {
            scrollTrigger: {
                trigger: competitionsHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
            },
            display: 'block',
        });
        const animateExhibitionHead = gsap.to(exhibitionHeadRef.current, {
            scrollTrigger: {
                trigger: exhibitionHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                markers: true,
                toggleActions: 'play reverse play reverse',
            },
            duration: 0.45,
            opacity: 1,
            fontSize: '6.2rem',
            ease: 'Power4.easeOut',
        });
        const animateExhibitionDescription = gsap.to(exhibitionHeadRef.current.nextSibling, {
            scrollTrigger: {
                trigger: exhibitionHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
            },
            display: 'block',
        });
        const animateFlickeringaHead = gsap.to(flickeringaHeadRef.current, {
            scrollTrigger: {
                trigger: flickeringaHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                markers: true,
                toggleActions: 'play reverse play reverse',
            },
            duration: 0.45,
            opacity: 1,
            fontSize: '6.2rem',
            ease: 'Power4.easeOut',
        });
        const animateFlickeringaDescription = gsap.to(flickeringaHeadRef.current.nextSibling, {
            scrollTrigger: {
                trigger: flickeringaHeadRef.current,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
            },
            display: 'block',
        });

        return () => {
            animateCompetitionsHead.kill();
            animateCompetitionsHead.scrollTrigger.kill();
            animateCompetitionsDescription.kill();
            animateCompetitionsDescription.scrollTrigger.kill();
        };
    }, []);

    return (
        <div className="container-main">
            <div className="img-container-1">
                <img
                    className="img1"
                    width="300px"
                    src="https://sportshub.cbsistatic.com/i/2021/11/29/a5dee7b0-e47a-4e42-8048-39cb95974164/spider-man-no-way-home-new-poster-india.jpg"
                    alt="img1"
                />
                <img
                    className="img2"
                    width="300px"
                    src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Poster-1.jpg"
                    alt="img2"
                />
            </div>
            <div className="text-container">
                <div className="event-container">
                    <div className="event-head" ref={pronitesHeadRef}>
                        PRONITES
                    </div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-head" ref={proshowsHeadRef}>
                        PROSHOWS
                    </div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae
                        auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-head" ref={humourfestHeadRef}>
                        HUMOUR FEST
                    </div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-head" ref={competitionsHeadRef}>
                        COMPETITIONS
                    </div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-head" ref={exhibitionHeadRef}>
                        EXHIBITION
                    </div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-head" ref={flickeringaHeadRef}>
                        FLICKERINGA
                    </div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
            </div>
            <div className="img-container-2">
                <img
                    className="img3"
                    width="300px"
                    src="https://sportshub.cbsistatic.com/i/2021/11/29/a5dee7b0-e47a-4e42-8048-39cb95974164/spider-man-no-way-home-new-poster-india.jpg"
                    alt="img3"
                />
                <img
                    className="img4"
                    width="300px"
                    src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Poster-1.jpg"
                    alt="img4"
                />
            </div>
            {/* <div style={{ backgroundImage: `url(${bg_green})`, height: '100vh' }}>Hello</div> */}
        </div>
    );
};

export default From_33sec;
