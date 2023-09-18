import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cursor_solid.svg';

const CursorSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CursorSolidIcon };
