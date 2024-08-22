import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
