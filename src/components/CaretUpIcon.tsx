import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/caret-up.svg';

const CaretUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CaretUpIcon };
