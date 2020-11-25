import React from "react";
import Menu from './components/Menu/index';
import QuizBox from './components/QuizBox/index';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <QuizBox />
    </div>
  );
}

export default App
