import { changeAppProgress } from '../../app/app-reducer'
import type { AppDispatch } from '../../app/store'
import { decksAPI, type UpdateDeckParams } from './decks-api'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer'
import { errorHandler } from '../../common/utils/errorHandler.ts'

export const fetchDecksTC = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(changeAppProgress('loading'))
    await decksAPI.fetchDecks().then((response) => dispatch(setDecksAC(response.data.items)))
  } catch (error) {
    errorHandler({ error, dispatch })
  } finally {
    dispatch(changeAppProgress('success'))
  }
}

export const addDecksTC = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(changeAppProgress('loading'))
    return await decksAPI.addDeck(name).then((response) => dispatch(addDeckAC(response.data)))
  } catch (error) {
    errorHandler({error,dispatch});
  } finally {
    dispatch(changeAppProgress('success'))
  }
}

export const deleteDeckTC = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(changeAppProgress('loading'))

    return await decksAPI.deleteDeck(id).then((response) => dispatch(deleteDeckAC(response.data.id)))
  } catch (error) {
    errorHandler({error,dispatch});
  } finally {
    dispatch(changeAppProgress('success'))
  }
}

export const updateDeckTC = (payload: UpdateDeckParams) => async (dispatch: AppDispatch) => {
  try {

    dispatch(changeAppProgress('loading'));

    await decksAPI.updateDeck(payload);

    dispatch(updateDeckAC(payload));

  } catch (error) {

    errorHandler({error,dispatch});

  } finally {
    dispatch(changeAppProgress('success'))
  }
}
