import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/link.svg';

const LinkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LinkIcon };
