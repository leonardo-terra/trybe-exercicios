import { ResultSetHeader } from 'mysql2';
import connection from './connection'

const getUsers = async (): Promise<IUser[]> =>{
  const [result] = await connection.execute("SELECT * FROM Users");
  return result as IUser[];
}


export default {getUsers}