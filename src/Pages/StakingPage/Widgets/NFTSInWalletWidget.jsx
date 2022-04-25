import styled from 'styled-components';
import { CommonWidget } from './CommonWidget';
import React from 'react';

function NFTSInWalletWidget() {
    return (
        <CommonWidget title="NFTS IN WALLET">
            <StakeLinks>
                <StakeLink>Approve</StakeLink>

                <StakeLink>Stake</StakeLink>
            </StakeLinks>
        </CommonWidget>
    );
}

const StakeLinks = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: auto;
`;

const StakeLink = styled.a`
  text-decoration: none;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Montserrat";
  font-size: 2.2vh;
  line-height: 3vh;
  text-align: center;
  padding: 9px 15px;
  color: white;
  cursor: pointer;
  margin-top: 0vh;
  margin-bottom: 4vh;
  padding: 0.5 0.5rem;
  border-radius: 16px 0px;
  border-width: 2px;
  transition: 0.3s all;
  cursor: pointer;
  box-shadow: 0px 0px 6px 6px red;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red,
    0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red;

  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 2vh;
    line-height: 2vh;
    min-height: 25px;
    padding-top: 0.65rem;
}
  }
`;
export { NFTSInWalletWidget };
