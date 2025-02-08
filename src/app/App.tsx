import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { LinearProgress } from '@mui/material'
import { useAppSelector } from './store.ts'
import { getAppProgress } from './app-selectors.ts'

export const App = () => {
  const progress = useAppSelector(getAppProgress);
  return (
    <div>
      <div style={{ height: '4px' }}>
        {progress==='loading' && <LinearProgress color="secondary"  />}

      </div>
      <Decks />
    </div>
  )
}
