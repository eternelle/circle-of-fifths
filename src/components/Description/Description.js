import React from 'react';
import keyData from '../../keyData';

const Description = (props) => {
    return (
        <div className="description-container">
            <div className="tabs">
                <div data-tabname="major"
                    className={"tab " + (props.activeElements.activeTab === "major" && 'active')}
                    onClick={props.click}>
                    major
                </div>  
                <div data-tabname="minor"
                    className={"tab " + (props.activeElements.activeTab === "minor" && 'active')}
                    onClick={props.click}>
                    minor
                </div>  
            </div>
            <div className="description__wrapper">
                {keyData.map(object =>
                    object.keyId === props.activeElements.activeKey &&                    
                        object.mode.map(mode =>
                            mode.type === props.activeElements.activeTab &&
                            <div key={mode.type} className={"description" + (props.fade ? ' fade' : '')} onAnimationEnd={props.animationEnd}>
                                <div className="description__group">
                                    <div className="description__title">Key</div>
                                    <div className="description__text">{mode.key}</div>
                                </div>
                                <div className="description__group">
                                    <div className="description__title">Relative Key</div>
                                    <div className="description__text">{mode.relativeKey}</div>
                                </div>
                                <div className="description__group">
                                    <div className="description__title">Functional harmony</div>
                                    <div className="description__text">
                                        <div className="harmony">
                                            {Object.entries(mode.keyHarmony).map(([key, value]) =>
                                                <div key={key} className="harmony__item"><strong>{key}</strong> {value}</div>
                                            )}
                                        </div>
                                        <div className="triad">
                                            {Object.entries(mode.keyHarmonicTriad).map(([key, value]) =>
                                                <div key={key} className="triad__item"><strong>{key}</strong> {value}</div>
                                            )}
                                        </div>
                                    </div> 
                                </div> 
                            </div>                        
                        )                      
                )}   
            </div>            
        </div>             
    );
}

export default Description;