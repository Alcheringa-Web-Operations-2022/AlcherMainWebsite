import { useEffect, useRef } from 'react';

import '../assets/styles/voyage-2-neoterra.css';
import plant1 from '@assets/v2g-asserts/plant1.png';
import muishroom1 from '@assets/v2g-asserts/muishroom1.png';
import unsplash_3cBFqagweZM from '@assets/v2g-asserts/unsplash_3cBFqagweZM.png';
import astronut_4 from '@assets/v2g-asserts/astronut_4.png';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Voyage2Neoterra = () => {
    return (
        <div className="v2n-container-main">
            <div className="v2n-wrapper-main">
                <div className="v2n-wrapper-left">
                    <img src={plant1} alt="" />
                    <h1>PROSHOWS</h1>
                    <p>
                        sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed
                        velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum
                    </p>
                </div>
                <div className="v2n-wrapper-right">
                    <div>
                        <img src={astronut_4} alt="img-1" className="img-1" />
                        <img src={unsplash_3cBFqagweZM} alt="img-2" className="img-2" />
                    </div>
                    <img src={muishroom1} alt="img-3" className="img-3" />
                </div>
            </div>
        </div>
    );
};

export default Voyage2Neoterra;
