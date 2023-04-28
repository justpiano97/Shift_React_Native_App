import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Control, Controller, FieldValues, UseFormSetValue, useWatch } from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';

import { primary, white } from '../../../utils/constants/color';

type Props = {
  control: Control<FieldValues, any>;
  setValue: UseFormSetValue<FieldValues>;
  name: string;
  styles?: any;
  label: string;
};

const Checkbox: React.FC<Props> = ({ control, name, label, setValue }) => {
  const current = useWatch({
    control,
    name: name,
  });

  return (
    <View key={name} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value = false } }) => (
          <CheckBox tintColors={{ true: primary, false: primary }} value={value} onValueChange={onChange} />
        )}
      />
      <Pressable onPress={() => setValue(name, !current)}>
        <Text style={styles.checkText}>{label}</Text>
      </Pressable>
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
