import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/copy.svg';

const CopyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CopyIcon };
