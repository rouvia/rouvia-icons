import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-right.svg';

const ThinArrowRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowRightIcon };
