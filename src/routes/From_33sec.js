import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import bg_green from '../assets/backgrounds/bg-green.png';
import '../assets/styles/from_33sec.css';

gsap.registerPlugin(ScrollTrigger);
const sectionTitles = ['PRONITES', 'PROSHOWS', 'HUMOUR FEST', 'COMPETITIONS', 'EXHIBITION', 'FLICKERINGA'];
const sectionDescriptions = [
    'urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in',
    'urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in',
    'urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in',
    'urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in',
    'urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in',
    'urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in',
];
const sectionImagesTop = [
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_hero_03_opt.jpg',
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_hero_03_opt.jpg',
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_hero_03_opt.jpg',
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
];
const sectionImagesBottom = [
    'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    'https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/11/spider-man-3-imax-header.jpg',
    'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    'https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/11/spider-man-3-imax-header.jpg',
    'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg',
    'https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/11/spider-man-3-imax-header.jpg',
    'https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/11/spider-man-3-imax-header.jpg',
];

const From_33sec = () => {
    const titlesRef = useRef([]);
    useEffect(() => {
        gsap.delayedCall(1, () => {
            titlesRef.current.forEach((ref, index) => {
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
                            start: '-25% 40%',
                            end: '125% 40%',
                            toggleActions: 'play none none reverse',
                        },
                        duration: 1.4,
                    },
                );

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ref,
                        start: '-25% 40%',
                        end: '125% 40%',
                        toggleActions: 'play reverse play reverse',
                        srub: true,
                    },
                });
                tl.to(ref, {
                    duration: 0.45,
                    opacity: 1,
                    fontSize: '6rem',
                    ease: 'power3.inOut',
                });
                tl.to(ref.nextSibling, {
                    autoAlpha: 1,
                    ease: 'power3.inOut',
                });
            });
        });
    }, [titlesRef]);

    return (
        <div className="container-main">
            <div className="img-container img-pos-11">
                <div className="img-wrapper">
                    {sectionImagesTop.map((src, i) => {
                        return <img key={i} className="img-side" src={src} alt="img-top" />;
                    })}
                </div>
            </div>
            <div className="img-container img-pos-21">
                <div className="img-wrapper">
                    {sectionImagesBottom.map((src, i) => {
                        return <img key={i} className="img-side" src={src} alt="img-top" />;
                    })}
                </div>
            </div>
            <div className="img-container img-pos-12">
                <div className="img-wrapper">
                    {sectionImagesTop.map((src, i) => {
                        return <img key={i} className="img-side" src={src} alt="img-top" />;
                    })}
                </div>
            </div>
            <div className="img-container img-pos-22">
                <div className="img-wrapper">
                    {sectionImagesBottom.map((src, i) => {
                        return <img key={i} className="img-side" src={src} alt="img-top" />;
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
