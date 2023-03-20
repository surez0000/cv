import React from "react";

const CustomCircularProgressBar = ({percentage, circleWidth, fillColor, strokeColor, radius, path, imageClassName }) => {
    return(
        <div className="pR">
            <svg xmlns="http://www.w3.org/2000/svg"  
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <circle 
                    cx={circleWidth / 2} 
                    cy={circleWidth / 2}  
                    r={radius} 
                    fill ={fillColor}
                    stroke={strokeColor}
                    className="rating-progress-background" 
                />
                <circle 
                    cx={circleWidth / 2} 
                    cy={circleWidth / 2} 
                    fill ={fillColor}
                    stroke={strokeColor}
                    r={radius} 
                    className="rating-progress js-rating-progress" 
                />
            </svg>
            <img src={path} className={imageClassName} />
        </div>
    )
};

export default CustomCircularProgressBar;
