import { makeAutoObservable, runInAction } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { IUser } from '../models/IUser'
import userApi from '../services/UserApi'

interface IUserStore {
  user: IUser
}

enableStaticRendering(typeof window === 'undefined')

export class UserStore implements IUserStore {
  public user: IUser

  public constructor() {
    makeAutoObservable(this)
  }

  public hydrate(storeData: IUserStore): void {
    if (!storeData) return
    this.user = storeData.user
  }

  public async login(name: string): Promise<void> {
    const user = await userApi.getUser(name)
    runInAction(() => {
      this.user = user
    })
  }
}
