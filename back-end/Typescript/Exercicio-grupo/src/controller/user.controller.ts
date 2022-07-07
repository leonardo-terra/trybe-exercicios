import { Request, Response } from 'express'
import userServices from '../services/user.services'

const getUsers = async(req: Request, res: Response): Promise<Response> => {
  const users = await userServices.getUsers();
  return res.status(200).send(users);
}

export default {getUsers}