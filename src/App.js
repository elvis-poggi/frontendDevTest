import React, { Component } from 'react'
import './App.css'
import MainArticle from './components/MainArticle/'
import SideArticle from './components/SideArticle/'
import Popup from './components/SideArticle/Popup'
import Navbar from './components/Navbar'

const API_URL = 'http://18.195.225.57/articles.php'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false
    }
  }
  togglePopup (id) {
    const {data} = this.state
    const popupData = data.filter(
      (row) => row.id === id
    )[0]
    this.setState(state => ({
      popupData,
      showPopup: !state.showPopup
    }))
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
        {list.map(a => <SideArticle {...a} key={a.id} toggle={(id) => this.togglePopup(id)} />)}
        <button onClick={() => this.togglePopup()}>show popup</button>
        {this.state.showPopup
          ? <Popup
            data={this.state.popupData}
            closePopup={() => this.togglePopup()}
          />
          : null
        }
      </div>
    )
  }
}

export default App
