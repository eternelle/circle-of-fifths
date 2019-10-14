import React from 'react';

const Circle = (props) => {
    return (
        <div className="circle">
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
                <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3"></circle>
            </svg>
            <div className="description">
                {props.data.description.map((item, index) => 
                    <div key={index} className="description-item">{item}</div>
                )}
            </div>
            <div className="tonics">
                {props.data.tonic.map((note, index) => 
                    <div key={index} className="note">{note}</div>
                )}
            </div>
            <div className="steps">
                {props.data.step.map((step, index) => 
                    <div key={index} className="step">{step}</div>
                )}
            </div>
        </div>
    );
}

export default Circle;