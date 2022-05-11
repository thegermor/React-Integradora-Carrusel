import React from "react";

function Dots({ activeIndex, onclick, sliderImage}){
    return(
        <div className="all-dots">
            {sliderImage.map((slide, index) =>(
                <span
                    key={index}
                    className={`${ activeIndex === index ? "dot active-dot" : "dot"}`}
                ></span>
            ))}
        </div>
    );
}

export default Dots;