import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useLocoScroll from 'hooks/useLocoScroll';
import React, { useEffect, useRef } from 'react';
import './TeamsPage.scss';

// ScrollTrigger.defaults({
//     markers: true,
// });
gsap.registerPlugin(ScrollTrigger);
const sectionTitles = ['WEB-OPS', 'APP-OPS', 'CONVENER', 'FINANCE', 'CREATIVES', 'FINANCE', 'MARKETING'];
const teamsImages = [
    [
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    ],
    [
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    ],
    ['https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg'],
    [
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    ],
    [
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    ],
    [
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    ],
    [
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
        'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    ],
];

function TeamsPage2() {
    const titlesRef = useRef([]);
    const sectionsRef = useRef([]);
    const teamsImagesRef = useRef([]);
    useEffect(() => {
        gsap.delayedCall(1, () => {
            sectionTitles.map((el, i) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionsRef.current[i],
                        start: '10% top',
                        end: 'bottom 90%',
                        toggleActions: 'play none none reverse',
                    },
                    id: i,
                });
                tl.to('.teams__images__main', {
                    y: `-=${window.innerHeight}`,
                    duration: 1,
                });
                tl.fromTo(teamsImagesRef.current[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, '<');
                tl.fromTo(
                    teamsImagesRef.current[(i - 1) % sectionsRef.current.length],
                    { autoAlpha: 1 },
                    { autoAlpha: 0, duration: 0.5 },
                    '<',
                );
                tl.to(
                    titlesRef.current[i],
                    {
                        scale: 1.3,
                        opacity: 1,
                        duration: 1,
                    },
                    '<',
                );
                tl.to(
                    titlesRef.current[(i - 1) % sectionsRef.current.length],
                    {
                        scale: 0.9,
                        opacity: 0.8,
                        duration: 1,
                    },
                    '<',
                );
                tl.to(
                    '.teams__container',
                    {
                        y: `-=${titlesRef.current[i].clientHeight + 40}`,
                        duration: 1,
                    },
                    '<',
                );
            });
        });
    }, []);
    return (
        <div className="teams__main">
            <div className="teams__container">
                {sectionTitles.map((el, i) => {
                    return (
                        <div className="team__head" key={i}>
                            <h1 ref={(el) => (titlesRef.current[i] = el)}>{el}</h1>
                        </div>
                    );
                })}
            </div>
            {new Array(sectionTitles.length + 1).fill(0).map((el, i) => {
                return <div className="teams__scroller" key={i} ref={(el) => (sectionsRef.current[i] = el)}></div>;
            })}
            <div className="teams__images__main">
                {teamsImages.map((el, i) => {
                    return (
                        <section className="teams__images" key={i} ref={(el) => (teamsImagesRef.current[i] = el)}>
                            <div>
                                {el
                                    .filter((el, i) => i % 2 == 0)
                                    .map((el, i) => {
                                        return <img src={el} alt="team member" key={i}></img>;
                                    })}
                            </div>
                            <div>
                                {el
                                    .filter((el, i) => i % 2 == 1)
                                    .map((el, i) => {
                                        return <img src={el} alt="team member" key={i}></img>;
                                    })}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default TeamsPage2;
