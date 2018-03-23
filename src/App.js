import React, { Component } from 'react'
import './App.css'
import MainArticle from './components/MainArticle/'
import SideArticle from './components/SideArticle/'

import Navbar from './components/Navbar'

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
    const { data = [] } = this.state
    const [first = {}, ...list] = data
    return (
      <div className='App'>
        <Navbar />
        <MainArticle {...first} />
        {list.map(a => <SideArticle {...a} key={a.id} />)}
      </div>
    )
  }
}

export default App
