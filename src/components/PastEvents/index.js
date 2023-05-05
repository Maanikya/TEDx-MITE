import React from 'react'
import Icon1 from '../../images/Logo.jpg'
import Icon2 from '../../images/Logo.jpg'
import Icon3 from '../../images/Logo.jpg'
import { PastEventsContainer, PastEventsH1, PastEventsWrapper, PastEventsCard, PastEventsIcon, PastEventsH2, PastEventsP } from './PastEventsElements'

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
                {/* <PastEventsCard>
                    <PastEventsIcon src={Icon3} />
                    <PastEventsH2>Event 3</PastEventsH2>
                    <PastEventsP>Laasdaa</PastEventsP>
                </PastEventsCard>
                <PastEventsCard>
                    <PastEventsIcon src={Icon3} />
                    <PastEventsH2>Event 3</PastEventsH2>
                    <PastEventsP>Laasdaa</PastEventsP>
                </PastEventsCard> */}
            </PastEventsWrapper>
        </PastEventsContainer>
    )
}

export default PastEvents