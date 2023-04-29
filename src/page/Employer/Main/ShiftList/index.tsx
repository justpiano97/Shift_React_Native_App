import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { dark, white } from '../../../../utils/constants/color';
import Button from '../../../../components/base/Button';
import ShiftCard from '../../../../components/module/ShiftCard';

const ShiftList: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Matched Shitseekers who have said they are available to cover your shift</Text>
      <ScrollView style={{ paddingHorizontal: 30, marginVertical: 20 }}>
        <View style={{ gap: 10 }}>
          {[...Array(3).keys()].map((item, index) => (
            <ShiftCard key={item} index={index} />
          ))}
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 30 }}>
        <Button>Done</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: dark,
  },
  text: {
    color: white,
    fontSize: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
});

export default ShiftList;
