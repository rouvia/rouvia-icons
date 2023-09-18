import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/small-caret-up.svg';

const SmallCaretUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SmallCaretUpIcon };
