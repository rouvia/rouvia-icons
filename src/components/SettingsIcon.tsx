import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/settings.svg';

const SettingsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SettingsIcon };
