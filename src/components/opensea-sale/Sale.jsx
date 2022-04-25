import React from 'react';
import './sale.scss';

const Sale = () => {
    return (
        <div className="sale-wrap" data-aos="fade">
            <h1>
                Public sale <br />
                sold out!
            </h1>
            <a href="https://opensea.io/collection/soulz-monogatari7777" target="_blank" rel="noreferrer">
                Buy now on OpenSea
            </a>
        </div>
    );
};

export default Sale;
