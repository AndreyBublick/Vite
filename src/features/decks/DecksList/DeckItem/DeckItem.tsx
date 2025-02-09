import s from './DeckItem.module.css'
import type { Deck } from '../../decks-api.ts'
import { useAppDispatch } from '../../../../app/store.ts'
import { useCallback } from 'react'
import { deleteDeckTC } from '../../decks-thunks.ts'

type DeckProps = {
  deck: Deck // todo: fix
}


const TEST_ACC_NAME = 'Nik-Kik-Shpink'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch();

  const onClickHandler = useCallback(() => {
    dispatch(deleteDeckTC(deck.id));
  },[deck.id,dispatch])

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button>update</button>
          <button onClick={onClickHandler}>delete</button>
        </div>
      )}
    </li>
  )
}
