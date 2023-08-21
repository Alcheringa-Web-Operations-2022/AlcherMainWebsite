import gsap, { ScrollToPlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useLocoScroll from 'hooks/useLocoScroll';
import React, { useEffect, useRef, useState } from 'react';
import './TeamsPage.scss';
import Navigation from '@components/Navigation';
import useLoading from '../hooks/useLoading';
import Loading from '@components/Loading';
import Vishal from '@assets/images/team/vishal.jpg';
import Vikas from '@assets/images/team/vikas.jpg';
import Ankit from '@assets/images/team/ankit.jpg';
import Puneeth from '@assets/images/team/puneeth.jpg';
import Yogi from '@assets/images/team/yogendra.jpg';
import Satyam from '@assets/images/team/satyam.webp';
import Pushkar from '@assets/images/team/pushkar.jpg';
import Shubham from '@assets/images/team/shubam.jpg';
import Himanshu from '@assets/images/team/himanshu.jpg';
import Palak from '@assets/images/team/palak.jpg';
import Vedant from '@assets/images/team/vedant.jpeg';
import Fahim from '@assets/images/team/fahim.jpg';
import Diya from '@assets/images/team/diya.png';
import Harry from '@assets/images/team/harry.jpg';
import HrishikeshP from '@assets/images/team/hrishikeshp.jpg';
import HrishikeshB from '@assets/images/team/hrishikeshb.jpg';
import Vipin from '@assets/images/team/vipin.webp';
import Deiwik from '@assets/images/team/deiwik.jpeg';
import Aryan from '@assets/images/team/aryan.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// ScrollTrigger.defaults({
//     markers: true,
// });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const sectionTitles = [
    'PR & BRANDING',
    'MARKETING',
    'EVENTS',
    'CREATIVES',
    'IITG MUN',
    'WEB - OPS',
    'APP - OPS',
    'FINANCE',
    'CONVENER',
];
const teamsImages = [
    //PRB
    [
        {
            name: 'Vishal Ch',
            email: 'vishal@alcheringa.in',
            dp: Vishal,
            phone: '7331104679',
            insta_link: 'https://www.instagram.com/cvishal_19/',
            fb_link: 'https://www.facebook.com/vishal.ch.3557440/',
            twitter_link: 'https://twitter.com/Ch__Vishal',
            position: 'Outreach and Media Head',
        },
        {
            name: 'Venkat Vikas Ch',
            email: 'vikas@alcheringa.in',
            dp: Vikas,
            phone: '8919054239',
            insta_link: 'https://www.instagram.com/venkat_vikas_/',
            fb_link: 'https://www.facebook.com/profile.php?id=100011653632000',
            twitter_link: 'https://twitter.com/ChVenkatVikas',
            position: 'PR Head',
        },
        {
            name: 'Ankit Agarwal',
            email: 'ankit.a@alcheringa.in',
            dp: Ankit,
            phone: '9983072631',
            insta_link: 'https://www.instagram.com/agarwal._.ankit/',
            fb_link: 'https://www.facebook.com/profile.php?id=100039995850487',
            twitter_link: 'https://www.facebook.com/profile.php?id=100039995850487',
            position: 'PR Head',
        },
    ],
    //MARKETING
    [
        {
            name: 'Puneeth G',
            email: 'puneeth@alcheringa.in',
            dp: Puneeth,
            phone: '9573431496',
            insta_link: 'https://www.instagram.com/gramsaipuneeth',
            fb_link: 'https://www.facebook.com/gramsai.puneeth',
            twitter_link: 'https://twitter.com/Puneeth14673235',
            position: 'CRM Head',
        },
        {
            name: 'Satyam Dandotiya',
            email: 'samdandotiya@alcheringa.in',
            dp: Satyam,
            phone: '6265279148',
            insta_link: 'https://www.instagram.com/_sam__xd/',
            fb_link: 'https://www.facebook.com/profile.php?id=100008426119019',
            twitter_link: 'https://twitter.com/samdandotiya?t=8K24pRkgFvzEHl4SoiMEXQ&s=08',
            position: 'CRM Head',
        },
        {
            name: 'Yogendra Choudhary',
            email: 'yogendrachoudhary@alcheringa.in',
            dp: Yogi,
            phone: '8761933771',
            insta_link: 'https://www.instagram.com/yogi___xd/',
            fb_link: 'https://www.facebook.com/yogendra.choudhary.3910829',
            twitter_link: 'https://www.facebook.com/yogendra.choudhary.3910829',
            position: 'CRM Head',
        },
        {
            name: 'Pushkar Choudhary',
            email: 'pushkar.c@alcheringa.in',
            dp: Pushkar,
            phone: '9760588055',
            insta_link: 'https://www.instagram.com/pushkar___xd/',
            fb_link: 'https://www.facebook.com/pushkar.choudhary.9634',
            twitter_link: 'https://twitter.com/Pushkar75775279?s=09',
            position: 'CRM Head',
        },
    ],

    //EVENTS
    [
        {
            name: 'Shubham Jangid',
            email: 'shubhamrsshubham@gmail.com',
            dp: Shubham,
            phone: '9892323221',
            insta_link: 'https://www.instagram.com/jangid__xd/',
            fb_link: 'https://www.facebook.com/shubham.jangid.3158',
            twitter_link: 'https://www.facebook.com/shubham.jangid.3158',
            position: 'Events Head',
        },
        {
            name: 'Himanshu Chaudhary',
            email: 'himanshu.chaudhary@iitg.ac.in',
            dp: Himanshu,
            phone: '7974827468',
            insta_link: 'https://www.instagram.com/hancy__xd',
            fb_link: 'https://www.facebook.com/hancy0007',
            twitter_link: 'https://twitter.com/hiiimanshuuu',
            position: 'Pronites Head',
        },
        {
            name: 'Palak Kothari',
            email: 'palak@alcheringa.in',
            dp: Palak,
            phone: '8619410044',
            insta_link: 'https://www.instagram.com/palakothari_/',
            fb_link: 'https://www.facebook.com/88888palak',
            twitter_link: 'https://www.facebook.com/88888palak',
            position: 'Camapaigns Head',
        },
    ],
    //CREATIVES
    [
        {
            name: 'Vedant Joshi',
            email: 'vedantjoshi09@gmail.com',
            dp: Vedant,
            phone: '8380943505',
            insta_link: 'https://www.instagram.com/__vedantjoshi__1810__/',
            fb_link: 'https://www.facebook.com/profile.php?id=100009102495456',
            twitter_link: 'https://twitter.com/vedantjoshi09',
            position: 'Creatives Head',
        },
        {
            name: 'Mohammed Fahim',
            email: 'mfahim@iitg.ac.in',
            dp: Fahim,
            phone: '8943068824',
            insta_link: 'http://www.instagram.com/faahym',
            fb_link: 'http://www.facebook.com/faahym',
            twitter_link: 'http://www.twitter.com/fahim656',
            position: 'Web And App Design Head',
        },
        {
            name: 'Diya S.',
            email: 'diya.s@iitg.ac.in',
            dp: Diya,
            phone: '9432352622',
            insta_link: 'https://instagram.com/_diya.s__',
            fb_link: 'https://www.facebook.com/diya.s.96995238',
            twitter_link: 'https://www.facebook.com/diya.s.96995238',
            position: 'Digital Media Head',
        },
    ],
    //IITG MUN
    [
        {
            name: 'Harry Patel',
            email: 'j.harry@iitg.ac.in',
            dp: Harry,
            phone: '7829397557',
            insta_link: 'https://instagram.com/harry_j_p_',
            fb_link: 'https://www.facebook.com/YouKnowWho.4242',
            twitter_link: 'https://www.facebook.com/YouKnowWho.4242',
            position: 'Secretary General',
        },
        {
            name: 'Hrishikesh Patil',
            email: 'hrishikeshp0304@gmail.com',
            dp: HrishikeshP,
            phone: '7349136980',
            insta_link: 'https://www.instagram.com/hrishikeshp_03/',
            fb_link: 'https://www.facebook.com/hrishikesh.patil.3382118',
            twitter_link: 'https://www.facebook.com/hrishikesh.patil.3382118',
            position: 'Director-General',
        },
    ],
    //WEBOPS
    [
        {
            name: 'Hrishikesh Boro',
            email: 'hrishikesh.alcheringa@gmail.com',
            dp: HrishikeshB,
            phone: '8638736009',
            insta_link: 'https://www.facebook.com/hrishikesh.boro.75248',
            fb_link: 'https://www.facebook.com/hrishikesh.boro.75248',
            twitter_link: 'https://www.facebook.com/hrishikesh.boro.75248',
            position: 'Webops Head',
        },
    ],
    //APPOPS
    [
        {
            name: 'Vipin Jaluthria',
            email: 'vipinjalothriya123@gmail.com',
            dp: Vipin,
            phone: '7011879379',
            insta_link: 'https://www.instagram.com/vip_itd/',
            fb_link: 'https://www.facebook.com/vipin.jaluthria.9/',
            twitter_link: 'https://www.facebook.com/vipin.jaluthria.9/',
            position: 'Appops Head',
        },
    ],
    //FINANCE
    [
        {
            name: 'Deiwik Gupta',
            email: 'deiwik@alcheringa.in',
            dp: Deiwik,
            phone: '9407452681',
            insta_link: 'https://www.instagram.com/deiwik_gupta/',
            fb_link: 'https://www.facebook.com/raghav.gupta.501598',
            twitter_link: 'https://www.facebook.com/raghav.gupta.501598',
            position: 'FINANCE AND ACCOUNTS HEAD',
        },
    ],
    //CONVENER
    [
        {
            name: 'Aryan Singh Yadav',
            email: 'aryan@alcheringa.in',
            dp: Aryan,
            phone: '9935407970',
            insta_link: 'https://www.instagram.com/aryansingh___xd/',
            fb_link: 'https://www.facebook.com/profile.php?id=100006376724401',
            twitter_link: 'https://www.facebook.com/profile.php?id=100006376724401',
            position: 'Convener',
        },
    ],
];

