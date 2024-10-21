import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from 'react';

function App() {
  return (
    <>
      <Navbar title="TEXT UTILS" />
      <div className='container my-3'>
        <Textform heading="Enter your Text to Analyze" />
      </div>
    </>
  );
}
App.propTypes = {
  title: PropTypes.string,
}

App.defaultProps = {
  title: "Your title",
}

export default App;
