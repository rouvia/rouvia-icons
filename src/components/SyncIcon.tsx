import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sync.svg';

const SyncIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SyncIcon };
