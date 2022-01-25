import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import whiteRings from '@assets/images/white_rings.png';
import greenBg from '@assets/images/green_bg.png';
import './LandingPage.scss';
import { Power0 } from 'gsap/all';
import From_33sec from '../../routes/From_33sec';
const landingImage = 'https://bucket-s3.alcheringa.in/alcheringain/animation1frames/zoom%20ree0001.png';
const frameCount = 60;
const totalFrames = 60;

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.defaults({
//     markers: true,
// });
function LandingPage() {
    const { images, loading } = useCacheBannerImages(frameCount, totalFrames);
    const imageObj = { currentImage: 0 };
    const videoRef = useRef(null);

    useEffect(() => {
        if (!loading) {
            gsap.to(imageObj, {
                currentImage: images.length - 1,
                scrollTrigger: {
                    trigger: '#hero-trigger',
                    pin: true,
                    start: 'top top',
                    end: '+=150%',
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
                    end: '+=250%',
                    id: 'video-container',
                    scrub: true,
                },
            });
            tl.to('.section-text', { autoAlpha: 0, duration: 0.1 });
            tl.to(
                '.video-container',
                {
                    css: { clipPath: 'circle(100% at 50% 50%)' },
                    ease: 'power1',
                    duration: 2,
                    onStart: async () => {
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
                { left: '25%', right: '25%', bottom: '40%', onStart: () => (videoRef.current.controls = false) },
                '>',
            );
            tl.from('.video_top_text', { y: 50, autoAlpha: 0 }, '>');

            gsap.to(
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: '#events-container',
                        start: 'top bottom',
                        end: 'top 90%',
                        onEnter: () => {
                            gsap.to('.video-container', { background: 'transparent' });
                        },
                        onEnterBack: () => {
                            gsap.to('.video-container', { background: ' #9b3d4f' });
                        },
                        id: 'video-container',
                        scrub: true,
                    },
                },
            );
        }
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
            <section id="green_bg_wrapper" style={{ backgroundImage: `url(${greenBg})` }}>
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
                <div id="events-container"></div>
            </section>
            <section id="events-container">
                <From_33sec />
            </section>
        </div>
    );
}

export default LandingPage;
