import { useContext } from 'react'
import { rootStoreContext, StoreHub } from '../contexts'

export const useStores = (): StoreHub => useContext(rootStoreContext)
