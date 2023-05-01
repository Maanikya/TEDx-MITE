import React from "react";
import { Button } from "../ButtonElement";
import {
    AboutUsContainer,
    AboutUsWrapper,
    AboutUsRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    Img,
    ImgWrap,
} from "./AboutUsElements";

const AboutUs = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img}) => {
    return (
        <>
            <AboutUsContainer lightBg={lightBg} id={id}>
                <AboutUsWrapper>
                    <AboutUsRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="/">{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        {/* <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2> */}
                    </AboutUsRow>
                </AboutUsWrapper>
            </AboutUsContainer>
        </>
    );
};

export default AboutUs;
