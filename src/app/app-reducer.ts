const CHANGE_APP_PROGRESS = 'CHANGE_APP_PROGRESS';

const initialState = {
  progress:'idle' as Progress
};

export const appReducer = (state: InitialState = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case CHANGE_APP_PROGRESS:{
      const {progress} = action.payload;
      return {...state, progress}
    }

    default:
      return state
  }
}


type InitialState = typeof initialState;
export type Progress = 'idle' | 'loading' | 'success' | 'failed';

export const changeAppProgress = (progress:Progress)=>({type: CHANGE_APP_PROGRESS, payload: {progress}});


type Actions = ReturnType<typeof changeAppProgress>;