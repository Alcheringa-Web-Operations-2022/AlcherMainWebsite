import { useEffect, useRef } from 'react';
import '../assets/styles/campaigns.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMGS = Array(20)
    .fill([
        'https://images.thedirect.com/media/photos/SpiderManPoster.jpg',
        'https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg',
    ])
    .flat(1);

const Campaigns = () => {
    const campaignsHeadRef = useRef();
    const campaignsImgRef = useRef([]);
    useEffect(() => {
        gsap.delayedCall(0, () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.campaigns-container-main',
                    scrub: true,
                    start: 'top top',
                    end: (IMGS.length * 100) / 2 + '%',
                    pin: true,
                },
            });

            tl.to(campaignsHeadRef.current, {
                scale: 20,
                duration: 15,
                ease: 'power4.in',
            });
            tl.to(campaignsHeadRef.current, {
                opacity: 0,
                duration: 1,
                delay: -1,
            });
            tl.to(campaignsHeadRef.current, {
                delay: 5,
            });
            campaignsImgRef.current.reverse().forEach((ref, index) => {
                tl.to(ref, {
                    opacity: 1,
                    delay: -12,
                    duration: 4,
                });
                tl.to(ref, {
                    duration: 20,
                    delay: -12,
                    ease: 'power4.in',
                    css: {
                        left: `${index % 2 ? '45%' : '55%'}`,
                        width: ref.width * 10,
                    },
                });
                tl.to(ref, {
                    opacity: 0,
                    duration: 1,
                    delay: -1,
                });
            });
        });
    }, []);

    return (
        <div className="campaigns-container-main">
            {IMGS.map((img, i) => {
                return (
                    <img
                        key={i}
                        src={img}
                        width="300px"
                        className="campaigns-img"
                        ref={(el) => (campaignsImgRef.current[i] = el)}
                        style={{ transform: `translate(${i % 2 ? '0%' : '-100%'}, -50%)` }}
                    />
                );
            })}
            <div className="campaigns-head" ref={campaignsHeadRef}>
                CAMPAIGNS
            </div>
        </div>
    );
};

export default Campaigns;
