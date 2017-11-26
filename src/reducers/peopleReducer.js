import initialState from './initialState';

export default function authorReducer(state = [initialState.people], action) {
  switch (action.type) {
    case 'LOAD_PEOPLE_SUCCESS':
      return action.people;

    default:
      return state;
  }
}
