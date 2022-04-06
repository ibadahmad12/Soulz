import React from 'react';
import img1 from '../../assets/29E208A7.jpg';
import img2 from '../../assets/Capture.PNG';
import './community.scss';

const Community = () => {
    return (
        <div className="community-wrap">
            <h1>
                COMMUNITY <br />
                MANAGEMENT
            </h1>
            <div className="community-cards-wrap">
                <div className="single-community-card">
                    <img src={img1} alt="temm member 1 img" />
                    <p>24/7 Pain</p>
                    <h6>Community Manager, Social Director and Circle Artist Failure</h6>
                </div>
                <div className="single-community-card">
                    <img src={img2} alt="temm member 2 img" />
                    <p>MekaBaby</p>
                    <h6>Community Relations and Pink Aficionado</h6>
                </div>
            </div>
        </div>
    );
};

export default Community;
