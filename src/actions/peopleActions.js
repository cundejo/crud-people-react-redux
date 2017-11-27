import * as types from './actionTypes';
import PeopleApi from '../api/mockPeopleApi';

export function loadPeopleSuccess(people) {
  return {type: types.LOAD_PEOPLE_SUCCESS, people};
}

export function loadPeople() {
  return dispatch => {
    return PeopleApi.getAllPeople()
      .then(authors => {
        dispatch(loadPeopleSuccess(authors));
      })
      .catch(error => {
        throw(error);
      });
  };
}

