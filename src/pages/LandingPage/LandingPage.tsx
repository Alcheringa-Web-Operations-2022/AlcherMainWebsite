import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import whiteRings from '@assets/images/white_rings.png';
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
                    css: { clipPath: 'circle(100% at 52% 50%)' },
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
            <section>
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
                    <div className="main-container">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
            </section>
            <section id="events-container">
                <From_33sec />
            </section>
        </div>
    );
}

export default LandingPage;
