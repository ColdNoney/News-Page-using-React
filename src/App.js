import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.sass'
import Choices from './Choices'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Choices} />
      </div>
    )
  }
}

export default App
