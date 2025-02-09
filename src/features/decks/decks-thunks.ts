import { changeAppProgress } from '../../app/app-reducer'
import type { AppDispatch, AppRootState } from '../../app/store'
import { decksAPI } from './decks-api'
import { addDeckAC, deleteDeckAC, setDecksAC } from './decks-reducer'


export const fetchDecksTC = () => async (dispatch:AppDispatch, getState: () => AppRootState) => {
  try {
    dispatch(changeAppProgress('loading'))
    await decksAPI.fetchDecks().then(response => dispatch(setDecksAC(response.data.items)));
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
    return await decksAPI.addDeck(name).then(response => dispatch(addDeckAC(response.data)));

  }
  catch (error) {
    alert(error);
  }
  finally {
    dispatch(changeAppProgress('success'))
  }


};



export const deleteDeckTC = (id:string) => async (dispatch:AppDispatch, getState: () => AppRootState) => {

  try {
    dispatch(changeAppProgress('loading'))


    return await decksAPI.deleteDeck(id).then(response => dispatch(deleteDeckAC(response.data.id)));

  }
  catch (error) {
    alert(error);
  }
  finally {
    dispatch(changeAppProgress('success'))
  }


};