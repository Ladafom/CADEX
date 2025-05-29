export interface PrimitiveType {
  id: number,
  type: 'box' | 'pyramid',
  width: number,
  height: number,
  length: number,
  position: [number,number,number],
  color: string,
  isSelected:boolean
}

export interface PrimitiveSliceState {
  primitivesData: PrimitiveType[],
  positionSet: string[],
}

export interface addNewPrimitivePayloadType {
  payload: {
    primitiveData: PrimitiveDataPayloadType,
    number: number
  }
}

export interface selectPrimitivePayloadType {
  payload: {
    id:number
  }
}

export type PrimitiveDataPayloadType = Omit<PrimitiveType, 'id' | 'position' | 'color' | 'isSelected'>

export type PrimitiveCardType = Omit<PrimitiveType, 'width' | 'height' | 'length'>