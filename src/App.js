import React from 'react';
import Table from './components/Table/Table';
import Circle from './components/Circle/Circle';

function App() {
  const tonics = {
    tableHeader: 'tonic',
    tableContent: ['C','G','D','A','E','B','F#', 'C#', 'G#', 'D#', 'A#']
  };
  
  const modes = {
    tableHeader: 'mode',
    tableContent: ['Lydian','Major / Ionian', 'Mixolydian', 'Dorian', 'N.Minor / Aeolian', 'Phrygian', 'Locrian']
  };

  const circle = {
    tonic: ['C','G','D','A','E','B','F#', 'C#', 'G#', 'D#', 'A#'],
    step: ['IV', 'I', 'V', 'ii', 'vi', 'iii', 'vii°'],
    description: ['major', 'minor', 'diminished']
  };

  const handleClick = (event) => {
    console.log(event.target);
  }

  return (
    <div className="App">
      <div className="tables-container">
        <Table data={tonics} click={handleClick}/>
        <Table data={modes} click={handleClick}/>
      </div>
      <Circle data={circle}/>
    </div>
  );
}

export default App;
