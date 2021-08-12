import React from 'react';
import './App.css';
import { useResponsive } from './common/customHooks';

function App() {
  const {isMobile, isTablet, isDesktop} = useResponsive()
  return (
    <div className="App">
      {isMobile && <div>Show on mobile</div>}
      {isTablet && <div>Show on tablet</div>}
      {isDesktop && <div>Show on desktop</div>}
    </div>
  );
}

export default App;
