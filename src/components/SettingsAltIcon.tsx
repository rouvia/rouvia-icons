import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/settings-alt.svg';

const SettingsAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SettingsAltIcon };
