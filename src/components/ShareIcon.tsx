import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/share.svg';

const ShareIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShareIcon };
