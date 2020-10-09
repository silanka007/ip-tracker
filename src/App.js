import React from 'react';
import AddressInfo from './components/AddressInfo';
import Header from './components/Header';
import MapSection from './components/MapSection';

function App() {
  return (
    <div className="App">
      <Header />
      <AddressInfo />
      <MapSection />
    </div>
  );
}

export default App;
