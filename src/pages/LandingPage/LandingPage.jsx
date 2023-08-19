import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import whiteRings from '@assets/images/white_rings.svg';
import starsBg from '@assets/images/stars.webp';
import alcherlogo from '@assets/images/alcherlogo.png';
import alcherLogo from '@assets/images/alcher-logo.svg';
import './LandingPage.scss';
import Footer from '../../routes/Footer';
const landingImage = 'https://bucket-s3.alcheringa.in/alcheringain/animation1frames/zoom%20ree0001.png';
import Events from '../../components/Events';
import ThemeMain1080 from '@assets/ALCHERINGA 2022 OFFICIAL THEME VIDEO-(1080p).mp4';
import mobileNavIcon from '@assets/images/mobile-nav-icon.svg';
import footerStarsBg from '@assets/images/stars.webp';
const totalFrames = 90;
import Loading from '@components/Loading';
import mountainImage from '@assets/images/mountain.webp';
import skyBg from '@assets/images/sky.jpg';
import Banner from '@pages/demo/Banner';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
    const mql = window.matchMedia('(max-width: 800px)').matches;
    const frameCount = mql ? 20 : 30;
    const { images, loading } = useCacheBannerImages(frameCount, totalFrames);
    const imageObj = { currentImage: 0 };
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    const videoOverRef = useRef(null);
    const navRef = useRef(null);
    const bottomNavRef = useRef(null);
    const closeNav = () => {
        navRef.current.style.display = 'none';
    };
    const openNav = () => {
        navRef.current.style.display = 'flex';
    };
    useEffect(() => {
        if (!mql) {
            gsap.to(imageObj, {
                currentImage: images.length - 1,
                scrollTrigger: {
                    trigger: '#hero-trigger',
                    pin: true,
                    start: 'top top',
                    end: mql ? '+=100%' : '+=150%',
                    scrub: true,
                    id: 'banner-trigger',
                },
                onUpdate: () => {
                    // console.log(bannnerRef.current);
                    const imgSrc = images[Math.round(imageObj.currentImage)];
                    if (imgSrc) imageRef.current.src = imgSrc;
                },
            });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#alcher-video',
                pin: true,
                anticipatePin: true,
                start: 'top top',
                end: window.innerWidth < 800 ? '+=400%' : '+=600%',
                id: 'video-container',
                scrub: true,
            },
        });
        tl.to('.section-text', {
            css: {
                top: '10%',
                opacity: 0,
            },
            duration: 2,
            delay: window.innerWidth < 800 ? 6 : 3,
        });

        tl.to(
            '.video-container',
            {
                css: { clipPath: 'circle(100% at 50% 50%)' },
                duration: window.innerWidth < 800 ? 10 : 20,
                ease: 'ease-in',
                onStart: async () => {
                    videoOverRef.current.style.cursor = 'url(https://i.ibb.co/5YjXb7X/play.png), auto';
                    try {
                        videoRef.current.muted = false;
                        await videoRef.current.play();
                    } catch (err) {
                        videoRef.current.muted = true;
                        videoRef.current.play();
                    }
                },
                onReverseComplete: () => videoRef.current.pause(),
            },
            '>',
        );
        tl.to('.white__rings', { scale: 4.5, duration: window.innerWidth < 800 ? 10 : 20, ease: 'ease-in' }, '<');
        tl.to('.circle-container', { autoAlpha: 0, duration: 0 }, window.innerWidth < 800 ? '<' : '>');
        tl.to(
            '.video-wrapper',
            {
                left: window.innerWidth < 800 ? '8%' : '25%',
                right: window.innerWidth < 800 ? '8%' : '25%',
                bottom: window.innerWidth < 800 ? '45%' : '45%',
                top: window.innerWidth < 800 ? '10%' : '0',
                onStart: () => (videoRef.current.controls = false),
                onReverseComplete: () => {
                    videoRef.current.controls = true;
                },
                duration: window.innerWidth < 800 ? 6 : 12,
            },
            window.innerWidth < 500 ? '<' : '>',
        );
        tl.to(
            '.mountain',
            {
                autoAlpha: 1,
                duration: 10,
            },
            '<',
        );
        +tl.fromTo(
            '.video_top_text',
            { y: 300, autoAlpha: 0 },
            { autoAlpha: 1, y: -45, duration: window.innerWidth < 800 ? 4 : 8 },
            window.innerWidth < 800 ? '<+0.5' : '<+1',
        );
        tl.to('#banner-img', { y: '-=100%', duration: 0 }, '>');
        tl.to(
            '#desert_bg',
            {
                autoAlpha: 0,
                duration: window.innerWidth < 800 ? 4 : 8,
            },
            '>',
        );
        gsap.to('.img-container', {
            scrollTrigger: {
                trigger: '#events-container',
                start: 'top top',
                end: 'bottom bottom',
                toggleActions: 'play reverse play reverse',
            },
            position: 'fixed',
            duration: 4,
        });

        //logo animation
        gsap.to('.logo-container', {
            scrollTrigger: {
                trigger: 'body',
                start: '2vh',
                toggleActions: 'play reverse play reverse',
            },
            css: {
                'margin-top': '-50vh',
            },
            duration: 0.5,
            ease: 'power0',
        });

        //navigation
        const ntl = gsap.timeline({ paused: true, reversed: true });
        ntl.to('.bottom-nav', {
            css: {
                bottom: '-20vh',
            },
            duration: 0.2,
        });
        ntl.to('.top-nav', {
            css: {
                top: '0',
            },
            duration: 0.2,
        });
        const ht = window.innerHeight;
        document.addEventListener('wheel', (e) => {
            e.deltaY > 0 ? ntl.play() : ntl.reverse();
            // window.scrollY > 2 * ht
            //     ? (bottomNavRef.current.style.display = 'none')
            //     : (bottomNavRef.current.style.display = 'flex');
        });
        //position of the circles
        gsap.to('.white__rings', {
            scrollTrigger: {
                trigger: '#alcher-video',
                start: 'top bottom',
                end: '+=100%',
                scrub: true,
                id: 'cricles',
            },
            css: { 'margin-top': '0' },
        });
        const dobj = { x: 0 };
        gsap.to(dobj, {
            x: 100,
            scrollTrigger: {
                trigger: '#events-container',
                start: 'top bottom',
                end: '+=100%',
            },
            onStart: () => {
                videoRef.current.pause();
            },
            onReverseComplete: async () => {
                try {
                    videoRef.current.muted = false;
                    await videoRef.current.play();
                } catch (err) {
                    videoRef.current.muted = true;
                    videoRef.current.play();
                }
            },
        });
        document.title = 'Alcheringa 2022 | Home';
    }, [loading]);

    return (
        <div>
            <Loading loading={loading} windowLoading={false} />
            <div className="mobile-nav-container" ref={(e) => (navRef.current = e)}>
                <div className="close" onClick={closeNav}>
                    X
                </div>
                <div className="navs">
                    <a href="/events">
                        <div className="">EVENTS</div>
                    </a>
                    <a href="/campaigns">
                        <div className="">CAMPAIGNS</div>
                    </a>
                    <a href="https://iitgmun.org" target="__blank">
                        <div className="">MUN</div>
                    </a>
                    <a href="/team">
                        <div className="">TEAM</div>
                    </a>
                    <a href="/sponsors">
                        <div className="">SPONSORS</div>
                    </a>
                    {/* <div className="">CONTACT</div>
                    <div className="">SPONSORS</div> */}
                </div>
            </div>
            <div className="landing-container">
                <div className="mobile-nav">
                    <div>
                        <div>
                            <img src={alcherLogo} alt="" />
                        </div>
                        <div onClick={openNav} style={{ width: '60px' }}>
                            <img src={mobileNavIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <div className="top-nav">
                        <div>
                            <img src={alcherLogo} alt="" />
                        </div>
                        <div className="nav-links">
                            <a href="/events">
                                <div className="">EVENTS</div>
                            </a>
                            <a href="/campaigns">
                                <div className="">CAMPAIGNS</div>
                            </a>
                            <a href="https://iitgmun.org" target="__blank">
                                <div className="">MUN</div>
                            </a>
                            <a href="/team">
                                <div className="">TEAM</div>
                            </a>
                            <a href="/sponsors">
                                <div className="">SPONSORS</div>
                            </a>
                            {/* <div hrefassName="">CONTACT</div>
                            <div className="">SPONSORS</div> */}
                        </div>
                    </div>
                    {/* <div className="bottom-nav" ref={(e) => (bottomNavRef.current = e)}>
                        <a href="/events">
                            <div className="">EVENTS</div>
                        </a>
                        <a href="/campaigns">
                            <div className="">CAMPAIGNS</div>
                        </a>
                        <a href="https://iitgmun.org" target="__blank">
                            <div className="">MUN</div>
                        </a>
                        <a href="/team">
                            <div className="">TEAM</div>
                        </a>
                        <a href="/sponsors">
                            <div className="">SPONSORS</div>
                        </a>
                        <div className="">CONTACT</div>
                        <div className="">SPONSORS</div>
                    </div> */}
                </div>
                <section id="banner-image-wrapper">
                    <div className="logo-container">
                        <img src={alcherlogo} alt="" />
                        <button style={{ display: 'none' }}>JOIN NOW</button>
                    </div>
                    <img id="banner-img" alt="Alcheringa 2022" src={landingImage} ref={imageRef} />
                    <Banner />
                </section>
                <section style={{ minHeight: '90vh' }} id="hero-trigger"></section>
                <section
                    id="green_bg_wrapper"
                    style={{
                        backgroundImage: `url(${footerStarsBg})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div id="desert_bg" style={{ backgroundImage: `url(${skyBg})` }} />

                    <div id="alcher-video">
                        <div className="circle-container">
                            <div className="circles-inner-container">
                                <img src={whiteRings} className="white__rings" />
                                <p className="section-text">
                                    Alcheringa is the annual cultural festival of the Indian Institute of Technology,
                                    Guwahati. A splendid idea realised by a group of students in 1996 at IITG marked
                                    dawn of one of Asia’s most exhilarating and significant cultural college fests as we
                                    know it today.
                                </p>
                            </div>
                        </div>
                        <div className="video-container">
                            <div className="mountain">
                                <img src={mountainImage} />
                            </div>
                            <div className="video-wrapper">
                                <div className="video-div">
                                    <div
                                        className="video-over"
                                        ref={videoOverRef}
                                        onClick={async () => {
                                            // videoRef.current.controls = false;
                                            if (videoRef.current.paused) {
                                                videoOverRef.current.style.cursor =
                                                    'url(https://i.ibb.co/5YjXb7X/play.png), auto';
                                                try {
                                                    videoRef.current.muted = false;
                                                    await videoRef.current.play();
                                                } catch (err) {
                                                    videoRef.current.muted = true;
                                                    videoRef.current.play();
                                                }
                                            } else {
                                                videoRef.current.pause();
                                                videoOverRef.current.style.cursor =
                                                    'url(https://i.ibb.co/J2Rs7CN/play.png), auto';
                                            }
                                        }}
                                    ></div>
                                    <video
                                        src={ThemeMain1080}
                                        playsInline
                                        webkit-playsinline="true"
                                        preload="none"
                                        loop
                                        className="video"
                                        id="alcher_intro_video"
                                        controls
                                        muted
                                        autoPlay
                                        ref={videoRef}
                                    ></video>
                                </div>
                            </div>
                            <div className="video_top_text">
                                <p className="title">VOYAGE TO NEOTERRA</p>
                                <p className="subtitle">
                                    This year, we celebrate the naissance of a new era at Alcheringa. The Voyage to
                                    Neoterra presents an otherworldly nirvana of views and possibilities - ranging from
                                    vast red deserts and entrancing tropical forests to breathtaking canyons and
                                    mesmerising crevices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="events-container">
                        <Events />
                        <div className="events-trigger" id="event-trigger-0"></div>
                        <div className="events-trigger" id="event-trigger-1"></div>
                        <div className="events-trigger" id="event-trigger-2"></div>
                    </div>
                </section>
                <section id="footer">
                    <div id="footer-container">
                        <Footer />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
