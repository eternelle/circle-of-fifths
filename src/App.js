import React, { useState } from 'react';
import Circle from './components/Circle/Circle';
import Description from './components/Description/Description';
import keyData from './keyData';

function App() {
  const [activeElements, setActiveElements] = useState({
    activeKey: 'key-c',
    activeTab: 'major'
  });
  const [activeKeyControls, setActiveKeyControls] = useState({
    controlLeft: 'key-f',
    controlRight: 'key-g'
  });
  const [circleRotation, setCircleRotation] = useState(0);
  const [descriptionFade, setDescriptionFade] = useState(false);
  const modeTabs = ['major', 'minor'];

  const setActiveTab = (event) => {
    setDescriptionFade(true);
    setActiveElements({...activeElements, activeTab: event.target.dataset.tabname});
  }

  const setActiveKey = (direction) => {
    const newActiveKey = keyData.filter(key =>
      key.keyId === activeKeyControls[direction]
    );
    setActiveElements({...activeElements, activeKey: newActiveKey[0].keyId});
    setActiveKeyControls({controlLeft: newActiveKey[0].controlLeft, controlRight: newActiveKey[0].controlRight});
  }

  const rotateCircleLeft = () => {  
    setDescriptionFade(true);
    setCircleRotation(circleRotation + 30);
    setActiveKey('controlLeft');
  }

  const rotateCircleRight = () => {
    setDescriptionFade(true);
    setCircleRotation(circleRotation - 30);
    setActiveKey('controlRight');
  }

  return (
    <div className="App">
      <header>The Circle Of Fifths</header>
      <div className="content">
        <Circle rotation={circleRotation} rotateLeft={rotateCircleLeft} rotateRight={rotateCircleRight} activeKey={activeElements.activeKey}/>
        <Description click={setActiveTab} modeTabs={modeTabs} activeElements={activeElements} fade={descriptionFade} animationEnd={() => setDescriptionFade(false)}/>
      </div>
    </div>
  );
}

export default App;
