import React from 'react';
import Carousel from "react-material-ui-carousel"
import '../assets/css/Example.scss';
import mainCover from '../assets/images/covers/bg-ALL.jpg';
import cover1 from '../assets/images/covers/1.jpg';
import cover2 from '../assets/images/covers/bg2.jpg';
import cover3 from '../assets/images/covers/amritha.jpg';

const items = [
    mainCover,
    cover1,
    cover2,
    cover3
]


export default function CarouselComp() {

    return (
        <div style={{ marginTop: "100px", color: "#494949" }}>
            <Carousel
                // className="Example"
                autoPlay
                timer={500}
                animation="fade"
                indicators={false}
                timeout={500}
                navButtonsAlwaysInvisible={true}
            >
                {
                    items.map((item, index) => (
                        <img src={item}
                            style={{
                                maxHeight: 500,
                                overflow: "hidden", width: "100%",
                                objectFit: "contain"
                            }} alt="gallery"></img>
                    ))
                }
            </Carousel>
        </div>
    )
}