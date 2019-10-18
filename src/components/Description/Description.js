import React from 'react';
import { ActiveElementsContext } from '../../ActiveElementsContext';

const Description = (props) => {
    const { Consumer } = ActiveElementsContext;

    return (
        <Consumer>
            {activeElements => 
                <div className="description-container">
                    <div className="tabs">
                        {props.modeTabs.map(tab => 
                            <div className={"tab " + (activeElements.activeTab === tab ? 'active' : '')}>
                                {tab}
                            </div>  
                        )}
                    </div>
                    {props.descriptionData.map(object =>
                        object.keyNote === activeElements.activeKey && 
                        <div className="description">
                            <div className="description__title">Key</div>
                            <div className="description__text">{object.keyNote}</div>
                            <div className="description__title">Relative Key</div>
                            <div className="description__text">{object.relativeKey}</div>                           
                            <div className="description__title">Functional harmony</div>
                            <div className="description__text">
                                <div className="harmony">
                                    {Object.entries(object.functionalHarmony).map(([key, value]) =>
                                        <div className="harmony__item">{key} {value}</div>
                                    )}
                                </div>
                                <div className="triad">
                                    {Object.entries(object.harmonicTriad).map(([key, value]) =>
                                        <div className="triad__item">{key} {value}</div>
                                    )}
                                </div>
                            </div>
                        </div>                        
                    )}                  
                </div>  
            }                            
        </Consumer>     
    );
}

export default Description;