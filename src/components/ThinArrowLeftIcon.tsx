import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-left.svg';

const ThinArrowLeftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowLeftIcon };
