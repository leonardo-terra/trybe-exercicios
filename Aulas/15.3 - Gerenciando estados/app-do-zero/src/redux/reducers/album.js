import {
  REQUEST_MUSICS,
  GET_MUSICS_SUCCESS,
  GET_MUSICS_ERROR,
} from '../actions/actionsTypes'

const INITIAL_STATE = {
  isLoading: false,
  musics:[],
  errorMessage:'',
};

const album = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case REQUEST_MUSICS:
      return {
        ...state,
        isLoading: true,
      }
    case GET_MUSICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        musics: action.payload,
      }
    case GET_MUSICS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
}

export default album;
