import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-down.svg';

const ThinArrowDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowDownIcon };
