import React from 'react';
import backgroundImage from '../../assets/Benx.png';
import { cards } from '../../Data/ReleaseCards';
import './release-date.scss';

function ReleaseDate() {
    return (
        <>
            <div className="release-date-wrap">
                <img className="benx-image" src={backgroundImage} alt="girl img" />
                <div className="overlay">
                    <h1>
                        Release date: <br /> 20th of Feb
                    </h1>
                </div>
            </div>
            <Cards />
        </>
    );
}

function Cards() {
    return (
        <div className="release-cards-wrap">
            {cards.map(({ img, id }) => (
                <div>
                    <img src={img} key={id} alt="nft img" />
                </div>
            ))}
        </div>
    );
}

export default ReleaseDate;
