import React from 'react';
import Table from './components/Table/Table';
import './App.css';

function App() {
  const tonics = {
    tableHeader: 'tonic',
    tableContent: ['C','F','G']
  };
  const modes = {
    tableHeader: 'mode',
    tableContent: ['Major','Minor']
  };

  return (
    <div className="App">
      <Table data={tonics}/>
      <Table data={modes}/>
    </div>
  );
}

export default App;
