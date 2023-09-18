import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/tag_solid.svg';

const TagSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TagSolidIcon };
