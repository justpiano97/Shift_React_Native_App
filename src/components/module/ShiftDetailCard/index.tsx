import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

import Button from '../../base/Button';
import { dark, primary } from '../../../utils/constants/color';

type Props = {
  index?: number;
};

const ShiftDetailCard: React.FC<Props> = ({ index = 0 }) => {
  return (
    <View style={{ backgroundColor: 'white', borderWidth: 2, borderColor: primary, borderRadius: 8, flex: 1 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderColor: primary,
          borderBottomWidth: 2,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: dark, fontSize: 22 }}>{`Bartender ${index + 1}`}</Text>
        <Text style={{ color: dark, fontSize: 22 }}>Bs3 3DG</Text>
      </View>
      <View
        style={{
          padding: 20,
          gap: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={{ height: 100, width: 100, borderRadius: 100 }}
        />
        <View style={{ flex: 1 }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Text style={{ fontSize: 20, color: dark }}>Name:</Text>
            <Text style={{ fontSize: 20, color: dark }}>{`Shift Seeker ${index + 1}`}</Text>
          </View>
          <View style={{ height: '100%', paddingBottom: 25 }}>
            <ScrollView>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignContent: 'center' }}>
                <Text style={{ fontSize: 20, color: dark }}>Rating:</Text>
                <Text>
                  <StarRating rating={1.5} onChange={() => {}} starSize={28} color={primary} />
                </Text>
              </View>
              <View style={{ display: 'flex' }}>
                <Text style={{ fontSize: 20, color: dark }}>Experience:</Text>
                <Text style={{ fontSize: 18, color: dark }}>Bartender</Text>
                <Text style={{ fontSize: 18, color: dark }}>Glass Collecting</Text>
                <Text style={{ fontSize: 18, color: dark }}>Barista</Text>
              </View>
              <View style={{ display: 'flex' }}>
                <Text style={{ fontSize: 20, color: dark }}>Bio:</Text>
                <Text style={{ fontSize: 18, color: dark }}>
                  I have 2 years bar work experience and trusted to work unsupervised.
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <Button styles={{ marginHorizontal: 0 }}>Offer</Button>
      </View>
    </View>
  );
};

export default ShiftDetailCard;
