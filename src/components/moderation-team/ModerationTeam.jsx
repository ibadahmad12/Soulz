import React from 'react';
import { moderationCards } from '../../Data/Moderation';
import './moderation-team.scss';

const ModerationTeam = () => {
    return (
        <div className="mod-team-wrap">
            <h1 data-aos="fade">
                Moderation <br />
                team.
            </h1>
            <div className="mod-team-cards-wrap">
                {moderationCards?.map((card) => (
                    <div className="single-mod-team-card" key={card.id} data-aos="fade">
                        <img src={card.img} alt="mod-card" />
                        <h4>{card.name}</h4>
                        <p>Moderator {card.location}</p>
                        <p>Languages: {card.language}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModerationTeam;
