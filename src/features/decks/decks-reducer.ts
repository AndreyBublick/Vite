const SET_DECKS = 'SET_DECKS'
const ADD_DECK = 'ADD_DECK';
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
      return { ...state, decks: [...state.decks, ...action.payload.decks]}
    }
    case ADD_DECK: {
      return {...state, decks: [action.payload.deck,...state.decks]}
    }

    default:
      return state
  }
}

export const setDecksAC = (decks: Array<Deck>) => ({
  type: SET_DECKS,
  payload: { decks },
} as const)
export const addDeckAC = (deck: Deck) => ({
  type: ADD_DECK,
  payload: { deck },
} as const)



type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: null
  created: string
  updated: string
  cardsCount: number
  isFavorite: false
  author: {
    id: string
    name: string
  }
}
