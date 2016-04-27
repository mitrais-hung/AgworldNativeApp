import * as types from './types';

export function select(id) {
  return {
    type: types.TOGGLE_SELECT,
    id: id
  }
}

export function searchActivities() {
  return (dispatch) => {
    fetchActivities(dispatch);
  };
}

function fetchActivities(dispatch) {
  url = defaultURL + "?api_token=" + token;
  fetchJson(url, (data) => {
    dispatch({
      type: types.SEARCH_ACTIVITIES,
      activities: data
    });
  });
}

function fetchJson(url, callback) {
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(jsonData) {
    callback(jsonData);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}


const defaultURL = 'http://localhost:3000/user_api/v1/activities';
const token = 'DzfHazs9CIFNBkIkjN5-DQ';
