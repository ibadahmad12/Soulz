import CommonWidget from './CommonWidget';

const NFTSStakedWidget = () => {
    return (
        <CommonWidget title="NFTS STAKED">
            <div className="stake-links-container">
                <button className="stake-link">UNSTAKE</button>
                <button className="stake-link">UNSTAKE ALL</button>
                <button className="stake-link">CLAIM TOKENS</button>
            </div>
        </CommonWidget>
    );
};

export default NFTSStakedWidget;
