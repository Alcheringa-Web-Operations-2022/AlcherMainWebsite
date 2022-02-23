import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import whiteRings from '@assets/images/white_rings.svg';
import spaceBg from '@assets/images/space_bg.png';
import starsBg from '@assets/images/stars_bg.png';
import greenBg from '@assets/images/green_bg.png';
import forestBg from '@assets/images/forest_bg.jpg';
import alcherlogo from '@assets/images/alcherlogo.svg';
import alcherLogo from '@assets/images/alcher-logo.svg';
import './LandingPage.scss';
import From_33sec from '../../routes/From_33sec';
import Footer from '../../routes/Footer';
const landingImage = 'https://bucket-s3.alcheringa.in/alcheringain/animation1frames/zoom%20ree0001.png';
import Events from '../../components/Events';
import mobileNavIcon from '@assets/images/mobile-nav-icon.jpg';
import footerStarsBg from '@assets/images/stars.png';

const frameCount = 35;
const totalFrames = 90;

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    markers: true,
});
function LandingPage() {
    const { images, loading } = useCacheBannerImages(frameCount, totalFrames);
    const imageObj = { currentImage: 0 };
    const videoRef = useRef(null);
    const videoOverRef = useRef(null);
    const navRef = useRef(null);
    const closeNav = () => {
        navRef.current.style.display = 'none';
    };
    const openNav = () => {
        navRef.current.style.display = 'flex';
    };
    useEffect(() => {
        if (!loading) {
            gsap.to(imageObj, {
                currentImage: images.length - 1,
                scrollTrigger: {
                    trigger: '#hero-trigger',
                    pin: true,
                    start: 'top top',
                    end: '+=175%',
                    scrub: true,
                    id: 'banner-trigger',
                },
                onUpdate: () => {
                    const imgSrc = images[Math.round(imageObj.currentImage)];
                    if (imgSrc) imageRef.current.src = imgSrc;
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#alcher-video',
                    pin: true,
                    start: 'top top',
                    end: '+=300%',
                    id: 'video-container',
                    scrub: true,
                },
            });
            // gsap.to('.section-text', {
            //     scrollTrigger: {
            //         trigger: '#alcher-video',
            //         start: 'top top',
            //         end: '+=300%',
            //         scrub: true,
            //     },
            //     css: {
            //         top: '10%',
            //         opacity: 0,
            //     },
            //     duration: 0.1,
            // });
            tl.to('.section-text', {
                css: {
                    top: '10%',
                    opacity: 0,
                },
                duration: 1,
                delay: 0.8,
            });

            tl.to(
                '.video-container',
                {
                    css: { clipPath: 'circle(100% at 50% 50%)' },
                    ease: 'power1',
                    duration: 20,
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
            tl.to('.white__rings', { scale: 4.5, duration: 20, ease: 'power0' }, '<');
            tl.to('.circle-container', { autoAlpha: 0, duration: 0 }, window.innerWidth < 500 ? '<' : '>');
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
                    duration: window.innerWidth < 800 ? 4 : 12,
                },
                window.innerWidth < 500 ? '<' : '>',
            );
            tl.from('.video_top_text', { y: 50, autoAlpha: 0 }, '>');
            tl.to(
                '#desert_bg',
                {
                    autoAlpha: 0,
                    duration: 3,
                },
                '>',
            );

            gsap.to('#green_bg_wrapper', {
                backgroundPosition: `0px -1200px`,
                scrollTrigger: {
                    trigger: '#events-container',
                    // markers: true,
                    start: 'top center',
                    end: 'bottom top',
                    id: 'video-container',
                    scrub: true,
                },
            });
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
                duration: 0.8,
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
            document.addEventListener('wheel', (e) => {
                if (e.deltaY > 0) {
                    ntl.play();
                } else {
                    ntl.reverse();
                }
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
        }
    }, [loading]);
    const imageRef = useRef(null);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div>
            <div className="mobile-nav-container" ref={(e) => (navRef.current = e)}>
                <div className="close" onClick={closeNav}>
                    X
                </div>
                <div className="navs">
                    <div className="">EVENTS</div>
                    <div className="">CAMPAIGNS</div>
                    <div className="">MUN</div>
                    <div className="">TEAM</div>
                    <div className="">CONTACT</div>
                    <div className="">SPONSORS</div>
                </div>
            </div>
            <div className="landing-container">
                <div className="mobile-nav">
                    <div>
                        <div>
                            <img src={alcherLogo} alt="" />
                        </div>
                        <div onClick={openNav}>
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
                            <div className="">EVENTS</div>
                            <div className="">CAMPAIGNS</div>
                            <div className="">MUN</div>
                            <div className="">TEAM</div>
                            <div className="">CONTACT</div>
                            <div className="">SPONSORS</div>
                        </div>
                    </div>
                    <div className="bottom-nav">
                        <div className="">EVENTS</div>
                        <div className="">CAMPAIGNS</div>
                        <div className="">MUN</div>
                        <div className="">TEAM</div>
                        <div className="">CONTACT</div>
                        <div className="">SPONSORS</div>
                    </div>
                </div>
                <section
                    id="banner-image-wrapper"
                    style={{
                        background: `url(${starsBg})`,
                        backgroundPosition: '100% 0%',
                    }}
                >
                    <div className="logo-container">
                        <img src={alcherlogo} alt="" />
                        <button>JOIN NOW</button>
                    </div>
                    <img id="banner-img" alt="Alcheringa 2022" src={landingImage} ref={imageRef} />
                </section>
                <section id="hero-trigger"></section>
                <section
                    id="green_bg_wrapper"
                    style={{
                        backgroundImage: `url(${footerStarsBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <div id="desert_bg" />
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
                            <div className="video-wrapper">
                                <div className="video-div">
                                    <div
                                        className="video-over"
                                        ref={videoOverRef}
                                        onClick={(e) => {
                                            // videoRef.current.controls = false;
                                            if (videoRef.current.paused) {
                                                videoRef.current.play();
                                                videoOverRef.current.style.cursor =
                                                    'url(https://i.ibb.co/5YjXb7X/play.png), auto';
                                            } else {
                                                videoRef.current.pause();
                                                videoOverRef.current.style.cursor =
                                                    'url(https://i.ibb.co/J2Rs7CN/play.png), auto';
                                            }
                                        }}
                                    ></div>
                                    <video
                                        src="https://bucket-s3.alcheringa.in/alcherregistratiosstatic/videos/trailer.mp4"
                                        playsInline
                                        webkit-playsinline="true"
                                        preload="auto"
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
                                <p className="subtitle font-family-hk">
                                    This year, we celebrate the naissance of a new era at Alcheringa. The Voyage to
                                    Neoterra presents an otherworldly nirvana of views and possibilities - ranging from
                                    vast red deserts and entrancing tropical forests to breathtaking canyons and
                                    mesmerising glows/crevices.
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
