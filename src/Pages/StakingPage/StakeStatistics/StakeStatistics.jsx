import React from 'react';
import styled from 'styled-components';

function StakeStatistics() {
    return (
        <Container>
            <Statistic>
                <Title> NFTS STAKED </Title>
                <Value>--</Value>
            </Statistic>
            <Statistic>
                <Title> TOTAL EARNED </Title>
                <Value>--</Value>
            </Statistic>
            <Statistic>
                <Title> DAILY RATE </Title>
                <Value>1 HBC / DAY</Value>
            </Statistic>
            <Statistic>
                <Title> BONUS </Title>
                <Value>--</Value>
            </Statistic>
            <Statistic>
                <Title> HBCS OWN </Title>
                <Value>--</Value>
            </Statistic>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    border-radius: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    row-gap: 2rem;
    min-width: 900px;
    align-self: center;
    padding: 2vh 0;
    margin-top: 4vh;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    @media (max-width: 950px) {
        min-width: 600px;
    }
    @media (max-width: 650px) {
        min-width: 350px;
    }
`;

const Statistic = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    min-width: 100px;
    max-width: 200px;
    margin: 0 1rem;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red, 0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red;
    border-radius: 2rem;
    padding: 1rem 0.4em;
    box-shadow: 0px 0px 6px 6px red;
`;

const Title = styled.div`
    margin-bottom: 1vh;
    font-size: 2.5vh;
    color: white;
    line-height: 2.5vh;
    @media (max-width: 1000px) {
        font-size: 2vh;
        line-height: 2vh;
    }
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }
`;

const Value = styled.div`
    font-size: 2.5vh;
    color: white;
    line-height: 2.5vh;
    @media (max-width: 1000px) {
        font-size: 2vh;
        line-height: 2vh;
    }
    @media (max-width: 768px) {
        font-size: 1.5vh;
        line-height: 1.5vh;
    }
`;

export { StakeStatistics };
