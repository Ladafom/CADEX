import type { FC } from "react"
import { useDispatch } from "react-redux"
import { selectPrimitive } from "../../app/slices/PrimitiveSlice"
import { type PrimitiveCardType } from "../../app/lib/types"
import './PrimitiveCard.css'

export const PrimitiveCard:FC<PrimitiveCardType> = (props) => {

  const {
    id,
    type,
    position,
    color,
    isSelected
  } = props

  const dispatch = useDispatch()

  return (
    <div 
      className={`primitiveCard ${isSelected && 'primitiveCard_selected'}`}
      onClick={()=>dispatch(selectPrimitive({id}))}
    >
      <div className="primitiveCard__info">

        <p className="primitiveCard__type">
          {type}: {id}
        </p>
        <p>
          position: {JSON.stringify(position).replace('[', '(').replace(']', ')')}
        </p>
      </div>

      <div
        className="primitiveCard__color"
        style={{ 
          backgroundColor: color,
        }}>
      </div>

    </div>
  )
}