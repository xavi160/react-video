export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const SEEKING = 'SEEKING';
export const SEEKED = 'SEEKED';

const initialState = {
  playing: false,
  currentTime: 0
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        playing: true,
        currentTime: action.currentTime,
        lastChange: new Date()
      };
    case PAUSE:
      return {
        ...state,
        playing: false,
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
