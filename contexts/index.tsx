import { Context, createContext, ReactNode } from 'react'
import { SampleStore } from '../stores/SampleStore'
import { UserStore } from '../stores/UserStore'

export interface IStoreHub {
  sampleStore: SampleStore
  userStore: UserStore
}

interface IProviderProps {
  children: ReactNode
  initialState: IStoreHub
}

let storeHub: IStoreHub

export const RootStoreContext: Context<IStoreHub> = createContext<IStoreHub>(
  initializeStore()
)

export function StoreProvider({
  children,
  initialState: initialData,
}: IProviderProps): JSX.Element {
  const store = initializeStore(initialData)

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

function initializeStore(initialData = null) {
  const _storeHub = storeHub ?? {
    sampleStore: new SampleStore(),
    userStore: new UserStore(),
  }

  if (initialData) {
    _storeHub.userStore.hydrate(initialData.userStore)
    // _storeHub.sampleStore.hydrate(initialData.sampleStore)
  }

  if (typeof window === 'undefined') return _storeHub
  if (!storeHub) storeHub = _storeHub

  return _storeHub
}
