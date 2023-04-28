import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { dark, primary } from '../../../../../utils/constants/color';
// import ShiftDetailCard from '../../../../../components/_module/ShiftDetailCard';

const ShiftDetail: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  return (
    <View style={styles.wrapper}>
      <View style={styles.navigationWrapper}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            if (currentCard > 0) {
              setCurrentCard((prev) => prev - 1);
            }
          }}
        >
          {/* <Entypo name="chevron-left" color={primary} size={30} /> */}
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            if (currentCard < [...Array(3).keys()].length - 1) {
              setCurrentCard((prev) => prev + 1);
            }
          }}
        >
          <Text style={styles.btnText}>Next</Text>
          {/* <Entypo name="chevron-right" color={primary} size={30} /> */}
        </TouchableOpacity>
      </View>
      {/* {[...Array(3).keys()]
        .filter((item, index) => index === currentCard)
        .map((item) => (
          <ShiftDetailCard key={item} index={item} />
        ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: dark,
    paddingHorizontal: 30,
  },
  navigationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnText: {
    color: primary,
    fontSize: 20,
  },
});

export default ShiftDetail;
