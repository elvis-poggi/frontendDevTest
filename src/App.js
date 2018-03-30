import React, { Component } from 'react'
import './App.css'
import MainArticle from './components/MainArticle/'
import SideArticle from './components/SideArticle/'
import Navbar from './components/Navbar'
import { scrollMonitor } from './utils.js'

// const API_URL = 'http://18.195.225.57/articles.php'
const API_URL = process.env.NODE_ENV
  ? 'http://172.17.0.2/api/articles.php'
  : '/api/articles.php'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openArticle: false
    }
  }
  togglePopup (id) {
    this.setState(state => ({
      openArticle: state.openArticle === id ? false : id
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
    const { data = [], openArticle = false } = this.state
    const [first = {}, ...list] = data
    const appStyle = {
      background: 'url(https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/cover.png) 0 63px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      fontFamily: `'Roboto', sans-serif`
    }
    const articlesStyle = {
      width: '100%',
      margin: '0 auto',
      textAlign: 'left',
      backgroundColor: '#fff',
      borderRadius: '15px'
    }

    return (
      <div style={appStyle}>
        <Navbar />
        <div className='articlesWrapper' id='articles'>
          {(!data.length)
            ? <div>No Articles found.</div>
            : <div style={articlesStyle}>
              <MainArticle {...first} className='column' />
            </div>
          }
        </div>
        {(data.length) && <div className='sideArticleWrapper'>
          {list.map(
                  (a, index) =>
                    <SideArticle
                      {...a}
                      key={a.id}
                      toggle={(id) => this.togglePopup(id)}
                      className='column'
                      index={index}
                      anyOpen={typeof openArticle !== 'boolean'}
                      isOpen={openArticle === a.id}
                    />
                )}
        </div>}
      </div>
    )
  }
}

export default App
