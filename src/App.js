import React, { Component } from 'react'
import './App.css'
import Debug from './components/Debug'

const API_URL = 'http://18.195.225.57/articles.php'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    window.fetch(API_URL)
      .then(data => data.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err))
  }
  render () {
    const { data } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Debug data={data} />
      </div>
    )
  }
}

export default App
