import userModel from '../model/user.model'


const getUsers = (): Promise<IUser[]> =>{
  return userModel.getUsers();
}

export default {getUsers}