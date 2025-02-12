import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { LinearProgress } from '@mui/material'
import { useAppSelector } from './store.ts'
import { getAppError, getAppProgress } from './app-selectors.ts'
import { AlertStatus } from '../common/components/alertStatus/AlertStatus.tsx'

export const App = () => {

  const progress = useAppSelector(getAppProgress);

  const error = useAppSelector(getAppError);

  const isOpenError = !!error;

  return (
    <div>
      <div style={{ height: '4px' }}>

        {progress==='loading' && <LinearProgress color="secondary"  />}

      </div>
      <Decks />
      {isOpenError && <AlertStatus /> }
    </div>
  )
}
