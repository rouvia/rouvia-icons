import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/gift.svg';

const GiftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GiftIcon };
