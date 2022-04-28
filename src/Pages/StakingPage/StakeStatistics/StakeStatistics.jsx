import React from 'react';

const StakeStatistics = () => {
    return (
        <div className="statistics-container">
            <div className="statistics">
                <div className="statistics-title"> NFTS STAKED </div>
                <div className="statistics-value">--</div>
            </div>
            <div className="statistics">
                <div className="statistics-title"> TOTAL EARNED </div>
                <div className="statistics-value">--</div>
            </div>
            <div className="statistics">
                <div className="statistics-title"> DAILY RATE </div>
                <div className="statistics-value">1 HBC / DAY</div>
            </div>
            <div className="statistics">
                <div className="statistics-title"> BONUS </div>
                <div className="statistics-value">--</div>
            </div>
            <div className="statistics">
                <div className="statistics-title"> HBCS OWN </div>
                <div className="statistics-value">--</div>
            </div>
        </div>
    );
};

export default StakeStatistics;
