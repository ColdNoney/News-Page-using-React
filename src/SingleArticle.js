import React from 'react'

const SingleArticle = (props) => (
  <div className='news'>
    <div className='news-image'>
      <img src={props.article.urlToImage} alt='slika vijesti'/>
    </div>
    <div className='news-details'>
      <p className='news-title'>{props.article.title}</p>
      <div className='news-description'>
        <p className='author'>{props.article.author}</p>
        <a className="url" href={props.article.url}>Link</a>
      </div>
    </div>
  </div>
)

export default SingleArticle
