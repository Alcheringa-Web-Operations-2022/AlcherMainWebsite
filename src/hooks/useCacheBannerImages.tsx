import { useEffect, useState } from 'react';
const currentFrame = (index) => {
    index = index;
    return `https://bucket-s3.alcheringa.in/alcheringain/animationframes/alcher%20web${index
        .toString()
        .padStart(4, '0')}.jpg`;
};

const preloadImage = async (index: number, setImages) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const imgSrc = currentFrame(index);
        img.src = imgSrc;
        setImages((prev) => [...prev, imgSrc]);
        //resolve(index);
        img.onload = () => resolve(index);
        img.onerror = () => resolve(index);
        // img.onerror = reject();
    });
};

const useCacheBannerImages = (frameCount: number, totalFrames: number) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const mql = window.matchMedia('(max-width: 800px)').matches;

    const multiplier = totalFrames / frameCount;
    useEffect(() => {
        if (!mql) {
            const cacheImages = async () => {
                const array = new Array(frameCount).fill(undefined);
                const promises = array.map((_, i) => {
                    return preloadImage(Math.round(i * multiplier + 1), setImages);
                });

                promises.push(preloadImage(totalFrames, setImages));

                await Promise.all(promises);
                setLoading(false);
            };
            cacheImages();
        }
        {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, []);
    return { images, loading };
};

export default useCacheBannerImages;
