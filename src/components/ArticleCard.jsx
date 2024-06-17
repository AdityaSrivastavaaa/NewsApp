import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.url)}`, { state: { article } });
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleCard;
