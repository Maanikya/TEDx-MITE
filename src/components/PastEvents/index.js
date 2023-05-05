import React from 'react'
import Icon1 from '../../images/Logo.jpg'
import Icon2 from '../../images/Logo.jpg'
import Icon3 from '../../images/Logo.jpg'
import { PastEventsContainer, PastEventsH1, PastEventsWrapper, PastEventsCard, PastEventsIcon, PastEventsH2, PastEventsP } from './PastEventsElements'
import "./PastEvents.css";

const PastEvents = () => {
    return (
        <PastEventsContainer id='PastEvents'>
            <PastEventsH1>Past Events</PastEventsH1>
            <PastEventsWrapper>
                <PastEventsCard>
                    <PastEventsIcon src={Icon1} />
                    <PastEventsH2>Event 1</PastEventsH2>
                    <PastEventsP>LOlololaa</PastEventsP>
                </PastEventsCard>
                <PastEventsCard>
                    <PastEventsIcon src={Icon2} />
                    <PastEventsH2>Event 2</PastEventsH2>
                    <PastEventsP>Lsafvsdvdvaa</PastEventsP>
                </PastEventsCard>
                <PastEventsCard>
                    <PastEventsIcon src={Icon3} />
                    <PastEventsH2>Event 3</PastEventsH2>
                    <PastEventsP>Laasdaa</PastEventsP>
                </PastEventsCard>

                <div class="card">
                    <div class="content">
                        <div class="back">
                            <div class="back-content">

                                <img src={require('./prajakta_desai.png')} width={"90%"} height={"90%"} alt={"Prajakta Desai"}/>

                                <strong style={{
                                    position: "relative",
                                    fontFamily: "sans-serif",
                                    fontWeight: "bold",
                                    paddingTop: "5%"
                                }}>Prajakta Desai</strong>
                            </div>
                        </div>
                        <div class="front">
                            <div class="img">
                                <div class="circle"></div>
                                <div class="circle" id="right"></div>
                                <div class="circle" id="bottom"></div>
                            </div>

                            <div class="front-content" style={{
                                overflowY: "scroll"
                            }}>
                                <small class="badge">Major Prajakta Desai</small>
                                
                                <div class="description">
                                    <div>
                                        <p className="title">
                                            <strong>Major Prajakta Desai became the first Women officer of the Indian Army to become an Unmanned Aerial Vehicle Observer in 2020. She was just eight years old when she dreamt of joining the Indian Army, and she made her dreams come true.  I wanted to fly: to become a fighter pilot — but my petite size wouldn’t allow me to make the cut. i thought i’d aim for air traffic control officer, but my initial dream never really died down. my desire only grew and i decided to get what i wanted regardless of how much i’d have to slog!</strong>
                                        </p>
                                    </div>
                                    <p class="card-footer">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </PastEventsWrapper>
        </PastEventsContainer>
    )
}

export default PastEvents