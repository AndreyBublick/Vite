import type { AppDispatch, AppRootState } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { changeAppProgress } from '../../app/app-reducer.ts'

export const fetchDecksTC = () => async (dispatch:AppDispatch, getState: () => AppRootState) => {
  try {
    dispatch(changeAppProgress('loading'))
    await decksApi.fetchDecks().then(response => dispatch(setDecksAC(response.data.items)));
  }
  catch (error) {
    alert(error)
  }
  finally {
    dispatch(changeAppProgress('success'))
  }
};



export const addDecksTC = (name:string) => async (dispatch:AppDispatch, getState: () => AppRootState) => {

  try {
    dispatch(changeAppProgress('loading'))
    return await decksApi.addDeck(name).then(response => dispatch(addDeckAC(response.data)));

  }
  catch (error) {
    alert(error);
  }
  finally {
    dispatch(changeAppProgress('success'))
  }


};