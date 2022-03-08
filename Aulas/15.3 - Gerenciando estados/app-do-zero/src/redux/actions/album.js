import {
  REQUEST_MUSICS,
  GET_MUSICS_SUCCESS,
  GET_MUSICS_ERROR,
  } from './actionsTypes';
import getMusics from '../../services/musicsAPI';

const requestMusics = () => ({
  type: REQUEST_MUSICS,
})

const getMusicsSuccess = (musics) => ({
  type: GET_MUSICS_SUCCESS,
  payload: musics,
})

const getMusicsError = (errorMessage) => ({
  type: GET_MUSICS_ERROR,
  payload: errorMessage,
})

export const fetchMusics = (id) => async (dispatch) => {
  dispatch(requestMusics());

  try{
    // descarta o primeiro, que é referente ao album, nao as musicas
    const [,...musics] = await getMusics(id);
    dispatch(getMusicsSuccess(musics));
  } catch(error) {
    dispatch(getMusicsError(error.message));
  }
};
