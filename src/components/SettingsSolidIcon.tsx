import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/settings_solid.svg';

const SettingsSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SettingsSolidIcon };
