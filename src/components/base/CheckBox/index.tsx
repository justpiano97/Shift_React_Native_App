import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { primary, white } from '../../../utils/constants/color';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  control: Control<FieldValues, any>;
  name: string;
  styles?: any;
  label: string;
};

const Checkbox: React.FC<Props> = ({ control, name, label }) => {
  return (
    <View key={name} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value = false } }) => (
          <CheckBox tintColors={{ true: primary, false: primary }} value={value} onValueChange={onChange} />
        )}
      />
      <Text style={styles.checkText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkText: {
    fontSize: 22,
    color: white,
    paddingLeft: 10,
  },
});

export default Checkbox;
