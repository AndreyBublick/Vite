import type { AppRootState } from '../../app/store.ts'


export const getDecksSelector = (state:AppRootState) => state.decksReducer.decks;