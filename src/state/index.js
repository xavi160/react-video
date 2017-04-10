export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const SEEKING = 'SEEKING';
export const SEEKED = 'SEEKED';
export const VOLUME_CHANGED = 'VOLUME_CHANGED';

const initialState = {
  paused: true,
  currentTime: 0,
  volume: 1,
  muted: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        paused: false,
        currentTime: action.currentTime,
        lastChange: new Date()
      };
    case PAUSE:
      return {
        ...state,
        paused: true,
        currentTime: action.currentTime,
        lastChange: new Date()
      };
    case SEEKING:
    case SEEKED:
      return {
        ...state,
        currentTime: action.currentTime,
        lastChange: new Date()
      };
    case VOLUME_CHANGED:
      return {
        ...state,
        volume: action.volume,
        muted: action.muted
      };
    default:
      return initialState;
  }
}
