import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { useStores } from '../hooks/useStores'
import TextField from '@material-ui/core/TextField'
import styles from '../styles/sample.module.scss'

const Sample = () => {
  const { sampleStore, userStore } = useStores()

  const changed = useCallback(
    (event) => sampleStore.setName(event.target.value),
    [sampleStore]
  )

  return (
    <>
      <h3>{userStore.user?.email}</h3>
      <TextField
        id="standard-basic"
        label="Enter name"
        onChange={changed}
        className={styles.myInput}
      />
    </>
  )
}

export default observer(Sample)
