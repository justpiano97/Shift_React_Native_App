import React from 'react';
import { useForm } from 'react-hook-form';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { dark, primary, white } from '../../../utils/constants/color';
import Icon from '../Icon';

const MultiSelect: React.FC = () => {
  const { control } = useForm();

  const [selected, setSelected] = React.useState('');

  const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers' },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
  ];

  return (
    <MultipleSelectList
      setSelected={(val: any) => setSelected(val)}
      data={data}
      save="value"
      placeholder="Select who to  post to"
      boxStyles={{ borderRadius: 8, backgroundColor: white, borderColor: primary, borderWidth: 2 }}
      inputStyles={{ fontSize: 16, textAlign: 'center', color: dark }}
      dropdownStyles={{ backgroundColor: white, borderColor: primary, borderWidth: 2 }}
      dropdownTextStyles={{ fontSize: 16 }}
      arrowicon={<Icon name="ChevronDown" size={24} color={primary} />}
      searchicon={<Icon name="Search" size={22} color={primary} />}
      closeicon={<Icon name="Close" size={22} color={primary} />}
      badgeStyles={{ backgroundColor: primary }}
      checkBoxStyles={{ backgroundColor: white, borderColor: primary, width: 20, height: 20 }}
    />
  );
};

export default MultiSelect;
