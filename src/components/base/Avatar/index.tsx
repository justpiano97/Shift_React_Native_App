import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors, white } from '../../../utils/constants/color';

type Props = {
  firstName?: string;
  lastName?: string;
  isEmployer?: boolean;
};

const Avatar: React.FC<Props> = ({ firstName, lastName, isEmployer }) => {
  return (
    <View style={styles.container}>
      {firstName || lastName ? (
        <Text style={styles.text}>{`${firstName?.substring(0, 1)}${lastName?.substring(0, 1)}`}</Text>
      ) : (
        <Text style={styles.text}>{isEmployer ? 'EM' : 'SS'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    borderRadius: 100,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: white,
    fontSize: 24,
  },
});

export default Avatar;
