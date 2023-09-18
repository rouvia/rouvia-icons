import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/small-caret-left.svg';

const SmallCaretLeftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SmallCaretLeftIcon };
