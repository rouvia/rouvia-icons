import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-left-down.svg';

const ThinArrowLeftDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowLeftDownIcon };
