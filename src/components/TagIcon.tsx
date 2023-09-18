import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/tag.svg';

const TagIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TagIcon };
