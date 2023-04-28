import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { dark } from '../../../../utils/constants/color';

const Index: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: dark,
  },
});

export default Index;
