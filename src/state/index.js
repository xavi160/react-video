export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const SEEKING = 'SEEKING';
export const SEEKED = 'SEEKED';

const initialState = {
  paused: true,
  currentTime: 0
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
    default:
      return initialState;
  }
}
