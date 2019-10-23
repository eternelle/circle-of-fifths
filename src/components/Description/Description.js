import React from 'react';
import { ActiveElementsContext } from '../../ActiveElementsContext';
import keyData from '../../keyData';

const Description = (props) => {
    const { Consumer } = ActiveElementsContext;

    return (
        <Consumer>
            {activeElements => 
                <div className="description-container">
                    <div className="tabs">
                        <div data-tabname="major"
                            className={"tab " + (activeElements.activeTab === "major" && 'active')}
                            onClick={props.click}>
                            major
                        </div>  
                        <div data-tabname="minor"
                            className={"tab " + (activeElements.activeTab === "minor" && 'active')}
                            onClick={props.click}>
                            minor
                        </div>  
                    </div>
                    {keyData.map(object =>
                        object.keyId === activeElements.activeKey &&                    
                            object.mode.map(mode =>
                                mode.type === activeElements.activeTab && 
                                <div key={mode.type} className="description">
                                    <div className="description__title">Key</div>
                                    <div className="description__text">{mode.key}</div>
                                    <div className="description__title">Relative Key</div>
                                    <div className="description__text">{mode.relativeKey}</div>
                                    <div className="description__title">Functional harmony</div>
                                    <div className="description__text">
                                        <div className="harmony">
                                            {Object.entries(mode.keyHarmony).map(([key, value]) =>
                                                <div key={key} className="harmony__item"><strong>{key}</strong> {value}</div>
                                            )}
                                        </div>
                                        <div className="triad">
                                            {Object.entries(mode.keyHarmonicTriad).map(([key, value]) =>
                                                <div key={key} className="triad__item">{key} {value}</div>
                                            )}
                                        </div>
                                    </div> 
                                </div>                        
                            )                      
                    )}               
                </div>  
            }                            
        </Consumer>     
    );
}

export default Description;