import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import whiteRings from '@assets/images/white_rings.svg';
import greenBg from '@assets/images/green_bg.png';
import './LandingPage.scss';
import From_33sec from '../../routes/From_33sec';
import Footer from '../../routes/Footer';
const landingImage = 'https://bucket-s3.alcheringa.in/alcheringain/animation1frames/zoom%20ree0001.png';
const frameCount = 35;
const totalFrames = 90;

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({
//     markers: true,
// });
function LandingPage() {
    const { images, loading } = useCacheBannerImages(frameCount, totalFrames);
    const imageObj = { currentImage: 0 };
    const videoRef = useRef(null);
    const videoOverRef = useRef(null);

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

            tl.to('.section-text', {
                css: {
                    top: '10%',
                    opacity: 0,
                },
                duration: 0.5,
            });

            tl.to(
                '.video-container',
                {
                    css: { clipPath: 'circle(100% at 50% 50%)' },
                    ease: 'power1',
                    duration: 2,
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
            tl.to('.white__rings', { scale: 4.5, duration: 2, ease: 'power0' }, '<');
            tl.to('.circle-container', { autoAlpha: 0, duration: 0 }, '>');
            tl.to(
                '.video-wrapper',
                {
                    left: '25%',
                    right: '25%',
                    bottom: '40%',
                    onStart: () => (videoRef.current.controls = false),
                    onReverseComplete: () => {
                        videoRef.current.controls = true;
                    },
                },
                '>',
            );
            tl.from('.video_top_text', { y: 50, autoAlpha: 0 }, '>');
            tl.to(
                '#desert_bg',
                {
                    autoAlpha: 0,
                    duration: 0.4,
                },
                '<',
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
        }

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
    }, [loading]);
    const imageRef = useRef(null);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="landing-container">
            <section id="banner-image-wrapper">
                <img id="banner-img" alt="Alcheringa 2022" src={landingImage} ref={imageRef} />
            </section>
            <section id="hero-trigger"></section>
            <section id="green_bg_wrapper" style={{ background: `url(${greenBg})` }}>
                <div id="desert_bg" />
                <div id="alcher-video">
                    <div className="circle-container">
                        <div className="circles-inner-container">
                            <img src={whiteRings} className="white__rings" />
                            <p className="section-text">
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
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
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="events-container">
                    <From_33sec />
                </div>
            </section>
            <section id="footer">
                <div id="footer-container">
                    <Footer />
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
