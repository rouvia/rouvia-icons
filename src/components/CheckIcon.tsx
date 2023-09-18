import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/check.svg';

const CheckIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CheckIcon };
