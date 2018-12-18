import React, { Component } from 'react'
import Article from "./Article"
import './App.css'

class Choices extends Component {
  state = {
    articles: [],
    lng: '',
  }

  openEng = () => {
    const NewsAPI = require('newsapi')
    const newsapi = new NewsAPI('503f3230564f4ed3b78a5c344507bdbe')
    newsapi.v2.topHeadlines({
      language: 'en',
      country: 'us'
    }).then(response => {
      console.log(response)
      this.setState({ lng: 'en', articles: response.articles })
    })
  }

  openRus = () => {
    const NewsAPI = require('newsapi')
    const newsapi = new NewsAPI('503f3230564f4ed3b78a5c344507bdbe')
    newsapi.v2.topHeadlines({
      language: 'ru',
      country: 'ru'
    }).then(response => {
      console.log(response)
      this.setState({ lng: 'ru', articles: response.articles })
    })
  }

  render() {
    const { query } = this.state
    return (
      <div className='page'>
        <div className='choice'>
          <button onClick={() => this.openEng()} className='button button__eng'>
            Vijesti na engleskom
          </button>
          <button onClick={() => this.openRus()} className=' button button__rus'>
            Vijesti na ruskom
          </button>
        </div>
        <div className='page-table'>
          {
            this.state.articles.length > 0 && <Article articles={this.state.articles} />
          }
        </div>
      </div>
    )
  }
}

export default Choices
