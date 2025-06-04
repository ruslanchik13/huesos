import React, { useState } from 'react';
import AutoMan from "./AutoMan.jsx";
import Woman from "./Woman.jsx";

const App = () => {
    const [activeTab, setActiveTab] = useState('');

  return (
      <>
          <button onClick={() => setActiveTab('man')}>Механика</button>
          <button onClick={() => setActiveTab('woman')}>Женщины</button>
          <button>хуй</button>
          {activeTab === 'man' && (
              <AutoMan />
          )}
          {activeTab === 'woman' && (
              <Woman />
          )}
      </>


  )
};

export default App;
