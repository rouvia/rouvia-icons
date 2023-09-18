import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cursor.svg';

const CursorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CursorIcon };
