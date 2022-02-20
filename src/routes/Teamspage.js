import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import '../assets/styles/teampage.css';

gsap.registerPlugin(ScrollTrigger);
const sectionTitles = ['WEB-OPS', 'APP-OPS', 'CONVENER', 'FINANCE', 'CREATIVES', 'FINANCE', 'CREATIVES'];

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

function Teamspage() {
    const titlesRef = useRef([]);
    const imagesref = useRef([]);
    useEffect(() => {
        gsap.delayedCall(1, () => {
            imagesref.current.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top top',
                    scrub: true,
                    pin: true,
                    opacity: 1,
                    markers: true,
                    pinSpacing: false,
                });
            });
        });
    }, [imagesref]);

    useEffect(() => {
        gsap.delayedCall(1, () => {
            titlesRef.current.forEach((ref, index) => {
                // const ht = document.querySelector('.img-side').offsetHeight;
                // gsap.fromTo(
                //     '.img-team',
                //     {
                //         translateY: -1 * index * ht,
                //         opacity:0,
                //     },
                //     {
                //         translateY: -1 * (index + 1) * ht,
                //         scrollTrigger: {
                //             trigger: ref,
                //             start: '50% 50%',
                //             end: '64.5% 35.5%',
                //             markers: true,
                //             toggleActions: 'play none none reverse',
                //         },
                //         opacity:1,
                //         duration: 1.4,
                //     },
                // );

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ref,
                        start: '50% 50%',
                        end: '64.5% 35.5%',
                        toggleActions: 'play reverse play reverse',
                        markers: true,
                        srub: true,
                    },
                });
                tl.to(ref, {
                    duration: 0.45,
                    opacity: 1,
                    fontSize: '8rem',
                    ease: 'power3.inOut',
                });
                // tl.to(ref.nextSibling, {
                //     autoAlpha: 1,
                //     ease: 'power3.inOut',
                // });
            });
        });
    }, [titlesRef]);

    return (
        <div className="">
            <div className="img-container">
                {sectionImagesBottom.map((el, i) => {
                    return (
                        <div className="imgsection" ref={(el) => (imagesref.current[i] = el)} key={i}>
                            <img className="" src={el} alt="img-top" />
                        </div>
                    );
                })}
            </div>

            <div className="text-container">
                {sectionTitles.map((el, i) => {
                    return (
                        <div className="event-container" key={i}>
                            <div className="event-head" ref={(el) => (titlesRef.current[i] = el)}>
                                {el}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* <div style={{ backgroundImage: `url(${bg_green})`, height: '100vh' }}>Hello</div> */}
        </div>
    );
}

export default Teamspage;
