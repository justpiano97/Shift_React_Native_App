import React from 'react';

import Menu from './svg/barMenu.svg';
import User from './svg/user.svg';
import Upload from './svg/upload.svg';

export type IconType = 'Menu' | 'User' | 'Upload';

type Props = {
  name: IconType;
  height: number;
  width: number;
  color?: string;
};

const Icon: React.FC<Props> = ({ name, height, width, color }) => {
  const icons = { Menu, User, Upload };
  const CurrentIcon = icons[name];
  return <CurrentIcon height={height} width={width} color={color} />;
};

export default Icon;
