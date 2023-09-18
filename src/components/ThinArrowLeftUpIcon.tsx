import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-left-up.svg';

const ThinArrowLeftUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowLeftUpIcon };
