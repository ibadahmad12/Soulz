import React from 'react';
import backgroundImage from '../../assets/Benx.png';
import { cards } from '../../Data/ReleaseCards';
import './release-date.scss';

const ReleaseDate = () => {
    return (
        <>
            <div className="release-date-wrap">
                <img className="benx-image" src={backgroundImage} alt="girl img" />
                <div className="overlay">
                    <h1 data-aos="fade">
                        Release date: <br /> 20th of Feb
                    </h1>
                </div>
            </div>
            <Cards />
        </>
    );
};

function Cards() {
    return (
        <div className="release-cards-wrap" data-aos="fade">
            {cards.map(({ img, id }) => (
                <div key={id}>
                    <img src={img} key={id} alt="nft img" />
                </div>
            ))}
        </div>
    );
}

export default ReleaseDate;
