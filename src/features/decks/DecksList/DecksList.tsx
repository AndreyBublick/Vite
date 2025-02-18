import s from './DecksList.module.css'
import { useEffect } from 'react'
import { getDecksSelector } from '../selectors-decks.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { fetchDecksTC } from '../decks-thunks.ts'
import { createSkeletonsDecks } from '../../../common/utils/createSkeletonsDecks.tsx'

export const DecksList = () => {
  const decks = useAppSelector(getDecksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDecksTC());
  }, [dispatch])

  const skeletons = createSkeletonsDecks(10);
  console.log(skeletons)

  const decksMapped = decks.map((deck) =><DeckItem key={deck.id} deck={deck} />)

  return <ul className={s.list}>{decks.length!==0 ? decksMapped : skeletons}</ul>
}
