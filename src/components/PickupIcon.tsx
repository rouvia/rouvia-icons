import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Pickup.svg';

const PickupIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PickupIcon };
