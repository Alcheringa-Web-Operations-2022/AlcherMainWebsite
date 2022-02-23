import { useRef } from 'react';
import alcherlogo from '@assets/images/alcherlogo.svg';
import alcherLogo from '@assets/images/alcher-logo.svg';
import mobileNavIcon from '@assets/images/mobile-nav-icon.jpg';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    const navRef = useRef(null);
    const closeNav = () => {
        navRef.current.style.display = 'none';
    };
    const openNav = () => {
        navRef.current.style.display = 'flex';
    };
    return (
        <div>
            <div className="mobile-nav-container" ref={(e) => (navRef.current = e)}>
                <div className="close" onClick={closeNav}>
                    X
                </div>
                <div className="navs">
                    <a href="/events">
                        <div className="">EVENTS</div>
                    </a>
                    <a to="/campaigns">
                        <div className="">CAMPAIGNS</div>
                    </a>
                    <a to="https://iitgmun.org">
                        <div className="">MUN</div>
                    </a>
                    <a to="/team">
                        <div className="">TEAM</div>
                    </a>

                    {/* <div className="">CONTACT</div>
                    <div className="">SPONSORS</div> */}
                </div>
            </div>
            <div className="mobile-nav">
                <div>
                    <div>
                        <a href="/">
                            <img src={alcherLogo} alt="" />
                        </a>
                    </div>
                    <div onClick={openNav}>
                        <img src={mobileNavIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="top-nav">
                    <div>
                        <a href="/">
                            <img src={alcherLogo} alt="" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <a href="/events">
                            <div className="">EVENTS</div>
                        </a>
                        <a href="/campaigns">
                            <div className="">CAMPAIGNS</div>
                        </a>
                        <a href="https://iitgmun.org" target="__blank">
                            <div className="">MUN</div>
                        </a>
                        <a href="/team">
                            <div className="">TEAM</div>
                        </a>
                        {/* <div className="">CONTACT</div>
                            <div className="">SPONSORS</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
