import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCacheBannerImages from '../../hooks/useCacheBannerImages';
import './LandingPage.scss';
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
            <section id="alcher-video">
                <div className="circle-container">
                    <p className="section-text">Hello there</p>
                </div>
                <div className="video-container"></div>
                <div className="main-container">
                    <div></div>
                    <div></div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
