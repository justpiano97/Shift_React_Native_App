import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';
import { AppRouter } from '../../../../routers/config';
import { dark, primary, white } from '../../../../utils/constants/color';

import Icon from '../../../../components/base/Icon';

type Props = {
  navigation: any;
};

const ShiftRegisterProfile: React.FC<Props> = ({ navigation }) => {
  const { handleSubmit, control } = useForm();

  const [image, setImage] = useState<string>();

  const pickImage = async () => {};

  const onSubmit = (data: FieldValues) => {
    console.log('data: ', data);
    navigation.navigate(AppRouter.Main.Shift, { screen: AppRouter.Shift.Auth.RegisterComplete });
  };
  return (
    <ScrollView style={{ height: '100%', backgroundColor: dark }}>
      <View style={styles.wrapper}>
        <View style={styles.uploadWrapper}>
          <TouchableOpacity style={styles.upload} onPress={() => pickImage()}>
            {image ? (
              <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
            ) : (
              <View style={styles.uploadBtn}>
                <Icon name="User" height={50} width={50} />
                <Text style={{ fontSize: 16, textAlign: 'center' }}>Upload Headshot</Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={{ flex: 1, paddingStart: 20 }}>
            <Text style={styles.text}>
              Be sure to upload your best and latest image so that an employer can see how is turning up.
            </Text>
          </View>
        </View>
        <View style={styles.uploadWrapper}>
          <View style={styles.upload}>
            <View style={styles.uploadBtn}>
              <Icon name="Upload" height={50} width={50} />
              <Text style={{ fontSize: 16, textAlign: 'center' }}>Upload ID Passport or Visa</Text>
            </View>
          </View>
          <View style={{ flex: 1, paddingStart: 20 }}>
            <Text style={styles.text}>
              We need this information to verify your profile and so that an employer knows who is turing up and can pay
              you!
            </Text>
          </View>
        </View>
        <Input control={control} name="crb_number" placeholder="CRM Number (Optional)" />
        <Input control={control} name="bio" placeholder="Shot Bio" multiline />
        <Button styles={{ marginTop: 15 }} onPress={handleSubmit(onSubmit)}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    gap: 10,
  },
  uploadWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  upload: {
    backgroundColor: white,
    height: 160,
    width: 160,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: primary,
    borderRadius: 24,
    overflow: 'hidden',
  },
  uploadBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    gap: 5,
  },
  text: {
    paddingTop: 10,
    color: white,
    fontSize: 16,
  },
});

export default ShiftRegisterProfile;
