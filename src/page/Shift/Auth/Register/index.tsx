import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

// import Input from '../../../../components/_ui/Input';
import Button from '../../../../components/base/Button';
import { AppRouter } from '../../../../routers/config';
import { MainStackParamsList } from '../../../../routers';
import { ShiftRegistrationSchema } from '../../../../utils/schemas';
import { ShiftSeekerRegisterList } from '../../../../utils/constants/user';
import { dark, white } from '../../../../utils/constants/color';

const ShiftSeekerRegister: React.FC = () => {
  const navigation = useNavigation<MainStackParamsList>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShiftRegistrationSchema) });

  const onSubmit = () => {
    navigation.navigate(AppRouter.Main.Shift, { screen: AppRouter.Shift.Auth.RegisterProfile });
  };

  return (
    <View style={{ flex: 1, backgroundColor: dark }}>
      <Text style={styles.title}>ShiftSeeker Registration</Text>
      <ScrollView style={{ paddingHorizontal: 30 }}>
        <View style={styles.inputWrapper}>
          {/* {ShiftSeekerRegisterList?.map((item) => (
            <Input
              key={item?.label}
              placeholder={item.label}
              control={control}
              name={item.name}
              error={errors[item.name]}
            />
          ))} */}
        </View>
        <Button onPress={handleSubmit(onSubmit)}>Continue</Button>
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
    gap: 10,
    paddingBottom: 20,
  },
});

export default ShiftSeekerRegister;
