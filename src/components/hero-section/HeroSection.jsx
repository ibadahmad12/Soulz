import React, { useEffect } from "react";
import heroSectionVideo from '../../assets/trailer.mp4';

const backgroundVideo = {
    zIndex: '-1',
    width: '100vw',
    height: 'auto',
    minHeight: '100vh',
    maxHeight: '100vh',
    objectPosition: 'center',
    objectFit: 'cover'
};
// var bgvideo = document.getElementById("featureVideo");

const HeroSection = () => {
    useEffect(() => {
        var bgvideo = document.getElementById("featureVideo");
        if (bgvideo) {
            bgvideo.muted = true;
            bgvideo.play();
            console.log("Success")
        } else {
            console.log('bgvideo not found');
        }
    }, [])
    return (
        <video id="featureVideo" muted autoPlay loop playsInline style={backgroundVideo}>
            <source src={heroSectionVideo} type="video/mp4" />
        </video>
    );
};

export default HeroSection;
