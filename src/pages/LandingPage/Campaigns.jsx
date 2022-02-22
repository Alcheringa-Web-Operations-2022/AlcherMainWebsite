import { useEffect, useRef } from 'react';
import './Campaigns.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import NePhoto from '@assets/images/campaigns/ne.png';
import ShPhoto from '@assets/images/campaigns/ne.png';
import UnPhoto from '@assets/images/campaigns/ne.png';
import PiPhoto from '@assets/images/campaigns/ne.png';
import MsPhoto from '@assets/images/campaigns/ne.png';

gsap.registerPlugin(ScrollTrigger);

const imgs = [NePhoto, ShPhoto, UnPhoto, PiPhoto, MsPhoto];
const campaigns_head = ['North East Unveiled', 'SafHer', 'Udaan', 'Prithvi', 'Manshakti'];
const campaigns_desc = [
    'North East India is a microcosm of India with its own diversity in terms of languages, culture, arts, and religion. Our campaigns promote and unveil the true potential of this part of the country – its richness and diversity, which is still unexplored by many.Starting from Alcheringa’16, every year we host a series of events that aim towards providing a platform for showcasing the varied art and culture of the North East, brainstorming new ideas, discussing and raising awareness about the matters that affect these states. ',
    'Women have walked in space, elected as Heads of States; they have proven themselves equal to men in every way. Yet, they are not safe in their immediate surroundings. The sad reality is that we live in an increasingly violent society where the fear of crime is ever-present.To address this situation and take a step forward, Alcheringa organized SafHer, a campaign on women’s safety. SafHer highlights that every woman must raise her voice against any misconduct and get the perpetrators to justice.',
    'Originated under the name "Bachpan" in 2011, Udaan is an initiative undertaken by the students of IIT Guwahati, which aims to deliver hope to all those who have never had the opportunity. In the past, it has conducted various educational workshops and innovational programs to uplift the underprivileged and adorn their lives with some wonderful moments. Under the banner of Udaan, Alcheringa collaborates with several NGOs, to organize campaigns that highlight relevant matters, like, during Alcheringa’20, Udaan educated young minds across India about the impacts of Climate Change under an outreach program named ‘Project Prithvi’.',
    'Climate change is the greatest threat to our existence in our short history on this planet. Each of our daily actions affects the environment in some or the other way.Making people realize their role in the large movement against climate change, by educating them through activities that draw their attention towards issues that affect our planet, can make this world a better place to live in. In solidarity with the international activism about climate change, Team Alcheringa launched Project Prithvi, where we believe in the principle of living life simply and saving the world from climate change.',
    'Manshakti is one small step in the long journey towards mental wellness. It is a mental health awareness and wellness campaign, launched by Alcheringa, which aims to empathize and understand the people who suffer mentally. The only solace the COVID front liners have, during this pandemic, is our love and support motivating them to keep working. Through Manshakti, we collected some motivating messages and greetings from the public, which were then sent to the Covid-19 warriors, to let them know that we are proudly rooting for them.',
];

const Campaigns = () => {
    const campaignsHeadRef = useRef();
    const campaignsImgRef = useRef([]);
    useEffect(() => {
        gsap.delayedCall(1, () => {
            const action = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.campaigns-container-main',
                        pin: true,
                        start: 'top top',
                        end: '+=3000',
                        scrub: 0.5,
                    },
                    defaults: { duration: 1, ease: 'none' },
                })
                .to('.campaigns-head', { scale: 10, autoAlpha: 0 })
                .to('.box:nth-of-type(odd)', { autoAlpha: 1, stagger: -2 }, 1.2)
                .to('.box:nth-of-type(even)', { autoAlpha: 1, stagger: -2 }, 1.4)
                .to(
                    '.box:nth-of-type(odd)',
                    { scale: 4, transformOrigin: '30% center', xPercent: -200, stagger: -4 },
                    2.5,
                )
                .to('.box:nth-of-type(odd)', { autoAlpha: 0, stagger: -4 }, 3)
                .to(
                    '.box:nth-of-type(even)',
                    { scale: 4, transformOrigin: '70% center', xPercent: 100, stagger: -4 },
                    4,
                )
                .to('.box:nth-of-type(even)', { autoAlpha: 0, stagger: -4 }, 4.5);
        });
    }, []);

    return (
        <div className="campaigns-container-main">
            {campaigns_head.map((h, i) => {
                return (
                    <div key={i} className="box" ref={(el) => (campaignsImgRef.current[i] = el)}>
                        <div>{campaigns_head[i]}</div>
                        <img src={imgs[i]} />
                    </div>
                );
            })}
            {/* {IMGS.map((img, i) => {
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
            })} */}
            <div className="campaigns-head" ref={campaignsHeadRef}>
                CAMPAIGNS
            </div>
        </div>
    );
};

export default Campaigns;
