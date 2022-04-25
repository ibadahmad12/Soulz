import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { StakeStatistics } from './StakeStatistics/StakeStatistics';
import { NFTSInWalletWidget } from './Widgets/NFTSInWalletWidget';
import { NFTSStakedWidget } from './Widgets/NFTSStakedWidget';

function StakingPage() {
    return (
        <>
            <Navbar />
            <Container>
                <Overlay>
                    <Heading>
                        <HeaderText>Soulz Opnesea DASHBOARD</HeaderText>
                    </Heading>
                    <StakeStatistics />
                    <ConnectMetaMaskLink>CONNECT WALLET</ConnectMetaMaskLink>

                    <NFTSInWalletWidget />
                    <NFTSStakedWidget />
                </Overlay>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: absolute;
    inset: 0;
    min-height: 110%;
    height: 110%;
    background: url(${`https://i.ibb.co/V3z38Nh/image.png`}) no-repeat fixed;
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-size: 120% 100%;
    margin: 20vh 0 5vh;
    background-fit: cover;
    text-align: center;
    background-positin: center;
    font-family: 'Osake';

    @media (max-width: 700px) {
        background-size: 150% 100%;
        margin-top: 15vh;
        height: 120vh;
    }
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    height: 100%;
    background-color: rgb(0, 0, 0);
    opacity: 0.8;
`;

const Heading = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
    margin: 0 auto 30px;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red, 0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red;
    max-width: 100%;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const HeaderText = styled.div`
    font-size: 7vh;
    line-height: 5vh;
    @media (max-width: 768px) {
        font-size: 2vh;
        line-height: 2vh;
    }
`;

const ConnectMetaMaskLink = styled.button`
    border-radius: 20px;
    background-color: transparent;
    display: inline-block;
    padding: 9px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    font-family: 'Montserrat';
    cursor: pointer;
    font: inherit;
    z-index: 10;
    font-size: 2vh;
    font-weight: 300;
    font-family: 'Montserrat';
    text-align: center;
    box-sizing: border-box;
    margin: 4vh auto 3vh;
    padding: 1.2rem 2.5rem;
    border-radius: 16px 0px;
    border-width: 2px;
    transition: 0.3s all;
    cursor: pointer;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red, 0 0 82px red, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px red;
    box-shadow: 0px 0px 6px 6px red;
    overflow: hidden;

    &:hover {
        background-color: white;
        color: black;
    }
`;

export { StakingPage };
