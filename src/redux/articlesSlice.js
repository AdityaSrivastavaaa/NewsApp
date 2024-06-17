import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'eae1a1e18e1b42c8819f5d740c6a0625';
const API_URL = 'https://newsapi.org/v2';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page }) => {
    const response = await axios.get(`${API_URL}/top-headlines`, {
      params: {
        category,
        page,
        apiKey: API_KEY,
      },
    });
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    totalResults: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
