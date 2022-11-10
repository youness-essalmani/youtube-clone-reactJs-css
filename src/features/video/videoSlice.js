import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import {YouTubeAPI, API_KEY} from '../../api/youtubeApi';

const initialState = {
  videos: [],
};

export const getVideotItems = createAsyncThunk(
  'video/getvideotItems',
  async (name, thunkAPI) => {
    try {
      const response = await YouTubeAPI.get("videos",{
        params: {
          part: 'snippet,statistics,contentDetails,localizations',
          maxResults: 12,
          chart:'mostPopular',
          key: API_KEY
        }
      })
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getSearchVideos = createAsyncThunk(
  'video/getSearchVideo',
  async (name, thunkAPI) => {
    try {
      const response = await YouTubeAPI.get("search",{
        params: {
          part: 'snippet',
          maxResults: 10,
          q:name,
          key: API_KEY
        }
      })
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);




const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    clearVideos:(state, action) =>{
      state.videos = [];
    }
  },
  extraReducers:{
    [getVideotItems.fulfilled]: (state, action) => {
      state.videos = action.payload.items;
    },
    [getSearchVideos.fulfilled]: (state, action) => {
      state.videos = action.payload.items;
    },
  }
});

 
export default videoSlice.reducer;
export const {clearVideos} = videoSlice.actions;

