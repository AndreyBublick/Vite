import { changeAppProgress } from '../../app/app-reducer'
import type { AppDispatch, AppRootState } from '../../app/store'
import { decksAPI, type UpdateDeckParams } from './decks-api'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer'


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


export const  updateDeckTC = (payload:UpdateDeckParams)=>async (dispatch:AppDispatch)=>{
  try {
    dispatch(changeAppProgress('loading'))
    await decksAPI.updateDeck(payload)
   dispatch(updateDeckAC(payload));

  }
  catch (error) {
    alert(error);
  }
  finally {
    dispatch(changeAppProgress('success'))

  }
};
