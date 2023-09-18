import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/headphones-micro.svg';

const HeadphonesMicroIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HeadphonesMicroIcon };
