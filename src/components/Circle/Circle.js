import React from 'react';
import CircleSvg from './CircleSvg/CircleSvg';

const Circle = () => {
    return (
        <div className="circle">
            <div className="circle-container">
                <CircleSvg/>
            </div>
            <div className="buttons-container">
                <div className="button left">
                    <img src="arrow-left.svg" alt="arrow-left"/>             
                </div>
                <div className="button right">
                    <img src="arrow-right.svg" alt="arrow-right"/>      
                </div>
            </div>
        </div>
    );
}

export default Circle;