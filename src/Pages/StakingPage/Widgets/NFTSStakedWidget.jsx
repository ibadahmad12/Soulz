import styled from 'styled-components';
import { CommonWidget } from './CommonWidget';
import React from 'react';

function NFTSStakedWidget() {
    return (
        <CommonWidget title="NFTS STAKED">
            <StakeLinks>
                <StakeLink>UNSTAKE</StakeLink>
                <StakeLink>UNSTAKE ALL</StakeLink>
                <StakeLink>CLAIM TOKENS</StakeLink>
            </StakeLinks>
        </CommonWidget>
    );
}

const StakeLinks = styled.div`
    display:flex;
    flex-direction:row
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    margin: auto;
`;

const StakeLink = styled.a`
  text-decoration: none;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: trsnaparent;
  font-size: 2.2vh;
  line-height: 3vh;
  text-align: center;
  padding: 9px 15px;
  color: white;
  font-family: "Montserrat";
  cursor: pointer;
  margin-top: 0vh;
  margin-bottom: 4vh;
  padding: 0.5rem 0.5rem;
  border-radius: 16px 0px;
  border-width: 1px;
  transition: 0.3s all;
  cursor: pointer;
  padding: 0.7em 1em;
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
export { NFTSStakedWidget };
