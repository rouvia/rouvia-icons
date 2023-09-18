import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/clipboard.svg';

const ClipboardIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ClipboardIcon };
