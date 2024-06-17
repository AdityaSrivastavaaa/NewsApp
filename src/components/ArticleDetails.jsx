import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ArticleDetails = () => {
  const location = useLocation();
  const { article } = location.state;

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ArticleDetails;

