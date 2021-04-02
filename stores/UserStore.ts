import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { IUser } from '../models/IUser'
import userApi from '../services/userApi'

enableStaticRendering(typeof window === 'undefined')

export class UserStore {
  public user: IUser

  public constructor() {
    makeAutoObservable(this)
  }

  public async login(name: string): Promise<void> {
    this.user = await userApi.getUser(name)
  }
}
