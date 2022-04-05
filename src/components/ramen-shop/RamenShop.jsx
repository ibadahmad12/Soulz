import React from 'react';
import ramenGif from '../../assets/Ramenshop.gif';
import './ramen-shop.scss';

function RamenShop() {
    return (
        <div className="ramen-shop-wrap">
            <h1>RAMEN SHOP</h1>
            <div className="ramen-flex-wrap">
                <img src={ramenGif} alt="ramen gif" className="ramen-img" />
                <p>
                    The known world, a barren land, comes wanderers from another universe seeking answers for the lost world. In their journey, they have stumbled upon a peculiar place, a ramen shop
                    run by an old man. Little did they know, that place holds all secrets for they have encountered one of the SoulZ warriors, the Keeper of Secrets. From here on, history unfolds..
                </p>
            </div>
        </div>
    );
}

export default RamenShop;
