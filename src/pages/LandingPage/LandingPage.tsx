import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import whiteRings from '@assets/images/white_rings.png';
import './LandingPage.scss';
import { Power0 } from 'gsap/all';
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

    useEffect(() => {
        if (!loading) {
            gsap.to(imageObj, {
                currentImage: images.length - 1,
                scrollTrigger: {
                    trigger: '#hero-trigger',
                    pin: true,
                    start: 'top top',
                    end: 'bottom top',
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
                    end: '+=100%',
                    id: 'video-container',
                    scrub: true,
                },
            });

            tl.to('.section-text', { autoAlpha: 0, duration: 0.2 });
            tl.to('.white__rings', { scale: 5, duration: 1 }, '>');
            tl.to('.video-container', { css: { clipPath: 'circle(105% at 50% 50%)' } }, '<');
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
                            <p className="section-text">Hello there</p>
                        </div>
                    </div>
                    <div className="video-container"></div>
                    <div className="main-container">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default LandingPage;
