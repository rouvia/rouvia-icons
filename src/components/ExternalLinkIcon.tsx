import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/external-link.svg';

const ExternalLinkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ExternalLinkIcon };
