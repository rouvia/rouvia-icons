import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/clipboard-text.svg';

const ClipboardTextIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ClipboardTextIcon };
