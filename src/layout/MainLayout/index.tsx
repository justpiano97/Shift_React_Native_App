import React, { ReactNode } from 'react';
import { View } from 'react-native';

import Header from '../Header';
import { dark } from '../../utils/constants/color';

type Props = {
  children: ReactNode;
  isEmployer?: boolean;
};

const MainLayout: React.FC<Props> = ({ children, isEmployer }) => {
  return (
    <View style={{ height: '100%', paddingBottom: 30, paddingTop: 10, backgroundColor: dark }}>
      <Header isEmployer={isEmployer} />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default MainLayout;
