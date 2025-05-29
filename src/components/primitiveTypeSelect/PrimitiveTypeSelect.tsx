import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';
import './PrimitiveTypeSelect.css'

export const PrimitiveTypeSelect = () => {
  return (
    <Select
    name="type"
    defaultSelectedKey="box"
    className="custom-select"
    >
    <Label>Type</Label>
    <Button className="custom-select__button">
      <SelectValue />
    </Button>
    <Popover className="custom-select__popover">
      <ListBox className="custom-select__listbox">
        <ListBoxItem id="box" className="custom-listitem">Box</ListBoxItem>
        <ListBoxItem id="pyramid" className="custom-listitem">Pyramid</ListBoxItem>
      </ListBox>
    </Popover>
    </Select>
  )
}