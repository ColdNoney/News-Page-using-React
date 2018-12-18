import React, { Component } from 'react'
import SingleArticle from './SingleArticle'

class Article extends Component {
  render() {
    let n = 5
    let vijesti = this.props.articles
    return (
      <div className='table'>
        {vijesti.slice(0,n).map((article) => (
          <SingleArticle key={article.title} article={article}/>
        ))}
      </div>
    )
  }
}

export default Article
