import { type FC } from 'react';
import { useDispatch } from 'react-redux';
import {Form, ButtonGroup, Button} from '@adobe/react-spectrum';
import { PrimitiveTypeSelect } from '../primitiveTypeSelect/PrimitiveTypeSelect';
import { NumberInput } from '../numberInput/NumberInput';
import { addNewPrimitive } from '../../app/slices/PrimitiveSlice';
import { type PrimitiveDataPayloadType } from '../../app/lib/types';
import './NewPrimitiveForm.css'

interface NewPrimitiveFormProps {
  toggleShow: (isShow: boolean) => void;
}

export const NewPrimitiveForm: FC<NewPrimitiveFormProps> = ({ toggleShow }) => {
  const dispatch = useDispatch();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const type = formData.get('type') === 'pyramid' ? 'pyramid' : 'box';

    const primitiveData: PrimitiveDataPayloadType = {
      type: type,
      width: Number(formData.get('width')) / 100,
      height: Number(formData.get('height')) / 100,
      length: Number(formData.get('length')) / 100
    };

    dispatch(addNewPrimitive({ primitiveData, number:Number(formData.get('number')) }));
    toggleShow(false);
  }

  return (
    <Form onSubmit={onSubmit} margin={0}>
      <h1 className='form__header'>Add primitive group</h1>
      <PrimitiveTypeSelect />

      <NumberInput label='Length' name='length' />
      <NumberInput label='Width' name='width'/>
      <NumberInput label='Height' name='height' />
      <NumberInput 
        label='Number' 
        name='number'
        defaultValue={1} 
        minValue={1} 
        maxValue={10}
      />

      <ButtonGroup UNSAFE_className='custom-button-group'>
        <Button 
          type="reset" 
          variant="primary" 
          onPress={() => toggleShow(false)}
          UNSAFE_className='custom-form__button'
        >
          Cancel
        </Button>
        <Button
          type="submit" 
          variant="primary"
          UNSAFE_className='custom-form__button'
        >
          Ok
        </Button>
      </ButtonGroup>
    </Form>
  );
};