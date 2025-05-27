import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponenteFuncional } from './Components/ComponenteFuncional';
import { ComponenteClase } from './Components/ComponenteClase';

function App() {
  return (
    <>
    <ComponenteFuncional name='Kevin Julian'/>
    <br/>
    <ComponenteClase name='Kevin Julian'/>
    </>
  );
}

export default App;
