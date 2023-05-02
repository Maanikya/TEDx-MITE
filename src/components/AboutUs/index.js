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

const AboutUs = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <AboutUsContainer lightBg={lightBg} id={id}>
                <AboutUsWrapper>
                    <AboutUsRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="/"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </AboutUsRow>
                </AboutUsWrapper>
            </AboutUsContainer>
        </>
    );
};

export default AboutUs;
