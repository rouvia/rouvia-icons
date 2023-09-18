import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/clipboard_solid.svg';

const ClipboardSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ClipboardSolidIcon };
