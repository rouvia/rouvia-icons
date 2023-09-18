import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/caret-right.svg';

const CaretRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CaretRightIcon };
