import axios from "axios";
import {
  FETCH_TOP_TRACKS,
  FETCH_TRACKS_FAIL,
  FETCH_TRACK,
  FETCH_LYRIC
} from "./actionTypes";

const baseURL =
  "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/";

const fetchTopTracks = track_list => ({
  type: FETCH_TOP_TRACKS,
  payload: track_list
});

const fetchTracksFail = error => ({
  type: FETCH_TRACKS_FAIL,
  payload: error
});

const fetchLyricsByTrackName = track_list => ({
  type: "FETCH_LYRICS_BY_TRACK_NAME",
  payload: track_list
});

const fetchTrack = track => ({
  type: FETCH_TRACK,
  payload: track
});

const fetchLyric = lyric => ({
  type: FETCH_LYRIC,
  payload: lyric
});

export const fetchTracks = () => dispatch => {
  axios
    .get(
      `${baseURL}/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then(res => res.data.message.body)
    .then(track_list => {
      dispatch(fetchTopTracks(track_list));
    })
    .catch(error => dispatch(fetchTracksFail(error)));
};

export const fetchTrackByTrackName = trackName => dispatch => {
  axios
    .get(
      `${baseURL}/track.search?q_track=${trackName}&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then(res => res.data.message.body)
    .then(track_list => dispatch(fetchLyricsByTrackName(track_list)))
    .catch(error => dispatch(fetchTracksFail(error)));
};

export const fetchLyricById = track_id => dispatch => {
  axios
    .get(
      `${baseURL}/track.lyrics.get?track_id=${track_id}&apikey=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then(res => res.data.message.body)
    .then(lyric => dispatch(fetchLyric(lyric)))
    .catch(error => dispatch(fetchTracksFail(error)));
};

export const fetchTrackById = track_id => dispatch => {
  axios
    .get(
      `${baseURL}/track.get?track_id=${track_id}&apikey=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then(res => res.data.message.body)
    .then(track => dispatch(fetchTrack(track)))
    .catch(error => dispatch(fetchTracksFail(error)));
};
