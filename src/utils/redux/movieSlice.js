import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    airingTodayTVshows: null,
    popularTVshows: null,
    topRatedTVshows: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addAiringTodayTVshows: (state, action) => {
      state.airingTodayTVshows = action.payload;
    },

    addPopularTVshows: (state, action) => {
      state.popularTVshows = action.payload;
    },

    addTopRatedTVshows: (state, action) => {
      state.topRatedTVshows = action.payload;
    },
  }
})

export const { addNowPlayingMovies, addTopRatedMovies, addUpcomingMovies, addAiringTodayTVshows, addPopularTVshows, addTopRatedTVshows } = movieSlice.actions;
export default movieSlice.reducer;