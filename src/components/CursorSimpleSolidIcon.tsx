import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cursor-simple_solid.svg';

const CursorSimpleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CursorSimpleSolidIcon };
