import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_PLACE:
        return {
          ...state,
          places: state.places.concat({
            key: Math.random(),
            name: action.placeName,
            image: {
              uri: 'https://images.pexels.com/photos/15382/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          })
        };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          })
        };
      // case SELECT_PLACE:
      //   return {
      //     ...state,
      //     selectedPlace: state.places.find(place => {
      //       return place.key === action.placeKey;
      //     })
      //   };
      // case DESELECT_PLACE:
      //   return {
      //     ...state,
      //     selectedPlace: null
      //   };
    default:
      return state;
  }
};

export default reducer;
