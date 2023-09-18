import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/thin-arrow-right-down.svg';

const ThinArrowRightDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ThinArrowRightDownIcon };
