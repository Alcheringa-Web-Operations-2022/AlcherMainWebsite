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
                    <Link to="/events">
                        <div className="">EVENTS</div>
                    </Link>
                    <Link to="/campaigns">
                        <div className="">CAMPAIGNS</div>
                    </Link>
                    <Link to="https://iitgmun.org">
                        <div className="">MUN</div>
                    </Link>
                    <Link to="/team">
                        <div className="">TEAM</div>
                    </Link>

                    {/* <div className="">CONTACT</div>
                    <div className="">SPONSORS</div> */}
                </div>
            </div>
            <div className="mobile-nav">
                <div>
                    <div>
                        <img src={alcherLogo} alt="" />
                    </div>
                    <div onClick={openNav}>
                        <img src={mobileNavIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="top-nav">
                    <div>
                        <img src={alcherLogo} alt="" />
                    </div>
                    <div className="nav-links">
                        <Link to="/events">
                            <div className="">EVENTS</div>
                        </Link>
                        <Link to="/campaigns">
                            <div className="">CAMPAIGNS</div>
                        </Link>
                        <Link to="https://iitgmun.org">
                            <div className="">MUN</div>
                        </Link>
                        <Link to="/team">
                            <div className="">TEAM</div>
                        </Link>
                        {/* <div className="">CONTACT</div>
                            <div className="">SPONSORS</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
