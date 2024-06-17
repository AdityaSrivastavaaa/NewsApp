import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, totalResults } = useSelector((state) => state.articles);
  const [category, setCategory] = useState('business');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [category, page, dispatch]);

  return (
    <div className="home-page">
      <CategoryFilter currentCategory={category} onCategoryChange={setCategory} />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <ArticleList articles={articles} />}
      {status === 'failed' && <p>Error loading articles.</p>}
      <Pagination
        currentPage={page}
        totalResults={totalResults}
        onPageChange={setPage}
      />
    </div>
  );
};

export default HomePage;
