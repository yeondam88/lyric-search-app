import {
  FETCH_TOP_TRACKS,
  FETCH_TRACKS_FAIL,
  FETCH_LYRICS_BY_TRACK_NAME,
  FETCH_TRACK,
  FETCH_LYRIC
} from "../actions/actionTypes";

const initialState = {
  track_list: [],
  heading: "Top 10 tracks",
  track: {},
  lyric: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TRACKS:
      return {
        ...state,
        track_list: action.payload,
        heading: "Top 10 tracks"
      };
    case FETCH_LYRICS_BY_TRACK_NAME:
      return {
        ...state,
        track_list: action.payload,
        heading: "Search results"
      };
    case FETCH_TRACK:
      return {
        ...state,
        track: action.payload.track
      };
    case FETCH_LYRIC:
      return {
        ...state,
        lyric: action.payload.lyrics
      };
    case FETCH_TRACKS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
