import React, { useState, useMemo } from 'react';
import { noSelectedOption } from '../../../constants/mockdata'
import './select.scss'

const Dropdown = ({ data, defaultValue, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    const { selectedIndex, value} = event.target
    setSelectedOption(value);
    onSelect(options[selectedIndex]);
  };

  const options = useMemo(() => {
    const optionsArray = [...data];
    if (defaultValue) {
      optionsArray.unshift({id: noSelectedOption.id, value: defaultValue});
    }
    return optionsArray;
  }, [data, defaultValue]);

  return (
    <div className='select-wrapper'>
      <select value={selectedOption} onChange={handleDropdownChange}>
        {options?.map(item => {
            return <option key={item.id} value={item.value}>{item.value}</option>
        })}
      </select>
    </div>
  );
};

export default Dropdown;