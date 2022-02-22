import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useLocoScroll from 'hooks/useLocoScroll';
import React, { useEffect, useRef } from 'react';
import './TeamsPage.scss';

// ScrollTrigger.defaults({
//     markers: true,
// });
gsap.registerPlugin(ScrollTrigger);
const sectionTitles = [
    'MARKETING',
    'PR & BRANDING',
    'EVENTS',
    'CREATIVES',
    'IITG MUN',
    'WEB - OPS',
    'APP - OPS',
    'CONVENER',
    'FINANCE',
];
const teamsImages = [
    //MARKETING
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //PRB
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //EVENTS
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //CREATIVES
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //IITG MUN
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //WEBOPS
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //APPOPS
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //CONVENER
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
    ],
    //FINANCE
    [
        {
            name: 'Soumadip',
            email: 'abcd@abcd.com',
            dp: 'https://picsum.photos/200',
            phone: '9432352622',
        },
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
                    duration: 0.9,
                });

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
                                        return (
                                            <figure className="snip1527" key={i}>
                                                <div className="snip1527image">
                                                    <img src={el.dp} alt="pr-sample23" />
                                                </div>
                                                <figcaption>
                                                    <div>
                                                        <h3>{el.name}</h3>
                                                        <h3>Executive</h3>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {el.phone}
                                                            <br />
                                                            {el.email}
                                                        </p>
                                                        <p>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                x="0px"
                                                                y="0px"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                style={{ fill: '#FFFFFF' }}
                                                            >
                                                                {' '}
                                                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                                            </svg>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                x="0px"
                                                                y="0px"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 30 30"
                                                                style={{ fill: '#FFFFFF' }}
                                                            >
                                                                {' '}
                                                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                                            </svg>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                x="0px"
                                                                y="0px"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 30 30"
                                                                style={{ fill: '#FFFFFF' }}
                                                            >
                                                                {' '}
                                                                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </figcaption>
                                                <a href="#"></a>
                                            </figure>
                                        );
                                    })}
                            </div>
                            <div>
                                {el
                                    .filter((el, i) => i % 2 == 1)
                                    .map((el, i) => {
                                        return (
                                            <figure className="snip1527" key={i}>
                                                <div className="snip1527image">
                                                    <img src={el.dp} alt="pr-sample23" />
                                                </div>
                                                <figcaption>
                                                    <div>
                                                        <h3>{el.name}</h3>
                                                        <h3>Executive</h3>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {el.phone}
                                                            <br />
                                                            {el.email}
                                                        </p>
                                                        <p>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                x="0px"
                                                                y="0px"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                style={{ fill: '#FFFFFF' }}
                                                            >
                                                                {' '}
                                                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                                            </svg>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                x="0px"
                                                                y="0px"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 30 30"
                                                                style={{ fill: '#FFFFFF' }}
                                                            >
                                                                {' '}
                                                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                                            </svg>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                x="0px"
                                                                y="0px"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 30 30"
                                                                style={{ fill: '#FFFFFF' }}
                                                            >
                                                                {' '}
                                                                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </figcaption>
                                                <a href="#"></a>
                                            </figure>
                                        );
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
