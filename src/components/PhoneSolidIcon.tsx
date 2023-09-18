import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/phone_solid.svg';

const PhoneSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PhoneSolidIcon };
