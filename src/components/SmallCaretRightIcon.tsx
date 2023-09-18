import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/small-caret-right.svg';

const SmallCaretRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SmallCaretRightIcon };
