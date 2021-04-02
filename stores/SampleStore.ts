import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class SampleStore {
  public name = ''

  public constructor() {
    makeAutoObservable(this)
  }

  public setName(name: string): void {
    this.name = name
  }
}
