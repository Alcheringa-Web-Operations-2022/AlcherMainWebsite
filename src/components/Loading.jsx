import gsap from 'gsap/all';
import { useEffect } from 'react';
import './Loading.scss';
import loaderImage from '@assets/images/loader.png';

export function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

export function enableScrolling() {
    window.onscroll = function () {
        console.log('Welcome to Alcheriga,2022');
    };
}
const Loading = ({ loading, windowLoading }) => {
    useEffect(() => {
        gsap.to('.loader-container', { autoAlpha: 1 });
        disableScrolling();
    }, []);
    useEffect(() => {
        if (!loading && !windowLoading) {
            enableScrolling();
            gsap.to('.loader-container', { autoAlpha: 0 });
        }
    }, [loading, windowLoading]);
    return (
        <div className="loader-container">
            <div id="loading" style={{ backgroundImage: `url(${loaderImage})` }}></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};
export default Loading;
