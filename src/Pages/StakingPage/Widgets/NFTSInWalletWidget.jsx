import CommonWidget from './CommonWidget';

const NFTSInWalletWidget = () => {
    return (
        <CommonWidget title="NFTS IN WALLET">
            <div className="stake-links-container">
                <button className="stake-link">Approve</button>
                <button className="stake-link">Stake</button>
            </div>
        </CommonWidget>
    );
};

export default NFTSInWalletWidget;
