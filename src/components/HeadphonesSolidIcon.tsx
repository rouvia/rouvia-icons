import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/headphones_solid.svg';

const HeadphonesSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HeadphonesSolidIcon };
