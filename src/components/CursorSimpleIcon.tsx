import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cursor-simple.svg';

const CursorSimpleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CursorSimpleIcon };
