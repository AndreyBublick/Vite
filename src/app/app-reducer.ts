const CHANGE_APP_PROGRESS = 'CHANGE_APP_PROGRESS';
const CHANGE_APP_ERROR = 'CHANGE_APP_ERROR';

const initialState = {
  progress:'idle' as Progress,
  error:null as Error,
};


export const appReducer = (state: InitialState = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case CHANGE_APP_PROGRESS:{
      const {progress} = action.payload;
      return {...state, progress}
    }
    case CHANGE_APP_ERROR: {
     return  {...state,error: action.payload.error}
    }

    default:
      return state
  }
}


type InitialState = typeof initialState;
export type Progress = 'idle' | 'loading' | 'success' | 'failed';

export const changeAppProgress = (progress:Progress)=>({type: CHANGE_APP_PROGRESS, payload: {progress}} as const);

export const changeAppError = (error:Error)=>({type: CHANGE_APP_ERROR, payload: {error}} as const);

export type Error = string|null;
type Actions = ReturnType<typeof changeAppProgress>|ReturnType<typeof changeAppError>;