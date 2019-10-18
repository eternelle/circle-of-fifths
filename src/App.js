import React, { useState } from 'react';
import Circle from './components/Circle/Circle';
import Description from './components/Description/Description';
import { ActiveElementsContext } from './ActiveElementsContext';

function App() {
  const [activeElements, setActiveElements] = useState({
    activeKey: 'C major',
    activeTab: 'major'
  });
  const { Provider } = ActiveElementsContext;
  const modeTabs = ['major', 'minor'];
  const data = [
    {
      mode: 'major',
      keyNote: 'C major',
      relativeKey: 'A minor',
      functionalHarmony: {
        I: 'C',
        ii: 'Dm',
        iii: 'Em',
        IV: 'F',
        V: 'G',
        vi: 'Am',
        vii: 'B°'
      },
      harmonicTriad: {
        tonic: 'C',
        dominant: 'G',
        subdominant: 'F'
      }
    },
    {
      mode: 'major',
      keyNote: 'G major',
      relativeKey: 'E minor',
      functionalHarmony: {
        I: 'G',
        ii: 'Am',
        iii: 'Bm',
        IV: 'C',
        V: 'D',
        vi: 'Em',
        vii: 'F#°'
      },
      harmonicTriad: {
        tonic: 'G',
        dominant: 'D',
        subdominant: 'C'
      }
    },
    {
      mode: 'minor',
      keyNote: 'A minor',
      relativeKey: 'C major',
      functionalHarmony: {
        i: 'Am',
        ii: 'B°',
        bII: 'C',
        iv: 'Dm',
        v: 'Em',
        bVI: 'F',
        bVII: 'G'
      },
      harmonicTriad: {
        tonic: 'Am',
        dominant: 'E',
        subdominant: 'Dm'
      }
    },
    {
      mode: 'minor',
      keyNote: 'E minor',
      relativeKey: 'G major',
      functionalHarmony: {
        i: 'Em',
        ii: 'F#°',
        bII: 'G',
        iv: 'Am',
        v: 'Bm',
        bVI: 'C',
        bVII: 'D'
      },
      harmonicTriad: {
        tonic: 'Em',
        dominant: 'B',
        subdominant: 'Am'
      }
    }
  ];

  const handleClick = (event) => {
    console.log(event.target);
  }

  return (
    <div className="App">
      <Provider value={activeElements}>
        <Circle click={handleClick}/>
        <Description modeTabs={modeTabs} descriptionData={data}/>
      </Provider>
    </div>
  );
}

export default App;
