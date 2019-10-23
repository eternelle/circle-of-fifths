import React from 'react';
import Parser from 'html-react-parser';
import keyData from '../../keyData';

const Circle = (props) => {
    const style = {
        transform: 'rotate('+props.rotation+'deg)'
    }

    return (
        <div className="circle">
            <div className="circle-container">
                <svg id="circle" x="0px" y="0px" viewBox="0 0 600 600" enableBackground="new 0 0 600 600" style={style}>
                    <g id="wheel">
                        <circle opacity="0.15" fill="none" stroke="#59BAB6" strokeWidth="73" strokeMiterlimit="10" cx="300" cy="300" r="230"></circle>
                        <path opacity="0.15" fill="none" stroke="#FCC6A3" strokeWidth="59" strokeMiterlimit="10" d="M455,300
                            c0,85.607-69.393,155-155,155c-85.605,0-155-69.393-155-155c0-85.605,69.395-155,155-155C385.608,145,455,214.396,455,300z"></path>
                    </g>
                    <g id="letters">
                        {keyData.map(key => 
                            <g key={key.keyId} id={key.keyId} className={"key" + (key.keyId === props.activeKey ? ' active' : '')} control-left={key.controlLeft} control-right={key.controlRight}>
                                {Parser(key.svg)}
                            </g>         
                        )}
                    </g>
                </svg>
            </div>
            <div className="buttons-container">
                <div className="button left" onClick={props.rotateLeft}>
                    <img src="arrow-left.svg" alt="arrow-left"/>             
                </div>
                <div className="button right" onClick={props.rotateRight}>
                    <img src="arrow-right.svg" alt="arrow-right"/>      
                </div>
            </div>
        </div>
    );
}

export default Circle;