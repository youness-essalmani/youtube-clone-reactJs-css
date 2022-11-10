import axios from 'axios';

export const YouTubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const API_KEY = 'AIzaSyDPbDb26Mrc_vV9asHaocaBHJWhfXNtZQ0'; // mention your youtube API key here



