import React from 'react';
import { moderationCards } from '../../Data/Moderation';
import './moderation-team.scss';

const ModerationTeam = () => {
    return (
        <div className="mod-team-wrap">
            <h1>
                Moderation <br />
                team.
            </h1>
            <div className="mod-team-cards-wrap">
                {moderationCards?.map((card) => (
                    <div className="single-mod-team-card">
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
