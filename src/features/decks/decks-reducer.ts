import type { Deck, UpdateDeckParams } from './decks-api.ts'

const SET_DECKS = 'SET_DECKS'
const ADD_DECK = 'ADD_DECK'
const DELETE_DECK = 'DELETE_DECK'
const UPDATE_DECK = 'UPDATE_DECK'
const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case SET_DECKS: {
      return { ...state, decks: [...state.decks, ...action.payload.decks] }
    }
    case ADD_DECK: {
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    }
    case DELETE_DECK: {
      return {...state,decks: state.decks.filter(deck=>deck.id!==action.payload.id)}
    }
    case UPDATE_DECK: {
      const {id,name} = action.payload;
      console.log(action.payload)
      return  {...state,decks: state.decks.map(deck=>deck.id===id ? {...deck,name} : deck)}
    }

    default:
      return state
  }
}

export const setDecksAC = (decks: Array<Deck>) =>
  ({
    type: SET_DECKS,
    payload: { decks },
  }) as const
export const addDeckAC = (deck: Deck) =>
  ({
    type: ADD_DECK,
    payload: { deck },
  }) as const
export const deleteDeckAC = (id:string) => ({
  type: DELETE_DECK,
  payload: { id },
} as const)


export const updateDeckAC = (payload: UpdateDeckParams) =>({
  type: UPDATE_DECK,
  payload,
} as const);


type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC> | ReturnType<typeof deleteDeckAC> | ReturnType<typeof updateDeckAC>;
