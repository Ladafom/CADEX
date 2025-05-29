import { createSlice } from '@reduxjs/toolkit'
import { generateRandomPosition } from '../../utils/generateRandomPosition'
import { generateRandomColor } from '../../utils/generateRandomColor'
import { 
  type PrimitiveSliceState, 
  type addNewPrimitivePayloadType,
  type selectPrimitivePayloadType
  } from '../lib/types'


const initialState: PrimitiveSliceState = {
  primitivesData: [
    {
      id: 1,
      type: 'box',
      width: 0.5,
      height: 0.5,
      length: 0.5,
      position: [0, 0, 0],
      color:'#4169E1', 
      isSelected:false
    }
  ],
  positionSet: [JSON.stringify([0, 0, 0])],
}

export const PrimitiveSlice = createSlice({
  name: 'primitive',
  initialState,
  reducers: {
    addNewPrimitive: (state, action: addNewPrimitivePayloadType) => {
      for (let i = 0; i < action.payload.number; i++) {

        let id = Date.now() + i;
        let color = generateRandomColor()
        let position: [number,number,number];
        let positionString: string;
        
        let attempts = 0;
        const maxAttempts = 100;
        
        do {
          position = generateRandomPosition();
          positionString = JSON.stringify(position);
          attempts++;
          
          if (attempts >= maxAttempts) {
            throw new Error('Could not find a unique position after maximum attempts');
          }
        } while (state.positionSet.includes(positionString));
        
        state.positionSet.push(positionString);
        
        state.primitivesData.push({
          id,
          ...action.payload.primitiveData,
          position,
          color,
          isSelected: false
        });
      }
    },
    clearAllPrimitives: (state) => {
      state.primitivesData = [];
      state.positionSet = [];
    },
    selectPrimitive:(state, action:selectPrimitivePayloadType)=>{
      state.primitivesData.forEach(primitive => {
        primitive.isSelected = false;
      });
      
      const primitive = state.primitivesData.find(p => p.id === action.payload.id);
      if (primitive) {
        primitive.isSelected = true;
      }
    }
  },
})

export const { clearAllPrimitives, addNewPrimitive, selectPrimitive } = PrimitiveSlice.actions

export default PrimitiveSlice.reducer