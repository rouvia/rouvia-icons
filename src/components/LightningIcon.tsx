import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/lightning.svg';

const LightningIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LightningIcon };
