import { Context, createContext } from 'react'
import { SampleStore } from '../stores/SampleStore'
import { UserStore } from '../stores/UserStore'

export interface StoreHub {
  sampleStore: SampleStore
  userStore: UserStore
}

export const rootStoreContext: Context<StoreHub> = createContext<StoreHub>({
  sampleStore: new SampleStore(),
  userStore: new UserStore(),
})
