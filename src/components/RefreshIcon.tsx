import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/refresh.svg';

const RefreshIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { RefreshIcon };
