import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/link-chain.svg';

const LinkChainIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LinkChainIcon };
