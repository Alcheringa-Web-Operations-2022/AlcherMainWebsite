import { useEffect, useState, useRef } from 'react';
import '../assets/styles/campaigns.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Loading from '@components/Loading';
import Navigation from '@components/Navigation';
import useLoading from '../hooks/useLoading';

import campaings_1 from '@assets/images/campaigns/campaings_1.png';
import campaings_2 from '@assets/images/campaigns/campaings_2.png';
import campaings_3 from '@assets/images/campaigns/campaings_3.png';
import campaings_4 from '@assets/images/campaigns/campaings_4.png';
import campaings_5 from '@assets/images/campaigns/campaings_5.png';

gsap.registerPlugin(ScrollTrigger);

const IMGS = [campaings_1, campaings_2, campaings_3, campaings_4, campaings_5, campaings_1];

const Campaigns = () => {
    const campaignsHeadRef = useRef();
    const campaignsImgRef = useRef([]);
    const isMobile = window.matchMedia('(max-width: 380px)').matches;
    const { loading, windowLoading } = useLoading();
    useEffect(() => {
        console.log(isMobile);
        gsap.delayedCall(0, () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.campaigns-container-main',
                    scrub: true,
                    start: 'top top',
                    end: IMGS.length * 100 + '%',
                    pin: true,
                },
            });

            tl.to(campaignsHeadRef.current, {
                scale: 20,
                duration: 15,
                ease: 'power4.in',
            });
            tl.to(
                campaignsHeadRef.current,
                {
                    opacity: 0,
                    duration: 1,
                },
                '>',
            );
            tl.to(campaignsHeadRef.current, {
                duration: 7,
            });
            campaignsImgRef.current.reverse().forEach((ref, index) => {
                tl.to(
                    ref,
                    {
                        opacity: 1,
                        duration: 4,
                    },
                    '-=13',
                );
                tl.to(
                    ref,
                    {
                        duration: 20,
                        ease: 'power4.in',
                        css: isMobile
                            ? { top: `${index % 2 ? '48%' : '52%'}`, width: ref.width * 10 }
                            : { left: `${index % 2 ? '45%' : '55%'}`, width: ref.width * 10 },
                    },
                    '<',
                );
                tl.to(
                    ref,
                    {
                        opacity: 0,
                        duration: 1,
                    },
                    '>',
                );
            });
        });
    }, []);

    return (
        <div className="campaigns-container-main">
            <Navigation />
            <Loading loading={loading} windowLoading={windowLoading} />
            {IMGS.map((img, i) => {
                return (
                    <img
                        key={i}
                        src={img}
                        className="campaigns-img"
                        ref={(el) => (campaignsImgRef.current[i] = el)}
                        style={{
                            transform: isMobile
                                ? `translate(-50%, ${i % 2 ? '0%' : '-100%'})`
                                : `translate(${i % 2 ? '0%' : '-100%'}, -50%)`,
                            opacity: i >= 2 ? 0 : 0.02,
                        }}
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