function TeamsPage2() {
    const titlesRef = useRef([]);
    const sectionsRef = useRef([]);
    const teamsImagesRef = useRef([]);
    const mql = window.matchMedia('(max-width: 800px)').matches;
    const { loading, windowLoading } = useLoading();
    const renderImages = (index) => {
        const images = teamsImages[index];

        let rightImages = null,
            leftImages = null;
        let equal = false;
        if (mql) {
            if (images.length <= 2) {
                leftImages = images;
            } else equal = true;
        } else equal = true;

        if (equal) {
            leftImages = images.filter((el, i) => i % 2 == 0);
            rightImages = images.filter((el, i) => i % 2 == 1);
        }

        return (
            <>
                <div className="teams__images__vert">
                    {leftImages.map((el, i) => {
                        return (
                            <figure className="snip1527" key={i}>
                                <div className="snip1527image">
                                    <LazyLoadImage src={el.dp} alt="pr-sample23" />
                                </div>
                                <figcaption>
                                    <div>
                                        <h3>{el.name}</h3>
                                        <h3>{el.position}</h3>
                                    </div>
                                    <div>
                                        <p>
                                            {el.phone}
                                            <br />
                                            {el.email}
                                        </p>
                                        <p>
                                            <a href={el.insta_link} target="__blank">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    style={{ fill: '#FFFFFF' }}
                                                >
                                                    {' '}
                                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                                </svg>
                                            </a>
                                            <a href={el.fb_link} target="__blank">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 42"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M20.5068 23.8524L21.6081 16.4786H14.7249V11.7021C14.6772 11.1559 14.7507 10.6058 14.94 10.092C15.1293 9.57823 15.4296 9.11384 15.8189 8.73281C16.2082 8.35179 16.6767 8.06378 17.1901 7.88985C17.7035 7.71592 18.2488 7.66048 18.786 7.72758H21.9695V1.45197C20.102 1.15332 18.2158 0.990206 16.3253 0.963867C10.5778 0.963867 6.82643 4.45032 6.82643 10.8654V16.4786H0.390625V23.8524H6.74039V41.1452H14.6045V23.8524H20.5068Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </a>
                                            {/* <a href={el.twitter_link} target="__blank">
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
                                            </a> */}
                                        </p>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                        );
                    })}
                </div>
                {rightImages && (
                    <div className="teams__images__vert">
                        {rightImages.map((el, i) => {
                            return (
                                <figure className="snip1527" key={i}>
                                    <div className="snip1527image">
                                        <LazyLoadImage src={el.dp} alt="pr-sample23" />
                                    </div>
                                    <figcaption>
                                        <div>
                                            <h3>{el.name}</h3>
                                            <h3>{el.position}</h3>
                                        </div>
                                        <div>
                                            <p>
                                                {el.phone}
                                                <br />
                                                {el.email}
                                            </p>
                                            <p>
                                                <a href={el.insta_link} target="__blank">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        style={{ fill: '#FFFFFF' }}
                                                    >
                                                        {' '}
                                                        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                                    </svg>
                                                </a>
                                                <a href={el.fb_link} target="__blank">
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 42"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20.5068 23.8524L21.6081 16.4786H14.7249V11.7021C14.6772 11.1559 14.7507 10.6058 14.94 10.092C15.1293 9.57823 15.4296 9.11384 15.8189 8.73281C16.2082 8.35179 16.6767 8.06378 17.1901 7.88985C17.7035 7.71592 18.2488 7.66048 18.786 7.72758H21.9695V1.45197C20.102 1.15332 18.2158 0.990206 16.3253 0.963867C10.5778 0.963867 6.82643 4.45032 6.82643 10.8654V16.4786H0.390625V23.8524H6.74039V41.1452H14.6045V23.8524H20.5068Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </a>
                                                {/* <a href={el.twitter_link} target="__blank">
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
                                                </a> */}
                                            </p>
                                        </div>
                                    </figcaption>
                                    <a href="#"></a>
                                </figure>
                            );
                        })}
                    </div>
                )}
            </>
        );
    };
    useEffect(() => {
        gsap.delayedCall(0, () => {
            // const st_tl = gsap.timeline({
            //     // scrollTrigger: {
            //     //     trigger: '.teams__info',
            //     //     start: '10% top',
            //     //     end: '+=100%',
            //     //     toggleActions: 'play none none reverse',
            //     // },
            // });
            // st_tl.to('.teams_info_data', {
            //     y: `-=${window.innerHeight / 2}`,
            //     duration: 1,
            // });
            gsap.to('.teams__container', {
                top: '60%',
                duration: 1,
            });
            gsap.to(window, {
                scrollTo: 100,
                duration: 1,
            });

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
                tl.fromTo(
                    '.teams__images__main',
                    { y: () => `-${window.innerHeight * i}px`, duration: 0.5 },
                    {
                        y: () => `-${window.innerHeight * (i + 1)}px`,
                        duration: 0.5,
                    },
                );

                tl.to(
                    titlesRef.current[i],
                    {
                        scale: 1.3,
                        opacity: 1,
                        duration: 0.4,
                    },
                    '<',
                );
                tl.to(
                    titlesRef.current[(i - 1) % sectionsRef.current.length],
                    {
                        scale: 0.9,
                        opacity: 0.6,
                        duration: 0.3,
                    },
                    '<',
                );
                tl.fromTo(
                    '.teams__container',
                    { y: () => `-${(titlesRef.current[i].clientHeight + 40) * i}px`, duration: 0.5 },
                    {
                        y: () => `-${(titlesRef.current[i].clientHeight + 40) * (i + 1)}px`,
                        duration: 0.5,
                    },
                    '<',
                );
                gsap.set('.teams__images__main', { y: 0 });
                gsap.set('.teams__container', { y: 0 });
            });
        });
        document.title = 'Alcheringa 2022 | Teams';
    }, []);

    return (
        <div>
            <Loading loading={loading} windowLoading={windowLoading} />
            <Navigation />
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
                {/* <div className="teams__info">
                    <div className="teams_info_data">
                        <h1>TEAM</h1>
                        <p style={{ fontFamily: 'clashdisplay' }}>
                            All students, from the fourth year mentors to the first-year freshers, play an active role
                            in actualising the four days of Alcher. Alcheringa is the most significant cultural festival
                            in the northeast and is built by the yearlong efforts of all the students involved in making
                            their vision of Alcher come to life.
                        </p>
                    </div>
                </div> */}
                <section style={{ height: mql ? '0vh' : '0vh' }} />
                {mql
                    ? new Array(sectionTitles.length).fill(0).map((el, i) => {
                          return (
                              <div
                                  className="teams__scroller"
                                  key={i}
                                  id={`teams__scroller__${i}`}
                                  ref={(el) => (sectionsRef.current[i] = el)}
                              ></div>
                          );
                      })
                    : new Array(sectionTitles.length + 1).fill(0).map((el, i) => {
                          return (
                              <div
                                  className="teams__scroller"
                                  key={i}
                                  id={`teams__scroller__${i}`}
                                  ref={(el) => (sectionsRef.current[i] = el)}
                              ></div>
                          );
                      })}
                <section style={{ height: '10vh' }} />
                <div className="teams__images__main">
                    {teamsImages.map((el, i) => {
                        return (
                            <section className="teams__images" key={i} ref={(el) => (teamsImagesRef.current[i] = el)}>
                                <h1 className="mobile__teams__title">{sectionTitles[i]}</h1>
                                <div className="teams__images__wrapper">{renderImages(i)}</div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TeamsPage2;
