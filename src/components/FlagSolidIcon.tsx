import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/flag_solid.svg';

const FlagSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FlagSolidIcon };
