import axios from 'axios';

export const YouTubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const API_KEY = 'AIzaSyDPbDb26Mrc_vV9asHaocaBHJWhfXNtZQ0'; // mention your youtube API key here

export const fetchChannels = YouTubeAPI.get(
    {
    params: {
        part: 'snippet,id,localizations,statistics,contentDetails',
        maxResults: 12,
        key: API_KEY
    }
})


