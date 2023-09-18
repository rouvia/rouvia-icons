import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/inbox_solid.svg';

const InboxSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { InboxSolidIcon };
