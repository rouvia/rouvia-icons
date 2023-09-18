import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bag-alt.svg';

const BagAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BagAltIcon };
