import s from '../../features/decks/DecksList/DeckItem/DeckItem.module.css'
import { Skeleton } from '@mui/material'

export const createSkeletonsDecks = (count:number) => {
  let array =  Array(count).fill(<></>);

 array = array.map((deck,index)=><li style={{minHeight:155}} key={index} className={s.item}>
 <h3 className={s.title}>
   <Skeleton height={30} width={250}  />

  </h3>
  <p className={s.characteristic} style={{display:'flex',gap:'16px'}}>
    <b>Author:</b>    <Skeleton height={25} width={140} />

  </p>
  <p className={s.characteristic} style={{display:'flex',gap:'16px'}}>
    <b>Created:</b>    <Skeleton height={25} width={140}  />

  </p>
  <p className={s.characteristic} style={{display:'flex',gap:'16px'}}>
    <b>Updated:</b>    <Skeleton height={25} width={140}  />

  </p>


    <div className={s.buttonBox} style={{marginTop:'0px'}}>
      <Skeleton height={50} width={100} />

      <Skeleton height={50} width={100} />
    </div>

  </li>);

  return array;
}

