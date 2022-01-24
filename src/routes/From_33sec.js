import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import bg_green from '../assets/backgrounds/bg-green.png';
import '../assets/styles/from_33sec.css';

gsap.registerPlugin(ScrollTrigger);
const sectionTitles = ['PRONITES', 'PROSHOWS', 'HUMOUR FEST', 'COMPETITIONS', 'EXHIBITION', 'FLICKERINGA'];
const sectionDescriptions = [
    'vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae',
    'vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae',
    'vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae',
    'vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae',
    'vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae',
    'vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae',
];

const From_33sec = () => {
    const titlesRef = useRef([]);
    useEffect(() => {
        titlesRef.current.forEach((ref, index) => {
            gsap.to(ref, {
                scrollTrigger: {
                    trigger: ref,
                    start: 'top 30%',
                    end: 'bottom 30%',
                    markers: true,
                    toggleActions: 'play reverse play reverse',
                },
                duration: 0.45,
                opacity: 1,
                fontSize: '5.2rem',
            });

            gsap.to(ref.nextSibling, {
                scrollTrigger: {
                    trigger: ref,
                    start: 'top 30%',
                    end: 'bottom 30%',
                    toggleActions: 'play reverse play reverse',
                },
                autoAlpha: 1,
                duration: 0.45,
            });
            const ht = document.querySelector('.img-side').offsetHeight;
            gsap.fromTo(
                '.img-wrapper',
                {
                    translateY: -1 * index * ht,
                },
                {
                    translateY: -1 * (index + 1) * ht,
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 30%',
                        end: 'bottom 30%',
                        toggleActions: 'play none none reverse',
                    },
                },
            );
        });
    }, []);

    return (
        <div className="container-main">
            <div className="img-container">
                <div className="img-wrapper">
                    {sectionTitles.map((_, i) => {
                        return (
                            <img
                                key={i}
                                className="img-side"
                                src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Poster-1.jpg"
                                alt="img2"
                            />
                        );
                    })}
                </div>
            </div>
            <div className="text-container">
                {sectionTitles.map((el, i) => {
                    return (
                        <div className="event-container" key={i}>
                            <div className="event-head" ref={(el) => (titlesRef.current[i] = el)}>
                                {el}
                            </div>
                            <div className="event-description">{sectionDescriptions[i]}</div>
                        </div>
                    );
                })}
            </div>

            {/* <div style={{ backgroundImage: `url(${bg_green})`, height: '100vh' }}>Hello</div> */}
        </div>
    );
};

export default From_33sec;
