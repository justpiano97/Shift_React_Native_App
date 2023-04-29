import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';

import Select from '../../../../components/base/Select';
import Button from '../../../../components/base/Button';
import { dark, primary, white } from '../../../../utils/constants/color';
import Icon from '../../../../components/base/Icon';

const TeamList = [
  { label: 'Restaurant Team', value: 'restaurantTeam' },
  { label: 'Bar Team', value: 'barTeam' },
  { label: 'Kitchen Team', value: 'kitchenTeam' },
];

const DateList = [
  { label: 'Other', value: 'other' },
  { label: 'Tomorrow', value: 'tomorrow' },
  { label: 'Today', value: 'Today' },
];

const ShitPost: React.FC = () => {
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
    <View style={styles.wrapper}>
      <Select control={control} name="team" list={TeamList} placeholder="Select who to post to" />
      <Select control={control} name="date" list={DateList} placeholder="Date of available shift" />
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
        badgeTextStyles={{}}
      />
      <Button>Open Modal</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: dark,
    flex: 1,
    paddingHorizontal: 30,
    gap: 20,
  },
});

export default ShitPost;
