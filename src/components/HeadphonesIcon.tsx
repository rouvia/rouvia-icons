import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/headphones.svg';

const HeadphonesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HeadphonesIcon };
