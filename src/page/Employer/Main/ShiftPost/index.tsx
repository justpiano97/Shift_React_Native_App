import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Select from '../../../../components/base/Select';
import Button from '../../../../components/base/Button';
import { dark } from '../../../../utils/constants/color';

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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.wrapper}>
      <Select control={control} name="team" list={TeamList} placeholder="Select who to post to" />
      <Select control={control} name="date" list={DateList} placeholder="Date of available shift" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button onPress={showDatePicker}>Open Modal</Button>
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
