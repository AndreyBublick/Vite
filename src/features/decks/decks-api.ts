import axios from 'axios'
import type { Deck } from './decks-reducer.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


export const decksApi = {
  fetchDecks:()=>{
    return instance.get('/v2/decks');
  },
  addDeck:(name: string) => {
    return instance.post<AddDeckResponse>('/v1/decks', {name});
  }
};

type AddDeckResponse = {
  _count: {
    card: number
  }
} & Deck;