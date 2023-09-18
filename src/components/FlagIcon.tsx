import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/flag.svg';

const FlagIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FlagIcon };
