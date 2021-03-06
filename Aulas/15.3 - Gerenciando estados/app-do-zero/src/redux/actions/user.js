import {
  CREATE_USER,
  UPDATE_USER,
} from './actionsTypes';

export const createUser = (name) => ({
  type: CREATE_USER,
  payload: name,
});

export const updateUser = (userInfo) => ({
  type: UPDATE_USER,
  payload: userInfo,
})