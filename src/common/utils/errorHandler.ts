import type { AppDispatch } from '../../app/store.ts'
import type { AxiosError } from 'axios'
import { changeAppError } from '../../app/app-reducer.ts'

export const errorHandler = (data: { error: unknown; dispatch: AppDispatch }) => {
  const { dispatch, error } = data
  const axiosError = error as AxiosError<{ errorMessages: { message: string }[] }>
  const errorBody = axiosError?.response?.data.errorMessages[0].message
  if (errorBody) {
    dispatch(changeAppError(errorBody))
  } else if (axiosError.code === 'ERR_NETWORK') {
    dispatch(changeAppError(axiosError.message))
  } else {
    dispatch(changeAppError('Error'))
  }
}

