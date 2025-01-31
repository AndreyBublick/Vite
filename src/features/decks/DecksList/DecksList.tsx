import s from './DecksList.module.css'
import { useEffect } from 'react'
import { getDecksSelector } from '../selectors-decks.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { fetchDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {
  const decks = useAppSelector(getDecksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDecksTC());
  }, [dispatch])


  const decksMapped = decks.map((deck) => <DeckItem key={deck.id} deck={deck} />)

  return <ul className={s.list}>{decksMapped}</ul>
}
