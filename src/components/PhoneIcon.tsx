import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/phone.svg';

const PhoneIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PhoneIcon };
