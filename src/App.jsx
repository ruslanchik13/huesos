import React, { useState } from 'react';
import AutoMan from "./AutoMan.jsx";

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
              <div />
          )}
      </>


  )
};

export default App;
