import React, { Component } from 'react';
import './App.css';
import { Header } from '../components/header/Header';
import { MainPage } from '../components/main/MainPage';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App
