import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

// state is immutable, don't just push to the state array! instead- use spread
// operator and object.assign to create a deep copy of state and return it
     case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({},action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];


    default:
      return state;
  }
}
