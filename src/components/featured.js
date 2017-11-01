import React from 'react';
import Slider from 'react-slick';

//slider settings
const settings={
    arrows:false,
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1, //not sure what this is 
    slidesToScroll:1 //not sure too
}

const generateSlides = ({slides}) =>{
    if(slides){
        return(
            <Slider {...settings}>
                {slides.map((item)=>{
                    return(
                        <div key={item.id} className="item_slider" 
                        style={{background:`url(/images/covers/${item.cover})`, 
                        height:'600px'}}>
                            <div className="caption">
                                <h4>{item.topic}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const Featured = (props) =>{
    return(
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;