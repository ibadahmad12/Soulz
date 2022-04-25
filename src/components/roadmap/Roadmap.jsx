import React from 'react';
import './roadmap.scss';

const Roadmap = () => {
    return (
        <div className="roadmap-wrap">
            <h1 data-aos="fade">ROADMAP</h1>
            <div className="container">
                <div className="timeline">
                    <ul>
                        <li>
                            <div className="timeline-content" data-aos="fade">
                                <h1>Phase 1:</h1>
                                <p>Launch Twitter</p>
                                <p>Launch Discord</p>
                                <p>Launch Website </p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content" data-aos="fade">
                                <h1>Phase 2:</h1>
                                <p>Mint 7,777 SoulZ</p>
                                <p>Secondary Market Listing (Opensea, LooksRare)</p>
                                <p>Verified Holder Channels in Discord</p>
                                <p>Rarity.Tools Listing</p>
                                <p>Exclusive SoulZ merchandise release</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content" data-aos="fade">
                                <h1>Phase 3:</h1>
                                <p>Holders will be able to claim 1 specially prepared dish from the Ramen shop with an added serum to transform your SoulZ NFT (1/NFT)</p>
                                <p>SoulZ NFT Vault created for the community</p>
                                <p>SoulZ Ramen Shop built in Metaverse with Anime Gallery to display SoulZ Vault NFTs.</p>
                                <p>Public Sale of 7,777 SoulZ 2.0 Nfts</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content" data-aos="fade">
                                <h1>Phase 4:</h1>
                                <p>Metaverse 3D playable Characters Claimable for holders</p>
                                <p>Extra Metaverse lands and Buildings created for use by Holders</p>
                                <p>Metaverse Party for all Holders music by international DJ</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content" data-aos="fade">
                                <h1>Phase 5:</h1>
                                <p>P2E Anime Game in production</p>
                                <p>IRL Events (pending restrictions)</p>
                                <p>More In development for holders</p>
                                <p>.........</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
