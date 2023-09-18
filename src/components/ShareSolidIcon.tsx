import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/share_solid.svg';

const ShareSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShareSolidIcon };
