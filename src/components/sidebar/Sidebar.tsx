import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Button} from 'react-aria-components';
import { NewPrimitiveForm } from '../newPrimitiveForm/NewPrimitiveForm';
import { clearAllPrimitives } from '../../app/slices/PrimitiveSlice';
import './Sidebar.css'
import { PrimitiveCardList } from '../primitiveCardList/primitiveCardList';

export const Sidebar = () => {

  const dispatch = useDispatch()
  const [ isNewPrimitiveForm, setIsNewPrimitiveForm ] = useState<boolean>(false)

  return (
    <div className='sidebar'>
      <PrimitiveCardList/>
      <div className='sidebar__mange-btns'>
        <Button 
          onPress={() => dispatch(clearAllPrimitives())}
          className='custom-sidebar__button'
        >
          Clear scene
        </Button>
        <Button 
          onPress={() => setIsNewPrimitiveForm(true)}
          className='custom-sidebar__button'
        >
          Add group
        </Button>
      </div>
      {
        isNewPrimitiveForm &&
        <div className='sidebar__form'>
          <NewPrimitiveForm toggleShow={setIsNewPrimitiveForm}/>
        </div>
      }
    </div>
  )
}