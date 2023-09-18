import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/save.svg';

const SaveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SaveIcon };
