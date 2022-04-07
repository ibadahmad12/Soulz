import React from 'react';
import heroSectionVideo from '../../assets/hero-video.mp4';

const backgroundVideo = {
    zIndex: '-1',
    width: '100vw',
    height: 'auto',
    minHeight: '83vh',
    maxHeight: '83vh',
    objectPosition: 'center',
    objectFit: 'cover'
};

const HeroSection = () => {
    return (
        <video muted autoPlay loop style={backgroundVideo}>
            <source src={heroSectionVideo} type="video/mp4" />
        </video>
    );
};

export default HeroSection;
