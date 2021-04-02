import { IUser } from '../models/IUser'

class UserApi {
  public getUser = (_: string): Promise<IUser> => {
    //axios or apollo fetch, simulation below
    return Promise.resolve(<IUser>{ name: 'Vaha', email: 'vaha@gmail.com' })
  }
}

const userApi = new UserApi()

export default userApi
