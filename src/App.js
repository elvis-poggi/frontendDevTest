import React, { Component } from 'react'
import './App.css'
import MainArticle from './components/MainArticle/'
import SideArticle from './components/SideArticle/'
import Popup from './components/SideArticle/Popup'
import Navbar from './components/Navbar'
import { scrollMonitor } from './utils.js'

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
    // let active = false

    window.onscroll = () => {
      scrollMonitor(440, 'navbar')
      scrollMonitor(590, 'articles')
    }
  }

  render () {
    const { data = [] } = this.state
    const [first = {}, ...list] = data
    const appStyle = {
      background: 'url(https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/cover.png) 0 110px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      fontFamily: `'Roboto Slab', serif`
    }
    const articlesStyle = {
      width: '1280px',
      margin: '0 auto',
      textAlign: 'left',
      backgroundColor: '#fff',
      borderRadius: '15px'
    }

    if (!data.length) return null
    return (
      <div style={appStyle}>
        <Navbar />
        <div className='articlesWrapper' id='articles'>
          <div style={articlesStyle}>
            <MainArticle {...first} className='column' />
            <div>
              {list.map(a => <SideArticle {...a} key={a.id} toggle={(id) => this.togglePopup(id)} className='column' />)}
            </div>
            <Popup
              data={this.state.popupData}
              closePopup={() => this.togglePopup()}
              isOpen={this.state.showPopup}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default App
