import { gsap, Bounce } from 'gsap';
import { useEffect, useRef } from 'react';

import bg_green from '../assets/backgrounds/bg-green.png';
import '../assets/styles/from_33sec.css';

const From_33sec = () => {
    const pronitesHead = useRef();
    const proshowsHead = useRef();
    const humourfestHead = useRef();
    const competitionsHead = useRef();
    const flickeringaHead = useRef();

    useEffect(() => {
        console.log('hi');
        // gsap.to(flickeringaHead, 2, { visibility: 'hidden', ease: Bounce.easeIn });
    }, []);

    return (
        <div className="container-main">
            <div className="img-container-1">
                <img
                    className="img1"
                    width="300px"
                    src="https://sportshub.cbsistatic.com/i/2021/11/29/a5dee7b0-e47a-4e42-8048-39cb95974164/spider-man-no-way-home-new-poster-india.jpg"
                    alt="img1"
                />
                <img
                    className="img2"
                    width="300px"
                    src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Poster-1.jpg"
                    alt="img2"
                />
            </div>
            <div className="text-container">
                <div className="event-container">
                    <div className="event-head">PRONITES</div>
                    {/* <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div> */}
                </div>
                <div className="event-container">
                    <div className="event-head">PROSHOWS</div>
                    <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc vitae
                        auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-head">HUMOUR FEST</div>
                    {/* <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div> */}
                </div>
                <div className="event-container">
                    <div className="event-head">COMPETITIONS</div>
                    {/* <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div> */}
                </div>
                <div className="event-container">
                    <div className="event-head">EXHIBITION</div>
                    {/* <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div> */}
                </div>
                <div className="event-container">
                    <div className="event-head" ref={flickeringaHead}>
                        FLICKERINGA
                    </div>
                    {/* <div className="event-description">
                        vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
                    </div> */}
                </div>
            </div>
            <div className="img-container-2">
                <img
                    className="img3"
                    width="300px"
                    src="https://sportshub.cbsistatic.com/i/2021/11/29/a5dee7b0-e47a-4e42-8048-39cb95974164/spider-man-no-way-home-new-poster-india.jpg"
                    alt="img3"
                />
                <img
                    className="img4"
                    width="300px"
                    src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Poster-1.jpg"
                    alt="img4"
                />
            </div>
            {/* <div style={{ backgroundImage: `url(${bg_green})`, height: '100vh' }}>Hello</div> */}
        </div>
    );
};

export default From_33sec;
