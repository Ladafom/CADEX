import { useSelector } from "react-redux"
import { type RootState } from "../../app/store"
import { PrimitiveCard } from "../primitiveCard/PrimitiveCard"
import './primitiveCardList.css'

export const PrimitiveCardList = () => {

  const primitives = useSelector((state:RootState)=>state.primitives.primitivesData)

  return (
    <div className="primitive-card-list">
      {
        primitives.map(primitive=> (
          <PrimitiveCard 
            key={primitive.id}
            id={primitive.id} 
            position={primitive.position} 
            type={primitive.type}
            color={primitive.color}
            isSelected={primitive.isSelected}
          />
        ))
      }
    </div>
  )
}