import React from 'react';

import Menu from './svg/barMenu.svg';
import User from './svg/user.svg';
import Upload from './svg/upload.svg';
import ChevronUp from './svg/chevronUp.svg';
import ChevronDown from './svg/chevronDown.svg';

export type IconType = 'Menu' | 'User' | 'Upload' | 'ChevronUp' | 'ChevronDown';

type Props = {
  name: IconType;
  size?: number;
  color?: string;
  width?: string;
  height?: string;
};

const Icon: React.FC<Props> = ({ name, color, size, height, width }) => {
  const icons = { Menu, User, Upload, ChevronDown, ChevronUp };
  const CurrentIcon = icons[name];
  return <CurrentIcon height={height ?? size} width={width ?? size} color={color} />;
};

export default Icon;
