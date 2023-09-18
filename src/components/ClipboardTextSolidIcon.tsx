import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/clipboard-text_solid.svg';

const ClipboardTextSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ClipboardTextSolidIcon };
