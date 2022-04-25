import React, { useState } from 'react';
import { orbsGifs } from '../../Data/Orbs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './orbs.scss';

const Orbs = () => {
    return (
        <>
            <div className="orbs-wrap" data-aos="fade">
                <h1>ORBS OF Z</h1>
                <p>
                    When the planet was attacked, eight Orbs of great force and energy were released by the New Order. When collected, it grants the holder incredible power corresponding to the force
                    each Orb contains. The people of Z had to gather them all to stand a chance for survival against this evil that has taken over.
                </p>
            </div>
            <OrbsCarousel />
        </>
    );
};

export default Orbs;

const OrbsCarousel = () => {
    const [orb, setOrb] = useState(orbsGifs[0]);

    const shiftRight = () => {
        setOrb(orbsGifs[orb.id % 8]);
    };

    const shiftLeft = () => {
        orb.id === 1 ? setOrb(orbsGifs[7]) : setOrb(orbsGifs[orb.id - 2]);
    };

    // setTimeout(() => {
    //     shiftRight();
    // }, 5000);

    return (
        <div className="orb-carousel-wrap" data-aos="fade">
            <div className="orb-carousel-content-wrap" key={orb.id}>
                <div>
                    <i onClick={shiftLeft}>
                        <FiChevronLeft size={20} />
                    </i>
                    <img src={orb.img} alt="orb gif" />
                    <i onClick={shiftRight}>
                        <FiChevronRight size={20} />
                    </i>
                </div>
                <p>{orb.title}</p>
            </div>
        </div>
    );
};
