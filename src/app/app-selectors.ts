import type { AppRootState } from './store.ts'
import type { Progress } from './app-reducer.ts'


export const getAppProgress = (state:AppRootState):Progress => state.app.progress;