import React from 'react';
import img1 from '../../assets/mosseh.jpg';
import img2 from '../../assets/ucI64ROG_400x400.png';
import img3 from '../../assets/snowginger.png';
import './art-team.scss';

const ArtTeam = () => {
    return (
        <div className="art-team-wrap">
            <h1>Art team</h1>
            <div className="art-team-cards-wrap">
                <div className="single-art-team-card">
                    <img src={img1} alt="temm member 1 img" />
                    <p>Mosseh</p>
                    <h6>Blockchain Developer</h6>
                </div>
                <div className="single-art-team-card">
                    <img src={img2} alt="temm member 2 img" />
                    <p>なるを</p>
                    <h6>Artist</h6>
                    <a href="https://twitter.com/ruwo_benzen" target="_blank" rel="noreferrer">
                        Twitter
                    </a>
                </div>
                <div className="single-art-team-card">
                    <img src={img3} alt="temm member 2 img" />
                    <p>Snowginger</p>
                    <h6>Artist</h6>
                    <a href="https://twitter.com/_SnowGinger_" target="_blank" rel="noreferrer">
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArtTeam;
