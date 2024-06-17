import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = ({ location }) => {
  const { url } = useParams();
  const article = location.state;

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
