import gsap from 'gsap';
import '../assets/styles/footer.scss';
import editions from '../assets/footer/editions.svg';
import footfall from '../assets/footer/footfall.svg';
import events from '../assets/footer/events.svg';
import colleges from '../assets/footer/colleges.svg';
import phoneLeft from '../assets/footer/phoneLeft.png';
import phoneRight from '../assets/footer/phoneRight.png';
import alcherLadyImg from '../assets/alcher-lady.png';
import footerBg from '@assets/images/space_bg.png';
import phone from '@assets/images/phone.svg';
import footerFort from '@assets/images/footer-fort.svg';
import alcherLogoFooter from '@assets/images/alcher-logo-footer.png';
import instagramIcon from '@assets/images/instagram.png';
import facebookIcon from '@assets/images/facebook.png';
import twitterIcon from '@assets/images/twitter.png';
import youtubeIcon from '@assets/images/youtube.png';
import footerStarsBg from '@assets/images/stars.png';
import appButton from '@assets/images/app-button.png';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const iconsContainerRef = useRef();
    useEffect(() => {
        gsap.delayedCall(1, () => {
            gsap.fromTo(
                '.phones-container',
                { y: 300 },
                {
                    scrollTrigger: {
                        trigger: '.phones-container',
                        start: 'top bottom',
                        end: 'center center',
                        toggleActions: 'play none none reverse',
                        id: 'phones',
                    },
                    opacity: 1,
                    y: 0,
                },
            );

            gsap.fromTo(
                '.alcher-lady-container-2 img',
                { y: 0 },
                {
                    scrollTrigger: {
                        trigger: '.alcher-lady-container-1',
                        start: 'top bottom',
                        id: 'alcher_lady',
                        toggleActions: 'play none none reverse',
                    },
                    y: -250,
                    scale: 1.2,
                },
            );

            gsap.fromTo(
                '.alcher-lady-container-2 img',
                { y: -250, scale: 1.2 },
                {
                    scrollTrigger: {
                        trigger: '.alcher-lady-container-2',
                        start: 'top bottom',
                        end: 'top center',
                        id: 'alcher_lady_back',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        // markers: true,
                    },
                    duration: 1,
                    y: 0,
                    scale: 1,
                },
            );
        });
    }, []);
    return (
        <div
            className="footer-container"
            style={{
                background: `url(${footerStarsBg})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="icons-container" ref={iconsContainerRef}>
                <div className="icon-wrapper">
                    <span className="font-clash-display">26</span> <br /> EDITIONS
                </div>
                <div className="icon-wrapper">
                    <span className="font-clash-display">140k </span>
                    <br /> FOOTBALL
                </div>
                <div className="icon-wrapper">
                    <span className="font-clash-display">100+ </span>
                    <br /> EVENTS
                </div>
                <div className="icon-wrapper">
                    <span className="font-clash-display"> 500+</span> <br /> COLLEGES
                </div>
            </div>
            <div className="phones-container">
                <div className="phones-wrapper">
                    <img src={phone} alt="phone-left" />
                </div>
                <div className="phones-text-wrapper">
                    <div>
                        Download the Alcheringa app today for live updates. Explore our impressive event line-up and
                        merchandise as we begin our Voyage to Neoterra.
                    </div>
                    <div>
                        <img src={appButton} />
                    </div>
                </div>
            </div>

            <div className="footer-links" style={{ backgroundImage: `url(${footerFort})` }}>
                <div>
                    <div className="links-left">
                        <div>EVENTS</div>
                        <div>CAMPAIGNS</div>
                        <div>MUN</div>
                        <div>TEAM</div>
                        {/* <div>CONTACT</div>
                        <div>SPONSORS</div> */}
                    </div>
                    <div
                        className="contacts"
                        style={{
                            fontFamily: 'clashdisplay',
                            flexDirection: 'column',
                            textAlign: 'right',
                            fontSize: '1rem',
                        }}
                    >
                        <p>
                            Venkat Vikas Ch <br />
                            PR Head
                            <br />
                            +91 891054239
                        </p>
                        <br />
                        <p>
                            Ankit Agarwal <br />
                            PR Head
                            <br />
                            +91 9983072631
                        </p>
                        <br />

                        <p>
                            For business
                            <br />
                            related queries <br />
                            alcheringa@iitg.ac.in
                        </p>
                    </div>
                </div>
                <div>
                    <div className="logo-footer">
                        <img src={alcherLogoFooter} />
                    </div>
                    <div className="social-links">
                        <div>
                            <img src={instagramIcon} />
                        </div>
                        <div>
                            <img src={facebookIcon} />
                        </div>
                        <div>
                            <img src={twitterIcon} />
                        </div>

                        <div>
                            <img src={youtubeIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
