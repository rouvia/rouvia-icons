import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/caret-left.svg';

const CaretLeftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CaretLeftIcon };
