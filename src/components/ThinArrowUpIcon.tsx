import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-up.svg';

const ThinArrowUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowUpIcon };
