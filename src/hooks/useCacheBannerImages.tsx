import { useEffect, useState } from 'react';
const currentFrame = (index) => {
    index = index;
    return `https://bucket-s3.alcheringa.in/alcheringain/animation1frames/zoom%20ree${index
        .toString()
        .padStart(4, '0')}.png`;
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

    const multiplier = totalFrames / frameCount;
    useEffect(() => {
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
    }, []);
    return { images, loading };
};

export default useCacheBannerImages;
