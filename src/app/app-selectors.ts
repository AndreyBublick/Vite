import type { AppRootState } from './store.ts'
import type { Error, Progress } from './app-reducer.ts'


export const getAppProgress = (state:AppRootState):Progress => state.app.progress;
export const getAppError = (state:AppRootState):Error => state.app.error;