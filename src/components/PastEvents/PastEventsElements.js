import styled from "styled-components";

export const PastEventsContainer = styled.div`
    position: absolute;
    top: 1500px;
    height: 720px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 960px) {
        height: 1400px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const PastEventsWrapper = styled.div`
    max-width: 1000px;
    // margin: 0 auto;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 80px;
    padding: 0 50px;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const PastEventsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-tems: center;
    border-radius: 10px;
    max-height: 340px;
    // max-width: 340px;
    width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const PastEventsIcon = styled.img`
    margin-left: auto;
    margin-right: auto;
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const PastEventsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const PastEventsH2 = styled.h2`
    margin-left: auto;
    margin-right: auto;
    font-family: 'Encode Sans Expanded', sans-serif;
    font-weight: bold; 
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const PastEventsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;