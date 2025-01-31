import type { AppDispatch, AppRootState } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => async (dispatch:AppDispatch, getState: () => AppRootState) => {
  try {
    await decksApi.fetchDecks().then(response => dispatch(setDecksAC(response.data.items)));
  }
  catch (error) {
    alert(error)
  }
};



export const addDecksTC = (name:string) => async (dispatch:AppDispatch, getState: () => AppRootState) => {

  return await decksApi.addDeck(name).then(response => dispatch(addDeckAC(response.data)));


};