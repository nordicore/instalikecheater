import * as actionTypes from '../actions/actionTypes';

const initialState = {
  hashtags: [],
  users: [],
  lastDaysInteraction: {
    enabled: false,
    daysCount: ''
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_HASHTAGS:
      return {
        ...state,
        hashtags: action.hashtags
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case actionTypes.TOGGLE_LAST_DAYS_INTERACTION:
      return {
        ...state,
        lastDaysInteraction: {
          ...state.lastDaysInteraction,
          enabled: !state.lastDaysInteraction.enabled
        }
      };
    case actionTypes.SET_LAST_DAYS_INTERACTION:
      return {
        ...state,
        lastDaysInteraction: {
          ...state.lastDaysInteraction,
          daysCount: action.daysCount
        }
      };
    default:
      return state;
  }
}
