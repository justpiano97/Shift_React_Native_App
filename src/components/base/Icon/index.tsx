import React from 'react';

import ChevronDown from './svg/chevronDown.svg';
import ChevronLeft from './svg/chevronLeft.svg';
import ChevronRight from './svg/chevronRight.svg';
import ChevronUp from './svg/chevronUp.svg';
import Menu from './svg/barMenu.svg';
import Upload from './svg/upload.svg';
import User from './svg/user.svg';
import Search from './svg/search.svg';
import Close from './svg/close.svg';

export type IconType =
  | 'ChevronDown'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'ChevronUp'
  | 'Close'
  | 'Menu'
  | 'Upload'
  | 'User'
  | 'Search';

type Props = {
  name: IconType;
  size?: number;
  color?: string;
  width?: string;
  height?: string;
};

const Icon: React.FC<Props> = ({ name, color, size, height, width }) => {
  const icons = { Menu, User, Upload, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Search, Close };
  const CurrentIcon = icons[name];
  return <CurrentIcon height={height ?? size} width={width ?? size} color={color} />;
};

export default Icon;
