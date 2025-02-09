import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>(`v2/decks`)
  },
  addDeck(name: string) {
    return instance.post<Deck>(`v1/decks`, {
      name,
    })
  },
  deleteDeck(id: string) {
    return instance.delete<Deck>(`v1/decks/${id}`)
  },
  updateDeck({ id }: UpdateDeckParams) {
    return instance.patch<ResponseDeleteDeck>(`v1/decks/${id}`)
  },
}

export type UpdateDeckParams = {
  id: string
  name: string
}

export type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}
export type Author = {
  id: string
  name: string
}
export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
type ResponseDeleteDeck = {
  id: 'string'
  userId: 'string'
  name: 'string'
  isPrivate: true
  cover: 'string'
  created: '2025-02-09T07:51:27.821Z'
  updated: '2025-02-09T07:51:27.821Z'
  cardsCount: 0
}
