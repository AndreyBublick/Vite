import s from './DeckItem.module.css'
import type { Deck } from '../../decks-api.ts'
import { useAppDispatch } from '../../../../app/store.ts'
import { useCallback, useState } from 'react'
import { deleteDeckTC, updateDeckTC } from '../../decks-thunks.ts'
import type { Progress } from '../../../../app/app-reducer.ts'

type DeckProps = {
  deck: Deck // todo: fix
}


const TEST_ACC_NAME = 'Nik-Kik-Shpink'

export const DeckItem = ({ deck }: DeckProps) => {

  const [progress, setProgress] = useState<Progress>('idle');

  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch();



  const handleEditButtonClick = () => {
    setProgress('loading');
    dispatch(updateDeckTC({ id: deck.id, name: `${deck.name} updated` })).then(()=>{setProgress('success')})

  }

  const handleDeleteButtonClick = useCallback(() => {
    setProgress('loading');
    dispatch(deleteDeckTC(deck.id)).then(()=>{setProgress('success')});
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
          <button disabled={progress==='loading'} onClick={handleEditButtonClick}>update</button>
          <button disabled={progress==='loading'} onClick={handleDeleteButtonClick}>delete</button>
        </div>
      )}
    </li>
  )
}
