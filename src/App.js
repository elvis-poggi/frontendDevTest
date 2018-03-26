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

  componentDidMount () {
    let active = false
    window.onscroll = function () {
      if (!active && window.pageYOffset > 480) {
        const nav = document.getElementById('navbar')
        window.active = true
        nav.classList.add('hidden')
        const articles = document.getElementById('articles')
        articles.classList.add('fullScreen')
      } else {
        if (!active && window.pageYOffset < 480) {
          const nav = document.getElementById('navbar')
          window.active = false
          nav.classList.remove('hidden')
          const articles = document.getElementById('articles')
          articles.classList.remove('fullScreen')
        }
      }
    }
  }
  render () {
    const { data = [] } = this.state
    const [first = {}, ...list] = data
    if (!data.length) return null
    return (
      <div className='App'>
        <Navbar />
        <div className='articlesWrapper' id='articles'>
          <div className='articles'>
            <MainArticle {...first} className='column' />
            {list.map(a => <SideArticle {...a} key={a.id} toggle={(id) => this.togglePopup(id)} className='column' />)}
            <button className='hidden'>show popup</button>
            {this.state.showPopup
          ? <Popup
            data={this.state.popupData}
            closePopup={() => this.togglePopup()}
          />
          : null
        }
          </div>
        </div>
      </div>
    )
  }
}

export default App
