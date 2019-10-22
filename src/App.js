import React, { useState } from 'react';
import Circle from './components/Circle/Circle';
import Description from './components/Description/Description';
import { ActiveElementsContext } from './ActiveElementsContext';
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
  const { Provider } = ActiveElementsContext;
  const modeTabs = ['major', 'minor'];

  const setActiveTab = (event) => {
    setActiveElements({...activeElements, activeTab: event.target.dataset.tabname});
  }

  const setActiveKey = (direction) => {
    const newActiveKey = keyData.filter(key =>
      key.keyId === activeKeyControls[direction]
    );
    setActiveElements({...activeElements, activeKey: newActiveKey[0].keyId});
    setActiveKeyControls({controlLeft: newActiveKey[0].controlLeft, controlRight: newActiveKey[0].controlRight});
    console.log(activeElements, activeKeyControls);
  }

  const rotateCircleLeft = () => {  
    setCircleRotation(circleRotation + 30);
    setActiveKey('controlLeft');
  }

  const rotateCircleRight = () => {
    setCircleRotation(circleRotation - 30);
    setActiveKey('controlRight');
  }

  return (
    <div className="App">
      <Circle rotation={circleRotation} rotateLeft={rotateCircleLeft} rotateRight={rotateCircleRight} activeKey={activeElements.activeKey}/>
      <Provider value={activeElements}>
        <Description click={setActiveTab} modeTabs={modeTabs}/>
      </Provider>
    </div>
  );
}

export default App;
