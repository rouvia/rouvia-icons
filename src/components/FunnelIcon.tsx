import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/funnel.svg';

const FunnelIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FunnelIcon };
