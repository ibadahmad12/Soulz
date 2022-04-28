import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import StakeStatistics from './StakeStatistics/StakeStatistics';
import NFTSInWalletWidget from './Widgets/NFTSInWalletWidget';
import NFTSStakedWidget from './Widgets/NFTSStakedWidget';
import './staking-page.scss';

const StakingPage = () => {
    return (
        <>
            <Navbar />
            <div className="staking-page-container">
                <div className="staking-page-overlay">
                    <div className="opensea-heading">
                        <div className="header-text">Soulz Opnesea DASHBOARD</div>
                    </div>
                    <StakeStatistics />
                    <button>CONNECT WALLET</button>

                    <NFTSInWalletWidget />
                    <NFTSStakedWidget />
                </div>
            </div>
        </>
    );
};

export default StakingPage;
