import gsap from 'gsap/all';
import { useEffect } from 'react';
import './Loading.scss';

function disableScrolling() {
    gsap.to('.loader-container', { autoAlpha: 1 });
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

function enableScrolling() {
    window.onscroll = function () {
        console.log('Welcome to Alcheriga,2022');
    };
    gsap.to('.loader-container', { autoAlpha: 0 });
}
const Loading = ({ loading, windowLoading }) => {
    useEffect(() => {
        disableScrolling();
    }, []);
    useEffect(() => {
        if (!loading && !windowLoading) {
            enableScrolling();
        }
    }, [loading, windowLoading]);
    return (
        <div className="loader-container">
            <div id="loading"></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};
export default Loading;
