import { useContext } from 'react'
import { RootStoreContext, IStoreHub } from '../contexts'

export const useStores = (): IStoreHub => useContext(RootStoreContext)
