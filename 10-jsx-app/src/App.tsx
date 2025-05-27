import React from 'react';
import logo from './logo.svg';
import './App.css';
const name = 'Kevin';
const elements =<h1>Hello, {name}</h1>

const formatName = (user:User) =>{
    return user.firstName + ' ' + user.lastName; 
}

type User={
  firstName: string,
  lastName: string
}

const user={
  firstName:'Kevin',
  lastName: 'Guaquez'
}

const url = "https://github.com/KevinJulianGR/react-ts-test";
const elementAhref = <a href={url}>Repositorio en GitHub</a>

function App() {
  return (
    <div className='jsx-ejercicio'>
      {elements}
      <h2>
      How are you, {formatName(user)}?
    </h2>
    {elementAhref}
    </div>
  );
}

export default App;
