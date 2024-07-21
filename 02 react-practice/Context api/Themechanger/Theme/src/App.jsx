import React from 'react';
import { useTheme } from './Context/Themecontext';
import ThemeToggle from './Components/Themetoggle';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} style={{ minHeight: '100vh' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Theme Changer with Context API</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
