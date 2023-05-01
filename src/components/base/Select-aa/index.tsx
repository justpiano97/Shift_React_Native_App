import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';

import { dark, primary, white, whiteGray } from '../../../utils/constants/color';
import Icon from '../Icon';

type Props = {
  list: { [key: string]: string }[];
  control: Control<FieldValues, any>;
  name: string;
  styles?: any;
  error?: any;
  placeholder: string;
};

const Select: React.FC<Props> = ({ list, control, name, styles = {}, error, placeholder }) => {
  return (
    <View style={{ ...styles }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <SelectDropdown
            data={list}
            onSelect={(selectedItem) => {
              onChange(selectedItem.value);
            }}
            buttonStyle={selectStyles.dropdownBtn}
            dropdownStyle={selectStyles.dropdownMenu}
            renderCustomizedButtonChild={(selectedItem) => (
              <View style={selectStyles.dropdownBtnChild}>
                <Text style={selectedItem ? selectStyles.dropdownBtnTxt : selectStyles.dropdownBtnSelectTxt}>
                  {selectedItem ? selectedItem.label : placeholder}
                </Text>
                <Icon name="ChevronDown" size={30} color={primary} />
              </View>
            )}
            renderCustomizedRowChild={(item) => (
              <View>
                <Text style={selectStyles.dropdownRowTxt}>{item.label}</Text>
              </View>
            )}
          />
        )}
      />
      {error && (
        <View style={{}}>
          <Text style={selectStyles.errorText}>{error?.message}</Text>
        </View>
      )}
    </View>
  );
};

const selectStyles = StyleSheet.create({
  dropdownBtn: {
    width: '100%',
    height: 50,
    backgroundColor: white,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: primary,
  },
  dropdownBtnChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  dropdownBtnTxt: {
    color: dark,
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
  },
  dropdownBtnSelectTxt: {
    color: whiteGray,
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
  },
  dropdownMenu: {
    backgroundColor: white,
    borderColor: primary,
    borderWidth: 2,
    borderTopWidth: 2,
    borderRadius: 8,
  },
  dropdownRowTxt: {
    color: dark,
    textAlign: 'center',
    fontSize: 18,
    width: '100%',
  },
  errorText: {
    color: white,
    fontSize: 16,
    paddingStart: 8,
    paddingTop: 2,
  },
});

export default Select;
