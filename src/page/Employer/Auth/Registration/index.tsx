import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';
import Select from '../../../../components/base/Select-aa';
import { AppRouter } from '../../../../routers/config';
import { EmployerRegisterList } from '../../../../utils/constants/user';
import { EmployerRegistrationSchema } from '../../../../utils/schemas';
import { MainStackParamsList } from '../../../../routers';
import { white } from '../../../../utils/constants/color';

const sectorList = [
  { label: 'Hospital', value: 'hospital' },
  { label: 'Retail', value: 'retail' },
  { label: 'Hair and Beauty', value: 'hair_and_beauty' },
  { label: 'Construction', value: 'construction' },
  { label: 'Agriculture', value: 'agriculture' },
  { label: 'Film Production', value: 'film_production' },
  { label: 'Theatre and Cinema', value: 'theatre_and_cinema' },
  { label: 'Courier & Shipping', value: 'courier_shipping' },
  { label: 'Nursing and Care', value: 'Nursing_and_care' },
  { label: 'Other', value: 'other' },
];

const EmployerRegister: React.FC = () => {
  const navigation = useNavigation<MainStackParamsList>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmployerRegistrationSchema) });

  const onSubmit = () => {
    navigation.navigate(AppRouter.Main.Employer, { screen: AppRouter.Employer.Auth.Terms });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#3f3f3f' }}>
      <Text style={styles.title}>Employer Registration</Text>
      <ScrollView
        style={{
          height: '100%',
          paddingHorizontal: 30,
        }}
      >
        <View>
          <View style={styles.inputWrapper}>
            <Select
              control={control}
              name="sector"
              list={sectorList}
              error={errors.sector}
              placeholder="Choose your Sector"
            />
            {EmployerRegisterList?.map((item) => (
              <Input
                key={item?.label}
                placeholder={item.label}
                name={item.name}
                control={control}
                error={errors[item?.name]}
              />
            ))}
          </View>
          <Button onPress={handleSubmit(onSubmit)}>Continue</Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: white,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 19,
    paddingBottom: 30,
  },
});

export default EmployerRegister;
