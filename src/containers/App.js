import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Header } from '../components/header/Header';
//import { MainPage } from '../components/main/MainPage';
import MovieModal from '../components/main/about-modal/MovieModal';

class App extends Component {


  render() {
    return (
      <div className = 'app'>
        <Header />
        <MovieModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(App)

//        <MainPage />