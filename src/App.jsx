import React from 'react'
import Shop from './components/mashq3'
import Todo from './components/mashq2'
import Auth from './components/mashq4';
import Theme from './components/mashq1';

function App() {
  return (
    <div>
      <div className="flex justify-center">
        <Theme />
      </div>
      <div className="flex justify-center">
        <Todo />
      </div>
      <div className="flex justify-center">
        <Shop />
      </div>
      <div className="flex justify-center">
        <Auth />
      </div>
    </div>
  );
}

export default App